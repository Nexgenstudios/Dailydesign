"use client";

import Image from "next/image";
import { Sora, Syne } from "next/font/google";
import recentProjectImage from "@/public/assets/home/mob-app.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const SectionFive = () => {
  return (
    <section className="recent-project-wrapper pt-[45px] pb-[70px]">
      <div className="container pb-[38px]">
        <h3 className={`${syne.variable} recent-project-title`}>
          Checkout our <span>Recent Projects</span>
        </h3>
        <p className={`${sora.variable} subtitle`}>
          Serving customized needs for start-ups
        </p>
      </div>
      <div className="recent-project-image-wrapper">
        <Image
          src={recentProjectImage}
          priority
          quality={100}
          width={"100%"}
          height={"auto"}
          unoptimized={true}
          alt="recent-project-img"
        />
      </div>
      <div className="link-wrapper-main">
        <Link href="/" className="link-wrapper">
          <h2 className={`${sora.variable} view-portfolio-text`}>
            View Portfolio
          </h2>
          <BsArrowRight className="arrow-link" />
        </Link>
      </div>
    </section>
  );
};

export default SectionFive;
