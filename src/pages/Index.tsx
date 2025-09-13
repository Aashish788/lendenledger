import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { FAQSection } from "@/components/FAQSection";
import { DownloadSection } from "@/components/DownloadSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeatureSection />
      <FAQSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
