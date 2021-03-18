import React from "react";
import { HeadingSection } from "../components/atoms/heading-section";
import { Layout } from "../components/layout";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { Container } from "../components/atoms/container";
import { StyledWhitespace } from "../components/atoms/whitespace";

const Kontakt = () => {
  return (
    <Layout>
      <StyledWhitespace height={10} />
      <Container>
        <HeadingSection title="Masz pytania?" />
        <p>Zadzwoń i umów się na dostawę</p>
        <p>
          <FaPhoneAlt />
          500 300 158
        </p>
        <p>
          <FaPhoneAlt />
          502 228 332
        </p>
        <p>
          <FaEnvelope />
          ttcom@interia.pl
        </p>
        <HeadingSection title="Odwiedź nas na miejscu" />
      </Container>
    </Layout>
  );
};

export default Kontakt;
