import{_ as l,c,a as n,b as t,d as i,e as a,o as s,r as p}from"./app-DVxfVYSU.js";const d={},r={href:"https://code.juejin.cn/pen/7135401702513082375",target:"_blank",rel:"noopener noreferrer"};function f(u,e){const o=p("ExternalLinkIcon");return s(),c("div",null,[e[1]||(e[1]=n(`<p>通过学习 CSS 的基础知识学会了如何设置文本的样式，以及如何设置和操作内容所在的框。但如何把盒子放在正确的位置上还需要深入了解 CSS，学习 CSS 布局的相关内容。CSS 布局种类较多，本文将主要介绍 Flex 布局。</p><p>什么是布局(Layout)?</p><ul><li>确定内容的大小和位置的算法</li><li>依据元素、容器、兄弟节点和内容等信息来计算</li></ul><h1 id="盒子模型" tabindex="-1"><a class="header-anchor" href="#盒子模型"><span>盒子模型</span></a></h1><p>CSS 盒子模型(Box Model)本质上是一个盒子，封装周围的 HTML 元素，它包括：边距(margin)，边框(border)，填充(padding)，和实际内容(content)。盒子模型允许我们在其它元素和周围元素边框之间的空间放置元素。下面是盒子模型的示意图：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2867adf5874748febb5e837f3d890633~tplv-k3u1fbpfcp-watermark.image?" alt="盒子模型.png"></p><p>属性介绍：</p><ul><li>width 指定 content box 宽度</li><li>height 指定 content box 高度</li><li>padding 指定元素四个方向的内边距</li><li>border 指定容器边框样式、粗细和颜色</li><li>margin 指定元素四个方向的外边距</li></ul><h1 id="flex-布局" tabindex="-1"><a class="header-anchor" href="#flex-布局"><span>flex 布局</span></a></h1><p>Flex 是 Flexible Box 的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性。任何一个容器都可以指定为 Flex 布局。</p><p>使用 Flex 布局需要在<code>display</code>属性中进行声明。</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Flex 容器默认存在两根轴：主轴和侧轴。主轴从左到右，侧轴从上到下。 <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8909a9aa75e44160a39c79cf9c2c6a5f~tplv-k3u1fbpfcp-watermark.image?" alt="主轴与侧轴.png"></p><p>Flex 容器主要有以下 6 个属性</p><ul><li>flex-direction</li><li>flex-wrap</li><li>flex-flow</li><li>justify-content</li><li>align-items</li><li>align-content</li></ul><p><strong>flex-direction 属性</strong></p><p><code>flex-direction</code>属性指定了内部元素是如何在 flex 容器中布局的，定义了主轴的方向，有<code>row</code>、<code>row-reverse</code>、<code>column</code>和<code>column-reverse</code>四种取值。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41939f22a38b4bcaaa88db1b60f2557b~tplv-k3u1fbpfcp-watermark.image?" alt="flex-direction.png"></p><p>下面给出 flex 布局的示例。外层<code>div</code>使用 flex 布局，且<code>flex-direction</code>的值为<code>column</code>，A、B、C 三个<code>div</code>从上到下排列。</p>`,19)),t("p",null,[t("a",r,[e[0]||(e[0]=i("代码片段")),a(o)])]),e[2]||(e[2]=n('<p><strong>flex-wrap 属性</strong></p><p><code>flex-wrap</code>属性指定 flex 元素单行显示还是多行显示，有三个可能取值。</p><ul><li><code>nowrap</code>不换行。</li><li><code>wrap</code>换行，第一行在上方。</li><li><code>wrap-reverse</code>换行，第一行在下方。</li></ul><p><strong>flex-flow 属性</strong></p><p><code>flex-flow</code>属性是<code>flex-direction</code>属性和<code>flex-wrap</code>属性的简写形式，默认值为<code>row nowrap</code>。</p><p><strong>justify-content 属性</strong></p><p><code>justify-content</code>属性定义了项目在<strong>主轴</strong>上的对齐方式。</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c2b975a2d474e918bffe738af3dd0f9~tplv-k3u1fbpfcp-watermark.image?" alt="justify-content.png"></p><p><strong>align-items 属性</strong></p><p><code>align-items</code>属性定义项目在<strong>侧轴</strong>上的对齐方式。</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/179ecafc12524bb9b180693cf4f83f73~tplv-k3u1fbpfcp-watermark.image?" alt="align-items.png"></p><p><strong>align-content 属性</strong></p><p><code>align-content</code>属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。<code>align-content</code>属性有 6 个可能取值。</p><ul><li><code>flex-start</code>与侧轴的起点对齐。</li><li><code>flex-end</code>与侧轴的终点对齐。</li><li><code>center</code>与侧轴的中点对齐。</li><li><code>space-between</code>与侧轴两端对齐，轴线之间的间隔平均分布。</li><li><code>space-around</code>每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li><li><code>stretch</code>默认值，轴线占满整个交叉轴。</li></ul>',14))])}const m=l(d,[["render",f],["__file","Flexbuju.html.vue"]]),b=JSON.parse('{"path":"/blogs/CSS/2021/Flexbuju.html","title":"Flex布局","lang":"en-US","frontmatter":{"title":"Flex布局","date":"2021-08-07T00:00:00.000Z","tags":["CSS"],"categories":["CSS"]},"headers":[],"git":{"createdTime":1669821549000,"updatedTime":1669821549000,"contributors":[{"name":"Pcjmy","email":"1716045191@qq.com","commits":1}]},"filePathRelative":"blogs/CSS/2021/Flex布局.md"}');export{m as comp,b as data};