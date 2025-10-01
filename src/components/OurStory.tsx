import { useEffect, useRef, useState } from "react";
import waterPour from "@/assets/water-pour.jpg";

const OurStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="py-24 bg-primary water-ripple"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={waterPour}
                alt="Pure Water Pouring"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content Column */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Our Journey: <span className="gradient-text">Purity from Source to Sip</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                At <span className="text-accent font-semibold">Purevia</span>, we believe that
                water is not just a necessity—it's an experience. Our journey began in the
                pristine valleys of the <span className="gradient-text font-semibold">Himalayas</span>,
                where nature's purest water flows untouched by modern pollutants.
              </p>
              
              <p>
                Every drop of Purevia undergoes our proprietary{" "}
                <span className="text-accent font-semibold">7-stage purification process</span>,
                combining advanced <span className="font-semibold">Reverse Osmosis</span>,
                powerful <span className="font-semibold">UV sterilization</span>, and careful{" "}
                <span className="font-semibold">re-mineralization</span> to ensure you receive
                water that's not just clean, but enriched with essential minerals your body needs.
              </p>
              
              <p>
                Our commitment extends beyond purity. We've built a supply chain that spans{" "}
                <span className="gradient-text font-semibold">50+ delivery locations</span> across
                India, ensuring that premium hydration is accessible to discerning consumers,
                hotels, corporate offices, and health-conscious families everywhere.
              </p>
              
              <p className="text-foreground font-medium pt-4">
                Because at Purevia, we don't just deliver water—we deliver trust, health, and
                a taste of nature's finest gift.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
