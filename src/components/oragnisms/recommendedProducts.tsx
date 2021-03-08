import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { device } from "../../styles/breakpoints";
import { Container } from "../atoms/container";
import { HeadingSection } from "../atoms/headingSection";
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
  console.log(products);

  return (
    <Container>
      <HeadingSection title="Polecane produkty" />

      {!isDesktop ? (
        <Slider {...settings}>
          {products.map(({ node }, index) => (
            <Product key={index}>
              <img src={`${process.env.IMAGE_URL}${node.Grafika[0].url}`} />
            </Product>
          ))}
        </Slider>
      ) : (
        <ProdcutContainer>
          {products.map(({ node }, index) => (
            <Product key={index}>
              <img src={`${process.env.IMAGE_URL}${node.Grafika[0].url}`} />
            </Product>
          ))}
        </ProdcutContainer>
      )}

      <StyledLink to="/produkty">Pokaż więcej</StyledLink>
    </Container>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: underline;
  margin-top: 3rem;
`;

const ProdcutContainer = styled.div`
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

const Product = styled.div`
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

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background: red;
  margin: 2rem;
`;
