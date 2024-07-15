import Link from "next/link";
import dailyDesignLogoFooter from "@/public/assets/footer/dailydesign-footer.svg";
import { Sora, Manrope } from "next/font/google";
import Image from "next/image";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const servicesLink = [
  {
    label: "Web UI UX Design",
    path: "/",
    category: "development",
  },
  {
    label: "Web Development",
    path: "/",
    category: "development",
  },
  {
    label: "CMS Websites",
    path: "/",
    category: "development",
  },
  {
    label: "React, NextJs",
    path: "/",
    category: "development",
  },
  {
    label: "Website uplift",
    path: "/",
    category: "development",
  },
  {
    label: "SM Creatives",
    path: "/",
    category: "creatives",
  },
  {
    label: "Video Creation",
    path: "/",
    category: "creatives",
  },
  {
    label: "Pitch Deck",
    path: "/",
    category: "creatives",
  },
  {
    label: "Print BRanding",
    path: "/",
    category: "creatives",
  },
  {
    label: "Ui Ux Design",
    path: "/",
    category: "designs",
  },
  {
    label: "Customised App design",
    path: "/",
    category: "designs",
  },
  {
    label: "App Uplift Service",
    path: "/",
    category: "designs",
  },
];

const socialLink = [
  {
    icon: <FaDribbble className="text-white text-xl" />,
    path: "/",
  },
  {
    icon: <FaBehance className="text-white text-xl" />,
    path: "/",
  },
  {
    icon: <FaFacebookF className="text-white text-xl" />,
    path: "/",
  },
  {
    icon: <RiTwitterXLine className="text-white text-xl" />,
    path: "/",
  },
  {
    icon: <FaInstagram className="text-white text-xl" />,
    path: "/",
  },
  //   {
  //     icon: <FaLinkedinIn className="text-white text-xl" />,
  //     path: "/",
  //   },
];

const Footer = () => {
  return (
    <footer className={`dailydesign__main_footer`}>
      <div className="container">
        <div className="top-footer-part">
          {/* footer logo */}
          <div className="footer-logo">
            <Link href="/">
              <Image
                src={dailyDesignLogoFooter}
                priority
                quality={100}
                width={216}
                height={36}
                alt="dailydesign-logo-footer"
              />
            </Link>
          </div>

          {/* footer links area */}
          <div className="footer-links-wrapper">
            <h3 className="text-white">Services</h3>

            <div className="social-links-wrapper">
              {socialLink.map((item, index) => {
                return (
                  <div className="social-icon-list" key={index}>
                    <Link href={item.path}>{item.icon}</Link>
                  </div>
                );
              })}
              <div className="footer-ring-social-icon">
                <Link href="/">
                  <FaLinkedinIn className="text-white text-xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-footer-part">
          {/* footer logo */}
          <div className="footer-logo-sub-text">
            <p className={`${sora.variable} sub-text`}>
              CRAFTING DIGITAL DREAMS
            </p>
          </div>
          {/* footer links area */}
          <div className="footer-main-links-wrapper">
            <ul className="services-list">
              {servicesLink
                .filter((item) => item.category === "development")
                .map((item, index) => {
                  return (
                    <li
                      className={`service-item-list ${manrope.variable}`}
                      key={index}
                    >
                      {item.label}
                    </li>
                  );
                })}
            </ul>
            <ul className="services-list">
              {servicesLink
                .filter((item) => item.category === "creatives")
                .map((item, index) => {
                  return (
                    <li
                      className={`service-item-list ${manrope.variable}`}
                      key={index}
                    >
                      {item.label}
                    </li>
                  );
                })}
            </ul>
            <ul className="services-list">
              {servicesLink
                .filter((item) => item.category === "designs")
                .map((item, index) => {
                  return (
                    <li
                      className={`service-item-list ${manrope.variable}`}
                      key={index}
                    >
                      {item.label}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="bottom-footer-part">
          <p className={`${manrope.variable} copyright-text`}>
            All Rights Reserved Copyright © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
