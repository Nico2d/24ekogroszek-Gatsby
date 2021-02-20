import React from "react";
import styled from "styled-components";
import { IconClose } from "../../assets/icons/iconClose";
import { IconMenu } from "../../assets/icons/iconMenu";
import logoWhite from "../../assets/logo-white.png"

export const MobileLabel: React.FC<{
  toggleMenu: () => void;
  isClosed: boolean;
}> = ({ toggleMenu, isClosed }) => {
  return (
    <Container>
      <Logo src={logoWhite}/>
      <Menu onClick={toggleMenu}>
        {isClosed ? <IconMenu /> : <IconClose />}
      </Menu>
    </Container>
  );
};

const Logo = styled.img`
  height: fit-content;
  width: 200px;
  margin: auto 0 ;
`;

const Menu = styled.div`
  margin: auto 0;
  > svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.colors.white};
  }
`;

const Container = styled.div`
  height: 50px;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.sidebar};
  color: ${({ theme }) => theme.colors.white};
  top: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  position: fixed;
  z-index: 900;
`;
