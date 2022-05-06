import React from "react";
import styled from "styled-components";

import { List } from "./components/List";
import { Grid } from "./components/Grid";

const Wrapper = styled.div`
  div:first-of-type {
    margin-bottom: 10px;
  }
`;

export default function App() {
  return (
    <Wrapper>
      <Grid />
      <List />
    </Wrapper>
  );
}
