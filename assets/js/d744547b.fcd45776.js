"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[3867],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>u});var a=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=a.createContext({}),s=function(e){var r=a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),g=t,u=d["".concat(c,".").concat(g)]||d[g]||m[g]||o;return n?a.createElement(u,i(i({ref:r},l),{},{components:n})):a.createElement(u,i({ref:r},l))}));function u(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=g;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[d]="string"==typeof e?e:t,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9091:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),t=(n(7294),n(3905));const o={title:"Ambari View \uc81c\uc791",date:new Date("2018-12-19T00:45:33.000Z"),tags:["hadoop","server","ambari"]},i="Ambari",p={permalink:"/blog/blog/Ambari-View-\uc81c\uc791",source:"@site/blog/Ambari-View-\uc81c\uc791.mdx",title:"Ambari View \uc81c\uc791",description:"Apache Ambari \ud504\ub85c\uc81d\ud2b8\ub294 Apache Hadoop \ud074\ub7ec\uc2a4\ud130\ub97c \ud504\ub85c\ube44\uc800\ub2dd, \uad00\ub9ac \ubc0f \ubaa8\ub2c8\ud130\ub9c1\ud558\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uac1c\ubc1c\ud558\uc5ec Hadoop \uad00\ub9ac\ub97c \ub2e8\uc21c\ud654\ud558\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud55c\ub2e4. Ambari\ub294 REST REST API\ub97c \ud1b5\ud574 \uc9c1\uad00\uc801\uc774\uace0 \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6b4 Hadoop \uad00\ub9ac \uc6f9 UI\ub97c \uc81c\uacf5\ud55c\ub2e4.",date:"2018-12-19T00:45:33.000Z",formattedDate:"2018\ub144 12\uc6d4 19\uc77c",tags:[{label:"hadoop",permalink:"/blog/blog/tags/hadoop"},{label:"server",permalink:"/blog/blog/tags/server"},{label:"ambari",permalink:"/blog/blog/tags/ambari"}],readingTime:2.22,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Ambari View \uc81c\uc791",date:"2018-12-19T00:45:33.000Z",tags:["hadoop","server","ambari"]},prevItem:{title:"Centos7 SELINUX disable \uc124\uc815\ud6c4 \ucee4\ub110\ud398\ub2c9 \uc99d\uc0c1",permalink:"/blog/blog/Centos7-SELINUX-disable-\uc124\uc815\ud6c4-\ucee4\ub110\ud398\ub2c9-\uc99d\uc0c1"},nextItem:{title:"Vagrant Disk Change",permalink:"/blog/blog/Vagrant-Disk-Change"}},c={authorsImageUrls:[]},s=[],l={toc:s},d="wrapper";function m(e){let{components:r,...n}=e;return(0,t.kt)(d,(0,a.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Apache Ambari \ud504\ub85c\uc81d\ud2b8\ub294 Apache Hadoop \ud074\ub7ec\uc2a4\ud130\ub97c \ud504\ub85c\ube44\uc800\ub2dd, \uad00\ub9ac \ubc0f \ubaa8\ub2c8\ud130\ub9c1\ud558\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uac1c\ubc1c\ud558\uc5ec Hadoop \uad00\ub9ac\ub97c \ub2e8\uc21c\ud654\ud558\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud55c\ub2e4. Ambari\ub294 REST REST API\ub97c \ud1b5\ud574 \uc9c1\uad00\uc801\uc774\uace0 \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6b4 Hadoop \uad00\ub9ac \uc6f9 UI\ub97c \uc81c\uacf5\ud55c\ub2e4.\n",(0,t.kt)("a",{parentName:"p",href:"https://ambari.apache.org/"},"Apache Ambari project"))),(0,t.kt)("h1",{id:"ambari-view"},"Ambari View"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},'Ambari Views\ub294 Ambari Web\uc5d0\uc11c \uc0ac\uc6a9\uc790 \uc815\uc758 \uc2dc\uac01\ud654, \uad00\ub9ac \ubc0f \ubaa8\ub2c8\ud130\ub9c1 \uae30\ub2a5\uc744 \ud45c\uba74\ud654\ud558\uae30 \uc704\ud574 UI \uae30\ub2a5\uc744 \uc5f0\uacb0\ud558\ub294 \uccb4\uacc4\uc801\uc778 \ubc29\ubc95\uc744 \uc81c\uacf5\ud55c\ub2e4. "\ubcf4\uae30"\ub294 \uc81c3\uc790\uac00 API, \uacf5\uae09\uc790, UI\uc640 \ud568\uaed8 \uc0c8\ub85c\uc6b4 \uc790\uc6d0 \uc720\ud615\uc744 \uc9c0\uc6d0\ud558\uac8c \ud558\ub294 Ambari\ub97c \ud655\uc7a5\ud558\ub294 \ubc29\ubc95\uc774\ub2e4. \uc989, \ubcf4\uae30\ub294 Ambari \ucee8\ud14c\uc774\ub108\uc5d0 \ubc30\uce58\ub418\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774\ub2e4. ',(0,t.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/AMBARI/Views"},"https://cwiki.apache.org/confluence/display/AMBARI/Views"))),(0,t.kt)("p",null,"\uc989 Ambari \uc5d0\uc11c \ubcc4\ub3c4\uc758 View \ud654\uba74\uc744 \uc81c\uacf5\ud574\uc8fc\ub294 \ud50c\ub7ec\uadf8\uc778 \uc774\ub2e4"),(0,t.kt)("h1",{id:"\uc81c\uc791-\uc808\ucc28"},"\uc81c\uc791 \uc808\ucc28"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"STS \uc6b0\ud074\ub9ad\ud6c4 New -> Spring Legacy Project \uc5d0\uc11c Spring MVC Project \uc0dd\uc131"),(0,t.kt)("p",{parentName:"li"},'{% asset_img "image1.png" "spaced title" %}')),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"pom.xml \ud30c\uc77c \uc124\uc815"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n      <groupId>org.eclipse.jetty</groupId>\n      <artifactId>jetty-jsp</artifactId>\n      <version>${jetty.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.easymock</groupId>\n        <artifactId>easymock</artifactId>\n        <version>3.1</version>\n        <scope>test</scope>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.ambari</groupId>\n        <artifactId>ambari-views</artifactId>\n        <version>2.0.0.0</version>\n        <scope>provided</scope>\n    </dependency>\n    <dependency>\n        <groupId>com.sun.jersey</groupId>\n        <artifactId>jersey-server</artifactId>\n        <version>1.8</version>\n    </dependency>\n    <dependency>\n        <groupId>javax.servlet</groupId>\n        <artifactId>servlet-api</artifactId>\n        <version>2.5</version>\n        <scope>provided</scope>\n      </dependency>\n    <dependency>\n        <groupId>org.eclipse.jetty</groupId>\n        <artifactId>jetty-server</artifactId>\n        <version>${jetty.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.eclipse.jetty</groupId>\n        <artifactId>jetty-servlet</artifactId>\n        <version>${jetty.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.eclipse.jetty</groupId>\n        <artifactId>jetty-webapp</artifactId>\n        <version>${jetty.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.eclipse.jetty</groupId>\n        <artifactId>jetty-servlets</artifactId>\n        <version>${jetty.version}</version>\n    </dependency>\n\n    \x3c!-- Spring --\x3e\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-context</artifactId>\n        <version>${org.springframework-version}</version>\n        <exclusions>\n            \x3c!-- Exclude Commons Logging in favor of SLF4j --\x3e\n            <exclusion>\n                <groupId>commons-logging</groupId>\n                <artifactId>commons-logging</artifactId>\n             </exclusion>\n        </exclusions>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-webmvc</artifactId>\n        <version>${org.springframework-version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-core</artifactId>\n        <version>${org.springframework-version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-beans</artifactId>\n        <version>${org.springframework-version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-expression</artifactId>\n        <version>${org.springframework-version}</version>\n    </dependency>\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"src/main/resources/view.xml \uc124\uc815"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<view>\n  \x3c!-- ambari name --\x3e\n  <name>AmbariViewTest</name>\n  <label>Ambari View Test</label>\n  <version>1.0.0</version>\n  <min-ambari-version>2.0.*</min-ambari-version>\n\n  \x3c!-- ambari config data --\x3e\n  <parameter>\n    <name>ambari.server.url</name>\n    <description>Enter Ambari Server URL</description>\n    <placeholder>http://ambari.server:8080</placeholder>\n    <default-value>http://localhost:8080</default-value>\n  </parameter>\n  <parameter>\n    <name>ambari.server.containername</name>\n    <description>Enter Ambari Container Name</description>\n  </parameter>\n  <parameter>\n    <name>ambari.server.username</name>\n    <description>Enter Ambari Server username</description>\n    <default-value>admin</default-value>\n  </parameter>\n\x3c!-- ambari view Properties --\x3e\n  <resource>\n    <name>configurations</name>\n    <service-class>com.test.lustre.dao</service-class>\n  </resource>\n</view>\n\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Spring Web \uac1c\ubc1c")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"maven \ube4c\ub4dc"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-shell"}," mvn clean packge\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"/var/lib/ambari-server/resources/viwes \uc5d0 \ube4c\ub4dc\ub41c \ud30c\uc77c \uc774\ub3d9")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"ambari \uc7ac\uc2dc\uc791"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"ambari-server restart\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\ud655\uc778"))))}m.isMDXComponent=!0}}]);