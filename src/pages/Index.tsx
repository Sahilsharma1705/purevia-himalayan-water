import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Promo from "@/components/Promo";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <main>
        <Hero />
        <OurStory />
        <Stats />
        <Features />
        <Promo />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
