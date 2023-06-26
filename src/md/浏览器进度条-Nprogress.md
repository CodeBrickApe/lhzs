# 浏览器进度条-Nprogress

[NProgress](https://github.com/rstacruz/nprogress)实现显示加载进度条效果，具有逼真的动画涓涓细流来说服你的用户，无页面跳转效果 ，极大提高用户体验效果.

本文主要介绍了Nprogress的基本用法和配置，以及在Vue、React等场景下的使用方法。

## 效果图

## 安装

1. npm安装

```
// 下载安装
npm install --save nprogerss 
```

```
// 引用
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
```

1. 外链引入方式

```
<script src='nprogress.js'></script>
<link rel='stylesheet' href='nprogress.css'/>
```

1. CDN引用
  
```
https://unpkg.com/nprogress@0.2.0/nprogress.js
https://unpkg.com/nprogress@0.2.0/nprogress.css
```
## 用法

1. 基本用法

```
NProgress.start();			// 开启进度条
NProgress.done();			// 关闭进度条
```

2. 高级用法

**设置百分比** ：调用 .set(n) 方法，其中n的范围0-1   

```
NProgress.set(0.0);     // Sorta same as .start()
NProgress.set(0.4);
NProgress.set(1.0);     // Sorta same as .done()
```

**增量**：调用 .inc() 方法，以随机量递增进度条，永远不会达到100%，用于每个图像负载（或类似）

```
NProgress.inc();
```

**特定值增量**：调用 .inc(n) 方法以特定值递增进度条

```
NProgress.inc(0.2);    // This will get the current status value and adds 0.2 until status is 0.994
```

**强制完成**：通过传递 true 到 .done() 方法，将显示进度条，即使它未显示（默认如果不调用 .start() 方法， .done() 方法不会做任何事）

```
NProgress.done(true);
```

**获取状态值**：使用 .status 获取状态值

## 配置

**minimum**：更改启动时使用的最小百分比（默认：0.08）

```
NProgress.configure({ minimum: 0.1 });
```

**template**：可以使用 template 更改标记，若要使进度条保持工作，请将元素 role='bar' 保留在那里，参阅默认模板以进行参考

```
NProgress.configure({
  template: "<div class='....'>...</div>"
});
```

**easing和speed**：使用 easing（a CSS easing string）和 speed（ms）调整动画（默认：ease 和 200）

```
NProgress.configure({ easing: 'ease', speed: 500 });
```

**trickle**：将其设置为 false 关闭自动递增行为（默认：true）

```
NProgress.configure({ trickle: false });
```

**trickleSpeed**：调整滴答/递增的频繁度（以ms表示）

```
NProgress.configure({ trickleSpeed: 200 });
```

**showSpinner**：将其设置为 false 来关闭 Loading Spinner（默认：true）

```
NProgress.configure({ showSpinner: false });
```

**parent**：指定此选项以更改父容器（默认：body）

```
NProgress.configure({ parent: '#container' });
```

## 定制

根据您的喜好编辑 nprogress.css 文件

## 页面切换中使用（Vue）

在路由文件中进行配置

```
// ~/router/index.js

import Vue from 'vue'
import VueRouter from 'vue-router'
//引入nprogress 进度条插件
import NProgress from 'nprogress'

Vue.use(VueRouter);

// 简单配置  进度条,可以不配置：在axios中我们不再做配置，以用来区分。
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })


export const constRouter = [
    {
        path: '/login',
        component: () => import('@/views/login/Login'),
    },
    ...
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constRouter
})

// 页面路由刚开始切换的时候
router.beforeEach(async (to,from,next) => {
	// 开启进度条
	NProgress.start();
})

// 页面路由切换完毕的时候
router.afterEach(() => {
	// 关闭进度条
    NProgress.done()
})


export default router
```

## 页面切换中使用（React）

在route中绑定nprogress

新建一个FancyRoute.js文件，在hooks中绑定nprogress的开始与结尾，这样在进行路由的切换时就可以触发到nprogress

```
import React from 'react'
import { Route } from 'react-router-dom'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css';
import '../resources/FancyRoute.css'
const FancyRoute = props => {
  React.useState(nprogress.start());
  React.useEffect(() => {
    nprogress.done();
    return () => nprogress.start();
  });
  return (
    <Route {...props} />
  );
};
export default FancyRoute
```

在对应的route.jsx文件中使用到刚编写的FancyRoute.js文件

```
import React, { Suspense, lazy } from 'react';
import {  Switch, NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import FancyRoute from './plugin/FancyRoute';
const Home = lazy(() => import('./components/main'));
const About = lazy(() => import('./components/test'));
const { Header, Content, Footer } = Layout;
const BasicRoute = () => (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><NavLink to={'/'}>nav 1</NavLink></Menu.Item>
        <Menu.Item key="2"><NavLink to={'home'}>nav 2</NavLink></Menu.Item>
        <Menu.Item key="3"><NavLink to={'/'}>nav 3</NavLink></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ marginTop: 64 }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
             {/*引用上一步创建的FancyRoute*/}
          <FancyRoute exact path="/" component={Home} />
          <FancyRoute path="/home" component={About} />
        </Switch>
      </Suspense>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);
export default BasicRoute;
```

## 接口请求中使用

在【axios请求配置】文件中:

```
import axios from 'axios'
//引入nprogress 进度条插件
import NProgress from 'nprogress'

// 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, //URL地址   环境变量文件
    timeout: 5000 ,//超时
})

// 请求拦截器
service.interceptors.request.use(
    config => {
    	// 开启进度条
		NProgress.start();
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response =>{
        // 关闭进度条
        NProgress.done()
    	return Promise.reject(response)
    },
    error => {
        // 关闭进度条
        NProgress.done()
        return Promise.reject(error)
    }
)

export default service;
```