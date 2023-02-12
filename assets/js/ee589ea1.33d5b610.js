"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[5552],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={title:"Docker \uc774\ubbf8\uc9c0 \uc800\uc7a5 \uacbd\ub85c \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95",date:new Date("2018-12-13T00:38:30.000Z"),tags:["docker","server","linux"]},l=void 0,c={permalink:"/blog/blog/Docker-\uc774\ubbf8\uc9c0-\uc800\uc7a5-\uacbd\ub85c-\ubcc0\uacbd\ud558\ub294-\ubc29\ubc95",source:"@site/blog/Docker-\uc774\ubbf8\uc9c0-\uc800\uc7a5-\uacbd\ub85c-\ubcc0\uacbd\ud558\ub294-\ubc29\ubc95.mdx",title:"Docker \uc774\ubbf8\uc9c0 \uc800\uc7a5 \uacbd\ub85c \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95",description:"1. /etc/default/docker \ud30c\uc77c\ub0b4\uc6a9\uc744 \ub2e4\uc74c\uacfc \uac19\uc774 \uc218\uc815",date:"2018-12-13T00:38:30.000Z",formattedDate:"2018\ub144 12\uc6d4 13\uc77c",tags:[{label:"docker",permalink:"/blog/blog/tags/docker"},{label:"server",permalink:"/blog/blog/tags/server"},{label:"linux",permalink:"/blog/blog/tags/linux"}],readingTime:1.04,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Docker \uc774\ubbf8\uc9c0 \uc800\uc7a5 \uacbd\ub85c \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95",date:"2018-12-13T00:38:30.000Z",tags:["docker","server","linux"]},prevItem:{title:"react.js + spring boot",permalink:"/blog/blog/react-js-spring-boot"},nextItem:{title:"elementary OS \uc5d0\uc11c \uc774\ud074\ub9bd\uc2a4 \uba48\ucda4\ud604\uc0c1",permalink:"/blog/blog/elementary-OS\uc5d0\uc11c-\uc774\ud074\ub9bd\uc2a4-\uba48\ucda4\ud604\uc0c1"}},s={authorsImageUrls:[]},i=[],p={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"/etc/default/docker \ud30c\uc77c\ub0b4\uc6a9\uc744 \ub2e4\uc74c\uacfc \uac19\uc774 \uc218\uc815")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'DOCKER_OPTS="--dns 8.8.8.8 -g <YOUR_DIR>"\n')),(0,o.kt)("p",null,"\uc608\uc2dc)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# Docker Upstart and SysVinit configuration file\n\n#\n# THIS FILE DOES NOT APPLY TO SYSTEMD\n#\n#   Please see the documentation for "systemd drop-ins":\n#   https://docs.docker.com/engine/admin/systemd/\n#\n\n# Customize location of Docker binary (especially for development testing).\n#DOCKERD="/usr/local/bin/dockerd"\n\n# Use DOCKER_OPTS to modify the daemon startup options.\nDOCKER_OPTS="--dns 8.8.8.8 --dns 8.8.4.4 -g /mnt"\n\n# If you need Docker to use an HTTP proxy, it can also be specified here.\n#export http_proxy="http://127.0.0.1:3128/"\n\n# This is also a handy place to tweak where Docker\'s temporary files go.\n#export DOCKER_TMPDIR="/mnt/bigdrive/docker-tmp"\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"/lib/systemd/system/docker.service \ud30c\uc77c\ub0b4\uc6a9\uc744 \ub2e4\uc74c\uacfc \uac19\uc774 \uc218\uc815")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"EnvironmentFile=/etc/default/docker\nExecStart=/usr/bin/dockerd -H unix:// $DOCKER_OPTS\n")),(0,o.kt)("p",null,"\uc608\uc2dc)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[Service]\nType=notify\n# the default is not to use systemd for cgroups because the delegate issues still\n# exists and systemd currently does not support the cgroup feature set required\n# for containers run by docker\n#ExecStart=/usr/bin/dockerd -H unix://\nEnvironmentFile=/etc/default/docker\nExecStart=/usr/bin/dockerd -H unix:// $DOCKER_OPTS\nExecReload=/bin/kill -s HUP $MAINPID\nTimeoutSec=0\nRestartSec=2\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"docker \uc11c\ube44\uc2a4 \ub9ac\ub85c\ub529 \ubc0f \uc7ac\uc2dc\uc791")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"service docker stop\nsudo systemctl daemon-reload\nservice docker start\n")))}d.isMDXComponent=!0}}]);