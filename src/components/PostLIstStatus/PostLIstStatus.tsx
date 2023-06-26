import { FC } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { flexMixin } from 'src/styled/mixins'

const StatusWrapper = styled.div`
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text.primary};
  text-align: center;
`

const StatusContainer = styled.p`
  ${flexMixin()}
`

const BoldSpan = styled.span`
  margin-left: 0.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.post};
`

const ResetBtn = styled.span`
display: inline-block;
cursor: pointer;
  margin-left: 1.4rem;
  padding: 0.2rem 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text.primary};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.sloganRed};
  border-radius: 2rem;
`

interface Props {
  searchTag: string
  postsLength: number | undefined
  fetchPosts: Function
}

const PostListStatus: FC<Props> = ({ searchTag, postsLength, fetchPosts }) => {
  const { push } = useRouter()
  const onReset = () => {
    console.log(1111);

    push('/post')
    fetchPosts()
  }

  const StatusItem = (msg: string, content?: string) => (
    <StatusContainer>
      {msg} {content && <BoldSpan>{content}</BoldSpan>}
      <ResetBtn onClick={onReset}>
        重置
      </ResetBtn>
    </StatusContainer>
  )

  return (
    <StatusWrapper>
      {postsLength !== 0 && searchTag && StatusItem('当前标签:', searchTag)}
      {postsLength === 0 && StatusItem('未查询到相关文章，可以移步看看其他专栏 ~')}
    </StatusWrapper>
  )
}

export default PostListStatus
