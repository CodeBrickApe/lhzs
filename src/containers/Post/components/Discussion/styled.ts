import styled from "styled-components";

export const DiscussionWrapper = styled.section`
  margin-top: 2rem;
`
export const TextArea = styled.textarea`
  width: 100%;
  border:2px solid #dbdfe4;
  border-radius: .5rem;
  resize:none;
  :focus{
    border:2px solid #dbdfe4;
    outline:none
  } 

`
export const SendWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  button{
    margin-left: 1rem;
  }
`
