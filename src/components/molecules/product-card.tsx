import React from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { Button } from "../atoms/button";
import { Link } from "gatsby";
import { convertToSlug } from "../../utils/convertToSlug";
import { PreviousPrice } from "../atoms/product/previous-price";
import { RatingStars } from "../atoms/product/rating-stars";
import { ProductType } from "../../types/product.type";
import { Polygon } from "../../assets/polygon";
import { theme } from "../../styles/colors";

export const ProductCard: React.FC<ProductType> = ({ product }) => {
  return (
    <Card>
      <StyledWrapperImage>
        <Polygon
          color1={theme.colors.primary}
          color2={theme.colors.secondary}
        />
        <img
          src={`${process.env.IMAGE_URL}${product.Grafika[0].url}`}
          alt={product.Nazwa}
          width={300}
          height={300}
        />
      </StyledWrapperImage>

      <ContentContainer>
        <Title>{product.Nazwa}</Title>
        <RatingStars
          name="starts"
          defaultRate={product.averageRating}
          disabled
          isLeft
        />
        <CurrentPrice>{product.AktualnaCena.toFixed(2)}zł</CurrentPrice>
        <PreviousPrice price={product.PoprzedniaCena} />

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
  padding: 1rem;
  flex-flow: column;
  max-width: 900px;
  justify-content: space-around;

  @media ${device.tablet} {
    flex-flow: row;
    padding: 3rem;
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
  margin-bottom: 0.5rem;
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
  background: ${({ theme }) => theme.colors.gradient};
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
  flex: 33.33%;
  margin: auto;
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  justify-content: center;

  > img {
    max-height: 300px;
    width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media ${device.tablet} {
    margin: auto;
    margin-right: 1rem;
  }
`;
