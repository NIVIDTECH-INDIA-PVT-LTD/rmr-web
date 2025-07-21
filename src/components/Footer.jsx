import React from 'react';
import NewsletterCTA from './NewsletterCTA';

const Footer = () => {
  return (
    <div className="relative mt-20">
      
      {/* Newsletter - half out of footer */}
      <div className="absolute -top-20 w-full z-10">
        <NewsletterCTA />
      </div>

      {/* Actual Footer */}
      <footer className="bg-gray-200 py-20 px-4 relative z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About RMR */}
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">ABOUT RMR</h3>
            <p className="text-gray-600 text-sm">
              We are one of the leading organisation in market research, analysis & forecasting and consulting services provider for Fortune 500 companies. Our purpose is to provide essential statistical surveying information for your organization or association to build trust and solve important problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">QUICK LINKS</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Industry Verticals</li>
              <li>Trending Reports</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">CONTACT INFO</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>ⓘ Gurgaon Industrial Area, Gurgaon, Haryana</li>
              <li>📞 Phone: +91-911-250-7777</li>
              <li>✉️ sales@rootmarketresearch.com</li>
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
