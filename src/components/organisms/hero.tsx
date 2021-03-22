import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { Button } from "../atoms/button";
const background = require("../../../static/assets/hero-background.jpg");

export const Hero = () => (
  <HeroContainer>
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <Heading>Z troską o ciepło w Twoim domu</Heading>
      <Button text="Poznaj nasze produkty" />
    </motion.div>
  </HeroContainer>
);

const HeroContainer = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
  height: 100vh;
  background: white;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  box-shadow: rgb(50 50 93 / 15%) 0px 30px 60px -12px inset,
    rgb(0 0 0 / 70%) 0px 8rem 8rem -18px inset;
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
