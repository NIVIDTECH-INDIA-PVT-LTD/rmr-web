import React from "react";
import Image from "next/image";
import MarketDriversBarChart from "./MarketDriversBarChart";

const KeyDriversSection = () => {
  const drivers = [
    {
      title: "Rising Demand in Food and Beverage Industry",
      description:
        "Sorbitan esters are widely used as emulsifiers, stabilizers, and texturizing agents in processed foods, dairy, and bakery products. Growing demand for convenient and packaged foods boosts adoption.",
    },
    {
      title: "Expansion in Cosmetics and Personal Care",
      description:
        "Increasing demand for lotions, creams, shampoos, and makeup products is driving usage of sorbitan esters for emulsification, texture improvement, and enhanced skin compatibility.",
    },
    {
      title: "Shift Towards Vegan and Plant-Based Products",
      description:
        "Consumers are shifting toward vegan-friendly and plant-based ingredients, pushing manufacturers to adopt non-animal origin sorbitan esters in formulations.",
    },
    {
      title: "Sustainable and Green Chemistry Innovations",
      description:
        "Environmental awareness and regulations are encouraging industries to focus on bio-based, eco-friendly production of sorbitan esters.",
    },
    {
      title: "Advanced Emulsification Technologies",
      description:
        "New emulsification methods are improving product stability and broadening applications in food, pharma, and cosmetics sectors.",
    },
    {
      title: "Regulatory Compliance and Clean-Label Demand",
      description:
        "Consumers prefer clean-label products with safe, approved ingredients, driving compliance and higher adoption of sorbitan esters.",
    },
    {
      title: "Technological Innovations in Manufacturing and Supply Chain",
      description:
        "Automation and efficient production methods are lowering costs and ensuring consistent quality in large-scale manufacturing.",
    },
    {
      title: "Expansion in Emerging Markets",
      description:
        "Rapid urbanization and growing middle-class populations in Asia-Pacific and Latin America are fueling demand in food and personal care sectors.",
    },
  ];

  return (
    <section className="mt-10">
      <h2 className="font-figtree font-bold text-[16px] leading-[16px] tracking-normal text-[#244A77] mb-4">
        Key Market Drivers
      </h2>

      <div className="space-y-5">
        <ul className="list-none">
          {drivers.map((item, i) => (
            <li key={i} className="flex gap-2 pb-4">
              <span className="w-2 h-2 mt-2 flex-shrink-0 bg-[#244A77] rounded-full"></span>
              <p className="text-[16px] leading-[20px] flex-1">
                <span className="font-figtree font-bold text-[16px] leading-[20px] text-[#244A77]">
                  {item.title}:{" "}
                </span>
                <span className="font-figtree font-medium text-[16px] leading-[20px] text-[#5A5A5A]">
                  {item.description}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 w-full max-w-3xl mx-auto flex justify-center">

        {/* <MarketDriversBarChart/> */}

        <Image
          src="/images/market.png"
          alt="Market Drivers Chart"
          width={700}
          height={320}
          className="rounded-lg shadow object-contain"
        />
      </div>
    </section>
  );
};

export default KeyDriversSection;
