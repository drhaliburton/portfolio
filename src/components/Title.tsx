import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  margin: 12px 0;
`

const Divider = styled.div`
  text-align: left;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  margin: 12px 0;

  &::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    justify-content: space-around;
    margin-left: 10px;
    border-bottom: 1px solid;
    width: 100%;
    overflow: hidden;
    vertical-align: middle;
    content: "";
  }
`

const Title = ({ title }: { title: string }) => {
  return (
    <Divider>
      {title}
    </Divider>
  );
}

export default Title;
