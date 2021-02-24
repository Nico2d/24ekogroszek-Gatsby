import React, { useState } from "react";
import styled from "styled-components";
import { OutsideEvent } from "./OutsideEvent";

type SelectTypes = {
  optionList: Array<string>;
  method: (e: string | number) => void;
  defaultValue?: string;
};

export const Select: React.FC<SelectTypes> = ({
  optionList,
  method,
  defaultValue = optionList[0],
}) => {
  const [value, setValue] = useState<string>(defaultValue);
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const hideOptions = () => {
    setIsHidden(!isHidden);
  };

  const selectOption = (item: string) => {
    setValue(item);
    method(item);
    setIsHidden(true);
  };

  return (
    <OutsideEvent method={hideOptions} isActive={isHidden}>
      <Container>
        <SelectedValue onClick={hideOptions}>{value} ▼</SelectedValue>

        <Options isHidden={isHidden}>
          {optionList.map((item, index) => {
            return (
              <li
                key={index}
                value={item}
                onClick={() => {
                  selectOption(item);
                }}
              >
                {item}
              </li>
            );
          })}
        </Options>
      </Container>
    </OutsideEvent>
  );
};

const Container = styled.div`
  position: relative;
  cursor: pointer;
  position: relative;
  width: 300px;
  border: 1px solid #bbb;
  border-radius: 1.5rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.white};
  margin-bottom: 2rem;
`;

const SelectedValue = styled.p`
  margin: 0;
  padding-left: 10px;
  user-select: none;
`;

const Options = styled.ul<{ isHidden: boolean }>`
  position: absolute;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.white};
  display: ${({ isHidden }) => (isHidden ? "none" : "flex")};
  flex-flow: column;
  left: 0;
  top: 30px;
  width: 100%;
  padding: 0;
  z-index: 99;
  border: 1px solid #bbb;
  border-radius: 1rem;
  user-select: none;

  > li {
    border-bottom: 1px solid gray;
    padding: 5px 10px;
    font-weight: 400;
    font-size: 1rem;

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      font-weight: 700;
    }
  }
`;
