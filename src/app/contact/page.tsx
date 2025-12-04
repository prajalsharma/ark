import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import ContactHero from "@/components/contact/contact-hero";
import ContactInfo from "@/components/contact/contact-info";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderNavigation />
      <main>
        <ContactHero />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}