import { graphql } from "gatsby";
import React from "react";
import { Container } from "../components/atoms/container";
import { Layout } from "../components/layout";
import styled from "styled-components";
import { TransportSection } from "../components/oragnisms/transportSection";
import { OldPrice } from "../components/atoms/oldPrice";
import { device } from "../styles/breakpoints";
const polygon = require("../assets/Polygon.svg");
const calc = require("../assets/icons/pa_kalorycznosc.png");
const wet = require("../assets/icons/pa_wilgotnosc.png");
const ash = require("../assets/icons/pa_popiol.png");
const sulfur = require("../assets/icons/pa_siarka.png");
import ReactMarkdown from "react-markdown";

export const ProductTemplate = ({ data }) => {
  const product = data.allStrapiEkogroszeks.edges[0].node;

  return (
    <Layout>
      <StyledContainer>
        <ImageWrapper>
          <img src={`${process.env.IMAGE_URL}${product.Grafika[0].url}`} />
          <AttributesContainer>
            {product.Kalorycznosc && (
              <Attribute>
                <img src={calc} />
                {product.Kalorycznosc}
              </Attribute>
            )}
            {product.Wilgoc && (
              <Attribute>
                <img src={wet} />
                {product.Wilgoc}
              </Attribute>
            )}
            {product.Popiol && (
              <Attribute>
                <img src={ash} />
                {product.Popiol}
              </Attribute>
            )}
            {product.Siarka && (
              <Attribute>
                <img src={sulfur} />
                {product.Siarka}
              </Attribute>
            )}
          </AttributesContainer>
        </ImageWrapper>
        <ContentContainer>
          <Title>{product.Nazwa}</Title>
          <Price>{product.AkutalnaCena.toFixed(2)}zł</Price>
          <StyledOldPrice>
            {product.PoprzedniaCenta.toFixed(2)}zł
          </StyledOldPrice>
          <Description>
            <ReactMarkdown>{product.Opis}</ReactMarkdown>
          </Description>
        </ContentContainer>
      </StyledContainer>
      <TransportSection />
    </Layout>
  );
};

export default ProductTemplate;

const Attribute = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;

  > img {
    width: 3rem;
    height: 3rem;
    margin: 1rem auto;
  }
`;

const AttributesContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  border-top: 1px solid black;
  background: ${({ theme }) => theme.colors.background};

  @media ${device.tablet} {
    width: 85%;
    left: 5%;
    height: 200px;
  }
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

const StyledOldPrice = styled(OldPrice)`
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

// query BlogPostBySlug($slug: String!) {
//   contentfulBlogPost(slug: { eq: $slug }) {
//     title
//     publishDate(formatString: "MMMM Do, YYYY")
//     heroImage {
//       fluid(maxWidth: 1180, background: "rgb:000000") {
//         ...GatsbyContentfulFluid_tracedSVG
//       }
//     }
//     body {
//       childMarkdownRemark {
//         html
//       }
//     }
//   }
// }
