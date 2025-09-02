import Link from "next/link";
import React from "react";

export default function IndustryVerticalsSection() {
  const verticals = [
    { name: "Chemicals and Materials", link: "/report" },
    { name: "Automotive & Transportation", link: "/report" },
    { name: "Consumer Goods & Services", link: "/report" },
    { name: "Electronics & Semiconductors", link: "/report" },
    { name: "Military & Defence", link: "/report" },
    { name: "Healthcare", link: "/report" },
    { name: "Food & Beverages", link: "/report" },
    { name: "Packaging", link: "/report" },
    { name: "Information and Telecommunication", link: "/report" },
  ];

  return (
    <section className="h-full flex flex-col mt-6">
      
      {/* Heading */}
      <div className="p-8 gap-2 w-full bg-[#F6FAFF] rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Industry Verticals
        </h2>

        {/* List */}
        <ul className="space-y-4 flex-1">
          {verticals.map(({ name, link }, i) => (
            <li key={i}>
              <Link
                href={link}
                className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
              >
                <span className="w-1 h-1 bg-[#636262] rounded-full flex-shrink-0"></span>
                <span className="font-figtree font-semibold text-[16px] text-[#636262] underline">
                  {name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
