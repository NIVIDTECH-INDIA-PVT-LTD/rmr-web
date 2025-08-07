import Image from "next/image";
import BusinessChartImg from "/public/images/icons/business.png";
import BusinessIcon from "/public/images/icons/top-grow.svg";
import ReportIcon from "/public/images/icons/heroicons-outline_document-report.svg";
import ActionIcon from "/public/images/icons/mdi_report-finance.svg";
import MarketIcon from "/public/images/icons/Grow.svg";

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
    <div className="my-8 py-8 sm:my-10 sm:py-10 lg:my-12 lg:py-12 bg-white font-sans">
      <div className="flex flex-col lg:flex-row items-stretch gap-8 sm:gap-10 lg:gap-4 px-4 sm:px-6 lg:px-0">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
            <div className="absolute -top-10 -right-10 sm:-top-12 sm:-right-12 z-0">
              <Image
                src="/images/icons/bg-grow-icon.png"
                alt="Decorative Grow Icon"
                width={100}
                height={100}
                className="opacity-30"
              />
            </div>

            <Image
              src={whyChooseContent.image.main}
              alt="Business Growth"
              className="rounded-lg w-full h-auto object-cover relative z-10"
            />

            <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 bg-white rounded-xl shadow-md px-3 sm:px-4 py-3 flex items-center gap-3 w-[90%] sm:w-[220px] z-20">
              <div className="bg-[#244A77] rounded-sm w-[30px] h-[30px] flex items-center justify-center">
                <Image
                  src={whyChooseContent.image.topLeft.icon}
                  alt="icon"
                  className="w-[20px] h-[20px]"
                />
              </div>
              <div className="w-full">
                <p className="font-figtree font-semibold text-[16px] sm:text-[17px] leading-[100%] text-[#636262]">
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

            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-white rounded-xl px-4 py-3 flex flex-col items-start gap-2 w-[90%] sm:w-[300px] z-20">
              <Image
                src={whyChooseContent.image.bottomRight.icon}
                alt="icon"
                width={30}
                height={30}
              />
              <p className="font-figtree font-semibold text-[16px] sm:text-[17px] leading-[100%] text-[#636262]">
                {whyChooseContent.image.bottomRight.text}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center px-0">
          <div className="w-full max-w-[100%] sm:max-w-[90%]">
            <h4 className="font-semibold text-[18px] sm:text-[21px] leading-[100%] text-[#244A77] mb-3">
              {whyChooseContent.heading.subtitle}
            </h4>
            <h2 className="text-[#636262] text-[28px] sm:text-[34px] lg:text-[39px] font-bold whitespace-pre-line leading-tight mb-4">
              {whyChooseContent.heading.title}
            </h2>
            <p className="text-[#5A5A5A] text-[15px] sm:text-[16px] font-medium whitespace-pre-line leading-[1.6] mb-8 sm:mb-10">
              {whyChooseContent.heading.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 sm:mb-10">
              {whyChooseContent.features.map((feature, index) => (
                <div className="flex items-start gap-4" key={index}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={32}
                    height={32}
                  />
                  <div>
                    <h5 className="text-[#244A77] font-semibold text-[17px] sm:text-[18px] mb-1">
                      {feature.title}
                    </h5>
                    <p className="text-[#5A5A5A] font-medium text-[15px] sm:text-[16px] leading-[100%]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={whyChooseContent.button.link}
              className="bg-[#CD4D4A] text-white rounded-full px-6 py-3 font-semibold text-[16px] sm:text-[18px] uppercase text-center block w-fit"
            >
              {whyChooseContent.button.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
