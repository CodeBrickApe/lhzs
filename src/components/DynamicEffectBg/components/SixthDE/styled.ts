import styled from "styled-components";

export const SixthDEWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  margin: 0;
  background: black;
  -webkit-filter: invert(0);
  filter: invert(0);
  
`

export const CanvasOne = styled.canvas`
 position: absolute;
 top: 50%;
    left: 50%;
  z-index: 1;
  -webkit-filter: hue-rotate(100deg) brightness(1);
  filter: hue-rotate(100deg) brightness(1);
  mix-blend-mode: difference;
  -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

export const CanvasTwo = styled.canvas`
  position: absolute;
  top: 50%;
    left: 50%;
  mix-blend-mode: lighter;
  -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`
