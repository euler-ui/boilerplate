# Common FE 模板 - 基于React的项目的一个starter boilerplate.


该模板包含:
> JavaScript 类库 - [React](https://facebook.github.io/react/);  
> UI 类库 - [React Bootstrap](https://react-bootstrap.github.io/);  
> ES6 - [ES6+](http://babeljs.io/docs/learn-es2015/);  
> Javascript 编译器 - [Babel](http://babeljs.io/);  
> Application Architecture - [Redux](http://redux.js.org/);  
> Module Bundler - [webpack](http://webpack.github.io/docs/tutorials/getting-started/);  
> Javascript Test Runner - [Karma](https://karma-runner.github.io/0.13/index.html);  
> Test Framework - [Mocha](http://mochajs.org/);  
> Tests Assertion - [Chai](http://chaijs.com/);  
> Test spies/stubs/mocks - [Sinon](http://sinonjs.org/);  
> Text Editors Configuration - [Formatter & Linter & Snippets](./docs/how-to-configure-text-editors.md)  
> [Code Standard](./docs/standard-zh.md). 


### 特性
### [英文版](README.md)

### 开始入门

  * 按照 [开始入门手册](./docs/getting-started-zh.md) 来下载和运行项目

### Directory Layout

```
.
├── /build/                     # webpack打包后的文件
├── /node_modules/              # node类库
├── /src/                       # 源代码
│   ├── /actions/               # Redux Actions
│   ├── /components/            # React展示(Presentantional)组件
│   ├── /containers/            # React容器(Container)组件
│   ├── /constants/             # 常量 (action 类型等)
│   ├── /core/                  # Core framework and utility functions
│   ├── /public/                # 静态资源文件
│   ├── /reducers/              # Redux reducers
│   ├── /index.js               # 客服端startup脚本
│   └── /server.js              # 服务端startup脚本
├── /test/                      # 测试代码
└── /karma.conf.js              # Karma test runner配置
└── /webpack.config.js          # webpack打包配置
└── package.json                # 第三方类库及Node脚本
```


### 学习更多

  * [Getting Started with React.js](http://facebook.github.io/react/)
  * [Redux Intro](http://redux.js.org/)
  * [Getting Started with React Bootstarp](https://react-bootstrap.github.io/getting-started.html)
  * [Getting Started with Webpack](https://webpack.github.io/docs/tutorials/getting-started/)
  * [Learn ES6](https://babeljs.io/docs/learn-es6/)
  * [ES6 Features](https://github.com/lukehoban/es6features#readme)
  * [React How to by Peter Hunt](https://github.com/petehunt/react-howto)
  * [Webpack How to by Peter Hunt](https://github.com/petehunt/webpack-howto)
  * [React.js Questions on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
  * [The Future of React](https://github.com/reactjs/react-future)