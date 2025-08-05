"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    className={`top-0 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[90%] transition-all duration-300 rounded-md ${
      scrolled ? 'bg-white/70 backdrop-blur-md shadow-md' : 'bg-white'
    } absolute`}
  >
    {/* ✅ Large Screen Full Header */}
    <div className="hidden lg:block">
      {/* Top Info Bar */}
      <div className="flex text-sm py-3 px-4 sm:px-6 justify-between items-center">
        <p className="font-[Figtree] font-semibold text-[16px] text-[#595959]">
          Get Free Business Consulting Today?{' '}
          <Link href="/contact" className="text-[#CD4D4A] border-b border-[#CD4D4A]">
            Contact Us
          </Link>
        </p>
        <div className="flex items-center gap-4 font-medium text-[16px] font-[Figtree]">
          <p className="flex items-center">
            <Image src="/images/icons/mailicon.svg" alt="mail" width={20} height={20} className="pr-1" />
            sales@rootmarketresearch.com
          </p>
        </div>
      </div>

      {/* Main Nav */}
      <div className="px-4 sm:px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/icons/logo.svg" alt="Logo" width={130} height={35} className="object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-6 text-sm font-semibold">
          {['/', '/admin', '/about', '/services', '/verticals', '/contact'].map((path, index) => {
            const labels = ['HOME', 'Admin' ,'ABOUT US', 'OUR SERVICES', 'INDUSTRY VERTICALS', 'CONTACT US'];
            return (
              <Link
                key={path}
                href={path}
                className="font-[Figtree] font-bold text-[15px] uppercase text-[#392761] border-b border-transparent hover:border-b-[#392761]"
              >
                {labels[index]}
              </Link>
            );
          })}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-2">
          <Image src="/images/icons/fbicon.svg" alt="fb" width={25} height={25} />
          <Image src="/images/icons/linkdinicon.svg" alt="linkedin" width={25} height={25} />
        </div>
      </div>
    </div>

    {/* ✅ Mobile Header (sm–md) */}
    <div className="lg:hidden px-4 sm:px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link href="/">
        <Image src="/images/icons/logo.svg" alt="Logo" width={120} height={30} className="object-contain" />
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        className="p-2 text-gray-700"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>

    {/* ✅ Mobile Dropdown Navigation */}
    {isMenuOpen && (
      <div className="block lg:hidden bg-white px-4 pb-4 shadow-lg">
        <nav className="flex flex-col space-y-3">
          {['/', '/about', '/services', '/verticals', '/contact'].map((path, index) => {
            const labels = ['HOME', 'ABOUT US', 'OUR SERVICES', 'INDUSTRY VERTICALS', 'CONTACT US'];
            return (
              <Link
                key={path}
                href={path}
                className="py-2 border-b border-gray-100 text-[#392761] font-[Figtree] font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {labels[index]}
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
