"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[5875],{27018:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(85893),r=t(11151);const o={title:"freebsd \uc5d0\uc11c gui \ud658\uacbd \uc14b\ud305\ud558\uae30",date:new Date("2019-03-10T08:46:53.000Z"),tags:["server","freebsd","gnome"]},l="freebsd \uc5d0\uc11c gui \ud658\uacbd \uc14b\ud305\ud558\uae30 (\uadf8\ub188\uc124\uce58)",a={permalink:"/blog/post/freebsd-\uc5d0\uc11c-gui-\ud658\uacbd-\uc14b\ud305\ud558\uae30",source:"@site/blog/freebsd-\uc5d0\uc11c-gui-\ud658\uacbd-\uc14b\ud305\ud558\uae30.mdx",title:"freebsd \uc5d0\uc11c gui \ud658\uacbd \uc14b\ud305\ud558\uae30",description:"1. install gnome3",date:"2019-03-10T08:46:53.000Z",formattedDate:"2019\ub144 3\uc6d4 10\uc77c",tags:[{label:"server",permalink:"/blog/post/tags/server"},{label:"freebsd",permalink:"/blog/post/tags/freebsd"},{label:"gnome",permalink:"/blog/post/tags/gnome"}],readingTime:.385,hasTruncateMarker:!1,authors:[],frontMatter:{title:"freebsd \uc5d0\uc11c gui \ud658\uacbd \uc14b\ud305\ud558\uae30",date:"2019-03-10T08:46:53.000Z",tags:["server","freebsd","gnome"]},unlisted:!1,prevItem:{title:"freebsd \uc5d0\uc11c \uac8c\uc2a4\ud2b8\ud655\uc7a5 \uc124\uce58\ud558\uae30",permalink:"/blog/post/freebsd-\uc5d0\uc11c-\uac8c\uc2a4\ud2b8\ud655\uc7a5-\uc124\uce58\ud558\uae30"},nextItem:{title:"hexo \uc5d0\uc11c html \ubb38\uc11c \uacc4\uc2dc\ud558\uae30",permalink:"/blog/post/hexo-\uc5d0\uc11c-html-\ubb38\uc11c-\uacc4\uc2dc\ud558\uae30"}},i={authorsImageUrls:[]},c=[{value:"1. install gnome3",id:"1-install-gnome3",level:2},{value:"2. fstab \ud30c\uc77c \uc124\uc815",id:"2-fstab-\ud30c\uc77c-\uc124\uc815",level:2},{value:"3. rc.conf \ud30c\uc77c\uc124\uc815",id:"3-rcconf-\ud30c\uc77c\uc124\uc815",level:2},{value:"4. \uc7ac\ubd80\ud305\ud6c4 \ud655\uc778",id:"4-\uc7ac\ubd80\ud305\ud6c4-\ud655\uc778",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"1-install-gnome3",children:"1. install gnome3"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ pkg install gnome3\n"})}),"\n",(0,s.jsx)(n.h2,{id:"2-fstab-\ud30c\uc77c-\uc124\uc815",children:"2. fstab \ud30c\uc77c \uc124\uc815"}),"\n",(0,s.jsx)(n.p,{children:"/etc/fstab \ud30c\uc77c\uc5d0 \ub0b4\uc6a9\ucd94\uac00"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"proc           /proc       procfs  rw  0   0\n"})}),"\n",(0,s.jsx)(n.h2,{id:"3-rcconf-\ud30c\uc77c\uc124\uc815",children:"3. rc.conf \ud30c\uc77c\uc124\uc815"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'dbus_enable="YES"\nhald_enable="YES"\ngdm_enable="YES"\ngnome_enable="YES"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"4-\uc7ac\ubd80\ud305\ud6c4-\ud655\uc778",children:"4. \uc7ac\ubd80\ud305\ud6c4 \ud655\uc778"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ reboot\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\uc774\ubbf8\uc9c0",src:t(22381).Z+"",width:"802",height:"685"})}),"\n",(0,s.jsxs)(n.p,{children:["\ucc38\uace0 : ",(0,s.jsx)(n.a,{href:"https://www.freebsd.org/doc/handbook/x11-wm.html",children:"freebsd handbook - 5.7. Desktop Environments"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},22381:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/freebsd-6e69c01ad6207181cf9327a8ecc0e767.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var s=t(67294);const r={},o=s.createContext(r);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);