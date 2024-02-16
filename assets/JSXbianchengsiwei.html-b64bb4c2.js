import{_ as e,p as i,q as l,Y as n}from"./framework-aa5c4115.js";const s={},a=n(`<h1 id="jsx-编程思维" tabindex="-1"><a class="header-anchor" href="#jsx-编程思维" aria-hidden="true">#</a> JSX 编程思维</h1><p><strong>文件后缀用.js 还是.jsx</strong></p><ul><li>JSX 并不是标准的 js 语法</li><li>鼓励在 js 文件里使用标准 JS 语法，而 React 语法用在在.jsx 文件中</li><li>结论：使用.js 或.jsx 都可以</li></ul><p><strong>为什么使用 JSX</strong></p><ul><li>React 并不强制使用 JSX，也可以使用原生 JavaScript</li><li>React 认为视图的本质就是渲染逻辑与 UI 视图表现的内在统一</li><li>React 把 HTML 与渲染逻辑进行了耦合，形成了 JSX</li></ul><p><strong>JSX 的特点</strong></p><ul><li>常规的 HTML 代码都可以与 JSX 兼容</li><li>可以在 JSX 中嵌入表达式</li><li>使用 JSX 指定子元素</li><li>JSX 命名约定 <ul><li>使用 <code>camelCase</code>（小驼峰命名）来定义属性的名称</li><li>jsx自定义的属性，以data-开头</li></ul></li><li>JSX表示对象 <ul><li>JSX会被编译为React.createElement()对象</li></ul></li></ul><p><strong>JSX实例</strong></p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>function formatName(user) {
  return user.firstName + &#39; &#39; + user.lastName;
}

const user = {
  firstName: &#39;Harper&#39;,
  lastName: &#39;Perez&#39;
};

const element = (
  &lt;h1&gt;
    Hello, {formatName(user)}!
  &lt;/h1&gt;
);

ReactDOM.render(
  element,
  document.getElementById(&#39;root&#39;)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=[a];function d(t,c){return i(),l("div",null,r)}const v=e(s,[["render",d],["__file","JSXbianchengsiwei.html.vue"]]);export{v as default};
