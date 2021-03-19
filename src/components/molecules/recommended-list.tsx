import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { convertToSlug } from "../../utils/convertToSlug";
const polygon = require("../../assets/polygon.svg");

export const RecommendedList = ({ products }) => {
  return (
    <>
      {products.map(({ node }, index) => (
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
    </>
  );
};

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
