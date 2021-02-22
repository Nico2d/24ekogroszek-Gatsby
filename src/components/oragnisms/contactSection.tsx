import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/container";
import phone from "../../assets/phone.png";
import { device, size } from "../../Styles/breakpoints";
import { IconPhone } from "../../assets/icons/iconPhone";
import { IconLocation } from "../../assets/icons/iconLocation";

export const ContactSection = () => {
  return (
    <StyledContainer>
      <ContentWrapper>
        <Heading>
          <b>Masz pytania? </b>Skontaktuj się z nami
        </Heading>

        <RowSection>
          <IconPhone /> 500 400 348
        </RowSection>
        <RowSection>
          <IconPhone />
          500 300 158
        </RowSection>

        <Heading>Obsługujemy także na miejscu</Heading>

        <RowSection>
          <IconLocation />
          Opole ul. Wspólna 1
        </RowSection>
      </ContentWrapper>
    </StyledContainer>
  );
};

const ContentWrapper = styled(Container)`
  display: block;
`;

const StyledContainer = styled.div`
  background-image: url(${phone});
  background-repeat: no-repeat;
  background-position: 75% 0%;
  background-size: 100rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
  font-weight: 300;

  @media ${device.tablet} {
    background-position: top right;
    background-size: cover;
    height: 550px;
  }

  b {
    font-weight: 700;
    background: -webkit-linear-gradient(#f2994a, #eb5757);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Heading = styled.h3`
  margin-top: 3rem;
  line-height: initial;
  font-size: 1.8rem;
`;

const RowSection = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin: 0;
  margin-top: 0.5rem;
  margin-right: 0.5rem;

  > svg {
    margin-right: 0.5rem;
    fill: black;
  }
`;
