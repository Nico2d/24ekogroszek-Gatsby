import React, { useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { motion } from "framer-motion";

type RagingStarsProps = {
  register?: any;
  name: string;
  defaultRate?: number;
  disabled?: boolean;
  isLeft?: boolean;
};

export const RatingStars: React.FC<RagingStarsProps> = ({
  register,
  name,
  disabled = false,
  defaultRate = 0,
  isLeft = false,
}) => {
  const [rate, setRate] = useState<number>(defaultRate);

  if (defaultRate === 0 && disabled) return null;
  return (
    <RatingContainer isLeft={isLeft}>
      {[1, 2, 3, 4, 5].map((index) => (
        <StyledStars
          key={index}
          isActive={index <= (disabled ? defaultRate : rate)}
          as={motion.label}
          whileTap={{ scale: disabled ? 1 : 1.5 }}
          isDisabled={disabled}
        >
          <AiFillStar />
          <HiddenInput
            value={index}
            ref={register}
            name={name}
            type="radio"
            onChange={(e) => setRate(+e.target.value)}
            disabled={disabled}
          />
        </StyledStars>
      ))}
    </RatingContainer>
  );
};

const RatingContainer = styled.div<{ isLeft: boolean }>`
  margin: 0;
  display: flex;
  flex-flow: row;
  justify-content: ${({ isLeft }) => (isLeft ? "flex-start" : "flex-end")};
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
