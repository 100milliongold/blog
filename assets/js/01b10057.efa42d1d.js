"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[9735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||b[m]||l;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const l={title:"Centos7 SELINUX disable \uc124\uc815\ud6c4 \ucee4\ub110\ud398\ub2c9 \uc99d\uc0c1",date:new Date("2018-12-20T00:47:48.000Z"),tags:["linix","Centos","troubleshooting"]},a="\uc99d\uc0c1",i={permalink:"/blog/post/Centos7-SELINUX-disable-\uc124\uc815\ud6c4-\ucee4\ub110\ud398\ub2c9-\uc99d\uc0c1",source:"@site/blog/Centos7-SELINUX-disable-\uc124\uc815\ud6c4-\ucee4\ub110\ud398\ub2c9-\uc99d\uc0c1.mdx",title:"Centos7 SELINUX disable \uc124\uc815\ud6c4 \ucee4\ub110\ud398\ub2c9 \uc99d\uc0c1",description:"Centos SELINUX \uc124\uc815\uc744 \ube44\ud65c\uc131\ud654 \ud6c4\uc5d0 \uc7ac\ubd80\ud305\uc2dc \ubd80\ud305\ud654\uba74\uc5d0\uc11c \uba48\ucd94\ub294 \ud604\uc0c1",date:"2018-12-20T00:47:48.000Z",formattedDate:"2018\ub144 12\uc6d4 20\uc77c",tags:[{label:"linix",permalink:"/blog/post/tags/linix"},{label:"Centos",permalink:"/blog/post/tags/centos"},{label:"troubleshooting",permalink:"/blog/post/tags/troubleshooting"}],readingTime:.56,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Centos7 SELINUX disable \uc124\uc815\ud6c4 \ucee4\ub110\ud398\ub2c9 \uc99d\uc0c1",date:"2018-12-20T00:47:48.000Z",tags:["linix","Centos","troubleshooting"]},prevItem:{title:"How to Disable SELinux on CentOS 7",permalink:"/blog/post/How-to-Disable-SELinux-on-CentOS-7"},nextItem:{title:"Ambari View \uc81c\uc791",permalink:"/blog/post/Ambari-View-\uc81c\uc791"}},s={authorsImageUrls:[]},p=[],u={toc:p},c="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Centos SELINUX \uc124\uc815\uc744 \ube44\ud65c\uc131\ud654 \ud6c4\uc5d0 \uc7ac\ubd80\ud305\uc2dc \ubd80\ud305\ud654\uba74\uc5d0\uc11c \uba48\ucd94\ub294 \ud604\uc0c1"),(0,o.kt)("h1",{id:"\uc6d0\uc778"},"\uc6d0\uc778"),(0,o.kt)("p",null,"   /etc/selinux/config \ud30c\uc77c\uc5d0"),(0,o.kt)("p",null,"   SELINUXTYPE=disabled \uc124\uc815\ub418\uc5b4 \uc788\uc74c"),(0,o.kt)("h1",{id:"\ud574\uacb0\ubc29\uc548"},"\ud574\uacb0\ubc29\uc548"),(0,o.kt)("p",null,"  grub \ud654\uba74\uc5d0\uc11c \ubd80\ud305 \uc6b4\uc601\uccb4\uc81c\ub97c \uc120\ud0dd\ud6c4 e \ud0a4\ub97c \ub20c\ub7ec\uc11c kernel \ubd80\ud305 \uc635\uc158\uc73c\ub85c \ub4e4\uc5b4\uac00\uc11c"),(0,o.kt)("p",null,"  linux16 / vmlinu \uac00 \uc788\ub294 \ubd80\ubd84\uc5d0 selinux = 0 \ucd94\uac00\ud560\uac83"),(0,o.kt)("p",null,"  linux16 / vmlinu - \uc0dd\ub7b5 - selinux = 0"),(0,o.kt)("p",null,"  \uc644\ub8cc\ud6c4\uc5d0 Ctrl + x \ud0a4\ub85c \ub9ac\ubd80\ud2b8"))}b.isMDXComponent=!0}}]);