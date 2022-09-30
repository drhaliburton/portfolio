import React, { MutableRefObject } from 'react';
import styled from 'styled-components';
import { summary, stack, education, experience } from '../data'
import Experience from './Experience';
import Spacer from './Spacer';
import Title from './Title';

const ResumeLayout = styled.div`
  max-width: 630px;
  width: 100%;
  position: absolute;
  left: 320px;
  padding: 16px;
  margin-left: 60px;
  background-color: white;

  @media screen and (max-width: 650px) {
    width: 100%;
    position: inherit;
    left: inherit;
    margin: 0;
    margin-left: 0;
    padding: 0;
  }

  @media print {
    max-width: inherit;
    width: 100%;
    position: inherit;
    left: inherit;
    margin: 0;
    margin-left: 0;
    padding: 0;
  }

  h1 {
    font-size: 18px;
    font-weight: 500;
  }

  h2 {
    font-size: 14px;
  }

  p {
    margin: 12px 0;
  }
`
const Resume = ({ scrollRef }: { scrollRef: MutableRefObject<any> }) => {
  return (
    <ResumeLayout ref={scrollRef}>
      <Title title="Summary" />
      <p>{summary}</p>
      <p>
        <b>Languages:</b> {stack.languages}.<br /><br />
        <b>Tools:</b> {stack.tools}.
      </p>
      <Spacer />
      <Title title="Experience" />
      {experience.map((data) => <Experience key={data.title} experience={data} />)}
      <Spacer />
      <Title title="Education" />
      {education.map((data) => <Experience key={data.title} experience={data} />)}
    </ResumeLayout>
  );
}

export default Resume;
