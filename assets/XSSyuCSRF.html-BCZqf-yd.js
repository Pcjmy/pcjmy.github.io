import{_ as i,c as s,a as e,o as t}from"./app-DVxfVYSU.js";const r={};function a(n,l){return t(),s("div",null,l[0]||(l[0]=[e('<h1 id="xss-与-csrf" tabindex="-1"><a class="header-anchor" href="#xss-与-csrf"><span>XSS 与 CSRF</span></a></h1><h2 id="xss" tabindex="-1"><a class="header-anchor" href="#xss"><span>XSS</span></a></h2><p>Cross-site scripting 跨站脚本攻击</p><p><strong>CSRF 与 XSS</strong></p><ul><li>XSS 侧重于脚本，千方百计的注入并执行恶意脚本</li><li>CSRF 不注入恶意脚本，侧重于请求伪造，借刀杀人，在用户不知情的情况下，借用户的名义干坏事</li></ul><p><strong>XSS 攻击危害</strong></p><ul><li>窃取 cookie</li><li>劫持流量</li><li>插入广告</li><li>置入木马</li><li>获取用户信息</li></ul><p><strong>攻击方式</strong></p><ul><li>url 参数注入</li><li>输入框注入</li></ul><p><strong>XSS 分类</strong></p><ul><li>反射型 <ul><li>浏览器提交恶意代码到服务器，服务端将恶意代码传回客户端</li></ul></li><li>存储型 <ul><li>浏览器提交恶意代码到服务端，将恶意代码存储到数据库</li></ul></li><li>DOM 型 <ul><li>恶意代码仅在客户端运行</li></ul></li></ul><p><strong>XSS 预防</strong></p><ul><li>校验</li><li>过滤</li><li>编码转义</li><li>限制 <ul><li>限制输入长度</li><li>cookie 设置成 http only</li></ul></li></ul><h2 id="csrf" tabindex="-1"><a class="header-anchor" href="#csrf"><span>CSRF</span></a></h2><p>CSRF 跨站点请求伪造(Cross—Site Request Forgery)，跟 XSS 攻击一样，存在巨大的危害性。即便是大名鼎鼎的 Gmail, 在 2007 年底也存在着 CSRF 漏洞，从而被黑客攻击而使 Gmail 的用户造成巨大的损失。你这可以这么理解 CSRF 攻击：攻击者盗用了你的身份，以你的名义发送恶意请求。CSRF 能够做的事情包括：以你名义发送邮件，发消息，盗取你的账号，甚至于购买商品，虚拟货币转账。造成的问题包括：个人隐私泄露以及财产安全。</p><p><strong>防御方法</strong></p><ul><li>检查 Referer 字段</li><li>Token 验证</li><li>加入验证码</li></ul>',17)]))}const o=i(r,[["render",a],["__file","XSSyuCSRF.html.vue"]]),c=JSON.parse('{"path":"/blogs/jisuanjiwangluo/2022/XSSyuCSRF.html","title":"XSS与CSRF","lang":"en-US","frontmatter":{"title":"XSS与CSRF","date":"2022-05-20T00:00:00.000Z","tags":["网络安全"],"categories":["计算机网络"]},"headers":[{"level":2,"title":"XSS","slug":"xss","link":"#xss","children":[]},{"level":2,"title":"CSRF","slug":"csrf","link":"#csrf","children":[]}],"git":{"createdTime":1669990800000,"updatedTime":1670927766000,"contributors":[{"name":"Pcjmy","email":"1716045191@qq.com","commits":3}]},"filePathRelative":"blogs/计算机网络/2022/XSS与CSRF.md"}');export{o as comp,c as data};