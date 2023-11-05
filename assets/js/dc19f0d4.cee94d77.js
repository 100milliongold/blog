"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[8004],{76426:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var n=t(85893),i=t(11151);const o={title:"Ambari metric collector connection timeout",date:new Date("2019-03-21T02:46:24.000Z"),tags:["Ambari","Hadoop","Error","Server"]},c="Ambari metric collector connection timeout",l={permalink:"/blog/post/Ambari-metric-collector-connection-timeout",source:"@site/blog/Ambari-metric-collector-connection-timeout.mdx",title:"Ambari metric collector connection timeout",description:"\uc99d\uc0c1",date:"2019-03-21T02:46:24.000Z",formattedDate:"2019\ub144 3\uc6d4 21\uc77c",tags:[{label:"Ambari",permalink:"/blog/post/tags/ambari"},{label:"Hadoop",permalink:"/blog/post/tags/hadoop"},{label:"Error",permalink:"/blog/post/tags/error"},{label:"Server",permalink:"/blog/post/tags/server"}],readingTime:1.65,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Ambari metric collector connection timeout",date:"2019-03-21T02:46:24.000Z",tags:["Ambari","Hadoop","Error","Server"]},unlisted:!1,prevItem:{title:"\ub9e5\uc5d0\uc11c sshpass \uc774\uc6a9\ud558\uae30",permalink:"/blog/post/\ub9e5\uc5d0\uc11c-sshpass-\uc774\uc6a9\ud558\uae30"},nextItem:{title:"freebsd \uc5d0\uc11c \uac8c\uc2a4\ud2b8\ud655\uc7a5 \uc124\uce58\ud558\uae30",permalink:"/blog/post/freebsd-\uc5d0\uc11c-\uac8c\uc2a4\ud2b8\ud655\uc7a5-\uc124\uce58\ud558\uae30"}},s={authorsImageUrls:[]},a=[{value:"\uc99d\uc0c1",id:"\uc99d\uc0c1",level:2},{value:"\ud574\uacb0\ubc29\uc548",id:"\ud574\uacb0\ubc29\uc548",level:2}];function m(e){const r={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"\uc99d\uc0c1",children:"\uc99d\uc0c1"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Ambari \uba54\uc778\ud654\uba74 \uc5d0\uc11c \ub9ac\uc18c\uc2a4 \uadf8\ub798\ud504\uac00 \ub85c\ub529\uc911\uc73c\ub85c \ud45c\uc2dc\ub418\uace0 \ucd9c\ub825\uc774 \uc548\ub418\uc5c8\uace0"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"/var/log/ambari-server/ambari-server.log \ud30c\uc77c\uc744 \ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uc5d0\ub7ec\uba54\uc138\uc9c0\uac00 \ucd9c\ub825\uc774 \ub41c\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"18 Mar 2019 22:21:50,455 ERROR [ambari-client-thread-2396] MetricsRequestHelper:115 - Error getting timeline metrics : Read timed out\nMetricsRequestHelper:122 - Cannot connect to collector: SocketTimeoutException\n"})}),"\n",(0,n.jsx)(r.h2,{id:"\ud574\uacb0\ubc29\uc548",children:"\ud574\uacb0\ubc29\uc548"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Ambari Metric Collector \uc11c\ubc84\ub97c \uc7ac\uc2dc\uc791"}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"$ ambari-metrics-collector restart\n"})}),"\n",(0,n.jsxs)(r.ol,{start:"2",children:["\n",(0,n.jsxs)(r.li,{children:["Ambari Server\uac00 \ub290\ub824\uc11c \uadf8\ub7f4\uc218\ub3c4 \uc788\ub2e4.","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Ambari >> Ambari Metrics >> Configs >> Metrics service checkpoint delay \ud56d\ubaa9\uc744 60\ucd08\uc5d0\uc11c 1800 \ucd08\ub85c \uc99d\uac00 \uc2dc\ucf30\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.li,{children:"Ambari Metric Collector \uc11c\ubc84\uc758 \uba54\ubaa8\ub9ac \uc6a9\ub7c9\uc744 \uc99d\uac00 \uc2dc\ucf30\ub2e4."}),"\n",(0,n.jsxs)(r.li,{children:["\uae30\uc874\uc758 \ub370\uc774\ud130\ub97c \uc9c0\uc6b0\uace0 \ub2e4\uc2dc Ambari Metric Collector \uc11c\ubc84\ub97c \uc7ac\uc2dc\uc791 \ud55c\ub2e4.\na. Ambari metcic server \uc744 maintenance \ubaa8\ub4dc\ub85c \uc804\ud658\uc2dc\ud0a8\ub2e4.\nb. Ambari metcic server \uc744 \uc911\uc9c0\uc2dc\ud0a8\ub2e4.\nc. Ambari metcic server \uc758 config \ud654\uba74\uc5d0\uc11c \ub2e4\uc74c\uc744 \ucc38\uace0\ud55c\ub2e4.\ni. 'Metrics Service operation mode' (embedded or distributed)\nii. hbase.rootdir\niii. hbase.zookeeper.property.dataDir\nd. AMS \uc11c\ubc84\ub0b4\ubd80\uc5d0 hbase.rootdir \ub0b4\ubd80\uc758 \ud30c\uc77c\ub4e4\uc744 \ubc31\uc5c5 \ubc0f \uc9c0\uc6b4\ub2e4.","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\ub9cc\uc57d Metrics Service operation mode \uac00 embedded \uc774\uba74 \ub85c\uceec\uc5d0\uc11c \uc9c0\uc6b0\uace0"}),"\n",(0,n.jsx)(r.li,{children:"distributed \uc77c\uacbd\uc6b0\uc5d0\ub294 hdfs \uc744 \uc774\uc6a9\ud558\uc5ec \uc9c0\uc6b4\ub2e4\ne. 'hbase.tmp.dir'/zookeeper \ud3f4\ub354\uc548\uc758 \ub0b4\uc6a9\ub3c4 \ubc31\uc5c5 \ubc0f \uc9c0\uc6b4\ub2e4.\nf. 'hbase.tmp.dir'/phoenix-spool \ud3f4\ub354\uc548\uc758 \ub0b4\uc6a9\ub3c4 \ubc31\uc5c5 \ubc0f \uc9c0\uc6b4\ub2e4.\ng. AMS \uc7ac \uc2dc\uc791 \ubc0f maintenance \ubaa8\ub4dc\ub97c \ud5e4\uc81c \ud55c\ub2e4."}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>c});var n=t(67294);const i={},o=n.createContext(i);function c(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);