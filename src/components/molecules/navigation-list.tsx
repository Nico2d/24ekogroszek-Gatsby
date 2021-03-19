import { Link } from "gatsby";
import React from "react";

export const NavigationList = () => {
  return (
    <>
      <Link to="/produkty">Katalog produktów</Link>
      <Link to="/partnerzy">Partnerzy</Link>
      <Link to="/kontakt">Kontakt</Link>
    </>
  );
};
