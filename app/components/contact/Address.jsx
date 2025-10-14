"use client";

import Image from "next/image";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { useState } from "react";
import Officebg from "../../assets/office-map.webp";
import { motion, useAnimation } from "framer-motion";

const Address = () => {
  const [activeCard, setActiveCard] = useState(0); // Head Office visible by default

  const offices = [
    {
      title: "Head Office",
      address:
        "Silver Redience-2, Science City Road, Opp, Empire Business House, Sola, Ahmedabad, Gujarat, 380060",
      mapLink: "#",
      city: "Ahmedabad",
      icon: MapPin,
      gradient: "from-[#245586] to-[#76a5d3]",
    },
    {
      title: "Ahmedabad Office",
      address:
        "Sadbhav Complex 41, Drive In Rd, Big Bazar, nr. Himalaya Mall, Ahmedabad, Gujarat 380052",
      mapLink: "https://maps.app.goo.gl/XBknnrCrgvUwQnwP7",
      city: "Ahmedabad",
      icon: MapPin,
      gradient: "from-[#245586] to-[#76a5d3]",
    },
    {
      title: "Surat Office",
      address:
        "555, Laxmi Enclave 2, Laxmi Circle, Opp. Gajera School, Katargam, Surat, Gujarat - 395004",
      mapLink: "#",
      city: "Surat",
      icon: MapPin,
      gradient: "from-[#245586] to-[#76a5d3]",
    },
    {
      title: "Chennai Office",
      address:
        "46, Fanepet 1st Street, Subbu Towers, 3rd Floor, Nandanam, Chennai - 600035",
      mapLink: "#",
      city: "Chennai",
      icon: MapPin,
      gradient: "from-[#245586] to-[#76a5d3]",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50">
      {/* Background Image */}
      <Image
        src={Officebg}
        alt="Hero Banner"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover z-0 blur-sm"
      />

      <div className="absolute inset-0 bg-black/50 z-5"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 32V0H32"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-slate-200"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Find Our Locations
            <span className="absolute left-0 -bottom-3 h-1 bg-white w-0 transition-all duration-500 group-hover:w-full"></span>
          </motion.h2>

          <p className="text-xl text-white/90 max-w-4xl mx-auto font-light">
            We operate across multiple major cities, committed to providing localized service and support.
          </p>
        </div>

        {/* 🔹 Office Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {offices.map((office, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCard(idx)}
              className={`relative px-6 py-3 font-semibold rounded-full 
              bg-[#245586] text-white
              shadow-lg transition-all duration-300 
              hover:bg-white hover:text-[#245586] hover:scale-105 hover:shadow-2xl
              animate-[pulse_2s_ease-in-out_infinite]
              ${activeCard === idx ? "ring-4 ring-[#76a5d3]/40" : ""}`}
            >
              {office.title}
            </button>
          ))}
        </div>

        {/* Address Cards (centered single visible) */}
        <div className="flex justify-center mb-16">
          {offices.map((office, idx) => {
            const IconComponent = office.icon;
            const isActive = activeCard === idx;
            return (
              <a
                key={idx}
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block relative bg-white rounded-2xl p-4 shadow-xl border border-slate-100 transition-all duration-500 transform overflow-hidden cursor-pointer w-full max-w-2xl ${!isActive ? "hidden" : ""
                  }`}
              >
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${office.gradient} transition-all duration-500 origin-left group-hover:w-full w-1/6`}
                />
                <div className="flex items-center justify-between mb-3">
                  {/* Left: Icon + Title */}
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br ${office.gradient} text-white transition-transform duration-300 group-hover:scale-[1.05] group-hover:rotate-1`}
                    >
                      <IconComponent className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#1c4268] leading-snug">
                      {office.title}
                    </h3>
                  </div>

                  {/* Right: City badge */}
                  <span className="text-sm font-bold text-[#245586] tracking-wider px-3 py-1 bg-[#e8f4ff] rounded-lg border border-[#76a5d3]/30">
                    {office.city}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mt-5 min-h-[2.5rem]">
                  {office.address}
                </p>
              </a>
            );
          })}
        </div>

        {/* Business Hours / Phone / Email (unchanged) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Business Hours */}
          <div className="group bg-white rounded-2xl p-4 shadow-xl border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-[#245586] to-[#76a5d3] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <MapPin className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1c4268] mb-0.5">Business Hours</h4>
                <p className="text-sm text-slate-700 font-medium">Mon - Sat</p>
                <p className="text-sm font-extrabold text-[#245586] mt-0.5">9:00 AM - 6:00 PM</p>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="group bg-white rounded-2xl p-4 shadow-xl border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-[#245586] to-[#76a5d3] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <MapPin className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1c4268] mb-0.5">Call Us Directly</h4>
                <a
                  href="tel:+919898298149"
                  className="text-sm font-extrabold text-[#245586] transition-colors hover:text-[#1c4268] inline-block mt-0.5"
                >
                  +91 98982 98149
                </a>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">Available during work hours</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="group bg-white rounded-2xl p-4 shadow-xl border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-[#245586] to-[#76a5d3] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <MapPin className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1c4268] mb-0.5">Send Us an Email</h4>
                <a
                  href="mailto:info@nextgenconsultancy.in"
                  className="text-sm font-extrabold text-[#245586] mt-0.5 break-all transition-colors hover:text-[#1c4268] inline-block"
                >
                  support@nextgenbusiness.co.in
                </a>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">24-hour response time guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(36, 85, 134, 0.4); }
          50% { box-shadow: 0 0 15px 5px rgba(118, 165, 211, 0.6); }
        }
      `}</style>
    </section>
  );
};

export default Address;
