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
    address: "ⓘ Gurgaon Industrial Area, Gurgaon, Haryana",
    phone: "📞 Phone: +91-911-250-7777",
    email: "✉️ sales@rootmarketresearch.com",
  },
}) => {
  // Split quickLinks into two columns
  const midIndex = Math.ceil(quickLinks.length / 2);
  const firstColumnLinks = quickLinks.slice(0, midIndex);
  const secondColumnLinks = quickLinks.slice(midIndex);

  return (
    <div className="relative mt-20 w-full">
      {/* Newsletter - half out of footer */}
      <div className="absolute -top-20 w-full px-30 z-10">
        <NewsletterCTA />
      </div>

      {/* Full-width footer */}
      <footer className="w-full bg-gray-200 pt-30 pb-4 px-4 md:px-30 relative z-0">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* About RMR */}
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              ABOUT RMR
            </h3>
            <p className="text-gray-600 text-sm">{aboutText}</p>
          </div>

          {/* Quick Links (Dynamic in 2 columns) */}
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              QUICK LINKS
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <ul className="text-gray-600 text-sm space-y-2">
                {firstColumnLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="text-gray-600 text-sm space-y-2">
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

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              CONTACT INFO
            </h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>{contactInfo.address}</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.email}</li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-400" />
        <p className="text-center text-gray-600 text-sm">
          © Copyright 2025 - RMR. All Right Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
