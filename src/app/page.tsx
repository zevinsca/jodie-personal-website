import HeroSection from "@/components/hero-section";
import AboutMeSection from "@/components/about-me-section";
import MySkillsSection from "@/components/my-skills-section";
import PortfolioSection from "@/components/portfolio-section";

export default function HomePage() {
  return (
    <main className="">
      <HeroSection />
      <AboutMeSection />
      <MySkillsSection />
      <PortfolioSection />
    </main>
  );
}
