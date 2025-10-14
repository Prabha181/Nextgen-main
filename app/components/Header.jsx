"use client";

import { ChevronDownIcon, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["500", "600", "700"] });


export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/about" },
    { label: "Solution", href: "/solution" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full h-20 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-[#1c4268] shadow-md rounded-full mt-4" : "bg-[#1c4268]"
        }`}
    >
      <div className="flex items-center justify-between mt-3 h-14 px-6 sm:px-10 lg:px-20">
        {/* Logo on Left */}
        <a href="/" className="flex-shrink-0">
          <Image
            src="/images/whiteLogo.png"
            alt="Logo"
            width={160}
            height={60}
            className="w-24 sm:w-28 lg:w-52 object-contain"
          />
        </a>

        {/* Right side items */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`${inter.className} relative text-white font-medium text-[15px] transition-all duration-300 group hover:text-[#d1e8ff]`}
              >
                {item.label}
                <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}

            {/* More dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              <button className="flex items-center gap-1 text-white font-medium text-[14px]">
                More <ChevronDownIcon className="h-3 w-3" />
              </button>
              <div
                className={`absolute left-0 top-full mt-0 w-40 text-white text-bolder bg-transparent rounded-md  transition-all duration-200 ${isMoreOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-1"
                  }`}
              >
                <a
                  href="/blog"
                  className="block px-4 py-2 text-sm text-white"
                >
                  Blog
                </a>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <style>{`
        @keyframes ring {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(15deg); }
          20% { transform: rotate(-15deg); }
          30% { transform: rotate(15deg); }
          40% { transform: rotate(-15deg); }
          50% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        
        .animate-ring {
          animation: ring 2s ease-in-out infinite;
          transform-origin: center bottom;
        }
      `}</style>

          <a
            href="tel:9974792224"
            className="hidden md:flex items-center gap-2 bg-white text-[#264c92] px-4 py-1.5 rounded-full font-semibold shadow-md hover:shadow-lg text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-[#264c92] animate-ring" />
            9974792224
          </a>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 bg-gradient-to-r from-[#1e4976] to-[#4a7ba7] z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-5">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-5 right-5 text-white"
          >
            <X className="h-5 w-5" />
          </button>

          <nav className="mt-14 space-y-3">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white text-base font-medium hover:text-white/80 transition"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-4">
              <a
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white text-base font-medium hover:text-white/80"
              >
                Blog
              </a>
            </div>
          </nav>

          <a
            href="/contact"
            className="mt-6 w-full block text-center bg-white text-[#264c92] px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg text-sm transition"
          >
            Let’s Transform
          </a>
        </div>
      </div>
    </header>
  );
};