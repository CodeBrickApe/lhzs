## 问答

<details>
  <summary>webpack优化手段</summary>

  <details>

  <summary> 1. exclude、include配置来转译更少的文件  </summary>

exclude 的优先级高于 include，在 include 和 exclude 中使用绝对路径数组，尽量避免 exclude，更倾向于使用 include。  
``` javascript
//webpack.config.js
const path = require('path');
module.exports = {
    //...
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: ['babel-loader'],
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
}
```
</details>

 <details>

  <summary> 1. exclude、include配置来转译更少的文件  </summary>


  </details>

2. cache-loader缓存编译结果
3. happypack多核构建，把任务分给多个子进程并发执行
4. thread-loader把loader放置在单独的worker池中进行
5. HardSourceWebpackPlugin提供中间缓存，节省二次编译构建时间
6. DllPlugin和DLLReferencePlugin实现拆分bundles，将不会频繁更新的第三方库（如：react、react-dom等）单独打包
7.  optimization.splitChunks抽离公共代码
8.  webpack-bundle-analyzer分析包体积
</details>

<details>
  <summary>什么是tinper</summary>
`tinper`是开源前端技术平台。
</details>