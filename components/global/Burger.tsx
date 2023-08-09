"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { BiMenuAltRight } from "react-icons/bi";
import DropNav from "./DropNav";

const Burger = () => {
  const [show, setShow] = useState(false);
  const router = usePathname();

  useEffect(() => {
    if (show) setShow(!show);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <>
      <ul className="absolute z-50 top-10 right-5 scale-100 md:scale-0 origin-right transition-all duration-200 ease-in-out">
        <button onClick={() => setShow(!show)} className="group">
          <BiMenuAltRight className="icon" />
        </button>
      </ul>

      {show && <DropNav show={show} setShow={setShow} />}
    </>
  );
};

export default Burger;
