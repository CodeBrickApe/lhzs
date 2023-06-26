import breakpoints from 'src/styled/breakpoints';
import { transitionMixin } from 'src/styled/mixins'
import styled from 'styled-components'

interface ButtonProps {
  readonly lightTheme: boolean
}


export const SVG = styled.span<ButtonProps>`
  ${transitionMixin('all', 500, 'linear')}
  background-color: var(--day-night);
  display: inline-block;
  border-radius: 50%;
  &:first-child {
    transform: ${({ lightTheme }) =>
    !lightTheme ? 'translatey(0px)' : 'translatey(-55px)'};
  }

  &:nth-child(2) {
    transform: ${({ lightTheme }) =>
    !lightTheme ? 'translatey(-55px)' : 'translatey(0px)'};
  }
`
export const DayNight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 6;
    width: 8rem;
    height: 2.5rem;
    padding: 0 .3rem;
    overflow: hidden;
    
`
export const SwitchThemeBox = styled.div`
    position: fixed;
    top: 0.5rem;
    right: 2.4rem;
    z-index: 99999;
    @media only screen and ${breakpoints.device.laptop} {
      display: none;
    }
`
