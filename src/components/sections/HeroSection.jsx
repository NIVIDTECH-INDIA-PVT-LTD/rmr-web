import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative h-auto bg-cover bg-no-repeat bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/homebg.png')" }}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center h-full px-0 py-8 md:py-0 md:px-0">
        {/* Left content - vertically centered */}
        <div className="flex items-center order-2 justify-center md:justify-normal md:order-1 px-2 sm:px-4 md:pl-24">
          <div className="text-white mt-[30px] sm:mt-[30px] md:mt-[120px]">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium underline leading-[100%] mb-2 decoration-solid decoration-[0.5px] decoration-white">
              Delivering Results That Matter
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-[Figtree] font-bold py-2 leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0]">
              Unlock The Future <br /> Of Business Consulting
            </h1>

            <p className="font-[500] text-[14px] sm:text-[16px] md:text-[18px] leading-[150%] sm:leading-[140%] md:leading-[100%] text-white/90 py-4 max-w-md sm:max-w-lg">
              We specialize in providing tailored consulting services that drive
              success and transformation for businesses of all sizes.
            </p>

            <div className="py-4 flex">
              <div className="relative inline-block">
                {/* White curve behind the button */}
                <div className="absolute inset-0 flex justify-center items-end pointer-events-none z-0">
                  <div className="w-full h-[40px] md:h-[45px] bg-white rounded-full translate-y-[6px]"></div>
                </div>

                {/* Button */}
                <button className="relative z-10 bg-[#CD4D4A] hover:bg-red-800 transition px-4 sm:px-5 md:px-6 py-3 text-[13px] sm:text-[15px] md:text-[18px] uppercase rounded-full font-semibold text-white">
                  SCHEDULE A CONSULTATION
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right image - vertically centered */}
        <div className="flex items-center justify-center h-auto md:order-2">
          {/* Image for small screens */}
          <div className="block md:hidden w-full px-4">
            <Image
              src="/images/home_right_full.png"
              alt="Hero Mobile"
              width={400}
              height={300}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Image for md+ screens */}
          <div className="hidden md:block w-full">
            <Image
              src="/images/homeright.png"
              alt="Hero Desktop"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
