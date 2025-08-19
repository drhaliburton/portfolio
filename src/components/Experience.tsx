import React from 'react';
import styled from 'styled-components';
import { ExperienceType } from '../data';


const ExperienceWrapper = styled.div`
  margin: 18px 0 32px 0;
`
const Experience = ({ experience }: { experience: ExperienceType }) => {
  const { title, org, url, subtitle, content } = experience;
  return (
    <ExperienceWrapper>
      <h1>{title}{org ? <> - <a href={url} target="_blank" rel="noreferrer">{org}</a></> : undefined}</h1>
      <h2>{subtitle}</h2>
      <p>{content}</p>
    </ExperienceWrapper>
  );
}

export default Experience;
