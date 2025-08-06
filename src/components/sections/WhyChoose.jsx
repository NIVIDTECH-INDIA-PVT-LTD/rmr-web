import Image from "next/image";
import BusinessChartImg from "/public/images/icons/business.png";
import BusinessIcon from "/public/images/icons/top-grow.svg";
import ReportIcon from "/public/images/icons/heroicons-outline_document-report.svg";
import ActionIcon from "/public/images/icons/mdi_report-finance.svg";
import MarketIcon from "/public/images/icons/Grow.svg";

// Dynamic content object
const whyChooseContent = {
  heading: {
    subtitle: "Why Choose RMR",
    title: "12+ years expertise in business \n intelligence",
    description:
      "Our research and consulting services primarily focused to meet clients specific \n requirement in order to explore their practical growth strategies.",
  },
  image: {
    main: BusinessChartImg,
    topLeft: {
      icon: BusinessIcon,
      label: "Business Growth",
      progress: 75,
    },
    bottomRight: {
      icon: MarketIcon,
      text: "Deliver high quality market research report to all industry verticals",
    },
  },
  features: [
    {
      icon: ReportIcon,
      title: "Analyst Report",
      description:
        "Qualified analyst team to collect information, query handling and other support",
    },
    {
      icon: ActionIcon,
      title: "RMR Action",
      description:
        "Dedicated team will regularly connect once or more every two weeks to deliver result",
    },
  ],
  button: {
    label: "LETS WORK TOGETHER",
    link: "#",
  },
};

export default function WhyChoose() {
  return (
    <div className="my-12 py-12 bg-white font-sans">
      <div className="flex flex-col lg:flex-row items-stretch gap-4">
        {/* Left Content */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[100%] max-w-[70%]">
            {/* Background Decorative Icon */}
            <div className="absolute -top-12 -right-12 z-0">
              <Image
                src="/images/icons/bg-grow-icon.png"
                alt="Decorative Grow Icon"
                width={100}
                height={100}
                className="opacity-30"
              />
            </div>

            {/* Main Image */}
            <Image
              src={whyChooseContent.image.main}
              alt="Business Growth"
              className="rounded-lg w-full h-auto object-cover relative z-10"
            />

            {/* Top Left Tag */}
            <div className="absolute -top-8 -left-6 bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-3 w-[220px] z-20">
              <div className="bg-[#244A77] rounded-sm w-[30px] h-[30px] flex items-center justify-center">
                <Image
                  src={whyChooseContent.image.topLeft.icon}
                  alt="icon"
                  className="w-[20px] h-[20px]"
                />
              </div>
              <div className="w-full">
                <p className="font-semibold text-gray-800 text-sm">
                  {whyChooseContent.image.topLeft.label}
                </p>
                <div className="w-full h-1 bg-gray-200 rounded-full mt-1">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{
                      width: `${whyChooseContent.image.topLeft.progress}%`,
                    }}
                  ></div>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full mt-1">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{
                      width: `${whyChooseContent.image.topLeft.progress / 2}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Bottom Right Tag */}
            <div className="absolute -bottom-8 -right-6 bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-3 w-[260px] z-20">
              <Image
                src={whyChooseContent.image.bottomRight.icon}
                alt="icon"
                width={30}
                height={30}
              />
              <p className="text-sm font-medium text-gray-700">
                {whyChooseContent.image.bottomRight.text}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center px-4 lg:px-0">
          <div className="w-full max-w-[90%]">
            {/* Heading */}
            <h4 className="text-[#244A77] text-[20px] font-semibold mb-3">
              {whyChooseContent.heading.subtitle}
            </h4>
            <h2 className="text-[#636262] text-[38px] font-bold whitespace-pre-line leading-tight mb-4">
              {whyChooseContent.heading.title}
            </h2>
            <p className="text-[#5A5A5A] text-[16px] font-medium whitespace-pre-line leading-[1.6] mb-10">
              {whyChooseContent.heading.description}
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {whyChooseContent.features.map((feature, index) => (
                <div className="flex items-start gap-4" key={index}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={32}
                    height={32}
                  />
                  <div>
                    <h5 className="text-[#1A3365] text-sm font-semibold mb-1">
                      {feature.title}
                    </h5>
                    <p className="text-gray-600 text-sm leading-snug">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <a
              href={whyChooseContent.button.link}
              className="bg-[#D94A3F] text-white text-sm font-semibold rounded-full px-6 py-3 hover:bg-red-600 transition-all"
            >
              {whyChooseContent.button.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
