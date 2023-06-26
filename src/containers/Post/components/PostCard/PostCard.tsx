import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { Icon } from 'src/components/Icon/Icon'
import LazyLoadImage from 'src/components/LazyLoadImage/LazyLoadImage'
import { Meta, MetaItem, PostCardWrapper, PosterAnchor, ReadMoreSVG, ReleasedAt, Summary, SummaryWrapper, Title } from './styled'

const PostCard: React.FC<{ post: API.IBlogEssay }> = (props) => {
  const { _id, coverImg, createTime, title, pageView, essayTagName,summary } = props.post
  return (
    <PostCardWrapper>
      <Link href={`/post/${_id}`}>
        <PosterAnchor>
          <LazyLoadImage src={coverImg || ''}></LazyLoadImage>
        </PosterAnchor>
      </Link>
      <SummaryWrapper>
        <ReleasedAt>
          <Icon name='time' mr='0.8rem' ></Icon>
          发布于 {moment(createTime).format('yyyy年MM月DD日')}
        </ReleasedAt>
        <Link href={`/post/${_id}`}>
          <a>
            <Title>{title}</Title>
          </a>
        </Link>
        <Meta>
          <MetaItem>
            <Icon mr='0.8rem' name='preview'></Icon>
            {pageView} PV
          </MetaItem>
          {/* <MetaItem>
            <Icon mr='0.8rem' name='like'></Icon>
            {pageView} Like
          </MetaItem> */}
          <MetaItem>
            <Icon mr='0.8rem' name='tag'></Icon>
            {essayTagName?.join(' . ')}
          </MetaItem>
        </Meta>
        <Summary>{ summary }</Summary>
        <Link href={`/post/${_id}`}>
          <a>
            <ReadMoreSVG>
              <Icon name='more'></Icon>
            </ReadMoreSVG>
          </a>
        </Link>
      </SummaryWrapper>
    </PostCardWrapper>
  )
}

export default PostCard