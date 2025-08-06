import Image from "next/image";

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
    desktop: "/images/homeright.png",
    background: "/images/homebg.png",
  },
};

export default function HeroSection() {
  return (
    <section
      className="relative h-auto bg-cover bg-no-repeat bg-center overflow-hidden"
      style={{ backgroundImage: `url('${heroContent.images.background}')` }}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center h-full px-0 py-8 md:py-0 md:px-0">
        {/* Left content */}
        <div className="flex items-center order-2 justify-center md:justify-normal md:order-1 px-2 sm:px-4 md:pl-24">
          <div className="text-white mt-[30px] sm:mt-[30px] md:mt-[120px]">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium underline leading-[100%] mb-2 decoration-solid decoration-[0.5px] decoration-white">
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
                {/* Decorative background curve */}
                <div className="absolute inset-0 flex justify-center items-end pointer-events-none z-0">
                  <div className="w-full h-[40px] md:h-[45px] bg-white rounded-full translate-y-[6px]"></div>
                </div>

                {/* Button */}
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

        {/* Right image */}
        <div className="flex items-center justify-center h-auto md:order-2">
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

          {/* Desktop image */}
          <div className="hidden md:block w-full">
            <Image
              src={heroContent.images.desktop}
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
