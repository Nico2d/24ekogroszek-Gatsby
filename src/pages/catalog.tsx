import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../components/atoms/container";
import { Layout } from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import { ProductCard } from "../components/molecules/productCard";
import { CatalogFilter } from "../components/oragnisms/catalogFilter";
import { Sort } from "../components/molecules/sort";

export const Catalog = () => {
  const [InactiveFilterIDList, setInactiveFilterIDList] = useState<
    Array<string>
  >([]);

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
              id
              name
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <StyledContianer>
        <CatalogFilter
          InactiveFilterIDList={InactiveFilterIDList}
          setInactiveFilterIDList={setInactiveFilterIDList}
        />
        <main style={{ margin: "auto" }}>
          <Sort />

          <CardContainer>
            {products
              .filter(
                ({ node }) => !InactiveFilterIDList.includes(node.producer.id)
              )
              .map(({ node }) => (
                <ProductCard key={node.id} product={node} />
              ))}
          </CardContainer>
        </main>
      </StyledContianer>
    </Layout>
  );
};

export default Catalog;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
`;

const StyledContianer = styled(Container)`
  margin-top: 150px;
  display: flex;
`;
