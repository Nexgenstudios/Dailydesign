import { Inter } from "next/font/google";
import PricingTabBox from "@/components/home-components/inner-components/pricing/PricingTabBox";
import figmaBlack from "@/public/assets/home/pricing/apps/figma-black.png";
import app from "@/public/assets/home/pricing/apps/app.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const apps = [
  {
    isGold: true,
    image: figmaBlack,
    title: "Figma Design & Prototype",
    offer: "You save $24.00 a year",
    features: [
      "Business research &  analysis",
      "User research Case study",
      "High-end Figma design ",
      "Customized icons + graphics",
      "Customized cards, UI ",
      "Revision until satisfied",
      "1 Year design updates",
      "Unique Style Designs",
    ],
  },
  {
    image: app,
    title: "App Design + <Development>",
    offer: "You save $24.00 a year",
    features: [
      "Business research &  analysis",
      "User research Case study",
      "High-end Figma design",
      "Customized icons + graphics",
      "1 Year maintenance",
      "Revision until satisfied",
    ],
  },
];

const AppDesignPage = () => {
  return (
    <section className="common-pricing-page-wrapper">
      <div className="container pricing-title-wrapper">
        <h2 className={` ${inter.variable} title`}>Our Creative Packages</h2>
        <p className={`${inter.variable} subtitle`}>
          Have Supported 700+ Corporates
        </p>
      </div>
      <div className={`w-[90%] mx-[auto] mt-[80px]`}>
        <PricingTabBox pricingContent={apps} />
      </div>
    </section>
  );
};

export default AppDesignPage;
