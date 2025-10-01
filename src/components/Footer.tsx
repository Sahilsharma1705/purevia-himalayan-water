import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "FAQs", href: "#" },
  ];

  const certifications = [
    "ISO Certified",
    "FSSAI Approved",
    "BIS Certified",
  ];

  return (
    <footer className="bg-primary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 water-ripple opacity-20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <img src={logo} alt="Purevia Logo" className="h-16 w-auto" />
            <p className="text-muted-foreground leading-relaxed">
              Premium Himalayan packaged drinking water, delivering purity and trust across
              50+ locations in India.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 inline-flex items-center space-x-2 group"
                >
                  <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Stay Hydrated. Subscribe to Updates.</h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-primary/50 border border-muted rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-primary font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Purevia. All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="h-4 w-4 text-accent fill-accent animate-pulse" />
            <span>for pure hydration</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
