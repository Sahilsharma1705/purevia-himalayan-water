import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for contacting us! We'll get back to you soon.", {
      duration: 4000,
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9219903681",
      link: "tel:+919219903681",
    },
    {
      icon: Mail,
      label: "Email",
      value: "pureviajhansi@gmail.com",
      link: "mailto:pureviajhansi@gmail.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Near Central Bank of India, Hansari, Jhansi, Uttar Pradesh, India",
      link: "https://www.google.com/maps/search/?api=1&query=Near+Central+Bank+of+India+Hansari+Jhansi",
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", link: "#" },
    { icon: Instagram, label: "Instagram", link: "#" },
    { icon: Twitter, label: "Twitter", link: "#" },
    { icon: Linkedin, label: "LinkedIn", link: "#" },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary water-ripple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience Purevia? Reach out and let us bring premium hydration to your doorstep
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">{info.label}</p>
                        <p className="text-muted-foreground group-hover:text-accent transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className="h-6 w-6 text-accent group-hover:text-primary" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass-card h-64 flex items-center justify-center overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.7688!2d78.5686!3d25.4486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI2JzU1LjAiTiA3OMKwMzQnMDcuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Purevia Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary/50 border border-muted rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary/50 border border-muted rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary/50 border border-muted rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground"
                  placeholder="Order Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-primary/50 border border-muted rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground resize-none"
                  placeholder="Tell us about your water delivery needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-liquid flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
