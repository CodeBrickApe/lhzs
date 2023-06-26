import { Pagination } from '@mui/material'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'
import { useMap } from 'react-use'
// import DynamicEffectBg from 'src/components/DynamicEffectBg/DynamicEffect'
import ImageHeader from 'src/components/ImageHeader/ImageHeader'
import PostListStatus from 'src/components/PostLIstStatus/PostLIstStatus'
import SkeletonIterator from 'src/components/SkeletonIterator/SkeletonIterator'
import { useEssayList, useEssayTag } from 'src/services/essay/index'
import Countdown from '../components/Countdown/Countdown'
import PostCard from '../components/PostCard/PostCard'
import PostCardSkeleton from '../components/PostCardSkeleton/PostCardSkeleton'
import TopPVPosts from '../components/TopPVPosts/TopPVPosts'
const TagCloud = dynamic(() => import('../components/TagCloud/TagCloud'), { ssr: false })
const DynamicEffectBg = dynamic(() => import('src/components/DynamicEffectBg/DynamicEffect'), { ssr: false })
import { AuxiliaryContent, PostContent, PostItemContainer } from './styled'

const PostList: React.FC = () => {
  const {
    query: { tag: searchTag },
  } = useRouter()
  const [payload, payloadAction] = useMap<API.IBlogEssayPayload>({
    size: 10,
    page: 1,
    essayState: 1,
    essayTag: '',
    essayType: ''
  })
  const [data] = useEssayList(payload)

  console.log('data',data);
  
  const fetchPosts = (page = 1, essayTag?: string) => {
    let newPayload = {
      ...payload,
      page,
      essayTag
    }
    payloadAction.setAll(newPayload)
  }
  const [tagData] = useEssayTag({})

  return (
    <>
      {/* <ImageHeader title='技术 & 记录' imageUrl='images/blog.jpg'></ImageHeader> */}
      <DynamicEffectBg title='斯是陋室，惟吾德馨'></DynamicEffectBg>
      <PostContent>
        <PostItemContainer>
          {searchTag && (
            <PostListStatus
              searchTag={searchTag as string}
              postsLength={data && data.rows.length}
              fetchPosts={fetchPosts}
            />
          )}
          {
            !data ? (
              <SkeletonIterator count={5} skeletonComponent={PostCardSkeleton}></SkeletonIterator>
            ) : (
              data.rows.map((item: any) => (
                <PostCard post={item} key={item._id}></PostCard>
              ))
            )
          }

          {
            data && data.rows.length !== 0 && (
              <Pagination
                count={!data ? 0 : Math.ceil(data.total / 10)}
                color="primary"
                variant="outlined"
                page={payload.page}
                onChange={(e, val) => {
                  payloadAction.set('page', val)
                  window.scrollTo(0, 0)
                }}
              ></Pagination>
            )
          }
        </PostItemContainer>
        <AuxiliaryContent>
          <TopPVPosts></TopPVPosts>
          <Countdown></Countdown>
          <TagCloud tagData={tagData?.rows}></TagCloud>
        </AuxiliaryContent>
      </PostContent>
    </>
  )
}

export default PostList