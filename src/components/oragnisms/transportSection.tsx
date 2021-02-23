import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/container";
import { HeadingSection } from "../atoms/headingSection";
import transport1 from "../../assets/transport-1.png";
import transport2 from "../../assets/transport-2.png";
import transport3 from "../../assets/transport-3.png";
import transport4 from "../../assets/transport-4.png";
import { device } from "../../Styles/breakpoints";

export const TransportSection = () => {
  return (
    <StyledContainer>
      <HeadingSection title="Transport" />

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
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: block;
`;

const CardWrapper = styled.div`
  grid-row: 1;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const Card = styled.div`
  text-align: center;
  font-size: 1.4rem;

  > b {
    font-weight: 700;
    background: -webkit-linear-gradient(#f2994a, #eb5757);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  > img {
    height: 200px;
    width: 200px;
    margin: auto;
    margin-bottom: 1.5rem;
  }
`;
