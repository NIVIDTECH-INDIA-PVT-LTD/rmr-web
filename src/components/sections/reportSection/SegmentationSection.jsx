import Image from "next/image";

export default function SegmentationSection() {
  const productType = [
    "Sorbitan Monostearate: Dominated the market with a valuation exceeding USD XX million in 2024, projected to grow at 6.2% CAGR through 2030. Its widespread use as a dough conditioner in bakery products and in producing whipped toppings and icings drives its demand .",
    "Sorbitan Tristearate: Expected to hold a dominant share of 4.8% of the total sorbitan esters market by 2030, primarily due to its application in chocolate formulations to reduce viscosity and improve texture .",
  ];

  const form = [
    "Liquid: Preferred for its ease of use and versatility, particularly in food and beverage applications where it improves texture and consistency. Liquid sorbitan esters dominate the form segment due to their easy use and versatility .",
    "Solid: Valued at approximately USD XX million in 2024, with expected growth around 3.1% during the forecast period. Solid forms are utilized in various industrial applications",
  ];

  return (
    <section>
      <h2 className="font-figtree font-bold text-[16px] leading-[16px] tracking-normal align-middle text-[#244A77] mb-6">
        Market Segmentation
      </h2>

      {/* Product Type */}
      <h3 className="font-figtree font-bold text-[16px] leading-[16px] tracking-normal align-middle text-[#244A77] mb-4">
        By Product Type:
      </h3>
      <ul className="list-none font-figtree font-medium text-[16px] leading-[20px] tracking-normal align-bottom text-[#5A5A5A] space-y-2">
        {productType.map((item, i) => (
          <li key={i} className="relative pl-6">
            <span className="absolute left-0 top-0.5 w-3 h-3 border-2 border-[#244A77] rounded-full bg-transparent"></span>
            {item}
          </li>
        ))}
      </ul>

      {/* Form */}
      <h3 className="font-figtree font-bold text-[16px] leading-[16px] tracking-normal align-middle text-[#244A77] mt-6 mb-4">
        By Form:
      </h3>
      <ul className="list-none font-figtree font-medium text-[16px] leading-[20px] tracking-normal align-bottom text-[#5A5A5A] space-y-2">
        {form.map((item, i) => (
          <li key={i} className="relative pl-6">
            <span className="absolute left-0 top-0.5 w-3 h-3 border-2 border-[#244A77] rounded-full bg-transparent"></span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 w-full max-w-4xl mx-auto flex justify-center">
        <Image
          src="/images/Market-Share.png"
          alt="Market Drivers Chart"
          width={500}
          height={350}
          className="rounded-lg shadow object-contain"
        />
      </div>
    </section>
  );
}
