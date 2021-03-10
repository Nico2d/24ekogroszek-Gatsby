import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  [x: string]: any;
  clicked?: () => void;
};

export const Button: React.FC<Props> = ({ text, clicked, ...props }: Props) => {
  return (
    <StyledButton onClick={clicked} {...props}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button<Props>`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  outline: none;
  background: ${({ theme, disabled }) =>
    disabled ? "#cccccc" : theme.colors.primary};
  padding: 1.2rem 3rem;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  filter: ${({ disabled }) =>
    !disabled && "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"};
`;
