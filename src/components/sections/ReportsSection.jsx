export default function ReportsSection() {
  return (
    <section className="px-4 py-14 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-gray-600 mb-2">Reports</h1>
        
        {/* Sub Heading */}
        <h2 className="text-xl font-semibold text-gray-500 mb-10">Our Top Reports</h2>
        
        {/* Reports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Report Card 1 */}
          <div className="p-6 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              {/* Replace with Water Treatment Chemicals Market image */}
              <img src="water-treatment-image.jpg" alt="Water Treatment Chemicals Market" className="w-full h-full object-cover" />
            </div>
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">Water Treatment</h3>
              <h4 className="text-lg font-medium text-gray-900">Chemicals Market</h4>
            </div>
            <a href="#" className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md text-center">
              View Report
            </a>
          </div>
          
          {/* Report Card 2 */}
          <div className="p-6 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              {/* Replace with Biofuel Market image */}
              <img src="biofuel-image.jpg" alt="Biofuel Market" className="w-full h-full object-cover" />
            </div>
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">Biofuel Market</h3>
            </div>
            <a href="#" className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md text-center">
              View Report
            </a>
          </div>
          
          {/* Report Card 3 */}
          <div className="p-6 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              {/* Replace with Lithium-Ion Battery Market image */}
              <img src="lithium-ion-battery-image.jpg" alt="Lithium-Ion Battery Market" className="w-full h-full object-cover" />
            </div>
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">Lithium-Ion Battery</h3>
              <h4 className="text-lg font-medium text-gray-900">Market</h4>
            </div>
            <a href="#" className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md text-center">
              View Report
            </a>
          </div>
          
          {/* Report Card 4 */}
          <div className="p-6 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              {/* Replace with Bioplastic Packaging Market image */}
              <img src="bioplastic-packaging-image.jpg" alt="Bioplastic Packaging Market" className="w-full h-full object-cover" />
            </div>
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">Bioplastic Packaging</h3>
              <h4 className="text-lg font-medium text-gray-900">Market</h4>
            </div>
            <a href="#" className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md text-center">
              View Report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}