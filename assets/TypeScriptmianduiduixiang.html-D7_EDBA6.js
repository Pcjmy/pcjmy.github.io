import{_ as s,c as a,a as e,o as p}from"./app-DVxfVYSU.js";const t={};function i(l,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="typescript面对对象" tabindex="-1"><a class="header-anchor" href="#typescript面对对象"><span>TypeScript面对对象</span></a></h1><h2 id="对象类型" tabindex="-1"><a class="header-anchor" href="#对象类型"><span>对象类型</span></a></h2><p>在 TypeScript 中，我们通过对象类型（object types）来描述对象。</p><p>（1）对象类型匿名</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">&quot;Hello &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>name<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）使用接口定义</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>person<span class="token operator">:</span> Person<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">&quot;Hello &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>name<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）通过类型别名</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>person<span class="token operator">:</span> Person<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">&quot;Hello &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>name<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span></span>
<span class="line">  x<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  y<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> <span class="token function-variable function">drawPoint</span> <span class="token operator">=</span> <span class="token punctuation">(</span>point<span class="token operator">:</span> Point<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token operator">:</span> point<span class="token punctuation">.</span>x<span class="token punctuation">,</span> y<span class="token operator">:</span> point<span class="token punctuation">.</span>y <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>interface和type区别</strong></p><p>1.定义类型范围不同</p><p>interface只能定义对象类型或接口当名字的函数类型 type可以定义任何类型，包括基础类型、联合类型、交叉类型、元组</p><p>2.接口可以extends一个或者多个接口或类实现一个或者多个接口，也可以继承 type，但type类型没有继承功能，但一般接口继承类和type的应用场景很少见。</p><p>3.用type交叉类型&amp;可让类型中的成员合并成一个新的type类型，但接口不能交叉合并</p><p>4.接口可合并声明量</p><p>定义两个相同名称的接口会合并声明，定义两个同名的type会出现编译错误。</p><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型"><span>泛型</span></a></h2><p>具有以下特点的数据类型叫泛型：</p><ul><li>定义时不明确使用时必须明确成某种具体数据类型的数据类型（泛型的宽泛）</li><li>编译期间进行数据类型检查的数据类型（泛型的严谨）</li></ul>`,21)]))}const o=s(t,[["render",i],["__file","TypeScriptmianduiduixiang.html.vue"]]),r=JSON.parse('{"path":"/blogs/TypeScript/2022/TypeScriptmianduiduixiang.html","title":"TypeScript面对对象","lang":"en-US","frontmatter":{"title":"TypeScript面对对象","date":"2022-10-01T00:00:00.000Z","tags":["TypeScript"],"categories":["TypeScript"]},"headers":[{"level":2,"title":"对象类型","slug":"对象类型","link":"#对象类型","children":[]},{"level":2,"title":"接口","slug":"接口","link":"#接口","children":[]},{"level":2,"title":"泛型","slug":"泛型","link":"#泛型","children":[]}],"git":{"createdTime":1675940101000,"updatedTime":1679579129000,"contributors":[{"name":"Pcjmy","email":"1716045191@qq.com","commits":3}]},"filePathRelative":"blogs/TypeScript/2022/TypeScript面对对象.md"}');export{o as comp,r as data};