import Image from "next/image";
import React, { useEffect, useState } from "react";
import ServiceBG from "/public/images/services.jpg";
import { Search } from "lucide-react";

const AllReports = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch("/api/reports")
      .then((res) => res.json())
      .then(setReports)
      .catch(() => setReports([]));
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // add api or filter
  };

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

        <div className="flex items-center gap-3 justify-start mb-10">
          <div className="relative w-full sm:w-2/3 md:w-full">
            <input
              type="text"
              placeholder="Search reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pr-10 border rounded-lg shadow-sm border-[#244A77] focus:outline-none focus:ring-2 focus:ring-[#244A77]"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#244A77] w-5 h-5" />
          </div>

          <button
            type="button"
            onClick={handleSearch}
            className="px-5 py-2 bg-[#244A77] cursor-pointer text-white font-medium rounded-lg shadow-md hover:bg-[#163657] transition"
          >
            Search
          </button>
        </div>

        <section className="w-full px-4 md:px-24 py-14 bg-white">
          <div className="w-full text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full px-4">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="bg-white p-2 flex flex-col justify-between items-center h-auto"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                      <Image
                        src={report.file}
                        alt={report.title}
                        className="w-full h-full object-cover"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-figtree font-bold text-[18px] text-[#5A5A5A] mb-1">
                        {report.title}
                      </h3>
                    </div>
                  </div>

                  <a
                    href={"/report?id=" + report.title}
                    className="font-figtree font-semibold text-[16px] text-[#CD4D4A] underline mt-4"
                  >
                    View Report
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllReports;
