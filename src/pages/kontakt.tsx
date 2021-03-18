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
    </Layout>
  );
};

export default Kontakt;

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
