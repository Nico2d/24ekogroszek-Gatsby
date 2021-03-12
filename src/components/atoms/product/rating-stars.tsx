import React, { useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { motion } from "framer-motion";

type RagingStarsProps = {
  register?: any;
  maxRate?: number;
  rate?: number;
  setRate?: (value: number) => void;
};

export const RatingStars: React.FC<RagingStarsProps> = ({
  register,
  maxRate = 5,
}) => {
  const [rate, setRate] = useState<number>(0);

  let Stars = [];
  for (let i = 1; i <= maxRate; i++) {
    Stars.push(
      <StyledStars
        key={i}
        isActive={i <= rate}
        as={motion.label}
        whileTap={{ scale: 1.5 }}
      >
        <AiFillStar />
        <HiddenInput
          value={i}
          ref={register}
          name="rate"
          type="radio"
          onChange={(e) => setRate(+e.target.value)}
        />
      </StyledStars>
    );
  }

  return <RatingContainer>{Stars}</RatingContainer>;
};

const RatingContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-flow: row;
`;

const HiddenInput = styled.input`
  display: none;
`;

const StyledStars = styled.label<{ isActive: boolean }>`
  cursor: pointer;

  svg {
    fill: ${({ isActive }) => (isActive ? "#f2994a" : "#666666")};
    width: 1.5rem;
    height: 1.5rem;
  }
`;
