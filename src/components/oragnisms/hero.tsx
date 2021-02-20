import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import background from "../../assets/background.jpg";
import { Button } from "../atoms/button";

export default ({ data }) => (
  <HeroContainer>
    <Heading>Z troską o ciepło w Twoim domu</Heading>
    <Button text="Poznaj nasze produkty"/>
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
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
`;
