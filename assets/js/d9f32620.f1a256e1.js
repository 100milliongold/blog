"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[1914],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>b});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(o),m=n,b=p["".concat(u,".").concat(m)]||p[m]||g[m]||l;return o?r.createElement(b,a(a({ref:t},s),{},{components:o})):r.createElement(b,a({ref:t},s))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<l;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2900:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const l={slug:"welcome",title:"Welcome",authors:["100milliongold"],tags:["facebook","hello","docusaurus"]},a=void 0,i={permalink:"/blog/blog/welcome",source:"@site/blog/2021-08-26-welcome/index.md",title:"Welcome",description:"Docusaurus blogging features are powered by the blog plugin.",date:"2021-08-26T00:00:00.000Z",formattedDate:"2021\ub144 8\uc6d4 26\uc77c",tags:[{label:"facebook",permalink:"/blog/blog/tags/facebook"},{label:"hello",permalink:"/blog/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/blog/tags/docusaurus"}],readingTime:.405,hasTruncateMarker:!1,authors:[{name:"100milliongold",title:"developer",url:"https://sebastienlorber.com",imageURL:"https://avatars.githubusercontent.com/u/13652711?s=400&u=0a1092b8b1170f71ae883d098f8721c12ce39e9e&v=4",key:"100milliongold"}],frontMatter:{slug:"welcome",title:"Welcome",authors:["100milliongold"],tags:["facebook","hello","docusaurus"]},prevItem:{title:"networkpolicy \uc0dd\uc131",permalink:"/blog/blog/networkpolicy-\uc0dd\uc131"},nextItem:{title:"hexo -> notion \uc73c\ub85c \ub370\uc774\ud130 \uc774\uc804\uc911 \uc785\ub2c8\ub2e4.",permalink:"/blog/blog/hexo-notion-\uc73c\ub85c-\ub370\uc774\ud130-\uc774\uc804\uc911-\uc785\ub2c8\ub2e4"}},u={authorsImageUrls:[void 0]},c=[],s={toc:c},p="wrapper";function g(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered by the ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,n.kt)("p",null,"Simply add Markdown files (or folders) to the ",(0,n.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,n.kt)("p",null,"Regular blog authors can be added to ",(0,n.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,n.kt)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,n.kt)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:o(8329).Z,width:"1500",height:"500"})),(0,n.kt)("p",null,"The blog supports tags as well!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,n.kt)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}g.isMDXComponent=!0},8329:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);