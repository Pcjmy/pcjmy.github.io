import{_ as e,p as n,q as s,Y as a}from"./framework-aa5c4115.js";const i={},l=a(`<h3 id="http-协议" tabindex="-1"><a class="header-anchor" href="#http-协议" aria-hidden="true">#</a> HTTP 协议</h3><ul><li>HTTP 是什么</li><li>HTTP 请求响应的过程</li></ul><p>HyperText Transfer Protocol 超文本传输协议</p><p>HTTP 是一个请求-响应协议</p><p>HTML、JS、CSS、图片、字体、音频、视频等等文件，都是通过 HTTP(超文本传输协议)在服务器和浏览器之间传输</p><h4 id="http-报文" tabindex="-1"><a class="header-anchor" href="#http-报文" aria-hidden="true">#</a> HTTP 报文</h4><p>1.HTTP 报文是什么</p><p>浏览器向服务器发送请求时，请求本身就是信息，叫请求报文</p><p>服务器向浏览器发送响应时传输的信息，叫响应报文</p><p>2.HTTP 报文格式</p><p>请求</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>请求头：起始行<span class="token operator">+</span>首部
请求体
<span class="token constant">GET</span> 请求，没有请求体，数据通过请求头携带
<span class="token constant">POST</span> 请求，有请求体，数据通过请求体携带
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>响应头：起始行<span class="token operator">+</span>首部
响应体
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="http-状态码" tabindex="-1"><a class="header-anchor" href="#http-状态码" aria-hidden="true">#</a> HTTP 状态码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span><span class="token constant">HTTP</span> 状态码是什么
定义服务器对请求的处理结果，是服务器返回的

<span class="token number">2.</span><span class="token constant">HTTP</span> 状态码的语义
<span class="token number">100</span><span class="token operator">~</span><span class="token number">199</span> 消息：代表请求已被接受，需要继续处理
websocket

<span class="token number">200</span><span class="token operator">~</span><span class="token number">299</span> 成功
<span class="token number">200</span>

<span class="token number">300</span><span class="token operator">~</span><span class="token number">399</span> 重定向
<span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">www.imooc.com</span><span class="token regex-delimiter">/</span></span>
<span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">www.imooc.com</span><span class="token regex-delimiter">/</span></span>

<span class="token number">301</span> Moved Permanently
<span class="token number">302</span> Move Temporarily

<span class="token number">304</span> Not Modified

<span class="token number">400</span><span class="token operator">~</span><span class="token number">499</span> 请求错误
<span class="token number">404</span> Not Found

<span class="token number">500</span><span class="token operator">~</span><span class="token number">599</span> 服务器错误
<span class="token number">500</span> Internal Server Error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HTTP 常见状态码及含义</p><ul><li>200 请求成功</li><li>301 永久重定向</li><li>302 临时重定向</li><li>403 没权限</li><li>404 表示服务器上没有找到该资源</li><li>500 服务器错误</li></ul><h4 id="http-方法" tabindex="-1"><a class="header-anchor" href="#http-方法" aria-hidden="true">#</a> HTTP 方法</h4><ul><li>常用的 HTTP 方法</li><li>HTTP 方法的语义</li><li>RESTful 接口设计</li></ul><p>1.常用的 HTTP 方法</p><p>GET、POST、PUT、DELETE</p><p>浏览器发送请求时采用的方法，和响应无关</p><p>用来定义对于资源采取什么样的操作的，有各自的语义</p><p>2.HTTP 方法的语义</p><ul><li>GET 获取数据</li><li>POST 创建数据</li><li>PUT 更新数据</li><li>DELETE 删除数据</li></ul><p><strong>增删改查</strong></p><p>这些方法虽然有各自的语义，但是并不是强制性的</p><p>3.RESTful 接口设计</p><p>一种接口设计风格，充分利用 HTTP 方法的语义</p><h4 id="get-和-post-方法的对比" tabindex="-1"><a class="header-anchor" href="#get-和-post-方法的对比" aria-hidden="true">#</a> GET 和 POST 方法的对比</h4><ul><li><p>语义</p></li><li><p>发送数据</p></li><li><p>缓存</p></li><li><p>安全性</p><p>1.语义 GET：获取数据 POST：创建数据</p><p>2.发送数据 GET 通过地址在请求头中携带数据 能携带的数据量和地址的长度有关系，一般最多就几 K</p></li></ul><p>POST 既可以通过地址在请求头中携带数据，也可以通过请求体携带数据 能携带的数据量理论上是无限的</p><p>携带少量数据，可以使用 GET 请求，大量的数据可以使用 POST 请求</p><p>3.缓存 GET 可以被缓存，POST 不会被缓存</p><p>4.安全性 ?username=alex GET 和 POST 都不安全</p><p>发送密码或其他敏感信息时不要使用 GET，主要是避免直接被他人窥屏或通过历史记录找到你的密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>get用来获取数据，post用来提交数据
get参数有长度限制<span class="token punctuation">(</span>受限于url长度，具体的数值取决于浏览器和服务器的限制，最长2048字节<span class="token punctuation">)</span>，而post无限制
get是明文传输，post是放在请求体中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="http-header" tabindex="-1"><a class="header-anchor" href="#http-header" aria-hidden="true">#</a> HTTP header</h4><p>http 协议中的 header 及含义</p><ul><li>accept：代表客户端希望接受的数据类型</li><li>accept-encoding：浏览器发给服务器，声明浏览器支持的编码类型</li><li>accept-language：表示浏览器所支持的语言类型</li><li>Cache-Control：缓存开关，no-cache 表示禁用缓存</li><li>referer：referer 的正确英语拼法是 referrer。由于早期 HTTP 规范的拼写错误，主要用于防止盗链和恶意请求</li></ul>`,41),p=[l];function r(t,c){return n(),s("div",null,p)}const o=e(i,[["render",r],["__file","HTTPxieyi.html.vue"]]);export{o as default};
