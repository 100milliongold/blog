"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[761],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,b=u["".concat(i,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"setState() \uc81c\uc5b4",date:new Date("2019-07-18T17:37:08.000Z"),tags:["react.js","front-end"]},l=void 0,c={permalink:"/blog/blog/setState-\uc81c\uc5b4",source:"@site/blog/setState-\uc81c\uc5b4.mdx",title:"setState() \uc81c\uc5b4",description:"react.js \uc744 \uc774\uc6a9\ud558\ub2e4 \ubcf4\uba74 \uc0c1\ud0dc\ubcc0\uacbd\uc744 \uc704\ud558\uc5ec setState() \uc744 \uc790\uc8fc \uc0ac\uc6a9\ud558\uac8c \ub41c\ub2e4.",date:"2019-07-18T17:37:08.000Z",formattedDate:"2019\ub144 7\uc6d4 18\uc77c",tags:[{label:"react.js",permalink:"/blog/blog/tags/react-js"},{label:"front-end",permalink:"/blog/blog/tags/front-end"}],readingTime:.52,hasTruncateMarker:!1,authors:[],frontMatter:{title:"setState() \uc81c\uc5b4",date:"2019-07-18T17:37:08.000Z",tags:["react.js","front-end"]},prevItem:{title:"java \ub79c\ub364 \ubb38\uc790\uc5f4 \uc0dd\uc131",permalink:"/blog/blog/java-\ub79c\ub364-\ubb38\uc790\uc5f4-\uc0dd\uc131"},nextItem:{title:"componentDidUpdate() \ub0b4\ubd80\uc5d0 setstate() \uc0ac\uc6a9\uc5ec\ubd80",permalink:"/blog/blog/componentDidUpdate-\ub0b4\ubd80\uc5d0-setstate-\uc0ac\uc6a9\uc5ec\ubd80"}},i={authorsImageUrls:[]},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"react.js \uc744 \uc774\uc6a9\ud558\ub2e4 \ubcf4\uba74 \uc0c1\ud0dc\ubcc0\uacbd\uc744 \uc704\ud558\uc5ec setState() \uc744 \uc790\uc8fc \uc0ac\uc6a9\ud558\uac8c \ub41c\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"\n\ud558\uc9c0\ub9cc setState() \uba54\uc11c\ub4dc\ub294 \ube44\ub3d9\uae30 \ud615\uc2dd\uc774\uae30 \ub54c\ubb38\uc5d0 \uc21c\uc11c\ub97c \uc81c\uc5b4\ud558\uae30 \ud798\ub4e4\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"\n\ub9cc\uc57d setState() \uc744 \uc0ac\uc6a9\ud6c4\uc5d0 \ubcc4\ub3c4\uc758 \uba54\uc11c\ub4dc\ub97c \uc2e4\ud589\ud560\ub824\ub3c4 \ud560\ub54c \ub2e4\uc74c\ucc98\ub7fc \uc774\uc6a9\ud558\uba74 \ub41c\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc608\uc2dc",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"this.setState({\n    setLoading: true,\n}, ()=>{\n    setTimeout(this.setState({ setLoading: false, }), 1000);\n})\n")))))}f.isMDXComponent=!0}}]);