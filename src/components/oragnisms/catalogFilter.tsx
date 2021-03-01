import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "../atoms/checkbox";

type CatalogFilterProps = {
  InactiveFilterIDList: Array<string>;
  setInactiveFilterIDList: (e) => void;
};

export const CatalogFilter: React.FC<CatalogFilterProps> = ({
  InactiveFilterIDList,
  setInactiveFilterIDList,
}) => {
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
  //   const [InactiveFilterIDList, setInactiveFilterIDList] = useState(idList);
  // const [CheckAll, setCheckAll] = useState(true);

  const checkAllHandler = (e) => {
    // setCheckAll(!CheckAll);
    // CheckAll ? setInactiveFilterIDList([]) : setInactiveFilterIDList(idList);

    InactiveFilterIDList.length === 0
      ? setInactiveFilterIDList(idList)
      : setInactiveFilterIDList([]);
  };

  const ProdcutFilterHandler = (isChecked, key) => {
    // if (isChecked) {
    //   setInactiveFilterIDList((props) => [...props, key]);
    // } else {
    //   setInactiveFilterIDList(
    //     InactiveFilterIDList.filter((item) => item !== key)
    //   );
    //   // InactiveFilterIDList.length === 1 && setCheckAll(false);
    // }

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
          <li key={node.name}>
            <Checkbox
              label={node.name}
              name={node.name}
              checked={!InactiveFilterIDList.includes(node.id)}
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