# docsify-codeblock-iframe

[![version](https://img.shields.io/npm/v/docsify-codeblock-iframe.svg)](https://www.npmjs.com/package/docsify-codeblock-iframe)
[![download](https://img.shields.io/npm/dm/docsify-codeblock-iframe.svg)](https://www.npmjs.com/package/docsify-codeblock-iframe)
[![cnpmVersion](https://cnpmjs.org/badge/v/docsify-codeblock-iframe.svg)](https://cnpmjs.org/package/docsify-codeblock-iframe)
[![cnpmDownload](https://cnpmjs.org/badge/d/docsify-codeblock-iframe.svg)](https://cnpmjs.org/package/docsify-codeblock-iframe)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/docsify-codeblock-iframe/badge)](https://www.jsdelivr.com/package/npm/docsify-codeblock-iframe)

> 一个通过markdown扩展语法为docsify提供更加安全进行iframe渲染的插件

[简体中文](./README.CN.md) | [English](./README.md)

## 体验一下

[Demo](https://herberthe.github.io/docsify-codeblock-iframe/demo)

## 使用方法

插入script标签引用

```html
<script src="//cdn.jsdelivr.net/npm/codeblock-iframe@latest/dist/index.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify-codeblock-iframe@latest/dist/index.min.js"></script>
```

`src`符合下面的格式才会被支持

```text
www.baidu.com
//www.baidu.com
http://www.baidu.com
https://www.baidu.com
```

- iframe属性

| 属性名       |
| ------------ |
| src          |
| height       |
| width        |
| align        |
| frameborder  |
| longdesc     |
| marginheight |
| marginwidth  |
| name         |
| sandbox      |
| scrolling    |
| seamless     |
| srcdoc       |
| textContent  |

## 为什么要写这个库

讲道理, Markdown原生就支持HTML! 但是下面场景我们会遇到一些问题:

1. 如果我不想让我的用户通过iframe给我们的网站插入广告, 但是我们支持他们用codepen来分享自己的代码, 咋办?
2. 有时候我们想在一些markdown编辑器中插入iframe。为了即时渲染, 浏览器会在我们输入的时候发送大量的GET请求给我们的目标网站, 我们如何去做优化？甚至于当我们开发的时候开启SSR渲染页面, 可能会导致页面崩溃

## 怎么实现

代码块渲染对我们拓展markdown原生语法非常简单, 所以我们可以通过上面的策略来限制iframe渲染的频率

## 感谢

- [iarna-toml](https://github.com/iarna/iarna-toml): Better TOML parsing and stringifying all in that familiar JSON interface.
