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

  const sortProperty = "Nazwa"; //types[type];

  const SortByName = (a, b) => {
    let nameA = a.node[sortProperty].toUpperCase();
    let nameB = b.node[sortProperty].toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  };

  const SortByRate = (a, b) => {
    return b - a;
  };

  console.log(products);
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
              .sort((a, b) =>
                SortByRate(a.node.PoprzedniaCena, b.node.PoprzedniaCena)
              )
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
