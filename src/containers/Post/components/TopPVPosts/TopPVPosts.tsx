import Link from 'next/link'
import React, { useEffect } from 'react'
import SkeletonIterator from 'src/components/SkeletonIterator/SkeletonIterator'
import { flexMixin } from 'src/styled/mixins'
import styled from 'styled-components'
import SubHeader from '../SubHeader/SubHeader'
import { PosterProps } from 'src/shared/types'
import { SideWrapper } from '../TagCloud/styled'
import TopVPostsSkeleton from '../TopVPostsSkeleton/TopVPostsSkeleton'
import { postEssayList, useEssayList } from 'src/services/essay/index'
import { Icon } from 'src/components/Icon/Icon'
import moment from 'moment'
import { useList, useMap } from 'react-use'

const CardItem = styled.div`
  position: relative;
  margin-bottom: 1rem;
  border-radius: 0.6rem;
  overflow: hidden;
`
const BlurBg = styled.span<PosterProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(10px);
`

const CardContent = styled.span`
  position: relative;
  ${flexMixin('space-between')}
  padding: .9rem;
  background-color: ${({ theme }) => theme.background.blurCard};
`

const Title = styled.span`
  display: block;
  width: 14rem;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: .5rem;
  line-height: 1.25;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${({ theme }) => theme.text.header};
`



const Thumb = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.6rem;
  object-fit: cover;
`
const TopPVPosts: React.FC = () => {
  const [data, dataAction] = useMap()
  useEffect(() => {
    postEssayList({}).then(res => {
      dataAction.setAll(res.data)
    })
  }, [])
  // const [data] = useEssayList({ topPV: 5, essayState: 1, })
  return (
    <SideWrapper style={{ marginBottom: '1.5rem' }}>
      <SubHeader title='热门文章' icon='topPV'></SubHeader>
      {!data?.rows ? (
        <SkeletonIterator count={5} skeletonComponent={TopVPostsSkeleton} />
      ) : (
        data?.rows?.map((post: any) => {
          const { _id, title, coverImg, pageView, createTime } = post
          return (
            <Link href={`/post/${_id}`} key={_id}>
              <a>
                <CardItem>
                  <BlurBg imageUrl={coverImg} />
                  <CardContent>
                    <span>
                      <Title>{title}</Title>
                      {/* <Icon mr='0.8rem' name='preview'></Icon>
                      {pageView} PV */}
                      <Icon name='time' mr='0.8rem' ></Icon>

                      发布于 {moment(createTime).format('yyyy年MM月DD日')}
                    </span>
                    <Thumb alt={title} src={coverImg} />
                  </CardContent>
                </CardItem>
              </a>
            </Link>
          )
        })
      )}

    </SideWrapper>
  )
}

export default TopPVPosts