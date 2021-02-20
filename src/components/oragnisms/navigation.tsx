import React from "react";
import { MobileLabel } from "../molecules/mobileLabel";
import { OutsideEvent } from "../atoms/OutsideEvent";
import { useState } from "react";
import { device } from "../../Styles/breakpoints";
import { useMediaQuery } from "../../Hooks/useMediaQuery";

export const Navigation = ({ children }) => {
  const [isHidden, setIsHidden] = useState(true);
  const isDesktop = useMediaQuery(device.tablet);

  const toggleNavigation = () => {
    setIsHidden(!isHidden);
  };

  if (isDesktop) return <> {children} </>;

  return (
    <OutsideEvent method={toggleNavigation} isActive={isHidden}>
      <MobileLabel toggleMenu={toggleNavigation} isClosed={isHidden} />
      {!isHidden && children}
    </OutsideEvent>
  );
};
