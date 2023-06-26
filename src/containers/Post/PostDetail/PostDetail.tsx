import React, { useEffect, useReducer, useRef } from 'react'
import MetaHead from 'src/components/Head/Head'
import PostMeta from '../components/PostMeta/PostMeta'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import SyntaxHighlighter from "react-syntax-highlighter"
import tocbot from 'tocbot'

import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Content, ImageAlt, ImageGroup, Menu, PostBg, PostDetailWrapper, Poster, Summary, TableWrapper, Title } from './styled'
import PrevAndNext from '../components/PrevAndNext/PrevAndNext'
import Discussion from '../components/Discussion/Discussion'
interface Props {
  data: API.IFindOneEssayBody
}
export const setupTocbot = () => {
  console.log(tocbot);

  tocbot && tocbot.init({
    tocSelector: '.postMenu',
    contentSelector: '.postDetailContent',
    headingSelector: 'h1, h2, h3,h4',
    hasInnerContainers: true,
  })
}

const PostDetailContainer: React.FC<Props> = ({ data }) => {
  const markdownWrapperEl = useRef<HTMLDivElement>(null)
  const { post, prev_post, next_post } = data
  const { title, coverImg, pageView, createTime, updateTime, essayTagName, summary, markdown, _id } = post
  const customMarkdownComponents = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          style={atomOneDark}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {children.toString().replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children.toString()}
        </code>
      )
    },
    table({ node, inline, className, children, ...props }: any) {
      return (
        <TableWrapper>
          <table {...props}>{children}</table>
        </TableWrapper>
      )
    },
    img({ node, inline, className, children, ...props }: any) {
      const { src, alt } = props
      return (
        <ImageGroup {...props}>
          <img src={src} alt={alt} />
          <ImageAlt>{alt}</ImageAlt>
        </ImageGroup>
      )
    },
    h2({ node, inline, className, children, ...props }: any) {
      return (
        <h2 {...props} id={children ? children[0] : ''}>
          {children}
        </h2>
      )
    },
    h3({ node, inline, className, children, ...props }: any) {
      return (
        <h3 {...props} id={children ? children[0] : ''}>
          {children}
        </h3>
      )
    },
  }
  useEffect(() => {
    setupTocbot()

  }, [])
  return (
    <PostDetailWrapper>
      <MetaHead
        title={`${title} | 码砖猿`}
      ></MetaHead>
      <Menu className='postMenu'></Menu>
      <Content>
        <Poster src={coverImg} alt={title}></Poster>
        <PostBg>
          <Title>{title}</Title>
          <PostMeta pageView={pageView} createTime={createTime} updateTime={updateTime} essayTag={essayTagName}></PostMeta>
          <div ref={markdownWrapperEl}>
            <Summary>{summary}</Summary>
            <ReactMarkdown
              remarkPlugins={[gfm]}
              rehypePlugins={[rehypeRaw]}
              components={customMarkdownComponents}
              className="postDetailContent"
            >{markdown || ''}</ReactMarkdown>
          </div>
        </PostBg>
        <PrevAndNext prev={prev_post} next={next_post}></PrevAndNext>
        <Discussion essayId={_id} essayTitle={title}></Discussion>
      </Content>
    </PostDetailWrapper>
  )
}




export default PostDetailContainer