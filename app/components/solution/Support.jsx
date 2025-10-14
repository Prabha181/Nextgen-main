// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// function Support() {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const pathname = usePathname();

//   // ✅ Scroll to top whenever route changes
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   const handleFilterClick = (filter) => {
//     setActiveFilter(filter);
//   };

//   // Business Data 👇
//   const businessTypes = [
//     { title: "Private Limited", slug: "private-limited", description: "Ideal for startups and growing businesses with limited liability protection.", category: "registration" },
//     { title: "Limited Liability Partnership", slug: "limited-liability-partnership", description: "Combines benefits of partnership and corporation with limited liability.", category: "registration" },
//     { title: "Partnership Firm (ROF)", slug: "partnership-firm-rof", description: "Traditional business structure for two or more persons with shared profits.", category: "registration" },
//     { title: "Udyam Registration", slug: "udyam-registration", description: "Government registration for MSMEs to access benefits and subsidies.", category: "registration" },
//     { title: "One Person Company", slug: "one-person-company", description: "Single promoter company with limited liability protection.", category: "registration" },
//     { title: "Sole Proprietorship", slug: "sole-proprietorship", description: "Simplest business structure owned and operated by one individual.", category: "registration" },
//     { title: "GST Compliance", slug: "gst-compliance", description: "Ensure your business stays compliant with GST regulations and filings.", category: "compliance" },
//     { title: "Tax Filing", slug: "tax-filing", description: "Professional tax filing services for businesses of all sizes.", category: "compliance" },
//     { title: "Annual Compliance", slug: "annual-compliance", description: "Meet all annual compliance requirements for your business entity.", category: "compliance" },
//     { title: "Seed Funding", slug: "seed-funding", description: "Assistance in securing seed funding for early-stage startups.", category: "funding" },
//     { title: "VC Funding", slug: "vc-funding", description: "Connect with venture capitalists and secure growth funding.", category: "funding" },
//     { title: "Business Loans", slug: "business-loans", description: "Access to business loans from various financial institutions.", category: "funding" },
//     { title: "Website Development", slug: "website-development", description: "Professional website development for your business.", category: "digital" },
//     { title: "Digital Marketing", slug: "digital-marketing", description: "Comprehensive digital marketing strategies to grow your online presence.", category: "digital" },
//     { title: "E-commerce Setup", slug: "ecommerce-setup", description: "Complete e-commerce store setup and integration.", category: "digital" },
//   ];

//   const filteredBusinessTypes =
//     activeFilter === "all"
//       ? businessTypes
//       : businessTypes.filter((business) => business.category === activeFilter);

//   return (
//     <section className="w-full bg-gradient-to-b from-[#f5faff] to-[#e8f4ff] py-12 md:py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* --- Filter Pills --- */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#1c4268] mb-6">
//             Explore Our Services
//           </h2>
//           <div className="flex flex-wrap justify-center bg-white gap-3 p-3  rounded-2xl shadow-md border border-gray-200 w-full max-w-4xl mx-auto">
//             {[
//               { label: "All", value: "all" },
//               { label: "Business Registration", value: "registration" },
//               { label: "Compliance Support", value: "compliance" },
//               { label: "Funding Support", value: "funding" },
//               { label: "Digital Transformation", value: "digital" },
//             ].map((filter) => (
//               <button
//                 key={filter.value}
//                 className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                   activeFilter === filter.value
//                     ? "bg-[#245586] text-white shadow-lg"
//                     : "bg-white text-[#245586] border border-gray-300 hover:bg-gray-50"
//                 }`}
//                 onClick={() => handleFilterClick(filter.value)}
//               >
//                 {filter.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* --- Business Cards Grid --- */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredBusinessTypes.map((business) => (
//             <Link
//               key={business.slug}
//               href={`/inheritance/${business.slug}`}
//               className="block group"
//             >
//               <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
//                 <h3 className="text-xl font-semibold text-[#1c4268] mb-3 text-center group-hover:text-[#245586] transition-colors">
//                   {business.title}
//                 </h3>
//                 <p className="text-gray-600 text-center leading-relaxed mb-4">
//                   {business.description}
//                 </p>
//                 <div className="text-center">
//                   <span className="inline-block text-[#245586] font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
//                     Learn more →
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* --- Empty State --- */}
//         {filteredBusinessTypes.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No services found in this category.</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Support;

// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// function Support() {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const pathname = usePathname();

