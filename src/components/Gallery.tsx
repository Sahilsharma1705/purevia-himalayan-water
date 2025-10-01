import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import bottleHero from "@/assets/bottle-hero.png";
import waterPour from "@/assets/water-pour.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: gallery1, caption: "Purevia 1 Litre", className: "md:col-span-1 md:row-span-1" },
    { src: gallery2, caption: "Refreshing Moments", className: "md:col-span-1 md:row-span-2" },
    { src: gallery3, caption: "Family Hydration", className: "md:col-span-2 md:row-span-1" },
    { src: gallery4, caption: "Reliable Delivery", className: "md:col-span-2 md:row-span-1" },
    { src: bottleHero, caption: "Premium Quality", className: "md:col-span-1 md:row-span-1" },
    { src: waterPour, caption: "Crystal Clear", className: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 bg-secondary water-ripple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Moments of <span className="gradient-text">Purity</span>: Our Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover Purevia in everyday moments, from homes to offices, gyms to family gatherings
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${image.className}`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 glass">
                  <p className="text-lg font-semibold text-foreground">{image.caption}</p>
                </div>
              </div>

              {/* Neon border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent transition-colors duration-300 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur-lg p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-accent/20 transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8 text-accent" />
          </button>
          
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
