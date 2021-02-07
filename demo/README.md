# 测试支持codeblock-iframe语法 Test for codeblock-iframe syntax supporting in docsify

- 原始内容 Raw Content

```html
<iframe height="600" width="100%" scrolling="no" title="Zdog trefoil" src="https://codepen.io/desandro/embed/XWNWPve?height=600&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/desandro/pen/XWNWPve'>Zdog trefoil</a> by Dave DeSandro
  (<a href='https://codepen.io/desandro'>@desandro</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
```

- 测试内容 Write it in codeblock-iframe syntax(TOML Syntax)

````markdown
```iframe
height="600"
width="100%"
scrolling="no"
title="Zdog trefoil"
src="https://codepen.io/desandro/embed/XWNWPve?height=265&theme-id=light&default-tab=js,result"
frameborder="no"
loading="lazy"
allowtransparency="true"
allowfullscreen="true"
textContent="See the Pen <a href='https://codepen.io/desandro/pen/XWNWPve'>Zdog trefoil</a> by Dave DeSandro (<a href='https://codepen.io/desandro'>@desandro</a>) on <a href='https://codepen.io'>CodePen</a>."
```
````

- 输出预览 Preview

```iframe
height="600"
width="100%"
scrolling="no"
title="Zdog trefoil"
src="https://codepen.io/desandro/embed/XWNWPve?height=265&theme-id=light&default-tab=js,result"
frameborder="no"
loading="lazy"
allowtransparency="true"
allowfullscreen="true"
textContent="See the Pen <a href='https://codepen.io/desandro/pen/XWNWPve'>Zdog trefoil</a> by Dave DeSandro (<a href='https://codepen.io/desandro'>@desandro</a>) on <a href='https://codepen.io'>CodePen</a>."
```

- 测试过滤iframe标签 Test for filtering iframe tag

```html
<iframe height="600" width="100%" scrolling="no" title="Zdog trefoil" src="https://codepen.io/desandro/embed/XWNWPve?height=600&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/desandro/pen/XWNWPve'>Zdog trefoil</a> by Dave DeSandro
  (<a href='https://codepen.io/desandro'>@desandro</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
```

<iframe height="600" width="100%" scrolling="no" title="Zdog trefoil" src="https://codepen.io/desandro/embed/XWNWPve?height=600&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/desandro/pen/XWNWPve'>Zdog trefoil</a> by Dave DeSandro
  (<a href='https://codepen.io/desandro'>@desandro</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
