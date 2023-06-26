import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  margin: 0 auto;
  margin-top: 10rem;
  width: 78rem;
  padding-left:6rem;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-right: -2rem;
  text-align: center;
  svg{
      width: 3rem;
      height: 3rem;
      transition: width 0.2s ease-out;
      transition: height 0.2s ease-out;
    }
`
export const ProjectDesc = styled.div`
  font-size: .7rem;
  color: ${({ theme }) => theme.text.primary};
  transition: font-size 0.2s ease-out;
`
export const ProjectName = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.text.primary};
  transition: font-size 0.2s ease-out;
`
export const NewMimicry = styled.div`

width: 12rem;
 height: 12rem;
 box-shadow: ${({ theme }) => theme.mimicryShadow};
 border-radius: 20px;
 transition: box-shadow .2s ease-out;
 margin-right: 6rem;
 padding: 1rem ;
 display: flex;
align-items: center;
flex-direction: column;
justify-content: space-around;
 position: relative;
 background: ${({ theme }) => theme.mimicryBg};
 :hover{
  background: none;
   box-shadow:  ${({ theme }) => theme.mimicryShadowHover};
    .name{
      font-size: .9rem;
      transition: font-size 0.2s ease-out;
    }
    .desc{
      font-size: .5rem;
      transition: font-size 0.2s ease-out;
    }
    svg{
      width: 2.8rem;
      height: 2.8rem;
      transition: width 0.2s ease-out;
      transition: height 0.2s ease-out;
    }
 }
`