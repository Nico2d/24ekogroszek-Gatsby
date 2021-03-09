import { graphql } from "gatsby";
import React from "react";
import { Container } from "../components/atoms/container";
import { Layout } from "../components/layout";
import styled from "styled-components";
import { TransportSection } from "../components/oragnisms/transportSection";
import { PreviousPrice } from "../components/atoms/product/previous-price";
import { device } from "../styles/breakpoints";
const polygon = require("../assets/Polygon.svg");

import ReactMarkdown from "react-markdown";
import { RecommendedProducts } from "../components/oragnisms/recommendedProducts";
import { HeadingSection } from "../components/atoms/headingSection";
import { StyledWhitespace } from "../components/atoms/whitespace";
import { Attributes } from "../components/molecules/attributes";

export const ProductTemplate = ({ data }) => {
  const product = data.allStrapiEkogroszeks.edges[0].node;

  return (
    <Layout>
      <StyledContainer>
        <ImageWrapper>
          <img src={`${process.env.IMAGE_URL}${product.Grafika[0].url}`} />
          <Attributes product={product} />
        </ImageWrapper>

        <ContentContainer>
          <Title>{product.Nazwa}</Title>
          <Price>{product.AkutalnaCena.toFixed(2)}zł</Price>
          <StyledPreviousPrice price={product.PoprzedniaCenta} />
          <Description>
            <ReactMarkdown>{product.Opis}</ReactMarkdown>
          </Description>
        </ContentContainer>
      </StyledContainer>

      <Container>
        <StyledWhitespace height={3} />
        <HeadingSection title="Transport" />
        <TransportSection />

        <StyledWhitespace height={5} />
        <HeadingSection title="Polecane produkty" />
        <RecommendedProducts />
      </Container>
    </Layout>
  );
};

export default ProductTemplate;

const ImageWrapper = styled.div`
  position: relative;
  background-image: url(${polygon});
  background-size: 90%;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    width: 50%;
  }

  > img {
    margin: auto;
    object-fit: scale-down;
  }
`;

const ContentContainer = styled.div`
  float: right;
  clear: none;
  margin-top: 5rem;

  @media ${device.tablet} {
    width: 50%;
    padding-left: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 46px;
  font-weight: 600;
`;

const Price = styled.h3`
  font-size: 36px;
  background: transparent;
  display: block;
  font-weight: 700;
  background: -webkit-linear-gradient(#f2994a, #eb5757);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledPreviousPrice = styled(PreviousPrice)`
  font-size: 24px;
`;

const StyledContainer = styled(Container)`
  margin-top: 150px;
  display: flex;
  flex-flow: column;

  @media ${device.tablet} {
    flex-flow: row;
  }
`;

const Description = styled.p``;

export const pageQuery = graphql`
  query ProdcutTemplete($name: String!) {
    allStrapiEkogroszeks(filter: { Nazwa: { eq: $name } }) {
      edges {
        node {
          AkutalnaCena
          Kalorycznosc
          Nazwa
          Opis
          Popiol
          PoprzedniaCenta
          Wilgoc
          id
          Grafika {
            url
          }
        }
      }
    }
  }
`;
