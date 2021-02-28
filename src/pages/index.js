import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/oragnisms/hero";
import { Layout } from "../components/layout";
import { TextWithImage } from "../components/oragnisms/textWithImage";
import { ContactSection } from "../components/oragnisms/contactSection";
import { TransportSection } from "../components/oragnisms/transportSection";

class RootIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title="24ekogroszek" />
          <Hero />

          <TextWithImage />

          <ContactSection />
          <TransportSection />
        </div>
      </Layout>
    );
  }
}

export default RootIndex;
