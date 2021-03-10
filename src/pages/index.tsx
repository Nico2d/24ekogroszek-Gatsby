import React from "react";
import { Hero } from "../components/oragnisms/hero";
import { Layout } from "../components/layout";
import { TextWithImage } from "../components/oragnisms/textWithImage";
import { ContactSection } from "../components/oragnisms/contactSection";
import { TransportSection } from "../components/oragnisms/transportSection";
import { HeadingSection } from "../components/atoms/headingSection";
import { StyledWhitespace } from "../components/atoms/whitespace";
import { Container } from "../components/atoms/container";
import { RecommendedProducts } from "../components/oragnisms/recommended-products";

const RootIndex = () => {
  return (
    <Layout>
      <Hero />

      <TextWithImage />
      <ContactSection />

      <Container>
        <StyledWhitespace height={3} />
        <HeadingSection title="Polecane produkty" />
        <RecommendedProducts />
        <StyledWhitespace height={3} />
        <HeadingSection title="Transport" />
        <TransportSection />
      </Container>
    </Layout>
  );
};

export default RootIndex;
