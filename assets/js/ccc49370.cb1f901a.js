(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[6103],{65203:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var a=n(67294),o=n(86010),r=n(1944),l=n(35281),i=n(9460),s=n(39058),c=n(79855),m=n(87462),u=n(95999),d=n(32244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function p(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:o,date:l,tags:s,authors:c,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return a.createElement(r.d,{title:n,description:o,keywords:u,image:d},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:l}),c.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var f=n(83317);function v(e){let{sidebar:t,children:n}=e;const{metadata:o,toc:r}=(0,i.C)(),{nextItem:l,prevItem:m,frontMatter:u}=o,{hide_table_of_contents:d,toc_min_heading_level:p,toc_max_heading_level:v}=u;return a.createElement(s.Z,{sidebar:t,toc:!d&&r.length>0?a.createElement(f.Z,{toc:r,minHeadingLevel:p,maxHeadingLevel:v}):void 0},a.createElement(c.Z,null,n),(l||m)&&a.createElement(g,{nextItem:l,prevItem:m}))}function b(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,o.Z)(l.k.wrapper.blogPages,l.k.page.blogPostPage)},a.createElement(p,null),a.createElement(v,{sidebar:e.sidebar},a.createElement(t,null))))}},89111:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(67294),o=n(99714),r=n(9460),l=n(57833);function i(e){const{metadata:t}=(0,r.C)(),{frontMatter:n,slug:l,title:i}=t,{password:g}=n,[p,f]=a.useState("public"),[v,b]=a.useState(""),h=a.useRef(null);a.useEffect((()=>{}),[]),a.useEffect((()=>{if(g){if(window.sessionStorage.getItem("docusaurus-password")===g)return void f("public");{const e="/blog/post"===window.location.pathname||"/blog/second"===window.location.pathname?"none":"private";f(e)}}}),[g]);const E=a.useCallback((e=>{e.preventDefault();const{password:t}=n;t===v?(f("public"),window.sessionStorage.setItem("docusaurus-password",v),window.location.reload()):alert("\ud2c0\ub838\uc5b4 \u3142\u3145 \uc544")}),[g,v]),w=a.useCallback((e=>{const{target:{value:t}}=e;b(t)}),[]);return a.createElement(a.Fragment,null,"none"===p&&"\ube44\ubc00\uae00\uc785\ub2c8\ub2e4.","private"===p&&a.createElement(s,null,a.createElement(c,{onSubmit:E},a.createElement(m,null,a.createElement(u,{type:"password",value:v,onChange:w,ref:h}),a.createElement(d,{type:"submit"},"\ud655\uc778")))),"public"===p&&a.createElement(o.Z,e))}const s=l.ZP.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,c=l.ZP.form`
  padding: 0;
`,m=l.ZP.div`
  display: flex;
  flex-direction: row;
`,u=l.ZP.input`
  height: 2rem;
  border: 1px solid rgb(133, 133, 133);
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  padding: 0.5rem;
  &:focus-visible {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`,d=l.ZP.button`
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`},94830:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(67294),o=n(15397),r=n(9460),l=n(99861),i=n(92949);function s(){const{colorMode:e}=(0,i.I)();return a.createElement("div",{style:{marginTop:"30px"}},a.createElement(l.Z,{repo:"100milliongold/blog",repoId:"R_kgDOI86qsw",category:"Announcements",categoryId:"DIC_kwDOI86qs84CUKTa",mapping:"url",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:e,lang:"ko",loading:"lazy"}))}var c=n(72389);function m(e){const{metadata:t}=(0,r.C)(),{frontMatter:n,slug:l,title:i}=((0,c.Z)(),t),{disableComments:m,password:u}=n,[d,g]=a.useState(!1);return a.useEffect((()=>{g("/blog/post"===window.location.pathname||"/blog/second"===window.location.pathname)}),[]),a.createElement(a.Fragment,null,!u&&!m&&!d&&a.createElement(s,null),a.createElement(o.Z,e))}},83317:(e,t,n)=>{"use strict";n.d(t,{Z:()=>L});var a=n(67294),o=n(87462),r=n(86010),l=n(86668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):a.push(o)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function m(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function u(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=u();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let o=t;o<=n;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),s=m(i,{anchorTopOffset:n.current}),c=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function g(e){let{toc:t,className:n,linkClassName:o,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(g,{isChild:!0,toc:e.children,className:n,linkClassName:o}))))):null}const p=a.memo(g);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:u,...g}=e;const f=(0,l.L)(),v=m??f.tableOfContents.minHeadingLevel,b=u??f.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,a.useMemo)((()=>s({toc:i(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:v,maxHeadingLevel:b});return d((0,a.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:b}}),[r,c,v,b])),a.createElement(p,(0,o.Z)({toc:h,className:n,linkClassName:r},g))}const v={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},b="table-of-contents__link toc-highlight",h="table-of-contents__link--active";function E(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,r.Z)(v.tableOfContents,"thin-scrollbar",t)},a.createElement(f,(0,o.Z)({},n,{linkClassName:b,linkActiveClassName:h})))}var w=n(9460);function L(e){const{metadata:t}=(0,w.C)(),{frontMatter:n,slug:o,title:r}=t,{password:l}=n,[i,s]=a.useState(!0);return a.useEffect((()=>{if(l){if(window.sessionStorage.getItem("docusaurus-password")===l)return void s(!0);s(!1)}}),[l]),a.createElement(a.Fragment,null,i&&a.createElement(E,e))}},11748:(e,t,n)=>{var a={"./locale":89234,"./locale.js":89234};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=11748}}]);