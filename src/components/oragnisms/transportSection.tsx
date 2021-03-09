import React from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { Container } from "../atoms/container";
import { HeadingSection } from "../atoms/headingSection";
const transport1 = require("../../assets/transport-1.png");
const transport2 = require("../../assets/transport-2.png");
const transport3 = require("../../assets/transport-3.png");
const transport4 = require("../../assets/transport-4.png");

export const TransportSection = () => {
  return (
    <CardWrapper>
      <Card>
        <img src={transport1} />
        <b>-50zł </b>przy własnym transporcie
      </Card>
      <Card>
        <img src={transport2} />
        <b>2zł/km</b> przy 1 tonie
      </Card>
      <Card>
        <img src={transport3} />
        <b>1zł/km</b> przy 2 tonach
      </Card>
      <Card>
        <img src={transport4} />
        <b>DARMOWA DOSTAWA</b> powyżej 3ton i do 50km
      </Card>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));

  @media ${device.tablet} {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    grid-gap: 2rem;
  }
`;

const Card = styled.div`
  text-align: center;
  font-size: 1rem;
  width: 200px;

  @media ${device.tablet} {
    font-size: 1.4rem;
  }

  > b {
    font-weight: 700;
    background: -webkit-linear-gradient(#f2994a, #eb5757);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  > img {
    height: 150px;
    width: 150px;
    margin: auto;
    margin-bottom: 1.5rem;

    @media ${device.tablet} {
      height: 200px;
      width: 200px;
    }
  }
`;
