import { Sparkles } from "lucide-react";

const Promo = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-500 opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse" />
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <Sparkles
              className="h-4 w-4 text-white/30"
              style={{
                filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))",
              }}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/30">
            <Sparkles className="h-5 w-5 text-white animate-pulse" />
            <span className="text-white font-semibold uppercase tracking-wider text-sm">
              Limited Time Offer
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Get <span className="neon-glow">Free Delivery</span> on Your First Order!
          </h2>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/90 font-light max-w-2xl mx-auto">
            Experience Purevia's unmatched service today. Join thousands of satisfied customers
            across India.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                const contact = document.querySelector("#contact");
                if (contact) contact.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-primary bg-white rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Contact Us Today</span>
                <Sparkles className="h-5 w-5 animate-pulse" />
              </span>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>5000+ Happy Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>50+ Locations</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>100% Purity Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
