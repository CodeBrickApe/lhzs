`react-markdown`是一个[React](http://reactjs.org/)组件，可以将Markdown文本转换为相应的HTML代码。它建立在[remark](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fremarkjs%2Fremark) 上，它是一个 Markdown 预处理器。

## React-markdown安装

```bash
npm install react-markdown
# 或
yarn add react-markdown
```

## 使用react-markdown

```tsx
import React from 'react'
import ReactMarkdown from 'react-markdown'
export default function MarkdownToHtml(){
  return(
    <ReactMarkdown># 这是标题<actMarkdown>
  )
}
```

## 配置react-markdown

react-markdown提供了许多插件，可以用来增强库的功能。

### [remark-gfm](https://www.npmjs.com/package/remark-gfm)

扩展markdown使用，配置好后即可使用表格、删除线、任务列表、引用等操作。

- 安装

```bash
npm install remark-gfm --save
# 或
yarn add remark-gfm 
```

- 使用

```tsx
import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
export default function Markdown(){
  return(
    <ReactMarkdown
      	remarkPlugins={[gfm]}
      >{**React-Markdown**现在支持 ~~删除线~~}<actMarkdown>
  )
}
```



### [rehype-raw](https://www.npmjs.com/package/rehype-raw)

### 在markdown中书写html，且被编译运行

- 安装

```bash
npm install rehype-raw --save
# 或
yarn add rehype-raw
```



- 使用

```tsx
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
export default function Markdown(){
  return(
    <ReactMarkdown
      	rehypePlugins={[rehypeRaw]}
      >{<input/>}<actMarkdown>
  )
}
```

### [raw-loader](https://www.npmjs.com/package/raw-loader)

静态资源加载器，设置 webpack 支持.md 文件，设置好之后，就可以直接引入.md 文件做为 source 属性

- 安装

```bash
npm install -D raw-loader
yarn add -D raw-loader
```

- 配置webpack

```javascript
rules: [
      {
        test: /\.md$/,
        use: "raw-loader"
      },
  ...
```

- 使用

```tsx
import apiMd from "../md/api.md";
import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function Markdown(){
  return(
    <ReactMarkdown
      	 source={apiMd}
      ><actMarkdown>
  )
}
```

### [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter)

该组件可以实现代码块的彩色，components中间的部分主要是针对输入的代码块语言匹配相应的代码高亮，如果非匹配成功则直接使用code形式展示。

- 安装

在ts中使用还需要安装

```bash
npm install --save-dev @types/react-syntax-highlighter
```



```bash
npm install react-syntax-highlighter --save 
# 或
yarn add react-syntax-highlighter  

```

- 使用

```typescript
import React from 'react'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
export default function Markdown(){
  const customMarkdownComponents = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          style={dark}
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
    }
  }
  return(
    <ReactMarkdown
      	 children={markdown}
				 components={customMarkdownComponents}
      ><actMarkdown>
  )
}
```

## 使用tocbot.js为文章加上目录

- 安装

```bash
npm install tocbot --save 
# 或
yarn add tocbot 
```

- 使用

```tsx
tocbot.init({
            {#添加到哪里#}
            tocSelector: '.tocContainer',
            {#针对那个id标签#}
            contentSelector: '.article-content',
            {#滚动跟随#}
            positionFixedClass: 'is-position-fixed',
            positionFixedSelector: '.aside-article-catalog',
            {#// 需要解析的标题#}
            headingSelector: 'h1, h2, h3, h4',
        });
```



