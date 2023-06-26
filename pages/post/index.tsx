import React from 'react'
import Layout from 'src/containers/Layout/Layout'
import PostListContainer from 'src/containers/Post/PostList/PostList'
const Post: React.FC = () => {
  return (
    <Layout title='文章 ｜ '>
      <PostListContainer></PostListContainer>
    </Layout>

  )
}

export default Post