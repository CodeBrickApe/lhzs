
import styled from "styled-components";
interface IconProps {
  size?: string
  mr?: string
  ml?: string
  my?: string
  mx?: string
  mb?: string
  mt?: string
}
export const Icons = styled.span<IconProps>`
  vertical-align: middle;
  display: inline-block;
  width: ${props => props.size || '1rem'};
  height: ${props => props.size || '1rem'};
  margin: 0 ${props => props?.mx || 0};
  margin: ${props => props?.my || 0} 0;
  margin-left: ${props => props?.ml || 0};
  margin-right: ${props => props?.mr || 0};
  margin-bottom: ${props => props?.mb || 0};
  margin-top: ${props => props?.mt || 0};
`

