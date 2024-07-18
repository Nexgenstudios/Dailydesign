import { Sora, Inter } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import founderImg from "@/public/assets/home/aravind.png";
import whatsappIcon from "@/public/assets/home/whatsapp.svg";
import Link from "next/link";

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

const servicesAndAMountList = [
  {
    service: "Graphic Design Service",
    amt: "From ₹4,000",
  },
  {
    service: "Website Development Service",
    amt: "From ₹6,000",
  },
  {
    service: "SAAS App Development Service",
    amt: "From ₹8,000",
  },
];

const pingfangsc = localFont({
  src: [
    {
      path: "./pingfangsc-font/pingfangthin.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./pingfangsc-font/pingfanglight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./pingfangsc-font/pingfangregular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./pingfangsc-font/pingfangmedium.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./pingfangsc-font/pingfangsemibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./pingfangsc-font/pingfangbold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  subsets: ["sans-serif"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-pingfangsc",
});

const SectionSeven = () => {
  return (
    <section className="contact-exective-wrapper">
      <div className="contact-executive-container">
        <div className="priceList-wrapper">
          <h2 className={`${pingfangsc.variable} pricelist-contact-heading`}>
            <span>Contact your design manager</span> to complete your work
            effortlessly.
          </h2>
          <ul className="services-provide-list">
            {servicesAndAMountList.map((service, index) => {
              return (
                <li className="services-provide-list-item" key={index}>
                  <span className={pingfangsc.variable}>{service.service}</span>
                  <span className={pingfangsc.variable}>{service.amt}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="founder-data-wrapper">
          <div className="founder-image-wrapper">
            <Image
              src={founderImg}
              priority
              quality={100}
              width={"100%"}
              height={"auto"}
              alt="founder-img"
            />
          </div>
          <div className="founder-details-wrapper">
            <p className={`${sora.variable} texts`}>
              I&apos;m Aravind,
              <br /> <span>Founder at Daily Design</span>
              <br /> will answer all your questions.
            </p>
          </div>
          <div className="founder-cta-wrapper">
            <Link
              href="https://wa.me/919344338444?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
              target="_blank"
              className={`${inter.variable} ask-quest-btn`}
            >
              Ask Questions
              <Image
                src={whatsappIcon}
                priority
                quality={100}
                width={"100%"}
                height={"auto"}
                alt="whatsapp-img"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
