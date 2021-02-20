import React, { useEffect, useRef } from "react";

export const useOutsideEvent = (ref, method) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        method();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export const OutsideEvent = ({ children, method, isActive }) => {
  if (isActive) return <div>{children}</div>;

  const wrapperRef = useRef(null);
  useOutsideEvent(wrapperRef, method);

  return <div ref={wrapperRef}>{children}</div>;
};
