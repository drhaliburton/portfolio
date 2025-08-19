import React, { useRef } from 'react';
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Resume from './components/Resume'

const Page = styled.div`
  a {
    color: inherit;
  }

  h1 {
    font-size: 20px;
    margin-top: 12px;
    margin-bottom: 0;
    > a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0;
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
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
