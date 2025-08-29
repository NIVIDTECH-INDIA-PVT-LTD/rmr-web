// import Image from "next/image";

// const heroContent = {
//   subtitle: "Delivering Results That Matter",
//   title: "Unlock The Future \n Of Business Consulting",
//   description:
//     "We specialize in providing tailored consulting services that drive success and transformation for businesses of all sizes.",
//   button: {
//     text: "SCHEDULE A CONSULTATION",
//     link: "#",
//   },
//   images: {
//     mobile: "/images/home_right_full.png",
//     desktop: "/images/homeright.png",
//     background: "/images/homebg.png",
//   },
// };

// export default function HeroSection() {
//   return (
//     <section
//       className="relative h-auto bg-cover bg-no-repeat bg-center overflow-hidden"
//       style={{ backgroundImage: `url('${heroContent.images.background}')` }}
//     >
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center h-full px-0 py-8 md:py-0 md:px-0">
//         {/* Left content */}
//         <div className="flex items-center order-2 justify-center md:justify-normal md:order-1 px-2 sm:px-4 md:pl-24">
//           <div className="text-white mt-[30px] sm:mt-[30px] md:mt-[120px]">
//             <p className="font-medium text-[18px] leading-[100%] tracking-[0%] text-start align-middle underline underline-offset-[0%] decoration-[0%] decoration-solid">
//               {heroContent.subtitle}
//             </p>

//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-[Figtree] font-bold py-2 leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0] whitespace-pre-line">
//               {heroContent.title}
//             </h1>

//             <p className="font-[500] text-[14px] sm:text-[16px] md:text-[18px] leading-[150%] sm:leading-[140%] md:leading-[100%] text-white/90 py-4 max-w-md sm:max-w-lg">
//               {heroContent.description}
//             </p>

//             <div className="py-4 flex">
//               <div className="relative inline-block">
//                 {/* Decorative background curve */}
//                 <div className="absolute inset-0 flex justify-center items-start pointer-events-none z-0">
//                   <div className="w-full h-[42px] md:h-[40px] bg-white rounded-full"></div>
//                 </div>

//                 {/* Button */}
//                 <a
//                   href={heroContent.button.link}
//                   className="relative z-10 bg-[#CD4D4A] hover:bg-red-800 transition px-4 sm:px-5 md:px-6 py-3 text-[13px] sm:text-[15px] md:text-[18px] uppercase rounded-full font-semibold text-white"
//                 >
//                   {heroContent.button.text}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right image */}
//         <div className="flex items-center justify-center h-auto md:order-2">
//           {/* Mobile image */}
//           <div className="block md:hidden w-full px-4">
//             <Image
//               src={heroContent.images.mobile}
//               alt="Hero Mobile"
//               width={400}
//               height={300}
//               className="w-full h-auto object-contain"
//               priority
//             />
//           </div>

//           {/* Desktop image */}
//           <div className="hidden md:block w-full">
//             <Image
//               src={heroContent.images.desktop}
//               alt="Hero Desktop"
//               width={600}
//               height={400}
//               className="w-full h-auto object-contain"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { useState } from "react";

const heroContent = {
  subtitle: "Delivering Results That Matter",
  title: "Unlock The Future \n Of Business Consulting",
  description:
    "We specialize in providing tailored consulting services that drive success and transformation for businesses of all sizes.",
  button: {
    text: "SCHEDULE A CONSULTATION",
    link: "#",
  },
  images: {
    mobile: "/images/home_right_full.png",
    desktop: [
      "/images/homeright.png",
      // "/images/home_right_full.png"
    ],
    background: "/images/homebg.png",
  },
};

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = heroContent.images.desktop.length;

  function prevImage() {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  }

  function nextImage() {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  }

  return (
    <section
      className="relative h-auto bg-cover bg-no-repeat bg-center overflow-hidden"
      style={{ backgroundImage: `url('${heroContent.images.background}')` }}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center h-full px-0 py-8 md:py-0 md:px-0">
        <div className="flex items-center order-2 justify-center md:justify-normal md:order-1 px-2 sm:px-4 md:pl-24">
          <div className="text-white mt-[30px] sm:mt-[30px] md:mt-[120px]">
            <p className="font-medium text-[18px] underline text-start">
              {heroContent.subtitle}
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-[Figtree] font-bold py-2 leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0] whitespace-pre-line">
              {heroContent.title}
            </h1>

            <p className="font-[500] text-[14px] sm:text-[16px] md:text-[18px] leading-[150%] sm:leading-[140%] md:leading-[100%] text-white/90 py-4 max-w-md sm:max-w-lg">
              {heroContent.description}
            </p>

            <div className="py-4 flex">
              <div className="relative inline-block">
                <div className="absolute inset-0 flex justify-center items-start pointer-events-none z-0">
                  <div className="w-full h-[42px] md:h-[40px] bg-white rounded-full"></div>
                </div>
                <a
                  href={heroContent.button.link}
                  className="relative z-10 bg-[#CD4D4A] hover:bg-red-800 transition px-4 sm:px-5 md:px-6 py-3 text-[13px] sm:text-[15px] md:text-[18px] uppercase rounded-full font-semibold text-white"
                >
                  {heroContent.button.text}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center h-auto md:order-2 relative w-full">
          {/* Mobile image */}
          <div className="block md:hidden w-full px-4">
            <Image
              src={heroContent.images.mobile}
              alt="Hero Mobile"
              width={400}
              height={300}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Desktop image slider */}
          <div className="hidden md:block w-full relative">
            <Image
              src={heroContent.images.desktop[currentIndex]}
              alt={`Hero Desktop ${currentIndex + 1}`}
              width={600}
              height={400}
              className="w-full h-auto object-contain transition-opacity duration-500 ease-in-out"
              priority
            />

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:left-auto md:right-16 md:translate-x-0 flex items-center gap-4">
              <button
                onClick={prevImage}
                className="bg-white cursor-pointer bg-opacity-70 hover:bg-opacity-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-black shadow-md"
                aria-label="Previous Image"
              >
                <Image
                  src="/images/icons/arrow-left.png"
                  alt="Previous"
                  width={20}
                  height={20}
                />
              </button>

              <button
                onClick={nextImage}
                className="bg-white cursor-pointer bg-opacity-70 hover:bg-opacity-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-black shadow-md"
                aria-label="Next Image"
              >
                <Image
                  src="/images/icons/arrow-right.png"
                  alt="Next"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
