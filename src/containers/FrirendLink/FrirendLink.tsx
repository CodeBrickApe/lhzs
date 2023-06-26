import dynamic from 'next/dynamic'
import React from 'react'
const DynamicEffectBg = dynamic(() => import('src/components/DynamicEffectBg/DynamicEffect'), { ssr: false })
import { Description, Friend, FriendLinkWrapper, Introduction, Member, Name, PathLink, Thumb } from './styled'
const FriendLinkContainer: React.FC = () => {
  return (
    <>
      <DynamicEffectBg title='无论生活还是网络，我们都需要朋友。'></DynamicEffectBg>
      <FriendLinkWrapper>
        <Friend>
          <Member>
            <Thumb className='thumb'>
              <img src='images/bg-d.jpg' alt=''></img>
            </Thumb>
            <Description>
              <Name>灯火珊</Name>
              <Introduction>
                君不见，一缕青丝一声叹 <br></br>
                <PathLink>@灯火珊</PathLink>
              </Introduction>
            </Description>
          </Member>
          <Member>
            <Thumb className='thumb'>
              <img src='images/bg-d.jpg' alt=''></img>
            </Thumb>
            <Description>
              <Name>灯火珊</Name>
              <Introduction>
                君不见，一缕青丝一声叹 <br></br>
                <PathLink>@灯火珊</PathLink>
              </Introduction>
            </Description>
          </Member>
          <Member>
            <Thumb className='thumb'>
              <img src='images/bg-d.jpg' alt=''></img>
            </Thumb>
            <Description>
              <Name>灯火珊</Name>
              <Introduction>
                君不见，一缕青丝一声叹 <br></br>
                <PathLink>@灯火珊</PathLink>
              </Introduction>
            </Description>
          </Member>
          <Member>
            <Thumb className='thumb'>
              <img src='images/bg-d.jpg' alt=''></img>
            </Thumb>
            <Description>
              <Name>灯火珊</Name>
              <Introduction>
                君不见，一缕青丝一声叹 <br></br>
                <PathLink>@灯火珊</PathLink>
              </Introduction>
            </Description>
          </Member>
        </Friend>
      </FriendLinkWrapper>
    </>

  )
}

export default FriendLinkContainer