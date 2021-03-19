import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Container } from "../components/atoms/container";
import { Layout } from "../components/layout";
import { device } from "../styles/breakpoints";

export const Partners = () => {
  const data = useStaticQuery(graphql`
    query GetEkogroszekProducents {
      allStrapiProducents(filter: { kategoria: { eq: "Ekogroszek" } }) {
        nodes {
          id
          Nazwa
          Opis
          Logo {
            url
          }
        }
      }
    }
  `);

  const producents = data.allStrapiProducents.nodes;

  return (
    <Layout>
      <StyledContianer>
        <PageHeading>Partnerzy </PageHeading>

        {producents.map((producent) => (
          <Card key={producent.id}>
            <img
              src={`${process.env.IMAGE_URL}${producent.Logo[0].url}`}
              alt={producent.Nazwa}
            />
            <p>{producent.Opis}</p>
          </Card>
        ))}
      </StyledContianer>
    </Layout>
  );
};

export default Partners;

const StyledContianer = styled(Container)`
  display: block;
`;

const PageHeading = styled.h1`
  font-size: 2.5rem;
  margin: 150px 1rem 2rem;
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

  @media ${device.tablet} {
    flex-flow: row;
  }

  > img {
    flex-basis: 33.33%;
    max-width: 300px;
    margin: auto;
  }

  > p {
    flex-basis: 66.66%;

    @media ${device.tablet} {
      padding-left: 2rem;
    }
  }
`;
