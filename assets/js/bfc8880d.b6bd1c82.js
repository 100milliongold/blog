"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[6191],{98217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(85893),r=t(11151);const s={title:"Vagrant Disk Change",date:new Date("2018-12-15T23:23:14.000Z"),tags:["vagrant","server","virsualbox"]},i="\uc124\uba85",l={permalink:"/blog/post/Vagrant-Disk-Change",source:"@site/blog/Vagrant-Disk-Change.mdx",title:"Vagrant Disk Change",description:"Vagrant \uc740 \uae30\ubcf8\uc801\uc73c\ub85c \uac00\uc0c1\uba38\uc2e0\uc744 \ud560\ub2f9\ud560\ub54c \ub514\uc2a4\ud06c \uc0ac\uc774\uc988\uac00 10G \ub85c \ud560\ub2f9\ub418\uc5b4 \uc788\uc5b4\uc11c \ucd94\uac00\ub85c \uc6a9\ub7c9\uc744 \uc7a1\uc744\ub54c \ubcc4\ub3c4\uc758 \ub514\uc2a4\ud06c\ub97c \uc7a1\uc544\uc57c \ud558\ub294 \ubb38\uc81c\uac00 \uc0dd\uae34\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc9c1\uc811 virtualbox \uc744 \ud1b5\ud574\uc11c \ub514\uc2a4\ud06c \uc0ac\uc774\uc988\ub97c \uc870\uc815\ud574\uc918\uc57c \ud55c\ub2e4.",date:"2018-12-15T23:23:14.000Z",formattedDate:"2018\ub144 12\uc6d4 15\uc77c",tags:[{label:"vagrant",permalink:"/blog/post/tags/vagrant"},{label:"server",permalink:"/blog/post/tags/server"},{label:"virsualbox",permalink:"/blog/post/tags/virsualbox"}],readingTime:.905,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Vagrant Disk Change",date:"2018-12-15T23:23:14.000Z",tags:["vagrant","server","virsualbox"]},unlisted:!1,prevItem:{title:"Ambari View \uc81c\uc791",permalink:"/blog/post/Ambari-View-\uc81c\uc791"},nextItem:{title:"Vagrant \uc0ac\uc6a9\ubc95",permalink:"/blog/post/Vagrant-\uc0ac\uc6a9\ubc95"}},o={authorsImageUrls:[]},c=[];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Vagrant \uc740 \uae30\ubcf8\uc801\uc73c\ub85c \uac00\uc0c1\uba38\uc2e0\uc744 \ud560\ub2f9\ud560\ub54c \ub514\uc2a4\ud06c \uc0ac\uc774\uc988\uac00 10G \ub85c \ud560\ub2f9\ub418\uc5b4 \uc788\uc5b4\uc11c \ucd94\uac00\ub85c \uc6a9\ub7c9\uc744 \uc7a1\uc744\ub54c \ubcc4\ub3c4\uc758 \ub514\uc2a4\ud06c\ub97c \uc7a1\uc544\uc57c \ud558\ub294 \ubb38\uc81c\uac00 \uc0dd\uae34\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc9c1\uc811 virtualbox \uc744 \ud1b5\ud574\uc11c \ub514\uc2a4\ud06c \uc0ac\uc774\uc988\ub97c \uc870\uc815\ud574\uc918\uc57c \ud55c\ub2e4."}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"\ub514\uc2a4\ud06c-\uc0ac\uc774\uc988-\ubcc0\uacbd\ubc95",children:"\ub514\uc2a4\ud06c \uc0ac\uc774\uc988 \ubcc0\uacbd\ubc95"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Virtual box VMs \ud3f4\ub354\ub85c \uc774\ub3d9"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"cd ~/VirtualBox\\ VMs/<virtualbox folder>\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"vmdk \ud30c\uc77c \ud615\uc2dd\uc744 vdi \ud615\uc2dd\uc73c\ub85c \ubcc0\uacbd (\ub514\uc2a4\ud06c \uc218\uc815\uc774 \uac00\ub2a5\ud55c \ud3ec\ub9f7)"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'VBoxManage clonehd "ubuntu-xenial-16.04-cloudimg.vmdk" "ubuntu-xenial-16.04-cloudimg.vdi" --format vdi\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"\ub514\uc2a4\ud06c \uc0ac\uc774\uc988 \ubcc0\uacbd"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'VBoxManage modifyhd "ubuntu-xenial-16.04-cloudimg.vdi" --resize 40960\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\uac00\uc0c1\uba38\uc2e0\uc5d0\uc11c \uc218\uc815\ud55c \ub514\uc2a4\ud06c\ub85c \ubcc0\uacbd\n",(0,a.jsx)(n.img,{alt:"image",src:t(13368).Z+"",width:"628",height:"412"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\uacb0\uacfc\n",(0,a.jsx)(n.img,{alt:"image",src:t(15738).Z+"",width:"959",height:"629"})]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},13368:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image1-82cb75c325fe831e0279503b5dadf07e.png"},15738:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image2-e50ca7f2dd601c82b1a97bf36bd1aa6b.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var a=t(67294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);