# docsify-codeblock-iframe

[![version](https://img.shields.io/npm/v/docsify-codeblock-iframe.svg)](https://www.npmjs.com/package/docsify-codeblock-iframe)
[![download](https://img.shields.io/npm/dm/docsify-codeblock-iframe.svg)](https://www.npmjs.com/package/docsify-codeblock-iframe)
[![cnpmVersion](https://cnpmjs.org/badge/v/docsify-codeblock-iframe.svg)](https://cnpmjs.org/package/docsify-codeblock-iframe)
[![cnpmDownload](https://cnpmjs.org/badge/d/docsify-codeblock-iframe.svg)](https://cnpmjs.org/package/docsify-codeblock-iframe)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/docsify-codeblock-iframe/badge)](https://www.jsdelivr.com/package/npm/docsify-codeblock-iframe)

> A plugin that provides markdown extra codeblock-iframe syntax support for docsify, just for supporting iframe rendering securely!

[简体中文](./README.CN.md) | [English](./README.md)

## Try it

[Demo](https://herberthe.github.io/docsify-codeblock-iframe/demo)

## Usage

Import dependencies from CDN

```html
<script src="//cdn.jsdelivr.net/npm/codeblock-iframe@latest/dist/index.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify-codeblock-iframe@latest/dist/index.min.js"></script>
```

Following formats of `src` are supported!

```text
www.baidu.com
//www.baidu.com
http://www.baidu.com
https://www.baidu.com
```

- iframe Attributes

| Attributes   |
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

## Why To Do

To be honest, Markdown supports HTML tags natively! But here are some issues we have to face as followed:

1. If I didn't want my users insert ads in their posts via iframe but supported them using codepen to share their codes, how could I do?
2. Sometimes we try to insert iframe in some markdown editor. For immediately rendering, the browser will send a lot of GET requests to our target website when we inputting, how could we optimize? Even it causes our page breakdown when developing and using SSR

## How To Do

Code Block Renderer is easy for us to extend native markdown syntax, so we can limit the frequency of iframe rendering in this way.

## Thanks

- [iarna-toml](https://github.com/iarna/iarna-toml): Better TOML parsing and stringifying all in that familiar JSON interface.
