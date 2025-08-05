'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Edit, Trash2 } from "lucide-react";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then(mod => mod.Editor),
  { ssr: false }
);

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function ReportsPage() {
  const [reports, setReports] = useState([
    {
      publishedDate: "2025-08-05",
      year: "2025",
      reportId: "RPT001",
      tabOne: "Content 1...",
      tabTwo: "Content 2...",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [reportId, setReportId] = useState("");
  const [year, setYear] = useState("");
  const [featured, setFeatured] = useState(false);
  const [tabOneEditorState, setTabOneEditorState] = useState(EditorState.createEmpty());
  const [tabTwoEditorState, setTabTwoEditorState] = useState(EditorState.createEmpty());

  const handleSubmit = (e) => {
    e.preventDefault();

    const tabOneHtml = draftToHtml(convertToRaw(tabOneEditorState.getCurrentContent()));
    const tabTwoHtml = draftToHtml(convertToRaw(tabTwoEditorState.getCurrentContent()));

    const newReport = {
      publishedDate: new Date().toISOString().slice(0, 10),
      year,
      reportId,
      tabOne: tabOneHtml,
      tabTwo: tabTwoHtml,
    };

    setReports(prev => [...prev, newReport]);

    // Reset form
    setTitle("");
    setReportId("");
    setYear("");
    setFeatured(false);
    setTabOneEditorState(EditorState.createEmpty());
    setTabTwoEditorState(EditorState.createEmpty());
    setShowForm(false);
  };

  const handleEdit = (report) => {
    alert("Edit ---- " + report.reportId);
  };

  const handleDelete = (reportToDelete) => {
    const confirmDelete = window.confirm(`Delete report ${reportToDelete.reportId}?`);
    if (confirmDelete) {
      setReports(prev => prev.filter(report => report.reportId !== reportToDelete.reportId));
    }
  };

  return (
    <div className="py-[150px] min-h-screen bg-gray-50 px-6 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Reports</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Add Report
          </button>
        </div>

        {/* Table */}
        <div className="bg-white shadow-md rounded-xl overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Published Date</th>
                <th className="px-6 py-3">Year</th>
                <th className="px-6 py-3">Report ID</th>
                <th className="px-6 py-3">Tab One</th>
                <th className="px-6 py-3">Tab Two</th>
                <th className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">{report.publishedDate}</td>
                  <td className="px-6 py-4">{report.year}</td>
                  <td className="px-6 py-4">{report.reportId}</td>
                  <td className="px-6 py-4">{report.tabOne.slice(0, 40)}...</td>
                  <td className="px-6 py-4">{report.tabTwo.slice(0, 40)}...</td>
                  <td className="px-6 py-4 text-center flex justify-center gap-3">
                    <button onClick={() => handleEdit(report)} className="text-blue-600 cursor-pointer hover:text-blue-800" title="Edit">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => handleDelete(report)} className="text-red-600 cursor-pointer hover:text-red-800" title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-4xl rounded-lg p-6 overflow-y-auto max-h-[90vh]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Add Report</h2>
                <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-black text-xl">✕</button>
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
                    className={`w-14 h-7 flex items-center rounded-full px-1 transition ${featured ? "bg-green-500" : "bg-gray-300"}`}
                  >
                    <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${featured ? "translate-x-7" : "translate-x-0"}`} />
                  </button>
                  <span>{featured ? "Yes" : "No"}</span>
                </div>

                <div>
                  <label className="block font-medium mb-1">Select Year</label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full border px-4 py-2 rounded-md"
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
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Tab One</label>
                    <div className="border border-gray-300 rounded-lg shadow-sm focus-within:ring-1 focus-within:ring-blue-200">
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
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Tab Two</label>
                    <div className="border border-gray-300 rounded-lg shadow-sm focus-within:ring-1 focus-within:ring-blue-200">
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
                  <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
