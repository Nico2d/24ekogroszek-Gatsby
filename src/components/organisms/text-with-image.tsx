import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/button";
const image = require("../../assets/tom-fisk.jpg");
const polygon = require("../../assets/polygon-big.svg");
import { Container } from "../atoms/container";
import { device } from "../../styles/breakpoints";
import { StyledWhitespace } from "../atoms/whitespace";

export const TextWithImage = () => {
  return (
    <StyledContainer>
      <ContentSection>
        <h2>Najwyższa jakość</h2>
        <p>
          Zapewniamy najwyższej jakości ekogroszek od renomowanych składów opału
          z wieloletnim stażem i najlepszą opinią. Dlatego stawiamy na
          renomowane produkty w celu uszczęśliwienia Klienta. Znajdziesz u nas
          towar dostosowany specjalnie do twojego pieca na ekogroszek w niskich
          cenach.
        </p>
        <StyledWhitespace height={1} />
        <Button text="Poznaj naszych dostawców" />
      </ContentSection>
      <ImageSection>
        <img src={image} alt="Kopalnia węgla" />
      </ImageSection>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  flex-flow: column;
  width: 100%;

  > div {
    flex: 50%;
  }

  @media ${device.tablet} {
    flex-flow: row;
    height: 600px;
  }
`;

const ContentSection = styled.div`
  margin: 2rem 0;

  @media ${device.tablet} {
    margin: auto 0;
    padding-right: 2rem;
  }
`;

const ImageSection = styled.div`
  position: relative;
  display: none;

  @media ${device.tablet} {
    overflow: hidden;
    display: block;
  }

  &::before {
    position: absolute;
    top: 0;
    left: -50%;
    width: 150%;
    height: 200%;
    content: "";
    background-image: url(${polygon});
    background-position: right;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;

    @media ${device.tablet} {
      top: -30%;
      left: 0;
      width: 100%;
      height: 150%;
    }
  }

  > img {
    position: absolute;
    z-index: 2;
    height: auto;

    @media ${device.tablet} {
      transform: translate(10%, -50%);
      width: 80%;
      top: 50%;
    }
  }
`;
