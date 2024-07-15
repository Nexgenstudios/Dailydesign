import Link from "next/link";
import { Sora } from "next/font/google";
import { Button } from "./ui/button";
import dailyDesignLogo from "@/public/assets/header/dailydesign_logo.svg";
import Image from "next/image";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const Header = () => {
  return (
    <header className={`dailydesign__main_header lg:mob_header_padd`}>
      <div className="dailydesign__header_childrens">
        {/* Logo */}
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

        {/* Desktop Nav & Contact designer */}
        <div className="hidden lg:flex">
          <Nav />
        </div>
        <div className="hidden lg:flex">
          <Link
            href="https://wa.me/919344338444?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
            target="_blank"
          >
            <Button className={`${sora.variable} header-button`}>
              Contact Designer
            </Button>
          </Link>
        </div>

        {/* Desktop Nav & Contact designer */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
