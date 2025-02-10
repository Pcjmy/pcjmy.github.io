import{_ as a,c as e,a as n,o as i}from"./app-Dgm3qbd6.js";const r={};function s(l,t){return i(),e("div",null,t[0]||(t[0]=[n('<h1 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环"><span>事件循环</span></a></h1><h2 id="浏览器的进程模型" tabindex="-1"><a class="header-anchor" href="#浏览器的进程模型"><span>浏览器的进程模型</span></a></h2><p><strong>进程</strong>：程序运⾏需要有它⾃⼰专属的内存空间，可以把这块内存空间简单的理解为进程。</p><p><strong>线程</strong>：操作系统能够进行运算调度的最小单位。</p><h3 id="浏览器有哪些进程和线程" tabindex="-1"><a class="header-anchor" href="#浏览器有哪些进程和线程"><span>浏览器有哪些进程和线程？</span></a></h3><p><strong>浏览器是⼀个多进程多线程的应⽤程序</strong></p><p>浏览器内部⼯作极其复杂。为了避免相互影响，为了减少连环崩溃的⼏率，当启动浏览器后，它会⾃动启动多个进程。</p><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>可以在浏览器的任务管理器中查看当前的所有进程</p></div><p>其中，最主要的进程有：</p><ol><li>浏览器进程</li></ol><p>主要负责界⾯显示、⽤户交互、⼦进程管理等。浏览器进程内部会启动多个线程处理不同的任务。</p><ol start="2"><li>⽹络进程</li></ol><p>负责加载⽹络资源。⽹络进程内部会启动多个线程来处理不同的⽹络任务。</p><ol start="3"><li>渲染进程</li></ol><p>渲染进程启动后，会开启⼀个渲染主线程，主线程负责执⾏ HTML、CSS、JS 代码。 默认情况下，浏览器会为每个标签⻚开启⼀个新的渲染进程，以保证不同的标签⻚之间不相互影响。</p>',15)]))}const p=a(r,[["render",s],["__file","shijianxunhuan.html.vue"]]),c=JSON.parse('{"path":"/blogs/JavaScript/2021/shijianxunhuan.html","title":"事件循环","lang":"en-US","frontmatter":{"title":"事件循环","date":"2021-12-12T00:00:00.000Z","tags":["JavaScript"],"categories":["JavaScript"]},"headers":[{"level":2,"title":"浏览器的进程模型","slug":"浏览器的进程模型","link":"#浏览器的进程模型","children":[{"level":3,"title":"浏览器有哪些进程和线程？","slug":"浏览器有哪些进程和线程","link":"#浏览器有哪些进程和线程","children":[]}]}],"git":{"createdTime":1708270305000,"updatedTime":1708270958000,"contributors":[{"name":"Pcjmy","email":"1716045191@qq.com","commits":2}]},"filePathRelative":"blogs/JavaScript/2021/事件循环.md"}');export{p as comp,c as data};
