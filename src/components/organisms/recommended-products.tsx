import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { device } from "../../styles/breakpoints";
import { convertToSlug } from "../../utils/convertToSlug";
import { Container } from "../atoms/container";
const polygon = require("../../assets/polygon.svg");

export const RecommendedProducts = () => {
  const isDesktop = useMediaQuery(device.tablet);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };

  const data = useStaticQuery(graphql`
    query GetRecommendedEkogroszekProducents {
      allStrapiEkogroszeks(limit: 3) {
        edges {
          node {
            Nazwa
            Grafika {
              url
            }
          }
        }
      }
    }
  `);

  const products = data.allStrapiEkogroszeks.edges;

  return (
    <Container>
      {!isDesktop ? (
        <Slider {...settings}>
          {products.map(({ node }, index) => (
            <Product key={index} to={`/produkty/${convertToSlug(node.Nazwa)}`}>
              <img src={`${process.env.IMAGE_URL}${node.Grafika[0].url}`} />
            </Product>
          ))}
        </Slider>
      ) : (
        <ProductContainer>
          {products.map(({ node }, index) => (
            <Product key={index} to={`/produkty/${convertToSlug(node.Nazwa)}`}>
              <img src={`${process.env.IMAGE_URL}${node.Grafika[0].url}`} />
            </Product>
          ))}
        </ProductContainer>
      )}

      <StyledLink to="/produkty">Więcej produktów</StyledLink>
    </Container>
  );
};

const StyledLink = styled(Link)`
  width: fit-content;
  display: flex;
  margin: auto;
  margin-top: 3rem;
  text-decoration: underline;
`;

const ProductContainer = styled.div`
  .slick-slide {
    margin: 0 27px;
  }

  .slick-list {
    margin: 0 -27px;
  }

  @media ${device.tablet} {
    display: flex;
    justify-content: center;
  }
`;

const Product = styled(Link)`
  background-image: url(${polygon});
  background-repeat: no-repeat;
  background-size: contain;
  padding: 25px;
  clear: both;
  cursor: pointer;

  @media ${device.tablet} {
    margin: 0 3rem;
    width: 300px;
    height: 300px;
  }
`;
