import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Palette, Video, Globe, Megaphone, Camera, PenTool, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgGradient: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Brand Identity",
    description: "Create a memorable brand with stunning logos, color palettes, and visual guidelines that set you apart.",
    icon: Palette,
    color: "text-pink-500",
    bgGradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 2,
    title: "Video Production",
    description: "Captivate your audience with professional videos, from commercials to social media content.",
    icon: Video,
    color: "text-blue-500",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "Web Design",
    description: "Build stunning, responsive websites that convert visitors into customers and grow your business.",
    icon: Globe,
    color: "text-green-500",
    bgGradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Reach your target audience with data-driven strategies across social media and search platforms.",
    icon: Megaphone,
    color: "text-orange-500",
    bgGradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: 5,
    title: "Photography",
    description: "Showcase your products and services with professional photography that tells your story.",
    icon: Camera,
    color: "text-purple-500",
    bgGradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    id: 6,
    title: "Graphic Design",
    description: "From social media posts to print materials, get designs that communicate your message effectively.",
    icon: PenTool,
    color: "text-cyan-500",
    bgGradient: "from-cyan-500/20 to-teal-500/20",
  },
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const getVisibleServices = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + services.length) % services.length;
      result.push({ ...services[index], position: i });
    }
    return result;
  };

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium mb-6"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Create
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-service creative solutions tailored to elevate your brand and drive results.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Carousel */}
          <div className="relative h-[400px] md:h-[350px]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <ServiceCard service={services[currentIndex]} isActive={true} />
              </motion.div>
            </AnimatePresence>

            {/* Side Preview Cards - Desktop */}
            <div className="hidden lg:block">
              {getVisibleServices()
                .filter((s) => s.position !== 0)
                .map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={`preview-${service.id}-${service.position}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      className={`absolute top-1/2 -translate-y-1/2 w-64 ${
                        service.position === -1 ? "left-0" : "right-0"
                      }`}
                    >
                      <div
                        className={`p-6 bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl cursor-pointer transition-all hover:opacity-70`}
                        onClick={() => goToSlide(services.findIndex((s) => s.id === service.id))}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${service.bgGradient} rounded-xl flex items-center justify-center mb-4`}>
                          <Icon className={`w-6 h-6 ${service.color}`} />
                        </div>
                        <h4 className="font-semibold text-foreground/70">{service.title}</h4>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-3 bg-primary"
                      : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <span className={`text-xs ${isAutoPlaying ? "text-primary" : "text-muted-foreground"}`}>
              {isAutoPlaying ? "Auto-playing" : "Paused"}
            </span>
          </div>
        </div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.02, gap: "1rem" }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-secondary border border-border rounded-full font-semibold hover:bg-secondary/80 transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, isActive }: { service: Service; isActive: boolean }) => {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`w-full max-w-lg p-8 bg-card/80 backdrop-blur-sm border border-border rounded-3xl shadow-xl ${
        isActive ? "scale-100" : "scale-90 opacity-50"
      }`}
    >
      <div className={`w-16 h-16 bg-gradient-to-br ${service.bgGradient} rounded-2xl flex items-center justify-center mb-6`}>
        <Icon className={`w-8 h-8 ${service.color}`} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
      <Link to="/services">
        <motion.button
          whileHover={{ gap: "0.75rem" }}
          className="group flex items-center gap-2 text-primary font-semibold"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default ServicesCarousel;
