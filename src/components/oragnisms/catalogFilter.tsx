import { useStaticQuery, graphql } from "gatsby";
import React from "react";
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
          }
        }
      }
    }
  `);

  return (
    <StyledAside>
      <h6>Prodcent</h6>

      <StyledProducentsWrapper>
        {producents.map(({ node }) => (
          <li key={node.name}>
            <Checkbox label={node.name} />
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
