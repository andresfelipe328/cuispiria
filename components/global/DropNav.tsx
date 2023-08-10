"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import { useSession } from "next-auth/react";

import Logout from "../auth/Logout";

import { FaTimes } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { AiTwotoneCalendar } from "react-icons/ai";
import { GiBubblingBowl } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { BsListUl } from "react-icons/bs";

type Props = {
  show: boolean;
  setShow: Function;
};

const NAVLINKS = [
  {
    icon: BiSolidDashboard,
    href: "/",
    text: "Dashboard",
  },
  {
    icon: GiBubblingBowl,
    href: "/search-recipe",
    text: "Search Recipes",
  },
  {
    icon: AiTwotoneCalendar,
    href: "/meal-planning",
    text: "Meal Planning",
  },
  {
    icon: BsListUl,
    href: "/your-recipes",
    text: "Your Recipes",
  },
  {
    icon: IoMdSettings,
    href: "/settings",
    text: "Settings",
  },
];

const DropNav = ({ show, setShow }: Props) => {
  const { data: session, status } = useSession();
  const handleDroNav = useCallback(() => {
    const windowSize = window.innerWidth;
    if (show && windowSize > 767) setShow(!show);
  }, [show, setShow]);

  useEffect(() => {
    window.addEventListener("resize", handleDroNav);

    return () => window.removeEventListener("resize", handleDroNav);
  }, [handleDroNav]);

  return (
    <div className="absolute z-50 top-0 right-0 flex flex-col gap-2 items-center justify-center p-2 bg-main  w-full h-full">
      <button
        onClick={() => setShow(!show)}
        className="group absolute top-4 right-4"
      >
        <FaTimes className="text-dark group-hover:scale-105 group-hover:rotate-180 transition-all duration-200 ease-in-out" />
      </button>
      <div className="flex flex-col gap-5">
        {NAVLINKS.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="group flex items-center gap-4"
          >
            <link.icon className="icon" />
            <small className="group-hover:text-light transition-all duration-200 ease-in-out">
              {link.text}
            </small>
          </Link>
        ))}

        {session && (
          <div className="absolute bottom-5 right-5 flex items-center gap-2">
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
      </div>
    </div>
  );
};

export default DropNav;