//   // ✅ Scroll to top whenever route changes
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   const handleFilterClick = (filter) => {
//     setActiveFilter(filter);
//   };

//   // Business Data 👇
//   const businessTypes = [
//     { title: "Private Limited", slug: "private-limited", description: "Ideal for startups and growing businesses with limited liability protection.", category: "registration" },
//     { title: "Limited Liability Partnership", slug: "limited-liability-partnership", description: "Combines benefits of partnership and corporation with limited liability.", category: "registration" },
//     { title: "Partnership Firm (ROF)", slug: "partnership-firm-rof", description: "Traditional business structure for two or more persons with shared profits.", category: "registration" },
//     { title: "Udyam Registration", slug: "udyam-registration", description: "Government registration for MSMEs to access benefits and subsidies.", category: "registration" },
//     { title: "One Person Company", slug: "one-person-company", description: "Single promoter company with limited liability protection.", category: "registration" },
//     { title: "Sole Proprietorship", slug: "sole-proprietorship", description: "Simplest business structure owned and operated by one individual.", category: "registration" },
//     { title: "GST Compliance", slug: "gst-compliance", description: "Ensure your business stays compliant with GST regulations and filings.", category: "compliance" },
//     { title: "Tax Filing", slug: "tax-filing", description: "Professional tax filing services for businesses of all sizes.", category: "compliance" },
//     { title: "Annual Compliance", slug: "annual-compliance", description: "Meet all annual compliance requirements for your business entity.", category: "compliance" },
//     { title: "Seed Funding", slug: "seed-funding", description: "Assistance in securing seed funding for early-stage startups.", category: "funding" },
//     { title: "VC Funding", slug: "vc-funding", description: "Connect with venture capitalists and secure growth funding.", category: "funding" },
//     { title: "Business Loans", slug: "business-loans", description: "Access to business loans from various financial institutions.", category: "funding" },
//     { title: "Website Development", slug: "website-development", description: "Professional website development for your business.", category: "digital" },
//     { title: "Digital Marketing", slug: "digital-marketing", description: "Comprehensive digital marketing strategies to grow your online presence.", category: "digital" },
//     { title: "E-commerce Setup", slug: "ecommerce-setup", description: "Complete e-commerce store setup and integration.", category: "digital" },
//   ];

//   const filteredBusinessTypes =
//     activeFilter === "all"
//       ? businessTypes
//       : businessTypes.filter((business) => business.category === activeFilter);

//   return (
//     <section className="w-full bg-gradient-to-b from-[#f5faff] to-[#e8f4ff] py-12 md:py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* --- Filter Pills --- */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#1c4268] mb-6">
//             Explore Our Services
//           </h2>
//           <div className="flex flex-wrap justify-center bg-white gap-3 p-3  rounded-2xl shadow-md border border-gray-200 w-full max-w-4xl mx-auto">
//             {[
//               { label: "All", value: "all" },
//               { label: "Business Registration", value: "registration" },
//               { label: "Compliance Support", value: "compliance" },
//               { label: "Funding Support", value: "funding" },
//               { label: "Digital Transformation", value: "digital" },
//             ].map((filter) => (
//               <button
//                 key={filter.value}
//                 className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                   activeFilter === filter.value
//                     ? "bg-[#245586] text-white shadow-lg"
//                     : "bg-white text-[#245586] border border-gray-300 hover:bg-gray-50"
//                 }`}
//                 onClick={() => handleFilterClick(filter.value)}
//               >
//                 {filter.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* --- Business Cards Grid --- */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredBusinessTypes.map((business) => (
//             <Link
//               key={business.slug}
//               href={`/inheritance/${business.slug}`}
//               className="block group"
//             >
//               <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
//                 <h3 className="text-xl font-semibold text-[#1c4268] mb-3 text-center group-hover:text-[#245586] transition-colors">
//                   {business.title}
//                 </h3>
//                 <p className="text-gray-600 text-center leading-relaxed mb-4">
//                   {business.description}
//                 </p>
//                 <div className="text-center">
//                   <span className="inline-block text-[#245586] font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
//                     Learn more →
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* --- Empty State --- */}
//         {filteredBusinessTypes.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No services found in this category.</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Support;

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import Private from "../../assets/private-limited.jpg";
import LLP from "../../assets/llp.jpg";
import Firm from "../../assets/firm.jpeg";
import Udyam from "../../assets/Udyam-Registration.jpg";
import OnePersonCompany from "../../assets/one-person-company.png";
import Sole from "../../assets/sole-proprietorship.jpg";
import GST from "../../assets/gst.jpg";
// import TaxImage from "../../assets/tax.jpg";
import AnnualCompliance from "../../assets/annual-compiance-LLP.webp";
import SeedFunding from "../../assets/seed-funding.webp";
import VCFunding from "../../assets/VC-funds.png";
import BusinessLoan from "../../assets/Business-Loan.png";
import WebDevelopment from "../../assets/web-development.png";
import DigitalMarketing from "../../assets/digital-marketing.jpeg";
import ECommerce from "../../assets/E-Commerce.webp";
import Image from "next/image";

