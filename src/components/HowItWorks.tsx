import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Palette, Eye, Rocket, ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Share Your Vision",
    description: "Tell us about your project, goals, and target audience. We'll listen carefully to understand exactly what you need.",
    icon: MessageCircle,
    color: "primary",
  },
  {
    number: "02",
    title: "Creative Development",
    description: "Our expert team crafts custom designs, videos, or marketing strategies tailored specifically for your brand.",
    icon: Palette,
    color: "accent",
  },
  {
    number: "03",
    title: "Review & Refine",
    description: "We present our work and collaborate with you to refine every detail until it perfectly matches your vision.",
    icon: Eye,
    color: "primary",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Your project goes live with our ongoing support to ensure continued success and growth for your brand.",
    icon: Rocket,
    color: "accent",
  },
];

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 100]);

  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full text-sm text-primary font-medium mb-6"
          >
            Our Process
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Simple Process,
            <br />
            <span className="text-gradient-lime">Exceptional Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to completion, we guide you through every step of bringing your creative vision to life.
          </p>
        </motion.div>

        {/* Steps - Desktop */}
        <div className="hidden lg:block relative">
          {/* Animated Progress Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-border/50 rounded-full">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
              style={{ width: useTransform(lineProgress, (v) => `${v}%`) }}
            />
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isPrimary = step.color === "primary";
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative pt-16"
                >
                  {/* Step Number Circle */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
                    viewport={{ once: true }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
                  >
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl ${
                        isPrimary 
                          ? "bg-gradient-to-br from-primary to-primary/80 shadow-primary/30" 
                          : "bg-gradient-to-br from-accent to-accent/80 shadow-accent/30"
                      }`}>
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div className={`absolute inset-0 rounded-2xl blur-xl opacity-40 ${
                        isPrimary ? "bg-primary" : "bg-accent"
                      }`} />
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-foreground/30 to-transparent rounded-full" />
                    </div>
                  </motion.div>

                  {/* Arrow Connector */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                      viewport={{ once: true }}
                      className="absolute top-[3.25rem] left-[calc(50%+2.5rem)] z-20"
                    >
                      <div className="flex items-center gap-1">
                        <div className="w-[calc(100%-1rem)] h-0.5 bg-gradient-to-r from-primary/80 to-accent/20" style={{ width: 'calc(100% - 3rem)' }} />
                        <ChevronRight className={`w-5 h-5 animate-pulse ${isPrimary ? "text-primary" : "text-accent"}`} />
                      </div>
                    </motion.div>
                  )}

                  {/* Card Content */}
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`mt-12 p-6 bg-card/50 backdrop-blur-sm border rounded-2xl transition-colors group ${
                      isPrimary 
                        ? "border-primary/20 hover:border-primary/40" 
                        : "border-accent/20 hover:border-accent/40"
                    }`}
                  >
                    <span className={`text-5xl font-bold transition-colors ${
                      isPrimary 
                        ? "text-primary/20 group-hover:text-primary/30" 
                        : "text-accent/20 group-hover:text-accent/30"
                    }`}>
                      {step.number}
                    </span>
                    <h3 className={`text-xl font-semibold mt-4 mb-3 transition-colors ${
                      isPrimary 
                        ? "group-hover:text-primary" 
                        : "group-hover:text-accent"
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Steps - Mobile/Tablet */}
        <div className="lg:hidden relative">
          {/* Vertical Progress Line */}
          <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-border/50">
            <motion.div 
              className="w-full bg-gradient-to-b from-primary via-accent to-primary"
              style={{ height: useTransform(lineProgress, (v) => `${v}%`) }}
            />
          </div>

          {/* Step Cards */}
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isPrimary = step.color === "primary";
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative flex gap-6 pl-4"
                >
                  {/* Step Icon */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                    viewport={{ once: true }}
                    className="relative z-10 flex-shrink-0"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                      isPrimary 
                        ? "bg-gradient-to-br from-primary to-primary/80 shadow-primary/30" 
                        : "bg-gradient-to-br from-accent to-accent/80 shadow-accent/30"
                    }`}>
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className={`absolute inset-0 rounded-xl blur-lg opacity-40 ${
                      isPrimary ? "bg-primary" : "bg-accent"
                    }`} />
                  </motion.div>

                  {/* Card Content */}
                  <div className={`flex-1 p-5 bg-card/50 backdrop-blur-sm border rounded-xl ${
                    isPrimary ? "border-primary/20" : "border-accent/20"
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-3xl font-bold ${
                        isPrimary ? "text-primary/30" : "text-accent/30"
                      }`}>{step.number}</span>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;