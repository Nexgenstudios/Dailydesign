import { Inter } from "next/font/google";
import PricingTabBox from "@/components/home-components/inner-components/pricing/PricingTabBox";
import figma from "@/public/assets/home/pricing/web-dev/figma.png";
import wix from "@/public/assets/home/pricing/web-dev/wix.png";
import code from "@/public/assets/home/pricing/web-dev/code.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const webDevContent = [
  {
    image: figma,
    title: "Figma Design & Prototype ",
    offer: "You save $24.00 a year",
    features: [
      "Figma website design",
      "Animations & prototype",
      "Premium Stock images",
      "Premium Stock GIF",
      "SEO Content Writing",
      "Revisions Accepted",
    ],
  },
  {
    isGold: true,
    image: wix,
    title: "Design + Development",
    offer: "You save $24.00 a year",
    features: [
      "Design + Development",
      "Edit your site on your own",
      "SEO content writing ",
      "Revisions accepted",
      "1 Year Maintenance",
      "Premium images (upto 100 images)",
      "Premium videos (upto 20 videos)",
    ],
  },
  {
    image: code,
    title: "Coded Website Design + <Dev.>",
    offer: "You save $24.00 a year",
    features: [
      "Full website development",
      "Full Figma design ",
      "React, React native Technology",
      "Next JS> Technology",
      "Futuristic animations",
      "Full Source code",
    ],
  },
];

const WebsiteDesignPage = () => {
  return (
    <section className="common-pricing-page-wrapper">
      <div className="container pricing-title-wrapper">
        <h2 className={` ${inter.variable} title`}>Our Creative Packages</h2>
        <p className={`${inter.variable} subtitle`}>
          Have Supported 700+ Corporates
        </p>
      </div>
      <div className={`w-[90%] mx-[auto] mt-[80px]`}>
        <PricingTabBox pricingContent={webDevContent} />
      </div>
    </section>
  );
};

export default WebsiteDesignPage;
