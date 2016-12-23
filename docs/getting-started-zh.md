## 开始入门

### 环境要求
  * Mac OS X, Windows, 或者 Linux
  * [Node.js](https://nodejs.org/) v5.7+ [下载链接](https://nodejs.org/en/download/stable/)
  * `npm` v3.6+ (不了解[npm](https://docs.npmjs.com/)?)
  * 支持 React/JSX/Flow/ESlint的文本编辑器或IDE ([学习更多](./how-to-configure-text-editors-zh.md))

### 快速上手

#### 1. 获得最新的版本

你可以通过以下方式获取最新的common-fe-template模板代码，假设你的新项目名为FooApp：

```shell
$ git clone -b master --single-branch https://github.com/euler-ui/boilerplate.git FooApp
$ cd FooApp
$ rm -rf .git
```

#### 2. 运行 `npm install`
该命令将安装位于[package.json](./package.json)的运行时和开发时的项目依赖库。

#### 3. 运行 `npm start`
该命令将build项目从/src目录到/build目录。一旦初始化的build完成，他将运行Node.js服务器(node src/server.js)，然后你就可以通过以下方式访问该项目
> [http://localhost:3334/](http://localhost:3334/) — Node.js server (`src/server.js`)<br>