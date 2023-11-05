"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[2840],{38872:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=t(85893),o=t(11151);const s={date:new Date("2022-04-25T01:18:58.000Z"),authors:["100milliongold"],tags:["kubernetes"]},i="@RequiredArgsConstructor",c={permalink:"/blog/post/2022/04/04/RequiredArgsConstructor",source:"@site/blog/2022-04-04-RequiredArgsConstructor/index.mdx",title:"@RequiredArgsConstructor",description:"_@RequiredArgsConstructor_",date:"2022-04-25T01:18:58.000Z",formattedDate:"2022\ub144 4\uc6d4 25\uc77c",tags:[{label:"kubernetes",permalink:"/blog/post/tags/kubernetes"}],readingTime:2.3,hasTruncateMarker:!1,authors:[{name:"100milliongold",title:"developer",url:"https://sebastienlorber.com",imageURL:"https://avatars.githubusercontent.com/u/13652711?s=400&u=0a1092b8b1170f71ae883d098f8721c12ce39e9e&v=4",key:"100milliongold"}],frontMatter:{date:"2022-04-25T01:18:58.000Z",authors:["100milliongold"],tags:["kubernetes"]},unlisted:!1,prevItem:{title:"Lombok\uc744 \uc774\uc6a9\ud574 Builder \ud328\ud134\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\uc790.",permalink:"/blog/post/Lombok\uc744-\uc774\uc6a9\ud574-Builder-\ud328\ud134\uc744-\ub9cc\ub4e4\uc5b4\ubcf4\uc790"},nextItem:{title:"Ingress \uc640 egress \ucc28\uc774",permalink:"/blog/post/2022/04/25/Ingress-\uc640-egress-\ucc28\uc774"}},l={authorsImageUrls:[void 0]},d=[{value:"<strong><em>@RequiredArgsConstructor</em></strong>",id:"requiredargsconstructor",level:2},{value:"Example",id:"example",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:3}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"requiredargsconstructor",children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.em,{children:"@RequiredArgsConstructor"})})}),"\n",(0,n.jsxs)(r.p,{children:["\uc774 \uc5b4\ub178\ud14c\uc774\uc158\uc740 \ucd08\uae30\ud654 \ub418\uc9c0\uc54a\uc740 ",(0,n.jsx)(r.code,{children:"final"})," \ud544\ub4dc\ub098, ",(0,n.jsx)(r.code,{children:"@NonNull"})," \uc774 \ubd99\uc740 \ud544\ub4dc\uc5d0 \ub300\ud574 \uc0dd\uc131\uc790\ub97c \uc0dd\uc131\ud574 \uc90d\ub2c8\ub2e4. \uc8fc\ub85c \uc758\uc874\uc131 \uc8fc\uc785(Dependency Injection) \ud3b8\uc758\uc131\uc744 \uc704\ud574\uc11c \uc0ac\uc6a9\ub418\uace4 \ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(r.p,{children:"\uc2a4\ud504\ub9c1 \uc758\uc874\uc131 \uc8fc\uc785\uc758 \ud2b9\uc9d5 \uc911 \ud55c\uac00\uc9c0\ub97c \uc774\uc6a9\ud558\ub294\ub370 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"\uc5b4\ub5a0\ud55c \ube48(Bean)\uc5d0 \uc0dd\uc131\uc790\uac00 \uc624\uc9c1 \ud558\ub098\ub9cc \uc788\uace0, \uc0dd\uc131\uc790\uc758 \ud30c\ub77c\ubbf8\ud130 \ud0c0\uc785\uc774 \ube48\uc73c\ub85c \ub4f1\ub85d \uac00\ub2a5\ud55c \uc874\uc7ac\ub77c\uba74 \uc774 \ube48\uc740 @Autowired \uc5b4\ub178\ud14c\uc774\uc158 \uc5c6\uc774\ub3c4 \uc758\uc874\uc131 \uc8fc\uc785\uc774 \uac00\ub2a5\ud558\ub2e4."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"@Service\n@RequiredArgsConstructor\npublic class RequiredArgsConstructorDIServiceExample {\n  private final FirstRepository firstRepository;\n  private final SecondRepository secondRepository;\n  private final ThirdRepository thirdRepository;\n\n  // ...\n}\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\ud074\ub798\uc2a4 \ud30c\uc77c\uc744 \ubcf4\uba74 ",(0,n.jsx)(r.code,{children:"@ConstructorProperties"})," \uc5b4\ub178\ud14c\uc774\uc158\uacfc \ud568\uaed8 ",(0,n.jsx)(r.code,{children:"final"})," \ud544\ub4dc\ub97c \ub9e4\uac1c\ubcc0\uc218\ub85c \ud558\ub294 \uc0dd\uc131\uc790\uac00 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub9e4\uac1c\ubcc0\uc218\ub85c \uc788\ub294 3\uac1c\uc758 \ub9ac\ud3ec\uc9c0\ud1a0\ub9ac(repository)\ub294 \ube48\uc73c\ub85c \ub4f1\ub85d\uc774 \uac00\ub2a5\ud55c \uc874\uc7ac\uc774\ubbc0\ub85c, ",(0,n.jsx)(r.code,{children:"@Autowired"})," \uc5b4\ub178\ud14c\uc774\uc158 \uc5c6\uc774 \uc758\uc874\uc131 \uc8fc\uc785\uc774 \uc774\ub8e8\uc5b4\uc9c0\uac8c \ub418\ub294 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(r.h3,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"@RequiredArgsConstructor"})," \uc744 \uc774\uc6a9\ud574\uc11c \ud3b8\ub9ac\ud558\uac8c \uc758\uc874\uc131 \uc8fc\uc785\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6cc\ubd24\uc2b5\ub2c8\ub2e4. \ucd94\uac00\uc801\uc73c\ub85c \ub86c\ubcf5 \uc5b4\ub178\ud14c\uc774\uc158\uc774(@Getter \ud639\uc740 @Setter \ub4f1) \uc0ac\uc6a9\ud560\ub550 \ud3b8\ud558\uc9c0\ub9cc, \ub2e8\uc810\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. setter \uba54\uc11c\ub4dc\uac00 \ud544\uc694\uc5c6\ub294 \ud544\ub4dc\uc5d0 \ub300\ud574\uc11c\ub3c4 setter \uba54\uc11c\ub4dc\ub97c \uac15\uc81c\ub85c \uc0dd\uc131\ud558\uac8c \ub418\ub2c8, \ud544\ub4dc \uac12\uc774 \ubcc0\uacbd\ub420 \uc704\ud5d8\uc774 \uc0dd\uae30\uac8c \ub429\ub2c8\ub2e4. \uc774\ub7f0 \ubd80\ubd84\ub4e4\uc740 \uc804\ubd80 \ub9ac\ud329\ud1a0\ub9c1\uc758 \ub300\uc0c1\uc774\uc9c0\ub9cc, \ub86c\ubcf5\uc744 \uc0ac\uc6a9\ud558\uac8c\ub420 \uacbd\uc6b0 \ub9ac\ud329\ud1a0\ub9c1\uc774 \ud798\ub4e4\uc5b4\uc9c0\ub294 \ubd80\ubd84\ub3c4 \uc788\uc73c\ub2c8 \ub108\ubb34 \ubb34\ubd84\ubcc4\ud558\uac8c \uc0ac\uc6a9\ud558\ub294\uac83\uc740 \uc88b\uc9c0 \uc54a\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(r.p,{children:["\ucd9c\ucc98 : ",(0,n.jsx)(r.a,{href:"https://medium.com/webeveloper/requiredargsconstructor-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%9D%98%EC%A1%B4%EC%84%B1-%EC%A3%BC%EC%9E%85-dependency-injection-4f1b0ac33561",children:"@RequiredArgsConstructor \ub97c \uc774\uc6a9\ud55c \uc758\uc874\uc131 \uc8fc\uc785(Dependency Injection)\n"})]})]})}function u(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>i});var n=t(67294);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);