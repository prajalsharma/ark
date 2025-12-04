import HeaderNavigation from "@/components/sections/header-navigation";
import HeroSection from "@/components/sections/hero-section";
import HowItWorks from "@/components/sections/how-it-works";
import EnterpriseFeatures from "@/components/sections/enterprise-features";
import TeamSection from "@/components/sections/team-section";
import CtaSection from "@/components/sections/cta-section";
import Footer from "@/components/sections/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderNavigation />
      <main>
        <HeroSection />
        <HowItWorks />
        <EnterpriseFeatures />
        <TeamSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}