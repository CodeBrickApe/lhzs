## 🕹开发环境

- React：18.2.0
- Next：12.1.6

## 背景

使用SVG中的Symbol元素制作Icon图标变得越来越流行，这种技术被称为SVG Sprite。这里所说的Sprite技术，类似于CSS中的Sprite技术。图标图形整合在一起，实际呈现的时候准确显示特定图标。

在写项目时每次引入Icon都会写icon地址，如果 svg 很多的话手动处理起来就会很耗时。

#### 直接使用`next/image`

由于Next的原因，默认加载器不会优化 SVG 图像，如果您需要使用`Image`图像优化 API 提供 SVG 图像，需要进行内部设置：

```javascript
// next.config.js
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
```

`Headr.tsx`文件内使用Svg图片

```javascript

import Image from 'next/image'
import home from '/icon/home.svg'

const Header = () => {
	<Image src={home} width={25} height={25} alt="Picture of the author"></Image>
  
   )
}
export default Header
```



## 配置svg-sprite-loader、svgo-loader

svg-sprite-loader 会把你引入的 svg 塞到一个个 [symbol](https://so.csdn.net/so/search?q=symbol&spm=1001.2101.3001.7020) 中，合成一个大的 svg，最后将这个大的 svg 放入 body 中。symbol 的 id 如果不特别指定，就是你的文件名。

svgo-loader 是 svg 优化器，包含很多插件。

它可以删除和修改SVG元素，折叠内容，移动属性等等等等。

1. 安装

```bash
#npm 安装
  npm install --save-dev svg-sprite-loader svgo-loader

#yarn安装
yarn add --dev svg-sprite-loader svgo-loader
```



2. `next.config.js`中配置

```javascript
const nextConfig = {
  reactStrictMode: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, webpack },
  ) => {
    config.module.rules.push({
      test:  /\.svg$/,
      use: [
        { loader: 'svg-sprite-loader', options: {} }
      ],
    })

    return config
  },
}

module.exports = nextConfig

```

3.封装Svg组件

`src/components`内新建组件文件夹`Icon`

<img src="/Users/PDSH01LT2112006/Library/Application Support/typora-user-images/image-20220723211512184.png" alt="image-20220723211512184" style="zoom:50%;" />

- `icons`文件夹存放需要使用的`svg`文件

  - `index.ts`文件导出`svg`文件

    ```typescript
    export { default as home } from './home.svg'
    export { default as article } from './article.svg'
    ```

    

- `icon.tsx`组件

```tsx
import * as React from 'react'
import * as icons from './icons'

export type Icons = typeof icons
export type IconName = keyof Icons
export type IconSize = 'small' | 'medium' | 'large'

interface IconProps {
  name: IconName
  size?: IconSize
}

/**
 * Icon
 */
export const Icon: React.FC<IconProps> = ({ name, size = 'small' }) => {
  const { viewBox, id } = icons[name]
  console.log('name', icons[name]);
  console.log('viewBox', viewBox);
  console.log('id', id);

  return (
    <svg viewBox={viewBox}>
      <use xlinkHref={`#${id}`} href={`#${id}`} />
    </svg>

  )
}
```



- `icon.module.scss`组件样式

```scss
@use 'variables';

$size-icon: variables.$size-grid-unit * 2;

.icon {
  vertical-align: middle;
  display: inline-block;

  &--small {
    width: $size-icon;
    height: $size-icon;
  }

  &--medium {
    width: $size-icon * 1.5;
    height: $size-icon * 1.5;
  }

  &--large {
    width: $size-icon * 4;
    height: $size-icon * 4;
  }
}
```

