(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[6103],{5203:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var a=n(7294),o=n(6010),l=n(1944),r=n(5281),i=n(9460),c=n(9058),s=n(1324),m=n(7462),u=n(5999),d=n(2244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:o,date:r,tags:c,authors:s,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return a.createElement(l.d,{title:n,description:o,keywords:u,image:d},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:r}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var v=n(794);function p(e){let{sidebar:t,children:n}=e;const{metadata:o,toc:l}=(0,i.C)(),{nextItem:r,prevItem:m,frontMatter:u}=o,{hide_table_of_contents:d,toc_min_heading_level:f,toc_max_heading_level:p}=u;return a.createElement(c.Z,{sidebar:t,toc:!d&&l.length>0?a.createElement(v.Z,{toc:l,minHeadingLevel:f,maxHeadingLevel:p}):void 0},a.createElement(s.Z,null,n),(r||m)&&a.createElement(g,{nextItem:r,prevItem:m}))}function h(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(l.FG,{className:(0,o.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage)},a.createElement(f,null),a.createElement(p,{sidebar:e.sidebar},a.createElement(t,null))))}},794:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var a=n(7462),o=n(7294),l=n(6010),r=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):a.push(o)})),a}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function m(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function u(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,o.useRef)(void 0),n=u();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:l,maxHeadingLevel:r}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let o=t;o<=n;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:r}),c=m(i,{anchorTopOffset:n.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function g(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?o.createElement("ul",{className:l?void 0:n},t.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(g,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const f=o.memo(g);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...g}=e;const v=(0,r.L)(),p=m??v.tableOfContents.minHeadingLevel,h=u??v.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>c({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:h});return d((0,o.useMemo)((()=>{if(l&&s)return{linkClassName:l,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:h}}),[l,s,p,h])),o.createElement(f,(0,a.Z)({toc:b,className:n,linkClassName:l},g))}const p={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},h="table-of-contents__link toc-highlight",b="table-of-contents__link--active";function E(e){let{className:t,...n}=e;return o.createElement("div",{className:(0,l.Z)(p.tableOfContents,"thin-scrollbar",t)},o.createElement(v,(0,a.Z)({},n,{linkClassName:h,linkActiveClassName:b})))}},4830:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(7294),o=n(5397),l=n(9460),r=n(9861),i=n(2949);function c(){const{colorMode:e}=(0,i.I)();return a.createElement(r.Z,{repo:"100milliongold/blog",repoId:"R_kgDOI86qsw",category:"Announcements",categoryId:"DIC_kwDOI86qs84CUKTa",mapping:"url",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:e,lang:"ko",loading:"lazy"})}var s=n(2389);function m(e){const{metadata:t}=(0,l.C)(),n=(0,s.Z)(),{frontMatter:r,slug:i,title:m}=t,{disableComments:u}=r;var d=!1;return n&&(d="/blog/post"===window.location.pathname),a.createElement(a.Fragment,null,!u&&!d&&a.createElement(c,null),a.createElement(o.Z,e))}},1748:(e,t,n)=>{var a={"./locale":9234,"./locale.js":9234};function o(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=l,e.exports=o,o.id=1748}}]);