"use client";

import { Sora, Inter, Manrope } from "next/font/google";
import dailyDesignLogo from "@/public/assets/header/dailydesign_logo.svg";
import correctIcon from "@/public/assets/home/comparison-icon/correct.svg";
import wrongIcon from "@/public/assets/home/comparison-icon/wrong.svg";
import Image from "next/image";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const comparison_texts = [
  {
    label: "Individual Design Manager",
  },
  {
    label: "Award-Winning Designs",
  },
  {
    label: "24/7 Support",
  },
  {
    label: "100% Cost-Effective Pricing in Industry",
    bold: true,
  },
  {
    label: "Personalized Attention",
  },
  {
    label: "Proven High ROI Designs",
  },
  {
    label: "In house Designers with 12+ Years of Experience",
  },
  {
    label: "Full Stack Developers with 10+ Years of Experience",
  },
];

const SectionThree = () => {
  return (
    <section className="comparison-main-section">
      <div className="comparison-box">
        <div className="comparison-main-header">
          <h2 className={`${sora.variable} heading`}>
            What makes Daily Design <br /> the <span>best for Business?</span>
          </h2>
          <div className="logo">
            <Image
              src={dailyDesignLogo}
              priority
              quality={100}
              width={192}
              height={30}
              alt="dailydesign-logo"
            />
          </div>
          <div className="others-works-header">
            <h3 className={`${sora.variable} comp-header`}>Others</h3>
          </div>
        </div>
        <div className="comparison-main-content-box">
          {comparison_texts.map((item, index) => {
            return (
              <div key={index} className="comparision-table-row">
                <p
                  className={`${inter.variable} texts ${
                    item.bold ? "font-bold" : ""
                  }`}
                >
                  {item.label}
                </p>
                <div className="logo">
                  <Image
                    src={correctIcon}
                    priority
                    quality={100}
                    width={33}
                    height={33}
                    alt="correct-icon"
                  />
                </div>
                <div className="others-works-content">
                  <Image
                    src={wrongIcon}
                    priority
                    quality={100}
                    width={33}
                    height={33}
                    alt="wrong-icon"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container pt-[62px] pl-[35px] pr-[35px]">
        <p className={` ${manrope.variable} note-text`}>
          At Design Monks, we&apos;ve carved a unique niche in the UI UX domain,
          setting ourselves apart with a combination of creativity,
          client-centric approach, and strategic insight. Our reputation is
          built on consistently delivering standout UI UX, branding, product
          design, and web design that not only looks great but also drives brand
          growth
        </p>
      </div>
    </section>
  );
};

export default SectionThree;
