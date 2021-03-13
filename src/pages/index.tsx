import React from "react";
import { Hero } from "../components/organisms/hero";
import { Layout } from "../components/layout";
import { TextWithImage } from "../components/organisms/text-with-image";
import { ContactSection } from "../components/organisms/contact-section";
import { TransportSection } from "../components/organisms/transport-section";
import { HeadingSection } from "../components/atoms/heading-section";
import { StyledWhitespace } from "../components/atoms/whitespace";
import { Container } from "../components/atoms/container";
import { RecommendedProducts } from "../components/organisms/recommended-products";

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
