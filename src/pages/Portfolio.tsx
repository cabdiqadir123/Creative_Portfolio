import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import { ExternalLink, X, Eye } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import { supabase } from "@/integrations/supabase/client";

const categories = [
  "All",
  "Branding",
  "Social Media",
  "Video",
  "Motion Graphics",
  "Digital Marketing"
];

const portfolioItems = [
  {
    id: 1,
    title: "Halgan Hospital Brand Identity",
    category: "Branding",
    image: portfolio1,
    description: "Complete brand identity design for Halgan Hospital including logo, stationery, and signage.",
    client: "Halgan Hospital",
    behanceUrl: "https://www.behance.net/gallery/228935831/Social-Media-Posrers-For"
  },
  {
    id: 2,
    title: "DDN Cargo Social Media Campaign",
    category: "Social Media",
    image: portfolio2,
    description: "Engaging social media campaign design for DDN Cargo logistics company.",
    client: "DDN Cargo",
    behanceUrl: "https://www.behance.net/gallery/228935073/Social-Media-Posters-For-DDN-CARGO"
  },
  {
    id: 3,
    title: "Hogol Engineering Branding",
    category: "Branding",
    image: portfolio3,
    description: "Professional branding package for Hogol Engineering Group.",
    client: "Hogol Engineering",
    behanceUrl: "https://www.behance.net/gallery/231052563/Branding-Design-For-Hogol-Engineering-Group"
  },
  {
    id: 4,
    title: "Hani Luxury Cosmetics",
    category: "Branding",
    image: portfolio4,
    description: "Elegant brand design for Hani luxury cosmetics line.",
    client: "Hani Cosmetics",
    behanceUrl: "https://www.behance.net/gallery/231053235/Branding-Design-For-Hani-luxury-cosmatics"
  },
  {
    id: 5,
    title: "Bilicsan Nursery Campaign",
    category: "Social Media",
    image: portfolio5,
    description: "Creative social media posters for Bilicsan Nursery.",
    client: "Bilicsan Nursery",
    behanceUrl: "https://www.behance.net/gallery/228934635/Social-Media-Posters-For-Bilicsan-Nursery"
  },
  {
    id: 6,
    title: "Corporate Video Production",
    category: "Video",
    image: portfolio1,
    description: "Professional corporate video production for local businesses.",
    client: "Various Clients",
    behanceUrl: "https://www.behance.net/creativityagenc"
  },
  {
    id: 7,
    title: "Logo Animation Collection",
    category: "Motion Graphics",
    image: portfolio2,
    description: "Collection of dynamic logo animations for various brands.",
    client: "Multiple Clients",
    behanceUrl: "https://www.behance.net/gallery/226651729/logo-design"
  },
  {
    id: 8,
    title: "Digital Marketing Campaign",
    category: "Digital Marketing",
    image: portfolio3,
    description: "Comprehensive digital marketing campaign with measurable results.",
    client: "Various Clients",
    behanceUrl: "https://www.behance.net/creativityagenc"
  },
  {
    id: 9,
    title: "Social Media Poster Series",
    category: "Social Media",
    image: portfolio4,
    description: "Creative poster designs for social media marketing.",
    client: "Various Clients",
    behanceUrl: "https://www.behance.net/gallery/222271161/Social-Media-poster-Design"
  }
];

type Project = {
  id: string;
  title: string;
  category: string;
  image_url: string;
  description: string;
  client_name: string;
  behance_url?: string | null; // ✅ optional
  created_at: string;
  updated_at: string;
  display_order: number;
  is_featured: boolean;
  project_date: string;
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);


  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedItem, setSelectedItem] = useState<Project | null>(null);



  const filteredItems =
    activeCategory === "All"
      ? projects
      : projects.filter(
        (item) => item.category === activeCategory
      );



  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data || []);
      }

      setLoading(false);
    };

    fetchProjects();
  }, []);



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
              Our Work
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Creative <span className="text-gradient-lime">Portfolio</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Explore our creative work across branding, social media, video production, and digital marketing.
            </motion.p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-8 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === category
                    ? index % 2 === 0
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-accent text-accent-foreground shadow-lg shadow-accent/30"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                    }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-secondary border border-border/50 hover:border-primary/50 transition-all duration-300">
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover Icon */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                          <Eye className="w-5 h-5 text-primary-foreground" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${index % 2 === 0
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "bg-accent/20 text-accent border border-accent/30"
                          }`}>
                          {item.category}
                        </span>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.client_name}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* View More on Behance */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-3xl p-12"
            >
              <p className="text-muted-foreground mb-6">Want to see more of our work?</p>
              <a
                href="https://www.behance.net/creativityagenc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
                View on Behance
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card rounded-3xl border border-border overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-video relative">
                  <img
                    src={selectedItem.image_url}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30 rounded-full text-xs font-medium mb-4">
                    {selectedItem.category}
                  </span>
                  <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
                  <p className="text-sm text-accent mb-4">Client: {selectedItem.client_name}</p>
                  <p className="text-muted-foreground mb-6">{selectedItem.description}</p>
                  <a
                    href={selectedItem.image_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all"
                  >
                    View on Behance
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default Portfolio;