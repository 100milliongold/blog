"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[8158],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,g=u["".concat(i,".").concat(m)]||u[m]||f[m]||a;return t?n.createElement(g,l(l({ref:r},s),{},{components:t})):n.createElement(g,l({ref:r},s))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},52401:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={title:"docker service log \ubcf4\uae30",date:new Date("2018-12-27T01:07:09.000Z"),tags:["docker","server","linux"]},l=void 0,c={permalink:"/blog/post/docker-service-log-\ubcf4\uae30",source:"@site/blog/docker-service-log-\ubcf4\uae30.mdx",title:"docker service log \ubcf4\uae30",description:"",date:"2018-12-27T01:07:09.000Z",formattedDate:"2018\ub144 12\uc6d4 27\uc77c",tags:[{label:"docker",permalink:"/blog/post/tags/docker"},{label:"server",permalink:"/blog/post/tags/server"},{label:"linux",permalink:"/blog/post/tags/linux"}],readingTime:.025,hasTruncateMarker:!1,authors:[],frontMatter:{title:"docker service log \ubcf4\uae30",date:"2018-12-27T01:07:09.000Z",tags:["docker","server","linux"]},prevItem:{title:"Spring Boot - jar\ub85c \uc11c\ube44\uc2a4 \ub4f1\ub85d\ud558\uae30",permalink:"/blog/post/Spring-Boot-jar\ub85c-\uc11c\ube44\uc2a4-\ub4f1\ub85d\ud558\uae30"},nextItem:{title:"WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! \ud574\uacb0\ud558\uae30",permalink:"/blog/post/WARNING-REMOTE-HOST-IDENTIFICATION-HAS-CHANGED-\ud574\uacb0\ud558\uae30"}},i={authorsImageUrls:[]},p=[],s={toc:p},u="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"journalctl -u docker.service\n")))}f.isMDXComponent=!0}}]);