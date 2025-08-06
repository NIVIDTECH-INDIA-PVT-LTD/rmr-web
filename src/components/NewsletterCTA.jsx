import React from 'react';

const NewsletterCTA = ({
  heading = "Ready For Expert Guidance?",
  description = "At RMR, we believe that every business has the potential to thrive with the right guidance and strategies, if you're facing challenges.",
  placeholder = "Email",
  buttonText = "SUBSCRIBE",
}) => {
  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-8 bg-cover bg-center text-white py-10 shadow-xl rounded-xl"
      style={{ backgroundImage: "url('/images/footer-bg.png')" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h2 className="text-2xl font-bold">{heading}</h2>
          <p className="text-sm mt-2">{description}</p>
        </div>
        <div className="flex items-center w-full md:w-auto">
          <input
            type="email"
            placeholder={placeholder}
            className="p-3 rounded-l-md text-black w-full md:w-48 focus:outline-none bg-white"
          />
          <button className="bg-red-600 text-white p-3 rounded-r-md hover:bg-red-700">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
