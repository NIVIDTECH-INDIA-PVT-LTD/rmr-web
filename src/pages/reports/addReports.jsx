"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { ArrowLeft } from "lucide-react";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AdminLayout from "@/components/layouts/AdminLayout";

export default function AddReport() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [reportId, setReportId] = useState("");
  const [year, setYear] = useState("");
  const [featured, setFeatured] = useState(false);
  const [tabOneEditorState, setTabOneEditorState] = useState(
    EditorState.createEmpty()
  );
  const [tabTwoEditorState, setTabTwoEditorState] = useState(
    EditorState.createEmpty()
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const tabOneHtml = draftToHtml(
      convertToRaw(tabOneEditorState.getCurrentContent())
    );
    const tabTwoHtml = draftToHtml(
      convertToRaw(tabTwoEditorState.getCurrentContent())
    );

    const newReport = {
      publishedDate: new Date().toISOString().slice(0, 10),
      title,
      year,
      reportId,
      tabOne: tabOneHtml,
      tabTwo: tabTwoHtml,
      featured,
    };

    // Save to localStorage
    const existingReports = JSON.parse(localStorage.getItem("reports") || "[]");
    localStorage.setItem(
      "reports",
      JSON.stringify([...existingReports, newReport])
    );

    router.push("/reports");
  };

  return (
    <AdminLayout>
      <div className="py-10 min-h-screen bg-gray-50 px-6 pb-10">
        <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => router.back()}
              className="p-1 hover:bg-gray-100 cursor-pointer bg-gray-300 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <h1 className="text-2xl font-bold">Add Report</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Report Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border px-4 py-2 rounded-md"
                placeholder="Enter title"
                required
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="font-medium">Featured:</label>
              <button
                type="button"
                onClick={() => setFeatured(!featured)}
                className={`w-14 h-7 flex items-center rounded-full px-1 transition ${
                  featured ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
                    featured ? "translate-x-7" : "translate-x-0"
                  }`}
                />
              </button>
              <span>{featured ? "Yes" : "No"}</span>
            </div>

            <div>
              <label className="block font-medium mb-1">Select Year</label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full border cursor-pointer px-4 py-2 rounded-md"
                required
              >
                <option value="">-- Select Year --</option>
                {Array.from({ length: 10 }, (_, i) => {
                  const y = new Date().getFullYear() - i;
                  return (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Report ID</label>
              <input
                type="text"
                value={reportId}
                onChange={(e) => setReportId(e.target.value)}
                className="w-full border px-4 py-2 rounded-md"
                placeholder="e.g., RPT001"
                required
              />
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Tab One
                </label>
                <div className="border border-gray-300 rounded-lg shadow-sm">
                  <Editor
                    editorState={tabOneEditorState}
                    onEditorStateChange={setTabOneEditorState}
                    wrapperClassName="rounded-lg"
                    editorClassName="p-4 min-h-[150px]"
                    toolbarClassName="border-b border-gray-200 px-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Tab Two
                </label>
                <div className="border border-gray-300 rounded-lg shadow-sm">
                  <Editor
                    editorState={tabTwoEditorState}
                    onEditorStateChange={setTabTwoEditorState}
                    wrapperClassName="rounded-lg"
                    editorClassName="p-4 min-h-[150px]"
                    toolbarClassName="border-b border-gray-200 px-2"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
