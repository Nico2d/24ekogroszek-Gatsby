import React from "react";
import styled from "styled-components";
import { Container } from "../components/atoms/container";
import { Layout } from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import { ProductCard } from "../components/molecules/productCard";
import { Select } from "../components/atoms/select";

export const Catalog = () => {
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
        <StyledAside>
          <h6>Prodcent</h6>

          <StyledProducentsWrapper>
            {producents.map(({ node }) => (
              // <li key={node.name}>{node.name}</li>

              <li>
                <StyledCheckbox type="checkbox" />
                <label>{node.name}</label>
              </li>
            ))}
          </StyledProducentsWrapper>
        </StyledAside>
        <main style={{ margin: "auto" }}>
          <Select optionList={sortList} method={(e) => console.log(e)} />
          {products.map(({ node }) => (
            <ProductCard product={node} />
          ))}
        </main>
      </StyledContianer>
    </Layout>
  );
};

export default Catalog;

const StyledCheckbox = styled.input`
  --active: #275efe;
  --active-inner: #fff;
  --focus: 2px rgba(39, 94, 254, 0.3);
  --border: #bbc1e1;
  --border-hover: #275efe;
  --background: #fff;
  --disabled: #f6f8ff;
  --disabled-inner: #e1e6f9;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 21px;
  outline: none;
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin: 0;
  cursor: pointer;
  border: 1px solid var(--bc, var(--border));
  background: var(--b, var(--background));
  transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
  &:after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    position: absolute;
    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
      opacity var(--d-o, 0.2s);
  }
  &:checked {
    --b: var(--active);
    --bc: var(--active);
    --d-o: 0.3s;
    --d-t: 0.6s;
    --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }
  &:disabled {
    --b: var(--disabled);
    cursor: not-allowed;
    opacity: 0.9;
    &:checked {
      --b: var(--disabled-inner);
      --bc: var(--border);
    }
    & + label {
      cursor: not-allowed;
    }
  }
  &:hover {
    &:not(:checked) {
      &:not(:disabled) {
        --bc: var(--border-hover);
      }
    }
  }
  &:focus {
    box-shadow: 0 0 0 var(--focus);
  }
  &:not(.switch) {
    width: 21px;
    &:after {
      opacity: var(--o, 0);
    }
    &:checked {
      --o: 1;
    }
  }
  & + label {
    font-size: 14px;
    line-height: 21px;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    margin-left: 4px;
  }
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

const StyledContianer = styled(Container)`
  margin-top: 150px;
  display: flex;
`;
