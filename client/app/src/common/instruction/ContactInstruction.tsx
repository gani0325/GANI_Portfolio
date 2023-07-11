import React from "react";
import styled from "styled-components";
import color from "../style/theme";

/**
 * Just introduction for Contact.
 *
 * If you want to view internal of ContactInstruction,
 * go to the './src/common/instruction/ContactInstruction.tsx'
 */
const ContactInstruction = ({ id }: { id: string }) => {
  return (
    <Wrap id={id}>
            <h1>Contact</h1>
      <span style={{ color: `${color.pointColor}` }}>Hi there!</span>
      {/* aboutMeInfos={[
                {
                  title: "Where I live",
                  titleColor: color.pointColor,
                  description: "Siheung Gyeonggi-do, Republic of Korea",
                  descriptionColor: `${color.lightGrey}`,
                },
                {
                  title: "Give me a call",
                  titleColor: `${color.pointColor}`,
                  description: "T. +82 (0)10 6503 2334",
                  descriptionColor: `${color.lightGrey}`,
                },
                {
                  title: "My email",
                  titleColor: `${color.pointColor}`,
                  description: "lge000325@gmail.com",
                  descriptionColor: `${color.lightGrey}`,
                }
              ]} */}
    </Wrap>
  );
};

export default ContactInstruction;

const Wrap = styled.div`
  padding: 3em 2.2em 2em 2.2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  h1 {
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid;
  }
`;
