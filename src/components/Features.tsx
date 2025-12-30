import { motion } from "framer-motion";
import { Palette, Video, Film, TrendingUp, Globe, Megaphone } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Creative Design",
    description: "Logos, posters, branding, and visual identity that makes your business stand out.",
    gradient: "from-primary/20 via-primary/10 to-transparent",
    iconColor: "text-primary",
    borderHover: "hover:border-primary/50",
  },
  {
    icon: Video,
    title: "Motion Graphics",
    description: "Eye-catching animations and motion design that bring your ideas to life.",
    gradient: "from-accent/20 via-accent/10 to-transparent",
    iconColor: "text-accent",
    borderHover: "hover:border-accent/50",
  },
  {
    icon: Film,
    title: "Video Production",
    description: "Professional video production and editing for commercials, social media, and more.",
    gradient: "from-primary/20 via-primary/10 to-transparent",
    iconColor: "text-primary",
    borderHover: "hover:border-primary/50",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that drive results and grow your audience.",
    gradient: "from-accent/20 via-accent/10 to-transparent",
    iconColor: "text-accent",
    borderHover: "hover:border-accent/50",
  },
  {
    icon: Globe,
    title: "Social Media Management",
    description: "Complete social media management to build your online presence and engagement.",
    gradient: "from-primary/20 via-primary/10 to-transparent",
    iconColor: "text-primary",
    borderHover: "hover:border-primary/50",
  },
  {
    icon: TrendingUp,
    title: "Brand Strategy",
    description: "Comprehensive brand strategy to position your business for long-term success.",
    gradient: "from-accent/20 via-accent/10 to-transparent",
    iconColor: "text-accent",
    borderHover: "hover:border-accent/50",
  },
];

const Features = () => {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-xs font-medium uppercase tracking-wider mb-4 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Transform Your Business</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            Complete <span className="text-gradient-lime">Creative</span> Solutions<br />Under One Roof
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to execution, we provide end-to-end creative services that help your business stand out and succeed in today's competitive market.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-card rounded-3xl p-8 border border-border ${service.borderHover} transition-all duration-300 relative overflow-hidden`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                <div className={`mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-border/50`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-medium mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 rounded-3xl" />
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <p className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform">4+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="group">
                <p className="text-3xl md:text-4xl font-bold text-accent group-hover:scale-110 transition-transform">100+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
              </div>
              <div className="group">
                <p className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
              <div className="group">
                <p className="text-3xl md:text-4xl font-bold text-accent group-hover:scale-110 transition-transform">24/7</p>
                <p className="text-sm text-muted-foreground mt-1">Support Available</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;