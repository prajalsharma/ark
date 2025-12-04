import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import TrustHero from "@/components/trust-security/trust-hero";
import SecurityFeatures from "@/components/trust-security/security-features";
import ComplianceCertifications from "@/components/trust-security/compliance-certifications";
import TrustPrinciples from "@/components/trust-security/trust-principles";

export default function TrustSecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderNavigation />
      <main>
        <TrustHero />
        <SecurityFeatures />
        <ComplianceCertifications />
        <TrustPrinciples />
      </main>
      <Footer />
    </div>
  );
}