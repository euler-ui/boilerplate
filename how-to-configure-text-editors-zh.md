## 配置React.js的文本编辑器和开发环境 

> 为了让你喜欢的文本编辑器或IDE可以更好的使用React.js/ES6+/JSX, 这里有一些提示信息和小窍门。

### SublimeText

1. 安装SublimeText 3[下载链接](https://www.sublimetext.com/3)
2. 安装SublimeText packages  
最简单的是使用 [Package Control](https://packagecontrol.io/) 然后输入 "Package Control: Install Package" (Ctrl+Shift+P)  
2.1 安装[Package Control](https://packagecontrol.io/installation)  
2.2 安装Packages  
    * [Babel](https://packagecontrol.io/packages/Babel)
    * [Sublimelinter](http://www.sublimelinter.com/en/latest/)
    * [SublimeLinter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)
    * [SublimeLinter-contrib-stylelint](https://packagecontrol.io/packages/SublimeLinter-contrib-stylelint)
    * [Babel Snippets](https://packagecontrol.io/packages/Babel Snippets)


给特定的文件格式设置Babel语法：

* 打开特定格式的文件，如.js文件,
* 选择 `View` 菜单，
* 然后 `Syntax` `->` `Open all with current extension as...` `->` `Babel` `->` `JavaScript (Babel)`.
* 重复该步骤给其他的文件格式 (如: .js， .jsx等等).

安装本地的npm packages
```
npm install eslint@latest
npm install babel-eslint@latest
npm install eslint-plugin-react
npm install stylelint
```
You may need to restart sublime text for changes to take effect.
*你可能需要重启sublime text来使安装生效*

### Atom

安装 atom packages

* [linter](https://atom.io/packages/linter)
* [linter-eslint](https://atom.io/packages/linter-eslint)
* [linter-stylelint](https://atom.io/packages/linter-stylelint)
* [react](https://atom.io/packages/react)

```shell
apm install linter linter-eslint react linter-stylelint
```

安装本地的npm packages

* [eslint](https://www.npmjs.com/package/eslint)
* [babel-eslint](https://www.npmjs.com/package/babel-eslint)
* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
* [stylelint](https://www.npmjs.com/package/stylelint)

```shell
npm install --save-dev eslint babel-eslint eslint-plugin-react stylelint
```

*你可能需要重启atom来使安装生效*

