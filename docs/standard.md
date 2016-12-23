# 前端规范

## 命名规范


#### 文件、文件夹
* 以构建包的src/webcontent/为根目录，页面模块为子目录
* 如src/webcontent/potal/signin.html, src/webcontent/potal/singup.html
* 一个html文件大于500行，要将其js, css文件独立出去，如src/webcontent/pages/home/grid/文件夹中, 
 * src/webcontent/pages/home/grid/index.html
 * src/webcontent/pages/home/grid/index.js
 * src/webcontent/pages/home/grid/index.css

#### ID & CSS

* ID 开头带上模块名
* 为js而写的css或者id要已js打头 
* [BEM](http://getbem.com/naming/)命名方式 block__element--mod

```javascript
<form id="js-form-basic">
<input id="js-form-basic__checkbox" class="js-form-basic__checkbox--selected" name="detail">
```
$("#js-form-basic")
其中，js表示该css或js是专门给js调用的，而不是做样式的。
form-basic__checkbox是BEM写法，form-basic是block的名字，checkbox是element

## JavaScript
* 每个page上非library的js(自定义的js), 无论内联或者外联都加上scope="page"


#### 语法
* 左大括号前要加上1个空格
* 控制语句的左小括号前要加上1个空格，参数和方法调用的左小括号不要加空格
* 操作符之间要有空格
* 长方法链的调用要使用缩进符(一行不超过2个方法调用)，每行开头已.开头，表示该行是一个方法调用而不是一个语句
* 小括号、中括号之间不要留空
* 每行最大不要超过100个字符。

```javascript

// 左大括号前要加上1个空格
// bad
function test(){
  console.log('test');
}

// good
function test() {
  console.log('test');
}

// bad
dog.set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});

// good
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});

// 控制语句的左小括号前要加上1个空格，参数和方法调用的左小括号不要加空格
// bad
if(isJedi) {
  fight ();
}

// good
if (isJedi) {
  fight();
}

// bad
function fight () {
  console.log ('Swooosh!');
}

// good
function fight() {
  console.log('Swooosh!');
}

// 操作符之间要有空格
// bad
const x=y+5;

// good
const x = y + 5;

// 长方法链的调用要使用缩进符(一行不超过2个方法调用)，每行开头已.开头，表示该行是一个方法调用而不是一个语句
// bad
$('#items').find('.selected').highlight().end().find('.open').updateCount();

// bad
$('#items').
  find('.selected').
    highlight().
    end().
  find('.open').
    updateCount();

// good
$('#items')
  .find('.selected')
    .highlight()
    .end()
  .find('.open')
    .updateCount();

// bad
const leds = stage.selectAll('.led').data(data).enter().append('svg:svg').classed('led', true)
    .attr('width', (radius + margin) * 2).append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led);

// good
const leds = stage.selectAll('.led')
    .data(data)
  .enter().append('svg:svg')
    .classed('led', true)
    .attr('width', (radius + margin) * 2)
  .append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led);

// good
const leds = stage.selectAll('.led').data(data);

// 小括号、中括号之间不要留空
// bad
function bar( foo ) {
  return foo;
}

// good
function bar(foo) {
  return foo;
}

// bad
if ( foo ) {
  console.log(foo);
}

// good
if (foo) {
  console.log(foo);
}

// bad
const foo = [ 1, 2, 3 ];
console.log(foo[ 0 ]);

// good
const foo = [1, 2, 3];
console.log(foo[0]);

// 100字符
// bad
const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;

// bad
$.ajax({ method: 'POST', url: 'https://airbnb.com/', data: { name: 'John' } }).done(() => console.log('Congratulations!')).fail(() => console.log('You have failed this city.'));

// good
const foo = jsonData
  && jsonData.foo
  && jsonData.foo.bar
  && jsonData.foo.bar.baz
  && jsonData.foo.bar.baz.quux
  && jsonData.foo.bar.baz.quux.xyzzy;

// good
$.ajax({
  method: 'POST',
  url: 'https://airbnb.com/',
  data: { name: 'John' }
})
  .done(() => console.log('Congratulations!'))
  .fail(() => console.log('You have failed this city.'));
```


#### jQuery
 * jQuery变量要加上$前缀
 * jQuery变量要缓存

```javascript
 // bad
const sidebar = $('.sidebar');

// good
const $sidebar = $('.sidebar');

// good
const $sidebarBtn = $('.sidebar-btn');

// bad
function setSidebar() {
  $('.sidebar').hide();

  // ...stuff...

  $('.sidebar').css({
    'background-color': 'pink'
  });
}

// good
function setSidebar() {
  const $sidebar = $('.sidebar');
  $sidebar.hide();

  // ...stuff...

  $sidebar.css({
    'background-color': 'pink'
  });
}
```

## HTML
#### 语法
* 嵌套的节点应该缩进（两个空格）。
* 在属性上，使用双引号，不要使用单引号。
* 不要忽略可选的关闭标签（例如，li 和 body）。

```
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <img src="images/company-logo.png" alt="Company">
    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
```
#### 属性顺序
HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。  

* class  
* id, name  
* data-*
* src, for, type, href
* title, alt
* aria-*, role

class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，尽量少使用。

```
<a class="..." id="..." data-toggle="modal" href="#">
  Example link
</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```

#### 减少标签数量
在编写 HTML 代码时，需要尽量避免多余的父节点。很多时候，需要通过迭代和重构来使 HTML 变得更少。 参考下面的示例:

```
<!-- Not so great -->
<span class="avatar">
  <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
```

## CSS

#### 语法
* 使用组合选择器时，保持每个独立的选择器占用一行。
* 为了代码的易读性，在每个声明的左括号前增加一个空格,声明块的右括号应该另起一行。
* 每条声明 : 后应该插入一个空格。
* 每条声明应该只占用一行来保证错误报告更加准确。
* 所有声明应该以分号结尾。
* 逗号分隔的取值，都应该在逗号之后增加一个空格。
* 不要在颜色值 rgb(), rgba(), hsl(), hsla(), 和 rect() 中增加空格
* 不要在属性取值或者颜色参数前面添加不必要的 0 (比如，使用 .5 替代 0.5 和 -.5px 替代 -0.5px)。
* 所有的十六进制值都应该使用小写字母，例如 #fff。因为小写字母有更多样的外形，在浏览文档时，他们能够更轻松的被区分开来。
* 尽可能使用短的十六进制数值，例如使用 #fff 替代 #ffffff。
* 为选择器中得属性取值添加引号，例如 input[type="text"]。 他们只在某些情况下可有可无，所以都使用引号可以增加一致性。
* 不要为 0 指明单位，比如使用 margin: 0; 而不是 margin: 0px;。

```
/* Bad CSS */
.selector, .selector-secondary, .selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}

/* Good CSS */
.selector,
.selector-secondary,
.selector[type="text"] {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0px 1px 2px #ccc, inset 0 1px 0 #fff;
}
```

#### 声明顺序
相关的属性声明应该以下面的顺序分组处理：

1. Positioning
2. Box model 盒模型
3. Typographic 排版
4. Visual 外观

Positioning 处在第一位，因为他可以使一个元素脱离正常文本流，并且覆盖盒模型相关的样式。盒模型紧跟其后，因为他决定了一个组件的大小和位置。

其他属性只在组件 内部 起作用或者不会对前面两种情况的结果产生影响，所以他们排在后面。

```
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box-model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;

  /* Typography */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* Visual */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;

  /* Misc */
  opacity: 1;
}
```
#### 属性简写
不要过度使用属性简写

```
/* Bad example */
.element {
  margin: 0 0 10px;
  background: red;
  background: url("image.jpg");
  border-radius: 3px 3px 0 0;
}

/* Good example */
.element {
  margin-bottom: 10px;
  background-color: red;
  background-image: url("image.jpg");
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
```

#### 选择器
* 使用 classes 而不是通用元素标签来优化渲染性能。
* 避免在经常出现的组件中使用一些属性选择器 (例如，[class^="..."])。浏览器性能会受到这些情况的影响。
* 减少选择器的长度，每个组合选择器选择器的条目应该尽量控制在 3 个以内。
* 只在必要的情况下使用后代选择器

```
/* Bad example */
span { ... }
.page-container #stream .stream-item .tweet .tweet-header .username { ... }
.avatar { ... }

/* Good example */
.avatar { ... }
.tweet-header .username { ... }
.tweet .avatar { ... }
```

## Reference

* [Code Giude](https://github.com/mdo/code-guide)
* [Airbnb](https://github.com/airbnb/css)
* [H5 Style Guide](http://www.w3schools.com/html/html5_syntax.asp)
