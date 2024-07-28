"use client";

import { Sora, Manrope } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import checkCircle from "@/public/assets/home/pricing/check-circle-bullet.png";
import checkCircleBlack from "@/public/assets/home/pricing/check-circle-black.png";
import { IoMdInformationCircle } from "react-icons/io";
import { Button } from "../../../ui/button";

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

function PricingTabBox({ pricingContent }) {
  return (
    <div className="pricing-box-wrapper">
      {pricingContent.map((pricingItem, index) => {
        return (
          <>
            <div
              key={index}
              className={`pricing-box-item ${
                pricingItem?.isGold ? "specialOne" : ""
              }`}
            >
              <div className="pricing-box-inner-item">
                <div className="pricing-inner-box-wrapper">
                  <Image
                    src={pricingItem.image}
                    alt="pricing Image"
                    width={90}
                    height={90}
                    quality={100}
                  />
                  <h2 className={`${sora.variable} pricing-name`}>
                    {pricingItem.title}
                  </h2>
                  <div className="pricing-capsule">
                    <span className={` ${manrope.variable} text`}>
                      {pricingItem.offer}
                    </span>
                    <IoMdInformationCircle className="pricing-icon" />
                  </div>
                  <Button className={`${sora.variable} pricing-button`}>
                    Enquire Now
                  </Button>
                  <ul className="pricing-offers-list-wrapper">
                    {Object.values(pricingItem.features).map(
                      (feature, index) => {
                        return (
                          <li key={index} className="pricing-offers-list-items">
                            <Image
                              src={
                                pricingItem?.isGold
                                  ? checkCircleBlack
                                  : checkCircle
                              }
                              alt="checkCircle"
                              width={20}
                              height={20}
                              quality={100}
                            />
                            <span className={` ${manrope.variable} `}>
                              {feature}
                            </span>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default PricingTabBox;
