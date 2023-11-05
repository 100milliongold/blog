"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[185],{52507:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=t(85893),l=t(11151);const o={date:new Date("2023-02-20T09:18:58.000Z"),authors:["100milliongold"],tags:["linux","server"]},s="Linux Large File Copy(Linux \ub300\ub7c9 \ud30c\uc77c \ubcf5\uc0ac) | by jelly | Medium",i={permalink:"/blog/post/2023/02/20/Linux-Large-File-Copy-Linux-\ub300\ub7c9-\ud30c\uc77c-\ubcf5\uc0ac",source:"@site/blog/2023-02-20-Linux-Large-File-Copy-Linux-\ub300\ub7c9-\ud30c\uc77c-\ubcf5\uc0ac/index.mdx",title:"Linux Large File Copy(Linux \ub300\ub7c9 \ud30c\uc77c \ubcf5\uc0ac) | by jelly | Medium",description:"https://jellybeanz.medium.com/tip-linux-large-file-copy-linux-%EB%8C%80%EB%9F%89-%ED%8C%8C%EC%9D%BC-%EB%B3%B5%EC%82%AC-2d7c18f48d77",date:"2023-02-20T09:18:58.000Z",formattedDate:"2023\ub144 2\uc6d4 20\uc77c",tags:[{label:"linux",permalink:"/blog/post/tags/linux"},{label:"server",permalink:"/blog/post/tags/server"}],readingTime:1.78,hasTruncateMarker:!1,authors:[{name:"100milliongold",title:"developer",url:"https://sebastienlorber.com",imageURL:"https://avatars.githubusercontent.com/u/13652711?s=400&u=0a1092b8b1170f71ae883d098f8721c12ce39e9e&v=4",key:"100milliongold"}],frontMatter:{date:"2023-02-20T09:18:58.000Z",authors:["100milliongold"],tags:["linux","server"]},unlisted:!1,prevItem:{title:"useMemo-\uc815\uc758",permalink:"/blog/post/2023/02/21/useMemo-\uc815\uc758"},nextItem:{title:"PyScript \ub780? - HTML\uc5d0\uc11c \ud30c\uc774\uc36c \ucf54\ub4dc \uc791\uc131",permalink:"/blog/post/2023/02/20/pyscript-\ub780"}},c={authorsImageUrls:[void 0]},a=[];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://jellybeanz.medium.com/tip-linux-large-file-copy-linux-%EB%8C%80%EB%9F%89-%ED%8C%8C%EC%9D%BC-%EB%B3%B5%EC%82%AC-2d7c18f48d77",children:"https://jellybeanz.medium.com/tip-linux-large-file-copy-linux-%EB%8C%80%EB%9F%89-%ED%8C%8C%EC%9D%BC-%EB%B3%B5%EC%82%AC-2d7c18f48d77"})}),"\n",(0,r.jsx)(n.p,{children:"Ubuntu \ub97c \uc0ac\uc6a9\ud558\ub2e4 \ubcf4\uba74 \ud30c\uc77c\uc744 \ubcf5\uc0ac\ud558\uac00\ub098 \ubc31\uc5c5\ud558\ub294 \ub4f1\uc758 \uc77c\uc744 \uc790\uc8fc \ud558\uac8c \ub41c\ub2e4. \uc774\ub7f0 \uacbd\uc6b0\ub294 \ub300\ubd80\ubd84 \uc544\ub798\uc5d0 \uc801\uc740 cp \uba85\ub839\uc5b4\ub97c \uc8fc\ub85c \uc0ac\uc6a9\ud558\uace4 \ud55c\ub2e4."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"cp \uc0ac\uc6a9"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cp -rf [source] [target]\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"rsync \uc0ac\uc6a9"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"cp \ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \uc9c4\ud589 % \ub97c \ubcfc\uc218 \uc5c6\uc9c0\ub9cc rsync \ub294 progress \uc635\uc158\uc744 \uc774\uc6a9\ud574\uc11c \ud604\uc7ac \ubcf5\uc0ac\ub418\uace0 \uc788\ub294 \ud30c\uc77c\uc758 \uc9c4\ud589 % \ub97c \ubcfc\uc218 \uc788\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rsync -anv --progress [sorce] [target]\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\ud558\uc9c0\ub9cc!!! \uba87\ub9cc\uac1c, \uc218\ubc31\uae30\uac00 \ub2e8\uc704\uc758 \ud30c\uc77c\uc744 \ubcf5\uc0ac \ud558\ub294 \uacbd\uc6b0 cp \uba85\ub839\uc5b4\ub294 \uc5b4\ub290 \uc21c\uac04\ubd80\ud130 \ub290\ub824\uc9c0\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uace4 \ud55c\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\uc774\ub7f0 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c\ub294 \ud30c\uc77c\uc744 tar \ub85c \uc555\ucd95\ud558\uc5ec \ubcf5\uc0ac\ub97c \ud558\ub294 \ubc29\ubc95\uc73c\ub85c \ud574\uacb0 \ud558\uace4 \ud588\uc9c0\ub9cc, \ub2e4\uc2dc \uc555\ucd95\uc744 \ud480\uc5b4\uc57c \ud558\ub294 \ubd88\ud3b8\ud568\uc774 \uc788\uc5c8\ub2e4. \ucd5c\uadfc\uc5d0 \uc774\ub7f0 \ubc88\uac70\ub85c\uc6c0\uc744 \ud574\uacb0\ud558\ub294 \ubc29\ubc95\uc744 \ucc3e\uc558\ub2e4."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"tar \uc555\ucd95/\ud574\uc81c \uc0ac\uc6a9"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"tar cvf - [source] | (cd [target] ; tar xvf -)\n"})}),"\n",(0,r.jsx)(n.p,{children:"tar \uba85\ub839\uc5b4\ub97c | \uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uba74 source \ub97c \uc555\ucd95\ud558\uace0 target \uc5d0 \uc555\ucd95 \ud574\uc81c\ub97c \ud55c\ubc88\uc5d0 \ud574\uc8fc\uac8c \ub41c\ub2e4. \uc774 \ubc29\ubc95\uc744 \uc774\uc6a9\ud558\uba74 \ub300\ub7c9/\ub300\uc6a9\ub7c9 \ud30c\uc77c\uc744 \ubcf5\uc0ac\ud558\ub294\ub370 \uc788\uc5b4\uc11c \uc18d\ub3c4 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"cp, rsync, tar \ub97c \uc774\uc6a9\ud558\ub294 \ubc29\ubc95 \uc911\uc5d0\uc11c\ub294 tar \ub97c \uc774\uc6a9\ud558\ub294 \ubc29\ubc95\uc774 \uc81c\uc77c \uc88b\ub2e4."})})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(67294);const l={},o=r.createContext(l);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);