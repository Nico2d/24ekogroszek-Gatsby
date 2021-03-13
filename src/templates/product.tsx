import { graphql } from "gatsby";
import React from "react";
import { Container } from "../components/atoms/container";
import { Layout } from "../components/layout";
import styled from "styled-components";
import { TransportSection } from "../components/oragnisms/transport-section";
import { PreviousPrice } from "../components/atoms/product/previous-price";
import { device } from "../styles/breakpoints";
const polygon = require("../assets/polygon.svg");

import ReactMarkdown from "react-markdown";
import { RecommendedProducts } from "../components/oragnisms/recommended-products";
import { HeadingSection } from "../components/atoms/heading-section";
import { StyledWhitespace } from "../components/atoms/whitespace";
import { Attributes } from "../components/molecules/attributes";
import { Comments } from "../components/oragnisms/comments";
import { AddComment } from "../components/molecules/forms/add-comment";

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

          <StyledDescription>{product.Opis}</StyledDescription>
        </ContentContainer>
      </StyledContainer>

      <Container>
        <HeadingSection title="Transport" />
        <TransportSection />
        <StyledWhitespace height={6} />
        <HeadingSection title="Polecane produkty" />
        <RecommendedProducts />

        <StyledWhitespace height={5} />
        <HeadingSection title="Komentarze" />
        <Comments prodcutId={product.strapiId} />
        <StyledWhitespace height={3} />
        <HeadingSection title="Dodaj własny" isSmall={true} />
        <AddComment />
      </Container>
    </Layout>
  );
};

export default ProductTemplate;

const StyledDescription = styled(ReactMarkdown)`
  word-break: break-word;
`;

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
  word-break: break-word;
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
          strapiId
          id
          Grafika {
            url
          }
        }
      }
    }
  }
`;
