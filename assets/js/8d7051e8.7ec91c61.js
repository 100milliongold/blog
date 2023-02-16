"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[7455],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=d(a),k=n,s=u["".concat(p,".").concat(k)]||u[k]||c[k]||l;return a?r.createElement(s,o(o({ref:e},m),{},{components:a})):r.createElement(s,o({ref:e},m))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},91262:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var r=a(67294),n=a(72389);function l(t){let{children:e,fallback:a}=t;return(0,n.Z)()?r.createElement(r.Fragment,null,e?.()):a??null}},73973:(t,e,a)=>{var r=a(91262),n=a(67294);function l(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=l(r),i=l(n),p=function(){return p=Object.assign||function(t){for(var e,a=1,r=arguments.length;a<r;a++)for(var n in e=arguments[a])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},p.apply(this,arguments)};!function(t,e){void 0===e&&(e={});var a=e.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===a&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}(".docusaurus-plugin-drawio {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  text-align: center;\n  overflow-x: auto;\n}\n\nhtml[data-theme='dark'] .docusaurus-plugin-drawio {\n  background-color: #333;\n  color: #fff;\n}\n\n.docusaurus-plugin-drawio > div {\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid transparent;\n  min-width: 180px;\n}\n");var d=function(t){var e=t.content,a=t.maxHeight,r=t.autoFit,l=t.autoCrop,o=t.autoOrigin,d=t.allowZoomOut,m=t.allowZoomIn,u=t.checkVisibleState,c=t.toolbarPosition,k=t.toolbarNohide,s=t.toolbarButtons,f=function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(a[r[n]]=t[r[n]])}return a}(t,["content","maxHeight","autoFit","autoCrop","autoOrigin","allowZoomOut","allowZoomIn","checkVisibleState","toolbarPosition","toolbarNohide","toolbarButtons"]),g=n.useState("loading..."),b=g[0],N=g[1],y=n.useRef(null),h=window.GraphViewer;return n.useEffect((function(){if(h)if(e){var t=p({editable:"_blank",highlight:"#0000ff",nav:!0,resize:!0,toolbar:"zoom lightbox",xml:e,"max-height":a,"auto-fit":r,"auto-crop":l,"auto-origin":o,"allow-zoom-out":d,"allow-zoom-in":m,"check-visible-state":u,"toolbar-position":c,"toolbar-nohide":k,"toolbar-buttons":s},f),n=JSON.stringify(t);y.current.dataset.mxgraph=n,N(""),setTimeout((function(){h.createViewerForElement(y.current)}),0)}else N("drawio file is empty");else N("GraphViewer is not loaded")}),[]),i.default.createElement("div",{className:"docusaurus-plugin-drawio"},i.default.createElement("div",{className:"docusaurus-plugin-drawio__content",ref:y},b))},m=n.memo((function(t){return i.default.createElement(o.default,{fallback:i.default.createElement(i.default.Fragment,null,"loading...")},(function(){return i.default.createElement(d,p({},t))}))}));t.exports=m},11747:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),l=a(73973),o=a.n(l),i=a(63302);const p={title:"DataBase \uac1c\uc694 5",date:new Date("2023-02-16T01:04:00.000Z"),authors:["100milliongold"],tags:["database","\uc815\ubcf4\uad00\ub9ac","DB-Key"]},d=void 0,m={permalink:"/blog/post/2023/02/16/DB\uac1c\uc6945",source:"@site/blog/2023-02-16-DB\uac1c\uc6945/index.mdx",title:"DataBase \uac1c\uc694 5",description:"\ud0a4 (Key)",date:"2023-02-16T01:04:00.000Z",formattedDate:"2023\ub144 2\uc6d4 16\uc77c",tags:[{label:"database",permalink:"/blog/post/tags/database"},{label:"\uc815\ubcf4\uad00\ub9ac",permalink:"/blog/post/tags/\uc815\ubcf4\uad00\ub9ac"},{label:"DB-Key",permalink:"/blog/post/tags/db-key"}],readingTime:4.23,hasTruncateMarker:!1,authors:[{name:"100milliongold",title:"developer",url:"https://sebastienlorber.com",imageURL:"https://avatars.githubusercontent.com/u/13652711?s=400&u=0a1092b8b1170f71ae883d098f8721c12ce39e9e&v=4",key:"100milliongold"}],frontMatter:{title:"DataBase \uac1c\uc694 5",date:"2023-02-16T01:04:00.000Z",authors:["100milliongold"],tags:["database","\uc815\ubcf4\uad00\ub9ac","DB-Key"]},nextItem:{title:"DataBase \uac1c\uc694 4",permalink:"/blog/post/2023/02/15/DB\uac1c\uc6944"}},u={authorsImageUrls:[void 0]},c=[{value:"\ud0a4 (Key)",id:"\ud0a4-key",level:2},{value:"\uc2a4\ud0a4\ub9c8\uc5d0 \ub300\ud55c Key \uacb0\uc815 \ubc0f \ub3c4\ucd9c \uacfc\uc815",id:"\uc2a4\ud0a4\ub9c8\uc5d0-\ub300\ud55c-key-\uacb0\uc815-\ubc0f-\ub3c4\ucd9c-\uacfc\uc815",level:2},{value:"\ub370\uc774\ud130 \ubb34\uacb0\uc131",id:"\ub370\uc774\ud130-\ubb34\uacb0\uc131",level:2},{value:"\ub370\uc774\ud130 \ubb34\uacb0\uc131\uc758 \uc815\uc758",id:"\ub370\uc774\ud130-\ubb34\uacb0\uc131\uc758-\uc815\uc758",level:3},{value:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ubb34\uacb0\uc131\uc758 \uc885\ub958",id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4-\ubb34\uacb0\uc131\uc758-\uc885\ub958",level:3},{value:"\ub370\uc774\ud130 \ubb34\uacb0\uc131 \ubcf4\uc7a5 \ubc29\ubc95",id:"\ub370\uc774\ud130-\ubb34\uacb0\uc131-\ubcf4\uc7a5-\ubc29\ubc95",level:3},{value:"\ub370\uc774\ud130 \ubb34\uacb0\uc131 \ubcf4\uc7a5 \ubc29\ubc95\uac04\uc758 \uc7a5\ub2e8\uc810 \ube44\uad50",id:"\ub370\uc774\ud130-\ubb34\uacb0\uc131-\ubcf4\uc7a5-\ubc29\ubc95\uac04\uc758-\uc7a5\ub2e8\uc810-\ube44\uad50",level:3}],k={toc:c},s="wrapper";function f(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\ud0a4-key"},"\ud0a4 (Key)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud0a4\uc758 \uc815\uc758"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ub9b4\ub808\uc774\uc158\uc758 \ud29c\ud50c\uc744 \uc720\uc77c\ud558\uac8c \uc2dd\ubcc4\ud560\uc218 \uc788\ub294 \uc18d\uc131\ub4e4\uc758 \uc9d1\ud569"),(0,n.kt)("li",{parentName:"ul"},"\uc720\uc77c\ud558\uac8c \ud0a4\ub97c \uaebc\ub0bc\uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud0a4\uc758 \ud2b9\uc131"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\uc720\uc77c\uc131")),": \ub9b4\ub808\uc774\uc158 \ub0b4\uc5d0\uc11c \uc720\uc77c"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\ucd5c\uc18c\uc131")),": \ud0a4\uac00 \ub458 \uc774\uc0c1\uc758 \uc18d\uc131\uc73c\ub85c \uad6c\uc131 \ub418\uc5c8\uc744 \uacbd\uc6b0 \ud558\ub098\uc758 \uc18d\uc131\uc744 \uc81c\uac70\ud558\uba74 \uc720\uc77c\uc131 \ud30c\uad34",(0,n.kt)("br",null)," -> \ud0a4\ub294 \ubaa8\ub4e0 \ud29c\ud50c\uc744 \uc720\uc77c\ud558\uac8c \uc2dd\ubcc4\ud560 \uc218 \uc788\ub294 \ucd5c\uc18c\uc758 \uc18d\uc131\ub4e4\ub85c \uad6c\uc131"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud0a4\uc758 \uc720\ud615 (\uc2dd\ubcc4\uc790)"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\uac1c\ub150"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\uc608\uc2dc"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\uc288\ud37c\ud0a4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\uc720\uc77c\uc131\uc740 \uc788\uc73c\ub098 \ucd5c\uc18c\uc131\uc740 \uc5c6\uc74c"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[\ud559\ubc88,\uc774\ub984,\ud559\uacfc]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\ud6c4\ubcf4\ud0a4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\uc720\uc77c\uc131\uacfc \ucd5c\uc18c\uc131 \ub9cc\uc871"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[\ud559\ubc88]",", ","[\uc774\ub984, \ud559\uacfc]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\uae30\ubcf8\ud0a4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\uc5ec\ub7ec \ud6c4\ubcf4\ud0a4 \uc911 \ud558\ub098 \uc120\uc810"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[\ud559\ubc88]",",","[\uc774\ub984, \ud559\uacfc]"," \uc900 \uc120\ud0dd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\ub300\uccb4\ud0a4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ud6c4\ubcf4\ud0a4\uc758 \uae30\ubcf8\ud0a4 \uc774\uc678\uc5d0 \ub0a8\uc740 \ud0a4 ",(0,n.kt)("br",null),"\uae30\ubcf8\ud0a4 \ub300\uccb4 \uac00\ub219"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\uae30\ubcf8\ud0a4 - ","[\ud559\ubc88]",(0,n.kt)("br",null),"\ub300\uccb4\uae30 - ","[\uc774\ub984, \ud559\uacfc]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\uc678\ub798\ud0a4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\uc5b4\ub290 \ud55c \ub9b4\ub808\uc774\uc158 \uc18d\uc131\uc758 \uc9d1\ud559\uc774 \ub2e4\ub978 \ub9b4\ub808\uc774\uc158\uc758 \uae30\ubcf8\ud0a4\ub85c \uc0ac\uc6a9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[\ud559\uacfc\ucf54\ub4dc]",", ","[\uc774\ub984, \ud655\uac00\ucf54\ub3c4, \ud559\ub144]","\uc5d0\uc11c \ud559\uacfc\ucf54\ub4dc"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DB \uc124\uacc4\uc2dc \ucd5c\ucd08\ub294 \ud0a4\ub97c \uc124\uacc4\ud558\ub294 \uac83\uc774\ub2e4"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\uc2a4\ud0a4\ub9c8\uc5d0-\ub300\ud55c-key-\uacb0\uc815-\ubc0f-\ub3c4\ucd9c-\uacfc\uc815"},"\uc2a4\ud0a4\ub9c8\uc5d0 \ub300\ud55c Key \uacb0\uc815 \ubc0f \ub3c4\ucd9c \uacfc\uc815"),(0,n.kt)(o(),{content:i.Z,mdxType:"Drawio"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\ub370\uc774\ud130-\ubb34\uacb0\uc131"},"\ub370\uc774\ud130 \ubb34\uacb0\uc131"),(0,n.kt)("h3",{id:"\ub370\uc774\ud130-\ubb34\uacb0\uc131\uc758-\uc815\uc758"},"\ub370\uc774\ud130 \ubb34\uacb0\uc131\uc758 \uc815\uc758"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("span",{style:{color:"blue"}},"\ubb34\ud6a8 \uac31\uc2e0\uc73c\ub85c \ubd80\ud130 \ub370\uc774\ud130\ub97c \ubcf4\ud638")," \ud558\uc5ec",(0,n.kt)("span",{style:{fontWeight:"bold"}},"\uc815\ud655\uc131,\uc720\ud6a8\uc131, \uc77c\uad00\uc131, \uc548\uc815\uc131"),"\uc744 \uc720\uc9c0\ud558\uc5ec\ub294 \uc131\uc9c8 : \uc815\uc720\uc77c\uc548")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4-\ubb34\uacb0\uc131\uc758-\uc885\ub958"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ubb34\uacb0\uc131\uc758 \uc885\ub958"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\uc885\ub958"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\uad00\ub828\ud0a4"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\uac8c\uccb4 \ubb34\uacb0\uc131"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\uae30\ubcf8\ud0a4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"- \ubaa8\ub4e0 \uac8c\uccb4\ub294 \uc2dd\ubcc4\uc790\ub97c \uc815\uc758\ud558\uace0 \uadf8\uc2e4\ubcc4\uc790 \uac12\uc740 NULL \uac12\uc774 \uc5c6\uc774 \uac8c\uccb4 \ub0b4\uc5d0\uc11c \uc720\uc77c\ud55c \uac12\uc774\uc5b4\uc57c \ud568")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\ucc38\uc870 \ubb34\uacb0\uc131"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\uc678\ub798\ud0a4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"- \uc678\ub798\ud0a4 \uac12\uc740 \ud0a4\ubcf8\ud0a4\ub85c \uc0ac\uc6a9\ub41c Relation \uc758 \uae30\ubcf8\ud0a4 \uac12\uc774\uac70\ub098 \ub110(NULL) \uac12\uc77c \uac83")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\uc18d\uc131 \ubb34\uacb0\uc131"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\uceec\ub7fc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"- \uc9c0\uc815\ub41c \ub370\uc774\ud130 \ud615\uc2dd \ub9cc\uc871, CHAR, DATE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\uc0ac\uc6a9\uc790 \uc815\uc758"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\ub370\uc774\ud130"),(0,n.kt)("td",{parentName:"tr",align:"left"},"- \uc0ac\uc6a9\uc790 \uc5c5\ubb34 \uaddc\uce59(Business Rule) \uc815\uc758",(0,n.kt)("br",null),"- CHECK, DEFAULT, \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ud2b8\ub9ac\uac70 \ub4f1")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\ub370\uc774\ud130-\ubb34\uacb0\uc131-\ubcf4\uc7a5-\ubc29\ubc95"},"\ub370\uc774\ud130 \ubb34\uacb0\uc131 \ubcf4\uc7a5 \ubc29\ubc95"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\ubd84\ub958"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ub370\uc774\ud130\ub97c \uc800\uc791\ud558\ub294 \ud504\ub85c\uadf8\ub7a8 \ub0b4\uc5d0 \ubb34\uacb0\uc131 \uc800\uac74\uc744 \uac80\uc99d\ud558\ub294 \ucf54\ub4dc\ub97c \ucd94\uac00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\ud2b8\ub9ac\uac70"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ud2b8\ub9ac\uac70(Trigger) \uc774\ubca4\ud2b8\uc2dc Procedure \ub97c \uc2e4\ud589\ud558\uc5ec \ubb34\uacb0\uc131 \uc870\uac74 \uc2e4\ud589")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\uc81c\uc57d\uc870\uac74"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ub370\uc774\ud130 \ubca0\uc774\uc2a4 \uc81c\uc57d \uc870\uac74 \uae30\ub2a5\uc744 \uc120\uc5b8\ud558\uace0 \ubb34\uacb0\uc131\uc744 \uc720\uc9c0")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\ub370\uc774\ud130-\ubb34\uacb0\uc131-\ubcf4\uc7a5-\ubc29\ubc95\uac04\uc758-\uc7a5\ub2e8\uc810-\ube44\uad50"},"\ub370\uc774\ud130 \ubb34\uacb0\uc131 \ubcf4\uc7a5 \ubc29\ubc95\uac04\uc758 \uc7a5\ub2e8\uc810 \ube44\uad50"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\ubd84\ub958"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\uc7a5\uc810"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\ub2e8\uc810"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8 \ucf54\ub4dc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"- \uc0ac\uc6a9\uc790 \uc815\uc758 \uac19\uc740 \ubcf5\uc7a1\ud55c \ubb34\uacb0\uc131 \uc870\uac74\uc758 \uad6c\ud604 \uac00\ub2a5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"- \uc18c\uc2a4 \ucf54\ub4dc\uc5d0 \ubd84\uc0b0\ub418\uc5b4 \uad00\ub9ac\uac00 \uc5b4\ub824\uc6c0 ",(0,n.kt)("br",null)," - \uac1c\ubcc4\uc801 \uad00\ub9ac\ub85c \uc801\uc815\uc131 \uac80\ud1a0\uac00 \uc5b4\ub824\uc6c0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ud2b8\ub9ac\uac70"),(0,n.kt)("td",{parentName:"tr",align:"left"},"- \ud1b5\ud569 \uad00\ub9ac\uac00 \uac00\ub2a5\ud568 ",(0,n.kt)("br",null)," - \ubcf5\uc7a1\ud55c \uc694\uac74 \uad6c\ud604 \uac00\ub2a5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\uc6b4\uc601 \uc911 \ubcc0\uacbd\uc774 \uc5b4\ub824\uc6c0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\uc81c\uc57d\uc870\uac74"),(0,n.kt)("td",{parentName:"tr",align:"left"},"- \ud1b5\ud569\uad00\ub9ac\uac00 \uac00\ub2a5\ud568 ",(0,n.kt)("br",null)," - \uac04\ub2e8\ud55c \uc120\uc5b8\uc73c\ub85c \uad6c\ud604 \uac00\ub2a5",(0,n.kt)("br",null)," - \ubcc0\uacbd\uc774 \uc6a9\uc774\ud568",(0,n.kt)("br",null)," - \uc6d0\uce59\uc801\uc73c\ub85c \uc624\ub958 \ub370\uc774\ud130 \ubc1c\uc0dd \uc5b5\uc81c"),(0,n.kt)("td",{parentName:"tr",align:"left"},"- \ubcf5\uc7a1\ud55c \uc81c\uc57d \uc870\uac74 \uad6c\ud604\uc774 \ubd88\uac00\ub2a5\ud568",(0,n.kt)("br",null)," - \uc608\uc678\uc801\uc778 \ucc98\ub9ac\uac00 \ubd88\uac00\ub2a5")))))}f.isMDXComponent=!0},63302:(t,e,a)=>{a.d(e,{Z:()=>r});const r='<mxfile host="app.diagrams.net" modified="2023-02-15T16:31:00.300Z" agent="5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36" etag="cRAfHHI0wldvwaOX2G5s" version="20.8.20" type="device"><diagram name="Page-1" id="12e1b939-464a-85fe-373e-61e167be1490">5VjLdpswEP0aLZODEGBYGuyki+Y0PVmkWcqgYE4xckGOcb++EpLMyzZ5mDRNvbE0Go00c0eXkQAKVuV1jtfLGxqRFJhGVAI0A6YJLWTxPyHZSYlrTqQgzpNIKdWCu+Q3UUJDSTdJRIqWIqM0Zcm6LQxplpGQtWQ4z+m2rfZI0/aqaxyTnuAuxKmWXtq1/D6J2FLJoePVA19IEi+Z9tCRAwsc/oxzusnUihnNiBxZYW1GeVkscUS3DRGaAxTklDLZWpUBSUVgdczkvKsjo3tXcpKx50z4Zt3eRCm8v6Z39HthXzztouWFKa084XSjgqE2y3Y6Onzfa9EskixOyVTEGyB/u0wYuVvjUAxteV5w2ZKtUt6DvFnBokNpXNq2lin0jUsE2z+uoPZCckbKo07Cfeh4PhK6IizfcRU1wYYq9VQqIk9Ff1vD6tpIypYNRC0NE1bJFO9t1zHlDRXWF4QYHQixk/Jl/UfKnWrG2vm1oXrgoqgiNeUKprUuq/Docd6Kq//5FPgm8A0wD8DUAJ4tGt4cCK+50AfuFXAtIfQd4AV6Ye6HXFuZOQY5KcVwRDeLakRgVOU6Ef4aw1lwDkBtowWobfYBhcjoAwqdsQC1xgQ0AO4UuC6Yz4A7A35QNUwwtfQai7ylbAnc9+j3df49xCfowyFuj4n4DHh+dUh94CPgW/8f4h78cIg7I5O2W5G2RNw9iXiP4T8D4tDwPhzkk+FSiGSRqn9mYYqLIgnbkWmHUYChyh3T4n1SJuyHLIdU70FpivasbHZ2upNx1xqTRPehOVZPq3p6ntw6iXqFbwch7h7d5CEZ/twxnMeEDZFkH/GcpJglT+19HAJPTb2lSXXAVKa4HW6wrA7+cv9qVrP87RjqkkzPkHSwZ4gDjncNtbVQKE5s2G2voyvQOjWlxTpR98F6fe66/dwVNZ8taj7xzXCAG6iPhw+r0pB/dTxdL84EB/VynefOV7zgVz2e14TzGpZ0YXQK/TSJM3EeeF6RnAsELyT8bjVVA6skisTE3nEAzTudMg72t6UBejl+gt+QgW+iDwhH548jXAAHuOAw78CTvHNG/kDP5A9rFP5wOveHPZ+8lD8mQ4bOxB8To7OO8w78AQ+8AwhmCFSt6cmrSJNAqrrElXWJIxQ+AYHAI1XLOzHIoZeCd6hATjPBa1nnjAxiP5NBnFEYBBrw8Il8MYVAOGTpTBwCDedvkMiBhxHBHRPgyUutX91jdEM9UAUVifByBOpiRVLMJ2ATNA6b8G79aizBq9/l0fwP</diagram></mxfile>'}}]);