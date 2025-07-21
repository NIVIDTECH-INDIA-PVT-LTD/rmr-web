import React from 'react';

const NewsletterCTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10 px-4 shadow-xl rounded-xl mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h2 className="text-2xl font-bold">Ready For Expert Guidance?</h2>
          <p className="text-sm mt-2">
            At RMR, we believe that every business has the potential to thrive with the right guidance and strategies, if you're facing challenges.
          </p>
        </div>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-l-md text-black w-48 focus:outline-none bg-white"
          />
          <button className="bg-red-600 text-white p-3 rounded-r-md hover:bg-red-700">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
