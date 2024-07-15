"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Sora } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import dailyDesignLogo from "@/public/assets/header/dailydesign_logo.svg";
import { Button } from "./ui/button";
import Image from "next/image";

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

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] icon-color" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-20 mb-20 w-100 flex items-center justify-center">
          <Link href="/">
            <Image
              src={dailyDesignLogo}
              priority
              quality={100}
              width={185}
              height={28}
              alt="dailydesign-logo"
            />
          </Link>
        </div>

        {/* Nav */}
        <nav className="dailydesigns-mob-menu-wrapper">
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

        {/* Header Button */}
        <div className="mt-20 w-100 flex items-center justify-center">
          <Link
            href="https://wa.me/919344338444?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
            target="_blank"
          >
            <Button className={`${sora.variable} header-button`}>
              Contact Designer
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
