"use client";

import React from "react";

var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client side only code
  window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import abraham_work_1 from "@/public/assets/home/testimonials/works-images/abrham_works.png";
import abraham_work_2 from "@/public/assets/home/testimonials/works-images/abrham_works_2.png";
import naresh_work from "@/public/assets/home/testimonials/works-images/naresh_works.png";
import fiverrLogo from "@/public/assets/home/testimonials/company-logo/fiverr_logo.png";
import linkedinLogo from "@/public/assets/home/testimonials/company-logo/linkedin_logo.png";
import upLogo from "@/public/assets/home/testimonials/company-logo/up_logo.png";
import cinchLogo from "@/public/assets/home/testimonials/position-logo/cinch.png";
import feebackerOne from "@/public/assets/home/testimonials/feedbacker-images/Image_1.png";
import feebackerTwo from "@/public/assets/home/testimonials/feedbacker-images/Image_2.png";
import feebackerThree from "@/public/assets/home/testimonials/feedbacker-images/Image_3.png";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Roboto } from "next/font/google";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const dailyDesignTestimonial = [
  {
    name: "Abraham John",
    position: "Manager",
    companyLogo: fiverrLogo,
    positionLogo: cinchLogo,
    feedback:
      "A big thank you for @dailydesign_DD. Their professionalism, creativity, and attention to detail are unmatched. I was nervous about the project at first, but their team reassured me at meeting, making sure I was happy with the progress. The final product exceeded all my expectations. It’s elegant, functional, and exactly what I needed.",
    workImage: abraham_work_1,
    feedbackerImage: feebackerOne,
    postedData: "NOV 2023",
    path: "/",
  },
  {
    name: "Abraham John",
    position: "Entrepreneur",
    companyLogo: linkedinLogo,
    feedback:
      "Shoutout to @Aravind and @dailydesign_DD for exceeding our expectations with your amazing designs! Our users are as impressed as we are. Eager to work together again 🤝Shoutout to @Aravind and @dailydesign_DD for exceeding our expectations with your amazing designs! Our users are as impressed as we are. Eager to work together again 🤝",
    workImage: abraham_work_2,
    feedbackerImage: feebackerTwo,
    postedData: "NOV 2023",
    path: "/",
  },
  {
    name: "Abraham John",
    position: "Manager",
    companyLogo: upLogo,
    feedback:
      "I’m using @dailydesign/DD for the 7th time, still there you’re providing your service as the 1st time you assured me. You guys have a long way !! I’m using @dailydesign/DD for the 7th time, still there you’re providing your service as the 1st time you assured me. You guys have a long way !!",
    workImage: naresh_work,
    feedbackerImage: feebackerThree,
    postedData: "NOV 2023",
    path: "/",
  },
  {
    name: "Abraham John",
    position: "Manager",
    companyLogo: fiverrLogo,
    positionLogo: cinchLogo,
    feedback:
      "A big thank you for @dailydesign_DD. Their professionalism, creativity, and attention to detail are unmatched. I was nervous about the project at first, but their team reassured me at meeting, making sure I was happy with the progress. The final product exceeded all my expectations. It’s elegant, functional, and exactly what I needed.",
    workImage: abraham_work_1,
    feedbackerImage: feebackerOne,
    postedData: "NOV 2023",
    path: "/",
  },
];

const prev = <IoArrowBackCircleOutline className="arrow-color" />;
const next = <IoArrowForwardCircleOutline className="arrow-color" />;

const responsiveOptions = {
  margin: 21,
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2500,
  smartSpeed: 1000,
  autoplayHoverPause: true,
  navText: [prev, next],
  responsive: {
    0: { items: 1, nav: false, dots: true },
    768: { items: 2, nav: false, dots: true },
    1280: { items: 3 },
    1920: { items: 3 },
  },
};

const Testimonials = () => {
  return (
    <div className="dailydesign-testimonial">
      <div className="container">
        <OwlCarousel className="owl-theme" {...responsiveOptions}>
          {dailyDesignTestimonial.map((item, index) => {
            return (
              <div key={index} className="testimonial-box-item">
                <div className="testi-top-part">
                  <div className="profile-info-wrapper">
                    <div className="profile-icon">
                      <Image
                        src={item.feedbackerImage}
                        priority
                        quality={100}
                        width={43}
                        height={43}
                        alt="feebacker-image"
                      />
                    </div>
                    <div className="profile-info">
                      <p className={`${roboto.variable} name`}>{item.name}</p>
                      <div className="position-wrapper">
                        <p
                          className={`${roboto.variable} position`}
                          style={{ marginRight: 5 }}
                        >
                          {item.position}
                        </p>
                        {item.positionLogo && (
                          <div className="flex items-center">
                            <p className="position" style={{ marginRight: 5 }}>
                              @
                            </p>
                            <Image
                              src={item.positionLogo}
                              priority
                              quality={100}
                              width={"100%"}
                              height={"auto"}
                              alt="position-image"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="company-logo-wrapper">
                    <Image
                      src={item.companyLogo}
                      priority
                      quality={100}
                      width={40}
                      height={40}
                      alt="company-image"
                    />
                  </div>
                </div>
                <div className="testi-middle-part">
                  <p
                    className={`${roboto.variable} feedback-comment`}
                    dangerouslySetInnerHTML={{
                      __html: item.feedback.replace(/\n/g, "<br/>"),
                    }}
                  ></p>
                  <Image
                    src={item.workImage}
                    priority
                    quality={100}
                    width={"100%"}
                    height={208}
                    alt="work-image"
                  />
                </div>
                <div className="testi-footer-part">
                  <Link
                    href={item.path}
                    className={`${roboto.variable} testimonial-link`}
                  >
                    View Project
                    <RiArrowRightUpLine className="arrow-link" />
                  </Link>
                  <p className={`${roboto.variable} posted-date`}>
                    {item.postedData}
                  </p>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonials;
