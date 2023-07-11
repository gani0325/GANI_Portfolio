import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { VisitorCounter } from "dev-portfolio";
import countAPI from "../../apis/count";
import color from "../style/theme";

const VisitorCounterInstruction = ({ id }: { id: string }) => {
  const [todayCounter, setTodayCounter] = useState<number>(0);
  const [totalCounter, setTotalCounter] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const result = await countAPI.getCount();
      setTodayCounter(result.todayCount);
      setTotalCounter(result.totalCount);
    })();
  }, []);

  return (
    <Wrap id={id}>
      <InstructionWrap>
        <h1>Visitor Counter</h1>
        <ThemeWrap>
          <VisitorCounter
            todayVisitor={todayCounter}
            totalVisitor={totalCounter}
            backgroundColor={color.mainColor}
            titleColor={color.pointColor}
          />
          <VisitorCounter
            theme="simple"
            todayVisitor={todayCounter}
            totalVisitor={totalCounter}
            totalVisitorColor={color.mainColor}
            todayVisitorColor={color.pointColor}
          />
        </ThemeWrap>
      </InstructionWrap>
      <VisitorCounter
        theme="big-size"
        todayVisitor={todayCounter}
        totalVisitor={totalCounter}
        backgroundColor={color.mainColor}
        todayVisitorColor={color.pointColor}
        totalVisitorColor={color.pointColor}
        titleColor={color.pointColor}
        todayTitleColor="white"
        totalTitleColor="white"
      />
    </Wrap>
  );
};

export default VisitorCounterInstruction;

const Wrap = styled.div`
  padding: 3em 0em;
`;

const ThemeWrap = styled.div`
  padding: 2em;
  display: flex;
  justify-content: space-around;
`;

const InstructionWrap = styled.div`
  padding: 0em 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  h1 {
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid;
  }
`;
