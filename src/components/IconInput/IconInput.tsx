import React from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon/Icon'
const IconInputWrapper = styled.section`
  position:relative;
  margin-bottom: 1rem;
`
const IconBox = styled.section`
  position: absolute;
  top:50%;
  transform: translateY(-65%);
  left: .4rem;
`
const Input = styled.input`
  border-radius: .8rem;
  height: 3rem;
  width: 100%;
  padding-left: 1.8rem;
  border:2px solid #dbdfe4;
  /* overflow: hidden; */
  :focus{
    border:2px solid #dbdfe4;
    outline:none
  } 
`
interface Props {
  placeholder?: string,
  icon?: any,
  onChange?: Function
  value?: any
  inputId?: string
}

const IconInput: React.FC<Props> = ({
  icon,
  placeholder,
  onChange,
  value,
  inputId
}) => {

  return (
    <IconInputWrapper>
      {icon && <IconBox>
        <Icon name={icon}></Icon>
      </IconBox>}
      <Input value={value} placeholder={placeholder} id={inputId} onChange={(event) => onChange && onChange(event.target.value)}></Input>
    </IconInputWrapper>
  )
}

export default IconInput