function Support() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setIsDropdownOpen(false);
    setSelectedService(null);
  };

  const businessTypes = [
    {
      title: "Private Limited",
      slug: "private-limited",
      description: "A Private Limited Company provides a secure and scalable foundation for entrepreneurs. It protects personal assets, simplifies raising capital, and builds trust with investors and customers — making it the preferred structure for fast-growing startups.",
      category: "registration",
      image: Private,
    },
    {
      title: "Limited Liability Partnership",
      slug: "limited-liability-partnership",
      description: "An LLP offers the collaborative benefits of a partnership along with legal protection for its partners. It’s suitable for businesses that want shared management responsibilities without risking personal assets.",
      category: "registration",
      image: LLP,
    },
    {
      title: "Partnership Firm (ROF)",
      slug: "partnership-firm-rof",
      description: "A Partnership Firm (ROF) is a traditional business structure for two or more individuals who share management responsibilities and profits. It’s ideal for small businesses looking for a simple setup with shared decision-making.",
      category: "registration",
      image: Firm,
    },
    {
      title: "Udyam Registration",
      slug: "udyam-registration",
      description: "Udyam Registration is the official government registration for Micro, Small, and Medium Enterprises (MSMEs). It enables businesses to access various benefits, subsidies, and incentives designed to support growth and ease of operations.",
      category: "registration",
      image: Udyam,
    },
    {
      title: "One Person Company",
      slug: "one-person-company",
      description: "A One Person Company (OPC) is designed for solo entrepreneurs who want to run a business with limited liability protection. It combines the simplicity of a sole proprietorship with the benefits of a corporate structure.",
      category: "registration",
      image: OnePersonCompany,
    },
    {
      title: "Sole Proprietorship",
      slug: "sole-proprietorship",
      description: "A Sole Proprietorship is the simplest business structure, owned and managed by a single individual. It offers full control over operations, making it ideal for small businesses and startups.",
      category: "registration",
      image: Sole,
    },
    {
      title: "GST Compliance",
      slug: "gst-compliance",
      description: "GST Compliance helps your business stay fully aligned with Goods and Services Tax regulations. It ensures timely filings, accurate reporting, and avoids penalties, keeping your operations smooth and lawful.",
      category: "compliance",
      image: GST,
    },
    {
      title: "Tax Filing",
      slug: "tax-filing",
      description: "Our Tax Filing services help businesses of all sizes comply with tax regulations efficiently. We ensure accurate returns, timely submissions, and peace of mind for smooth financial management.",
      category: "compliance",
      image: GST,
    },
    {
      title: "Annual Compliance",
      slug: "annual-compliance",
      description: "Annual Compliance services help your business fulfill all mandatory yearly requirements, ensuring legal and regulatory obligations are met on time. This keeps your entity in good standing and avoids penalties.",
      category: "compliance",
      image: AnnualCompliance,
    },
    {
      title: "Seed Funding",
      slug: "seed-funding",
      description: "Seed Funding services help early-stage startups secure initial capital to kickstart operations. We assist in preparing proposals, connecting with investors, and navigating the funding process efficiently.",
      category: "funding",
      image: SeedFunding,
    },
    {
      title: "VC Funding",
      slug: "vc-funding",
      description: "VC Funding services help startups and growing businesses connect with venture capitalists to secure growth capital. We assist in pitching, proposal preparation, and navigating investment opportunities.",
      category: "funding",
      image: VCFunding,
    },
    {
      title: "Business Loans",
      slug: "business-loans",
      description: "Business Loans services provide access to funding from various financial institutions, helping businesses meet capital needs for growth, operations, or expansion.",
      category: "funding",
      image: BusinessLoan,
    },
    {
      title: "Website Development",
      slug: "website-development",
      description: "Website Development services provide professional, customized websites tailored to your business needs. We focus on design, functionality, and user experience to help your brand stand out online.",
      category: "digital",
      image: WebDevelopment,
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      description: "Digital Marketing services help businesses grow their online presence through targeted strategies across SEO, social media, content, and paid campaigns. We focus on driving engagement, leads, and measurable results.",
      category: "digital",
      image: DigitalMarketing,
    },
    {
      title: "E-commerce Setup",
      slug: "ecommerce-setup",
      description: "E-commerce Setup services provide end-to-end solutions for creating and integrating your online store. We ensure seamless functionality, secure payments, and an engaging shopping experience for your customers.",
      category: "digital",
      image: ECommerce,
    },
  ];

  const categories = [
    {
      label: "All Services",
      value: "all",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
    },
    {
      label: "Business Registration",
      value: "registration",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    },
    {
      label: "Compliance Support",
      value: "compliance",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      label: "Funding Support",
      value: "funding",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      label: "Digital Transformation",
      value: "digital",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
  ];

  const filteredBusinessTypes =
    activeFilter === "all"
      ? businessTypes
      : businessTypes.filter((business) => business.category === activeFilter);

  const activeCategory = categories.find(cat => cat.value === activeFilter);

  const handleServiceClick = (business) => {
    setSelectedService(business);
  };

  const displayService = selectedService || filteredBusinessTypes[0];

  return (
    <section className="w-full bg-gradient-to-b from-[#f5faff] to-[#e8f4ff] py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-3xl md:text-4xl font-bold text-[#1c4268] mb-10">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#1c4268] mt-4 relative inline-block cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Explore Our Services
              <span className="absolute left-0 -bottom-3 h-1 bg-[#245586] w-0 transition-all duration-500 group-hover:w-full"></span>
            </motion.h2>
          </div>

          <div className="relative inline-block w-full max-w-lg mx-auto">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-white border-2 border-[#245586] rounded-xl px-6 py-4 text-left font-semibold text-[#245586] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0">{activeCategory?.icon}</span>
                <span className="text-lg">{activeCategory?.label}</span>
              </div>
              <svg
                className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''} group-hover:scale-110`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsDropdownOpen(false)}
                ></div>
                <div className="absolute z-20 w-full mt-3 bg-white border-2 border-[#245586] rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out">
                  {categories.map((filter, index) => (
                    <button
                      key={filter.value}
                      className={`w-full text-left px-6 py-4 flex items-center gap-3 
                        transition-all duration-300 ease-in-out 
                        ${activeFilter === filter.value
                          ? "bg-[#245586] text-white font-semibold"
                          : "text-[#245586] hover:bg-[#245586] hover:text-white font-medium"
                        } 
                        ${index !== 0 ? "border-t border-gray-200" : ""}
                        hover:pl-8 hover:shadow-inner`}
                      onClick={() => handleFilterClick(filter.value)}
                    >
                      <span className="flex-shrink-0 text-lg transition-transform duration-300 group-hover:scale-110">
                        {filter.icon}
                      </span>
                      <span className="text-base tracking-wide">{filter.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* --- Two Column Layout --- */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden sticky top-4 h-[360px] flex flex-col">
              {/* Header Section */}
              <div className="bg-[#245586] text-white px-5 py-3.5">
                <h3 className="text-sm font-semibold tracking-wide">Available Services</h3>
                <p className="text-[11px] text-gray-200 mt-0.5">
                  {filteredBusinessTypes.length} services
                </p>
              </div>

              {/* Service List */}
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#245586]/40 scrollbar-track-transparent">
                {filteredBusinessTypes.map((business, index) => (
                  <button
                    key={business.slug}
                    onClick={() => handleServiceClick(business)}
                    className={`w-full text-left px-5 py-2.5 flex items-center justify-between gap-3 
              transition-all duration-300 ease-in-out relative text-sm
              ${selectedService?.slug === business.slug || (!selectedService && index === 0)
                        ? "bg-[#f5faff] border-l-4 border-[#245586] text-[#245586] font-semibold"
                        : "text-gray-700 hover:bg-[#245586]/10 hover:border-l-4 hover:border-[#245586] hover:text-[#245586]"
                      } ${index !== 0 ? "border-t border-gray-100" : ""}`}
                  >
                    <span className="truncate">{business.title}</span>
                    <span
                      className={`absolute right-4 w-2 h-2 rounded-full transition-all duration-300 ${selectedService?.slug === business.slug || (!selectedService && index === 0)
                        ? "bg-[#245586] scale-100 opacity-100"
                        : "bg-[#245586] scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                        }`}
                    ></span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {displayService && (
              <div className="flex flex-col md:flex-row bg-white/90 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-1 h-[360px]">

                {/* Left Content - Centered */}
                <div className="flex-1 flex flex-col items-center justify-center text-center p-10 relative">

                  <div className="max-w-md">
                    <h3 className="relative text-3xl font-bold text-[#1c4268] mb-8 leading-snug tracking-tight group cursor-pointer">
                      {displayService.title}
                      {/* Underline */}
                      <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#1c4268] to-[#245586] transition-all duration-300 group-hover:w-full"></span>
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                      {displayService.description}
                    </p>

                    <Link
                      href={`/inheritance/${displayService.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full 
                        bg-gradient-to-r from-[#1c4268] to-[#245586] text-white font-semibold text-sm md:text-base
                        shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                    >
                      <span>Read More</span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative flex-1 h-[380px] overflow-hidden group">
                  <Image
                    src={displayService.image}  // <-- pass the imported image object, not .src
                    alt={displayService.title}
                    className="w-full h-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 bg-[#1c4268]/60 mix-blend-multiply"></div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Support;