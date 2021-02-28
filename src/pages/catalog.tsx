import React from "react";
import styled from "styled-components";
import { Container } from "../components/atoms/container";
import { Layout } from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import { ProductCard } from "../components/molecules/productCard";
import { Select } from "../components/atoms/select";
import { CatalogFilter } from "../components/oragnisms/catalogFilter";

export const Catalog = () => {
  const {
    allContentfulProduct: { edges: products },
  } = useStaticQuery(graphql`
    query getProducts {
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
    }
  `);

  const sortList = [
    "Sortuj wg popularności",
    "Sortuj wg średniej oceny",
    "Sortuj wg najnowszych",
    "Sortuj wg ceny: najwyższej",
    "Sortuj wg ceny: najniższej",
  ];

  return (
    <Layout>
      <StyledContianer>
        <CatalogFilter />
        <main style={{ margin: "auto" }}>
          <Select optionList={sortList} method={(e) => console.log(e)} />
          {products.map(({ node }) => (
            <ProductCard key={node.id} product={node} />
          ))}
        </main>
      </StyledContianer>
    </Layout>
  );
};

export default Catalog;

const StyledContianer = styled(Container)`
  margin-top: 150px;
  display: flex;
`;
