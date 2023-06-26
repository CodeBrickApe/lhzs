
# mac安装node.js并且实现node多版本自由切换

## 安装node.js

本文主要介绍了两种安装方式，官网下载 / brew安装，两种方案均有详细介绍，可以按需采用。

### 官网安装

1. 访问nodejs官网，点击选框区域稳定版，并下载https://nodejs.org/en

![](mac安装node/下载首页.png)

2. 开始安装，双击刚才下载的安装包，按默认步骤安装即可
  
![](mac安装node/安装-01.png)

![](mac安装node/安装-02.png)

![](mac安装node/安装-03.png)

![](mac安装node/安装-04.png)

3. 安装完成后，通过命令行查看node版本及npm版本

``` bash

#查看node版本
node -v

#查看npm版本
npm -v
```

![](mac安装node/安装-05.png)

### 命令行brew安装

利用Homebrew安装(简称brew,MacOSX上的软件包管理工具，能在Mac中方便的安装软件或者卸载软件)

打开终端，执行以下命令安装Homebrew：

``` bash

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

然后查看一下brew是否安装成功，如果出现版本信息，就说明安装成功，输入以下命令：

``` bash

brew -v
```

安装node.js

``` bash

brew install node
```

安装成功后，通过命令行查看node版本及npm版本

``` bash

#查看node版本
node -v

#查看npm版本
npm -v
```

## node多版本自由切换

因为一些老的项目不兼容新的node版本，有时候我们需要安装多个node,并随时自动切换不同的node版本以便进行相关项目测试。目前有多种的解决方案，我常用的就是nvm/n，在window电脑上常用nvm管理，mac电脑推荐使用n管理。

1. 首先安装n模块

``` bash

sudo npm install -g n
```

### 常用命令

1. 使用n加版本号就可以安装其他版,也可以切换使用版本

``` bash

sudo n 10.12.0
```

2. 升级node.js到最新稳定版

``` bash

sudo n stable
```

2. 升级node.js到最新版

``` bash

sudo n latest
```

3. 查看当前使用node版本

``` bash

node -v
```

4. 查看所有已安装的node版本，可以根据上下和回车选择要使用的版本

``` bash

sudo n
```

5. 删除某个版本

``` bash

sudo n rm x.x.x
```