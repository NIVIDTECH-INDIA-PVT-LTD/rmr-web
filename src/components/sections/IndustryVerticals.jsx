import React from 'react';
import Industry1 from "/public/images/icons/Industry-icon1.png";
import Industry2 from "/public/images/icons/Industry-icon2.png";
import Industry3 from "/public/images/icons/Industry-icon3.png";
import Industry4 from "/public/images/icons/Industry-icon4.png";
import Industry5 from "/public/images/icons/Industry-icon5.png";
import Industry6 from "/public/images/icons/Industry-icon6.png";

// Data array for verticals
const industryVerticalsData = [
  {
    icon: Industry1,
    title: 'Chemicals & Materials',
    desc:
      'RMR delivers customized research services to address the specific needs of clients. With its existing research capabilities and qualified team.',
  },
  {
    icon: Industry2,
    title: 'Automotive & Transportation',
    desc:
      'Automotive and transportation industry is drastically changing like never before. Digital technologies, sustainable policies, new technologies, rising automation, and new business models.',
  },
  {
    icon: Industry3,
    title: 'Consumer Goods & Services',
    desc:
      'Global consumer goods and services industry is flourishing, enhancing competitiveness. Rising consumerism, government subsidies are for increased participation of new companies.',
  },
  {
    icon: Industry4,
    title: 'Electronics & Semiconductors',
    desc:
      'Electronics and semiconductors industry witnesses high growth, with its evolution by constant technological advances and innovations in recent decades.',
  },
  {
    icon: Industry5,
    title: 'Military & Defence',
    desc:
      'Military is projected to witness growth trajectory in near future, led by growing innovation and development and production in commercial aircraft and strong defence spending.',
  },
  {
    icon: Industry6,
    title: 'Healthcare',
    desc:
      'Healthcare industry is rising due to growing patient awareness, aging population, and sustainability initiatives across sectors.',
  },
];

export const IndustryVerticals = () => {
  return (
    <section className="w-full py-16 px-4 md:px-30 bg-no-repeat bg-cover bg-center bg-[url('/images/homebg.png')]">
      <div className="w-full mx-auto">
        <div className='text-center'>
        <h1 className="text-4xl font-bold text-white mb-4">What We Do</h1>
        <h2 className="text-2xl font-semibold text-gray-200 mb-12">Industry Verticals</h2>
</div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industryVerticalsData.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col"
            >
              <div className="w-16 h-16 bg-[#244A77] rounded-full flex items-center justify-center mb-4">
                <img src={item.icon.src} alt={item.title} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            LOAD MORE...
          </a>
        </div>
      </div>
    </section>
  );
};
