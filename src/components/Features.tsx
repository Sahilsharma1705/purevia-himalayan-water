import { Droplets, DollarSign, Zap, Leaf } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Droplets,
      title: "Himalayan Purity, Advanced Purification",
      description:
        "Our 7-stage process ensures every drop is free from impurities, fortified with essential minerals.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: DollarSign,
      title: "Premium Quality, Sensible Pricing",
      description:
        "Experience superior hydration without compromise. Our competitive pricing makes luxury accessible.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Doorstep Convenience, Across 50+ Locations",
      description:
        "Enjoy swift and dependable delivery of Purevia right to your home or office.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Leaf,
      title: "Committed to the Planet, Sustainable Bottles",
      description:
        "Our bottles are made from 100% recycled, plant-based materials, reducing our ecological footprint.",
      gradient: "from-green-500 to-lime-500",
    },
  ];

  return (
    <section id="process" className="py-24 bg-primary water-ripple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Experience the <span className="gradient-text">Purevia Advantage</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four pillars of excellence that make Purevia the preferred choice for premium hydration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 blur-xl opacity-50 bg-gradient-to-br from-accent to-accent/0 group-hover:opacity-70 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                  {feature.title.split(",").map((part, i) => (
                    <span key={i}>
                      {i === 1 ? <span className="gradient-text">{part}</span> : part}
                      {i === 0 && ","}
                    </span>
                  ))}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
