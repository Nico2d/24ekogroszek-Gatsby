import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Checkbox } from "../atoms/checkbox";

export const CatalogFilter = () => {
  const query = useStaticQuery(graphql`
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

  const producents = query.allContentfulProducent.edges;

  return (
    <StyledAside>
      <h6>Prodcent</h6>

      {/* <StyledProducentsWrapper>
        {producents.map(({ node }) => (
          <li>
            <Checkbox label={node.name} />
          </li>
        ))}
      </StyledProducentsWrapper> */}
    </StyledAside>
  );
};

const StyledInput = styled.input`
  width: 25px;
  height: 25px;
`;

const StyledProducentsWrapper = styled.div`
  > li {
    cursor: pointer;
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
