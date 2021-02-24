import React from "react";
import styled from "styled-components";
import { Container } from "../components/atoms/container";
import { Layout } from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import { ProductCard } from "../components/molecules/productCard";

export const Catalog = ({ props }) => {
  const query = useStaticQuery(graphql`
    query MyQuery {
      allContentfulProduct {
        edges {
          node {
            name
            image {
              fluid {
                src
              }
            }
            id
            price
            oldPrice
            producer {
              name
            }
          }
        }
      }
      allContentfulProducent {
        edges {
          node {
            name
          }
        }
      }
    }
  `);
  const products = query.allContentfulProduct.edges;
  const producents = query.allContentfulProducent.edges;

  return (
    <Layout>
      <StyledContianer>
        <StyledAside>
          <h6>Prodcent</h6>

          <StyledProducentsWrapper>
            {producents.map(({ node }) => (
              <li key={node.name}>{node.name}</li>
            ))}
          </StyledProducentsWrapper>
        </StyledAside>
        <main style={{ margin: "auto" }}>
          <select>
            <option>Sortuj wg popularności</option>
            <option>Sortuj wg średniej oceny</option>
            <option>Sortuj wg najnowszych</option>
            <option>Sortuj wg ceny: najwyższej</option>
            <option>Sortuj wg ceny: najniższej</option>
          </select>

          {products.map(({ node }) => (
            <ProductCard product={node} />
          ))}
        </main>
      </StyledContianer>
    </Layout>
  );
};

export default Catalog;

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

const StyledContianer = styled(Container)`
  margin-top: 150px;
  display: flex;
`;
