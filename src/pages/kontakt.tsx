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
import { OpenHours } from "../components/molecules/open-hours";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { device } from "../styles/breakpoints";

const contact = require("../assets/contact_icon.svg");

const Kontakt = () => {
  const isDesktop = useMediaQuery(device.tablet);
  return (
    <Layout>
      <StyledWhitespace height={5} />

      <Container style={{ position: "relative" }}>
        {isDesktop && <ContactSVG />}
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

        <OpenHours />
      </Container>
    </Layout>
  );
};

export default Kontakt;

const ContactSVG = styled.div`
  position: absolute;
  background-image: url(${contact});
  background-repeat: no-repeat;
  background-size: cover;
  top: -40%;
  right: -40px;
  width: 500px;
  height: 500px;
  content: "";
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
