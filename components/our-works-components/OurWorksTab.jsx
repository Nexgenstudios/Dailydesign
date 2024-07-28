"use client";

import { Sora } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div className="pricing-tab">
        <div className="pricing-inner-wrapper">
          <div
            className={cn(
              "flex flex-row items-center px-[5px] py-[5px] justify-between [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
              containerClassName
            )}
          >
            {propTabs.map((tab, idx) => (
              <button
                key={tab.title}
                onClick={() => {
                  moveSelectedTabToTop(idx);
                }}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className={cn(
                  "relative rounded-[8px] px-[15px] py-[14px]",
                  tabClassName
                )}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {active.value === tab.value && (
                  <motion.div
                    layoutId="clickedbutton"
                    transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                    className={cn(
                      "absolute inset-0 bg-gradient-to-r from-[#fce1ae] to-[#a77610] dark:bg-zinc-800 rounded-[8px] ",
                      activeTabClassName
                    )}
                  />
                )}

                <span
                  className={`relative block tab-button-text ${sora.variable} ${
                    active.value === tab.value
                      ? "text-black font-semibold"
                      : "text-white hover:text-white/60"
                  }`}
                >
                  {tab.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-[71px]", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({ className, tabs, hovering }) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full mb-[80px]">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            //   scale: 1 - idx * 0.1,
            //   top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 0, 0] : 0,
          }}
          className={cn("w-full h-full  absolute top-0 left-0", className)}
        >
          <div className={`w-[90%] mx-[auto]`}>{tab.content}</div>
        </motion.div>
      ))}
    </div>
  );
};
