import React from "react";
import styled from "styled-components";
import background from "../../assets/background.jpg";
import { device } from "../../Styles/breakpoints";
import { Button } from "../atoms/button";

export default ({ data }) => (
  <HeroContainer>
    <Heading>Z troską o ciepło w Twoim domu</Heading>
    <Button text="Poznaj nasze produkty" />
  </HeroContainer>
);

const HeroContainer = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
  height: 100vh;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.65));
  padding: 0 2rem;
  max-width: 400px;

  @media ${device.laptop} {
    font-size: 3.5rem;
    max-width: 600px;
  }
`;
