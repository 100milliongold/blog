"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[9142],{38096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var o=n(85893),l=n(11151),i=n(73973),r=n.n(i),a=n(81562);const s={title:"DataBase \uac1c\uc694 9",date:new Date("2023-02-24T22:50:00.000Z"),authors:["100milliongold"],tags:["database","\uc815\ubcf4\uad00\ub9ac"],password:"1q2w3e4r"},m=void 0,c={permalink:"/blog/second/2023/02/24/DB\uac1c\uc6949",source:"@site/second-blog/2023-02-24-DB\uac1c\uc6949/index.mdx",title:"DataBase \uac1c\uc694 9",description:"\uc815\uaddc\ud654(Normalization)\uc758 \uc815\uc758",date:"2023-02-24T22:50:00.000Z",formattedDate:"2023\ub144 2\uc6d4 24\uc77c",tags:[{label:"database",permalink:"/blog/second/tags/database"},{label:"\uc815\ubcf4\uad00\ub9ac",permalink:"/blog/second/tags/\uc815\ubcf4\uad00\ub9ac"}],readingTime:1.81,hasTruncateMarker:!1,authors:[{name:"100milliongold",title:"developer",url:"https://sebastienlorber.com",imageURL:"https://avatars.githubusercontent.com/u/13652711?s=400&u=0a1092b8b1170f71ae883d098f8721c12ce39e9e&v=4",key:"100milliongold"}],frontMatter:{title:"DataBase \uac1c\uc694 9",date:"2023-02-24T22:50:00.000Z",authors:["100milliongold"],tags:["database","\uc815\ubcf4\uad00\ub9ac"],password:"1q2w3e4r"},unlisted:!1,prevItem:{title:"DataBase CAP \uc774\ub860\uc774\ub780",permalink:"/blog/second/2023/03/04/cap-\uc774\ub860"},nextItem:{title:"\uc815\ubcf4\ubcf4\uc548 \ubb38\uc81c",permalink:"/blog/second/2023/02/19/\uc815\ubcf4\ubcf4\uc548\ubb38\uc81c"}},d={authorsImageUrls:[void 0]},u=[{value:"\uc815\uaddc\ud654(Normalization)\uc758 \uc815\uc758",id:"\uc815\uaddc\ud654normalization\uc758-\uc815\uc758",level:2},{value:"\uc815\uaddc\ud654\uc758 \ud544\uc694\uc131",id:"\uc815\uaddc\ud654\uc758-\ud544\uc694\uc131",level:2},{value:"\uc815\uaddc\ud654 \uad00\ub828 \uc6d0\ub9ac",id:"\uc815\uaddc\ud654-\uad00\ub828-\uc6d0\ub9ac",level:2},{value:"\uc815\uaddc\ud654(Normalization)\uc758 \uc808\ucc28",id:"\uc815\uaddc\ud654normalization\uc758-\uc808\ucc28",level:2}];function h(e){const t={h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\uc815\uaddc\ud654normalization\uc758-\uc815\uc758",children:"\uc815\uaddc\ud654(Normalization)\uc758 \uc815\uc758"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["\uc774\uc0c1\ud604\uc0c1\uc744 \uc57c\uae30\ud558\ub294 \uc18d\uc131\uac04\uc758 \uc885\uc18d\uad00\uacc4\ub97c \uc81c\uac70\ud558\uae30 \uc704\ud574 \ub9b4\ub808\uc774\uc158\uc744 \uc791\uc740 \uc5ec\ub7ec \ub9b4\ub808\uc774\uc158\uc73c\ub85c ",(0,o.jsx)("b",{style:{color:"red"},children:"\ubb34\uc190\uc2e4 \ubd84\ud574(Lossless Decomposition)"})," \ud558\ub294 \uacfc\uc815"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"\ub370\uc774\ud130 \uc77c\uad00\uc131 , \ub370\uc774\ud130 \uc911\ubcf5\uc758 \ucd5c\uc18c\ud654, \ub370\uc774\ud130 \uad6c\uc870\uc758 \uc548\uc804\uc131\uc744 \ucd5c\ub300\ud55c \ud655\ubcf4\ud558\uae30 \uc704\ud55c \ubc29\ubc95"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"\uc815\uaddc\ud654\uc758-\ud544\uc694\uc131",children:"\uc815\uaddc\ud654\uc758 \ud544\uc694\uc131"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"\uc911\ubcf5\uc5d0 \ub530\ub978 \uac31\uc2e0\uc774\uc0c1 \ud604\uc0c1\uc758 \uc81c\uac70\ub85c \uc77c\uad00\uc131 \uc720\uc9c0(\uac31\uc2e0\uc774\uc0c1 , \uc0bd\uc785\uc774\uc0c1, \uc0ad\uc81c\uc774\uc0c1 \ud604\uc0c1\uc81c\uac70)"}),"\n",(0,o.jsx)(t.li,{children:"\uc790\ub8cc\uad6c\uc870\uc758 \uc548\uc804\uc131 \ud655\ubcf4 , \uc790\ub8cc \ubd88\uc77c\uce58\uc131 \ucd5c\uc18c\ud654"}),"\n",(0,o.jsx)(t.li,{children:"\ud6a8\uc728\uc801\uc778 \uac80\uc0c9\uc774 \uac00\ub2a5"}),"\n",(0,o.jsx)(t.li,{children:"\uc911\ubcf5\uc758 \uc81c\uac70\ub85c \uc778\ud55c \uc800\uc7a5\uacf5\uac04\uc758 \ucd5c\uc18c\ud654"}),"\n",(0,o.jsx)(t.li,{children:"\ub370\uc774\ud130 \uc2e0\uaddc \ubc1c\uc0dd\uc2dc DB \uc7ac\uad6c\uc131\uc758 \ud544\uc694\uc131\uc744 \uac10\uc18c (\uc720\uc5f0\ud55c \uad6c\uc870)"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"\uc815\uaddc\ud654-\uad00\ub828-\uc6d0\ub9ac",children:"\uc815\uaddc\ud654 \uad00\ub828 \uc6d0\ub9ac"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"\uad6c\ubd84"}),(0,o.jsx)(t.th,{children:"\ub0b4\uc6a9"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"\ubb34\uc190\uc2e4 \ubd84\ud574 (Lossless Decomposition)"}),(0,o.jsx)(t.td,{children:"- \ud558\ub098 \uc774\uc0c1\uc758 \ub9b4\ub808\uc774\uc158\uc744 \ub450 \uac1c \uc774\uc0c1\uc758 \ub9b4\ub808\uc774\uc158\uc73c\ub85c \ubd84\ud574 \ud588\uc744\ub54c \ubd84\ud574\ud55c \ub9b4\ub808\uc774\uc158\uc744 \uc870\uc778\ud558\uc5ec \ub9b4\ub808\uc774\uc158\uc758 \uc815\ubcf4\ub97c \uc0dd\uc131\ud560\uc218 \uc788\uc5b4\uc57c \ud568"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"\ud568\uc218\uc801 \uc885\uc18d\uc131 (Functional Dependency )"}),(0,o.jsxs)(t.td,{children:["- \ub9b4\ub808\uc774\uc158\uc758 \ud55c \uc18d\uc131 X \uac00 \ub2e4\ub978\uc18d\uc131 Y \ub97c \uacb0\uc815 \uc9c0\uc744\ub54c Y\ub294 X\uc758 \ud568\uc218\uc801 \uc73c\ub85c \uc885\uc18d\ub428 ",(0,o.jsx)("br",{})," - $X \u2192 Y$ (X\ub294 \uacb0\uc815\uc790 Y\ub294 \uc885\uc18d\uc790)"]})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"\uc815\uaddc\ud654normalization\uc758-\uc808\ucc28",children:"\uc815\uaddc\ud654(Normalization)\uc758 \uc808\ucc28"}),"\n",(0,o.jsx)(r(),{content:a.Z,resize:!0})]})}function p(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},91262:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});n(67294);var o=n(72389),l=n(85893);function i(e){let{children:t,fallback:n}=e;return(0,o.Z)()?(0,l.jsx)(l.Fragment,{children:t?.()}):n??null}},73973:(e,t,n)=>{var o=n(91262),l=n(67294);function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=i(o),a=i(l),s=function(){return s=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},s.apply(this,arguments)};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===n&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}(".docusaurus-plugin-drawio {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  text-align: center;\n  overflow-x: auto;\n}\n\nhtml[data-theme='dark'] .docusaurus-plugin-drawio {\n  background-color: #333;\n  color: #fff;\n}\n\n.docusaurus-plugin-drawio > div {\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid transparent;\n  min-width: 180px;\n}\n");var m=function(e){var t=e.content,n=e.maxHeight,o=e.autoFit,i=e.autoCrop,r=e.autoOrigin,m=e.allowZoomOut,c=e.allowZoomIn,d=e.checkVisibleState,u=e.toolbarPosition,h=e.toolbarNohide,p=e.toolbarButtons,g=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n}(e,["content","maxHeight","autoFit","autoCrop","autoOrigin","allowZoomOut","allowZoomIn","checkVisibleState","toolbarPosition","toolbarNohide","toolbarButtons"]),x=l.useState("loading..."),f=x[0],y=x[1],F=l.useRef(null),S=window.GraphViewer;return l.useEffect((function(){if(S)if(t){var e=s({editable:"_blank",highlight:"#0000ff",nav:!0,resize:!0,toolbar:"zoom lightbox",xml:t,"max-height":n,"auto-fit":o,"auto-crop":i,"auto-origin":r,"allow-zoom-out":m,"allow-zoom-in":c,"check-visible-state":d,"toolbar-position":u,"toolbar-nohide":h,"toolbar-buttons":p},g),l=JSON.stringify(e);F.current.dataset.mxgraph=l,y(""),setTimeout((function(){S.createViewerForElement(F.current)}),0)}else y("drawio file is empty");else y("GraphViewer is not loaded")}),[]),a.default.createElement("div",{className:"docusaurus-plugin-drawio"},a.default.createElement("div",{className:"docusaurus-plugin-drawio__content",ref:F},f))},c=l.memo((function(e){return a.default.createElement(r.default,{fallback:a.default.createElement(a.default.Fragment,null,"loading...")},(function(){return a.default.createElement(m,s({},e))}))}));e.exports=c},81562:(e,t,n)=>{n.d(t,{Z:()=>o});const o='<mxfile host="65bd71144e">\n    <diagram id="11ENLGYnkh8THes8dLoJ" name="\ud398\uc774\uc9c0-1">\n        <mxGraphModel dx="600" dy="682" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">\n            <root>\n                <mxCell id="0"/>\n                <mxCell id="1" parent="0"/>\n                <mxCell id="37" value="" style="group;movable=0;resizable=0;rotatable=0;deletable=0;editable=0;connectable=0;" vertex="1" connectable="0" parent="1">\n                    <mxGeometry width="760" height="580" as="geometry"/>\n                </mxCell>\n                <mxCell id="36" value="" style="rounded=0;whiteSpace=wrap;html=1;sketch=1;strokeColor=none;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=16;" parent="37" vertex="1">\n                    <mxGeometry width="760" height="580" as="geometry"/>\n                </mxCell>\n                <mxCell id="2" value="&lt;font data-font-src=&quot;https://fonts.googleapis.com/css?family=Nanum+Pen+Script&quot; style=&quot;font-size: 16px;&quot;&gt;\ube44\uc815\uaddc \ub9b4\ub808\uc774\uc158&lt;/font&gt;" style="rounded=0;whiteSpace=wrap;html=1;sketch=1;curveFitting=1;jiggle=2;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=16;" parent="37" vertex="1">\n                    <mxGeometry x="40" y="40" width="100" height="39" as="geometry"/>\n                </mxCell>\n                <mxCell id="3" value="1\ucc28 \uc815\uaddc\ud615" style="rounded=0;whiteSpace=wrap;html=1;sketch=1;curveFitting=1;jiggle=2;fillColor=#dae8fc;strokeColor=#6c8ebf;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=16;" parent="37" vertex="1">\n                    <mxGeometry x="40" y="118" width="100" height="39" as="geometry"/>\n                </mxCell>\n                <mxCell id="4" value="" style="edgeStyle=none;html=1;sketch=1;curveFitting=1;jiggle=2;" parent="37" source="2" target="3" edge="1">\n                    <mxGeometry relative="1" as="geometry"/>\n                </mxCell>\n                <mxCell id="5" value="2\ucc28 \uc815\uaddc\ud615" style="rounded=0;whiteSpace=wrap;html=1;sketch=1;curveFitting=1;jiggle=2;fillColor=#dae8fc;strokeColor=#6c8ebf;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=16;" parent="37" vertex="1">\n                    <mxGeometry x="40" y="197" width="100" height="39" as="geometry"/>\n                </mxCell>\n                <mxCell id="6" value="" style="edgeStyle=none;html=1;sketch=1;curveFitting=1;jiggle=2;" parent="37" source="3" target="5" edge="1">\n                    <mxGeometry relative="1" as="geometry"/>\n                </mxCell>\n                <mxCell id="7" value="3\ucc28 \uc815\uaddc\ud615" style="rounded=0;whiteSpace=wrap;html=1;sketch=1;curveFitting=1;jiggle=2;fillColor=#dae8fc;strokeColor=#6c8ebf;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=16;" parent="37" vertex="1">\n                    <mxGeometry x="40" y="275" width="100" height="39" as="geometry"/>\n                </mxCell>\n                <mxCell id="8" value="" style="edgeStyle=none;html=1;sketch=1;curveFitting=1;jiggle=2;" parent="37" source="5" target="7" edge="1">\n                    <mxGeometry relative="1" as="geometry"/>\n                </mxCell>\n                <mxCell id="10" value="BCNF \uc815\uaddc\ud615" style="rounded=0;whiteSpace=wrap;html=1;sketch=1;curveFitting=1;jiggle=2;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=16;" parent="37" vertex="1">\n                    <mxGeometry x="40" y="353" width="100" height="39" as="geometry"/>\n                </mxCell>\n                <mxCell id="11" value="" style="edgeStyle=none;html=1;sketch=1;curveFitting=1;jiggle=2;" parent="37" source="7" target="10" edge="1">\n                    <mxGeometry relative="1" as="geometry"/>\n                </mxCell>\n                <mxCell id="13" value="4\ucc28 \uc815\uaddc\ud615" style="rounded=0;whiteSpace=wrap;html=1;sketch=1;curveFitting=1;jiggle=2;fillColor=#d5e8d4;strokeColor=#82b366;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=16;" parent="37" vertex="1">\n                    <mxGeometry x="40" y="432" width="100" height="39" as="geometry"/>\n                </mxCell>\n                <mxCell id="14" value="" style="edgeStyle=none;html=1;sketch=1;curveFitting=1;jiggle=2;" parent="37" source="10" target="13" edge="1">\n                    <mxGeometry relative="1" as="geometry"/>\n                </mxCell>\n                <mxCell id="15" value="5\ucc28 \uc815\uaddc\ud615" style="rounded=0;whiteSpace=wrap;html=1;sketch=1;curveFitting=1;jiggle=2;fillColor=#d5e8d4;strokeColor=#82b366;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=16;" parent="37" vertex="1">\n                    <mxGeometry x="40" y="510" width="100" height="39" as="geometry"/>\n                </mxCell>\n                <mxCell id="16" value="" style="edgeStyle=none;html=1;sketch=1;curveFitting=1;jiggle=2;" parent="37" source="13" target="15" edge="1">\n                    <mxGeometry relative="1" as="geometry"/>\n                </mxCell>\n                <mxCell id="17" value="\uc6d0\uc790\uac12\uc774 \uc544\ub2cc \ub3c4\uba54\uc778 \uc81c\uac70" style="rounded=1;whiteSpace=wrap;html=1;sketch=1;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=16;" parent="37" vertex="1">\n                    <mxGeometry x="178" y="80" width="210" height="40" as="geometry"/>\n                </mxCell>\n                <mxCell id="19" value="\ubd80\ubd84\ud568\uc218 \uc885\uc18d\uc131 \uc81c\uac70&lt;span style=&quot;color: rgba(0, 0, 0, 0); font-family: monospace; font-size: 0px; text-align: start;&quot;&gt;%3CmxGraphModel%3E%3Croot%3E%3CmxCell%20id%3D%220%22%2F%3E%3CmxCell%20id%3D%221%22%20parent%3D%220%22%2F%3E%3CmxCell%20id%3D%222%22%20value%3D%22%EC%9B%90%EC%9E%90%EA%B0%92%EC%9D%B4%20%EC%95%84%EB%8B%8C%20%EB%8F%84%EB%A9%94%EC%9D%B8%20%EC%A0%9C%EA%B1%B0%22%20style%3D%22rounded%3D1%3BwhiteSpace%3Dwrap%3Bhtml%3D1%3Bsketch%3D1%3BfontFamily%3DNanum%20Pen%20Script%3BfontSource%3Dhttps%253A%252F%252Ffonts.googleapis.com%252Fcss%253Ffamily%253DNanum%252BPen%252BScript%3BfontSize%3D16%3B%22%20vertex%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%22180%22%20y%3D%2281%22%20width%3D%22190%22%20height%3D%2231%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3C%2Froot%3E%3C%2FmxGraphModel%3E&lt;/span&gt;" style="rounded=1;whiteSpace=wrap;html=1;sketch=1;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=16;" parent="37" vertex="1">\n                    <mxGeometry x="178" y="158" width="210" height="40" as="geometry"/>\n                </mxCell>\n                <mxCell id="20" value="\uc774\ud589\ud568\uc218 \uc885\uc18d\uc131 \uc81c\uac70" style="rounded=1;whiteSpace=wrap;html=1;sketch=1;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=16;" parent="37" vertex="1">\n                    <mxGeometry x="178" y="236" width="210" height="40" as="geometry"/>\n                </mxCell>\n                <mxCell id="21" value="\uacb0\uc815\uc790\uac00 \ud6c4\ubcf4\ud0a4\uac00 \uc544\ub2cc \ud568\uc218\uc885\uc18d \uc81c\uac70" style="rounded=1;whiteSpace=wrap;html=1;sketch=1;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=16;" parent="37" vertex="1">\n                    <mxGeometry x="178" y="314" width="210" height="40" as="geometry"/>\n                </mxCell>\n                <mxCell id="22" value="\uacb0\uc815\uc790\uac00 \ud6c4\ubcf4\ud0a4\uac00 \uc544\ub2cc \ud568\uc218\uc885\uc18d \uc81c\uac70" style="rounded=1;whiteSpace=wrap;html=1;sketch=1;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=16;" parent="37" vertex="1">\n                    <mxGeometry x="178" y="392" width="210" height="40" as="geometry"/>\n                </mxCell>\n                <mxCell id="23" value="\ud6c4\ubcf4\ud0a4\ub97c \ud1b5\ud558\uc9c0 \uc54a\ub294 \uacb0\uc815\uc885\uc18d\uc131 \uc81c\uac70 &lt;br&gt;(JOIN \uc885\uc18d\uc131 \uc81c\uac70)" style="rounded=1;whiteSpace=wrap;html=1;sketch=1;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=16;" parent="37" vertex="1">\n                    <mxGeometry x="178" y="470" width="210" height="40" as="geometry"/>\n                </mxCell>\n                <mxCell id="24" value="&lt;ul&gt;&lt;li&gt;\ub370\uc774\ud130 \uc885\ubcf5\uc131&lt;/li&gt;&lt;li&gt;\ub514\uc2a4\ud06c \uc6a9\ub7c9&lt;/li&gt;&lt;/ul&gt;" style="rounded=1;whiteSpace=wrap;html=1;sketch=1;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=16;spacingRight=33;verticalAlign=middle;fillColor=#dae8fc;strokeColor=#6c8ebf;flipV=1;" parent="37" vertex="1">\n                    <mxGeometry x="420" y="255" width="150" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="25" value="&lt;ul&gt;&lt;li&gt;JOIN&lt;/li&gt;&lt;li&gt;\ub370\uc774\ud130 \uacb0\ud569\uc131&lt;/li&gt;&lt;/ul&gt;" style="rounded=1;whiteSpace=wrap;html=1;sketch=1;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=16;spacingRight=33;verticalAlign=middle;fillColor=#dae8fc;strokeColor=#6c8ebf;" parent="37" vertex="1">\n                    <mxGeometry x="586" y="255" width="150" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="26" value="" style="shape=flexArrow;endArrow=classic;html=1;sketch=1;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=14;exitX=0.5;exitY=0;exitDx=0;exitDy=0;strokeColor=#9999FF;" parent="37" source="24" target="27" edge="1">\n                    <mxGeometry width="50" height="50" relative="1" as="geometry">\n                        <mxPoint x="370" y="250" as="sourcePoint"/>\n                        <mxPoint x="493" y="170" as="targetPoint"/>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="27" value="&lt;font style=&quot;font-size: 16px;&quot;&gt;\uace0&lt;/font&gt;" style="ellipse;whiteSpace=wrap;html=1;sketch=1;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=14;flipV=1;strokeColor=#9999FF;" parent="37" vertex="1">\n                    <mxGeometry x="445" y="50" width="100" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="28" value="&lt;font style=&quot;font-size: 16px;&quot;&gt;\uc800&lt;/font&gt;" style="ellipse;whiteSpace=wrap;html=1;sketch=1;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=14;flipV=1;strokeColor=#9999FF;" parent="37" vertex="1">\n                    <mxGeometry x="445" y="460" width="100" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="29" value="&lt;font style=&quot;font-size: 16px;&quot;&gt;\uace0&lt;/font&gt;" style="ellipse;whiteSpace=wrap;html=1;sketch=1;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=14;strokeColor=#9999FF;" parent="37" vertex="1">\n                    <mxGeometry x="611" y="50" width="100" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="30" value="&lt;font style=&quot;font-size: 16px;&quot;&gt;\uace0&lt;/font&gt;" style="ellipse;whiteSpace=wrap;html=1;sketch=1;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=14;strokeColor=#9999FF;" parent="37" vertex="1">\n                    <mxGeometry x="611" y="455.5" width="100" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="31" value="" style="shape=flexArrow;endArrow=classic;html=1;sketch=1;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=14;exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=0.5;entryY=1;entryDx=0;entryDy=0;strokeColor=#9999FF;" parent="37" source="25" target="29" edge="1">\n                    <mxGeometry width="50" height="50" relative="1" as="geometry">\n                        <mxPoint x="582.13" y="300" as="sourcePoint"/>\n                        <mxPoint x="571.0000437660589" y="124.99155182613322" as="targetPoint"/>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="32" value="" style="shape=flexArrow;endArrow=classic;html=1;sketch=1;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=14;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;strokeColor=#9999FF;" parent="37" source="24" target="28" edge="1">\n                    <mxGeometry width="50" height="50" relative="1" as="geometry">\n                        <mxPoint x="502.5" y="280" as="sourcePoint"/>\n                        <mxPoint x="491.37004376605887" y="104.99155182613322" as="targetPoint"/>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="33" value="" style="shape=flexArrow;endArrow=classic;html=1;sketch=1;fontFamily=Nanum Pen Script;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DNanum%2BPen%2BScript;fontSize=14;exitX=0.5;exitY=1;exitDx=0;exitDy=0;strokeColor=#9999FF;" parent="37" source="25" target="30" edge="1">\n                    <mxGeometry width="50" height="50" relative="1" as="geometry">\n                        <mxPoint x="508.5" y="364.5" as="sourcePoint"/>\n                        <mxPoint x="496" y="464.5" as="targetPoint"/>\n                    </mxGeometry>\n                </mxCell>\n            </root>\n        </mxGraphModel>\n    </diagram>\n</mxfile>'},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var o=n(67294);const l={},i=o.createContext(l);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);