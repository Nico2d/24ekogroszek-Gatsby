import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logoWhite from "../../assets/logo-white.png";
import logoBlack from "../../assets/logo-black.png";

export const NavigationList = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollPosition);
  return (
    <StyledNavbar isHero={scrollPosition === 0}>
      <Container>
        <Logo src={scrollPosition === 0 ? logoWhite : logoBlack} />
        <LinkWrapper>
          <Link to="/catalog">Katalog produktów</Link>
          <Link to="/partners">Partnerzy</Link>
          <Link to="/contact">Kontakt</Link>
        </LinkWrapper>
      </Container>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav<{ isHero: boolean }>`
  height: 95px;
  background: ${({ theme, isHero }) =>
    isHero ? "transparent" : theme.colors.white};
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;
  ${({ isHero }) => !isHero && "box-shadow: 0px 2px 10px 0 rgb(0 0 0 / 50%)"};
  color: ${({ theme, isHero }) =>
    isHero ? theme.colors.white : theme.colors.fontColor};
`;

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const LinkWrapper = styled.div`
  margin: auto 0;
  font-size: 1.2rem;

  * {
    margin-left: 2rem;
  }
`;

const Logo = styled.img`
  height: fit-content;
  width: auto;
  margin: auto 0;
`;
