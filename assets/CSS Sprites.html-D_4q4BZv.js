import{_ as i,c as r,a as l,b as e,d as a,e as p,o as S,r as n}from"./app-DVxfVYSU.js";const c={},o={href:"https://www.toptal.com/developers/css/sprite-generator",target:"_blank",rel:"noopener noreferrer"};function h(d,s){const t=n("ExternalLinkIcon");return S(),r("div",null,[s[1]||(s[1]=l('<h1 id="css-sprites" tabindex="-1"><a class="header-anchor" href="#css-sprites"><span>CSS Sprites</span></a></h1><h2 id="css-sprites-简介" tabindex="-1"><a class="header-anchor" href="#css-sprites-简介"><span>CSS Sprites 简介</span></a></h2><p>CSS Sprites : CSS 精灵，CSS 图片整合技术，CSS 雪碧</p><p>定义 ∶ 将导航背景图片，按钮背景图片等有规则的合并成一张背景图，即将多张图片合为一张整图，然后用 background-position 来实现背景图片的定位技术。</p><h2 id="为什么需要-css-sprites" tabindex="-1"><a class="header-anchor" href="#为什么需要-css-sprites"><span>为什么需要 CSS Sprites</span></a></h2><ul><li>减少了 HTTP 请求的次数，减轻服务器的负载</li><li>提高网页加载速度，提升网站性能</li><li>css Sprites 并不是一门新技术，目前它已经在网页开发中发展得较为成熟</li></ul><h2 id="css-sprites-缺点" tabindex="-1"><a class="header-anchor" href="#css-sprites-缺点"><span>CSS Sprites 缺点</span></a></h2><ul><li>在开发时需要通过 photoshop(PS)或其他工具测量计算每一个背景单元的精确位置。</li><li>在图片合并的时候，你要把多张图片有序的合理的合并成一张图片，你需要考虑当前盒子会不会漏出其他的背景图，要留好只够的空间，防止板块内不会出现不必要的背景，如果留空间或拼合位置不合适，在布局时容易出现背景出现拼合相邻图片，干扰图片的情况。</li><li>维护比较麻烦，如果页面背景有少许改动（更换某个图标），一般就要改这张合并的图片。无需改的地方最好不要动，这样避免改动更多的 css，如果在原来的地方放不下，最好在图片上增加图片不要删除原来的图片，这样图片的字节就增加了，因为每次的图片改动都得往这个图片删除或添加内容，显得稍微繁琐，而且需要重新计算图片的位置。所以一旦需要更改背景图的话，轻易不要改变其他图片的位置，原位能放下就在原位改，放不下就在下面添加。</li><li>由于图片的位置需要固定为某个绝对数值，这就失去了诸如 center 之类的灵活性。</li></ul><h2 id="css-sprites-图片整合原则" tabindex="-1"><a class="header-anchor" href="#css-sprites-图片整合原则"><span>CSS Sprites 图片整合原则</span></a></h2><ul><li>边切图边整合，定位时避免使用 bottom,right 等，用具体的数值，为了避免当你的宽度或高度上扩展 sprites 图时出现位置的错误。</li><li>将小图标预留足够的空间，因为使用这些图标元素通常会有大量的内容而且可能需要扩展的间距，以至于其它的图片可能会意外出现在本区域内。一般的情况下，会将这些小图标整合到文件的最右侧。</li><li>单张整合好的 sprite 图片在 100KB 以内。</li><li>按分类整合图片。</li><li>为了方便计算尺寸，一般情况会将 sprites 图的坐标计算成整数倍。</li></ul>',10)),e("p",null,[e("a",o,[s[0]||(s[0]=a("CSS Sprites 生成工具")),p(t)])])])}const m=i(c,[["render",h],["__file","CSS Sprites.html.vue"]]),u=JSON.parse('{"path":"/blogs/CSS/2022/CSS Sprites.html","title":"CSS Sprites","lang":"en-US","frontmatter":{"title":"CSS Sprites","date":"2022-02-12T00:00:00.000Z","tags":["CSS"],"categories":["CSS"]},"headers":[{"level":2,"title":"CSS Sprites 简介","slug":"css-sprites-简介","link":"#css-sprites-简介","children":[]},{"level":2,"title":"为什么需要 CSS Sprites","slug":"为什么需要-css-sprites","link":"#为什么需要-css-sprites","children":[]},{"level":2,"title":"CSS Sprites 缺点","slug":"css-sprites-缺点","link":"#css-sprites-缺点","children":[]},{"level":2,"title":"CSS Sprites 图片整合原则","slug":"css-sprites-图片整合原则","link":"#css-sprites-图片整合原则","children":[]}],"git":{"createdTime":1670335224000,"updatedTime":1670335224000,"contributors":[{"name":"Pcjmy","email":"1716045191@qq.com","commits":1}]},"filePathRelative":"blogs/CSS/2022/CSS Sprites.md"}');export{m as comp,u as data};