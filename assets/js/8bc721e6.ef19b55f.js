"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[4221],{6535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>j,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(85893),c=n(11151);const s={title:"java.io.IOException: com.jcraft.jsch.JSchException: invalid privatekey: [B@24a1c17f jsch \uc624\ub958\ubc1c\uc0dd",date:new Date("2019-03-23T18:42:48.000Z"),tags:["java","error"]},r="\uc99d\uc0c1",i={permalink:"/blog/post/java-io-IOException-com-jcraft-jsch-JSchException-invalid-privatekey-B-24a1c17f-jsch-\uc624\ub958\ubc1c\uc0dd",source:"@site/blog/java-io-IOException-com-jcraft-jsch-JSchException-invalid-privatekey-B-24a1c17f-jsch-\uc624\ub958\ubc1c\uc0dd.mdx",title:"java.io.IOException: com.jcraft.jsch.JSchException: invalid privatekey: [B@24a1c17f jsch \uc624\ub958\ubc1c\uc0dd",description:"- jsch \uc6b4\uc601\uac04\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc740 \uc5d0\ub7ec\ubc1c\uc0dd",date:"2019-03-23T18:42:48.000Z",formattedDate:"2019\ub144 3\uc6d4 23\uc77c",tags:[{label:"java",permalink:"/blog/post/tags/java"},{label:"error",permalink:"/blog/post/tags/error"}],readingTime:.555,hasTruncateMarker:!1,authors:[],frontMatter:{title:"java.io.IOException: com.jcraft.jsch.JSchException: invalid privatekey: [B@24a1c17f jsch \uc624\ub958\ubc1c\uc0dd",date:"2019-03-23T18:42:48.000Z",tags:["java","error"]},unlisted:!1,prevItem:{title:"ssh port forwording",permalink:"/blog/post/ssh-port-forwording"},nextItem:{title:"\ub9e5\uc5d0\uc11c sshpass \uc774\uc6a9\ud558\uae30",permalink:"/blog/post/\ub9e5\uc5d0\uc11c-sshpass-\uc774\uc6a9\ud558\uae30"}},o={authorsImageUrls:[]},l=[];function h(e){const t={code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"jsch \uc6b4\uc601\uac04\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc740 \uc5d0\ub7ec\ubc1c\uc0dd"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"Caused by: com.jcraft.jsch.JSchException: invalid privatekey: [B@24a1c17f\n   at com.jcraft.jsch.KeyPair.load(KeyPair.java:902)\n   at com.jcraft.jsch.KeyPair.load(KeyPair.java:543)\n   at com.jcraft.jsch.IdentityFile.newInstance(IdentityFile.java:40)\n   at com.jcraft.jsch.JSch.addIdentity(JSch.java:393)\n   at com.jcraft.jsch.JSch.addIdentity(JSch.java:353)\n   at com.jcabi.ssh.SSH.session(SSH.java:261)\n"})}),"\n",(0,a.jsx)(t.h1,{id:"\uc6d0\uc778",children:"\uc6d0\uc778"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"jsch \uc5d0\uc11c \uc5f0\ub3d9\ub418\ub294 .ssh/id_rsa \ud30c\uc77c\ud615\uc2dd\uc774 \uc798\ubabb\ub418\uc5c8\ub2e4."}),"\n",(0,a.jsx)(t.li,{children:"cat ~/.ssh/id_rsa \ud30c\uc77c\uc744 \ud655\uc778\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ucd9c\ub825"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"-----BEGIN OPENSSH PRIVATE KEY-----\n........\n........\n........\n-----END OPENSSH PRIVATE KEY-----\n"})}),"\n",(0,a.jsx)(t.h1,{id:"\uc870\uce58\uc0ac\ud56d",children:"\uc870\uce58\uc0ac\ud56d"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"ssh-keygen \uc73c\ub85c \ud0a4\uc744 \uc0dd\uc131\ud560\ub54c \ub2e4\uc74c\uacfc \uac19\uc740 \uc635\uc165\ucd94\uac00"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"$ ssh-keygen -m PEM\n"})})]})}function j(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(67294);const c={},s=a.createContext(c);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);