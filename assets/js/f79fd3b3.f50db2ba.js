"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[6305],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>j});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,j=m["".concat(l,".").concat(u)]||m[u]||f[u]||c;return r?a.createElement(j,o(o({ref:t},s),{},{components:r})):a.createElement(j,o({ref:t},s))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14732:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const c={title:"java.io.IOException: com.jcraft.jsch.JSchException: invalid privatekey: [B@24a1c17f jsch \uc624\ub958\ubc1c\uc0dd",date:new Date("2019-03-23T18:42:48.000Z"),tags:["java","error"]},o="\uc99d\uc0c1",i={permalink:"/blog/post/java-io-IOException-com-jcraft-jsch-JSchException-invalid-privatekey-B-24a1c17f-jsch-\uc624\ub958\ubc1c\uc0dd",source:"@site/blog/java-io-IOException-com-jcraft-jsch-JSchException-invalid-privatekey-B-24a1c17f-jsch-\uc624\ub958\ubc1c\uc0dd.mdx",title:"java.io.IOException: com.jcraft.jsch.JSchException: invalid privatekey: [B@24a1c17f jsch \uc624\ub958\ubc1c\uc0dd",description:"- jsch \uc6b4\uc601\uac04\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc740 \uc5d0\ub7ec\ubc1c\uc0dd",date:"2019-03-23T18:42:48.000Z",formattedDate:"2019\ub144 3\uc6d4 23\uc77c",tags:[{label:"java",permalink:"/blog/post/tags/java"},{label:"error",permalink:"/blog/post/tags/error"}],readingTime:.555,hasTruncateMarker:!1,authors:[],frontMatter:{title:"java.io.IOException: com.jcraft.jsch.JSchException: invalid privatekey: [B@24a1c17f jsch \uc624\ub958\ubc1c\uc0dd",date:"2019-03-23T18:42:48.000Z",tags:["java","error"]},prevItem:{title:"ssh port forwording",permalink:"/blog/post/ssh-port-forwording"},nextItem:{title:"\ub9e5\uc5d0\uc11c sshpass \uc774\uc6a9\ud558\uae30",permalink:"/blog/post/\ub9e5\uc5d0\uc11c-sshpass-\uc774\uc6a9\ud558\uae30"}},l={authorsImageUrls:[]},p=[],s={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"jsch \uc6b4\uc601\uac04\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc740 \uc5d0\ub7ec\ubc1c\uc0dd",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"Caused by: com.jcraft.jsch.JSchException: invalid privatekey: [B@24a1c17f\n   at com.jcraft.jsch.KeyPair.load(KeyPair.java:902)\n   at com.jcraft.jsch.KeyPair.load(KeyPair.java:543)\n   at com.jcraft.jsch.IdentityFile.newInstance(IdentityFile.java:40)\n   at com.jcraft.jsch.JSch.addIdentity(JSch.java:393)\n   at com.jcraft.jsch.JSch.addIdentity(JSch.java:353)\n   at com.jcabi.ssh.SSH.session(SSH.java:261)\n")))),(0,n.kt)("h1",{id:"\uc6d0\uc778"},"\uc6d0\uc778"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"jsch \uc5d0\uc11c \uc5f0\ub3d9\ub418\ub294 .ssh/id_rsa \ud30c\uc77c\ud615\uc2dd\uc774 \uc798\ubabb\ub418\uc5c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"cat ~/.ssh/id_rsa \ud30c\uc77c\uc744 \ud655\uc778\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ucd9c\ub825",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"-----BEGIN OPENSSH PRIVATE KEY-----\n........\n........\n........\n-----END OPENSSH PRIVATE KEY-----\n")))),(0,n.kt)("h1",{id:"\uc870\uce58\uc0ac\ud56d"},"\uc870\uce58\uc0ac\ud56d"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ssh-keygen \uc73c\ub85c \ud0a4\uc744 \uc0dd\uc131\ud560\ub54c \ub2e4\uc74c\uacfc \uac19\uc740 \uc635\uc165\ucd94\uac00",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ ssh-keygen -m PEM\n")))))}f.isMDXComponent=!0}}]);