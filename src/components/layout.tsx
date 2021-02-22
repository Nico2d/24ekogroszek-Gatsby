import React from "react";
import "./base.css";
import Container from "./container";
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
