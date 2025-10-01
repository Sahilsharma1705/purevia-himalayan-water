import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import bottleHero from "@/assets/bottle-hero.png";

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#story");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Himalayan Stream"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </div>

      {/* Water Ripple Effect */}
      <div className="absolute inset-0 z-0 water-ripple" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Purevia – <span className="gradient-text neon-glow">Sip the Purity</span>{" "}
              of Nature
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light tracking-wide">
              Crafted from the Himalayas, Delivered with Trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  const contact = document.querySelector("#contact");
                  if (contact) contact.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-liquid text-lg"
              >
                Order Now
              </button>
              <button
                onClick={() => {
                  const story = document.querySelector("#story");
                  if (story) story.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline-liquid text-lg"
              >
                Explore Our Story
              </button>
            </div>
          </div>

          {/* Bottle Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <img
                src={bottleHero}
                alt="Purevia Water Bottle"
                className="w-full max-w-md h-auto drop-shadow-2xl animate-float"
                style={{ 
                  filter: "drop-shadow(0 0 40px rgba(0, 207, 255, 0.4))",
                  animation: "float 3s ease-in-out infinite"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 scroll-indicator"
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center space-y-2 text-accent">
          <span className="text-sm font-medium tracking-wider uppercase">Scroll to Discover</span>
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </div>
      </button>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="hsl(210 40% 9%)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
          <path
            fill="hsl(174 100% 50% / 0.1)"
            d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,85.3C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
