import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import SolutionsHero from "@/components/solutions/solutions-hero";
import UseCases from "@/components/solutions/use-cases";
import CommonUseCases from "@/components/solutions/common-use-cases";
import SolutionsCta from "@/components/solutions/solutions-cta";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderNavigation />
      <main>
        <SolutionsHero />
        <UseCases />
        <CommonUseCases />
        <SolutionsCta />
      </main>
      <Footer />
    </div>
  );
}