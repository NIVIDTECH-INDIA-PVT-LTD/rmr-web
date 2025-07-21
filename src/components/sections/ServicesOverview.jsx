import Image from "next/image";
import BusinessChartImg from "/public/images/icons/business.png";
import BackgroundImage from "/public/images/bgtrans.png";

export default function OurServices() {
  return (
    <section className="relative px-4 py-16 font-sans">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-[#F3F5F5]"></div>
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundImage}
          alt="Background pattern"
          fill
          className="object-cover opacity-20"
          quality={100}
        />
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content Row */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h1>
            <h2 className="text-xl text-gray-700 font-medium mb-6">
              Leading organization in market research service
            </h2>
            <p className="text-gray-600 mb-8">
              We are one of the leading organisation in market research,
              analysis & forecasting and consulting services provider for
              Fortune 500 companies. Our purpose is to provide essential
              statistical surveying information for your organization or
              association to build trust and solve important problems.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
              VIEW ALL SERVICES
            </button>
          </div>

          {/* Right Column - Featured Image */}
          <div className="w-full md:w-1/2">
            <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src={BusinessChartImg}
                alt="Business Growth"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <span className="text-2xl font-bold text-gray-900 mr-3">01</span>
              <h3 className="text-xl font-bold text-gray-900 uppercase">
                SYNDICATE MARKET REPORTS
              </h3>
            </div>
            <p className="text-gray-600 ml-9">
              Root Market Research provides off the rack, syndicated market
              research studies, covering 50 industries with niche segments
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <span className="text-2xl font-bold text-gray-900 mr-3">02</span>
              <h3 className="text-xl font-bold text-gray-900 uppercase">
                CUSTOMIZED MARKET INTELLIGENCE
              </h3>
            </div>
            <p className="text-gray-600 ml-9">
              RMR delivers customized research services to address the specific
              needs of clients. With its existing research capabilities and
              qualified team
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <span className="text-2xl font-bold text-gray-900 mr-3">03</span>
              <h3 className="text-xl font-bold text-gray-900 uppercase">
                MARKET TRACKING REPORTS
              </h3>
            </div>
            <p className="text-gray-600 ml-9">
              RMR tracking study's purpose is to track meaningful information over
              time, generating reports every month, empower the identification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}