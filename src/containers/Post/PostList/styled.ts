import breakpoints from 'src/styled/breakpoints';
import styled from 'styled-components'

export const PostContent = styled.section`
  display: grid;
  grid-template-columns: 65rem 22rem;
  grid-column-gap: 3.6rem;
  justify-content: center;
  margin: 0 auto;
  @media only screen and  ${breakpoints.device.laptop} {
    padding: 0 1rem;
    display: block;
  }

  .MuiPaginationItem-root {
    color: ${({ theme }) => theme.text.secondary};
    border-color: ${({ theme }) => theme.text.secondary};
  }
`

export const PostItemContainer = styled.div``

export const AuxiliaryContent = styled.div`
   @media only screen and  ${breakpoints.device.laptop} {
    display: none;
  }
`