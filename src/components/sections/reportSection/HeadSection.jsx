import React from "react";

const HeadSection = ({ reportTitle, year, id }) => {
  return (
    <div>
      <h1 className="font-figtree font-bold text-[20px] text-[#244A77]">
        {reportTitle}
      </h1>
      <p className="font-figtree font-semibold text-[15px] text-[#636262] mt-4">
        Published Date: Apr, 2024 | Base Year for Estimate: {year} | Report ID:{" "}
        {id}
      </p>
    </div>
  );
};

export default HeadSection;
