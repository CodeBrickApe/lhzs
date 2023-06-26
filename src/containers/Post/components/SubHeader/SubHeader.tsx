import { FC } from 'react'
import styled from 'styled-components'
import { flexMixin } from 'src/styled/mixins'
import { Icon } from 'src/components/Icon/Icon'

const SubHeaderWrapper = styled.h3`
  ${flexMixin('flex-start')}
  padding-bottom: .6rem;
  width: 20rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text.primary};
  border-bottom: 1px dashed;
  border-bottom-color: ${({ theme }) => theme.border};
`


interface Props {
  icon: any
  title: string
}

const SubHeader: FC<Props> = ({ icon, title }) => {
  return (
    <SubHeaderWrapper>
      <Icon name={icon} size='1.4rem' mr='0.8rem'></Icon>
      {title}
    </SubHeaderWrapper>
  )
}

export default SubHeader
