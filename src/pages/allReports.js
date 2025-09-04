import Image from 'next/image'
import React, { useState } from 'react'
import ServiceBG from "/public/images/services.jpg";
import ReportsSection from '@/components/sections/ReportsSection';

const AllReports = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
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
      <div className='py-10'>

        <div className="flex justify-center py-6">
          <input
            type="text"
            placeholder="Search reports..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/2 md:w-1/3 px-4 py-2 border rounded-lg shadow-sm border-[#244A77] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <ReportsSection searchQuery={searchQuery} />
      </div>
    </div>
  )
}

export default AllReports
