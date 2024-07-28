"use client";

import { useState } from "react";
import { Sora } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const DailyDesignLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Our Works",
    path: "/our-works",
  },
  {
    label: "Our Services",
    subMenu: [
      {
        label: "Graphic design",
        path: "/services/graphic-design",
      },
      {
        label: "Website design",
        path: "/services/website-design",
      },
      {
        label: "App design",
        path: "/services/app-design",
      },
    ],
  },
  {
    label: "Resource",
    path: "/resource",
  },
];

const Nav = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => setActiveIndex(index);
  const handleMouseLeave = () => setActiveIndex(null);

  const isSubMenuActive = (subMenu) => {
    return subMenu.some((item) => pathname.startsWith(item.path));
  };

  return (
    <nav className="dailydesigns-menu-wrapper">
      {DailyDesignLinks.map((item, index) =>
        item.path ? (
          <Link
            key={item.path} // Use unique path as key
            href={item.path}
            className={`${sora.variable} menu-item ${
              pathname === item.path ? "active-menu-item" : ""
            }`}
          >
            {item.label}
          </Link>
        ) : (
          <div
            key={item.label} // Use unique label as key
            className={`submenu-main-wrapper ${
              item.subMenu && isSubMenuActive(item.subMenu) ? "active" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center">
              <span className={`${sora.variable} submenu-item`}>
                {item.label}
              </span>
              {item.subMenu && (
                <MdOutlineKeyboardArrowDown className="ml-[5px] text-black" />
              )}
            </div>
            <AnimatePresence>
              {item.subMenu && activeIndex === index && (
                <motion.ul
                  className="submenu-drpdown-wrapper"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.subMenu.map((subLink) => (
                    <li
                      key={subLink.path} // Use unique path as key
                      className={`submenu-link-item ${
                        pathname.startsWith(subLink.path) ? "active" : ""
                      }`}
                    >
                      <Link
                        className={`${sora.variable} link`}
                        href={subLink.path}
                      >
                        {subLink.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        )
      )}
    </nav>
  );
};

export default Nav;
