import{_ as e,c as n,a as r,o as a}from"./app-DVxfVYSU.js";const t={};function i(p,o){return a(),n("div",null,o[0]||(o[0]=[r('<h1 id="monorepo架构" tabindex="-1"><a class="header-anchor" href="#monorepo架构"><span>Monorepo架构</span></a></h1><h2 id="什么是monorepo" tabindex="-1"><a class="header-anchor" href="#什么是monorepo"><span>什么是Monorepo</span></a></h2><p>Monorepo是一种代码组织思想，它要求我们只用一个代码仓库来管理一个大项目的所有资源、子项目。简单来说以前放在多个repo 里的代码现在就放在一个repo 就行了。</p><p>Multirepo（传统多repo项目）会将一个项目按照职责、业务模块进行拆分，然后创建不同的代码仓库进行管理。不同的团队可以专注于负责某一个代码仓库代码提交、编译、发布。</p><h2 id="monorepo的收益" tabindex="-1"><a class="header-anchor" href="#monorepo的收益"><span>Monorepo的收益</span></a></h2><ul><li><strong>工作流的一致性</strong>：由于所有的项目放在一个仓库当中，复用起来非常方便，如果有依赖的代码变动，那么用到这个依赖的项目当中会立马感知到。并且所有的项目都是使用最新的代码，不会产生其它项目版本更新不及时的情况。</li><li><strong>项目基建成本的降低</strong>：所有项目复用一套标准的工具和规范，无需切换开发环境，如果有新的项目接入，也可以直接复用已有的基建流程，比如 CI 流程、构建和发布流程。这样只需要很少的人来维护所有项目的基建，维护成本也大大减低。</li><li><strong>团队协作也更加容易</strong>：一方面大家都在一个仓库开发，能够方便地共享和复用代码，方便检索项目源码，另一方面，git commit 的历史记录也支持以功能为单位进行提交，之前对于某个功能的提交，需要改好几个仓库，提交多个 commit，现在只需要提交一次，简化了 commit 记录，方便协作。</li></ul>',6)]))}const s=e(t,[["render",i],["__file","Monorepojiagou.html.vue"]]),m=JSON.parse('{"path":"/blogs/qianduangongchenghua/Monorepojiagou.html","title":"Monorepo架构","lang":"en-US","frontmatter":{"title":"Monorepo架构","date":"2024-02-13T00:00:00.000Z","tags":["前端工程化"],"categories":["前端工程化"]},"headers":[{"level":2,"title":"什么是Monorepo","slug":"什么是monorepo","link":"#什么是monorepo","children":[]},{"level":2,"title":"Monorepo的收益","slug":"monorepo的收益","link":"#monorepo的收益","children":[]}],"git":{"createdTime":1707835643000,"updatedTime":1725981986000,"contributors":[{"name":"Pcjmy","email":"1716045191@qq.com","commits":2}]},"filePathRelative":"blogs/前端工程化/Monorepo架构.md"}');export{s as comp,m as data};