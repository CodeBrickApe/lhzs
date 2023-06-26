import styled from 'styled-components';
export const SideWrapper = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  background: ${({ theme }) => theme.background.postCard};
  border-radius: 0.5rem;
  box-shadow: 0 1px 20px -8px ${({ theme }) => theme.colors.fiveOpcityBlack};
  text-shadow: 0 0 1px ${({ theme }) => theme.colors.oneOpcityBlack};
  padding: 1rem;
`
export const SideTitle = styled.div`
  margin-bottom: 10px;
  padding: 0 0 10px;
  font-size: 18px;
  border-bottom: 1px solid #e4e8eb;
`
export const SideContent = styled.div`
  width: 100%;
  height: 260px;
  position: relative;
  z-index: 1;
`
export const TagBox = styled.span`
  width: auto;
    float: left;
    display: inline;
    margin: 10px 0 0 8px;
    padding: 0;
    white-space: nowrap;
    border: 0;
`
export const TagBtn = styled.a`
    padding: 0 8px;
    font-size: 14px;
    line-height: 28px;
    border-radius: 3px;
    box-shadow: 0 1px 1px 0 #f5f5f5;
    border: 1px solid #e4e8eb;
    display: inline-block;
    vertical-align: top;
    position: absolute;
    top: 0px;
    left: 0px;
    display: inline-block;
    cursor: pointer;
    border-radius: 20px;
    :hover{
      text-decoration: none;
      color: #5CB85C;
      border: 1px solid #5CB85C
    }
`