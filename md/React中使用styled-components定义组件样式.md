# 使用styled-components定义组件样式

## 介绍

使用模版字符串和 CSS 语法，生成一个样式化组件（StyledComponent），被包裹的自定义组件。

直接绑定组件和样式，免去两者间接对应的关系。

  - 样式和组件强关联，解决痛点：
    - 难以确定样式在哪些组件中被使用，容易留下已弃用的样式代码
    - 想要确定组件上的样式内容，需要到样式文件中查找
  - 动态应用 CSS，解决痛点：
    - 针对不同状态/不同主题，需要手动编写和管理大量 classes
    - styled-components 可以动态追踪组件状态插入 styles，结合代码拆分，可以实现加载最少量的代码
  - 为样式生成唯一的 classname，解决痛点：
    - classname 重名、覆盖、拼写错误
  - 自动生成前缀

## 安装

通过npm / yarn安装
```bash
// 从 npm 安装 styled-components :
npm install --save styled-components

//从 yarn 安装 styled-components :
yarn add styled-components
```

## 基本用法

可以直接在项目组件中使用，使用 Es6 的模板字符串语法来书写，如下所示：

``` javascript
import styled from 'styled-components';

// 带样式的section
const Layout = styled.section`
  margin: 0 auto;
  width: 300px;
  text-align: center;
`;
// 带样式的h1
const Title = styled.h1`
  width: 100px;
  color: white;
  background: skyblue;
`;
render(
  <Layout>
    <Title>Hello World</Title>
  </Layout>
);

```

## 基于props传递样式

使用 styled-components 来定义组件的主题。

``` javascript
import styled from 'styled-components';
// 根据props是否用primary来设置颜色和背景颜色
  const Button = styled.button`
    background: ${props => props.primary ? 'palevioletred' : 'white'};
    color: ${props => props.primary ? 'white' : 'palevioletred'};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;
  render(
    <div>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </div>
  );
```

上述示例中如果primary属性存在，则按钮背景色会变成蓝色，边框消失，并且文字颜色变成白色.

## 样式继承
常用的组件,在特定场景下可以稍微更改其样式.当然我们可以通过 props 传递插值的方式来实现,但是对于某个只需要重载一次的样式来说这样做的成本还是有点高.
创建一个继承其它组件样式的新组件,最简单的方式就是用构造函数styled()包裹被继承的组件.下面的示例就是通过继承上一节创建的按钮从而实现一些颜色相关样式的扩展:

``` javascript

// 上一节创建的没有插值的 Button 组件
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// 一个继承 Button 的新组件, 重载了一部分样式
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);

```