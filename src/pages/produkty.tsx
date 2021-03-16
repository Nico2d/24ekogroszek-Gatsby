import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../components/atoms/container";
import { Layout } from "../components/layout";
import { graphql } from "gatsby";
import { ProductCard } from "../components/molecules/product-card";
import { CatalogFilter } from "../components/organisms/catalog-filter";
import { Sort } from "../components/molecules/sort";

export const Produkty = ({ data }) => {
  const [InactiveFilterIDList, setInactiveFilterIDList] = useState<
    Array<string>
  >([]);

  const {
    allStrapiEkogroszeks: { edges: products },
  } = data;

  return (
    <Layout>
      <StyledContainer>
        <CatalogFilter
          InactiveFilterIDList={InactiveFilterIDList}
          setInactiveFilterIDList={setInactiveFilterIDList}
        />
        <main style={{ margin: "auto" }}>
          <Sort />

          <CardContainer>
            {products
              .filter(({ node }) => {
                return !InactiveFilterIDList.includes(node.producent.Nazwa);
              })
              .map(({ node }) => (
                <ProductCard key={node.strapiId} product={node} />
              ))}
          </CardContainer>
        </main>
      </StyledContainer>
    </Layout>
  );
};

export default Produkty;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
`;

const StyledContainer = styled(Container)`
  margin-top: 150px;
  display: flex;
`;

export const pageQuery = graphql`
  query GetEkogroszki {
    allStrapiEkogroszeks {
      edges {
        node {
          strapiId
          Nazwa
          AktualnaCena
          PoprzedniaCena
          Grafika {
            url
          }
          producent {
            id
            Nazwa
          }
          comments {
            points
          }
        }
      }
    }
  }
`;
