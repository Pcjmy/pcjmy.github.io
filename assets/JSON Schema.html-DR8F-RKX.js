import{_ as t,c as l,b as n,d as a,e as p,a as c,o as i,r as o}from"./app-DVxfVYSU.js";const r={},d={href:"https://json-schema.org/",target:"_blank",rel:"noopener noreferrer"};function u(m,s){const e=o("ExternalLinkIcon");return i(),l("div",null,[s[2]||(s[2]=n("h1",{id:"json-schema",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#json-schema"},[n("span",null,"JSON Schema")])],-1)),s[3]||(s[3]=n("h2",{id:"json-schema简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#json-schema简介"},[n("span",null,"JSON Schema简介")])],-1)),n("p",null,[n("a",d,[s[0]||(s[0]=a("JSON Schema")),p(e)]),s[1]||(s[1]=a(" 是一个词汇表，可以用来注释和验证 JSON 文档。"))]),s[4]||(s[4]=c(`<h2 id="json-schema定义和校验" tabindex="-1"><a class="header-anchor" href="#json-schema定义和校验"><span>JSON Schema定义和校验</span></a></h2><h3 id="ajv-json-schema-校验器" tabindex="-1"><a class="header-anchor" href="#ajv-json-schema-校验器"><span>Ajv JSON schema 校验器</span></a></h3><p>Ajv（Another JSON Schema Validator）是一个用于 JSON Schema 验证的 JavaScript 库。它允许你定义 JSON 数据的结构和约束，并验证数据是否符合这些规范。Ajv 的目标是提供一个高性能、标准兼容且易于使用的 JSON Schema 验证器。</p><h3 id="基础数据校验" tabindex="-1"><a class="header-anchor" href="#基础数据校验"><span>基础数据校验</span></a></h3><p>Ajv 获取 JSON 数据的 schema，并将其转换为非常高效的 JavaScript 代码，根据 schema 验证数据。</p><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>Ajv 将 schema 编译为函数并在所有情况下缓存它们(使用 schema 本身作为 Map 中的键)，以便下次使用相同的 schema 对象时不会再次编译。</p></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> Ajv <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ajv&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">minLength</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> ajv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ajv</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> validate <span class="token operator">=</span> ajv<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>schema<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> valid <span class="token operator">=</span> <span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>valid<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>validate<span class="token punctuation">.</span>errors<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 运行结果</span></span>
<span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    keyword: <span class="token string">&#39;minLength&#39;</span>,</span>
<span class="line">    dataPath: <span class="token string">&#39;&#39;</span>,</span>
<span class="line">    schemaPath: <span class="token string">&#39;#/minLength&#39;</span>,</span>
<span class="line">    params: <span class="token punctuation">{</span> limit: <span class="token number">10</span> <span class="token punctuation">}</span>,</span>
<span class="line">    message: <span class="token string">&#39;should NOT be shorter than 10 characters&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8))])}const v=t(r,[["render",u],["__file","JSON Schema.html.vue"]]),k=JSON.parse('{"path":"/blogs/JavaScript/2023/JSON Schema.html","title":"JSON Schema","lang":"en-US","frontmatter":{"title":"JSON Schema","date":"2023-01-25T00:00:00.000Z","tags":["JavaScript"],"categories":["JavaScript"]},"headers":[{"level":2,"title":"JSON Schema简介","slug":"json-schema简介","link":"#json-schema简介","children":[]},{"level":2,"title":"JSON Schema定义和校验","slug":"json-schema定义和校验","link":"#json-schema定义和校验","children":[{"level":3,"title":"Ajv JSON schema 校验器","slug":"ajv-json-schema-校验器","link":"#ajv-json-schema-校验器","children":[]},{"level":3,"title":"基础数据校验","slug":"基础数据校验","link":"#基础数据校验","children":[]}]}],"git":{"createdTime":1709993218000,"updatedTime":1709999166000,"contributors":[{"name":"Pcjmy","email":"1716045191@qq.com","commits":4}]},"filePathRelative":"blogs/JavaScript/2023/JSON Schema.md"}');export{v as comp,k as data};