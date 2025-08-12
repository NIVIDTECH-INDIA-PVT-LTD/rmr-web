import React from "react";
import NewsletterCTA from "./NewsletterCTA";

const Footer = ({
  aboutText = "We are one of the leading organisation in market research, analysis & forecasting and consulting services provider for Fortune 500 companies. Our purpose is to provide essential statistical surveying information for your organization or association to build trust and solve important problems.",

  quickLinks = [
    { label: "About Us", href: "#" },
    { label: "Our Services", href: "#" },
    { label: "Industry Verticals", href: "#" },
    { label: "Trending Reports", href: "#" },
    { label: "Food & Beverages", href: "#" },
    { label: "Market News", href: "#" },
    { label: "Market Tracking", href: "#" },
    { label: "Industry Trends", href: "#" },
  ],

  contactInfo = {
    address: "Kadipur Industrial Area<br />Gurgaon, Haryana",
    phone: "Phone: +91-911-250-7777",
    email: "sales@rootmarketresearch.com",
  },
}) => {
  const midIndex = Math.ceil(quickLinks.length / 2);
  const firstColumnLinks = quickLinks.slice(0, midIndex);
  const secondColumnLinks = quickLinks.slice(midIndex);

  return (
    <div className="relative mt-20 w-full">
      {/* Newsletter CTA */}
      <div className="absolute -top-20 w-full px-4 md:px-24 z-10">
        <NewsletterCTA />
      </div>

      <footer className="w-full bg-[#F3F5F5] pt-64 lg:pt-40 pb-6 px-4 md:px-24 relative z-0">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 space-y-8 md:space-y-0">
          {/* ABOUT RMR */}
          <div>
            <h3 className="font-bold text-[20px] leading-[100%] text-[#244A77] mb-2">
              ABOUT RMR
            </h3>
            <p className="font-figtree font-medium text-[16px] leading-[160%]">
              {aboutText}
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-bold text-[20px] leading-[100%] text-[#244A77] mb-2">
              QUICK LINKS
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <ul className="font-figtree font-medium text-[16px] leading-[32px] space-y-1">
                {firstColumnLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="font-figtree font-medium text-[16px] leading-[32px] space-y-1">
                {secondColumnLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="font-bold text-[20px] leading-[100%] text-[#244A77] mb-2">
              CONTACT INFO
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 font-figtree font-medium text-[16px]">
                <img
                  src="../images/icons/location-icon.svg"
                  alt="Address icon"
                  className="w-5 h-5 mt-1"
                />
                <div
                  dangerouslySetInnerHTML={{ __html: contactInfo.address }}
                />
              </li>
              <li className="flex items-center space-x-2 font-figtree font-medium text-[16px]">
                <img
                  src="../images/icons/phone-icon.svg"
                  alt="Phone icon"
                  className="w-5 h-5"
                />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-2 font-figtree font-medium text-[16px]">
                <img
                  src="../images/icons/email-icon.svg"
                  alt="Email icon"
                  className="w-5 h-5"
                />
                <span>{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-[#747474]" />
        <p className="text-center font-medium text-[16px] leading-[100%]">
          © Copyright 2025 - RMR. All Right Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
