import React from "react";
import styled from "styled-components";
import { IconPhone } from "../../assets/icons/iconPhone";
import { IconMail } from "../../assets/icons/iconMail";
import LogoWhite from "../../assets/logo-white.png";
import { Container } from "../atoms/container";
import background from "../../assets/footer.svg";
import { device } from "../../Styles/breakpoints";

export const Footer = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <Logo>
          <img src={LogoWhite} />
        </Logo>
        <Heading>Kontakt</Heading>
        <RowSection>
          <IconPhone /> 500 300 158
        </RowSection>
        <RowSection>
          <IconPhone /> 502 228 332
        </RowSection>
        <RowSection>
          <IconMail /> 48-837 Opole ul. Wspólna 1
        </RowSection>

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
  background: #2d2d2d;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: -90px;
  color: ${({ theme }) => theme.colors.white};

  @media ${device.tablet} {
    background-position: -180px;
  }

  @media ${device.laptopM} {
    background-position: right;
  }
`;

const Logo = styled.div`
  margin-bottom: 2rem;
  width: 200px;
`;

const RowSection = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin: 0;
  margin-top: 0.5rem;
  margin-right: 0.5rem;

  > svg {
    margin-right: 0.5rem;
    fill: white;
  }
`;

const Info = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;
