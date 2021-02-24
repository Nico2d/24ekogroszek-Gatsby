import React from "react";
import "./../styles/base.css";
import { Navigation } from "./oragnisms/navigation";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/colors";
import { GlobalStyle } from "../styles/global";
import { Footer } from "./oragnisms/footer";

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      {children}

      <Footer />
    </ThemeProvider>
  );
};
