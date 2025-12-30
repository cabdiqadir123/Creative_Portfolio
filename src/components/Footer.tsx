import { motion } from "framer-motion";
import { useState } from "react";
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Creative Design",
    "Motion Graphics",
    "Video Production",
    "Digital Marketing",
    "Social Media",
    "Brand Strategy",
  ];

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      {/* CTA Section */}
      <div className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full mb-6 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent uppercase tracking-wider">
                Start Your Project
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              Ready to Bring Your<br />
              <span className="text-gradient-lime">Vision</span> to <span className="text-gradient-blue">Life</span>?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              Let's create something extraordinary together. Contact us today for a free consultation and discover how Creativity Agency can transform your brand.
            </p>

            {/* Email signup */}
            <div className="flex items-center justify-center">
              <motion.div 
                className="relative flex items-center bg-card/80 backdrop-blur-sm border border-border rounded-full p-1.5 w-full max-w-md"
                whileHover={{ borderColor: "hsl(var(--primary) / 0.5)" }}
                style={{ boxShadow: "0 0 40px hsl(82 85% 55% / 0.1)" }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium text-sm rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2 group">
                  Get Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative border-t border-border/50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="text-primary-foreground font-bold text-lg">C</span>
                </div>
                <span className="font-semibold text-lg">Creativity Agency</span>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                Somalia's premier creative agency delivering exceptional design, video production, and digital marketing solutions since 2020.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                <a 
                  href="http://instagram.com/candhuufayre" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="http://tiktok.com/@candhuufyare" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.behance.net/creativityagenc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6 text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-6 text-foreground">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link 
                      to="/services"
                      className="text-muted-foreground hover:text-accent transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-6 text-foreground">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="tel:+252615129825" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-4 h-4 text-primary" />
                    </span>
                    +252 615 129 825
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:hello@creativityagency.so" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-4 h-4 text-accent" />
                    </span>
                    hello@creativityagency.so
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground text-sm">
                  <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-foreground" />
                  </span>
                  <span>Mogadishu, Somalia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-border/50 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 <span className="text-primary">Creativity Agency</span>. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <span className="text-red-500">❤️</span> in <span className="text-accent">Mogadishu</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;