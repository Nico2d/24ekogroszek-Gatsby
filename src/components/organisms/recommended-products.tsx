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
  const productsList = data.allStrapiEkogroszeks.edges;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Wrapper as={isDesktop ? ProductContainer : Slider} {...settings}>
        {productsList.map(({ node }, index) => (
          <Product
            key={index}
            to={`/produkty/${convertToSlug(node.Nazwa)}`}
            aria-label={node.Nazwa}
          >
            <img
              src={`${process.env.IMAGE_URL}${node.Grafika[0].url}`}
              alt={node.Nazwa}
              width={250}
              height={250}
            />
          </Product>
        ))}
      </Wrapper>

      <StyledLink to="/produkty">Więcej produktów</StyledLink>
    </Container>
  );
};

const Wrapper = styled.div``;

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

  > img {
    width: 100%;
    height: auto;
  }

  @media ${device.tablet} {
    margin: 0 3rem;
    width: 300px;
    height: 300px;
  }
`;
