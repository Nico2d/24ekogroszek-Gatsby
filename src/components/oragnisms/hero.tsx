import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

export default ({ data }) => (
  <HeroContainer>
    <Img alt={data.name} fluid={data.heroImage.fluid} />
    <div>
      <h3>{data.name}</h3>
      <p>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </HeroContainer>
);

const HeroContainer = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
`;
