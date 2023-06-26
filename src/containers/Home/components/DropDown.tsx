import React from 'react'
import { Icon } from 'src/components/Icon/Icon'
import styled from 'styled-components'
const DropDownWrapper = styled.section`
position: absolute;
  bottom: 1rem;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.4;
  cursor: pointer;
`
const DropDown: React.FC = () => {

  return (
    <DropDownWrapper onClick={() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }}>

      <Icon name='down' size='1.8rem'></Icon>
    </DropDownWrapper>
  )
}

export default DropDown 