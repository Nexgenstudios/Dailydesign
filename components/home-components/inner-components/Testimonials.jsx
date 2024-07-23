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
import feebackerFour from "@/public/assets/home/testimonials/feedbacker-images/Image_4.png";
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
    name: "Sivanesh",
    position: "Founder and CEO at Kofipass @",
    companyLogo: fiverrLogo,
    // positionLogo: cinchLogo,
    feedback:
      "When my colleague recommended Aravind for my app design, I didn't know what to expect. But from the moment we started, his expertise and warm professionalism stood out. He made the entire design phase incredibly easy. The same feel as my colleague also felt with Aravind. Now I feel like if I could find a developer also like him I’d be blessed with my idea and team. Once again Thank you, Aravind!",
    workImage: abraham_work_2,
    feedbackerImage: feebackerFour,
    postedData: "June 30, 2024",
    path: "/",
  },
  {
    name: "Chandana",
    position: "Founder & CEO at Findcollab Pvt. Ltd. @",
    companyLogo: fiverrLogo,
    feedback:
      "I randomly found Aravind in a WhatsApp group and wasn't sure what to expect. But once we started working on my app, I realized he was incredible. He took my concept and inspirations and guided me through the entire design and development process with kindness and expertise. I'm so happy to have found the perfect team to realize my vision. Thank you, Aravind and team, for your incredible work. Best of luck in your careers.",
    workImage: abraham_work_2,
    feedbackerImage: feebackerTwo,
    postedData: "May 15, 2024",
    path: "/",
  },
  {
    name: "Suriya",
    position: "Manager at Cinch @",
    companyLogo: fiverrLogo,
    feedback:
      "Hi Aravind, Myself thought of giving you some feedback. Actually your team is incredibly passionate about their work. every member, from the designers, UX specialists every one is the best I’ve seen. Their timely responses and ability to incorporate feedback are outstanding. Your team is always ready to learn and grow. You've all done an excellent job. Thank you!",
    workImage: naresh_work,
    feedbackerImage: feebackerOne,
    postedData: "April 12, 2024",
    path: "/",
  },
  {
    name: "Emily Clarke",
    position: "Product Manager @",
    companyLogo: fiverrLogo,
    // positionLogo: cinchLogo,
    feedback:
      "The team at @design_hub was incredible to work with. They were attentive to our needs and delivered a product that exceeded our expectations. We will definitely work with them again.",
    workImage: abraham_work_1,
    feedbackerImage: feebackerThree,
    postedData: "March 22, 2024",
    path: "/",
  },
  {
    name: "Michael Brown",
    position: "Entrepreneur @",
    companyLogo: fiverrLogo,
    // positionLogo: cinchLogo,
    feedback:
      "@startup_designs transformed our ideas into a reality. Their attention to detail and commitment to quality were outstanding. We couldn't be happier with the final product.",
    workImage: abraham_work_1,
    feedbackerImage: feebackerThree,
    postedData: "February 18, 2024",
    path: "/",
  },
  {
    name: "Sarah Lee",
    position: "Marketing Specialist @",
    companyLogo: fiverrLogo,
    // positionLogo: cinchLogo,
    feedback:
      "I was blown away by the creativity and professionalism of @marketing_mavens. They took our brand to the next level with their innovative design solutions.",
    workImage: abraham_work_1,
    feedbackerImage: feebackerThree,
    postedData: "January 25, 2024",
    path: "/",
  },
  {
    name: "David Wilson",
    position: "CEO @",
    companyLogo: fiverrLogo,
    // positionLogo: cinchLogo,
    feedback:
      "@biz_designs provided exceptional service and delivered a product that surpassed all our expectations. Their team was responsive, creative, and professional.",
    workImage: abraham_work_1,
    feedbackerImage: feebackerThree,
    postedData: "December 10, 2023",
    path: "/",
  },
  {
    name: "Jessica Taylor",
    position: "Content Creator @",
    companyLogo: fiverrLogo,
    // positionLogo: cinchLogo,
    feedback:
      "@content_creators were fantastic to work with. They understood our vision and brought it to life with their amazing design skills. Highly recommended!",
    workImage: abraham_work_1,
    feedbackerImage: feebackerThree,
    postedData: "November 05, 2023",
    path: "/",
  },
  {
    name: "Matthew Harris",
    position: "Graphic Designer @",
    companyLogo: fiverrLogo,
    // positionLogo: cinchLogo,
    feedback:
      "@graphic_gurus exceeded our expectations with their stunning designs. Their attention to detail and creative flair made our project a huge success.",
    workImage: abraham_work_1,
    feedbackerImage: feebackerThree,
    postedData: "October 15, 2023",
    path: "/",
  },
  {
    name: "Linda Martinez",
    position: "Business Analyst @",
    companyLogo: fiverrLogo,
    // positionLogo: cinchLogo,
    feedback:
      "@business_designs delivered an outstanding product that perfectly matched our needs. Their team's professionalism and expertise were evident throughout the project.",
    workImage: abraham_work_1,
    feedbackerImage: feebackerThree,
    postedData: "September 30, 2023",
    path: "/",
  },
  {
    name: "Thompson",
    position: "Freelancer @",
    companyLogo: fiverrLogo,
    // positionLogo: cinchLogo,
    feedback:
      "@freelance_designs provided excellent service and delivered a top-notch product. Their attention to detail and creativity were greatly appreciated.",
    workImage: abraham_work_1,
    feedbackerImage: feebackerThree,
    postedData: "August 25, 2023",
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
