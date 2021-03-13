import React from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const calc = require("../../assets/icons/pa_kalorycznosc.png");
const wet = require("../../assets/icons/pa_wilgotnosc.png");
const ash = require("../../assets/icons/pa_popiol.png");
const sulfur = require("../../assets/icons/pa_siarka.png");

export const Attributes = ({ product }) => {
  return (
    <AttributesContainer>
      {product.Kalorycznosc && (
        <Attribute>
          <img src={calc} />
          {product.Kalorycznosc}
        </Attribute>
      )}
      {product.Wilgoc && (
        <Attribute>
          <img src={wet} />
          {product.Wilgoc}
        </Attribute>
      )}
      {product.Popiol && (
        <Attribute>
          <img src={ash} />
          {product.Popiol}
        </Attribute>
      )}
      {product.Siarka && (
        <Attribute>
          <img src={sulfur} />
          {product.Siarka}
        </Attribute>
      )}
    </AttributesContainer>
  );
};

const Attribute = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;

  > img {
    width: 2.5rem;
    height: 2.5rem;
    margin: 2rem auto .5rem;

    @media ${device.tablet} {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const AttributesContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  border-top: 1px solid black;
  background: ${({ theme }) => theme.colors.background};

  @media ${device.tablet} {
    width: 85%;
    left: 5%;
    height: 200px;
  }
`;
