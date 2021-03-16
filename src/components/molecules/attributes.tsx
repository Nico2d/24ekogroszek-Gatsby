import React from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { ProductType } from "../../types/product.type";
import { ToolTip } from "../atoms/tooltip";
const calc = require("../../assets/icons/pa_kalorycznosc.png");
const wet = require("../../assets/icons/pa_wilgotnosc.png");
const ash = require("../../assets/icons/pa_popiol.png");
const sulfur = require("../../assets/icons/pa_siarka.png");

export const Attributes: React.FC<ProductType> = ({ product }) => {
  return (
    <AttributesContainer>
      {product.Kalorycznosc && (
        <ToolTip text="Kaloryczność">
          <Attribute>
            <img src={calc} />
            {product.Kalorycznosc}
          </Attribute>
        </ToolTip>
      )}
      {product.Wilgoc && (
        <ToolTip text="Zawartość wilgoci">
          <Attribute>
            <img src={wet} />
            {product.Wilgoc}
          </Attribute>
        </ToolTip>
      )}
      {product.Popiol && (
        <ToolTip text="Zawartość popiołu">
          <Attribute>
            <img src={ash} />
            {product.Popiol}
          </Attribute>
        </ToolTip>
      )}

      {product.Siarka && (
        <ToolTip text="Zawartość siarki">
          <Attribute>
            <img src={sulfur} />
            {product.Siarka}
          </Attribute>
        </ToolTip>
      )}
    </AttributesContainer>
  );
};

const Attribute = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  position: relative;

  > img {
    width: 2.5rem;
    height: 2.5rem;
    margin: 2rem auto 0.5rem;

    @media ${device.tablet} {
      width: 3rem;
      height: 3rem;
    }
  }

  ::before {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
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
