import{_ as e,c as n,a,o as l}from"./app-DyHmJYok.js";const i={};function t(c,s){return l(),n("div",null,[...s[0]||(s[0]=[a(`<h1 id="jsx-编程思维" tabindex="-1"><a class="header-anchor" href="#jsx-编程思维"><span>JSX 编程思维</span></a></h1><p><strong>文件后缀用.js 还是.jsx</strong></p><ul><li>JSX 并不是标准的 js 语法</li><li>鼓励在 js 文件里使用标准 JS 语法，而 React 语法用在在.jsx 文件中</li><li>结论：使用.js 或.jsx 都可以</li></ul><p><strong>为什么使用 JSX</strong></p><ul><li>React 并不强制使用 JSX，也可以使用原生 JavaScript</li><li>React 认为视图的本质就是渲染逻辑与 UI 视图表现的内在统一</li><li>React 把 HTML 与渲染逻辑进行了耦合，形成了 JSX</li></ul><p><strong>JSX 的特点</strong></p><ul><li>常规的 HTML 代码都可以与 JSX 兼容</li><li>可以在 JSX 中嵌入表达式</li><li>使用 JSX 指定子元素</li><li>JSX 命名约定 <ul><li>使用 <code>camelCase</code>（小驼峰命名）来定义属性的名称</li><li>jsx自定义的属性，以data-开头</li></ul></li><li>JSX表示对象 <ul><li>JSX会被编译为React.createElement()对象</li></ul></li></ul><p><strong>JSX实例</strong></p><div class="language-react line-numbers-mode" data-highlighter="prismjs" data-ext="react" data-title="react"><pre class="language-react"><code><span class="line">function formatName(user) {</span>
<span class="line">  return user.firstName + &#39; &#39; + user.lastName;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const user = {</span>
<span class="line">  firstName: &#39;Harper&#39;,</span>
<span class="line">  lastName: &#39;Perez&#39;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">const element = (</span>
<span class="line">  &lt;h1&gt;</span>
<span class="line">    Hello, {formatName(user)}!</span>
<span class="line">  &lt;/h1&gt;</span>
<span class="line">);</span>
<span class="line"></span>
<span class="line">ReactDOM.render(</span>
<span class="line">  element,</span>
<span class="line">  document.getElementById(&#39;root&#39;)</span>
<span class="line">);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)])])}const d=e(i,[["render",t],["__file","JSXbianchengsiwei.html.vue"]]),p=JSON.parse('{"path":"/blogs/React/2022/JSXbianchengsiwei.html","title":"JSX编程思维","lang":"en-US","frontmatter":{"title":"JSX编程思维","date":"2022-08-12T00:00:00.000Z","tags":["React"],"categories":["React"]},"headers":[],"git":{"createdTime":1670428134000,"updatedTime":1670947108000,"contributors":[{"name":"Pcjmy","email":"1716045191@qq.com","commits":2}]},"filePathRelative":"blogs/React/2022/JSX编程思维.md"}');export{d as comp,p as data};
