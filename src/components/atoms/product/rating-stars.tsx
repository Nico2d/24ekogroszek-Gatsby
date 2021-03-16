import React, { useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { motion } from "framer-motion";

type RagingStarsProps = {
  register?: any;
  maxRate?: number;
  name: string;
  defaultRate?: number;
  disabled?: boolean;
  onLeft?: boolean;
};

export const RatingStars: React.FC<RagingStarsProps> = ({
  register,
  maxRate = 5,
  name,
  disabled = false,
  defaultRate = 0,
  onLeft = false,
}) => {
  const [rate, setRate] = useState<number>(defaultRate);

  let Stars = [];
  for (let i = 1; i <= maxRate; i++) {
    Stars.push(
      <StyledStars
        key={i}
        isActive={i <= rate}
        as={motion.label}
        whileTap={{ scale: disabled ? 1 : 1.5 }}
        isDisabled={disabled}
      >
        <AiFillStar />
        <HiddenInput
          value={i}
          ref={register}
          name={name}
          type="radio"
          onChange={(e) => setRate(+e.target.value)}
          disabled={disabled}
        />
      </StyledStars>
    );
  }

  return <RatingContainer onLeft={onLeft}>{Stars}</RatingContainer>;
};

const RatingContainer = styled.div<{ onLeft: boolean }>`
  margin: 0;
  display: flex;
  flex-flow: row;
  justify-content: ${({ onLeft }) => (onLeft ? "flex-start" : "flex-end")};
`;

const HiddenInput = styled.input`
  display: none;
`;

const StyledStars = styled.label<{ isActive: boolean; isDisabled: boolean }>`
  cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};

  svg {
    fill: ${({ isActive }) => (isActive ? "#f2994a" : "#666666")};
    width: 1.5rem;
    height: 1.5rem;
  }
`;
