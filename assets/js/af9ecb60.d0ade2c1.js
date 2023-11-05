"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[7962],{49621:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=l(85893),t=l(11151);const r={title:"PlayOnLinux is unable to find 32bits OpenGL libraries",date:new Date("2019-03-06T00:25:23.000Z"),tags:["linux","ubuntu","server"]},i="PlayOnLinux \uc2e4\ud589\uc2dc 'PlayOnLinux is unable to find 32bits OpenGL libraries' \uba54\uc138\uc9c0 \ubc1c\uc0dd",a={permalink:"/blog/post/PlayOnLinux-is-unable-to-find-32bits-OpenGL-libraries",source:"@site/blog/PlayOnLinux-is-unable-to-find-32bits-OpenGL-libraries.mdx",title:"PlayOnLinux is unable to find 32bits OpenGL libraries",description:"\uc99d\uc0c1",date:"2019-03-06T00:25:23.000Z",formattedDate:"2019\ub144 3\uc6d4 6\uc77c",tags:[{label:"linux",permalink:"/blog/post/tags/linux"},{label:"ubuntu",permalink:"/blog/post/tags/ubuntu"},{label:"server",permalink:"/blog/post/tags/server"}],readingTime:.6,hasTruncateMarker:!1,authors:[],frontMatter:{title:"PlayOnLinux is unable to find 32bits OpenGL libraries",date:"2019-03-06T00:25:23.000Z",tags:["linux","ubuntu","server"]},unlisted:!1,prevItem:{title:"ubuntu jupyter-notekook \uc124\uce58",permalink:"/blog/post/ubuntu-jupyter-notekook-\uc124\uce58"},nextItem:{title:"docker remote port open (docker \uc6d0\uaca9 API \ud65c\uc131\ud654)",permalink:"/blog/post/docker-remote-port-open-docker-\uc6d0\uaca9-API-\ud65c\uc131\ud654"}},o={authorsImageUrls:[]},c=[{value:"\uc99d\uc0c1",id:"\uc99d\uc0c1",level:2},{value:"\uc6d0\uc778",id:"\uc6d0\uc778",level:2},{value:"\ud574\uacb0\ubc29\uc548",id:"\ud574\uacb0\ubc29\uc548",level:2}];function d(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\uc99d\uc0c1",children:"\uc99d\uc0c1"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["PlayOnLinux \uc2e4\ud589\uc2dc \ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc138\uc9c0\uac00 \ucd9c\ub825\uc774 \ub41c\ub2e4.\n",(0,s.jsx)(n.img,{alt:"test",src:l(3710).Z+"",width:"372",height:"158"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\uc6d0\uc778",children:"\uc6d0\uc778"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"sudo apt autoremove \uc744 \uc2e4\ud589\ud558\uc5ec 32bits OpenGL libraries \uac00 \uc0ad\uc81c (\uc758\uc874\uc131\ubb38\uc81c)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\ud574\uacb0\ubc29\uc548",children:"\ud574\uacb0\ubc29\uc548"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\uc800\uc7a5\uc18c \ucd94\uac00"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"dpkg --add-architecture i386\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\uae30\uc874\uc5d0 \uc124\uce58\ub41c \ub77c\uc774\ube0c\ub7ec\ub9ac \uc81c\uac70"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo apt-get purge fglrx*\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"xorg.conf \uc81c\uac70"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo rm /etc/X11/xorg.conf\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"\ud328\ud0a4\uc9c0 \uc7ac\uc124\uce58"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo apt-get install --reinstall xserver-xorg-core libgl1-mesa-glx:i386 libgl1-mesa-dri:i386 libgl1-mesa-glx:amd64 libgl1-mesa-dri:amd64\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"xorg \uc7ac\uc124\uc815"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo dpkg-reconfigure xserver-xorg\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"\uc7ac\ubd80\ud305"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3710:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/error-c63389552a516cc0ec142f2a32d6ba6a.png"},11151:(e,n,l)=>{l.d(n,{Z:()=>a,a:()=>i});var s=l(67294);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);