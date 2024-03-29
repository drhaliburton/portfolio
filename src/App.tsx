import React, { useRef } from 'react';
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Resume from './components/Resume'

const Page = styled.div`
  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-size: 20px;
    margin-bottom: 6px;
    font-weight: 600;

  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 4px;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0;
     > a {
      text-decoration: none;
     }
  }

  @media screen and (max-width: 700px) {
    margin: 16px;
  }

  @media print {
    margin: 0 16px;

    img { 
      display: none;
    }

    button {
      display: none;
    }

    #sidebar-content {
      display: none;
    }

  }
`

const App = () => {
  const scrollRef = useRef()
  return (
    <Page>
      <Sidebar scrollRef={scrollRef} />
      <Resume scrollRef={scrollRef} />
    </Page>
  );
}

export default App;
