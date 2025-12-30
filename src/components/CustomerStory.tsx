import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import customerStory from "@/assets/customer-story.png";

const CustomerStory = () => {
  return (
    <section id="portfolio" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-colors duration-500 relative group"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="grid md:grid-cols-2 gap-8 relative">
            <div className="p-12 flex flex-col justify-center">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full w-fit mb-6 border border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent uppercase tracking-wider">
                  Success Story
                </span>
              </motion.div>
              
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 text-foreground">
                "<span className="text-gradient-lime">Creativity Agency</span> transformed our brand completely. Their design work helped us stand out in the <span className="text-gradient-blue">Somali market</span>."
              </blockquote>
              
              <motion.a 
                href="https://www.behance.net/creativityagenc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium group/link transition-colors"
                whileHover={{ x: 5 }}
              >
                View our portfolio
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </motion.a>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  H
                </div>
                <div>
                  <p className="font-medium text-foreground">Halgan Hospital</p>
                  <p className="text-sm text-muted-foreground">Healthcare Brand Identity</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={customerStory} 
                alt="Client success story - Brand transformation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent md:bg-gradient-to-l md:from-card/80 md:via-transparent md:to-transparent" />
              
              {/* Floating stats */}
              <motion.div 
                className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-sm rounded-2xl p-4 border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl font-bold text-primary">+250%</p>
                <p className="text-xs text-muted-foreground">Brand Recognition</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerStory;