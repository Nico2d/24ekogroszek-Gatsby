import React from "react";
import styled from "styled-components";
import { Container } from "../components/atoms/container";
import { Button } from "../components/atoms/button";
import { Layout } from "../components/layout";
import { device } from "../Styles/breakpoints";
import pellet from "../assets/pellet.png";
import polygon from "../assets/Polygon.svg";
import { graphql, useStaticQuery } from "gatsby";

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
  console.log(query);
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

          {products.map(({ node: product }) => (
            <Card key={product.id}>
              <StyledWrapperImage>
                <img src={product.image.fluid.src} />
              </StyledWrapperImage>

              <ContentContainer>
                <Title>{product.name}</Title>
                <CurrentPrice>{product.price.toFixed(2)}zł</CurrentPrice>
                <OldPrice>{product.oldPrice.toFixed(2)}zł</OldPrice>
                <StyledButton text="Wybierz" />
              </ContentContainer>
            </Card>
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

const StyledButton = styled(Button)`
  margin-top: auto;
  margin-left: auto;

  padding: 1.2rem 5rem;
`;

const StyledWrapperImage = styled.div`
  background-image: url(${polygon});
  background-repeat: no-repeat;
  background-size: contain;
  flex: 33.33%;

  > img {
    max-width: 300px;
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

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex: 50%;
`;

const CurrentPrice = styled.p`
  font-size: 2rem;
  background: transparent;
  display: block;
  margin: 0;
  margin-top: 1rem;
  font-weight: 600;
  background: -webkit-linear-gradient(#f2994a, #eb5757);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const OldPrice = styled.p`
  margin: 0;
  opacity: 0.5;
  text-decoration: line-through;
`;

const Title = styled.h4`
  color: #000000;
  text-transform: capitalize;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.015em;
  opacity: 0.9;
`;

const StyledContianer = styled(Container)`
  margin-top: 150px;
  display: flex;
`;

const Card = styled.div`
  display: flex;
  border-radius: 2rem;
  background: linear-gradient(0deg, #ffffff, #ffffff);
  box-shadow: 0px 0px 10px 3px rgb(0 0 0 / 25%);
  margin: 0 1rem;
  padding: 2rem;
  flex-flow: column;
  margin-bottom: 3rem;
  max-width: 900px;
  justify-content: space-around;

  @media ${device.tablet} {
    flex-flow: row;
  }
`;
