import React from "react";

const NewsletterCTA = ({
  heading = "Ready For Expert Guidance?",
  description = "At RMR, we believe that every business has the potential to thrive <br />with the right guidance and strategies, if you're facing challenges.",
  placeholder = "Email",
  buttonText = "SUBSCRIBE",
}) => {
  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-8 bg-cover bg-center text-white py-10 shadow-xl rounded-2xl"
      style={{ backgroundImage: "url('/images/footer-bg.png')" }}
    >
      <div className="max-w-7x flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4">
        <div className="w-full md:w-auto text-left">
          <h2 className="font-semibold text-[28px] sm:text-[32px] md:text-[36px] leading-[100%] align-middle">
            {heading}
          </h2>
          <p
            className="font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[130%] align-middle mt-4"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="w-full md:w-auto relative">
          <input
            type="email"
            placeholder={placeholder}
            className="p-3 sm:p-4 rounded-2xl text-black w-full md:w-[480px] focus:outline-none bg-white font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[100%] align-middle placeholder:text-[#959595]"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 sm:px-4 py-2 bg-[#CD4D4A] text-white font-semibold text-[14px] sm:text-[16px] md:text-[18px] leading-[100%] align-middle rounded-xl hover:bg-[#b94442] text-xs">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
