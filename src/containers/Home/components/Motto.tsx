import React from 'react'
import { Icon } from 'src/components/Icon/Icon'
import { SOCIAL_MEDIA } from 'src/shared/constants'
import { backgroundMixin, flexMixin, transitionMixin } from 'src/styled/mixins'
import styled, { css } from 'styled-components'
interface Code {
  img?: string
}

const SocialMediaIconWrapper = styled.div`
  ${flexMixin()}
`
const MottoBar = styled.section`
  position: relative;
  background: ${({ theme }) => theme.background.mottoBg};
  padding: 1.4rem 1.8rem;
  border-radius: 0.7rem;
`
const MottoContent = styled.p`
  margin-bottom: 1.4rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
const UpTriangle = styled.span`
  position: absolute;
  top: -2rem;
  left: 5rem;
  width: 0;
  height: 0;
  border: 1rem solid transparent;
  border-bottom-color: ${({ theme }) => theme.background.mottoBg};
`
const QRCode = css`
  position: relative;

  &::after,
  &::before {
    position: absolute;
    content: '';
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, 16px, 0);
    ${transitionMixin('all', 700, 'ease')}
  }

  &::after {
    width: 8rem;
    height: 8rem;
    padding: 0.65rem;
    border-radius: 0.8rem;
    top: 4.5rem;
    left: -3.2rem;
  }

  &::before {
    width: 0;
    height: 0;
    top: 2.4rem;
    left: 0.4rem;
    border: 1.06rem solid transparent;
    border-bottom-color: ${({ theme }: any) => theme.background.mottoBg};
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
    visibility: visible;
    transform: translate3d(0, 0, 0);
    ${transitionMixin('all', 700, 'ease')}
  }
`
const QRCodeLink = styled.a<Code>`
  ${QRCode}
  &::after {
    background-color: ${({ theme }) => theme.background.mottoBg};
    background-image: url(${props => props.img});
    background-origin: content-box;
    ${backgroundMixin()}
  }
`
const Icons = styled.section`
margin : 0 1rem;
`
const Motto: React.FC = () => {
  return (
    <MottoBar>
      <UpTriangle></UpTriangle>
      <MottoContent>测试白皮书测试白皮书</MottoContent>
      <SocialMediaIconWrapper>
        {Object.keys(SOCIAL_MEDIA).map((key) => {
          if (key === 'wxpay' || key === 'zfbpay' || key === 'wechat') {
            return (
              <QRCodeLink
                key={key}
                target="_blank"
                img={SOCIAL_MEDIA[key].url}
                rel="noopener noreferrer">
                <Icons>
                  <Icon size='1.8rem' name={SOCIAL_MEDIA[key].icon}></Icon>
                </Icons>
              </QRCodeLink>
            )
          } else {
            return (
              <a
                key={key}
                href={SOCIAL_MEDIA[key].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons>
                  <Icon size='1.8rem' name={SOCIAL_MEDIA[key].icon}></Icon>
                </Icons>
              </a>
            )
          }


        })}
      </SocialMediaIconWrapper>
    </MottoBar>
  )
}

export default Motto