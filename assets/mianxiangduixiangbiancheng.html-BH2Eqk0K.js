import{_ as n,c as s,a as e,o as t}from"./app-DVxfVYSU.js";const i={};function l(p,a){return t(),s("div",null,a[0]||(a[0]=[e(`<h1 id="面向对象编程" tabindex="-1"><a class="header-anchor" href="#面向对象编程"><span>面向对象编程</span></a></h1><h2 id="什么是面向对象编程" tabindex="-1"><a class="header-anchor" href="#什么是面向对象编程"><span>什么是⾯向对象编程？</span></a></h2><p>⾯向对象是⼀种编程思想，经常被拿来和⾯向过程⽐较。 其实说的简单点，⾯向过程关注的重点是动词，是分析出解决问题需要的步骤，然后编写函数实现每个步骤，最后依次调⽤函数。 ⽽⾯向对象关注的重点是主谓，是把构成问题的事物拆解为各个对象，⽽拆解出对象的⽬的也 不是为了实现某个步骤，⽽是为了描述这个事物在当前问题中的各种⾏为。</p><p>⾯向对象的特点：</p><ul><li>封装：让使⽤对象的⼈不考虑内部实现，只考虑功能使⽤ 把内部的代码保护起来，只留出⼀些 API 接⼝供⽤户使⽤</li><li>继承：就是为了代码的复⽤，从⽗类上继承出⼀些⽅法和属性，⼦类也有⾃⼰的⼀些属性</li><li>多态：是不同对象作⽤于同⼀操作产⽣不同的效果。多态的思想实际上是把&quot;想做什么&quot;和&quot;谁去做&quot;分开</li></ul><h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象"><span>对象</span></a></h2><p>对象(object)是&quot;==键值对==&quot;的集合，表示属性和值的==映射关系==</p><p>JavaScript 中，大括号表示对象</p><p>如果对象的属性键名不符合 JS 标识符命名规范，则这个键名必须用引号包裹</p><p>如果要删除某个对象的属性，需要使用==delete 操作符==</p><p>对象的方法</p><ul><li>如果某个属性值是函数，则它也被称为对象的&quot;方法&quot;</li><li>使用&quot;点语法&quot;可以调用对象的方法</li><li>方法也是函数，只不过方法是对象的&quot;函数属性&quot;，它需要用对象打点调用</li></ul><p>对象的遍历</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;属性&quot;</span> <span class="token operator">+</span> k <span class="token operator">+</span> <span class="token string">&quot;的值是&quot;</span> <span class="token operator">+</span> obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h2><p>JavaScript 实现继承共 6 种方式：</p><ul><li>原型链继承</li><li>借用构造函数继承</li><li>组合继承</li><li>原型式继承</li><li>寄生式继承</li><li>寄生组合式继承</li></ul>`,17)]))}const c=n(i,[["render",l],["__file","mianxiangduixiangbiancheng.html.vue"]]),r=JSON.parse('{"path":"/blogs/JavaScript/2022/mianxiangduixiangbiancheng.html","title":"面向对象编程","lang":"en-US","frontmatter":{"title":"面向对象编程","date":"2022-01-25T00:00:00.000Z","tags":["JavaScript"],"categories":["JavaScript"]},"headers":[{"level":2,"title":"什么是⾯向对象编程？","slug":"什么是面向对象编程","link":"#什么是面向对象编程","children":[]},{"level":2,"title":"对象","slug":"对象","link":"#对象","children":[]},{"level":2,"title":"继承","slug":"继承","link":"#继承","children":[]}],"git":{"createdTime":1669817019000,"updatedTime":1669891259000,"contributors":[{"name":"Pcjmy","email":"1716045191@qq.com","commits":3}]},"filePathRelative":"blogs/JavaScript/2022/面向对象编程.md"}');export{c as comp,r as data};