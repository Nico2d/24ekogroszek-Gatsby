import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default () => (
  <Container role="navigation">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </Container>
);

const Container = styled.nav`
  width: 100vw;
  background: red;
`;
