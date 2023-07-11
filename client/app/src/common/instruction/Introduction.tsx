import React from "react";
import styled from "styled-components";
import color from "../style/theme";

/**
 * Just introduction for dev-portfolio-app.
 *
 * If you want to view internal of Introduction,
 * go to the './src/common/instruction/Introduction.tsx'
 */
const Introduction = ({ id }: { id: string }) => {
  return (
    <Wrap id={id}>
      <h1>Introduction</h1>
      <h2>인생의 디폴트값은 GO라는 좌우명처럼 열의와 열린 마음으로 끊임없이 성장하고 있는 이가은 입니다</h2>
      <h2>긍정적이며 밝은 아이로 소신있고 당당한 자세를 갖춰 책임있는 역할을 끝까지 수행하고 항상 즐겁게 임하고자 합니다</h2>
      <br />
    </Wrap>
  );
};

export default Introduction;

const Wrap = styled.div`
  padding: 1em 2.2em 0em 2.2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  h1 {
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid;
  }
  h2 {
    margin: 0px 0px 10px 0px;
    font-size: 19px;
  }
`;
