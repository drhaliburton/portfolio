import React from 'react'
import styled from 'styled-components';

const BtnWrapper = styled.div`
  margin: 18px 0;

  > button {
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 6px 12px;

    &:hover {
      cursor: pointer;
    }
  }
`


const DownloadBtn = () => {
  return <BtnWrapper><button onClick={() => window.print()}>Download PDF</button></BtnWrapper>
}

export default DownloadBtn;