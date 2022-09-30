import React, { useState, useEffect, useCallback, MutableRefObject } from 'react'
import styled from 'styled-components'

const ComputerWrapper = styled.div`
  position: absolute;
  bottom: 16px;
  max-width: 280px;

   > img {
    width: 100%;
   }
`
const getImagePath = (imagePath: string) => require('../assets/' + imagePath)

const Computer = ({ scrollRef }: { scrollRef: MutableRefObject<any> }) => {
  const [imageInt, setImageInt] = useState(1)

  const handleScroll = () => {
    console.log(scrollRef)

    const scrollPos = Math.round(
      (window.scrollY / scrollRef.current.clientHeight) * 8 + 1
    );
    if (scrollPos !== imageInt) {
      setImageInt(scrollPos);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // return window.removeEventListener('scroll', handleScroll);
  }, [window])

  return (<ComputerWrapper><img src={getImagePath('comp' + imageInt + '.png')} /></ComputerWrapper>)
}
export default Computer;