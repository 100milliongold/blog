"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[1875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=l,k=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={title:"Lombok\uc744 \uc774\uc6a9\ud574 Builder \ud328\ud134\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\uc790.",date:new Date("2022-05-02T00:00:00.000Z"),tags:["java"],authors:["100milliongold"]},i=void 0,o={permalink:"/blog/post/Lombok\uc744-\uc774\uc6a9\ud574-Builder-\ud328\ud134\uc744-\ub9cc\ub4e4\uc5b4\ubcf4\uc790",source:"@site/blog/Lombok\uc744-\uc774\uc6a9\ud574-Builder-\ud328\ud134\uc744-\ub9cc\ub4e4\uc5b4\ubcf4\uc790.mdx",title:"Lombok\uc744 \uc774\uc6a9\ud574 Builder \ud328\ud134\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\uc790.",description:"Builder \ud328\ud134\uc774\ub780?",date:"2022-05-02T00:00:00.000Z",formattedDate:"2022\ub144 5\uc6d4 2\uc77c",tags:[{label:"java",permalink:"/blog/post/tags/java"}],readingTime:5.8,hasTruncateMarker:!1,authors:[{name:"100milliongold",title:"developer",url:"https://sebastienlorber.com",imageURL:"https://avatars.githubusercontent.com/u/13652711?s=400&u=0a1092b8b1170f71ae883d098f8721c12ce39e9e&v=4",key:"100milliongold"}],frontMatter:{title:"Lombok\uc744 \uc774\uc6a9\ud574 Builder \ud328\ud134\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\uc790.",date:"2022-05-02T00:00:00.000Z",tags:["java"],authors:["100milliongold"]},prevItem:{title:"DTO\ub97c \uc774\ub108 \ud074\ub798\uc2a4\ub85c \uad00\ub9ac\ud558\uae30",permalink:"/blog/post/DTO\ub97c-\uc774\ub108-\ud074\ub798\uc2a4\ub85c-\uad00\ub9ac\ud558\uae30"},nextItem:{title:"networkpolicy \uc0dd\uc131",permalink:"/blog/post/networkpolicy-\uc0dd\uc131"}},u={authorsImageUrls:[void 0]},c=[],p={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Builder \ud328\ud134\uc774\ub780?\nEffective Java \uaddc\uce59 2 - \uc870\uc288\uc544 \ube14\ub85c\uadf8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\uc0dd\uc131\uc790\uc5d0 \uc778\uc790\uac00 \ub9ce\uc744 \ub54c\ub294 \ube4c\ub354 \ud328\ud134\uc744 \uace0\ub824\ud558\ub77c\n")),(0,l.kt)("p",null,"\ube4c\ub354 \ud328\ud134(Builder pattern) \uc774\ub780 \ubcf5\ud569 \uac1d\uccb4\uc758 \uc0dd\uc131 \uacfc\uc815\uacfc \ud45c\ud604 \ubc29\ubc95\uc744 \ubd84\ub9ac\ud558\uc5ec \ub3d9\uc77c\ud55c \uc0dd\uc131 \uc808\ucc28\uc5d0\uc11c \uc11c\ub85c \ub2e4\ub978 \ud45c\ud604 \uacb0\uacfc\ub97c \ub9cc\ub4e4 \uc218 \uc788\uac8c \ud558\ub294 \ud328\ud134\uc774\ub2e4. (\ucd9c\ucc98: \uc704\ud0a4\ubc31\uacfc)"),(0,l.kt)("p",null,"\ub09c \uc0dd\uc131\uc790\uac00 \ub9ce\uc544\uc9c0\uba74 \ube4c\ub354 \ud328\ud134\uc744 \ub9cc\ub4dc\ub294 \ud3b8\uc778\ub370, \uac1c\ubc1c\uc790 \uc131\ud5a5\uc5d0 \ub530\ub77c \ub2e4\ub97c\uc218\ub3c4 \uc788\uad6c\ub098\ub97c \ub290\uaf08\ub2e4."),(0,l.kt)("p",null,"\ube4c\ub354\ud328\ud134\uc744 \ud65c\uc6a9\ud558\uba74 \uc5b4\ub5a4 \ud544\ub4dc\uc5d0 \uc5b4\ub5a4 \uc778\uc790\ub97c \ub123\uc5b4\uc92c\ub294\uc9c0 \uba85\ud655\ud788 \uc54c \uc218 \uc788\uace0, \ub123\uc5b4\uc904 \ud544\uc694 \uc5c6\ub294 \ud544\ub4dc(null)\ub294 \uad73\uc774 \uc120\uc5b8\ud560 \ud544\uc694 \uc5c6\uc73c\ub2c8 \uc88b\ub2e4\uace0 \uc0dd\uac01\ud588\ub2e4. \uadfc\ub370 \ub2e4\ub978 \ubd84\uc740 \uc5b4\ub5a4 \ud544\ub4dc\uc5d0 null\uc774 \ub4e4\uc5b4\uac04\ub2e4\ub294\uac78 \uba85\ud655\ud788 \ubcfc \uc218 \uc788\ub294 \uc810 \ub54c\ubb38\uc5d0 \uc0dd\uc131\uc790\ub97c \ud1b5\ud574 \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uc2dc\ub294 \ubc29\ubc95\uc744 \ud0dd\ud588\ub2e4\uace0 \ud558\uc168\ub2e4."),(0,l.kt)("p",null,"intelliJ\ub294 \ub4e4\uc5b4\uac08 \ud544\ub4dc\uc758 \uac12\uc744 \ud45c\uc2dc\ud574\uc8fc\ub294 \uae30\ub2a5\uc774 \uc788\uc5b4\uc11c \uc0dd\uc131\uc790\ub97c \ud1b5\ud574 \uac1d\uccb4\ub97c \uc0dd\uc131\ud574\ub3c4 \uc5b4\ub5a4 \ud544\ub4dc\ub97c \ub123\uc5b4\uc918\uc57c\ud558\ub294\uc9c0 \ubcf4\uc778\ub2e4. \uccab \ud68c\uc0ac\uc5d0\uc11c\ub294 STS\ub97c \uc37c\uae30 \ub54c\ubb38\uc5d0 intelliJ\uc758 \ub2e4\uc591\ud55c \uae30\ub2a5\uc801\uc778 \ud61c\ud0dd\uc744 \ub204\ub9ac\uc9c0 \ubabb\ud588\uae30\ub3c4 \ud574\uc11c \ube4c\ub354 \ud328\ud134\uc774 \uc720\uc6a9\ud588\ub2e4."),(0,l.kt)("p",null,"\ucf54\ud2c0\ub9b0\uc744 \uc0ac\uc6a9\ud560 \uacbd\uc6b0\uc5d0\ub294.... \uad73\uc774 \ube4c\ub354 \ud328\ud134\uc744 \uc4f8 \ud544\uc694\uac00 \uc5c6\uc744 \uac83 \uac19\ub2e4 \uc2f6\uc5c8\ub358 \uc774\uc720\uac00 \uc0dd\uc131\uc790 \uc778\uc790\uc5d0 \ud544\ub4dc \uba85\ub3c4 \ud568\uaed8 \ud45c\uae30\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'    // \uc608\uc2dc\n    fun foo() {\n        val member = Member(name = "zorba", job = "developer")\n    }\n')),(0,l.kt)("p",null,"\ud558\uc9c0\ub9cc, java\ub97c \uc4f8 \ub54c\ub294 \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 \ub514\uc790\uc778 \ud328\ud134\uc774\ub2e4."),(0,l.kt)("p",null,"\ube4c\ub354 \ud328\ud134\uc758 \uc7a5\uc810"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uac1d\uccb4\ub4e4\ub9c8\ub2e4 \ub4e4\uc5b4\uac00\uc57c\ud560 \uc778\uc790\uac00 \uac01\uac01 \ub2e4\ub97c \ub54c \uc720\uc5f0\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\ubb34\uc870\uac74 setter \uc0dd\uc131\uc744 \ubc29\uc9c0\ud558\uace0 \ubd88\ubcc0\uac1d\uccb4\ub85c \ub9cc\ub4e4 \uc218 \uc788\ub2e4.")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\ud544\uc218 argument\ub97c \uc9c0\uc815\ud560 \uc218 \uc788\ub2e4.(\ubcf4\ud1b5\uc758 \uacbd\uc6b0, PK \uc5ed\ud560\uc744 \ud560 Id \uac12\uc774 \ub420 \uac83\uc774\ub2e4.)")),(0,l.kt)("p",null,"Builder \ud328\ud134\uc740 \uc5b4\ub5bb\uac8c \uc791\uc131\ud558\ub098?\n\uc774 \ud398\uc774\uc9c0\ub97c \ub4e4\uc5b4\uac00\uba74 \uba85\ud655\ud558\uac8c \ube4c\ub354 \ud328\ud134\uc744 \uc5b4\ub5bb\uac8c \uc791\uc131\ud574\uc57c\ud558\ub294\uc9c0 \uc54c \uc218 \uc788\ub2e4. \ube4c\ub354 \ud328\ud134 \uc608\uc81c\ucf54\ub4dc"),(0,l.kt)("p",null,"Java \uc0ac\uc6a9\uc790\ub77c\uba74 \uc798 \uc544\ub294 StringBuilder\uac00 \uc774 \ube4c\ub354 \ud328\ud134\uc73c\ub85c \uc791\uc131\ub41c \ub77c\uc774\ube0c\ub7ec\ub9ac\ub2e4."),(0,l.kt)("p",null,"\uadfc\ub370 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4 \ub54c\ub9c8\ub2e4 \uc774 \uae30\ub098\uae34 \ucf54\ub4dc\ub97c \uc9dc\uae30 \ubd88\ud3b8\ud558\ub2e4!\n\uadf8\ub798\uc11c Java \uac1c\ubc1c\uc790\ub4e4\uc758 \ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8 \ucf54\ub4dc\ub97c \ud68d\uae30\uc801\uc73c\ub85c \uc904\uc5ec\uc900 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc778 Lombok\uc744 \ud65c\uc6a9\ud574\ubcf4\uc790."),(0,l.kt)("p",null,"\ubc14\ub85c @Builder \uc560\ub178\ud14c\uc774\uc158 \uc744 \uc0ac\uc6a9\ud558\uba74 \uc608\uc81c\ucf54\ub4dc\ucc98\ub7fc \uae34 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub41c\ub2e4."),(0,l.kt)("p",null,"Builder \ud328\ud134\uc744 \uc801\uc6a9\ud560 \ud074\ub798\uc2a4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'    @AllArgsConstructor(access = AccessLevel.PRIVATE)\n    @Builder(builderMethodName = "travelCheckListBuilder")\n    @ToString\n    public class TravelCheckList {\n\n        private Long id;\n        private String passport;\n        private String flightTicket;\n        private String creditCard;\n        private String internationalDriverLicense;\n        private String travelerInsurance;\n\n        public static TravelCheckListBuilder builder(Long id) {\n            if(id == null) {\n                throw new IllegalArgumentException("\ud544\uc218 \ud30c\ub77c\ubbf8\ud130 \ub204\ub77d");\n            }\n            return travelCheckListBuilder().id(id);\n        }\n    }\n')),(0,l.kt)("p",null,"\ud655\uc778\uc6a9 \ud074\ub798\uc2a4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'    public class MainClass {\n\n        public static void main(String[] args) {\n            // \ube4c\ub354\ud328\ud134\uc744 \ud1b5\ud574 \uc5b4\ub5a4 \ud544\ub4dc\uc5d0 \uc5b4\ub5a4 \uac12\uc744 \ub123\uc5b4\uc8fc\ub294\uc9c0 \uba85\ud655\ud788 \ub208\uc73c\ub85c \ud655\uc778\ud560 \uc218 \uc788\ub2e4!\n            TravelCheckList travelCheckList = TravelCheckList.builder(145L)\n                    .passport("M12345")\n                    .flightTicket("Paris flight ticket")\n                    .creditCard("Shinhan card")\n                    .internationalDriverLicense("1235-5345")\n                    .travelerInsurance("Samsung insurance")\n                    .build();\n\n            System.out.println("\ube4c\ub354 \ud328\ud134 \uc801\uc6a9\ud558\uae30 : " + travelCheckList.toString());\n\n        }\n\n       // \uacb0\uacfc\n       // \ube4c\ub354 \ud328\ud134 \uc801\uc6a9\ud558\uae30 : TravelCheckList(id=1, passport=M12345, flightTicket=Paris flight ticket, creditCard=Shinhan card, internationalDriverLicense=1235-5345, travelerInsurance=Samsung insurance)\n    }\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@AllArgsConstructor(access = AccessLevel.PRIVATE)")," : @Builder \uc560\ub178\ud14c\uc774\uc158\uc744 \uc120\uc5b8\ud558\uba74 \uc804\uccb4 \uc778\uc790\ub97c \uac16\ub294 \uc0dd\uc131\uc790\ub97c \uc790\ub3d9\uc73c\ub85c \ub9cc\ub4e0\ub2e4. @AllArgsConstructor\ub294 \uc804\uccb4 \uc778\uc790\ub97c \uac16\ub294 \uc0dd\uc131\uc790\ub97c \ub9cc\ub4dc\ub294\ub370, \uc811\uadfc\uc790\ub97c private\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc11c \uc678\ubd80\uc5d0\uc11c \uc811\uadfc\ud560 \uc218 \uc5c6\ub3c4\ub85d \ub9cc\ub4e0\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@Builder")," : \uc704\uc5d0\uc11c \uc124\uba85\ud588\ub358 Builder \ud328\ud134\uc744 \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ud574\uc8fc\ub294\ub370, builderMethodName\uc5d0 \ub4e4\uc5b4\uac04 \uc774\ub984\uc73c\ub85c \ube4c\ub354 \uba54\uc11c\ub4dc\ub97c \uc0dd\uc131\ud574\uc900\ub2e4. \ub098\uac19\uc740 \uacbd\uc6b0, \ud63c\ub3d9\uc744 \uc904\uc774\uae30 \uc704\ud574 \ud074\ub798\uc2a4 \uba85\uacfc \ub3d9\uc77c\ud558\uac8c \ub194\ub450\uace0 Builder\ub85c \uc120\uc5b8\ud588\ub2e4."),(0,l.kt)("p",null,"\ud074\ub798\uc2a4 \ub0b4\ubd80 builder \uba54\uc11c\ub4dc : \ud544\uc218\ub85c \ub4e4\uc5b4\uac00\uc57c\ud560 \ud544\ub4dc\ub4e4\uc744 \uac80\uc99d\ud558\uae30 \uc704\ud574 \ub9cc\ub4e4\uc5c8\ub2e4. \uaf2d id\uac00 \uc544\ub2c8\ub77c\ub3c4 \ud574\ub2f9 \ud074\ub798\uc2a4\ub97c \uac1d\uccb4\ub85c \uc0dd\uc131\ud560 \ub54c \ud544\uc218\uc801\uc778 \ud544\ub4dc\uac00 \uc788\ub2e4\uba74 \ud65c\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"\uc774\ub807\uac8c Lombok\uc744 \ud65c\uc6a9\ud558\uba74 \ubc18\ubcf5\uc801\uc73c\ub85c \uae38\uac8c \uc9dc\uc57c\ud558\ub294 \ucf54\ub4dc(\ubcf4\uc77c\ub7ec \ud50c\ub808\uc774\ud2b8 \ucf54\ub4dc)\ub97c \uc5c4\uccad\ub098\uac8c \uc904\uc5ec\uc904 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"\ube4c\ub354 \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\uba74\uc11c \ubb34\ubd84\ubcc4\ud55c setter\ub97c \ub0a8\uc6a9\ud55c\ub2e4\uba74.... \ube4c\ub354\ud328\ud134\uc758 \uc7a5\uc810\uc744 \uadf9\ub300\ud654\ud574\uc11c \uc0ac\uc6a9\ud558\ub294 \uac74 \uc544\ub2cc \uac83 \uac19\ub2e4."))}d.isMDXComponent=!0}}]);