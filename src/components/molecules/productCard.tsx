import React from "react";
import styled from "styled-components";
import { device } from "../../Styles/breakpoints";
import { Button } from "../atoms/button";
import polygon from "../../assets/Polygon.svg";

type ProductType = {
  product: {
    id: string;
    name: string;
    oldPrice: number;
    price: number;
    image: {
      fluid: {
        src: string;
      };
    };
    producer: {
      name: string;
    };
  };
};

export const ProductCard: React.FC<ProductType> = ({ product }) => {
  return (
    <Card key={product.id}>
      <StyledWrapperImage>
        <img src={product.image.fluid.src} />
      </StyledWrapperImage>

      <ContentContainer>
        <Title>{product.name}</Title>
        <CurrentPrice>{product.price.toFixed(2)}zł</CurrentPrice>
        <OldPrice>{product.oldPrice.toFixed(2)}zł</OldPrice>
        <StyledButton text="Wybierz" />
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
  font-weight: 500;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.015em;
  opacity: 0.9;
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

const OldPrice = styled.p`
  margin: 0;
  opacity: 0.5;
  text-decoration: line-through;
`;

const StyledButton = styled(Button)`
  margin-top: auto;
  margin-left: auto;

  padding: 1.2rem 5rem;
`;

const StyledWrapperImage = styled.div`
  background-image: url(${polygon});
  background-repeat: no-repeat;
  background-size: contain;
  flex: 33.33%;
  margin: auto;

  > img {
    max-width: 300px;
  }
`;
