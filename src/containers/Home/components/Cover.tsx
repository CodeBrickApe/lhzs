import React from 'react'
import LazyLoadImage from 'src/components/LazyLoadImage/LazyLoadImage'
import { useDarkMode } from 'src/hooks/useDarkMode'
import styled from 'styled-components'

const Covers = styled.figure`
  position: relative;
  margin-bottom: 3.2rem;
  width: 100vw;
  height: 100vh;
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* background: url(${({ theme }) => theme.homeBg} ) center center;
    background-size: 100% 100%;
    background-repeat: no-repeat; */
    /* opacity: 0.5; */
  }
`
const CoverImage = styled.div`
height: 100%;
width: 100%;
   background: url(${({ theme }) => theme.homeBg} ) center ;
    background-size: cover;
    background-repeat: no-repeat;
`
const Cover: React.FC = () => {

  return (
    <Covers>
      <CoverImage></CoverImage>
      {/* <LazyLoadImage src='images/bg.png' ></LazyLoadImage> */}
    </Covers>
  )
}

export default Cover