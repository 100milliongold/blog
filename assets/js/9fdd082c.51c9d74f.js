"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[795],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},l="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),l=c(r),g=a,d=l["".concat(p,".").concat(g)]||l[g]||m[g]||i;return r?n.createElement(d,o(o({ref:e},u),{},{components:r})):n.createElement(d,o({ref:e},u))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[l]="string"==typeof t?t:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7155:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={title:"basic auth \uad6c\ud604 \ubc0f \uc124\uba85",date:new Date("2019-07-18T18:01:20.000Z"),tags:["server","spring","spring boot","spring security"]},o=void 0,s={permalink:"/blog/blog/basic-auth-\uad6c\ud604-\ubc0f-\uc124\uba85",source:"@site/blog/basic-auth-\uad6c\ud604-\ubc0f-\uc124\uba85.mdx",title:"basic auth \uad6c\ud604 \ubc0f \uc124\uba85",description:"basic auth \uc774\ub780",date:"2019-07-18T18:01:20.000Z",formattedDate:"2019\ub144 7\uc6d4 18\uc77c",tags:[{label:"server",permalink:"/blog/blog/tags/server"},{label:"spring",permalink:"/blog/blog/tags/spring"},{label:"spring boot",permalink:"/blog/blog/tags/spring-boot"},{label:"spring security",permalink:"/blog/blog/tags/spring-security"}],readingTime:1.48,hasTruncateMarker:!1,authors:[],frontMatter:{title:"basic auth \uad6c\ud604 \ubc0f \uc124\uba85",date:"2019-07-18T18:01:20.000Z",tags:["server","spring","spring boot","spring security"]},prevItem:{title:"react \uc678\ubd80 javascript \ub77c\uc774\ube0c\ub7ec\ub9ac \ubd88\ub824\uc624\uae30 (kakao map javascript)",permalink:"/blog/blog/react-\uc678\ubd80-javascript-\ub77c\uc774\ube0c\ub7ec\ub9ac-\ubd88\ub824\uc624\uae30-kakao-map-javascript"},nextItem:{title:"Spring Security \uc5d0\uc11c \ub85c\uadf8\uc778 \ud31d\uc5c5\ucc3d \uc548\ub098\uc624\uac8c \uc124\uc815",permalink:"/blog/blog/Spring-Security-\uc5d0\uc11c-\ub85c\uadf8\uc778-\ud31d\uc5c5\ucc3d-\uc548\ub098\uc624\uac8c-\uc124\uc815"}},p={authorsImageUrls:[]},c=[{value:"basic auth \uc774\ub780",id:"basic-auth-\uc774\ub780",level:2},{value:"\uad6c\ud604",id:"\uad6c\ud604",level:2}],u={toc:c},l="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(l,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"basic-auth-\uc774\ub780"},"basic auth \uc774\ub780"),(0,a.kt)("p",null,"api \uc11c\ubc84\uc5d0\uc11c \ub370\uc774\ud130\uc744 \uc694\uad6c\ud560\ub54c http Authorization \ud5e4\ub354\uc5d0 user id \uc640 , password \uc744 base64 \ub85c \uc778\ucf54\ub529\ud55c \ubb38\uc790\uc5f4\uc744 \ucd94\uac00\ud558\uc5ec \uc778\uc99d\ud558\ub294 \ud615\uc2dd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucc38\uace0 :  ",(0,a.kt)("a",{parentName:"li",href:"https://hamait.tistory.com/416"},"HTTP \uae30\ubcf8\uc778\uc99d"))),(0,a.kt)("h2",{id:"\uad6c\ud604"},"\uad6c\ud604"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"config \uc124\uc815"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Autowired\nprivate AuthProvider authProvider;\n\n@Override\n/**\n* \uc2a4\ud06c\ub9c1 \uc2dc\ud050\ub9ac\ud2b8\ub97c \ud1b5\ud558\uc5ec \uc811\uadfc\ud398\uc774\uc9c0 \uc124\uc815\n*/\nprotected void configure(HttpSecurity http) throws Exception{\n    http\n    .logout()\n    .logoutUrl("/api/logout")\n    .and()\n    .csrf()\n    .disable()\n    .authorizeRequests()\n    .antMatchers(\n            "/",\n            "/api/v1/user/join",\n            "/static/**"\n    ).permitAll()\n    .anyRequest().authenticated()\n    .and()\n    .headers().frameOptions().sameOrigin()\n    .and()\n    .httpBasic()\n    .authenticationEntryPoint(new NoPopupBasicAuthenticationEntryPoint()) ;\n  http.authenticationProvider(authProvider);\n    }\n')),(0,a.kt)("p",{parentName:"li"},"  http.authenticationProvider \ubd80\ubd84\uc5d0 authProvider \ucd94\uac00")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"AuthProvider.java"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package com.jeaeok.myproject.testApp.configs;\nimport java.util.ArrayList;\nimport java.util.List;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.security.authentication.AuthenticationProvider;\nimport org.springframework.security.authentication.UsernamePasswordAuthenticationToken;\nimport org.springframework.security.core.Authentication;\nimport org.springframework.security.core.AuthenticationException;\nimport org.springframework.security.core.GrantedAuthority;\nimport org.springframework.security.core.authority.SimpleGrantedAuthority;\nimport org.springframework.security.crypto.password.PasswordEncoder;\nimport org.springframework.stereotype.Component;\n\nimport com.jeaeok.myproject.testApp.domain.MyAuthenticaion;\nimport com.jeaeok.myproject.testApp.domain.User;\nimport com.jeaeok.myproject.testApp.services.UserService;\n\n@Component("authProvider")\n/**\n* \ub85c\uadf8\uc778 \ud655\uc778 \ud558\ub294 \ud074\ub808\uc2a4\n* @author atcis\n*\n*/\npublic class AuthProvider implements AuthenticationProvider  {\n    \n    @Autowired\n    private PasswordEncoder passwordEncoder;\n    \n    \n    \n    @Autowired\n    private UserService userService;\n\n    @Override\n    public Authentication authenticate(Authentication authentication) throws AuthenticationException {\n        String id = authentication.getName();\n        String password = authentication.getCredentials().toString();\n\n        User user_info = userService.getUser(id);\n        \n        if (null == user_info || !passwordEncoder.matches(password, user_info.getUserPassword())) {\n            return null;\n        }\n        \n        List<GrantedAuthority> grantedAuthorityList = new ArrayList<>();\n        if (user_info.isAdmin()) {\n            grantedAuthorityList.add(new SimpleGrantedAuthority("ROLE_USER"));\n        }\n        return new MyAuthenticaion(id, password, grantedAuthorityList, user_info);\n    }\n\n    @Override\n    public boolean supports(Class<?> authentication) {\n        return authentication.equals(UsernamePasswordAuthenticationToken.class);\n    }\n}\n')),(0,a.kt)("p",{parentName:"li"},"  authentication.getName() : basic auth \ubd80\ubd84\uc5d0 id ",(0,a.kt)("br",null),"\nauthentication.getCredentials().toString() : basic auth \ubd80\ubd84\uc5d0 password ",(0,a.kt)("br",null))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"basic auth \uc740 base64 \ub85c \uc778\ucf54\ub529 \ub418\uc5b4 \uc804\uc1a1\ub418\uae30 \ub54c\ubb38\uc5d0 \uc911\uac04\uc790 \uacf5\uaca9\uc5d0 \ucde8\uc57d\ud560\uc218\ub3c4 \uc788\uc74c"))))}m.isMDXComponent=!0}}]);