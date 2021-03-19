import React from "react";
import "../styles/base.css";
import { Navigation } from "./organisms/navigation";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/colors";
import { GlobalStyle } from "../styles/global";
import { Footer } from "./organisms/footer";
import SEO from "./seo";

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <GlobalStyle />
      <Navigation />
      {children}

      <Footer />
    </ThemeProvider>
  );
};
