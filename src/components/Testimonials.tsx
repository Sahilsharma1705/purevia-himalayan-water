import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Hotel Manager, Mumbai",
      quote:
        "Purevia has transformed our guest experience. The quality is exceptional, and the delivery is always on time. Our guests specifically request Purevia water.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Fitness Enthusiast, Delhi",
      quote:
        "I've tried many brands, but Purevia stands out. The taste is crisp, clean, and you can feel the purity. It's my go-to choice for staying hydrated during workouts.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Corporate Office Manager, Bangalore",
      quote:
        "Switching to Purevia for our office was the best decision. The service is impeccable, prices are reasonable, and our team loves the quality. Highly recommended!",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <section id="testimonials" className="py-24 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 water-ripple opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Trusted by the <span className="gradient-text">Best</span>, Loved by Many
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made Purevia their hydration choice
          </p>
        </div>


        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-br from-accent to-emerald-500 p-4 rounded-full shadow-lg">
                <Quote className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="pt-12 px-4 sm:px-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentSlide
                      ? "opacity-100 block"
                      : "opacity-0 hidden"
                  }`}
                >
                  <div className="text-center space-y-6">
                    {/* Stars */}
                    <div className="flex justify-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-6 w-6 text-accent"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-xl sm:text-2xl text-foreground leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="pt-4">
                      <p className="text-lg font-bold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-accent">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full glass hover:bg-accent/20 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-accent" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-accent w-8"
                        : "bg-muted hover:bg-accent/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full glass hover:bg-accent/20 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-accent" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
