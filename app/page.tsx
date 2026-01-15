import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow pt-24">
        <HeroSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
