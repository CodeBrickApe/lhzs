import moment from 'moment'
import React from 'react'
import { Icon } from 'src/components/Icon/Icon'
import styled from 'styled-components'
const CommentWrapper = styled.section`
  display: flex;
  padding: 1rem 0;
`
const UserAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

`
const InfoContent = styled.section`
  margin-left: 1rem ;
  flex: 1;  
`
const User = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  span{
    margin-left: .7rem;
    font-size: .8rem;
    color:${({ theme }) => theme.text.secondary};
    font-weight: normal;
  }
  .is-blogger{
    font-size: .8rem;
    margin-right: .3rem;
  }
`
const CommentContent = styled.section`
  margin:.8rem 0;
  font-size: 1rem;
  display: flex;
  word-break:break-all;
`
const Reply = styled.div`
    margin-left: 1rem;
    cursor: pointer;
    width:3.5rem;
    flex-shrink: 0;
`
const SendTime = styled.section`
  font-size: .7rem;
  color:${({ theme }) => theme.text.secondary};

`
const ChildrenComment = styled.section`
  background-color: ${({ theme }) => theme.codeEl};
  padding: 0 1rem;
  border-radius: 0.5rem;
  margin-top: .5rem;
`
const RerplyTo = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`
interface Props {
  children?: any,
  remark: API.IEssayRemark,
  handleReply: Function
}

const Comment: React.FC<Props> = ({ children, remark, handleReply }) => {

  return (
    <CommentWrapper>
      <UserAvatar src={remark.avatar} alt=''></UserAvatar>
      <InfoContent>
        <User>  {remark.isBlogger ? <span className='is-blogger'>博主 </span> : ''} {remark.userName}<span> {` 来自 ${remark.osName} 系统 ${remark.browserName ? "& " + remark.browserName + '内核' : ''} `}</span></User>
        <CommentContent>
          <div>
            <RerplyTo >{remark?.replyTo ? `@ ${remark?.replyTo} ` : ''}</RerplyTo>
            {remark.remark}
          </div>
          <Reply onClick={() => handleReply(remark)}>
            <Icon name='talk' ></Icon> 回复
          </Reply>
        </CommentContent >
        <SendTime>{moment(remark.createTime).format('YYYY-MM-DD HH:mm:ss')}</SendTime>
        <ChildrenComment>
          {children}
        </ChildrenComment>
      </InfoContent >
    </CommentWrapper >
  )
}

export default Comment