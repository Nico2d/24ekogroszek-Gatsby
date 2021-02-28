import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Checkbox } from "../atoms/checkbox";

export const CatalogFilter = () => {
  const {
    allContentfulProducent: { edges: producents },
  } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulProducent {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `);

  const idList = producents.map((producent) => producent.node.id);
  const [ActiveFilterList, setActiveFilterList] = useState(idList);
  const [CheckAll, setCheckAll] = useState(true);

  console.log(ActiveFilterList);

  const checkAllHandler = (e) => {
    setCheckAll(!CheckAll);
    CheckAll ? setActiveFilterList([]) : setActiveFilterList(idList);
  };

  const ProdcutFilterHandler = (isChecked, key) => {
    if (isChecked) {
      setActiveFilterList((props) => [...props, key]);
    } else {
      setActiveFilterList(ActiveFilterList.filter((item) => item !== key));

      ActiveFilterList.length === 1 && setCheckAll(false);
    }
  };

  return (
    <StyledAside>
      <h6>Prodcent</h6>

      <StyledProducentsWrapper>
        <li>
          <Checkbox
            label="Wszystkie"
            checked={CheckAll}
            onChangeHandler={checkAllHandler}
            name="all"
          />
        </li>
        {producents.map(({ node }) => (
          <li key={node.name}>
            <Checkbox
              label={node.name}
              name={node.name}
              checked={ActiveFilterList.includes(node.id)}
              onChangeHandler={(e) =>
                ProdcutFilterHandler(e.target.checked, node.id)
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

  > h6 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
`;
