import Image from "next/image";
import BusinessChartImg from "/public/images/icons/business.png";
import BusinessIcon from "/public/images/icons/business.png";
import ReportIcon from "/public/images/icons/business.png";
import ActionIcon from "/public/images/icons/business.png";
import MarketIcon from "/public/images/icons/business.png";

export default function WhyChoose() {
  return (
    <div className="my-12 py-12 bg-white font-sans">
      <div className="flex flex-col lg:flex-row items-stretch gap-4">
        {/* Left Content */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-[100%] max-w-[70%]">
            {/* Main Image */}
            <Image
              src={BusinessChartImg}
              alt="Business Growth"
              className="rounded-lg w-full h-auto object-cover"
            />

            {/* Top Right Overlay Image */}
            <Image
              src={BusinessChartImg}
              alt="Overlay"
              width={90}
              height={90}
              className="absolute -top-10 -right-10 z-10"
            />

            {/* Top Left Tag */}
            <div className="absolute -top-8 -left-6 bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-3 w-[220px]">
              <Image src={BusinessIcon} alt="icon" width={30} height={30} />
              <div>
                <p className="font-semibold text-gray-800">Business Growth</p>
                <div className="w-full h-1 bg-gray-200 rounded-full mt-1">
                  <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Bottom Right Tag */}
            <div className="absolute -bottom-8 -right-6 bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-3 w-[260px]">
              <Image src={MarketIcon} alt="icon" width={30} height={30} />
              <p className="text-sm font-medium text-gray-700">
                Deliver high quality market research report to all industry
                verticals
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <h4 className="font-[Figtree] mb-4 font-semibold text-[21px] leading-[100%] tracking-[0] align-middle text-[#244A77]">
            Why Choose RMR
          </h4>
          <h2 className="font-[Figtree] font-semibold text-[39px] leading-[100%] tracking-[0] align-middle text-[#636262]">
            12+ years expertise in business <br /> intelligence
          </h2>
          <p className="font-[Figtree] font-medium text-[16px] mt-4 leading-[100%] tracking-[0] align-middle text-[#5A5A5A] mb-8">
            Our research and consulting services primarily focused to meet
            clients specific <br /> requirement in order to explore their practical
            growth strategies.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <Image src={ReportIcon} alt="Report" width={28} height={28} />
              <div>
                <h4 className="font-semibold text-[#1A3365] text-sm">
                  Analyst Report
                </h4>
                <p className="text-gray-600 text-sm">
                  Qualified analyst team to collect information, query handling
                  and other support
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Image src={ActionIcon} alt="Action" width={28} height={28} />
              <div>
                <h4 className="font-semibold text-[#1A3365] text-sm">
                  RMR Action
                </h4>
                <p className="text-gray-600 text-sm">
                  Dedicated team will regularly connect once or more every two
                  weeks to deliver result
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="bg-[#D94A3F] text-white text-sm font-semibold rounded-full px-6 py-3 hover:bg-red-600 transition-all">
            LETS WORK TOGETHER
          </button>
        </div>
      </div>
    </div>
  );
}
