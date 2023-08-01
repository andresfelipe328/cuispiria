import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  show: boolean | null;
  setShow: Function;
  style: string;
  children: React.ReactNode;
};

const CollapseLayout = ({ show, setShow, style, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (show === true) {
      gsap.to(ref.current, {
        duration: 0.25,
        y: 0,
        opacity: 1,
        visibility: "visible",
        pointerEvents: "all",
        ease: "power2.out",
      });
    } else if (show === false) {
      gsap.to(ref.current, {
        duration: 0.25,
        y: -5,
        opacity: 0,
        visibility: "invisible",
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
