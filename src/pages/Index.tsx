import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import ServicesCarousel from "@/components/ServicesCarousel";
import Introduction from "@/components/Introduction";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CustomerStory from "@/components/CustomerStory";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Header />
        <WhatsAppButton />
        <Hero />
        <LogoCloud />
        <ServicesCarousel />
        <Introduction />
        <Features />
        <HowItWorks />
        <CustomerStory />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Index;
