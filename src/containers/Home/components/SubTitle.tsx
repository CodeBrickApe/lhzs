import React from 'react'
import { Icon } from 'src/components/Icon/Icon'
import breakpoints from 'src/styled/breakpoints'
import { flexMixin } from 'src/styled/mixins'
import styled from 'styled-components'
interface Props {
  title?: string
  icon: any,
  mediaHidden?: boolean,
  mt?: string,
  after?: string,
  domId?: string
}
const Header = styled.section<{ hidden?: boolean, mt?: string }>`
  ${flexMixin('flex-start')}
  margin: 4rem auto 2rem;
  padding-bottom: 0.6rem;
  width: 100%;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text.primary};
  border-bottom: 1px dashed;
  border-bottom-color: ${({ theme }) => theme.border};
  margin-top: ${props => props.mt};
  @media only screen and ${breakpoints.device.laptop} {
    display: ${props => (props.hidden ? 'none' : '')};
  }
`
const SVG = styled.span`
  margin-right: 0.8rem;
`
const After = styled.span`
  font-size: .8rem;
  margin-left: 1rem;
`
const SubTitle: React.FC<Props> = ({ title, icon, mediaHidden = false, mt, after, domId }) => {

  return (
    <Header hidden={mediaHidden} mt={mt} id={domId}>
      <SVG>
        <Icon name={icon} size='1.8rem'></Icon>
      </SVG>
      {title}
      <After>{after}</After>
    </Header>
  )
}

export default SubTitle