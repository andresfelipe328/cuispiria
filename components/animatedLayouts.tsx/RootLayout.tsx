"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  // Variables
  const rootRef = useRef<HTMLDivElement>(null);

  // Animation
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(rootRef.current, {
        opacity: 1,
        duration: 0.25,
      });

      return () => ctx.revert();
    }, rootRef);
  }, []);

  return (
    <main
      className="root h-screen flex flex-col overflow-auto"
      style={{ opacity: 0 }}
      ref={rootRef}
    >
      {children}
    </main>
  );
};

export default RootLayout;
