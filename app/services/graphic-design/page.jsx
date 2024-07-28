import { Sora, Inter } from "next/font/google";
import PricingTabBox from "@/components/home-components/inner-components/pricing/PricingTabBox";
import startupEss from "@/public/assets/home/pricing/website/startup_essent.png";
import festiveWishes from "@/public/assets/home/pricing/website/festival_wishes.png";
import graphicDesign from "@/public/assets/home/pricing/website/graphicDesign.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const graphicContent = [
  {
    image: startupEss,
    title: "Start-up Essentials",
    offer: "You save $24.00 a year",
    features: [
      "Business cards (Front & Back)",
      "Logo with 3 variations",
      "Company letterhead",
      "Digital thumbnails",
      "Bill book design",
    ],
  },
  {
    isGold: true,
    image: graphicDesign,
    title: "SM Graphic Design",
    offer: "You save $24.00 a year",
    features: [
      "30 Days Design service /Month",
      "20 Graphic Design Post",
      "10 Videos - Mp4, GIF",
      "Digital Thumbnails, Logo",
      "Content Writing for Post",
      "Revisions Accepted",
      "Brand Guidance",
    ],
  },
  {
    image: festiveWishes,
    title: "Festival Wishes",
    offer: "You save $24.00 a year",
    features: [
      "50 Festival Creative Designs",
      "Customized Names & Photos",
      "Customized Content Writing",
      "Monthly Newsletters",
      "10 Festival GIF",
    ],
  },
];

const GraphicDesignPage = () => {
  return (
    <section className="common-pricing-page-wrapper">
      <div className="container pricing-title-wrapper">
        <h2 className={` ${inter.variable} title`}>Our Creative Packages</h2>
        <p className={`${inter.variable} subtitle`}>
          Have Supported 700+ Corporates
        </p>
      </div>
      <div className={`w-[90%] mx-[auto] mt-[80px]`}>
        <PricingTabBox pricingContent={graphicContent} />
      </div>
    </section>
  );
};

export default GraphicDesignPage;
