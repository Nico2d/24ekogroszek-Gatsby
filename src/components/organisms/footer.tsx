import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/container";
const background = require("../../assets/footer.svg");
import { device } from "../../styles/breakpoints";
import { IconWithText } from "../atoms/icon-with-text";
import { HiOutlinePhone } from "@react-icons/all-files/hi/HiOutlinePhone";
import { HiOutlineLocationMarker } from "@react-icons/all-files/hi/HiOutlineLocationMarker";

const LogoWhite = require("../../../static/assets/logo-white.png"); //("../../assets/logo-white.png");

export const Footer = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <Logo>
          <img src={LogoWhite} alt="logo" />
        </Logo>
        <Heading>Kontakt</Heading>
        <IconWithText>
          <HiOutlinePhone /> 500 300 158
        </IconWithText>
        <IconWithText>
          <HiOutlinePhone /> 502 228 332
        </IconWithText>
        <IconWithText>
          <HiOutlineLocationMarker /> 48-837 Opole ul. Wspólna 1
        </IconWithText>

        <Info>
          © ProPellet.pl 2020 | Ceny na stronie nie stanowią oferty handlowej w
          rozumieniu Kodeksu Cywilnego.
        </Info>
      </StyledContainer>
    </Wrapper>
  );
};

const Heading = styled.div`
  font-size: 1.5rem;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-flow: column;
  padding: 3rem 1rem;
`;

const Wrapper = styled.div`
  margin-top: 10rem;
  background: #2d2d2d;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: -90px;
  color: ${({ theme }) => theme.colors.white};

  @media ${device.tablet} {
    background-position: -180px;
  }

  @media ${device.laptopL} {
    background-position: right;
  }
`;

const Logo = styled.div`
  margin-bottom: 2rem;
  width: 200px;
`;

const Info = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;
