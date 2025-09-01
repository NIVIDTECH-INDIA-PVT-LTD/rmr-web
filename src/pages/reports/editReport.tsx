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
  const { id } = router.query;
  const fileName = id;

  const [reportId, setRportId] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [featured, setFeatured] = useState(false);
  const [tabOneEditorState, setTabOneEditorState] = useState(EditorState.createEmpty());
  const [tabTwoEditorState, setTabTwoEditorState] = useState(EditorState.createEmpty());
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    axios.get(`/api/reports/${id}`)
      .then(res => {
        const report = res.data;
        setRportId(report.reportId || "");
        setTitle(report.title || "");
        setYear(report.year || "");
        setFeatured(!!report.featured);

        // Existing image preview
        if (report.file) setPreview(report.file);

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
  }, [fileName]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const tabOneHtml = draftToHtml(convertToRaw(tabOneEditorState.getCurrentContent()));
    const tabTwoHtml = draftToHtml(convertToRaw(tabTwoEditorState.getCurrentContent()));

    const formData = new FormData();
    formData.append("reportId", reportId);
    formData.append("title", title);
    formData.append("year", year);
    formData.append("featured", String(featured));
    formData.append("tabOne", tabOneHtml);
    formData.append("tabTwo", tabTwoHtml);
    formData.append("publishedDate", new Date().toISOString().slice(0, 10));

    if (image) {
      formData.append("image", image); // new image
    }

    try {
      await axios.put(`/api/reports/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      router.push("/reports");
    } catch (err) {
        console.log(err.response.data.error);
      setError(`Failed to update report. ${err.response.data.error}`);
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

            {/* Title */}
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full border px-3 py-2 rounded"
              required
            />

            {/* Featured */}
            <div className="flex items-center gap-4">
              <label className="font-medium text-black">Featured:</label>
              <button
                type="button"
                onClick={() => setFeatured(!featured)}
                className={`w-14 h-7 flex items-center text-black rounded-full px-1 transition ${featured ? "bg-green-500" : "bg-gray-300"}`}
              >
                <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${featured ? "translate-x-7" : "translate-x-0"}`} />
              </button>
              <span>{featured ? "Yes" : "No"}</span>
            </div>

            {/* Year */}
            <div>
              <label className="block font-medium mb-1">Select Year</label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full border border-gray-200 cursor-pointer px-4 py-2 text-black rounded-md"
                required
              >
                <option value="">-- Select Year --</option>
                {Array.from({ length: 10 }, (_, i) => {
                  const y = new Date().getFullYear() - i;
                  return (
                    <option key={y} value={y}>{y}</option>
                  );
                })}
              </select>
            </div>

            {/* Report ID */}
            <div>
              <label className="block font-medium mb-1">Report ID</label>
              <input
                type="text"
                value={reportId}
                onChange={(e) => setReportId(e.target.value)}
                className="w-full border border-gray-200 text-black px-4 py-2 rounded-md"
                placeholder="e.g., RPT001"
                required
              />
            </div>

            {/* Image Upload & Preview */}
           <div className="mb-4">
                <label className="block font-medium mb-1">Upload Image</label>
                
                {/* Hidden file input */}
                <input
                    type="file"
                    accept="image/*"
                    id="image-upload"
                    className="hidden"
                    onChange={handleImageChange}
                />

                {/* Custom styled button */}
                <label
                    htmlFor="image-upload"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition"
                >
                    <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16v1a2 2 0 002 2h14a2 2 0 002-2v-1M16 12l-4-4-4 4M12 8v8"
                    />
                    </svg>
                    Choose Image
                </label>

                {/* Preview */}
                {preview && (
                    <img
                    src={preview}
                    alt="Preview"
                    className="mt-2 max-w-xs max-h-40 border rounded"
                    />
                )}
                </div>


            {/* Tab One */}
            <div>
              <label className="block mb-2 font-semibold">Tab One</label>
              <Editor
                editorState={tabOneEditorState}
                onEditorStateChange={setTabOneEditorState}
                wrapperClassName="border rounded"
                editorClassName="px-3 py-2 min-h-[200px]"
              />
            </div>

            {/* Tab Two */}
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
