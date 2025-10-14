import Link from "next/link";

export default function Blog() {
  return (
    <section className="bg-white w-full min-h-screen p-7 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Simple Header */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1c4268] mt-4 relative inline-block cursor-pointer group">
            Insights
            <span className="absolute left-0 -bottom-3 h-1 bg-[#245586] w-0 transition-all duration-500 group-hover:w-full"></span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed mt-4">
            Ideas that inspire, stories that shape the future
          </p>
        </div>

        {/* Main Blog Card - Split Design */}
        <Link
          href={{
            pathname: "/blogview",
            query: {
              title: "From Idea to Impact: How Startups Can Scale Smartly in India"
            }
          }}
          className="block"
        >
          <div className="grid md:grid-cols-2 gap-0 group cursor-pointer">
            {/* Left Side - Visual Block */}
            <div className="bg-[#1c4268] p-10 md:p-16 flex flex-col justify-between min-h-[400px] md:min-h-[600px] duration-700 relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="20" fill="none" stroke="white" strokeWidth="0.5" />
                </svg>
              </div>

              <div>
                <span className="inline-block text-white/80 text-xs font-medium tracking-widest uppercase mb-4">
                  October 2025
                </span>
                <div className="w-16 h-1 bg-white/30 mb-8"></div>

                {/* Stats/Info Cards */}
                <div className="mt-12 space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg border border-white/20 hover:bg-[#2e6dac]/30 transition-colors duration-300">
                    <p className="text-white/60 text-xs uppercase tracking-wide mb-2">Article Type</p>
                    <p className="text-white text-xl font-semibold">Industry Insights</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg border border-white/20 hover:bg-[#3278bd]/30 transition-colors duration-300">
                    <p className="text-white/60 text-xs uppercase tracking-wide mb-2">Reading Time</p>
                    <p className="text-white text-xl font-semibold">5 Minutes</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <span>Startups</span>
                  <span>•</span>
                  <span>Innovation</span>
                  <span>•</span>
                  <span>India</span>
                </div>
                <p className="text-white/90 text-lg font-light">
                  Exploring the future of entrepreneurship in India&apos;s dynamic startup landscape
                </p>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="bg-gray-50 p-10 md:p-16 flex flex-col justify-between min-h-[400px] md:min-h-[600px] group-hover:bg-gray-100 transition-colors duration-700">
              <div>
                <h2 className="font-['Be_Vietnam_Pro'] font-semibold text-3xl md:text-5xl text-[#245586] mb-8 leading-tight group-hover:text-[#1c4268] transition-colors duration-500">
                  From Idea to Impact: How Startups Can Scale Smartly in India
                </h2>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  With Amit Shah inaugurating Startup Conclave 2025 in Gandhinagar, the spotlight is on India&apos;s booming startup ecosystem. Read how conclaves create funding opportunities, networking advantages, and global visibility, making them essential for every ambitious entrepreneur.
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">5 minute read</span>
                <div className="flex items-center gap-2 text-[#3278bd] font-medium">
                  <span>Read Article</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Bottom Navigation */}
        <div className="mt-12 flex items-center justify-between text-sm">
          <button className="text-gray-400 hover:text-black transition-colors">← Previous</button>
          <span className="text-gray-400">1 of 1</span>
          <button className="text-gray-400 hover:text-black transition-colors">Next →</button>
        </div>
      </div>
    </section>
  );
}