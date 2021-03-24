import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { device, size } from "../../styles/breakpoints";
import { Checkbox } from "../atoms/checkbox";
import { useStaticQuery, graphql } from "gatsby";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { BsFilter } from "@react-icons/all-files/bs/BsFilter";

type CatalogFilterProps = {
  InactiveFilterIDList: Array<string>;
  setInactiveFilterIDList: (e) => void;
};

export const CatalogFilter: React.FC<CatalogFilterProps> = ({
  InactiveFilterIDList,
  setInactiveFilterIDList,
}) => {
  const isDesktop = useMediaQuery(device.tablet);
  const {
    allStrapiProducents: { edges: producers },
  } = useStaticQuery(graphql`
    query GetProducents {
      allStrapiProducents(filter: { kategoria: { eq: "Ekogroszek" } }) {
        edges {
          node {
            Nazwa
            id
          }
        }
      }
    }
  `);

  const nameList = producers.map((producent) => producent.node.Nazwa);

  const checkAllHandler = (e) => {
    InactiveFilterIDList.length === 0
      ? setInactiveFilterIDList(nameList)
      : setInactiveFilterIDList([]);
  };

  const ProductFilterHandler = (isChecked, key) => {
    if (isChecked) {
      setInactiveFilterIDList(
        InactiveFilterIDList.filter((item) => item !== key)
      );
    } else {
      setInactiveFilterIDList((props) => [...props, key]);
    }
  };

  if (!isDesktop)
    return (
      <FilterWrapper>
        <BsFilter />
      </FilterWrapper>
    );

  return (
    <StyledAside>
      <h6>Producent</h6>

      <StyledProducersWrapper>
        <li>
          <Checkbox
            label="Wszystkie"
            checked={InactiveFilterIDList.length === 0}
            onChangeHandler={checkAllHandler}
            name="all"
          />
        </li>
        {producers.map(({ node }) => (
          <li key={node.id}>
            <Checkbox
              label={node.Nazwa}
              name={node.Nazwa}
              checked={!InactiveFilterIDList.includes(node.Nazwa)}
              onChangeHandler={(e) =>
                ProductFilterHandler(e.target.checked, node.Nazwa)
              }
            />
          </li>
        ))}
      </StyledProducersWrapper>
    </StyledAside>
  );
};

const FilterWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  width: 50px;
  height: 50px;
  font-size: 1.6rem;
  border-radius: 1.5rem;
  right: 1rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.lineColor};
`;

const StyledProducersWrapper = styled.div`
  > li {
    cursor: pointer;
    margin-bottom: 0.5rem;
  }
`;

const StyledAside = styled.aside`
  width: 300px;
  display: none;

  > h6 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  @media ${device.tablet} {
    display: block;
  }
`;
