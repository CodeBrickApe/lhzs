
import React from 'react'
import { Icon } from 'src/components/Icon/Icon'
import breakpoints from 'src/styled/breakpoints'
import { flexMixin } from 'src/styled/mixins'
import styled from 'styled-components'

const Announcement: React.FC = () => {
  const AnnouncementWrapper = styled.section`
    ${flexMixin('flex-start')}
    padding: 1.8rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text.secondary};
    background: ${({ theme }) => theme.background.secondary};
    border: 1px dashed;
    border-color: ${({ theme }) => theme.border};
    border-radius: 0.8rem;

  @media only screen and ${breakpoints.device.laptop} {
    display: none;
  }
  `
  const Notice = styled.section`
    margin-left: 1.8rem;
  `
  return (
    <AnnouncementWrapper>
      <Icon name='notice' size='2rem'></Icon>
      <Notice>中华人民共和国万岁！！！</Notice>
    </AnnouncementWrapper>
  )
}

export default Announcement