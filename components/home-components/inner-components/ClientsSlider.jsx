"use client";

import { Inter } from "next/font/google";
import oracleIcon from "@/public/assets/home/clients-logos/oracle.png";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const ClientsSlider = () => {
  return (
    <div className="client-slider-main-wrapper">
      <div className="client-slider-inner-wrapper">
        {Array(18)
          .fill(null)
          .map((_, index) => {
            return (
              <div key={index} className="clientSliderItem">
                <p className={`${inter.variable} worked-year`}>2023</p>
                <Image
                  src={oracleIcon}
                  priority
                  quality={100}
                  style={{ marginTop: 20 }}
                  width={"100%"}
                  height={"auto"}
                  alt="clients-logo"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ClientsSlider;
