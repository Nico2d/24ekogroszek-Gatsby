import React, { useState } from "react";
import styled from "styled-components";
import { OutsideEvent } from "./outside-event";
import { RiArrowDropDownLine } from "@react-icons/all-files/ri/RiArrowDropDownLine";

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
        <SelectedValue onClick={hideOptions} isHidden={isHidden}>
          <span>{value}</span>
          <RiArrowDropDownLine />
        </SelectedValue>

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

const SelectedValue = styled.p<{ isHidden: boolean }>`
  margin: 0;
  padding-left: 10px;
  user-select: none;
  display: flex;
  justify-content: space-between;
  height: 2rem;
  line-height: 2rem;

  > svg {
    width: 2rem;
    height: 2rem;
    opacity: 0.7;
    transform: rotateZ(${({ isHidden }) => (isHidden ? "0deg" : "-180deg")});
    transition: transform 0.3s ease-out;
  }
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
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.65));

  > li {
    border-bottom: 1px solid gray;
    padding: 5px 10px;
    font-weight: 400;
    font-size: 1rem;

    :last-child {
      border-bottom: none;
    }

    :hover {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      font-weight: 700;

      :first-child {
        border-radius: 1rem 1rem 0 0;
      }

      :last-child {
        border-radius: 0 0 1rem 1rem;
      }
    }
  }
`;
