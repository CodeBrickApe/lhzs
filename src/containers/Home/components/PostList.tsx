import React, { useState } from 'react'
import { useMap } from 'react-use'
import InfiniteScroll from 'src/components/InfiniteScroll/InfiniteScroll'
import SkeletonIterator from 'src/components/SkeletonIterator/SkeletonIterator'
import PostCard from 'src/containers/Post/components/PostCard/PostCard'
import PostCardSkeleton from 'src/containers/Post/components/PostCardSkeleton/PostCardSkeleton'
import useSWR from 'swr'
import { Status } from '../styled'
import SubTitle from './SubTitle'
import request from '../../../utils/request'
interface List {
  posts: API.IBlogEssay[]
}
const PostList: React.FC = () => {

  const [payload, payloadAction] = useMap({
    essayState: 1,
    page: 1,
    size: 10,
    essayTag: '',
    essayType: ''
  })
  // const [data, { mutate, isValidating }] = useBlogEssayList(payload)
  const [data, setData] = useState<List>({ posts: [] })
  const [hasMore, setHasMore] = useState(true)

  const { mutate, isValidating } = useSWR(
    [`/blog/essay/list`, { ...payload }],
    (key, options) =>
      request.post<API.IResponseData<API.IBlogEssayBody>>(key, options)
        .then((res) => {
          const { total, rows } = res.data
          if (!(payload.page === 1 && data.posts.length > 0)) {
            if (Math.ceil(total / 10) === payload.page) {
              setHasMore(false)
            }
            payloadAction.set('page', payload.page++)
            setData({ posts: data.posts.concat(rows) })
          }
        })
  );

  const fetchPosts = () => {
    if (isValidating) return
    const newPayload = {
      ...payload,
      page: 2
    }
    payloadAction.setAll(newPayload)

    mutate()
  }
  return (
    <InfiniteScroll
      hasMoreData={hasMore}
      isLoading={isValidating}
      onBottomHit={fetchPosts}
      loadOnMount
    >
      <SubTitle icon={'new'} title="The Latest!"></SubTitle>
      {data?.posts.length === 0 ? (
        <SkeletonIterator count={3} skeletonComponent={PostCardSkeleton}></SkeletonIterator>
      ) : (
        data?.posts.map((post: API.IBlogEssay) => (
          <PostCard post={post} key={post._id}></PostCard>
        ))
      )}
      <Status>
        {
          // eslint-disable-next-line no-nested-ternary
          data?.posts.length > 0 && isValidating
            ? '正在加载中...'
            : hasMore
              ? ''
              : '没有更多了...'
        }
      </Status>
    </InfiniteScroll>
  )
}

export default PostList