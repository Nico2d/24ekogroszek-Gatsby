import React from "react";
import styled from "styled-components";
import { Select } from "../atoms/select";

export const Sort = ({ changeHandler }) => {
  const sortList = [
    "Sortuj wg nazwy",
    "Sortuj wg średniej oceny",
    "Sortuj wg ceny: najwyższej",
    "Sortuj wg ceny: najniższej",
  ];

  return <StyledSort optionList={sortList} method={changeHandler} />;
};

const StyledSort = styled(Select)`
  display: flex;
  justify-content: right;
`;
