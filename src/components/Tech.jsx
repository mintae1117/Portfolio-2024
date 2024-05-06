import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import styled from "styled-components";

const StackTitle = styled.h2`
  margin-bottom: 70px;
`;

const Tech = () => {
  return (
    <>
    <StackTitle className={`${styles.sectionHeadText} text-center`}>
      My Tech Stacks.
    </StackTitle>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
