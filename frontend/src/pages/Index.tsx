import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CI Lab - Digital Literacy & Cyber Safety Education for Youth</title>
        <meta 
          name="description" 
          content="CI Lab empowers children and teens with essential cyber safety, digital literacy, and AI skills through our innovative 5-Pillar educational model. Enroll today!" 
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <PillarsSection />
          <StatsSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
