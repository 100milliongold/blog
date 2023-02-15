"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[9222],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),b=a,f=u["".concat(p,".").concat(b)]||u[b]||m[b]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},90166:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"AMBARI METRICS COLLECTOR \uc774\ub3d9\ubc95",date:new Date("2019-02-24T15:05:58.000Z"),tags:["ambari","hadoop","server","linux"]},l="1. \uae30\uc874\uc5d0 \uc124\uce58\ub41c METRICS_COLLECTOR \uc81c\uac70",i={permalink:"/blog/post/AMBARI-METRICS-COLLECTOR-\uc774\ub3d9\ubc95",source:"@site/blog/AMBARI-METRICS-COLLECTOR-\uc774\ub3d9\ubc95.mdx",title:"AMBARI METRICS COLLECTOR \uc774\ub3d9\ubc95",description:"",date:"2019-02-24T15:05:58.000Z",formattedDate:"2019\ub144 2\uc6d4 24\uc77c",tags:[{label:"ambari",permalink:"/blog/post/tags/ambari"},{label:"hadoop",permalink:"/blog/post/tags/hadoop"},{label:"server",permalink:"/blog/post/tags/server"},{label:"linux",permalink:"/blog/post/tags/linux"}],readingTime:.175,hasTruncateMarker:!1,authors:[],frontMatter:{title:"AMBARI METRICS COLLECTOR \uc774\ub3d9\ubc95",date:"2019-02-24T15:05:58.000Z",tags:["ambari","hadoop","server","linux"]},prevItem:{title:"Hbase RegionServer \uac00 \uc2dc\uac04\ub9c8\ub2e4 \uc167\ub2e4\uc6b4\ub420\ub54c",permalink:"/blog/post/Hbase-RegionServer-\uac00-\uc2dc\uac04\ub9c8\ub2e4-\uc167\ub2e4\uc6b4\ub420\ub54c"},nextItem:{title:"yarn \uce90\uc26c \uc9c0\uc6b0\uae30",permalink:"/blog/post/yarn-\uce90\uc26c-\uc9c0\uc6b0\uae30"}},p={authorsImageUrls:[]},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -u admin:admin -H "X-Requested-By:ambari" - i -X DELETE http://192.168.1.191:8080/api/v1/clusters/supercom_test/hosts/node04/host_components/METRICS_COLLECTOR\n')),(0,a.kt)("h1",{id:"2-\uc0c8\ub85c\uc6b4-\ud638\uc2a4\ud2b8\uc5d0-metrics_collector-\uc124\uce58"},"2. \uc0c8\ub85c\uc6b4 \ud638\uc2a4\ud2b8\uc5d0 METRICS_COLLECTOR \uc124\uce58"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -u admin:admin -H "X-Requested-By:ambari" -i -X POST http://192.168.1.191:8080/api/v1/clusters/supercom_test/hosts/node02/host_components/METRICS_COLLECTOR\n')))}m.isMDXComponent=!0}}]);