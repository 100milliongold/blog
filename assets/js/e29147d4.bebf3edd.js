"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[1369],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>k});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),u=o,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||l;return t?n.createElement(k,a(a({ref:r},p),{},{components:t})):n.createElement(k,a({ref:r},p))}));function k(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=u;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7955:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const l={title:"docker remote port open (docker \uc6d0\uaca9 API \ud65c\uc131\ud654)",date:new Date("2019-02-24T15:15:21.000Z"),tags:["docker","server","linux"]},a=void 0,i={permalink:"/blog/blog/docker-remote-port-open-docker-\uc6d0\uaca9-API-\ud65c\uc131\ud654",source:"@site/blog/docker-remote-port-open-docker-\uc6d0\uaca9-API-\ud65c\uc131\ud654.mdx",title:"docker remote port open (docker \uc6d0\uaca9 API \ud65c\uc131\ud654)",description:"\uacbd\uace0 : Docker \uc5d0\uc11c remote port open \ud560 \uacbd\uc6b0 \ubcc4\ub3c4\uc758 \uc778\uc99d\uc808\ucc28 \uc5c6\uc774 restful api \uc744 \uc0ac\uc6a9\ud558\ubbc0\ub85c",date:"2019-02-24T15:15:21.000Z",formattedDate:"2019\ub144 2\uc6d4 24\uc77c",tags:[{label:"docker",permalink:"/blog/blog/tags/docker"},{label:"server",permalink:"/blog/blog/tags/server"},{label:"linux",permalink:"/blog/blog/tags/linux"}],readingTime:.725,hasTruncateMarker:!1,authors:[],frontMatter:{title:"docker remote port open (docker \uc6d0\uaca9 API \ud65c\uc131\ud654)",date:"2019-02-24T15:15:21.000Z",tags:["docker","server","linux"]},prevItem:{title:"PlayOnLinux is unable to find 32bits OpenGL libraries",permalink:"/blog/blog/PlayOnLinux-is-unable-to-find-32bits-OpenGL-libraries"},nextItem:{title:"webpack devserver proxy \uc124\uc815\ubc95",permalink:"/blog/blog/webpack-devserver-proxy-\uc124\uc815\ubc95"}},c={authorsImageUrls:[]},s=[{value:"1. /lib/systemd/system/docker.service \ub0b4\uc6a9 \uc218\uc815",id:"1-libsystemdsystemdockerservice-\ub0b4\uc6a9-\uc218\uc815",level:2},{value:"2. /etc/default/docker \ub0b4\uc6a9 \uc218\uc815",id:"2-etcdefaultdocker-\ub0b4\uc6a9-\uc218\uc815",level:2},{value:"3. docker \ub9ac\ub85c\ub4dc \ubc0f \uc7ac\uc2dc\uc791",id:"3-docker-\ub9ac\ub85c\ub4dc-\ubc0f-\uc7ac\uc2dc\uc791",level:2},{value:"4. \ud14c\uc2a4\ud2b8",id:"4-\ud14c\uc2a4\ud2b8",level:2}],p={toc:s},d="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uacbd\uace0 : Docker \uc5d0\uc11c remote port open \ud560 \uacbd\uc6b0 \ubcc4\ub3c4\uc758 \uc778\uc99d\uc808\ucc28 \uc5c6\uc774 restful api \uc744 \uc0ac\uc6a9\ud558\ubbc0\ub85c\n\ubcf4\uc548\uc5d0 \ucde8\uc57d\ud569\ub2c8\ub2e4. \ud574\ub2f9 \uc791\uc5c5\uc73c\ub85c \ubc1c\uc0dd\ud558\ub294 \uc0ac\ud56d\uc740 \uad8c\uc7a5\ud558\uc9c0 \uc54a\uc73c\uba70 \ubc1c\uc0dd\ud55c \uc0ac\ud56d\uc5d0 \ub300\ud558\uc5ec \ucc45\uc784\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://blog.brian.jp/docker,/docker/swarm,/netsec/2017/10/31/free-servers-with-docker-swarm.html"},"http://blog.brian.jp/docker,/docker/swarm,/netsec/2017/10/31/free-servers-with-docker-swarm.html")),(0,o.kt)("h1",{id:"docker-remote-port-open-docker-\uc6d0\uaca9-api-\ud65c\uc131\ud654"},"docker remote port open (docker \uc6d0\uaca9 API \ud65c\uc131\ud654)"),(0,o.kt)("h2",{id:"1-libsystemdsystemdockerservice-\ub0b4\uc6a9-\uc218\uc815"},"1. /lib/systemd/system/docker.service \ub0b4\uc6a9 \uc218\uc815"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Service]\nEnvironmentFile=/etc/default/docker\nExecStart=/usr/bin/dockerd -H fd:// $DOCKER_OPTS\n")),(0,o.kt)("h2",{id:"2-etcdefaultdocker-\ub0b4\uc6a9-\uc218\uc815"},"2. /etc/default/docker \ub0b4\uc6a9 \uc218\uc815"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'DOCKER_OPTS="--dns 8.8.8.8 --dns 8.8.4.4 -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock"\n')),(0,o.kt)("h2",{id:"3-docker-\ub9ac\ub85c\ub4dc-\ubc0f-\uc7ac\uc2dc\uc791"},"3. docker \ub9ac\ub85c\ub4dc \ubc0f \uc7ac\uc2dc\uc791"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl daemon-reload\nservice docker restart\n")),(0,o.kt)("h2",{id:"4-\ud14c\uc2a4\ud2b8"},"4. \ud14c\uc2a4\ud2b8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://localhost:2375/version\n\n{"Platform":{"Name":"Docker Engine - Community"},"Components":[{"Name":"Engine","Version":"18.09.2","Details":{"ApiVersion":"1.39","Arch":"amd64","BuildTime":"2019-02-10T03:42:13.000000000+00:00","Experimental":"false","GitCommit":"6247962","GoVersion":"go1.10.6","KernelVersion":"4.15.0-45-generic","MinAPIVersion":"1.12","Os":"linux"}}],"Version":"18.09.2","ApiVersion":"1.39","MinAPIVersion":"1.12","GitCommit":"6247962","GoVersion":"go1.10.6","Os":"linux","Arch":"amd64","KernelVersion":"4.15.0-45-generic","BuildTime":"2019-02-10T03:42:13.000000000+00:00"}\n')))}m.isMDXComponent=!0}}]);