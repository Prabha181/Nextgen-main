"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "From Idea to Impact: How Startups Can Scale Smartly in India",
    date: "October 2025",
    category: "Industry Insights",
    readingTime: "5 Minutes",
    tags: ["Startups", "Innovation", "India"],
    description:
      "With Amit Shah inaugurating Startup Conclave 2025 in Gandhinagar, the spotlight is on India's booming startup ecosystem. Learn how conclaves create opportunities and visibility for entrepreneurs.",
    color: "#3278bd"
  },
  {
    title: "Funding Decoded: Navigating India's Startup Investment Landscape",
    date: "September 2025",
    category: "Funding Strategy",
    readingTime: "6 Minutes",
    tags: ["Funding", "Venture Capital", "Growth"],
    description:
      "Discover the latest trends in Indian startup funding, from seed capital to Series A rounds — and how founders can attract the right investors with clear vision and strategy.",
    color: "#2e6dac"
  },
  {
    title: "Innovation Meets Impact: Tech Trends Defining 2025",
    date: "August 2025",
    category: "Technology",
    readingTime: "4 Minutes",
    tags: ["AI", "Innovation", "Future"],
    description:
      "Explore how technology is reshaping industries — from AI-driven solutions to sustainable innovations leading the global transformation.",
    color: "#245586"
  },
];

export default function Blog() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full min-h-screen py-20 px-6" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-block mb-3">
          </div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1c4268] mt-4 relative inline-block cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Latest Insights
            <span className="absolute left-0 -bottom-3 h-1 bg-[#245586] w-0 transition-all duration-500 group-hover:w-full"></span>
          </motion.h2>
          <p className="text-xl mt-8" style={{ color: '#5b93ca' }}>
            Explore thought leadership and industry perspectives
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              href={{
                pathname: "/blogview",
                query: { title: blog.title },
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group block"
            >
              <div
                className="overflow-hidden transition-all duration-500 rounded-lg shadow-lg"
                style={{
                  backgroundColor: '#1c4268',
                  borderLeft: hoveredIndex === index ? `6px solid ${blog.color}` : '6px solid transparent',
                  padding: '2rem',
                  transform: hoveredIndex === index ? 'translateX(8px)' : 'translateX(0)'
                }}
              >
                {/* Top Section */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span
                      className="inline-block text-xs font-bold tracking-wider uppercase mb-3"
                      // style={{ color: blog.color }}
                    >
                      {blog.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm" style={{ color: '#ebf2f8' }}>
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readingTime}</span>
                    </div>
                  </div>
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500"
                    style={{
                      backgroundColor: hoveredIndex === index ? blog.color : '#ffffff',
                    }}
                  >
                    <svg
                      className="w-5 h-5 transition-transform duration-500"
                      style={{
                        transform: hoveredIndex === index ? 'rotate(-45deg)' : 'rotate(0deg)',
                        stroke: hoveredIndex === index ? '#ffffff' : blog.color
                      }}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h2
                  className="text-2xl font-bold mb-4 leading-tight transition-colors duration-300"
                  style={{ color: '#ffffff' === index ? blog.color : '#ffffff' }}
                >
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="text-base leading-relaxed mb-6" style={{ color: '#d0d0d0' }}>
                  {blog.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: blog.color,
                        color: '#ffffff'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Border Animation */}
                <div
                  className="h-0.5 mt-6 transition-all duration-500"
                  style={{
                    backgroundColor: "#bfd5eb",
                    width: hoveredIndex === index ? '100%' : '0%'
                  }}
                ></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Section */}
        <div className="mt-16 text-center">
          <button
            className="px-10 py-4 font-semibold text-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#245586',
              color: '#ffffff'
            }}
          >
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
