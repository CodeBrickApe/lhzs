import styled from 'styled-components';

interface CanvasProps {
  bgColor?: string
  top?: string | number
  left?: string | number

}

export const DynamicEffectBgWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 22rem;
  margin-bottom: 4rem;
  text-align: center;
  overflow: hidden;
`
export const CanvasWrapper = styled.div<CanvasProps>`
    background-color: ${props => props.bgColor || ''};
    overflow: hidden;
    width: 100%;
    height: 100%;
`
export const Canvas = styled.canvas<CanvasProps>`
  position: absolute;
  top:  ${props => props.top || '50%'};
  left: ${props => props.left || 0};
  transform: translateY(-50%);
`
