import React, { ReactNode } from "react";
import styled from "styled-components";

type ToolTipProps = {
  children: ReactNode;
  text: string;
};

export const ToolTip: React.FC<ToolTipProps> = ({ children, text }) => {
  return (
    <TooltipCard>
      <TooltipText>{children}</TooltipText>
      <TooltipBox>{text}</TooltipBox>
    </TooltipCard>
  );
};

const TooltipText = styled.div`
  cursor: default;
`;

const TooltipBox = styled.p`
  position: absolute;
  top: calc(100%+10px);
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  padding: 5px 5px;
  border-radius: 4px;
  line-height: 1.2rem;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);

  &:before {
    content: "";
    width: 0;
    height: 0;
    left: calc(50% - 10px);
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
  }
`;
const TooltipCard = styled.div`
  position: relative;

  ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 8px 1rem;

    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`;
