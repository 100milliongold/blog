"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[4354],{48839:(n,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var e=t(85893),s=t(11151);const o={title:"react \uc678\ubd80 javascript \ub77c\uc774\ube0c\ub7ec\ub9ac \ubd88\ub824\uc624\uae30 (kakao map javascript)",date:new Date("2019-07-18T18:19:37.000Z"),tags:["react.js","javascript","fron-end"]},r=void 0,i={permalink:"/blog/post/react-\uc678\ubd80-javascript-\ub77c\uc774\ube0c\ub7ec\ub9ac-\ubd88\ub824\uc624\uae30-kakao-map-javascript",source:"@site/blog/react-\uc678\ubd80-javascript-\ub77c\uc774\ube0c\ub7ec\ub9ac-\ubd88\ub824\uc624\uae30-kakao-map-javascript.mdx",title:"react \uc678\ubd80 javascript \ub77c\uc774\ube0c\ub7ec\ub9ac \ubd88\ub824\uc624\uae30 (kakao map javascript)",description:"\uac1c\uc694",date:"2019-07-18T18:19:37.000Z",formattedDate:"2019\ub144 7\uc6d4 18\uc77c",tags:[{label:"react.js",permalink:"/blog/post/tags/react-js"},{label:"javascript",permalink:"/blog/post/tags/javascript"},{label:"fron-end",permalink:"/blog/post/tags/fron-end"}],readingTime:3.175,hasTruncateMarker:!1,authors:[],frontMatter:{title:"react \uc678\ubd80 javascript \ub77c\uc774\ube0c\ub7ec\ub9ac \ubd88\ub824\uc624\uae30 (kakao map javascript)",date:"2019-07-18T18:19:37.000Z",tags:["react.js","javascript","fron-end"]},unlisted:!1,prevItem:{title:"react proxy server \uc124\uc815",permalink:"/blog/post/react-proxy-server-\uc124\uc815"},nextItem:{title:"basic auth \uad6c\ud604 \ubc0f \uc124\uba85",permalink:"/blog/post/basic-auth-\uad6c\ud604-\ubc0f-\uc124\uba85"}},p={authorsImageUrls:[]},l=[{value:"\uac1c\uc694",id:"\uac1c\uc694",level:2},{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:2},{value:"react.js \uc640 \uc5f0\ub3d9 (\uc804\uccb4 \uc2a4\ud06c\ub9bd\ud2b8)",id:"reactjs-\uc640-\uc5f0\ub3d9-\uc804\uccb4-\uc2a4\ud06c\ub9bd\ud2b8",level:2}];function c(n){const a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.h2,{id:"\uac1c\uc694",children:"\uac1c\uc694"}),"\n",(0,e.jsxs)(a.p,{children:["react \uc744 \uc774\uc6a9\ud558\ub2e4 \ubcf4\uba74 \ub300\ubd80\ubd84\uc758 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc740 npm \uc744 \uc774\uc6a9\ud558\uc5ec \uc190\uc27d\uac8c \uc774\uc6a9\uc774 \uac00\ub2a5\ud558\ub2e4.",(0,e.jsx)("br",{}),"\n\ud558\uc9c0\ub9cc cdn \ud639\uc740 kakao map \uacfc \uac19\uc740 api \uc744 \ud1b5\ud55c javascript \ub77c\uc774\ube0c\ub7ec\ub9ac \uc740 \uc778\uc99d\ubb38\uc81c\ub3c4 \uc788\uc5b4\uc11c \uac00\uc838\uc624\uae30 \uc560\ub9e4\ud560\uc218\ub3c4 \uc788\ub2e4.",(0,e.jsx)("br",{}),(0,e.jsx)("br",{})]}),"\n",(0,e.jsxs)(a.p,{children:["\uadf8\ub807\ub2e4\uace0 \ud574\uc11c \ubc29\ubc95\uc774 \uc5c6\ub294\uac83\uc740 \uc544\ub2c8\ub2e4. ",(0,e.jsx)(a.a,{href:"https://www.npmjs.com/package/scriptjs",children:"scriptjs"})," \uc744 \ud1b5\ud558\uc5ec \uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ud1b5\ud558\uc5ec \uac00\uc838\uc62c\uc218\ub294 \uc788\ub2e4."]}),"\n",(0,e.jsx)(a.h2,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{className:"language-shell",children:"$ npm i scriptjs\n"})}),"\n",(0,e.jsx)(a.h2,{id:"\uc608\uc2dc",children:"\uc608\uc2dc"}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{children:"import $script from 'scriptjs';\n\n...\n\nconst kakao_url = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${API_KEY}`;\n\n$script(kakao_url, () => {\n    /*global kakao*/\n    this.kakao = kakao;\n    kakao.maps.load(function () {\n        // v3\uac00 \ubaa8\ub450 \ub85c\ub4dc\ub41c \ud6c4, \uc774 \ucf5c\ubc31 \ud568\uc218\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4.\n        ...\n    });\n});\n"})}),"\n",(0,e.jsxs)(a.ul,{children:["\n",(0,e.jsxs)(a.li,{children:["scriptjs \uc0ac\uc6a9\uc2dc ",(0,e.jsx)(a.code,{children:"/* global {\ubcc0\uc218\uba85} */"})," \uc744 \ucd94\uac00\ud558\uc5ec \ucef4\ud30c\uc77c\uc2dc \uc5d0\ub7ec\uac00 \ub098\uc9c0 \uc54a\ub3c4\ub85d \uc870\uce58 \ud55c\ub2e4."]}),"\n"]}),"\n",(0,e.jsx)(a.h2,{id:"reactjs-\uc640-\uc5f0\ub3d9-\uc804\uccb4-\uc2a4\ud06c\ub9bd\ud2b8",children:"react.js \uc640 \uc5f0\ub3d9 (\uc804\uccb4 \uc2a4\ud06c\ub9bd\ud2b8)"}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{children:"import React, { Component , createRef} from 'react'\nimport $script from 'scriptjs';\nimport * as mapApi from '../../services/maps'\n\nexport default class KakaoMap extends Component {\n    constructor(props){\n        super(props);\n        this.appRef = createRef();\n    }\n\n    state = {\n        API_KEY: null,\n        setLoading: true,\n    }\n\n    componentDidMount() {\n        this.getApiKey().then(API_KEY => {\n            this.setState({ API_KEY, setLoading: false, });\n            this.setKakaoMap();\n        });\n    }\n\n    componentDidUpdate(){\n        if (this.customOverlay){\n            this.customOverlay.setMap(null);\n            this.customOverlay = null;\n        }\n        this.setCenter();\n        this.setOverLay();\n    }\n\n    /**\n     * \uc11c\ubc84\uc5d0 api \ud0a4 \uac00\uc838\uc624\uae30\n     */\n    getApiKey = async () => {\n        const res = await mapApi.getApiKey();\n        return res.data;\n    }\n\n    /**\n     * \uc9c0\ub3c4 \uac00\uc6b4\ub370\n     */\n    setCenter = ()=>{\n        var LatLng = this.props.LatLng;\n        let { x, y } = LatLng;\n\n        if(typeof this.kakao === 'undefined' || this.kakao == null) return false;\n\n\n        // \uc774\ub3d9\ud560 \uc704\ub3c4 \uacbd\ub3c4 \uc704\uce58\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4\n        var moveLatLon = new this.kakao.maps.LatLng(y, x);\n        // \uc9c0\ub3c4 \uc911\uc2ec\uc744 \uc774\ub3d9 \uc2dc\ud0b5\ub2c8\ub2e4\n        this.map.setCenter(moveLatLon);\n    }\n\n    /**\n     * \uc624\ubc84\ub808\uc774 \uc0dd\uc131\n     */\n    setOverLay = () => {\n        var LatLng = this.props.LatLng;\n        let { x, y , data} = LatLng;\n        // console.log(data);\n\n        if (typeof this.kakao === 'undefined' || this.kakao == null || !data) return false;\n\n\n        // \ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\uc5d0 \ud45c\uc2dc\ud560 \ub0b4\uc6a9\uc785\ub2c8\ub2e4\n        // HTML \ubb38\uc790\uc5f4 \ub610\ub294 Dom Element \uc785\ub2c8\ub2e4\n        var content = `\n            <div id=\"overlay-area\" class=\"arrow_box\">\n                <ul>\n                    <li>${data.address_name}</li>\n                    <li>${data.category_name}</li>\n                    <li>${data.phone}</li>\n                    <li>${data.place_name}</li>\n                    <li>${data.place_url}</li>\n                <ul>\n            </div>\n        `;\n\n        // \ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\uac00 \ud45c\uc2dc\ub420 \uc704\uce58\uc785\ub2c8\ub2e4\n        var position = new kakao.maps.LatLng(y, x);\n\n        // \ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4\n        this.customOverlay = new kakao.maps.CustomOverlay({\n            position: position,\n            content: content\n        });\n\n        // \ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\ub97c \uc9c0\ub3c4\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4\n        this.customOverlay.setMap(this.map);\n    }\n\n    /**\n     * \uce74\uce74\uc624 \ub9f5 \uc0dd\uc131\n     */\n    setKakaoMap = ()=>{\n        var {x , y} = this.props.LatLng;\n        const {API_KEY} = this.state;\n        const kakao_url = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${API_KEY}`;\n        var that = this;\n        $script(kakao_url, () => {\n            //console.log();\n            // golobal setting\n\n            /*global kakao*/\n            this.kakao = kakao;\n            kakao.maps.load(function () {\n                // v3\uac00 \ubaa8\ub450 \ub85c\ub4dc\ub41c \ud6c4, \uc774 \ucf5c\ubc31 \ud568\uc218\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4.\n                that.kakao = kakao;\n                that.map = new that.kakao.maps.Map(that.appRef.current, {\n                    center: new that.kakao.maps.LatLng(y, x), // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n                    level: 3 // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n                });\n            });\n        });\n    }\n\n\n    render() {\n        const { setLoading } = this.state\n        return (\n            (setLoading)?\n                <div>Looooooooooooading....</div>\n                : <div style={{ 'height': '850px' }} ref={this.appRef} />\n        )\n    }\n}\n"})})]})}function d(n={}){const{wrapper:a}={...(0,s.a)(),...n.components};return a?(0,e.jsx)(a,{...n,children:(0,e.jsx)(c,{...n})}):c(n)}},11151:(n,a,t)=>{t.d(a,{Z:()=>i,a:()=>r});var e=t(67294);const s={},o=e.createContext(s);function r(n){const a=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(a):{...a,...n}}),[a,n])}function i(n){let a;return a=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),e.createElement(o.Provider,{value:a},n.children)}}}]);