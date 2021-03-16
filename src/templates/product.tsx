import { graphql } from "gatsby";
import React from "react";
import { Container } from "../components/atoms/container";
import { Layout } from "../components/layout";
import { TransportSection } from "../components/organisms/transport-section";
import { RecommendedProducts } from "../components/organisms/recommended-products";
import { HeadingSection } from "../components/atoms/heading-section";
import { StyledWhitespace } from "../components/atoms/whitespace";
import { Comments } from "../components/organisms/comments";
import { ProductDetails } from "../components/organisms/product-details";

export const ProductTemplate = ({ data: { strapiEkogroszeks: product } }) => {
  return (
    <Layout>
      <ProductDetails product={product} />

      <Container>
        <HeadingSection title="Transport" />
        <TransportSection />
        <StyledWhitespace height={6} />
        <HeadingSection title="Polecane produkty" />
        <RecommendedProducts />

        <StyledWhitespace height={5} />
        <HeadingSection title="Komentarze" />

        <Comments productId={product.strapiId} />
      </Container>
    </Layout>
  );
};

export default ProductTemplate;

export const pageQuery = graphql`
  query ProdcutTemplete($name: String!) {
    strapiEkogroszeks(Nazwa: { eq: $name }) {
      strapiId
      Nazwa
      AktualnaCena
      PoprzedniaCena
      Opis
      Grafika {
        url
      }
      Wilgoc
      Popiol
      Kalorycznosc
      Siarka
    }
  }
`;
