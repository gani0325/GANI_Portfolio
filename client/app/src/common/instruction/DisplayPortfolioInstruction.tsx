import React from "react";
import styled from "styled-components";

const DisplayPortfolioInstruction = () => {
  return (
    <Wrap>
       <br />
      <h1>Career</h1>
    </Wrap>
  );
};

export default DisplayPortfolioInstruction;

const Wrap = styled.div`
  padding: 1em 2.2em 5em 2.2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  h1 {
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid;
  }
`;
