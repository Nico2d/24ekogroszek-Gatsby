import React from "react";
import { Hero } from "../components/oragnisms/hero";
import { Layout } from "../components/layout";
import { TextWithImage } from "../components/oragnisms/textWithImage";
import { ContactSection } from "../components/oragnisms/contactSection";
import { TransportSection } from "../components/oragnisms/transportSection";

const RootIndex = () => {
  return (
    <Layout>
      <Hero />

      <TextWithImage />
      <ContactSection />
      <TransportSection />
    </Layout>
  );
};

export default RootIndex;
