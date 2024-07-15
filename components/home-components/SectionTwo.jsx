import Link from "next/link";
import { Sora, DM_Sans, Syne } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/button";
import Testimonials from "./inner-components/Testimonials";
import ClientsSlider from "./inner-components/ClientsSlider";

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

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-dmSans",
});

const SectionTwo = () => {
  return (
    <section className="clients-testimonial-main-wrapper">
      <div className="testimonial-clients-wrapper">
        <div className="container">
          <div className="main-header">
            <h2 className={`${sora.variable} heading`}>
              We Delivered our <br /> Promises,{" "}
              <span className="gradient-text">
                <span className="next-for-you">Next For You?</span>
              </span>
            </h2>
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
        <div className="testimonial-wrapper">
          <Testimonials />
        </div>
        <div className="container">
          <div className="main-header-2">
            <h2 className={`${syne.variable} heading`}>
              10+Years of{" "}
              <span className="gradient-text">
                <span className="experience">Experience</span>
              </span>{" "}
              with Big Brands
            </h2>
          </div>
        </div>
        <div className="clients-slider">
          <ClientsSlider />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
