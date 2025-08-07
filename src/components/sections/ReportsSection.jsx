import Image from "next/image";
import WTM from "../../../public/images/icons/water-treatment-image.png";
import Mask from "../../../public/images/icons/Mask group.png";
import Lithium from "../../../public/images/icons/Lithium-Ion.png";
import Bioplastic from "../../../public/images/icons/Bioplastic .png";

const reports = [
  {
    id: 1,
    image: WTM,
    titleLine1: "Water Treatment",
    titleLine2: "Chemicals Market",
    link: "#",
  },
  {
    id: 2,
    image: Mask,
    titleLine1: "Biofuel Market",
    titleLine2: "",
    link: "#",
  },
  {
    id: 3,
    image: Bioplastic,
    titleLine1: "Lithium-Ion Battery",
    titleLine2: "Market",
    link: "#",
  },
  {
    id: 4,
    image: Lithium,
    titleLine1: "Bioplastic Packaging",
    titleLine2: "Market",
    link: "#",
  },
];

export default function ReportsSection() {
  return (
    <section className="w-full px-4 md:px-24 py-14 bg-white">
      <div className="w-full text-center">
        <h1 className="font-figtree font-semibold text-[21px] leading-[100%] tracking-[0%] align-middle text-[#244A77] mb-2">Reports</h1>

        <h2 className="font-figtree font-semibold text-[39px] leading-[100%] tracking-[0%] align-middle text-[#636262] mb-4">
          Our Top Reports
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full px-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="bg-white p-2 flex flex-col justify-between items-center h-auto"
            >
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <Image
                    src={report.image}
                    alt={report.titleLine1}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-figtree font-bold text-[18px] leading-[100%] tracking-[0%] align-middle text-[#5A5A5A] mb-1">
                    {report.titleLine1}
                  </h3>
                  {report.titleLine2 && (
                    <h4 className="font-figtree font-bold text-[18px] leading-[100%] tracking-[0%] align-middle text-[#5A5A5A]">
                      {report.titleLine2}
                    </h4>
                  )}
                </div>
              </div>

              <a
                href={report.link}
                className="font-figtree font-semibold text-[16px] leading-[100%] tracking-[0%] align-middle text-[#CD4D4A] underline decoration-solid underline-offset-[0%] decoration-[0%] mt-4"
              >
                View Report
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
