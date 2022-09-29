import React from 'react';
import { summary, stack, education, experience } from './data'
import Education from './Education';
import Experience from './Experience';

const Resume = () => {
  return (
    <div>
      <h2>Summary</h2>
      {summary}

      <h3>Languages</h3>
      {stack.languages}
      <h3>Tools</h3>
      {stack.tools}
      <h3>Spoken</h3>
      {stack.spoken}

      <h2>Experience</h2>
      {experience.map((data) => <Experience experience={data} />)}

      <h2>Education</h2>
      {education.map((data) => <Education education={data} />)}
    </div>
  );
}

export default Resume;
