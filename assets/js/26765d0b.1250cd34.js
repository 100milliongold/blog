"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[1873],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,f=u["".concat(p,".").concat(d)]||u[d]||b[d]||a;return t?n.createElement(f,l(l({ref:r},c),{},{components:t})):n.createElement(f,l({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99245:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={title:"Hbase RegionServer \uac00 \uc2dc\uac04\ub9c8\ub2e4 \uc167\ub2e4\uc6b4\ub420\ub54c",date:new Date("2019-02-24T15:08:51.000Z"),tags:["hadoop","server","linux","hbase"]},l=void 0,i={permalink:"/blog/post/Hbase-RegionServer-\uac00-\uc2dc\uac04\ub9c8\ub2e4-\uc167\ub2e4\uc6b4\ub420\ub54c",source:"@site/blog/Hbase-RegionServer-\uac00-\uc2dc\uac04\ub9c8\ub2e4-\uc167\ub2e4\uc6b4\ub420\ub54c.mdx",title:"Hbase RegionServer \uac00 \uc2dc\uac04\ub9c8\ub2e4 \uc167\ub2e4\uc6b4\ub420\ub54c",description:"\ucc38\uace0//superuser.blog/hbase-dead-regionserver/",date:"2019-02-24T15:08:51.000Z",formattedDate:"2019\ub144 2\uc6d4 24\uc77c",tags:[{label:"hadoop",permalink:"/blog/post/tags/hadoop"},{label:"server",permalink:"/blog/post/tags/server"},{label:"linux",permalink:"/blog/post/tags/linux"},{label:"hbase",permalink:"/blog/post/tags/hbase"}],readingTime:.37,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Hbase RegionServer \uac00 \uc2dc\uac04\ub9c8\ub2e4 \uc167\ub2e4\uc6b4\ub420\ub54c",date:"2019-02-24T15:08:51.000Z",tags:["hadoop","server","linux","hbase"]},prevItem:{title:"webpack devserver proxy \uc124\uc815\ubc95",permalink:"/blog/post/webpack-devserver-proxy-\uc124\uc815\ubc95"},nextItem:{title:"AMBARI METRICS COLLECTOR \uc774\ub3d9\ubc95",permalink:"/blog/post/AMBARI-METRICS-COLLECTOR-\uc774\ub3d9\ubc95"}},p={authorsImageUrls:[]},s=[{value:"\uc6d0\uc778 : \uc2dc\uac04 \ub3d9\uae30\ud654 \ubb38\uc81c",id:"\uc6d0\uc778--\uc2dc\uac04-\ub3d9\uae30\ud654-\ubb38\uc81c",level:3},{value:"\uac01 \ub178\ub4dc\ub9c8\ub2e4 \uc2dc\uac04 \ub3d9\uae30\ud654 \ud544\uc694",id:"\uac01-\ub178\ub4dc\ub9c8\ub2e4-\uc2dc\uac04-\ub3d9\uae30\ud654-\ud544\uc694",level:3}],c={toc:s},u="wrapper";function b(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ucc38\uace0 : ",(0,o.kt)("a",{parentName:"p",href:"https://superuser.blog/hbase-dead-regionserver/"},"https://superuser.blog/hbase-dead-regionserver/")),(0,o.kt)("h3",{id:"\uc6d0\uc778--\uc2dc\uac04-\ub3d9\uae30\ud654-\ubb38\uc81c"},"\uc6d0\uc778 : \uc2dc\uac04 \ub3d9\uae30\ud654 \ubb38\uc81c"),(0,o.kt)("p",null,"\ub85c\uadf8\uc5d0 \ub2e4\uc74c\uacfc\uac19\uc740 \uc5d0\ub7ec \uba54\uc138\uc9c0 \ucd9c\ub825"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2018-02-06 22:17:06,598 INFO  [regionserver/node04/192.168.1.194:16020] regionserver.HRegionServer: STOPPED: Unhandled: org.apache.hadoop.hbase.ClockOutOfSyncException: Server node04,16020,1517973362638 has been rejected; Reported time is too far out of sync with master.  Time difference of 37329ms > max allowed of 30000ms\n")),(0,o.kt)("h3",{id:"\uac01-\ub178\ub4dc\ub9c8\ub2e4-\uc2dc\uac04-\ub3d9\uae30\ud654-\ud544\uc694"},"\uac01 \ub178\ub4dc\ub9c8\ub2e4 \uc2dc\uac04 \ub3d9\uae30\ud654 \ud544\uc694"))}b.isMDXComponent=!0}}]);