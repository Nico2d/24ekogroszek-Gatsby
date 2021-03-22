import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { IconMenu } from "../../assets/icons/iconMenu";
import { IconClose } from "../../assets/icons/iconClose";
import { NavigationList } from "../molecules/navigation-list";
import { Container } from "../atoms/container";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { device } from "../../styles/breakpoints";

const logoWhite = require("../../../static/assets/logo-white.png");
const logoBlack = require("../../../static/assets/logo-black.svg");

export const Navigation = () => {
  const isDesktop = useMediaQuery(device.tablet);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isClosed, setClosed] = useState(true);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(location.pathname == "/");

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledNavbar isHero={isHome && scrollPosition === 0 && isClosed}>
      <StyledContainer>
        <Logo to="/">
          <img
            src={
              isHome && scrollPosition === 0 && isClosed ? logoWhite : logoBlack
            }
            alt="logo"
            aria-label="strona główna"
            width="200"
            height="43.83"
          />
        </Logo>

        {isDesktop ? (
          <LinkWrapper>
            <NavigationList />
          </LinkWrapper>
        ) : (
          <>
            <LinkWrapper onClick={() => setClosed(!isClosed)}>
              {isClosed ? <IconMenu /> : <IconClose />}
            </LinkWrapper>
            <MobileNavigation isClosed={isClosed}>
              <NavigationList />
            </MobileNavigation>
          </>
        )}
      </StyledContainer>
    </StyledNavbar>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const StyledNavbar = styled.nav<{ isHero: boolean }>`
  display: inline-flex;
  height: 65px;
  background: ${({ theme, isHero }) =>
    isHero ? "transparent" : theme.colors.white};
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;
  ${({ isHero }) => !isHero && "box-shadow: 0px 2px 10px 0 rgb(0 0 0 / 50%)"};
  color: ${({ theme, isHero }) =>
    isHero ? theme.colors.white : theme.colors.fontColor};
  fill: ${({ theme, isHero }) =>
    isHero ? theme.colors.white : theme.colors.fontColor};

  @media ${device.tablet} {
    height: 95px;
  }

  @media ${device.laptopM} {
    > div {
      padding: 0;
    }
  }
`;

const LinkWrapper = styled.div`
  margin: auto 0;
  padding: 0 1rem;
  font-size: 1.2rem;

  * {
    margin-left: 2rem;
  }

  > svg {
    width: 35px;
    height: 35px;
    fill: inherit;
  }
`;

const Logo = styled(Link)`
  margin: auto 0;
  width: 200px;

  @media ${device.laptop} {
    height: fit-content;
    width: auto;
  }
`;

const MobileNavigation = styled.div<{ isClosed: boolean }>`
  display: ${({ isClosed }) => (isClosed ? "none" : "flex")};
  flex-flow: column;
  position: absolute;
  left: 0px;
  bottom: -220px;
  text-align: center;
  background: ${({ theme }) => theme.colors.white};
  width: 100vw;
  font-size: 1.3rem;
  padding: 1rem;
  box-shadow: 0px 10px 10px 0 rgb(0 0 0 / 50%);
  z-index: 1;

  > * {
    padding: 1rem;
    border-top: 1px solid gray;
  }
`;
