"use client";

import { Syne, Sora, Inter } from "next/font/google";
import Image from "next/image";
import vsCodeIcon from "@/public/assets/home/technologies-logos/vs-code.svg";
import aeIcon from "@/public/assets/home/technologies-logos/ae.svg";
import psIcon from "@/public/assets/home/technologies-logos/ps.svg";
import aiIcon from "@/public/assets/home/technologies-logos/ai.svg";
import reactIcon from "@/public/assets/home/technologies-logos/react.svg";
import nextIcon from "@/public/assets/home/technologies-logos/next.svg";
import htmlIcon from "@/public/assets/home/technologies-logos/html.svg";
import javascriptIcon from "@/public/assets/home/technologies-logos/javaScript.svg";
import figmaIcon from "@/public/assets/home/technologies-logos/figma.svg";
import webflowIcon from "@/public/assets/home/technologies-logos/webflow.svg";
import bgLeft from "@/public/assets/home/bg-left.svg";
import bgRight from "@/public/assets/home/bg-right.svg";
// import { useEffect, useState } from "react";

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

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const technologiesLogo = [
  {
    logo: vsCodeIcon,
    name: "Visual Studio",
  },
  {
    logo: reactIcon,
    name: "React",
  },
  {
    logo: javascriptIcon,
    name: "JavaScript",
  },
  // {
  //   logo: htmlIcon,
  //   name: "HTML",
  // },
  {
    logo: webflowIcon,
    name: "Webflow",
  },
  {
    logo: nextIcon,
    name: "Next Js",
  },
  {
    logo: figmaIcon,
    name: "Figma",
  },
  {
    logo: aiIcon,
    name: "Illustrator",
  },
  {
    logo: psIcon,
    name: "Photoshop",
  },
  {
    logo: aeIcon,
    name: "After effects",
  },
];

const SectionFour = () => {
  // const [windowWidth, setWindowWidth] = useState(0);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   // Set initial window width
  //   setWindowWidth(window.innerWidth);

  //   // Add event listener to update window width on resize
  //   window.addEventListener("resize", handleResize);

  //   // Clean up event listener
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <section className="technologies-used-wrapper">
      <Image
        src={bgLeft}
        alt="backgroundImage"
        width={570}
        height={570}
        className="backgroundImage-left"
        quality={100}
      />

      <Image
        src={bgRight}
        alt="backgroundImage"
        width={570}
        height={570}
        className="backgroundImage-right"
        quality={100}
      />
      <div className="container">
        <h3 className={`${syne.variable} technologies-used-title`}>
          Our Specialization - <span>Tools</span>
        </h3>
        <p className={`${sora.variable} subtitle`}>
          Serving customized needs for start-ups
        </p>
        <div className="technologies-used-image-wrapper">
          <div className="technologies-used-list">
            {technologiesLogo.map((item, index) => {
              return (
                <div key={index} className="technologies-used-list-item">
                  <div className="technology-icon">
                    <Image
                      src={item.logo}
                      quality={100}
                      width={50}
                      height={50}
                      alt={item.name}
                    />
                  </div>
                  <p className={` ${inter.variable} technology-name`}>
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
