"use client";

import { Syne, Inter } from "next/font/google";
import localFont from "next/font/local";
import indianFlag from "@/public/assets/home/indian-flag.svg";
import clutchLogo from "@/public/assets/home/rating-logos/clutch-logo.svg";
import googleLogo from "@/public/assets/home/rating-logos/google-logo.svg";
import trustPilot from "@/public/assets/home/rating-logos/trustpilot.png";
import fiverrLogo from "@/public/assets/home/rating-logos/fiverr-logo.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const helvetica = localFont({
  src: [
    {
      path: "./webFonts/Helvetica-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./webFonts/Helvetica-LightOblique.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./webFonts/Helvetica.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./webFonts/Helvetica-Oblique.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./webFonts/Helvetica-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./webFonts/Helvetica-BoldOblique.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  subsets: ["sans-serif"],
  weight: ["300", "400", "700"],
  variable: "--font-helvetica",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const dailyDesignRating = [
  {
    rating_comp: clutchLogo,
    rating: "4.9",
  },
  {
    rating_comp: googleLogo,
    rating: "5.0",
  },
  {
    rating_comp: trustPilot,
    rating: "4.9",
  },
  {
    rating_comp: fiverrLogo,
    rating: "4.9",
  },
];

const HeroSection = () => {
  // Create an array with 5 stars
  const stars = Array(5).fill(null);
  return (
    <section className="dailydesign-hero-wrapper flex flex-col">
      <div className="container dailydesign-wrap">
        <div className="main-texts-wrap">
          <h1 className={`${syne.variable} heading`}>
            We’re <br /> Crafting Digital Dreams
          </h1>
          <div className="indian-flag-wrapper">
            <Image
              src={indianFlag}
              priority
              quality={100}
              width={24}
              height={20}
              alt="india-flag-logo"
            />
            <h3 className={`${helvetica.variable} sub-heading`}>
              #From India’s Talents
            </h3>
            <Image
              src={indianFlag}
              priority
              quality={100}
              width={24}
              height={20}
              alt="india-flag-logo"
            />
          </div>
        </div>
        <div className="rating-list-wrapper">
          {dailyDesignRating.map((item, index) => {
            return (
              <div key={index} className="rating-main-wrapper">
                <div className="rating-logo-wrap">
                  <Image
                    src={item.rating_comp}
                    priority
                    quality={100}
                    width={"100%"}
                    height={"auto"}
                    alt="rating-logo"
                  />
                </div>
                <div className="rating-count-wrap">
                  <p className={`${inter.variable} rating-count text-white`}>
                    {item.rating}
                  </p>
                  <div className="stars-wrapper">
                    {stars.map((_, index) => (
                      <FaStar className="star-color" key={index} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
