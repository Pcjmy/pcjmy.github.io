import{_ as a,p as s,q as i,s as e,R as l,t,Y as r,n as d}from"./framework-aa5c4115.js";const c={},u=r(`<h1 id="vue3-ts搭建组件库" tabindex="-1"><a class="header-anchor" href="#vue3-ts搭建组件库" aria-hidden="true">#</a> Vue3 + TS搭建组件库</h1><h2 id="自动化测试" tabindex="-1"><a class="header-anchor" href="#自动化测试" aria-hidden="true">#</a> 自动化测试</h2><p>前端功能测试的工具有很多，根据不同的需求和场景，可以选择合适的工具来进行测试。一些常用的前端功能测试的工具有：</p><ul><li>PageSpeed Insights：这是一个由Google提供的免费在线工具，可以分析网页的性能，并给出优化建议。</li><li>Lighthouse：这是一个开源的自动化工具，可以对网页进行质量评估，包括性能、可访问性、最佳实践等方面。</li><li>WebPageTest：这是一个免费的在线工具，可以对网页进行多地点、多浏览器、多设备的性能测试，并提供详细的报告和诊断。</li><li>Pingdom：这是一个付费的在线工具，可以对网站进行实时监控、性能分析、可用性检测等功能。</li><li>Sitespeed.io：这是一个开源的命令行工具，可以对网站进行性能和最佳实践分析，并生成可视化的报告和仪表盘。</li><li>Calibre：这是一个付费的在线平台，可以对网站进行持续性能监测、分析和优化，并提供警报和通知功能。</li><li>SpeedCurve：这是一个付费的在线平台，可以对网站进行用户体验和设计相关的性能测试，并提供丰富的数据和洞察力。</li><li>SpeedTracker：这是一个开源的项目，可以利用WebPageTest API来定期监测网站速度，并生成漂亮的图表和指标。</li></ul><p>您想了解哪个工具更多呢？</p><h2 id="后续计划" tabindex="-1"><a class="header-anchor" href="#后续计划" aria-hidden="true">#</a> 后续计划</h2><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 文档国际化</li></ul><h2 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>.全局注册的组件无法使用
解决办法：全局注册的组件用小写字母

<span class="token number">2</span>.textarea伪类选择器:focus不起作用
解决办法：outline: none<span class="token punctuation">;</span>

<span class="token number">3</span>.文档中textarea不显示边框
解决办法：vitepress默认将border设为0，需要为textarea设置border样式

<span class="token number">4</span>.带缓存的搜索框组件，input绑定@blur，清空按钮绑定@click，点击清空，会同时触发@blur和@click，但是@blur先执行，执行后button不显示，@click不执行
解决办法：为先执行的函数设置setTimeout<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token number">5</span>.Input组件设置过渡效果不起作用
解决办法：设置过渡需要有初始状态，为width属性设置初始值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o={href:"https://v2.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"};function p(v,h){const n=d("ExternalLinkIcon");return s(),i("div",null,[u,e("p",null,[e("a",o,[l("VuePress"),t(n)])])])}const m=a(c,[["render",p],["__file","Vue3 _ TSdajianzujianku.html.vue"]]);export{m as default};
