import React from "react";
import Link from "next/link";
import Image from "next/image";

import { BiSolidDashboard } from "react-icons/bi";
import { AiTwotoneCalendar } from "react-icons/ai";
import { GiBubblingBowl } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { BsListUl } from "react-icons/bs";

const NAVLINKS = [
  {
    icon: BiSolidDashboard,
    href: "/",
  },
  {
    icon: GiBubblingBowl,
    href: "/search-recipe",
  },
  {
    icon: AiTwotoneCalendar,
    href: "/meal-planning",
  },
  {
    icon: BsListUl,
    href: "/your-recipes",
  },
  {
    icon: IoMdSettings,
    href: "/settings",
  },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 p-4 flex items-center justify-between gap-8 bg-main z-50">
      <div className="flex items-center gap-4">
        <Image src="/cuispiria.svg" width={70} height={70} alt="app logo" />
        <h1>CUISPIRIA</h1>
      </div>
      <nav>
        <ul className="flex gap-10 items-center">
          {NAVLINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group flex items-center gap-1"
            >
              <link.icon className="icon" />
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;