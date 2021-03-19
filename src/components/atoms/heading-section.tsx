import React from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

type HeadingSectionProps = {
  title: string;
  isSmall?: boolean;
};

export const HeadingSection: React.FC<HeadingSectionProps> = ({
  title,
  isSmall,
}) => {
  return <Heading isSmall={isSmall}>{title}</Heading>;
};

const Heading = styled.h1<{ isSmall?: boolean }>`
  font-size: ${({ isSmall }) => (isSmall ? "1.4rem" : "1.7rem")};
  font-weight: 500;
  opacity: 0.9;
  margin-bottom: ${({ isSmall }) => (isSmall ? "1rem" : "3rem")};

  @media ${device.tablet} {
    font-size: ${({ isSmall }) => (isSmall ? "2rem" : "2.5rem")};
  }
`;
