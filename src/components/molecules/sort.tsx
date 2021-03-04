import React from "react";
import styled from "styled-components";
import { Select } from "../atoms/select";

export const Sort = () => {
  const sortList = [
    "Sortuj wg popularności",
    "Sortuj wg średniej oceny",
    "Sortuj wg najnowszych",
    "Sortuj wg ceny: najwyższej",
    "Sortuj wg ceny: najniższej",
  ];

  return <StyledSort optionList={sortList} method={(e) => console.log(e)} />;
};

const StyledSort = styled(Select)`
  display: flex;
  justify-content: right;
`;
