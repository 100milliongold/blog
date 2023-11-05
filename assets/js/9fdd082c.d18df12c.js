"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[795],{65441:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=e(85893),i=e(11151);const a={title:"basic auth \uad6c\ud604 \ubc0f \uc124\uba85",date:new Date("2019-07-18T18:01:20.000Z"),tags:["server","spring","spring boot","spring security"]},o=void 0,s={permalink:"/blog/post/basic-auth-\uad6c\ud604-\ubc0f-\uc124\uba85",source:"@site/blog/basic-auth-\uad6c\ud604-\ubc0f-\uc124\uba85.mdx",title:"basic auth \uad6c\ud604 \ubc0f \uc124\uba85",description:"basic auth \uc774\ub780",date:"2019-07-18T18:01:20.000Z",formattedDate:"2019\ub144 7\uc6d4 18\uc77c",tags:[{label:"server",permalink:"/blog/post/tags/server"},{label:"spring",permalink:"/blog/post/tags/spring"},{label:"spring boot",permalink:"/blog/post/tags/spring-boot"},{label:"spring security",permalink:"/blog/post/tags/spring-security"}],readingTime:1.48,hasTruncateMarker:!1,authors:[],frontMatter:{title:"basic auth \uad6c\ud604 \ubc0f \uc124\uba85",date:"2019-07-18T18:01:20.000Z",tags:["server","spring","spring boot","spring security"]},unlisted:!1,prevItem:{title:"react \uc678\ubd80 javascript \ub77c\uc774\ube0c\ub7ec\ub9ac \ubd88\ub824\uc624\uae30 (kakao map javascript)",permalink:"/blog/post/react-\uc678\ubd80-javascript-\ub77c\uc774\ube0c\ub7ec\ub9ac-\ubd88\ub824\uc624\uae30-kakao-map-javascript"},nextItem:{title:"Spring Security \uc5d0\uc11c \ub85c\uadf8\uc778 \ud31d\uc5c5\ucc3d \uc548\ub098\uc624\uac8c \uc124\uc815",permalink:"/blog/post/Spring-Security-\uc5d0\uc11c-\ub85c\uadf8\uc778-\ud31d\uc5c5\ucc3d-\uc548\ub098\uc624\uac8c-\uc124\uc815"}},c={authorsImageUrls:[]},p=[{value:"basic auth \uc774\ub780",id:"basic-auth-\uc774\ub780",level:2},{value:"\uad6c\ud604",id:"\uad6c\ud604",level:2}];function u(t){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"basic-auth-\uc774\ub780",children:"basic auth \uc774\ub780"}),"\n",(0,r.jsx)(n.p,{children:"api \uc11c\ubc84\uc5d0\uc11c \ub370\uc774\ud130\uc744 \uc694\uad6c\ud560\ub54c http Authorization \ud5e4\ub354\uc5d0 user id \uc640 , password \uc744 base64 \ub85c \uc778\ucf54\ub529\ud55c \ubb38\uc790\uc5f4\uc744 \ucd94\uac00\ud558\uc5ec \uc778\uc99d\ud558\ub294 \ud615\uc2dd"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\ucc38\uace0 :  ",(0,r.jsx)(n.a,{href:"https://hamait.tistory.com/416",children:"HTTP \uae30\ubcf8\uc778\uc99d"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\uad6c\ud604",children:"\uad6c\ud604"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"config \uc124\uc815"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Autowired\nprivate AuthProvider authProvider;\n\n@Override\n/**\n * \uc2a4\ud06c\ub9c1 \uc2dc\ud050\ub9ac\ud2b8\ub97c \ud1b5\ud558\uc5ec \uc811\uadfc\ud398\uc774\uc9c0 \uc124\uc815\n */\nprotected void configure(HttpSecurity http) throws Exception{\n\thttp\n\t.logout()\n    .logoutUrl("/api/logout")\n    .and()\n    .csrf()\n    .disable()\n    .authorizeRequests()\n    .antMatchers(\n    \t\t"/",\n            "/api/v1/user/join",\n            "/static/**"\n    ).permitAll()\n    .anyRequest().authenticated()\n    .and()\n    .headers().frameOptions().sameOrigin()\n    .and()\n    .httpBasic()\n    .authenticationEntryPoint(new NoPopupBasicAuthenticationEntryPoint()) ;\n    http.authenticationProvider(authProvider);\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"http.authenticationProvider \ubd80\ubd84\uc5d0 authProvider \ucd94\uac00"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"AuthProvider.java"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package com.jeaeok.myproject.testApp.configs;\nimport java.util.ArrayList;\nimport java.util.List;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.security.authentication.AuthenticationProvider;\nimport org.springframework.security.authentication.UsernamePasswordAuthenticationToken;\nimport org.springframework.security.core.Authentication;\nimport org.springframework.security.core.AuthenticationException;\nimport org.springframework.security.core.GrantedAuthority;\nimport org.springframework.security.core.authority.SimpleGrantedAuthority;\nimport org.springframework.security.crypto.password.PasswordEncoder;\nimport org.springframework.stereotype.Component;\n\nimport com.jeaeok.myproject.testApp.domain.MyAuthenticaion;\nimport com.jeaeok.myproject.testApp.domain.User;\nimport com.jeaeok.myproject.testApp.services.UserService;\n\n@Component("authProvider")\n/**\n* \ub85c\uadf8\uc778 \ud655\uc778 \ud558\ub294 \ud074\ub808\uc2a4\n* @author atcis\n*\n*/\npublic class AuthProvider implements AuthenticationProvider  {\n    \n    @Autowired\n    private PasswordEncoder passwordEncoder;\n    \n    \n    \n    @Autowired\n    private UserService userService;\n\n    @Override\n    public Authentication authenticate(Authentication authentication) throws AuthenticationException {\n        String id = authentication.getName();\n        String password = authentication.getCredentials().toString();\n\n        User user_info = userService.getUser(id);\n        \n        if (null == user_info || !passwordEncoder.matches(password, user_info.getUserPassword())) {\n            return null;\n        }\n        \n        List<GrantedAuthority> grantedAuthorityList = new ArrayList<>();\n        if (user_info.isAdmin()) {\n            grantedAuthorityList.add(new SimpleGrantedAuthority("ROLE_USER"));\n        }\n        return new MyAuthenticaion(id, password, grantedAuthorityList, user_info);\n    }\n\n    @Override\n    public boolean supports(Class<?> authentication) {\n        return authentication.equals(UsernamePasswordAuthenticationToken.class);\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["authentication.getName() : basic auth \ubd80\ubd84\uc5d0 id ",(0,r.jsx)("br",{}),"\nauthentication.getCredentials().toString() : basic auth \ubd80\ubd84\uc5d0 password ",(0,r.jsx)("br",{})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"basic auth \uc740 base64 \ub85c \uc778\ucf54\ub529 \ub418\uc5b4 \uc804\uc1a1\ub418\uae30 \ub54c\ubb38\uc5d0 \uc911\uac04\uc790 \uacf5\uaca9\uc5d0 \ucde8\uc57d\ud560\uc218\ub3c4 \uc788\uc74c"}),"\n"]}),"\n"]})]})}function l(t={}){const{wrapper:n}={...(0,i.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}},11151:(t,n,e)=>{e.d(n,{Z:()=>s,a:()=>o});var r=e(67294);const i={},a=r.createContext(i);function o(t){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function s(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),r.createElement(a.Provider,{value:n},t.children)}}}]);