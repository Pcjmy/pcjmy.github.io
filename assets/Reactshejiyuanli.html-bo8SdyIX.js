import{_ as s,c as a,a as e,o as t}from"./app-DVxfVYSU.js";const p={};function l(c,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h1 id="react设计原理" tabindex="-1"><a class="header-anchor" href="#react设计原理"><span>React设计原理</span></a></h1><h2 id="react源码中的几种关键数据结构" tabindex="-1"><a class="header-anchor" href="#react源码中的几种关键数据结构"><span>React源码中的几种关键数据结构</span></a></h2><h3 id="element对象" tabindex="-1"><a class="header-anchor" href="#element对象"><span>element对象</span></a></h3><p>element对象是对UI的描述。</p><p>在https://babeljs.io这个网站可以将jsx转为javascript，_jsx方法就是来生成element对象的，它的执行结果才是element对象。</p><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">123</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">/*#__PURE__*/</span> 这个注释可以帮助webpack做tree shaking</span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> jsx <span class="token keyword">as</span> _jsx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react/jsx-runtime&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token comment">/*#__PURE__*/</span><span class="token function">_jsx</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token comment">/*#__PURE__*/</span><span class="token function">_jsx</span><span class="token punctuation">(</span><span class="token string">&quot;span&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fiber对象" tabindex="-1"><a class="header-anchor" href="#fiber对象"><span>fiber对象</span></a></h3><p>fiber对象是对React执行过程中元素状态的描述。</p>`,9)]))}const o=s(p,[["render",l],["__file","Reactshejiyuanli.html.vue"]]),u=JSON.parse('{"path":"/blogs/React/2023/Reactshejiyuanli.html","title":"React设计原理","lang":"en-US","frontmatter":{"title":"React设计原理","date":"2023-12-05T00:00:00.000Z","tags":["React"],"categories":["React"]},"headers":[{"level":2,"title":"React源码中的几种关键数据结构","slug":"react源码中的几种关键数据结构","link":"#react源码中的几种关键数据结构","children":[{"level":3,"title":"element对象","slug":"element对象","link":"#element对象","children":[]},{"level":3,"title":"fiber对象","slug":"fiber对象","link":"#fiber对象","children":[]}]}],"git":{"createdTime":1708180132000,"updatedTime":1708182225000,"contributors":[{"name":"Pcjmy","email":"1716045191@qq.com","commits":2}]},"filePathRelative":"blogs/React/2023/React设计原理.md"}');export{o as comp,u as data};