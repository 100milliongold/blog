"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[5610],{83202:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(85893),s=t(11151);const o={title:"How to Disable SELinux on CentOS 7",date:new Date("2018-12-20T00:53:35.000Z"),tags:["SELinux","Server","CentOS"]},r="SELinux",l={permalink:"/blog/post/How-to-Disable-SELinux-on-CentOS-7",source:"@site/blog/How-to-Disable-SELinux-on-CentOS-7.mdx",title:"How to Disable SELinux on CentOS 7",description:"SELinux(Security Enhanced Linux)\ub294 \uad00\ub9ac\uc790\uc640 \uc0ac\uc6a9\uc790\uac00 \uc561\uc138\uc2a4 \uc81c\uc5b4\uc5d0 \ub300\ud55c \uc81c\uc5b4\ub825\uc744 \ub192\uc77c \uc218 \uc788\ub294 Linux \ucee4\ub110 \ubcf4\uc548 \ubaa8\ub4c8\uc774\ub2e4. SELinux \uc815\ucc45 \uaddc\uce59\uc5d0 \ub530\ub77c \uc811\uc18d\ud560 \uc218 \uc788\ub2e4.",date:"2018-12-20T00:53:35.000Z",formattedDate:"2018\ub144 12\uc6d4 20\uc77c",tags:[{label:"SELinux",permalink:"/blog/post/tags/se-linux"},{label:"Server",permalink:"/blog/post/tags/server"},{label:"CentOS",permalink:"/blog/post/tags/cent-os"}],readingTime:1.23,hasTruncateMarker:!1,authors:[],frontMatter:{title:"How to Disable SELinux on CentOS 7",date:"2018-12-20T00:53:35.000Z",tags:["SELinux","Server","CentOS"]},unlisted:!1,prevItem:{title:"Ambari Agent\uac00 \uc2e4\ud589\ub418\uace0\ub3c4 Ambari \uc5d0\uc11c\ub294 heartbeat lost\uac00 \ubc1c\uc0dd\ud560\uacbd\uc6b0",permalink:"/blog/post/Ambari-Agent\uac00-\uc2e4\ud589\ub418\uace0\ub3c4-Ambari-\uc5d0\uc11c\ub294-heartbeat-lost\uac00-\ubc1c\uc0dd\ud560\uacbd\uc6b0"},nextItem:{title:"Centos7 SELINUX disable \uc124\uc815\ud6c4 \ucee4\ub110\ud398\ub2c9 \uc99d\uc0c1",permalink:"/blog/post/Centos7-SELINUX-disable-\uc124\uc815\ud6c4-\ucee4\ub110\ud398\ub2c9-\uc99d\uc0c1"}},a={authorsImageUrls:[]},c=[];function u(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"SELinux(Security Enhanced Linux)\ub294 \uad00\ub9ac\uc790\uc640 \uc0ac\uc6a9\uc790\uac00 \uc561\uc138\uc2a4 \uc81c\uc5b4\uc5d0 \ub300\ud55c \uc81c\uc5b4\ub825\uc744 \ub192\uc77c \uc218 \uc788\ub294 Linux \ucee4\ub110 \ubcf4\uc548 \ubaa8\ub4c8\uc774\ub2e4. SELinux \uc815\ucc45 \uaddc\uce59\uc5d0 \ub530\ub77c \uc811\uc18d\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"SELinux \uc815\ucc45 \uaddc\uce59\uc740 \ud504\ub85c\uc138\uc2a4\uc640 \uc0ac\uc6a9\uc790\uac00 \ud30c\uc77c\uacfc \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ubc29\ubc95\ubfd0\ub9cc \uc544\ub2c8\ub77c \ud504\ub85c\uc138\uc2a4\uc640 \uc0ac\uc6a9\uc790\uac00 \uc11c\ub85c \uc0c1\ud638\uc791\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc9c0\uc815\ud55c\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\ud30c\uc77c\uc744 \uc5ec\ub294 \ud504\ub85c\uc138\uc2a4\ucc98\ub7fc \uc561\uc138\uc2a4\ub97c \ud2b9\ubcc4\ud788 \ud5c8\uc6a9\ud558\ub294 SELinux \uc815\ucc45 \uaddc\uce59\uc774 \uc5c6\ub294 \uacbd\uc6b0, \uc561\uc138\uc2a4\uac00 \uac70\ubd80\ub41c\ub2e4."}),"\n",(0,i.jsx)(n.h1,{id:"disable-selinux",children:"Disable SELinux"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"SELinux mode \ubcc0\uacbd"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"sudo setenforce 0\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"/etc/selinux/config \ubcc0\uacbd"}),"\n",(0,i.jsx)(n.p,{children:"SELINUX \ud56d\ubaa9\uc744 disabled\ub85c \ubcc0\uacbd"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# This file controls the state of SELinux on the system.\n# SELINUX= can take one of these three values:\n#       enforcing - SELinux security policy is enforced.\n#       permissive - SELinux prints warnings instead of enforcing.\n#       disabled - No SELinux policy is loaded.\nSELINUX=disabled\n# SELINUXTYPE= can take one of these two values:\n#       targeted - Targeted processes are protected,\n#       mls - Multi Level Security protection.\nSELINUXTYPE=targeted\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Server reboot"}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(67294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);