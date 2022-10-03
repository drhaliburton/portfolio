import React, { useState, useEffect, MutableRefObject } from 'react'
import styled from 'styled-components'

const ComputerWrapper = styled.div`
  text-align: center;

   > img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 250px;

    @media screen and (max-height: 600px) {
      position: relative;
    }
   }
`

const getImagePath = (imagePath: string) => require('../assets/' + imagePath)

const Computer = ({ scrollRef }: { scrollRef: MutableRefObject<any> }) => {
  const [imageInt, setImageInt] = useState(1)

  const handleScroll = () => {
    const scrollPos = Math.round(
      (window.scrollY / scrollRef.current.clientHeight) * 8 + 1
    );
    if (scrollPos !== imageInt) {
      setImageInt(scrollPos);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [window])

  return (
    <ComputerWrapper>
      <img src={getImagePath('comp' + imageInt + '.png')} />
    </ComputerWrapper>
  )
}
export default Computer;