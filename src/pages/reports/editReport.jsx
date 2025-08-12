"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AdminLayout from "@/components/layouts/AdminLayout";
import { ArrowLeft } from "lucide-react";
import axios from "axios";


// Dynamically load Editor so it only renders on client
const Editor = dynamic(
    () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
    { ssr: false }
);

export default function EditReport() {
    const router = useRouter();
    const { reportId } = router.query;

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [featured, setFeatured] = useState(false);
    const [tabOneEditorState, setTabOneEditorState] = useState(EditorState.createEmpty());
    const [tabTwoEditorState, setTabTwoEditorState] = useState(EditorState.createEmpty());
    const [error, setError] = useState("");

    useEffect(() => {
        if (!reportId) return;

        axios.get(`/api/reports/${reportId}`)
            .then(res => {
                const report = res.data;
                setTitle(report.title || "");
                setYear(report.year || "");
                setFeatured(!!report.featured);

                // Import html-to-draftjs only in browser
                const htmlToDraft = require("html-to-draftjs").default;

                // Tab One
                if (report.tabOne) {
                    const tabOneBlocks = htmlToDraft(report.tabOne);
                    const tabOneContentState = ContentState.createFromBlockArray(
                        tabOneBlocks.contentBlocks,
                        tabOneBlocks.entityMap
                    );
                    setTabOneEditorState(EditorState.createWithContent(tabOneContentState));
                }

                // Tab Two
                if (report.tabTwo) {
                    const tabTwoBlocks = htmlToDraft(report.tabTwo);
                    const tabTwoContentState = ContentState.createFromBlockArray(
                        tabTwoBlocks.contentBlocks,
                        tabTwoBlocks.entityMap
                    );
                    setTabTwoEditorState(EditorState.createWithContent(tabTwoContentState));
                }
            })
            .catch(() => setError("Failed to load report."));
    }, [reportId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const tabOneHtml = draftToHtml(convertToRaw(tabOneEditorState.getCurrentContent()));
        const tabTwoHtml = draftToHtml(convertToRaw(tabTwoEditorState.getCurrentContent()));

        const updatedReport = {
            reportId,
            title,
            year,
            featured,
            tabOne: tabOneHtml,
            tabTwo: tabTwoHtml,
            publishedDate: new Date().toISOString().slice(0, 10),
        };

        try {
            await axios.put(`/api/reports/${reportId}`, updatedReport);
            router.push("/reports");
        } catch (err) {
            setError("Failed to update report.");
        }
    };

    return (
        <AdminLayout>
            <div className="h-[90%] max-h-screen overflow-y-auto pb-10">
                <div className="w-full mx-auto bg-white shadow rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <button
                            onClick={() => router.back()}
                            className="p-1 hover:bg-gray-100 cursor-pointer bg-gray-300 rounded-full"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <h1 className="text-2xl font-bold text-black">Edit Report</h1>
                    </div>
                    {error && <div className="text-red-600 mb-4">{error}</div>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Title"
                            className="w-full border px-3 py-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            value={year}
                            onChange={e => setYear(e.target.value)}
                            placeholder="Year"
                            className="w-full border px-3 py-2 rounded"
                            required
                        />
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={featured}
                                onChange={e => setFeatured(e.target.checked)}
                            />
                            Featured
                        </label>
                        <div>
                            <label className="block mb-2 font-semibold">Tab One</label>
                            <Editor
                                editorState={tabOneEditorState}
                                onEditorStateChange={setTabOneEditorState}
                                wrapperClassName="border rounded"
                                editorClassName="px-3 py-2 min-h-[200px]"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">Tab Two</label>
                            <Editor
                                editorState={tabTwoEditorState}
                                onEditorStateChange={setTabTwoEditorState}
                                wrapperClassName="border rounded"
                                editorClassName="px-3 py-2 min-h-[200px]"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Update Report
                        </button>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
