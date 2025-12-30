import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const clients = [
  { name: "Halgan Hospital", category: "Healthcare", color: "primary" },
  { name: "DDN Cargo", category: "Logistics", color: "accent" },
  { name: "Hogol Engineering", category: "Construction", color: "primary" },
  { name: "Bilicsan Nursery", category: "Education", color: "accent" },
  { name: "Hani Cosmetics", category: "Beauty", color: "primary" },
  { name: "Somali Airlines", category: "Aviation", color: "accent" },
];

// Duplicate clients for seamless infinite scroll
const duplicatedClients = [...clients, ...clients];

const LogoCloud = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center relative"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-xs font-medium uppercase tracking-wider mb-4 border border-primary/20">
          <Building2 className="w-3 h-3 text-primary" />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Partners</span>
        </span>
        <h3 className="text-2xl md:text-3xl font-medium mb-4">
          Brands We've <span className="text-gradient-lime">Worked</span> With
        </h3>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
          Trusted by leading businesses across Somalia to deliver exceptional creative solutions
        </p>
        
        {/* Sliding Logo Container */}
        <div className="relative overflow-hidden">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Sliding animation container */}
          <motion.div 
            className="flex gap-4"
            animate={{
              x: [0, -50 * clients.length * 4],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div 
                key={`${client.name}-${index}`}
                className={`group flex-shrink-0 w-48 bg-card border border-border rounded-2xl p-6 ${client.color === 'primary' ? 'hover:border-primary/50 hover:shadow-primary/5' : 'hover:border-accent/50 hover:shadow-accent/5'} hover:shadow-lg transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${client.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'} rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors`}>
                  <span className={`${client.color === 'primary' ? 'text-primary' : 'text-accent'} font-bold text-lg`}>{client.name.charAt(0)}</span>
                </div>
                <p className="text-sm font-medium text-foreground">{client.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{client.category}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LogoCloud;
