# React BoilerPlate - A starter boilerplate for React based web app project.


JavaScript library boilerplate, a web project template using:  
> JavaScript Library - [React](https://facebook.github.io/react/);  
> UI Library - [React Bootstrap](https://react-bootstrap.github.io/);  
> Future ECMASCript Standards - [ES6+](http://babeljs.io/docs/learn-es2015/);  
> Javascript Compiler - [Babel](http://babeljs.io/);  
> Application Architecture - [Redux](http://redux.js.org/);  
> Module Bundler - [webpack](http://webpack.github.io/docs/tutorials/getting-started/);  
> Javascript Test Runner - [Karma](https://karma-runner.github.io/0.13/index.html);  
> Test Framework - [Mocha](http://mochajs.org/);  
> Tests Assertion - [Chai](http://chaijs.com/);  
> Test spies/stubs/mocks - [Sinon](http://sinonjs.org/);  
> Text Editors Configuration - [Formatter & Linter & Snippets](./docs/how-to-configure-text-editors.md)  
> [Code Standard](./docs/standard-zh.md). 
  
### [中文文档](./README-zh.md)

### Features

### Getting Started

  * Follow the [getting started guide](./docs/getting-started.md) to download and run the project

### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /components/            # React components
│   ├── /containers/            # React containers
│   ├── /constants/             # Constants (action types etc.)
│   ├── /core/                  # Core framework and utility functions
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /reducers/              # Redux reducers
│   ├── /index.js               # Client-side startup script
│   └── /server.js              # Server-side startup script
├── /test/                      # test codes
└── /karma.conf.js              # Karma test runner configuration
└── /webpack.config.js          # configurations for client-side and server-side bundles
└── package.json                # The list of 3rd party libraries and utilities
```

### Learn More

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