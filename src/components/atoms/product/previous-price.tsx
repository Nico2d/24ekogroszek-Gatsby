import React from "react";
import styled from "styled-components";

export const PreviousPrice = ({ price }) => {
  if (price === null) return null;
  return <StyledPreviousPrice>{price.toFixed(2)}zł</StyledPreviousPrice>;
};

export const StyledPreviousPrice = styled.p`
  margin: 0;
  opacity: 0.5;
  text-decoration: line-through;
`;
