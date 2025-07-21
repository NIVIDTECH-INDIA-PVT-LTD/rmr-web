import React from 'react'

export const IndustryVerticals = () => {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-700 bg-[url('https://via.placeholder.com/1500x800.png?text=Wave+Pattern')] bg-no-repeat bg-cover py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-white mb-4">What We Do</h1>
        <h2 className="text-2xl font-semibold text-gray-200 mb-12">Industry Verticals</h2>

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Chemicals & Materials */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-white">⚗️</span>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Chemicals & Materials</h3>
            <p className="text-gray-600 text-sm">
              RMR delivers customized research services to address the specific needs of clients. With its existing research capabilities and qualified team
            </p>
          </div>

          {/* Automotive & Transportation */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-white">🚗</span>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Automotive & Transportation</h3>
            <p className="text-gray-600 text-sm">
              Automotive and transportation industry is drastically changing like never before. Digital technologies, sustainable policies, new technologies, rising automation, and new business models have
            </p>
          </div>

          {/* Consumer Goods & Services */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-white">🛍️</span>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Consumer Goods & Services</h3>
            <p className="text-gray-600 text-sm">
              Global consumer goods and services industry is flourishing, enhancing competitiveness. Rising consumerism, government subsidies are for increased participation of new companies
            </p>
          </div>

          {/* Electronics & Semiconductors */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-white">💻</span>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Electronics & Semiconductors</h3>
            <p className="text-gray-600 text-sm">
              Electronics and semiconductors industry witnesses high growth, with its evolution by constant technological advances and innovations in recent decades
            </p>
          </div>

          {/* Military & Defence */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-white">🛡️</span>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Military & Defence</h3>
            <p className="text-gray-600 text-sm">
              Military is projected to witness growth trajectory in near future, led by growing innovation and development and production in commercial aircraft and strong defence spending.
            </p>
          </div>

          {/* Healthcare */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-white">🏥</span>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Healthcare</h3>
            <p className="text-gray-600 text-sm">
              Healthcare industry is rise in major trends in healthcare industry is rise in patients awareness and engagement aging and growing population. Agenda such as financial sustainability
            </p>
          </div>
        </div>

        {/* Load More Button */}
        <div className='flex justify-center text-center'>
        <a href="#" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
          LOAD MORE...
        </a>
        </div>
      </div>
    </section>
  )
}
