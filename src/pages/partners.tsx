import React from "react";
import styled from "styled-components";
import { Container } from "../components/atoms/container";
import { Layout } from "../components/layout";

export const Partners = () => {
  return (
    <Layout>
      <Container>
        <PageHeading>Partnerzy </PageHeading>
      </Container>
    </Layout>
  );
};

export default Partners;

const PageHeading = styled.h1`
  font-size: 3rem;
`;
