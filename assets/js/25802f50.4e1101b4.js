"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[3144],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=l,d=u["".concat(i,".").concat(m)]||u[m]||g[m]||a;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:l,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19091:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const a={title:"pip - locale.Error: unsupported locale setting",date:new Date("2019-05-15T11:49:45.000Z"),tags:["python","pip","linux"]},o=void 0,p={permalink:"/blog/post/pip-locale-Error-unsupported-locale-setting",source:"@site/blog/pip-locale-Error-unsupported-locale-setting.mdx",title:"pip - locale.Error: unsupported locale setting",description:"\uc0c1\ud669",date:"2019-05-15T11:49:45.000Z",formattedDate:"2019\ub144 5\uc6d4 15\uc77c",tags:[{label:"python",permalink:"/blog/post/tags/python"},{label:"pip",permalink:"/blog/post/tags/pip"},{label:"linux",permalink:"/blog/post/tags/linux"}],readingTime:.6,hasTruncateMarker:!1,authors:[],frontMatter:{title:"pip - locale.Error: unsupported locale setting",date:"2019-05-15T11:49:45.000Z",tags:["python","pip","linux"]},prevItem:{title:"Vagrant \uc5d0\uc11c \uba54\ubaa8\ub9ac CPU \ucf54\uc5b4\uc218 \uc870\uc815",permalink:"/blog/post/Vagrant-\uc5d0\uc11c-\uba54\ubaa8\ub9ac-CPU-\ucf54\uc5b4\uc218-\uc870\uc815"},nextItem:{title:"AUR(yaourt) \uc124\uce58 \uc808\ucc28 \ubc0f debtap",permalink:"/blog/post/AUR-yaourt-\uc124\uce58-\uc808\ucc28"}},i={authorsImageUrls:[]},c=[{value:"\uc0c1\ud669",id:"\uc0c1\ud669",level:2},{value:"\ud574\uacb0",id:"\ud574\uacb0",level:2}],s={toc:c},u="wrapper";function g(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\uc0c1\ud669"},"\uc0c1\ud669"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"sudo pip install ansible \uc785\ub825\uc2dc \ub2e4\uc74c\uacfc \uac19\uc740 \uc5d0\ub7ec\ubc1c\uc0dd")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'vagrant@vagrant:~$ sudo pip install ansible\nTraceback (most recent call last):\n  File "/usr/bin/pip", line 11, in <module>\n    sys.exit(main())\n  File "/usr/lib/python2.7/dist-packages/pip/__init__.py", line 215, in main\n    locale.setlocale(locale.LC_ALL, \'\')\n  File "/usr/lib/python2.7/locale.py", line 581, in setlocale\n    return _setlocale(category, locale)\nlocale.Error: unsupported locale setting\n')),(0,l.kt)("h2",{id:"\ud574\uacb0"},"\ud574\uacb0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud558\uc5ec \ud574\uacb0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'vagrant@vagrant:~$ export LC_ALL="en_US.UTF-8"\nvagrant@vagrant:~$ export LC_CTYPE="en_US.UTF-8"\nvagrant@vagrant:~$ sudo dpkg-reconfigure locales\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\ub2e4\uc74c \ucc3d\uc774 \ub098\uc624\uba74 "en_US.UTF-8 UTF-8" \uc774 \uccb4\ud06c\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud6c4\uc5d0 \ud0ed\ud0a4\ub85c OK \ud56d\ubaa9\uc73c\ub85c \uc774\ub3d9\ud6c4 \uc5d4\ud130')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:r(15846).Z,width:"955",height:"1036"})))}g.isMDXComponent=!0},15846:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/screen_shot-1e962efb6b565e4517d5c4dcf187b7d1.png"}}]);