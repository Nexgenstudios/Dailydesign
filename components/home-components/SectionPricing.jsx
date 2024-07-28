"use client";

import { Sora, Inter } from "next/font/google";
import pricingBg from "@/public/assets/home/pricing/pricing_bg.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs } from "./inner-components/pricing/PricingTab";
import PricingTabBox from "./inner-components/pricing/PricingTabBox";
import startupEss from "@/public/assets/home/pricing/website/startup_essent.png";
import festiveWishes from "@/public/assets/home/pricing/website/festival_wishes.png";
import graphicDesign from "@/public/assets/home/pricing/website/graphicDesign.png";
import figma from "@/public/assets/home/pricing/web-dev/figma.png";
import figmaBlack from "@/public/assets/home/pricing/apps/figma-black.png";
import app from "@/public/assets/home/pricing/apps/app.png";
import wix from "@/public/assets/home/pricing/web-dev/wix.png";
import code from "@/public/assets/home/pricing/web-dev/code.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const graphicContent = [
  {
    image: startupEss,
    title: "Start-up Essentials",
    offer: "You save $24.00 a year",
    features: [
      "Business cards (Front & Back)",
      "Logo with 3 variations",
      "Company letterhead",
      "Digital thumbnails",
      "Bill book design",
    ],
  },
  {
    isGold: true,
    image: graphicDesign,
    title: "SM Graphic Design",
    offer: "You save $24.00 a year",
    features: [
      "30 Days Design service /Month",
      "20 Graphic Design Post",
      "10 Videos - Mp4, GIF",
      "Digital Thumbnails, Logo",
      "Content Writing for Post",
      "Revisions Accepted",
      "Brand Guidance",
    ],
  },
  {
    image: festiveWishes,
    title: "Festival Wishes",
    offer: "You save $24.00 a year",
    features: [
      "50 Festival Creative Designs",
      "Customized Names & Photos",
      "Customized Content Writing",
      "Monthly Newsletters",
      "10 Festival GIF",
    ],
  },
];

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

let tabs = [
  {
    value: "graphic-design",
    title: "Graphic Design",
    content: (
      <>
        <PricingTabBox pricingContent={graphicContent} />
      </>
    ),
  },
  {
    value: "web-dev-service",
    title: "Website Development Service",
    content: (
      <>
        <PricingTabBox pricingContent={webDevContent} />
      </>
    ),
  },
  {
    value: "app-service",
    title: "APP / SAAS Development Service",
    content: (
      <>
        <PricingTabBox pricingContent={apps} />
      </>
    ),
  },
];

const SectionPricing = () => {
  // const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <section className="pricing-wrapper">
      <Image
        src={pricingBg}
        alt="pricing Image"
        layout="responsive"
        width={1920}
        height={528}
        quality={100}
        className="bg-images-pricing"
      />
      <div className="container pricing-title-wrapper">
        <h2 className={` ${inter.variable} title`}>Our Creative Packages</h2>
        <p className={`${inter.variable} subtitle`}>
          Have Supported 700+ Corporates
        </p>
      </div>
      <Tabs tabs={tabs} />
    </section>
  );
};

export default SectionPricing;
