import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  show: boolean;
  setShow: Function;
  style: string;
  children: React.ReactNode;
};

const CollapseLayout = ({ show, setShow, style, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (show) {
      gsap.to(ref.current, {
        duration: 0.25,
        y: 0,
        opacity: 1,
        visibility: "visible",
        pointerEvents: "all",
        ease: "power2.out",
      });
    } else {
      gsap.to(ref.current, {
        duration: 0.25,
        y: -5,
        opacity: 0,
        pointerEvents: "none",
        ease: "power2.out",
      });
    }
  }, [show]);

  return (
    <div className={style} ref={ref}>
      {children}
    </div>
  );
};

export default CollapseLayout;
