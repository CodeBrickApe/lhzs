import moment from 'moment'
import React from 'react'
import styled from 'styled-components'
import Tag from '../Tag/Tag'
const MetaWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
`
const Statistics = styled.span`
  margin-right: 1.2rem;
`
const CreatedAt = styled.time`
  position: relative;
  margin-right: 1.2rem;

  &:hover::before {
    position: absolute;
    content: '';
    top: 0.6rem;
    left: 5rem;
    width: 0;
    height: 0;
    border: 0.6rem solid transparent;
    border-bottom-color: ${({ theme }) => theme.background.tooltip};
  }

  &:hover::after {
    position: absolute;
    content: attr(data-last-modified-date);
    top: 1.8rem;
    left: -1.3rem;
    padding: 0.2rem;
    min-width: 15rem;
    text-align: center;
    color: ${({ theme }) => theme.text.tooltip};
    background: ${({ theme }) => theme.background.tooltip};
    border-radius: 0.4rem;
    z-index: ${({ theme }) => theme.zIndex.fixed};
  }
`
interface Props {
  updateTime?: string,
  createTime?: string,
  pageView?: number,
  essayTag?: string[]
}
const PostMeta: React.FC<Props> = ({
  updateTime,
  createTime,
  pageView,
  essayTag
}) => {
  return (
    <MetaWrapper>
      <CreatedAt data-last-modified-date={`最后一次编辑于 ${moment(updateTime).format('YYYY年MM月DD日')}`}>
        发布于 {moment(createTime).format('YYYY年MM月DD日')}
      </CreatedAt>
      <Statistics>{pageView} PV</Statistics>
      {
        essayTag?.map(tag => {
          return <Tag key={tag} tag={tag}></Tag>
        })
      }
    </MetaWrapper>
  )
}

export default PostMeta