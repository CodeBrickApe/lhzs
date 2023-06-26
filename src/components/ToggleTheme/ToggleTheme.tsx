import React from 'react'
import breakpoints from 'src/styled/breakpoints'
import { flexMixin, transitionMixin } from 'src/styled/mixins'
import styled from 'styled-components'
import { Icon } from '../Icon/Icon'
import { day } from '../Icon/icons'
interface Props {
  theme: string
  onToggle: Function
}
interface ButtonProps {
  readonly lightTheme: boolean
}
const ToggleContainer = styled.button`
    position: fixed;
    top: 0.25rem;
    right: 2.4rem;
    ${flexMixin('space-between')}
    width: 8rem;
    height: 3rem;
    background: ${({ theme }) => theme.gradient};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    border-radius: 3rem;
    cursor: pointer;
    overflow: hidden;
    z-index: ${({ theme }) => theme.zIndex.fixed};

    @media only screen and ${breakpoints.device.laptop} {
      display: none;
    }
  `
export const ToggleContainerForMobile = styled.div`
  display: none;

  @media only screen and ${breakpoints.device.laptop} {
    display: block;
    position: fixed;
    left: calc(50% - 1rem);
    bottom: 3.3rem;
    text-align: center;
    z-index: ${({ theme }) => theme.zIndex.overlay};
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`
const SVG = styled.section<ButtonProps>`
  ${transitionMixin('all', 300, 'linear')}

  &:first-child {
    transform: ${({ lightTheme }) =>
    !lightTheme ? 'translateY(-55px)' : 'translateY(0)'};
  }

  &:nth-child(2) {
    transform: ${({ lightTheme }) =>
    !lightTheme ? 'translateY(0)' : 'translateY(-55px)'};
  }
`
const ToggleTheme: React.FC<Props> = (props) => {
  const { onToggle, theme } = props


  return (
    <>
      <ToggleContainer onClick={() => onToggle()}>
        <SVG lightTheme={theme === 'light'}>
          <Icon name='day' size='2.2rem'></Icon>
        </SVG>
        <SVG lightTheme={theme === 'light'}>
          <Icon name='night' size='2.2rem'></Icon>
        </SVG>
      </ToggleContainer>
    </>
  )
}

export default ToggleTheme