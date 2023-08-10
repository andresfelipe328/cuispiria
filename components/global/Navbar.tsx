import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import Burger from "./Burger";
import Logout from "../auth/Logout";

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

const Navbar = async () => {
  // Checks for authentication
  const session = await getServerSession(authOptions);

  return (
    <>
      <header className="sticky top-0 p-4 flex items-center justify-around bg-main z-50">
        <div className="flex flex-1 items-center justify-start gap-4">
          <Image
            src="/cuispiria.svg"
            width={70}
            height={70}
            alt="app logo"
            priority
          />
          <h1>CUISPIRIA</h1>
        </div>

        <nav
          className={`relative flex ${
            session ? "justify-center" : "justify-end"
          } flex-1`}
        >
          <ul className="gap-5 items-center hidden md:flex origin-right transition-all duration-200 ease-in-out">
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

        {session && (
          <div className="hidden md:flex items-center justify-end flex-1 gap-2">
            <Image
              src={session!.user!.image!}
              width={50}
              height={50}
              alt="app logo"
              className="rounded-full border-4 border-light shadow-small"
              priority
            />
            <Logout />
          </div>
        )}
      </header>

      <Burger />
    </>
  );
};

export default Navbar;
