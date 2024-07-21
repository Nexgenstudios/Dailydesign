"use client";

import { Syne, DM_Sans, Inter } from "next/font/google";
import Link from "next/link";
import localFont from "next/font/local";
import herobg from "@/public/assets/home/hero-image.png";
import rectangleImg from "@/public/assets/home/rectangle.png";
import starImg from "@/public/assets/home/star.png";
import indianFlag from "@/public/assets/home/indian-flag.svg";
import clutchLogo from "@/public/assets/home/rating-logos/clutch-logo.svg";
import googleLogo from "@/public/assets/home/rating-logos/google-logo.svg";
import trustPilot from "@/public/assets/home/rating-logos/trustpilot.png";
import fiverrLogo from "@/public/assets/home/rating-logos/fiverr-logo.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/button";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-dmSans",
});

const helvetica = localFont({
  src: [
    {
      path: "./helvetica-font/Helvetica-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./helvetica-font/Helvetica-LightOblique.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./helvetica-font/Helvetica.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./helvetica-font/Helvetica-Oblique.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./helvetica-font/Helvetica-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./helvetica-font/Helvetica-BoldOblique.woff2",
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
      <Image
        src={herobg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <Image
        src={rectangleImg}
        alt="Rectangle Image"
        width={104}
        height={217}
        className="diamond-image"
        quality={100}
      />

      <Image
        src={starImg}
        alt="star Image"
        width={140}
        height={224}
        className="star-image"
        quality={100}
      />
      <div className="container dailydesign-wrap">
        <div className="main-texts-wrap">
          <h1 className={`${syne.variable} heading`}>
            We’re <br /> Crafting Digital Dreams
          </h1>
          <div className="indian-flag-wrapper">
            <Image
              src={indianFlag}
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
                    quality={100}
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
        <div className="mob-cta-header">
          <Link
            href="https://wa.me/919344338444?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
            target="_blank"
          >
            <Button className={`${dmSans.variable} header-button`}>
              Talk with Team
              <FaArrowRight className="text-white text-lg font-bold icon-gap" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
