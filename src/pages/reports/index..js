"use client";

import { useRouter } from "next/router";
import { Edit, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import AdminLayout from "@/components/layouts/AdminLayout";

export default function ReportsPage() {
  const router = useRouter();
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const savedReports = JSON.parse(localStorage.getItem("reports") || "[]");
    setReports(savedReports);
  }, []);

  // delete
  const handleDelete = (reportToDelete) => {
    const confirmDelete = window.confirm(`Delete report ${reportToDelete.reportId}?`);
    if (confirmDelete) {
      const updated = reports.filter((report) => report.reportId !== reportToDelete.reportId);
      setReports(updated);
      localStorage.setItem("reports", JSON.stringify(updated));
    }
  };

  // Edit
  const handleEdit = (report) => {
    alert("Edit ---- " + report.reportId);
  };

  return (
    <AdminLayout>
      <div className="py-10 h-[70%] max-h-screen overflow-y-auto px-6 pb-10">
        <div className="w-full mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-semibold text-gray-800">Reports</h1>
            <button
              onClick={() => router.push("/reports/addReports")}
              className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              + Add Report
            </button>
          </div>

          <div className="bg-white shadow-md rounded-xl overflow-x-auto">
            <table className="bg-white min-w-full text-sm text-left">
              <thead className="bg-white border-b text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-6 py-3">Published Date</th>
                  <th className="px-6 py-3">Year</th>
                  <th className="px-6 py-3">Report ID</th>
                  <th className="px-6 py-3">Title</th>
                  <th className="px-6 py-3">Tab One</th>
                  <th className="px-6 py-3">Tab Two</th>
                  <th className="px-6 py-3">Featured</th>
                  <th className="px-6 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {reports.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center py-8 text-gray-500">
                      No reports available.
                    </td>
                  </tr>
                ) : (
                  reports.map((report, i) => (
                    <tr key={i} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4">{report.publishedDate}</td>
                      <td className="px-6 py-4">{report.year}</td>
                      <td className="px-6 py-4">{report.reportId}</td>
                      <td className="px-6 py-4">{report.title}</td>
                      <td
                        className="px-6 py-4"
                        dangerouslySetInnerHTML={{
                          __html: report.tabOne.slice(0, 40) + "...",
                        }}
                      />
                      <td
                        className="px-6 py-4"
                        dangerouslySetInnerHTML={{
                          __html: report.tabTwo.slice(0, 40) + "...",
                        }}
                      />
                      <td className="px-6 py-4">{report.featured ? "Yes" : "No"}</td>
                      <td className="px-6 py-4 text-center flex justify-center gap-3">
                        <button
                          onClick={() => handleEdit(report)}
                          className="text-blue-600 cursor-pointer hover:text-blue-800"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(report)}
                          className="text-red-600 cursor-pointer hover:text-red-800"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
