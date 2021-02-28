import React, { useState } from "react";
import styled from "styled-components";

type CheckboxProps = {
  label: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [isCheck, setChecked] = useState<boolean>(false);

  return (
    <StyledField>
      <CustomCheckbox>
        <Icon viewBox="0 0 24 24" checked={isCheck}>
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </CustomCheckbox>
      <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
      {label}
    </StyledField>
  );
};

const StyledField = styled.label`
  user-select: none;
  cursor: pointer;
  line-height: 20px;
  display: flex;
  margin-bottom: 0.5rem;

  > input {
    display: none;
  }
`;

const CustomCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px black solid;
  border-radius: 6px;
  margin-right: 0.5rem;
`;

const Icon = styled.svg<{ checked: boolean }>`
  fill: none;
  stroke: ${({ checked }) => (checked ? "black" : "none")};
  stroke-width: 2px;
`;
