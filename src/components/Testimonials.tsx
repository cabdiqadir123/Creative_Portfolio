import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import profile1 from "@/assets/profile-1.jpg";
import profile2 from "@/assets/profile-2.jpg";
import profile3 from "@/assets/profile-3.jpg";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const stats = [
  { value: "50+", label: "Happy Clients", color: "text-primary" },
  { value: "100+", label: "Projects Delivered", color: "text-accent" },
  { value: "4.9", label: "Client Rating", color: "text-primary" },
  { value: "4+", label: "Years Experience", color: "text-accent" },
];

type Testimonial = {
  id: string;
  client_name: string;
  client_role: string | null;
  client_company: string | null;
  client_image_url: string | null;
  content: string;
  rating: number | null;
  is_featured: boolean | null;
  display_order: number | null;
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) {
        console.error("Error fetching testimonials:", error);
      } else {
        setTestimonials(data);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-xs font-medium uppercase tracking-wider mb-4 border border-primary/20">
            <Star className="w-3 h-3 text-primary fill-primary" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Client Success Stories</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            What Our <span className="text-gradient-blue">Customers</span> Say<br />About Creativity Agency
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about working with us.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-card rounded-3xl p-8 border border-border hover:shadow-xl transition-all duration-300 relative group`}
            >
              <div className={`absolute top-6 right-6 w-10 h-10 rounded-xl ${testimonial.is_featured ? "bg-primary/10" : "bg-accent/10"} flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity`}>
                <Quote className={`w-5 h-5 ${testimonial.is_featured ? "text-primary" : "text-accent"}`} />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating || 0)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${testimonial.is_featured ? "fill-primary text-primary" : "fill-accent text-accent"}`} />
                ))}
              </div>

              <p className="text-foreground mb-8 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center gap-4">
                {testimonial.client_image_url && (
                  <div className={`relative p-0.5 rounded-full ${testimonial.is_featured ? "bg-gradient-to-br from-primary to-primary/50" : "bg-gradient-to-br from-accent to-accent/50"}`}>
                    <img
                      src={testimonial.client_image_url}
                      alt={testimonial.client_name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.client_name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.client_role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl" />
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;