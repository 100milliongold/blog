"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[7917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(n),k=o,d=c["".concat(l,".").concat(k)]||c[k]||u[k]||r;return n?a.createElement(d,p(p({ref:t},s),{},{components:n})):a.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,p=new Array(r);p[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,p[1]=i;for(var m=2;m<r;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},29591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=n(87462),o=(n(67294),n(3905));const r={date:new Date("2023-02-21T11:30:58.000Z"),authors:["100milliongold"],tags:["front-end","react"]},p=void 0,i={permalink:"/blog/post/2023/02/21/useMemo-\uc815\uc758",source:"@site/blog/2023-02-21-useMemo-\uc815\uc758/index.mdx",title:"useMemo-\uc815\uc758",description:"\ucd9c\ucc98//ui.toast.com/weekly-pick/ko_20190731",date:"2023-02-21T11:30:58.000Z",formattedDate:"2023\ub144 2\uc6d4 21\uc77c",tags:[{label:"front-end",permalink:"/blog/post/tags/front-end"},{label:"react",permalink:"/blog/post/tags/react"}],readingTime:12.935,hasTruncateMarker:!1,authors:[{name:"100milliongold",title:"developer",url:"https://sebastienlorber.com",imageURL:"https://avatars.githubusercontent.com/u/13652711?s=400&u=0a1092b8b1170f71ae883d098f8721c12ce39e9e&v=4",key:"100milliongold"}],frontMatter:{date:"2023-02-21T11:30:58.000Z",authors:["100milliongold"],tags:["front-end","react"]},prevItem:{title:"Bun-\uc73c\ub85c-React-\uc2dc\uc791\ud558\uae30",permalink:"/blog/post/2023/02/21/Bun-\uc73c\ub85c-React-\uc2dc\uc791\ud558\uae30"},nextItem:{title:"yup + react-hoot-form \uc73c\ub85c \uc5f0\ub3d9\ud558\uae30",permalink:"/blog/post/2023/03/06/yup%20%2B%20react-hook-form%20%EC%97%B0%EB%8F%99"}},l={authorsImageUrls:[void 0]},m=[{value:"1. React.memo()",id:"1-reactmemo",level:2},{value:"1.1 props \ub3d9\ub4f1 \ube44\uad50 \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5",id:"11-props-\ub3d9\ub4f1-\ube44\uad50-\ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5",level:3},{value:"2. \uc5b8\uc81c React.memo()\ub97c \uc368\uc57c\ud560\uae4c",id:"2-\uc5b8\uc81c-reactmemo\ub97c-\uc368\uc57c\ud560\uae4c",level:2},{value:"2.1 \uac19\uc740 props\ub85c \ub80c\ub354\ub9c1\uc774 \uc790\uc8fc \uc77c\uc5b4\ub098\ub294 \ucef4\ud37c\ub10c\ud2b8",id:"21-\uac19\uc740-props\ub85c-\ub80c\ub354\ub9c1\uc774-\uc790\uc8fc-\uc77c\uc5b4\ub098\ub294-\ucef4\ud37c\ub10c\ud2b8",level:3},{value:"3. \uc5b8\uc81c React.memo()\ub97c \uc0ac\uc6a9\ud558\uc9c0 \ub9d0\uc544\uc57c \ud560\uae4c",id:"3-\uc5b8\uc81c-reactmemo\ub97c-\uc0ac\uc6a9\ud558\uc9c0-\ub9d0\uc544\uc57c-\ud560\uae4c",level:2},{value:"3.1 \uc4f8\ubaa8\uc5c6\ub294 props \ube44\uad50",id:"31-\uc4f8\ubaa8\uc5c6\ub294-props-\ube44\uad50",level:3},{value:"4. React.memo() \uc640 \ucf5c\ubc31 \ud568\uc218",id:"4-reactmemo-\uc640-\ucf5c\ubc31-\ud568\uc218",level:2},{value:"5. React.memo() \uc740 \uc131\ub2a5 \uac1c\uc120\uc758 \ub3c4\uad6c\ub2e4",id:"5-reactmemo-\uc740-\uc131\ub2a5-\uac1c\uc120\uc758-\ub3c4\uad6c\ub2e4",level:2},{value:"6. \uacb0\ub860",id:"6-\uacb0\ub860",level:2}],s={toc:m},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ucd9c\ucc98 : ",(0,o.kt)("a",{parentName:"p",href:"https://ui.toast.com/weekly-pick/ko_20190731"},"https://ui.toast.com/weekly-pick/ko_20190731")),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\uc6d0\ubb38: ",(0,o.kt)("a",{parentName:"p",href:"https://dmitripavlutin.com/use-react-memo-wisely"},"https://dmitripavlutin.com/use-react-memo-wisely"))),(0,o.kt)("p",null,"\uc720\uc800\ub4e4\uc740 \ubc18\uc751\uc774 \ube60\ub978 UI\ub97c \uc120\ud638\ud55c\ub2e4. 100ms \ubbf8\ub9cc\uc758 UI \uc751\ub2f5 \uc9c0\uc5f0\uc740 \uc720\uc800\ub4e4\uc774 \uc989\uc2dc \ub290\ub084 \uc218 \uc788\uace0, 100ms\uc5d0\uc11c 300ms\uac00 \uc9c0\uc5f0\ub418\uba74 \uc774\ubbf8 \uc720\uc800\ub4e4\uc740 \uc0c1\ub2f9\ud55c \uc9c0\uc5f0\uc73c\ub85c \ub290\ub080\ub2e4."),(0,o.kt)("p",null,"UI \uc131\ub2a5\uc744 \uc99d\uac00\uc2dc\ud0a4\uae30 \uc704\ud574, React\ub294 \uace0\ucc28 \ucef4\ud37c\ub10c\ud2b8(Higher Order Component, HOC) ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\ub97c \uc81c\uacf5\ud55c\ub2e4. \ub80c\ub354\ub9c1 \uacb0\uacfc\ub97c \uba54\ubaa8\uc774\uc9d5(Memoizing)\ud568\uc73c\ub85c\uc368, \ubd88\ud544\uc694\ud55c \ub9ac\ub80c\ub354\ub9c1\uc744 \uac74\ub108\ub6f4\ub2e4."),(0,o.kt)("p",null,"\uc774 \uae00\uc740 \uc5b8\uc81c ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\uac00 \uc131\ub2a5\uc744 \ud5a5\uc0c1\ud558\ub294\ub370 \ub3c4\uc6c0\uc774 \ub418\ub294\uc9c0, \uc5b8\uc81c \ubd88\ud544\uc694\ud55c\uc9c0 \uad6c\ubd84\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub420 \uac83\uc774\ub2e4."),(0,o.kt)("p",null,"\ucd94\uac00\ub85c \ub2f9\uc2e0\uc774 \uc54c\uc544\ub450\uba74 \uc88b\uc744 \uc4f8\ub9cc\ud55c \uba54\ubaa8\uc774\uc81c\uc774\uc158(Memoization) \ud301 \ub610\ud55c \uc124\uba85\ud560 \uac83\uc774\ub2e4."),(0,o.kt)("h2",{id:"1-reactmemo"},(0,o.kt)("a",{parentName:"h2",href:"https://ui.toast.com/weekly-pick/ko_20190731#1-reactmemo"}),"1","."," React.memo()"),(0,o.kt)("p",null,"React\ub294 \uba3c\uc800 \ucef4\ud37c\ub10c\ud2b8\ub97c \ub80c\ub354\ub9c1(rendering) \ud55c \ub4a4, \uc774\uc804 \ub80c\ub354\ub41c \uacb0\uacfc\uc640 \ube44\uad50\ud558\uc5ec DOM \uc5c5\ub370\uc774\ud2b8\ub97c \uacb0\uc815\ud55c\ub2e4. \ub9cc\uc57d \ub80c\ub354 \uacb0\uacfc\uac00 \uc774\uc804\uacfc \ub2e4\ub974\ub2e4\uba74, React\ub294 DOM\uc744 \uc5c5\ub370\uc774\ud2b8\ud55c\ub2e4."),(0,o.kt)("p",null,"\ub2e4\uc74c \ub80c\ub354\ub9c1 \uacb0\uacfc\uc640 \uc774\uc804 \uacb0\uacfc\uc758 \ube44\uad50\ub294 \ube60\ub974\ub2e4. \ud558\uc9c0\ub9cc \uc5b4\ub5a4 \uc0c1\ud669\uc5d0\uc11c\ub294 \uc774 \uacfc\uc815\uc758 \uc18d\ub3c4\ub97c \uc880 \ub354 \ub192\uc77c \uc218 \uc788\ub2e4."),(0,o.kt)("p",null,"\ucef4\ud37c\ub10c\ud2b8\uac00 ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\ub85c \ub798\ud551 \ub420 \ub54c, React\ub294 \ucef4\ud37c\ub10c\ud2b8\ub97c \ub80c\ub354\ub9c1\ud558\uace0 \uacb0\uacfc\ub97c \uba54\ubaa8\uc774\uc9d5(Memoizing)\ud55c\ub2e4. \uadf8\ub9ac\uace0 \ub2e4\uc74c \ub80c\ub354\ub9c1\uc774 \uc77c\uc5b4\ub0a0 \ub54c ",(0,o.kt)("inlineCode",{parentName:"p"},"props"),"\uac00 \uac19\ub2e4\uba74, React\ub294 \uba54\ubaa8\uc774\uc9d5(Memoizing)\ub41c \ub0b4\uc6a9\uc744 \uc7ac\uc0ac\uc6a9\ud55c\ub2e4."),(0,o.kt)("p",null,"\uc608\uc2dc\ub97c \uc0b4\ud3b4\ubcf4\uc790. \ud568\uc218\ud615 \ucef4\ud37c\ub10c\ud2b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Movie"),"\uac00 ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\ub85c \ub798\ud551 \ub418\uc5b4 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export function Movie({ title, releaseDate }) {\n  return (\n    <div>\n      <div>Movie title: {title}</div>\n      <div>Release date: {releaseDate}</div>\n    </div>\n  );\n}\n\nexport const MemoizedMovie = React.memo(Movie);\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React.memo(Movie)"),"\ub294 \uc0c8\ub85c \uba54\ubaa8\uc774\uc9d5\ub41c \ucef4\ud37c\ub10c\ud2b8\uc778 ",(0,o.kt)("inlineCode",{parentName:"p"},"MemoizedMovie"),"\ub97c \ubc18\ud658\ud55c\ub2e4. \ud55c \uac00\uc9c0 \ucc28\uc774\uc810\uc744 \uc81c\uc678\ud558\uace0 \uc6d0\ub798\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"Movie")," \ucef4\ud37c\ub10c\ud2b8\uc640 \uac19\uc740 \uacb0\uacfc\ub97c \ub098\ud0c0\ub0bc \uac83\uc774\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MemoizedMovie"),"\uc758 \ub80c\ub354\ub9c1 \uacb0\uacfc\ub294 \uba54\ubaa8\uc774\uc9d5 \ub418\uc5b4\uc788\ub2e4. \ub9cc\uc57d ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),"\uc774\ub098 ",(0,o.kt)("inlineCode",{parentName:"p"},"releaseData")," \uac19\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"props"),"\uac00 \ubcc0\uacbd \ub418\uc9c0 \uc54a\ub294\ub2e4\uba74 \ub2e4\uc74c \ub80c\ub354\ub9c1 \ub54c \uba54\ubaa8\uc774\uc9d5 \ub41c \ub0b4\uc6a9\uc744 \uadf8\ub300\ub85c \uc0ac\uc6a9\ud558\uac8c \ub41c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// \uccab \ub80c\ub354\uc774\ub2e4. React\ub294 MemoizedMovie \ud568\uc218\ub97c \ud638\ucd9c\ud55c\ub2e4.\n<MemoizedMovie\n  movieTitle="Heat"\n  releaseDate="December 15, 1995"\n/>\n\n// \ub2e4\uc2dc \ub80c\ub354\ub9c1 \ud560 \ub54c React\ub294 MemoizedMovie \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc9c0 \uc54a\ub294\ub2e4.\n// \ub9ac\ub80c\ub354\ub9c1\uc744 \ub9c9\ub294\ub2e4.\n<MemoizedMovie\n  movieTitle="Heat"\n  releaseDate="December 15, 1995"\n/>\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/react-memo-demo-c9dx1?fontsize=14&hidenavigation=1&theme=dark"},(0,o.kt)("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit react-memo-demo"}))),(0,o.kt)("p",null,"\uba54\ubaa8\uc774\uc9d5 \ud55c \uacb0\uacfc\ub97c \uc7ac\uc0ac\uc6a9 \ud568\uc73c\ub85c\uc368, React\uc5d0\uc11c \ub9ac\ub80c\ub354\ub9c1\uc744 \ud560 \ub54c \uac00\uc0c1 DOM\uc5d0\uc11c \ub2ec\ub77c\uc9c4 \ubd80\ubd84\uc744 \ud655\uc778\ud558\uc9c0 \uc54a\uc544 \uc131\ub2a5\uc0c1\uc758 \uc774\uc810\uc744 \ub204\ub9b4 \uc218 \uc788\ub2e4."),(0,o.kt)("p",null,"\ud074\ub798\uc2a4 \ucef4\ud37c\ub10c\ud2b8 \ub610\ud55c ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactpurecomponent"},"PureComponent"),"\ub85c \ub3d9\uc77c\ud55c \ub0b4\uc6a9\uc774 \uad6c\ud604\ub418\uc5b4 \uc788\ub2e4."),(0,o.kt)("h3",{id:"11-props-\ub3d9\ub4f1-\ube44\uad50-\ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5"},(0,o.kt)("a",{parentName:"h3",href:"https://ui.toast.com/weekly-pick/ko_20190731#11-props-%EB%8F%99%EB%93%B1-%EB%B9%84%EA%B5%90-%EC%BB%A4%EC%8A%A4%ED%84%B0%EB%A7%88%EC%9D%B4%EC%A7%95"}),"1.1 props \ub3d9\ub4f1 \ube44\uad50 \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\ub294 props \ud639\uc740 props\uc758 \uac1d\uccb4\ub97c \ube44\uad50\ud560 \ub54c ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/v16.8.6/packages/shared/shallowEqual.js"},"\uc595\uc740(shallow)")," \ube44\uad50\ub97c \ud55c\ub2e4."),(0,o.kt)("p",null,"\ube44\uad50 \ubc29\uc2dd\uc744 \uc218\uc815\ud558\uace0 \uc2f6\ub2e4\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()")," \ub450 \ubc88\uc9f8 \ub9e4\uac1c\ubcc0\uc218\ub85c \ube44\uad50\ud568\uc218\ub97c \ub9cc\ub4e4\uc5b4 \ub118\uaca8\uc8fc\uba74 \ub41c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"React.memo(Component, [areEqual(prevProps, nextProps)]);\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"areEqual(prevProps, nextProps)")," \ud568\uc218\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"prevProps"),"\uc640 ",(0,o.kt)("inlineCode",{parentName:"p"},"nextProps"),"\uac00 \uac19\ub2e4\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\ub97c \ubc18\ud658\ud560 \uac83\uc774\ub2e4."),(0,o.kt)("p",null,"\uc608\ub97c\ub4e4\uc5b4 ",(0,o.kt)("inlineCode",{parentName:"p"},"Movie"),"\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"props"),"\uac00 \ub3d9\uc77c\ud55c\uc9c0 \uc218\ub3d9\uc73c\ub85c \ube44\uad50\ud574\ubcf4\uc790."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function moviePropsAreEqual(prevMovie, nextMovie) {\n  return (\n    prevMovie.title === nextMovie.title &&\n    prevMovie.releaseDate === nextMovie.releaseDate\n  );\n}\n\nconst MemoizedMovie2 = React.memo(Movie, moviePropsAreEqual);\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"moviePropsAreEqual()")," \ud568\uc218\ub294 \uc774\uc804 ",(0,o.kt)("inlineCode",{parentName:"p"},"props"),"\uc640 \ud604\uc7ac ",(0,o.kt)("inlineCode",{parentName:"p"},"props"),"\uac00 \uac19\ub2e4\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\ub97c \ubc18\ud658\ud560 \uac83\uc774\ub2e4."),(0,o.kt)("h2",{id:"2-\uc5b8\uc81c-reactmemo\ub97c-\uc368\uc57c\ud560\uae4c"},"2. \uc5b8\uc81c React.memo()\ub97c \uc368\uc57c\ud560\uae4c"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image2.png",src:n(64195).Z})),(0,o.kt)("h3",{id:"21-\uac19\uc740-props\ub85c-\ub80c\ub354\ub9c1\uc774-\uc790\uc8fc-\uc77c\uc5b4\ub098\ub294-\ucef4\ud37c\ub10c\ud2b8"},"2.1 \uac19\uc740 props\ub85c \ub80c\ub354\ub9c1\uc774 \uc790\uc8fc \uc77c\uc5b4\ub098\ub294 \ucef4\ud37c\ub10c\ud2b8"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\ub294 \ud568\uc218\ud615 \ucef4\ud37c\ub10c\ud2b8\uc5d0 \uc801\uc6a9\ub418\uc5b4 \uac19\uc740 props\uc5d0 \uac19\uc740 \ub80c\ub354\ub9c1 \uacb0\uacfc\ub97c \uc81c\uacf5\ud55c\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\ub97c \uc0ac\uc6a9\ud558\uae30 \uac00\uc7a5 \uc88b\uc740 \ucf00\uc774\uc2a4\ub294 \ud568\uc218\ud615 \ucef4\ud37c\ub10c\ud2b8\uac00 \uac19\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"props"),"\ub85c \uc790\uc8fc \ub80c\ub354\ub9c1 \ub420\uac70\ub77c \uc608\uc0c1\ub420 \ub54c\uc774\ub2e4."),(0,o.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \ubd80\ubaa8 \ucef4\ud37c\ub10c\ud2b8\uc5d0 \uc758\ud574 \ud558\uc704 \ucef4\ud37c\ub10c\ud2b8\uac00 \uac19\uc740 props\ub85c \ub9ac\ub80c\ub354\ub9c1 \ub420 \ub54c\uac00 \uc788\ub2e4."),(0,o.kt)("p",null,"\uc704\uc5d0\uc11c \uc815\uc758\ud55c ",(0,o.kt)("inlineCode",{parentName:"p"},"Movie"),"\ub97c \ub2e4\uc2dc \uc0ac\uc6a9\ud574\uc11c \uc608\uc2dc\ub97c \ub4e4\uc5b4\ubcf4\uc790. \uc5ec\uae30 ",(0,o.kt)("inlineCode",{parentName:"p"},"Movie"),"\uc758 \ubd80\ubaa8 \ucef4\ud37c\ub10c\ud2b8\uc778 \uc2e4\uc2dc\uac04\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub418\ub294 \uc601\ud654 \uc870\ud68c\uc218\ub97c \ub098\ud0c0\ub0b4\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"MovieViewsRealtime")," \ucef4\ud37c\ub10c\ud2b8\uac00 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function MovieViewsRealtime({ title, releaseDate, views }) {\n  return (\n    <div>\n      <Movie title={title} releaseDate={releaseDate} />\n      Movie views: {views}\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,"\uc774 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc8fc\uae30\uc801(\ub9e4\ucd08)\uc73c\ub85c \uc11c\ubc84\uc5d0\uc11c \ub370\uc774\ud130\ub97c \ud3f4\ub9c1(Polling)\ud574\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"MovieViewsRealtime")," \ucef4\ud37c\ub10c\ud2b8\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"views"),"\ub97c \uc5c5\ub370\uc774\ud2b8\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Initial render\n<MovieViewsRealtime\n  views={0}\n  title="Forrest Gump"\n  releaseDate="June 23, 1994"\n/>\n\n// After 1 second, views is 10\n<MovieViewsRealtime\n  views={10}\n  title="Forrest Gump"\n  releaseDate="June 23, 1994"\n/>\n\n// After 2 seconds, views is 25\n<MovieViewsRealtime\n  views={25}\n  title="Forrest Gump"\n  releaseDate="June 23, 1994"\n/>\n\n// etc\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"views"),"\uac00 \uc0c8\ub85c\uc6b4 \uc22b\uc790\uac00 \uc5c5\ub370\uc774\ud2b8 \ub420 \ub54c \ub9c8\ub2e4 ",(0,o.kt)("inlineCode",{parentName:"p"},"MoviewViewsRealtime")," \ucef4\ud37c\ub10c\ud2b8 \ub610\ud55c \ub9ac\ub80c\ub354\ub9c1 \ub41c\ub2e4. \uc774\ub54c ",(0,o.kt)("inlineCode",{parentName:"p"},"Movie")," \ucef4\ud37c\ub10c\ud2b8 \ub610\ud55c ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),"\uc774\ub098 ",(0,o.kt)("inlineCode",{parentName:"p"},"releaseData"),"\uac00 \uac19\uc74c\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 \ub9ac\ub80c\ub354\ub9c1 \ub41c\ub2e4."),(0,o.kt)("p",null,"\uc774\ub54c\uac00 ",(0,o.kt)("inlineCode",{parentName:"p"},"Movie")," \ucef4\ud37c\ub10c\ud2b8\uc5d0 \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc744 \uc801\uc6a9\ud560 \uc801\uc808\ud55c \ucf00\uc774\uc2a4\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MovieViewsRealtime"),"\uc5d0 \uba54\ubaa8\uc774\uc9d5\ub41c \ucef4\ud37c\ub10c\ud2b8\uc778 ",(0,o.kt)("inlineCode",{parentName:"p"},"MemoizedMovie"),"\ub97c \ub300\uc2e0 \uc0ac\uc6a9\ud574 \uc131\ub2a5\uc744 \ud5a5\uc0c1\ud574\ubcf4\uc790."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function MovieViewsRealtime({ title, releaseDate, views }) {\n  return (\n    <div>\n      <MemoizedMovie title={title} releaseDate={releaseDate} />\n      Movie views: {views}\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"title")," \ud639\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"releaseDate")," props\uac00 \uac19\ub2e4\uba74, React\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"MemoizedMovie"),"\ub97c \ub9ac\ub80c\ub354\ub9c1 \ud558\uc9c0 \uc54a\uc744 \uac83\uc774\ub2e4. \uc774\ub807\uac8c ",(0,o.kt)("inlineCode",{parentName:"p"},"MovieViewsRealtime")," \ucef4\ud37c\ub10c\ud2b8\uc758 \uc131\ub2a5\uc744 \ud5a5\uc0c1\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ucef4\ud37c\ub10c\ud2b8\uac00 \uac19\uc740 props\ub85c \uc790\uc8fc \ub80c\ub354\ub9c1\ub418\uac70\ub098, \ubb34\uac81\uace0 \ube44\uc6a9\uc774 \ud070 \uc5f0\uc0b0\uc774 \uc788\ub294 \uacbd\uc6b0, ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\ub85c \ucef4\ud37c\ub10c\ud2b8\ub97c \ub798\ud551\ud560 \ud544\uc694\uac00 \uc788\ub2e4.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab"},"profiling"),"\uc744 \ud1b5\ud574 ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\uc758 \uc774\uc810\uc744 \uce21\uc815\ud574\ubd10\ub77c"),(0,o.kt)("h2",{id:"3-\uc5b8\uc81c-reactmemo\ub97c-\uc0ac\uc6a9\ud558\uc9c0-\ub9d0\uc544\uc57c-\ud560\uae4c"},"3","."," \uc5b8\uc81c React.memo()\ub97c \uc0ac\uc6a9\ud558\uc9c0 \ub9d0\uc544\uc57c \ud560\uae4c"),(0,o.kt)("p",null,"\ub9cc\uc57d \uc704\uc5d0\uc11c \uc5b8\uae09\ud55c \uc0c1\ud669\uc5d0 \uc77c\uce58\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\ub97c \uc0ac\uc6a9\ud560 \ud544\uc694\uac00 \uc5c6\uc744 \uac00\ub2a5\uc131\uc774 \ub192\ub2e4."),(0,o.kt)("p",null,"\uacbd\ud5d8\uc801\uc73c\ub85c, \uc131\ub2a5\uc801\uc778 \uc774\uc810\uc744 \uc5bb\uc9c0 \ubabb\ud55c\ub2e4\uba74 \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294\uac83\uc774 \uc88b\ub2e4."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\uc131\ub2a5 \uad00\ub828 \ubcc0\uacbd\uc774 \uc798\ubabb \uc801\uc6a9 \ub41c\ub2e4\uba74 \uc131\ub2a5\uc774 \uc624\ud788\ub824 \uc545\ud654\ub420 \uc218 \uc788\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\ub97c \ud604\uba85\ud558\uac8c \uc0ac\uc6a9\ud558\ub77c.")),(0,o.kt)("p",null,"\ub610\ud55c, \uae30\uc220\uc801\uc73c\ub85c\ub294 \uac00\ub2a5\ud558\uc9c0\ub9cc \ud074\ub798\uc2a4 \uae30\ubc18\uc758 \ucef4\ud37c\ub10c\ud2b8\ub97c ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\ub85c \ub798\ud551\ud558\ub294\uac83\uc740 \uc801\uc808\ud558\uc9c0 \uc54a\ub2e4. \ud074\ub798\uc2a4 \uae30\ubc18\uc758 \ucef4\ud37c\ub10c\ud2b8\uc5d0\uc11c \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc774 \ud544\uc694\ud558\ub2e4\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"PureComponent"),"\ub97c \ud655\uc7a5\ud558\uc5ec \uc0ac\uc6a9\ud558\uac70\ub098, ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate()")," \uba54\uc11c\ub4dc\ub97c \uad6c\ud604\ud558\ub294 \uac83\uc774 \uc801\uc808\ud558\ub2e4."),(0,o.kt)("h3",{id:"31-\uc4f8\ubaa8\uc5c6\ub294-props-\ube44\uad50"},"3.1 \uc4f8\ubaa8\uc5c6\ub294 props \ube44\uad50"),(0,o.kt)("p",null,"\ub80c\ub354\ub9c1\ub420 \ub54c ",(0,o.kt)("inlineCode",{parentName:"p"},"props"),"\uac00 \ub2e4\ub978 \uacbd\uc6b0\uac00 \ub300\ubd80\ubd84\uc778 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0dd\uac01\ud574\ubcf4\uba74, \uba54\ubaa8\uc774\uc81c\uc774\uc158 \uae30\ubc95\uc758 \uc774\uc810\uc744 \uc5bb\uae30 \ud798\ub4e4\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"props"),"\uac00 \uc790\uc8fc \ubcc0\ud558\ub294 \ucef4\ud37c\ub10c\ud2b8\ub97c ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\ub85c \ub798\ud551\ud560\uc9c0\ub77c\ub3c4, React\ub294 \ub450 \uac00\uc9c0 \uc791\uc5c5\uc744 \ub9ac\ub80c\ub354\ub9c1 \ud560 \ub54c\ub9c8\ub2e4 \uc218\ud589\ud560 \uac83\uc774\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\uc774\uc804 ",(0,o.kt)("inlineCode",{parentName:"li"},"props"),"\uc640 \ub2e4\uc74c ",(0,o.kt)("inlineCode",{parentName:"li"},"props"),"\uc758 \ub3d9\ub4f1 \ube44\uad50\ub97c \uc704\ud574 \ube44\uad50 \ud568\uc218\ub97c \uc218\ud589\ud55c\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"\ube44\uad50 \ud568\uc218\ub294 \uac70\uc758 \ud56d\uc0c1 ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"\ub97c \ubc18\ud658\ud560 \uac83\uc774\uae30 \ub54c\ubb38\uc5d0, React\ub294 \uc774\uc804 \ub80c\ub354\ub9c1 \ub0b4\uc6a9\uacfc \ub2e4\uc74c \ub80c\ub354\ub9c1 \ub0b4\uc6a9\uc744 \ube44\uad50\ud560 \uac83\uc774\ub2e4.")),(0,o.kt)("p",null,"\ube44\uad50 \ud568\uc218\uc758 \uacb0\uacfc\ub294 \ub300\ubd80\ubd84 ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\ub97c \ubc18\ud658\ud558\uae30\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," \ube44\uad50\ub294 \ubd88\ud544\uc694\ud558\uac8c \ub41c\ub2e4."),(0,o.kt)("h2",{id:"4-reactmemo-\uc640-\ucf5c\ubc31-\ud568\uc218"},"4","."," React.memo() \uc640 \ucf5c\ubc31 \ud568\uc218"),(0,o.kt)("p",null,'\ud568\uc218 \uac1d\uccb4\ub294 "\uc77c\ubc18" \uac1d\uccb4\uc640 \ub3d9\uc77c\ud55c \ube44\uad50 \uc6d0\uce59\uc744 \ub530\ub978\ub2e4. \ud568\uc218 \uac1d\uccb4\ub294 \uc624\uc9c1 \uc790\uc2e0\uc5d0\uac8c\ub9cc \ub3d9\uc77c\ud558\ub2e4.'),(0,o.kt)("p",null,"\uba87\uac00\uc9c0 \ud568\uc218\ub97c \ube44\uad50\ud574\ubcf4\uc790."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function sumFactory() {\n  return (a, b) => a + b;\n}\n\nconst sum1 = sumFactory();\nconst sum2 = sumFactory();\n\nconsole.log(sum1 === sum2); // => false\nconsole.log(sum1 === sum1); // => true\nconsole.log(sum2 === sum2); // => true\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sumFactory()"),"\ub294 \ud329\ud1a0\ub9ac \ud568\uc218\uc774\ub2e4. \uc774 \ud568\uc218\ub294 2\uac00\uc9c0 \uc22b\uc790\ub97c \ub354\ud574\uc8fc\ub294 \ud654\uc0b4\ud45c \ud568\uc218\ub97c \ubc18\ud658\ud55c\ub2e4."),(0,o.kt)("p",null,"\ud568\uc218 ",(0,o.kt)("inlineCode",{parentName:"p"},"sum1"),"\uacfc ",(0,o.kt)("inlineCode",{parentName:"p"},"sum2"),"\ub294 \ud329\ud1a0\ub9ac\uc5d0 \uc758\ud574 \uc0dd\uc131\ub41c \ud568\uc218\ub2e4. \ub450 \ud568\uc218 \ubaa8\ub450 \ub450 \uc22b\uc790\ub97c \ub354\ud574\uc8fc\ub294 \ud568\uc218\uc774\ub2e4. \uadf8\ub7ec\ub098 ",(0,o.kt)("inlineCode",{parentName:"p"},"sum1"),"\uacfc ",(0,o.kt)("inlineCode",{parentName:"p"},"sum2"),"\ub294 \ub2e4\ub978 \ud568\uc218 \uac1d\uccb4\uc774\ub2e4."),(0,o.kt)("p",null,"\ubd80\ubaa8 \ucef4\ud37c\ub10c\ud2b8\uac00 \uc790\uc2dd \ucef4\ud37c\ub10c\ud2b8\uc758 \ucf5c\ubc31 \ud568\uc218\ub97c \uc815\uc758\ud55c\ub2e4\uba74, \uc0c8 \ud568\uc218\uac00 \uc554\uc2dc\uc801\uc73c\ub85c \uc0dd\uc131\ub420 \uc218 \uc788\ub2e4. \uc774\uac83\uc774 \uc5b4\ub5bb\uac8c \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc744 \ub9c9\ub294\uc9c0 \ubcf4\uace0, \uc218\uc815\ud574\ubcf4\uc790."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Logout")," \ucef4\ud37c\ub10c\ud2b8\ub294 \ucf5c\ubc31 ",(0,o.kt)("inlineCode",{parentName:"p"},"prop"),"\uc778 ",(0,o.kt)("inlineCode",{parentName:"p"},"onLogout"),"\uc744 \uac16\ub294\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function Logout({ username, onLogout }) {\n  return <div onClick={onLogout}>Logout {username}</div>;\n}\n\nconst MemoizedLogout = React.memo(Logout);\n")),(0,o.kt)("p",null,"\ud568\uc218\uc758 \ub3d9\ub4f1\uc131\uc774\ub780 \ud568\uc815 \ub54c\ubb38\uc5d0, \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc744 \uc801\uc6a9\ud560 \ub54c\ub294 \ucf5c\ubc31\uc744 \ubc1b\ub294 \ucef4\ud37c\ub10c\ud2b8 \uad00\ub9ac\uc5d0 \uc8fc\uc758\ud574\uc57c\ud55c\ub2e4. \ub9ac\ub80c\ub354\ub97c \ud560 \ub54c \ub9c8\ub2e4 \ubd80\ubaa8 \ud568\uc218\uac00 \ub2e4\ub978 \ucf5c\ubc31 \ud568\uc218\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \ub118\uae38 \uac00\ub2a5\uc131\uc774 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'function MyApp({ store, cookies }) {\n  return (\n    <div className="main">\n      <header>\n        <MemoizedLogout\n          username={store.username}\n          onLogout={() => cookies.clear()}\n        />\n      </header>\n      {store.content}\n    </div>\n  );\n}\n')),(0,o.kt)("p",null,"\ub3d9\uc77c\ud55c ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," \uac12\uc774 \uc804\ub2ec\ub418\ub354\ub77c\uace0, ",(0,o.kt)("inlineCode",{parentName:"p"},"MemoizedLogout"),"\uc740 \uc0c8\ub85c\uc6b4 ",(0,o.kt)("inlineCode",{parentName:"p"},"onLogout")," \ucf5c\ubc31 \ub54c\ubb38\uc5d0 \ub9ac\ub80c\ub354\ub9c1\uc744 \ud558\uac8c \ub41c\ub2e4."),(0,o.kt)("p",null,"\uba54\ubaa8\uc774\uc81c\uc774\uc158\uc774 \uc911\ub2e8\ub418\uac8c \ub418\ub294 \uac83\uc774\ub2e4."),(0,o.kt)("p",null,"\uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub824\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"onLogout")," prop\uc758 \uac12\uc744 \ub9e4\ubc88 \ub3d9\uc77c\ud55c \ucf5c\ubc31 \uc778\uc2a4\ud134\uc2a4\ub85c \uc124\uc815\ud574\uc57c\ub9cc \ud55c\ub2e4.",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usecallback"},"useCallback()"),"\uc744 \uc774\uc6a9\ud574\uc11c \ucf5c\ubc31 \uc778\uc2a4\ud134\uc2a4\ub97c \ubcf4\uc874\uc2dc\ucf1c\ubcf4\uc790."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const MemoizedLogout = React.memo(Logout);\n\nfunction MyApp({ store, cookies }) {\n  const onLogout = useCallback(() => {\n    cookies.clear();\n  }, []);\n  return (\n    <div className="main">\n      <header>\n        <MemoizedLogout username={store.username} onLogout={onLogout} />\n      </header>\n      {store.content}\n    </div>\n  );\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useCallback(() => { cookies.clear() }, [])")," \ub294 \ud56d\uc0c1 \uac19\uc740 \ud568\uc218 \uc778\uc2a4\ud134\uc2a4\ub97c \ubc18\ud658\ud55c\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"MemoizedLogout"),"\uc758 \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud558\ub3c4\ub85d \uc218\uc815\ub418\uc5c8\ub2e4."),(0,o.kt)("h2",{id:"5-reactmemo-\uc740-\uc131\ub2a5-\uac1c\uc120\uc758-\ub3c4\uad6c\ub2e4"},"5","."," React.memo() \uc740 \uc131\ub2a5 \uac1c\uc120\uc758 \ub3c4\uad6c\ub2e4"),(0,o.kt)("p",null,"\uc5c4\ubc00\ud788 \ub9d0\ud558\uba74, React\uc5d0\uc11c\ub294 \uc131\ub2a5 \uac1c\uc120\uc744 \uc704\ud55c \ud558\ub098\uc758 \ub3c4\uad6c\ub85c \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc744 \uc0ac\uc6a9\ud55c\ub2e4."),(0,o.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uc0c1\ud669\uc5d0\uc11c React\ub294 \uba54\ubaa8\uc774\uc9d5 \ub41c \ucef4\ud37c\ub10c\ud2b8\uc758 \ub9ac\ub80c\ub354\ub9c1\uc744 \ud53c\ud560 \uc218 \uc788\uc9c0\ub9cc, \ub80c\ub354\ub9c1\uc744 \ub9c9\uae30 \uc704\ud574 \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc5d0 \uc758\uc874\ud558\uba74 \uc548\ub41c\ub2e4."),(0,o.kt)("h2",{id:"6-\uacb0\ub860"},"6","."," \uacb0\ub860"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\ub294 \ud568\uc218\ud615 \ucef4\ud37c\ub10c\ud2b8\uc5d0\uc11c\ub3c4 \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc758 \uc7a5\uc810\uc744 \uc5bb\uac8c \ud574 \uc8fc\ub294 \ud6cc\ub96d\ud55c \ub3c4\uad6c\ub2e4. \uc62c\ubc14\ub974\uac8c \uc801\uc6a9 \ub41c\ub2e4\uba74 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc740 \ub3d9\uc77c\ud55c prop\uc5d0 \ub300\ud574 \ub9ac\ub80c\ub354\ub9c1\uc744 \ud558\ub294 \uac83\uc744 \ub9c9\uc744 \uc218 \uc788\ub2e4."),(0,o.kt)("p",null,"\ub2e4\ub9cc, \ucf5c\ubc31 \ud568\uc218\ub97c prop\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \ucef4\ud37c\ub10c\ud2b8\uc5d0\uc11c \uba54\ubaa8\uc774\uc9d5\uc744 \ud560 \ub54c \uc8fc\uc758\ud558\ub77c. \uadf8\ub9ac\uace0 \uac19\uc740 \ub80c\ub354\ub9c1\uc744 \ud560 \ub54c \uc774\uc804\uacfc \ub3d9\uc77c\ud55c \ucf5c\ubc31 \ud568\uc218 \uc778\uc2a4\ud134\uc2a4\ub97c \ub118\uae30\ub294\uc9c0 \ud655\uc2e4\ud788 \ud558\ub77c."),(0,o.kt)("p",null,"\uadf8\ub9ac\uace0 \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc758 \uc131\ub2a5\uc0c1 \uc774\uc810\uc744 \uce21\uc815\ud558\uae30 \uc704\ud574 ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab"},"profiling"),"\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \uc78a\uc9c0 \ub9d0\uc544\ub77c."))}u.isMDXComponent=!0},64195:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/when-to-use-react-memo-infographic-6480d04eadc3a2836145cca09b4815e0.avif"}}]);