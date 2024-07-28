import HeroSection from "@/components/home-components/HeroSection";
import SectionFive from "@/components/home-components/SectionFive";
import SectionSix from "@/components/home-components/SectionSix";
import SectionThree from "@/components/home-components/SectionThree";
import SectionTwo from "@/components/home-components/SectionTwo";
import SectionFour from "../components/home-components/SectionFour";
import SectionSeven from "@/components/home-components/SectionSeven";
import SectionEight from "@/components/home-components/SectionEight";
import SectionPricing from "@/components/home-components/SectionPricing";

export default function Home() {
  return (
    <main className="dailydesign-main-container-wrapper">
      <HeroSection />
      <SectionTwo />
      <SectionPricing />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </main>
  );
}
