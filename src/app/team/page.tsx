import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import TeamHero from "@/components/team/team-hero";
import TeamGrid from "@/components/team/team-grid";
import TeamValues from "@/components/team/team-values";
import JoinTeam from "@/components/team/join-team";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderNavigation />
      <main>
        <TeamHero />
        <TeamGrid />
        <TeamValues />
        <JoinTeam />
      </main>
      <Footer />
    </div>
  );
}
