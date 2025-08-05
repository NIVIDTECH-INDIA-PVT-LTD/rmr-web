import React from 'react'
import Image from "next/image";
import Blog1 from "/public/images/blog1.png";
import Blog2 from "/public/images/blog2.png";
import Blog3 from "/public/images/blog3.png";

const BlogSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-lg font-semibold text-blue-600 mb-2">Blog</h2>
        <h1 className="text-3xl font-bold text-gray-800 mb-12">Stay Ahead With Our Articles</h1>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Article 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-full h-48 bg-gray-200 mb-4 rounded-lg overflow-hidden">
              {/* Replace with Article 1 image */}
              <Image src={Blog1} alt="5 Essential Strategies" className="w-full h-full object-cover" />
            </div>
            <p className="text-blue-600 text-sm mb-2">20 June 2025</p>
            <h3 className="text-lg font-medium text-gray-900 mb-2">5 Essential Strategies For Consult Sustainable Of Business Growth</h3>
            <a href="#" className="text-red-600 hover:text-red-700 font-medium">LEARN MORE</a>
          </div>

          {/* Article 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-full h-48 bg-gray-200 mb-4 rounded-lg overflow-hidden">
              {/* Replace with Article 2 image */}
              <Image src={Blog2} alt="The Importance For Networking" className="w-full h-full object-cover" />
            </div>
            <p className="text-blue-600 text-sm mb-2">20 June 2025</p>
            <h3 className="text-lg font-medium text-gray-900 mb-2">The Importance For Networking For Business Consulting Success</h3>
            <a href="#" className="text-red-600 hover:text-red-700 font-medium">LEARN MORE</a>
          </div>

          {/* Article 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-full h-48 bg-gray-200 mb-4 rounded-lg overflow-hidden">
              {/* Replace with Article 3 image */}
              <Image src={Blog3} alt="Building For Business Consulting Strategies" className="w-full h-full object-cover" />
            </div>
            <p className="text-blue-600 text-sm mb-2">20 June 2025</p>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Building For Business Consulting Strategies Navigate Uncertainty</h3>
            <a href="#" className="text-red-600 hover:text-red-700 font-medium">LEARN MORE</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection