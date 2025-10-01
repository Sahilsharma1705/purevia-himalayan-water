import { useEffect, useRef, useState } from "react";
import { MapPin, Award, Clock, Users } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter = ({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const currentTime = Date.now();
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={counterRef} className="text-5xl font-bold gradient-text">
      {prefix}{count}{suffix}
    </div>
  );
};

const Stats = () => {
  const stats = [
    {
      icon: MapPin,
      value: 50,
      suffix: "+",
      label: "Delivery Locations",
      description: "Across India",
    },
    {
      icon: Award,
      value: 100,
      suffix: "%",
      label: "Purity Guarantee",
      description: "7-Stage Purification",
    },
    {
      icon: Clock,
      value: 24,
      suffix: "/7",
      label: "Dedicated Support",
      description: "Always Available",
    },
    {
      icon: Users,
      value: 5000,
      suffix: "+",
      label: "Happy Customers",
      description: "And Growing",
    },
  ];

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 water-ripple opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Building Trust, <span className="gradient-text">One Drop at a Time</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-card text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2000}
                />
                <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
