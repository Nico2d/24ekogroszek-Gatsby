import React from "react";
import { HeadingSection } from "../components/atoms/heading-section";
import { Layout } from "../components/layout";
import { HiOutlinePhone } from "@react-icons/all-files/hi/HiOutlinePhone";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { Container } from "../components/atoms/container";
import { StyledWhitespace } from "../components/atoms/whitespace";
import { IconWithText } from "../components/atoms/icon-with-text";
import styled from "styled-components";
import { HiOutlineLocationMarker } from "@react-icons/all-files/hi/HiOutlineLocationMarker";
import { Map } from "../components/molecules/map";

const Kontakt = () => {
  return (
    <Layout>
      <StyledWhitespace height={5} />
      <Container>
        <StyledHeaderSection>
          <HeadingSection title="Masz pytania?" />
          <h3>Zadzwoń i umów się na dostawę</h3>
        </StyledHeaderSection>

        <IconWithText>
          <HiOutlinePhone />
          500 300 158
        </IconWithText>
        <IconWithText>
          <HiOutlinePhone />
          502 228 332
        </IconWithText>
        <IconWithText>
          <HiOutlineMail />
          ttcom@interia.pl
        </IconWithText>

        <StyledHeaderSection>
          <HeadingSection title="Odwiedź nas na miejscu" />
        </StyledHeaderSection>
        <IconWithText>
          <HiOutlineLocationMarker />
          48-837 Opole ul. Wspólna 1
        </IconWithText>
      </Container>
      <StyledWhitespace height={2} />
      <Map />

      <Container>
        <StyledHeaderSection>
          <HeadingSection title="Godziny otwarcia" />
        </StyledHeaderSection>
        <StyledWhitespace height={3} />

        <HoursContainer>
          <HourWrapper>
            <Hour>
              09<sup>00</sup>-17<sup>00</sup>
            </Hour>
            <Description>PN-PT</Description>
          </HourWrapper>

          <HourWrapper>
            <Hour>
              09<sup>00</sup>-13<sup>00</sup>
            </Hour>
            <Description>SOBOTA</Description>
          </HourWrapper>

          <HourWrapper>
            <Hour>Zamknięte</Hour>
            <Description>NIEDZIELA</Description>
          </HourWrapper>
        </HoursContainer>
      </Container>
    </Layout>
  );
};

export default Kontakt;

const HoursContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Hour = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0.1em;
  margin-bottom: 0;

  sup {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-style: italic;
  font-weight: 300;
`;

const HourWrapper = styled.div`
  text-align: center;
`;

const StyledHeaderSection = styled.div`
  h2 {
    margin-bottom: -0.5rem;
    margin-top: 5rem;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
`;
