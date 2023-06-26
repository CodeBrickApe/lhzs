import breakpoints from 'src/styled/breakpoints';
import { flexMixin } from 'src/styled/mixins';
import styled from 'styled-components';
export const PostCardWrapper = styled.section`
  display: flex;
  margin-bottom: 3rem;
  height: 22rem;
  text-align: right;
  color: ${({ theme }) => theme.text.secondary};
  background: ${({ theme }) => theme.background.postCard};
  border-radius: 0.5rem;
  box-shadow: 0 1px 20px -8px ${({ theme }) => theme.colors.fiveOpcityBlack};
  text-shadow: 0 0 1px ${({ theme }) => theme.colors.oneOpcityBlack};
  overflow: hidden;

  &:nth-of-type(2n) {
    flex-direction: row-reverse;
    text-align: left;
  }

  @media only screen and ${breakpoints.device.laptop} {
    flex-direction: column;
    margin-bottom: 1rem;
    height: auto;
    text-align: left;

    &:nth-of-type(2n) {
      flex-direction: column;
    }

    img {
      height: 16rem;
    }
  }
`

export const PosterAnchor = styled.a`
  position: relative;
  width: 33rem;
  overflow: hidden;
  cursor: pointer;

  @media only screen and ${breakpoints.device.laptop} {
    width: 100%;
    height: 16rem;
  }
`

export const SummaryWrapper = styled.div`
  box-sizing: border-box;
  padding: 1.8rem 2.4rem;
  width: 26rem;

  @media only screen and ${breakpoints.device.laptop} {
    padding: 1.2rem;
    width: 100%;
  }
`
export const ReleasedAt = styled.p`
  font-size: 0.9rem;

  @media only screen and ${breakpoints.device.laptop} {
    display: none;
  }
`
export const Title = styled.h2`
  margin: 1.4rem 0;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.header};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and ${breakpoints.device.laptop} {
    margin-top: 0;
  }
`

export const Meta = styled.div`
  /* ${flexMixin('space-between')} */
  display: inline-block;
  /* display: flex; */
`

export const MetaItem = styled.div`
display: inline-block;
  font-size: 0.9rem;
  :last-child{
    margin-left: 1rem;
  }
`

export const Summary = styled.p`
  margin: 1.4rem 0 1rem;
  min-height: 8rem;
  font-size: 1.1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.text.header};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;

  @media only screen and ${breakpoints.device.laptop} {
    min-height: 100%;
    display: block;
    margin: 1rem 0 0;
  }
`
export const ReadMoreSVG = styled.section`
svg{
  width: 2rem;
  height: 2rem;
  fill: ${({ theme }) => theme.text.header};
  cursor: pointer;

  &:hover {
    fill: ${({ theme }) => theme.colors.primary};
  }

  @media only screen and ${breakpoints.device.laptop} {
    display: none;
  }
}

`