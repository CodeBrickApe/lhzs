import styled, { keyframes } from "styled-components";

export const Review = styled.div`
  color: #777;
  padding: 10px 10px 10px 10px;
  font-size: 14px;
`
export const Progress = styled.div`
  background-color: rgba(100, 100, 100, 0.2);
  border-radius: 5px;
  position: relative;
  height: 10px;
  width: 200px;
`

const barberpole = keyframes`
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 500px 0%;
  }
`

export const ProgressDone = styled.div`
  border-radius: 5px;
  height: 10px;
  animation: ${barberpole} 9s linear infinite;
  background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-size: 40px 40px;
`

export const Percent = styled.span`
  float: right;
  margin-top: -21px;
`
export const IconContainer = styled.div`
  margin-bottom:.3rem
`