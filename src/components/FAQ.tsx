import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Creativity Agency offer?",
    answer: "We offer creative design (logos, posters, branding), motion graphics and animation, video production and editing, digital marketing, and social media management. We're your one-stop creative solution.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope. Logo design typically takes 3-5 days, while comprehensive branding packages may take 2-3 weeks. Video production depends on complexity. We'll provide a detailed timeline during consultation.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer competitive pricing tailored to each project's requirements. Contact us for a free consultation and quote. We work with businesses of all sizes and can create packages that fit your budget.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! While we're based in Mogadishu, Somalia, we work with clients worldwide. We communicate effectively across time zones and deliver projects digitally.",
  },
  {
    question: "Can you help with ongoing social media management?",
    answer: "Absolutely. We offer monthly social media management packages that include content creation, posting schedules, engagement management, and analytics reporting to grow your online presence.",
  },
  {
    question: "How do I get started with Creativity Agency?",
    answer: "Simply reach out through our contact form, email, or phone. We'll schedule a free consultation to discuss your project needs and provide a customized proposal.",
  },
];

const FAQ = () => {
  return (
    <section id="faqs" className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-xs font-medium uppercase tracking-wider mb-4 border border-primary/20">
            <HelpCircle className="w-3 h-3 text-primary" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">FAQs</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
            Frequently Asked <span className="text-gradient-lime">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-card rounded-2xl border border-border">
            <span className="text-muted-foreground">Still have questions?</span>
            <a 
              href="tel:+252615129825" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Call us at +252 615 129 825
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;