import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { ProductType } from "../../types/product.type";
import { getAverageRating } from "../../utils/getAverageRating";
import { Container } from "../atoms/container";
import { PreviousPrice } from "../atoms/product/previous-price";
import { RatingStars } from "../atoms/product/rating-stars";
import { Attributes } from "../molecules/attributes";
const polygon = require("../../assets/polygon.svg");

export const ProductDetails: React.FC<ProductType> = ({ product }) => {
  return (
    <StyledContainer>
      <ImageWrapper>
        <img
          src={`${process.env.IMAGE_URL}${product.Grafika[0].url}`}
          alt={product.Nazwa}
        />
        <Attributes product={product} />
      </ImageWrapper>

      <ContentContainer>
        <Title>{product.Nazwa}</Title>
        <Price>{product.AktualnaCena.toFixed(2)}zł</Price>
        <StyledPreviousPrice price={product.PoprzedniaCena} />
        <RatingStars
          name="starts"
          defaultRate={getAverageRating(product.comments)}
          disabled
        />
        <StyledDescription>{product.Opis}</StyledDescription>
      </ContentContainer>
    </StyledContainer>
  );
};

const StyledDescription = styled(ReactMarkdown)`
  word-break: break-word;
  text-align: justify;
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
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: 600;
  word-break: break-word;
  margin-bottom: 1rem;

  @media ${device.tablet} {
    font-size: 46px;
  }
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
