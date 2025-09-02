"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // 👈 yaha import karo

const headerContent = {
  topBar: {
    message: "Get Free Business Consulting Today?",
    contactLink: {
      text: "Contact Us",
      href: "/contact",
    },
    email: "sales@rootmarketresearch.com",
  },
  logo: {
    src: "/images/icons/logo.svg",
    alt: "Logo",
    width: 130,
    height: 35,
  },
  navLinks: [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "OUR SERVICES", href: "/services" },
    { label: "INDUSTRY VERTICALS", href: "/industry" },
    { label: "CONTACT US", href: "/contact" },
  ],
  socialIcons: [
    { src: "/images/icons/fbicon.svg", alt: "Facebook" },
    { src: "/images/icons/linkdinicon.svg", alt: "LinkedIn" },
  ],
  mobileNavLinks: [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "OUR SERVICES", href: "/services" },
    { label: "INDUSTRY VERTICALS", href: "/industry" },
    { label: "CONTACT US", href: "/contact" },
  ],
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // 👈 current route milega

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={`top-0 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[90%] transition-all duration-300 rounded-b-md ${
          scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-white"
        } absolute`}
      >
        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <div className="flex text-sm py-3 px-4 sm:px-6 justify-between items-center">
            <p className="font-[Figtree] font-semibold text-[16px] text-[#595959]">
              {headerContent.topBar.message}{" "}
              <Link
                href={headerContent.topBar.contactLink.href}
                className="text-[#CD4D4A] border-b border-[#CD4D4A]"
              >
                {headerContent.topBar.contactLink.text}
              </Link>
            </p>
            <div className="flex items-center gap-4 font-medium text-[16px] font-[Figtree]">
              <p className="flex items-center">
                <Image
                  src="/images/icons/mailicon.svg"
                  alt="mail"
                  width={20}
                  height={20}
                  className="pr-1"
                />
                {headerContent.topBar.email}
              </p>
            </div>
          </div>

          {/* Main Nav */}
          <div className="px-4 sm:px-6 py-2 flex justify-between items-center">
            <Link href="/">
              <Image
                src={headerContent.logo.src}
                alt={headerContent.logo.alt}
                width={headerContent.logo.width}
                height={headerContent.logo.height}
                className="object-contain"
              />
            </Link>

            <nav className="flex items-center gap-6 text-sm font-semibold">
              {headerContent.navLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`font-[Figtree] font-bold text-[15px] uppercase ${
                      isActive
                        ? "text-[#392761] border-b-2 border-[#CD4D4A]"
                        : "text-[#392761] border-b border-transparent hover:border-b-[#CD4D4A]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex gap-2">
              {headerContent.socialIcons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  width={25}
                  height={25}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden px-4 sm:px-6 py-3 flex justify-between items-center">
          <Link href="/">
            <Image
              src={headerContent.logo.src}
              alt={headerContent.logo.alt}
              width={120}
              height={30}
              className="object-contain"
            />
          </Link>

          <button
            className="p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="block lg:hidden bg-white px-4 pb-4 shadow-lg">
            <nav className="flex flex-col space-y-3">
              {headerContent.mobileNavLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`py-2 border-b ${
                      isActive
                        ? "text-[#392761] font-bold border-b-[#CD4D4A]"
                        : "text-[#392761] border-gray-100"
                    } font-[Figtree]`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
