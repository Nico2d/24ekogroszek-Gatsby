import { Link } from "gatsby";
import React from "react";

export const NavigationList = () => {
  return (
    <>
      <Link to="/produkty">Katalog produktów</Link>
      <Link to="/partners">Partnerzy</Link>
      <Link to="/contact">Kontakt</Link>
    </>
  );
};
