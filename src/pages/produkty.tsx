import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../components/atoms/container";
import { Layout } from "../components/layout";
import { graphql } from "gatsby";
import { ProductCard } from "../components/molecules/product-card";
import { CatalogFilter } from "../components/organisms/catalog-filter";
import { Sort } from "../components/molecules/sort";
import { device } from "../styles/breakpoints";
import { getAverageRating } from "../utils/getAverageRating";

export const Produkty = ({ data }) => {
  const [InactiveFilterIDList, setInactiveFilterIDList] = useState<
    Array<string>
  >([]);

  const {
    allStrapiEkogroszeks: { edges: products },
  } = data;

  const [sortProperty, setSortProperty] = useState(
    "Sortuj wg ceny: najwyższej"
  );

  const SortByName = (a, b) => {
    let nameA = a.toUpperCase();
    let nameB = b.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  };

  const SortByDesc = (a, b) => {
    return b - a;
  };

  const SortByAsc = (a, b) => {
    return a - b;
  };

  return (
    <Layout>
      <StyledContainer>
        <CatalogFilter
          InactiveFilterIDList={InactiveFilterIDList}
          setInactiveFilterIDList={setInactiveFilterIDList}
        />
        <StyledMain>
          <Sort changeHandler={setSortProperty} />

          <CardContainer>
            {products
              .filter(({ node }) => {
                return !InactiveFilterIDList.includes(node.producent.Nazwa);
              })
              .sort((a, b) => {
                switch (sortProperty) {
                  case "Sortuj wg nazwy":
                    return SortByName(a.node.Nazwa, b.node.Nazwa);
                  case "Sortuj wg ceny: najwyższej":
                    return SortByDesc(a.node.AktualnaCena, b.node.AktualnaCena);
                  case "Sortuj wg ceny: najniższej":
                    return SortByAsc(a.node.AktualnaCena, b.node.AktualnaCena);
                  case "Sortuj wg średniej oceny":
                    return SortByDesc(
                      getAverageRating(a.node.comments),
                      getAverageRating(b.node.comments)
                    );
                }
              })
              .map(({ node }) => (
                <ProductCard key={node.strapiId} product={node} />
              ))}
          </CardContainer>
        </StyledMain>
      </StyledContainer>
    </Layout>
  );
};

export default Produkty;

const StyledMain = styled.main`
  width: 100%;

  @media ${device.tablet} {
    width: unset;
  }
`;

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
