import React, { useEffect } from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
const transport1 = require("../../assets/transport-1.png");
const transport2 = require("../../assets/transport-2.png");
const transport3 = require("../../assets/transport-3.png");
const transport4 = require("../../assets/transport-4.png");
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const TransportSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <CardWrapper
      animate={controls}
      variants={container}
      ref={ref}
      initial="hidden"
    >
      <Card variants={item}>
        <img src={transport1} alt="budynek sklepu" />
        <b>-50zł </b>przy własnym transporcie
      </Card>
      <Card variants={item}>
        <img src={transport2} alt="paleta z jedną toną" />
        <b>2zł/km</b> przy 1 tonie
      </Card>
      <Card variants={item}>
        <img src={transport3} alt="paleta z dwoma tonami" />
        <b>1zł/km</b> przy 2 tonach
      </Card>
      <Card variants={item}>
        <img src={transport4} alt="paleta z trzema tonami" />
        <b>DARMOWA DOSTAWA</b> powyżej 3ton i do 50km
      </Card>
    </CardWrapper>
  );
};

const CardWrapper = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  grid-gap: 2rem 0;

  @media ${device.laptop} {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    grid-gap: 2rem;
  }
`;

const Card = styled(motion.li)`
  text-align: center;
  font-size: 0.9rem;

  @media ${device.tablet} {
    font-size: 1.4rem;
    font-size: 1rem;
  }

  > b {
    font-weight: 700;
    background: -webkit-linear-gradient(#f2994a, #eb5757);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  > img {
    height: 120px;
    width: 120px;
    margin: auto;
    margin-bottom: 1.5rem;

    @media ${device.tablet} {
      height: 200px;
      width: 200px;
    }
  }
`;
