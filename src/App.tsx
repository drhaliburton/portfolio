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
    font-size: 22px;
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

  @media print {
    img { 
      display: none;
    }

    button {
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
