import React from "react";
import styled from "styled-components";

export const HeadingSection = ({ title }) => {
  return <Heading>{title}</Heading>;
};

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  opacity: 0.9;
  margin-bottom: 3rem;
`;
