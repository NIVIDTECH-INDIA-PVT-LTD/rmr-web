import React from "react";
import Tabs from "./Tabs";

const HeadSection = () => {
  return (
    <div className="grid grid-cols-12 gap-4 items-start">
      {/* Left Section */}
      <div className="col-span-12 md:col-span-8">
        <h1 className="font-figtree font-bold text-[20px] leading-[100%] tracking-normal align-middle text-[#244A77]">
          Sorbitan Esters Market Size, Share & Forecast Analysis (2025–2030) –{" "}
          <br />
          By Value (USD Million) & Volume (Tons)
        </h1>
        <p className="font-figtree font-semibold text-[15px] leading-[100%] tracking-normal align-middle text-[#636262] mt-4">
          Published Date: Apr, 2024 | Base Year for Estimate: 2019 | Report ID:
          RMR-I-1102-116
        </p>

        <div className="mt-6">
          <Tabs />
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-12 md:col-span-4 flex p-8 flex-col gap-2 w-full bg-[#F6FAFF] rounded-xl">
        <button className="w-full px-4 py-4 cursor-pointer rounded-lg bg-[#244A77] text-white font-figtree font-semibold text-[17px] leading-[20px] tracking-normal">
          Request Free Sample
        </button>

        <button className="w-full px-4 py-4 cursor-pointer rounded-lg bg-[#CD4D4A] text-white font-figtree font-bold text-[17px] leading-[20px] tracking-normal">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default HeadSection;
