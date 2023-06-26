import React from 'react'
import styled, { keyframes } from 'styled-components'
const animate = keyframes`
 0%,
  100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }
 `

const Title = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top:50%;
  transform: translateY(-50%);
  font-size: 2.6rem;
  z-index: 2;
  color:#fff;
`
const Word = styled.span`
    display: inline-block;
    animation-name: ${animate};
    animation-duration: .4s;
    animation-timing-function: ease-in-out;
    animation-delay:  calc(0.1s * var(--delay));
    font-family: 'REEJI-BigYoung-BoldGB', '微软雅黑', "Open Sans", sans-serif;
    font-weight: 800;
`
interface Props {
  title: string
}
const DynamicEffectTitle: React.FC<Props> = ({ title }) => {
  return (
    <Title>
      {
        title?.split('').map((word, i) => {
          return <Word key={i} style={{ '--delay': i } as React.CSSProperties}>{word}</Word>
        })
      }
    </Title>
  )
}

export default DynamicEffectTitle