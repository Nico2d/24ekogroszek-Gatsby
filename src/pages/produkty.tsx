import React, { useEffect, useState } from "react";
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

  const [sortProperty, setSortProperty] = useState(
    "Sortuj wg ceny: najwyższej"
  );

  const [products, setProducts] = useState(data.allStrapiEkogroszeks.edges);

  useEffect(() => {
    products.map(({ node }) => {
      fetch(`${process.env.API_URL}/comments/ekogroszek:${node.strapiId}`)
        .then((response) => response.json())
        .then((data) => {
          node["averageRating"] = getAverageRating(data);

          setProducts((products) =>
            products.map((item) => {
              if (item.node.strapiId === node.strapiId) return { node };

              return item;
            })
          );
        });
    });
  }, []);

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
                    return b.node.AktualnaCena - a.node.AktualnaCena;
                  case "Sortuj wg ceny: najniższej":
                    return a.node.AktualnaCena - b.node.AktualnaCena;
                  case "Sortuj wg średniej oceny":
                    return b.node.averageRating - a.node.averageRating;
                }
              })
              .map(({ node }) => {
                return <ProductCard key={node.strapiId} product={node} />;
              })}
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
