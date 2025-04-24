import HeroSection from "@/components/hero-section";
import AboutMeSection from "@/components/about-me-section";
import MySkillsSection from "@/components/my-skills-section";
import PortfolioSection from "@/components/portfolio-section";
import ExperienceSection from "@/components/experience-section";
import TestimonialSection from "@/components/testimonial-section";
import ContactSection from "@/components/contact-section";

export default function HomePage() {
  return (
    <main className="">
      <HeroSection />
      <AboutMeSection />
      <MySkillsSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}
