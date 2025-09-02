import React from "react";
import { Check, ChevronRight } from "lucide-react";
import ServiceBG from "/public/images/services.jpg";
import Image from "next/image";

const Services = () => {
    const serviceCards = [
        {
            id: 1,
            title: "Syndicate Market Reports",
            desc: "Root Market Research provides off the rack, syndicated market research studies, covering 50 industries with niche segments.",
        },
        {
            id: 2,
            title: "Customized Market Intelligence",
            desc: "RMR delivers customized research services to address the specific needs of clients. With its existing research capabilities and qualified team.",
        },
        {
            id: 3,
            title: "Market Tracking Reports",
            desc: "RMR tracking study’s purpose is to track meaningful information over time, generating reports every month, empower the identification.",
        },
        {
            id: 4,
            title: "Industry Trends",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            id: 5,
            title: "Market News",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
    ];

    const verticals = [
        "Chemicals and Materials",
        "Automotive & Transportation",
        "Consumer Goods & Services",
        "Electronics & Semiconductors",
        "Military & Defence",
        "Healthcare",
        "Food & Beverages",
        "Packaging",
        "Information and Telecommunication",
    ];

    return (
        <>
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

                <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 lg:px-24 bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#244A77] mb-6 sm:mb-8">
                                Our Services
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10">
                                {serviceCards.map((card) => (
                                    <div
                                        key={card.id}
                                        className="bg-white p-5 sm:p-4 text-center transition duration-300 hover:shadow-md rounded-xl"
                                    >
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-200 text-[#244A77]">
                                            <Check size={30} strokeWidth={4.5} />
                                        </div>
                                        <a
                                            href="#"
                                            className="text-lg sm:text-xl hover:text-[#CD4D4A] font-bold text-[#244A77] mb-2 block"
                                        >
                                            {card.title}
                                        </a>
                                        <p className="text-[#5A5A5A] text-sm sm:text-base lg:text-[15px] font-medium leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#F6FAFF] w-full rounded-2xl px-5 sm:px-6 py-8 sm:py-10 shadow-[0_0_15px_rgba(17,12,79,0.1)]">
                            <h3 className="text-lg sm:text-xl font-bold text-[#244A77] border-b border-b-[#244A77] pb-4 mb-2 sm:mb-2">
                                Industry Verticals
                            </h3>
                            <ul className="divide-y divide-[#244A77]/30">
                                {verticals.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2 py-4 text-[#5A5A5A] text-sm sm:text-base hover:text-[#244A77] transition cursor-pointer"
                                    >
                                        <ChevronRight size={20} className="text-[#244A77]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="border-t border-t-[#244A77] pt-6">
                                <button className="w-full bg-[#244A77] text-white font-semibold py-2.5 sm:py-3 rounded-lg hover:bg-blue-900 transition-colors">
                                    Download Free Sample
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Services;
