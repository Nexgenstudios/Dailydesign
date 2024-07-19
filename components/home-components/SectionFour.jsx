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
  {
    logo: htmlIcon,
    name: "HTML",
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
  return (
    <section className="technologies-used-wrapper">
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
                      priority
                      quality={100}
                      width={item.name === "JavaScript" ? 50 : "100%"}
                      height={item.name === "JavaScript" ? 50 : "auto"}
                      alt="technology-icon"
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
