import React from "react";
import "./base.css";
import Container from "./container";
import { Navigation } from "./oragnisms/navigation";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/colors";
import { GlobalStyle } from "../styles/global";
import { NavigationList } from "./molecules/navigationList";

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Container> */}
        <Navigation> <NavigationList/></Navigation>
        {children}
      {/* </Container> */}
    </ThemeProvider>
  );
};
