import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import get from "lodash/get";
import Img from "gatsby-image";
import { Layout } from "../components/layout";

class ProductTemplate extends React.Component {
  render() {
    return (
      <Layout>
        <p>Welcome on Prodcut</p>
      </Layout>
    );
  }
}

export default ProductTemplate;
