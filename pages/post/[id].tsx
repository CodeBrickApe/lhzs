import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from 'src/containers/Layout/Layout'
import PostDetailContainer from 'src/containers/Post/PostDetail/PostDetail'
import { getEssayFindOne } from 'src/services/essay/index'
interface PostProps {
  data: API.IFindOneEssayBody
}
const PostDetail: React.FC<PostProps> = ({ data }) => {
  return (
    <Layout title={data.post.title}>
      <PostDetailContainer data={data}></PostDetailContainer>
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps<PostProps> = async ({ params }: any) => {
  const post = await getEssayFindOne({ id: params.id, pageView: true })
  return {
    props: {
      data: post.data
    }
  }
}
export default PostDetail