import HeroSection from "@/components/home-components/HeroSection";
import SectionFive from "@/components/home-components/SectionFive";
import SectionSix from "@/components/home-components/SectionSix";
import SectionThree from "@/components/home-components/SectionThree";
import SectionTwo from "@/components/home-components/SectionTwo";

export default function Home() {
  return (
    <main className="dailydesign-main-container-wrapper">
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <SectionSix />
    </main>
  );
}
