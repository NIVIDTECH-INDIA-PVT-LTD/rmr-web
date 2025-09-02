"use client";
import { useState } from "react";

export default function Tabs({ summaryContent, tableContent }) {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="flex gap-4 border-b border-gray-300 mb-6">
        <button
          className={`px-4 py-2 rounded-t-xl font-semibold ${
            activeTab === "summary"
              ? "bg-[#244A77] text-white"
              : "bg-transparent font-figtree font-semibold text-base leading-[100%] tracking-normal align-middle cursor-pointer text-[#244A77]"
          }`}
          onClick={() => setActiveTab("summary")}
        >
          Summary
        </button>

        <button
          className={`px-4 py-2 rounded-t-xl font-semibold ${
            activeTab === "table"
              ? "bg-[#244A77] text-white"
              : "bg-transparent font-figtree font-semibold text-base leading-[100%] tracking-normal align-middle cursor-pointer text-[#244A77]"
          }`}
          onClick={() => setActiveTab("table")}
        >
          Table of Contents
        </button>

        <button className="px-4 py-2 font-figtree font-semibold text-base leading-[100%] tracking-normal align-middle cursor-pointer text-[#CD4D4A]">
          Download PDF
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white">
        {activeTab === "summary" && <div>{summaryContent}</div>}
        {activeTab === "table" && (
          <div className="overflow-x-auto">{tableContent}</div>
        )}
      </div>
    </div>
  );
}
