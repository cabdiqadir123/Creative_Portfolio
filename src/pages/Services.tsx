import { motion } from "framer-motion";
import { Palette, Video, Film, TrendingUp, Globe, Megaphone, Check, ArrowRight, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import { Link } from "react-router-dom";
const services = [
  {
    icon: Palette,
    title: "Creative Design",
    description: "Professional design solutions that bring your brand to life",
    color: "primary",
    features: [
      "Logo Design & Brand Identity",
      "Business Cards & Stationery",
      "Poster & Flyer Design",
      "Packaging Design",
      "Social Media Graphics",
      "Brand Guidelines"
    ],
    pricing: {
      starter: { price: "$150", description: "Logo + Business Card" },
      professional: { price: "$400", description: "Full Brand Package" },
      enterprise: { price: "$800+", description: "Complete Identity System" }
    }
  },
  {
    icon: Video,
    title: "Motion Graphics",
    description: "Eye-catching animations that captivate your audience",
    color: "accent",
    features: [
      "Logo Animation",
      "Social Media Animations",
      "Explainer Videos",
      "Title Sequences",
      "Kinetic Typography",
      "3D Motion Design"
    ],
    pricing: {
      starter: { price: "$200", description: "Logo Animation" },
      professional: { price: "$500", description: "30-60 Second Video" },
      enterprise: { price: "$1000+", description: "Full Production" }
    }
  },
  {
    icon: Film,
    title: "Video Production",
    description: "High-quality video content from concept to delivery",
    color: "primary",
    features: [
      "Commercial Videos",
      "Corporate Videos",
      "Event Coverage",
      "Product Videos",
      "Interviews & Documentaries",
      "Video Editing"
    ],
    pricing: {
      starter: { price: "$300", description: "Short Promo Video" },
      professional: { price: "$700", description: "Full Commercial" },
      enterprise: { price: "$1500+", description: "Complete Production" }
    }
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive real results",
    color: "accent",
    features: [
      "Social Media Advertising",
      "Google Ads Management",
      "Content Strategy",
      "Email Marketing",
      "SEO Optimization",
      "Analytics & Reporting"
    ],
    pricing: {
      starter: { price: "$250/mo", description: "Basic Campaign" },
      professional: { price: "$500/mo", description: "Multi-Platform" },
      enterprise: { price: "$1000+/mo", description: "Full Service" }
    }
  },
  {
    icon: Globe,
    title: "Social Media Management",
    description: "Complete management of your online presence",
    color: "primary",
    features: [
      "Content Creation",
      "Posting Schedule",
      "Community Management",
      "Engagement Growth",
      "Analytics Reports",
      "Influencer Outreach"
    ],
    pricing: {
      starter: { price: "$200/mo", description: "2 Platforms" },
      professional: { price: "$400/mo", description: "4 Platforms" },
      enterprise: { price: "$700+/mo", description: "Full Management" }
    }
  },
  {
    icon: TrendingUp,
    title: "Brand Strategy",
    description: "Strategic planning for long-term brand success",
    color: "accent",
    features: [
      "Brand Audit",
      "Market Research",
      "Competitor Analysis",
      "Brand Positioning",
      "Messaging Framework",
      "Growth Strategy"
    ],
    pricing: {
      starter: { price: "$350", description: "Brand Audit" },
      professional: { price: "$800", description: "Full Strategy" },
      enterprise: { price: "$1500+", description: "Complete Consulting" }
    }
  }
];

const Services = () => {
  return (
    <PageTransition>
    <main className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full text-xs font-medium text-primary uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3 h-3 inline mr-2" />
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Everything you need to<br />
            <span className="text-gradient-lime">build your brand</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From creative design to digital marketing, we offer comprehensive solutions to help your business stand out in the Somali market and beyond.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {services.map((service, index) => {
            const isPrimary = service.color === "primary";
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-card rounded-3xl border overflow-hidden ${
                  isPrimary ? "border-primary/20" : "border-accent/20"
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Service Info */}
                  <div className="p-8 lg:p-12">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      isPrimary 
                        ? "bg-primary/10 shadow-lg shadow-primary/20" 
                        : "bg-accent/10 shadow-lg shadow-accent/20"
                    }`}>
                      <service.icon className={`w-7 h-7 ${isPrimary ? "text-primary" : "text-accent"}`} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-8">{service.description}</p>
                    
                    <h3 className={`text-sm font-medium uppercase tracking-wider mb-4 ${
                      isPrimary ? "text-primary" : "text-accent"
                    }`}>What's Included</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <Check className={`w-4 h-4 flex-shrink-0 ${isPrimary ? "text-primary" : "text-accent"}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className={`p-8 lg:p-12 ${
                    isPrimary ? "bg-primary/5" : "bg-accent/5"
                  }`}>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">Pricing</h3>
                    <div className="space-y-4">
                      <div className="bg-card rounded-2xl p-6 border border-border">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm text-muted-foreground">Starter</span>
                          <span className="text-2xl font-bold">{service.pricing.starter.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{service.pricing.starter.description}</p>
                      </div>
                      <div className={`bg-card rounded-2xl p-6 border-2 relative ${
                        isPrimary ? "border-primary" : "border-accent"
                      }`}>
                        <span className={`absolute -top-3 right-4 text-xs px-3 py-1 rounded-full font-medium ${
                          isPrimary 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-accent text-accent-foreground"
                        }`}>Popular</span>
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm text-muted-foreground">Professional</span>
                          <span className={`text-2xl font-bold ${isPrimary ? "text-primary" : "text-accent"}`}>
                            {service.pricing.professional.price}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{service.pricing.professional.description}</p>
                      </div>
                      <div className="bg-card rounded-2xl p-6 border border-border">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm text-muted-foreground">Enterprise</span>
                          <span className="text-2xl font-bold">{service.pricing.enterprise.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{service.pricing.enterprise.description}</p>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className={`mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full transition-all group ${
                        isPrimary 
                          ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30" 
                          : "bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/30"
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a <span className="text-gradient-blue">custom package</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We understand every business is unique. Contact us to discuss a tailored solution that fits your specific needs and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all group"
          >
            Request Custom Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
    </PageTransition>
  );
};

export default Services;