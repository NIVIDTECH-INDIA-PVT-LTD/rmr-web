import React from 'react'
import {
    FlaskConical,
    Car,
    ShoppingCart,
    Cpu,
    ShieldCheck,
    HeartPulse,
    UtensilsCrossed,
    Box,
    MonitorSmartphone
} from "lucide-react";
import IndustryBG from "/public/images/industry.jpg";
import Image from 'next/image';

const industries = [
    {
        id: 1,
        title: "Chemicals & Materials",
        desc: "Global chemical industry has experienced years of strong due diligence activity, as companies pursued growth, restructured their portfolios, and focused on core strategies and competencies.",
        icon: FlaskConical,
    },
    {
        id: 2,
        title: "Automotive & Transportation",
        desc: "Automotive and transportation industry is drastically changing like never before. Digitization, sustainable policies, new technologies, rising automation, and new business models have...",
        icon: Car,
    },
    {
        id: 3,
        title: "Consumer Goods & Services",
        desc: "Global consumer goods and services industry is flourishing, enchanting and competitive. Rising consumerism, and government subsidies are for increase in participation of new companies.",
        icon: ShoppingCart,
    },
    {
        id: 4,
        title: "Electronics & Semiconductors",
        desc: "Electronics and semiconductors industry witnesses high growth, with its evolution by constant technological advances and innovations in recent decades.",
        icon: Cpu,
    },
    {
        id: 5,
        title: "Military & Defence",
        desc: "Industry is projected to witness growth trajectory in near future, led by growing innovation and development and production in commercial aircraft and strong defence spending.",
        icon: ShieldCheck,
    },
    {
        id: 6,
        title: "Healthcare",
        desc: "Major trends in healthcare industry is rise in patients awareness and engagement aging and growing population. Agenda such as financial sustainability.",
        icon: HeartPulse,
    },
    {
        id: 7,
        title: "Food & Beverages",
        desc: "F&B industry is one of the most essential component of several economies across the world, it set trends that impact several ancillary industries.",
        icon: UtensilsCrossed,
    },
    {
        id: 8,
        title: "Packaging",
        desc: "Rise in building & construction activities in majority of the emerging economies primarily in China and India, rapid development in food & beverages industry.",
        icon: Box,
    },
    {
        id: 9,
        title: "IT",
        desc: "Globalization has forced companies to engage in strategic planning in order to grow their businesses and compete in an international marketplace. Dependence on technology.",
        icon: MonitorSmartphone,
    },
];

const Industry = () => {
    return (
        <>
            <div className="flex justify-center">
                <Image
                    src={IndustryBG}
                    alt="Services Background"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>

            <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-24">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#244A77] mb-12 text-center">
                    Industry Verticals
                </h2>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white shadow-md rounded-2xl overflow-hidden border border-[#E0E6EF]"
                    style={{ boxShadow: "0 0 15px 0 rgba(17, 12, 79, .1)" }}
                >
                    {industries.map(({ id, title, desc, icon: Icon }) => (
                        <div
                            key={id}
                            className="group flex flex-col items-center text-center p-6 border-b border-r border-[#E0E6EF] last:border-r-0 lg:last:border-b-0 hover:bg-[#F9FBFF] transition"
                        >
                            {/* Icon with rotation on hover */}
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#244A77]/10 text-[#244A77] mb-4 transform transition-transform duration-700 group-hover:rotate-[360deg]">
                                <Icon size={28} strokeWidth={2} />
                            </div>

                            <a href="#" className="text-lg sm:text-xl font-bold text-[#244A77] hover:text-[#CD4D4A] mb-3">
                                {title}
                            </a>

                            <p className="text-[#5A5A5A] text-sm sm:text-base leading-relaxed">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Industry;
