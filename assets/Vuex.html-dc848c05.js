import{_ as n,p as a,q as s,Y as e}from"./framework-aa5c4115.js";const t={},p=e(`<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1><h2 id="vuex-简介" tabindex="-1"><a class="header-anchor" href="#vuex-简介" aria-hidden="true">#</a> Vuex 简介</h2><p>Vuex 是一个专为 Vue.js 应用程序开发的<strong>状态管理模式 + 库</strong>。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。</p><p>Vuex 创建了一个全局唯一的仓库，用来存放全局的数据。</p><p>Vuex 数据管理框架如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 用来存放数据</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在store对象中增加getters属性</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 修改state中的属性值的方法</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 存放异步操作, actions里面的方法返回一个promise对象</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 每个模块拥有自己的 state、mutation、action、getter</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuex-作用" tabindex="-1"><a class="header-anchor" href="#vuex-作用" aria-hidden="true">#</a> Vuex 作用</h2><p>在开发小型项目或者功能的时候，并不需要使用到 vuex，不是所有的数据都需要存储到 vuex 中的，当某个数据需要频繁使用的时候，当某个数据在跨越父子组件，在两个毫不相关的组件之间需要通信的时候，这些时候就可以使用 vuex 了，这样会很方便</p><h2 id="action-与-mutation" tabindex="-1"><a class="header-anchor" href="#action-与-mutation" aria-hidden="true">#</a> action 与 mutation</h2><ul><li>action 中处理异步，mutation 不可以</li><li>mutation 做原子操作</li><li>action 可以整合多个 mutation</li></ul>`,10),o=[p];function i(c,l){return a(),s("div",null,o)}const u=n(t,[["render",i],["__file","Vuex.html.vue"]]);export{u as default};
