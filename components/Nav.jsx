"use client";

import { Sora } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    label: "Resource",
    path: "/resource",
  },
  {
    label: "Services",
    path: "/services",
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
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="dailydesigns-menu-wrapper">
      {DailyDesignLinks.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className={`${sora.variable} menu-item ${
              item.path === pathname && `active-menu-item`
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
