import React, { useState, useEffect, MutableRefObject, useCallback } from 'react'
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

  const handleScroll = useCallback(() => {
    const viewportHeight = window.visualViewport?.height || 0
    const scrollPos = window.scrollY + viewportHeight
    let newImageInt = Math.ceil(
      (scrollPos / scrollRef.current.clientHeight) * 8
    );
    if (newImageInt > 8) newImageInt = 8
    if (newImageInt < 1) newImageInt = 1

    if (newImageInt !== imageInt) {
      setImageInt(newImageInt);
    }
  }, [imageInt])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window])

  return (
    <ComputerWrapper>
      <img src={getImagePath('comp' + imageInt + '.png')} />
    </ComputerWrapper>
  )
}
export default Computer;