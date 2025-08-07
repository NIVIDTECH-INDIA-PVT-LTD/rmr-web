import Image from "next/image";
import BackgroundImage from "/public/images/bgtrans.png";
import ImageRight from "/public/images/image.png";
import Icon1 from "/public/images/icons/artical1.png";
import Icon2 from "/public/images/icons/artical2.png";
import Icon3 from "/public/images/icons/artical3.png";
import Arrow from "/public/images/icons/Arow.svg";

const serviceCards = [
  {
    id: "01",
    title: "SYNDICATE MARKET REPORTS",
    description:
      "Root Market Research provides off the rack, syndicated market research studies, covering 50 industries with niche segments.",
    icon: Icon1,
    cardClass: "bg-[#244A77] text-white",
    borderClass: "",
    iconBg: "bg-white",
    lineColor: "border-white",
    textColor: "text-white",
    showArrow: true,
  },
  {
    id: "02",
    title: "CUSTOMIZED MARKET INTELLIGENCE",
    description:
      "RMR delivers customized research services to address the specific needs of clients. With its existing research capabilities and qualified team.",
    icon: Icon2,
    cardClass: "bg-white text-gray-800",
    borderClass: "border border-gray-200",
    iconBg: "bg-[#244A77]",
    lineColor: "border-[#5A5A5A]",
    textColor: "text-gray-600",
    showArrow: false,
  },
  {
    id: "03",
    title: "MARKET TRACKING REPORTS",
    description:
      "RMR tracking study’s purpose is to track meaningful information over time, generating reports every month, empower the identification.",
    icon: Icon3,
    cardClass: "bg-white text-gray-800",
    borderClass: "border border-gray-200",
    iconBg: "bg-[#244A77]",
    lineColor: "border-[#5A5A5A]",
    textColor: "text-gray-600",
    showArrow: false,
  },
];

export default function OurServices() {
  return (
    <div className="py-12 bg-white font-sans relative">
      <div className="absolute inset-0 z-0 bg-[#F3F5F5]"></div>
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundImage}
          alt="Background pattern"
          fill
          className="object-cover opacity-20"
          quality={100}
        />
      </div>

      <section className="relative z-10 mx-auto px-4 md:px-24">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="w-full md:w-1/2">
            <p className="font-figtree font-semibold text-[21px] leading-[100%] text-[#244A77] align-middle mb-1">
              Our Services
            </p>
            <h2 className="font-figtree font-semibold text-[39px] leading-[100%] text-[#636262] align-middle mb-2">
              Leading organization in <br />
              market research service
            </h2>
            <p className="font-figtree font-medium text-[16px] leading-[100%] text-[#5A5A5A] align-middle my-6">
              We are one of the leading organisations in market research,
              analysis & forecasting and consulting services provider for
              Fortune 500 companies. Our purpose is to provide essential
              statistical surveying information for your organization or
              association to build trust and solve important problems.
            </p>
            <button className="bg-[#CD4D4A] text-white font-figtree font-semibold text-[18px] leading-[100%] tracking-[0%] text-center align-middle uppercase py-3 px-6 rounded-full">
              VIEW ALL SERVICES
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg w-full h-80 md:h-96 relative">
              <Image
                src={ImageRight}
                alt="Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className={`rounded-xl p-6 relative hover:shadow-lg transition ${card.cardClass} ${card.borderClass}`}
            >
              <div className="flex items-center justify-between mb-5">
                <div
                  className={`p-2 rounded-full w-10 h-10 flex items-center justify-center ${card.iconBg}`}
                >
                  <Image src={card.icon} alt="Icon" width={20} height={20} />
                </div>
                {card.showArrow && (
                  <Image src={Arrow} alt="Arrow" width={16} height={16} />
                )}
              </div>
              <h3 className="font-figtree font-bold text-[18px] leading-[100%] tracking-[0%] align-middle uppercase mb-3">
                {card.title}
              </h3>
              <p className={`font-figtree font-medium text-[16px] leading-[100%] tracking-[0%] align-middle ${card.textColor}`}>
                {card.description}
              </p>
              <div className="mt-6 flex items-center gap-2">
                <div className={`w-[30%] border-t ${card.lineColor}`}></div>
                <p className={`text-sm font-medium ${card.textColor}`}>
                  {card.id}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
