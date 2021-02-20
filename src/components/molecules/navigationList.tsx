import { Link } from "gatsby";
import React from "react";

export const NavigationList = () => {
  return (
    <>
      <Link to="/catalog">Katalog produktów</Link>
      <Link to="/partners">Partnerzy</Link>
      <Link to="/contact">Kontakt</Link>
    </>
  );
};
