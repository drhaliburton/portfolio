import React, { MutableRefObject } from 'react';
import Computer from './Computer';
import { sidebar } from '../data'
import styled from 'styled-components';
import Title from './Title';
import DownloadBtn from './DowloadBtn';
import Spacer from './Spacer';

const SidebarLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 320px;
  height: 100%;
  padding: 0 16px 0 24px;

  @media screen and (max-width: 650px) {
    position: initial;
    top: inherit;
    left: inherit;
    bottom: inherit;
    top: inherit;
    width: 100%;
    height: 100%;
    padding: 0;
    img { 
      display: none;
    }
  }

  @media print {
    position: initial;
    top: inherit;
    left: inherit;
    bottom: inherit;
    top: inherit;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 18px 0;
    text-align: center;
  }
`

const Sidebar = ({ scrollRef }: { scrollRef: MutableRefObject<any> }) => {
  const { title, subtitle, email, github, preferredTechnologies, strengths, linkedIn } = sidebar
  return (
    <SidebarLayout>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3><a href={"mailto:" + email} target="_blank" rel="noreferrer">{email}</a></h3>
      <a href={github} target="_blank" rel="noreferrer">Github</a> | <a href={linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
      <div id="sidebar-content">
        <DownloadBtn />
        <Spacer />
        <Title title="Preferred technologies" />
        {preferredTechnologies.join(', ')}.
        <Spacer />
        <Title title="Strengths" />
        {strengths.join(', ')}.
      </div>


      <Computer scrollRef={scrollRef} />
    </SidebarLayout>
  );
}

export default Sidebar;
