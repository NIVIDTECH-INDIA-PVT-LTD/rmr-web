import Image from "next/image";
import React, { useState } from "react";
import ServiceBG from "/public/images/services.jpg";
import ReportsSection from "@/components/sections/ReportsSection";
import { Search } from "lucide-react";

const AllReports = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full px-0 py-20 md:py-0 md:px-0">
      <div className="flex justify-center">
        <Image
          src={ServiceBG}
          alt="Services Background"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <div className="py-10 px-4 md:px-24">
        <h1 className="text-[32px] md:text-[39px] text-start font-bold leading-[100%] text-[#244A77] mb-12">
          All Reports
        </h1>

        <div className="flex justify-start mb-10">
          <div className="relative w-full sm:w-2/3 md:w-full">
            <input
              type="text"
              placeholder="Search reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pr-10 border rounded-lg shadow-sm border-[#244A77] focus:outline-none focus:ring-2 focus:ring-[#244A77]"
            />
            <button></button>
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#244A77] w-5 h-5 cursor-pointer" />
          </div>
        </div>

        <ReportsSection showHeading={false} searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default AllReports;
