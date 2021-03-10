import React from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { Button } from "../atoms/button";
const polygon = require("../../assets/Polygon.svg");
import { Link } from "gatsby";
import { convertToSlug } from "../../utils/convertToSlug";
import { PreviousPrice } from "../atoms/product/previous-price";

type ProductType = {
  product: {
    id: string;
    Nazwa: string;
    AkutalnaCena: number;
    PoprzedniaCenta: number;
    Grafika: {
      url: string;
    };
    producent: {
      Nazwa: string;
    };
  };
};

export const ProductCard: React.FC<ProductType> = ({ product }) => {
  return (
    <Card key={product.id}>
      <StyledWrapperImage>
        <img src={`${process.env.IMAGE_URL}${product.Grafika[0].url}`} />
      </StyledWrapperImage>

      <ContentContainer>
        <Title>{product.Nazwa}</Title>
        <CurrentPrice>{product.AkutalnaCena.toFixed(2)}zł</CurrentPrice>

        <PreviousPrice price={product.PoprzedniaCenta} />

        <StyledButton to={`/produkty/${convertToSlug(product.Nazwa)}`}>
          <Button text="Wybierz" />
        </StyledButton>
      </ContentContainer>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  border-radius: 2rem;
  background: linear-gradient(0deg, #ffffff, #ffffff);
  box-shadow: 0px 0px 10px 3px rgb(0 0 0 / 25%);
  padding: 2rem;
  flex-flow: column;
  max-width: 900px;
  justify-content: space-around;

  @media ${device.tablet} {
    flex-flow: row;
  }
`;

const Title = styled.h4`
  color: #000000;
  text-transform: capitalize;
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.5rem;
  letter-spacing: -0.015em;
  opacity: 0.9;
  word-break: break-word;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex: 50%;
`;

const CurrentPrice = styled.p`
  font-size: 2rem;
  background: transparent;
  display: block;
  margin: 0;
  margin-top: 1rem;
  font-weight: 600;
  background: -webkit-linear-gradient(#f2994a, #eb5757);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledButton = styled(Link)`
  margin-top: 1rem;

  > button {
    padding: 1.2rem 5rem;
    width: 100%;

    @media ${device.tablet} {
      width: fit-content;
    }
  }

  @media ${device.tablet} {
    margin-top: auto;
    margin-left: auto;
  }
`;

const StyledWrapperImage = styled.div`
  background-image: url(${polygon});
  background-repeat: no-repeat;
  background-size: contain;
  flex: 33.33%;
  margin: auto;
  margin-bottom: 1rem;

  > img {
    max-width: 300px;
  }

  @media ${device.tablet} {
    margin: auto;
  }
`;
