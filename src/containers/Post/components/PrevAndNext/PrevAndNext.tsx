import Link from 'next/link'
import React from 'react'
import breakpoints from 'src/styled/breakpoints'
import { flexMixin } from 'src/styled/mixins'
import styled from 'styled-components'


const Wrapper = styled.section`
${flexMixin()}

@media only screen and ${breakpoints.device.laptop} {
  flex-direction: column;
  gap: 1rem;
}

a {
  display: block;
  width: 100%;
}
`

const PictureContainer = styled.div`
box-sizing: border-box;
position: relative;
margin: 2rem auto;
padding: 2rem;
height: 10rem;
color: ${({ theme }) => theme.colors.white};

@media only screen and ${breakpoints.device.laptop} {
  margin: 0;
}

picture {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.negative};
}

source,
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

&::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.sevenOpcityBlack};
}

&:hover::before {
  background: ${({ theme }) => theme.colors.threeOpcityBlack};
}
`

const Title = styled.p`
position: relative;
z-index: ${({ theme }) => theme.zIndex.overlay};
`

const Image = styled.img`
position: absolute;
width: 100%;
height: 100%;
top: 0px;
left: 0px;
z-index: -1;
`

enum ItemType {
  prev = '上一篇',
  next = '下一篇',
}

interface Props {
  prev: API.IBlogEssay[]
  next: API.IBlogEssay[]
}
const PrevAndNext: React.FC<Props> = ({ prev, next }) => {
  const PrevAndNextItem = (
    id: string,
    title: string,
    coverImg: string,
    type: ItemType,
  ) => (
    <Link href={`/post/${id}`}>
      <a >
        <PictureContainer>
          <Image src={coverImg} alt={title}></Image>
          <Title>{type} 文章</Title>
          <Title>{title}</Title>
        </PictureContainer>
      </a>
    </Link>
  )
  return (
    <Wrapper>
      {prev.length > 0 &&
        PrevAndNextItem(prev[0]?._id, prev[0]?.title, prev[0]?.coverImg, ItemType.prev)}
      {next.length > 0 &&
        PrevAndNextItem(next[0]?._id, next[0]?.title, next[0]?.coverImg, ItemType.next)}

    </Wrapper>
  )
}

export default PrevAndNext