import{_ as a,c as i,a as t,o as l}from"./app-DVxfVYSU.js";const n={};function r(s,e){return l(),i("div",null,e[0]||(e[0]=[t('<h1 id="模块联邦" tabindex="-1"><a class="header-anchor" href="#模块联邦"><span>模块联邦</span></a></h1><h2 id="什么是模块联邦" tabindex="-1"><a class="header-anchor" href="#什么是模块联邦"><span>什么是模块联邦</span></a></h2><p>模块联邦是 Webpack5 新内置的一个重要功能，可以让跨应用间真正做到模块共享，webpack 5新增 Module Federation(模块联邦)功能，他可以帮助将多个独立的构建组成一个应用程序，不同的构建可以独立的开发与部署。</p><ul><li>name：应用名，全局唯一，不可冲突</li><li>library：UMD标准导出，和name保持一致即可</li><li>remotes：声明需要引用的远程应用。如上图app1配置了需要的远程应用app2</li><li>filename：远程应用时被其他应用引入的js文件名称。对应上面的remoteEntry.js</li><li>exposes：远程应用暴露出的模块名</li><li>shared：依赖的包</li></ul><p>这个方案是直接将一个应用的包应用于另一个应用，同时具备整体应用一起打包的公共依赖抽取能力。让应用具备模块化输出能力，其实开辟了一种新的应用形态，即“中心应用”，这个中心应用用于在线动态分发 Runtime 子模块，并不直接提供给用户使用，所有子应用都可以利用 Runtime方式复用主应用的 Npm 包和模块，更好的集成到主应用中。</p>',5)]))}const c=a(n,[["render",r],["__file","mokuailianbang.html.vue"]]),m=JSON.parse('{"path":"/blogs/Webpack/2024/mokuailianbang.html","title":"模块联邦","lang":"en-US","frontmatter":{"title":"模块联邦","date":"2024-09-25T00:00:00.000Z","tags":["Webpack"],"categories":["Webpack"]},"headers":[{"level":2,"title":"什么是模块联邦","slug":"什么是模块联邦","link":"#什么是模块联邦","children":[]}],"git":{"createdTime":1727278958000,"updatedTime":1727278958000,"contributors":[{"name":"Pcjmy","email":"1716045191@qq.com","commits":1}]},"filePathRelative":"blogs/Webpack/2024/模块联邦.md"}');export{c as comp,m as data};