import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { Checkbox } from "../atoms/checkbox";
import { useStaticQuery, graphql } from "gatsby";

type CatalogFilterProps = {
  InactiveFilterIDList: Array<string>;
  setInactiveFilterIDList: (e) => void;
};

export const CatalogFilter: React.FC<CatalogFilterProps> = ({
  InactiveFilterIDList,
  setInactiveFilterIDList,
}) => {
  const {
    allStrapiProducents: { edges: producents },
  } = useStaticQuery(graphql`
    query GetProducents {
      allStrapiProducents {
        edges {
          node {
            Nazwa
            id
          }
        }
      }
    }
  `);

  const nameList = producents.map((producent) => producent.node.Nazwa);

  const checkAllHandler = (e) => {
    InactiveFilterIDList.length === 0
      ? setInactiveFilterIDList(nameList)
      : setInactiveFilterIDList([]);
  };

  const ProdcutFilterHandler = (isChecked, key) => {
    if (isChecked) {
      setInactiveFilterIDList(
        InactiveFilterIDList.filter((item) => item !== key)
      );
    } else {
      setInactiveFilterIDList((props) => [...props, key]);
    }
  };

  return (
    <StyledAside>
      <h6>Prodcent</h6>

      <StyledProducentsWrapper>
        <li>
          <Checkbox
            label="Wszystkie"
            checked={InactiveFilterIDList.length === 0}
            onChangeHandler={checkAllHandler}
            name="all"
          />
        </li>
        {producents.map(({ node }) => (
          <li key={node.id}>
            <Checkbox
              label={node.Nazwa}
              name={node.Nazwa}
              checked={!InactiveFilterIDList.includes(node.Nazwa)}
              onChangeHandler={(e) =>
                ProdcutFilterHandler(e.target.checked, node.Nazwa)
              }
            />
          </li>
        ))}
      </StyledProducentsWrapper>
    </StyledAside>
  );
};

const StyledProducentsWrapper = styled.div`
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
