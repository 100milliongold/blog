"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[6676],{89222:(t,e)=>{Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const s=window,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,r))(e)})(t):t;var a;const c=window,h=c.trustedTypes,d=h?h.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},m=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:m};let v=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),r=s.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=g){var i;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const n=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:p).toAttribute(e,s.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:p;this._$El=r,this[r]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var _;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:v}),(null!==(a=c.reactiveElementVersions)&&void 0!==a?a:c.reactiveElementVersions=[]).push("1.5.0");const f=window,$=f.trustedTypes,b=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,A="?"+y,S=`<${A}>`,x=document,E=(t="")=>x.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,P=/>/g,k=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),U=/'/g,I=/"/g,T=/^(?:script|style|textarea|title)$/i,O=(Z=1,(t,...e)=>({_$litType$:Z,strings:t,values:e})),R=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),H=new WeakMap,L=x.createTreeWalker(x,129,null,!1);var Z;class G{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,l=this.parts,[a,c]=((t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":"",o=j;for(let a=0;a<s;a++){const e=t[a];let s,l,c=-1,h=0;for(;h<e.length&&(o.lastIndex=h,l=o.exec(e),null!==l);)h=o.lastIndex,o===j?"!--"===l[1]?o=N:void 0!==l[1]?o=P:void 0!==l[2]?(T.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=k):void 0!==l[3]&&(o=k):o===k?">"===l[0]?(o=r??j,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?k:'"'===l[3]?I:U):o===I||o===U?o=k:o===N||o===P?o=j:(o=k,r=void 0);const d=o===k&&t[a+1].startsWith("/>")?" ":"";n+=o===j?e+S:c>=0?(i.push(s),e.slice(0,c)+"$lit$"+e.slice(c)+y+d):e+y+(-2===c?(i.push(void 0),a):d)}const l=n+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(l):l,i]})(t,e);if(this.el=G.createElement(a,s),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=L.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const s=c[n++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?F:"?"===e[1]?V:"@"===e[1]?K:B})}else l.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(T.test(i.tagName)){const t=i.textContent.split(y),e=t.length-1;if(e>0){i.textContent=$?$.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],E()),L.nextNode(),l.push({type:2,index:++r});i.append(t[e],E())}}}else if(8===i.nodeType)if(i.data===A)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(y,t+1));)l.push({type:7,index:r}),t+=y.length-1}r++}}static createElement(t,e){const s=x.createElement("template");return s.innerHTML=t,s}}function W(t,e,s=t,i){var r,n,o,l;if(e===R)return e;let a=void 0!==i?null===(r=s._$Co)||void 0===r?void 0:r[i]:s._$Cl;const c=C(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,s,i)),void 0!==i?(null!==(o=(l=s)._$Co)&&void 0!==o?o:l._$Co=[])[i]=a:s._$Cl=a),void 0!==a&&(e=W(t,a._$AS(t,e.values),a,i)),e}class D{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:s},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(s,!0);L.currentNode=r;let n=L.nextNode(),o=0,l=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new z(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new q(n,this,t)),this.u.push(e),a=i[++l]}o!==(null==a?void 0:a.index)&&(n=L.nextNode(),o++)}return r}p(t){let e=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class z{constructor(t,e,s,i){var r;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cm=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),C(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==R&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>w(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==M&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(s);else{const t=new D(r,this),e=t.v(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new G(t)),e}k(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new z(this.O(E()),this.O(E()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}let B=class{constructor(t,e,s,i,r){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=W(this,t,e,0),n=!C(t)||t!==this._$AH&&t!==R,n&&(this._$AH=t);else{const i=t;let o,l;for(t=r[0],o=0;o<r.length-1;o++)l=W(this,i[s+o],e,o),l===R&&(l=this._$AH[o]),n||(n=!C(l)||l!==this._$AH[o]),l===M?t=M:t!==M&&(t+=(l??"")+r[o+1]),this._$AH[o]=l}n&&!i&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class F extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}const Y=$?$.emptyScript:"";class V extends B{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class K extends B{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=W(this,t,e,0))&&void 0!==s?s:M)===R)return;const i=this._$AH,r=t===M&&i!==M||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==M&&(i===M||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const J=f.litHtmlPolyfillSupport;null==J||J(G,z),(null!==(_=f.litHtmlVersions)&&void 0!==_?_:f.litHtmlVersions=[]).push("2.5.0");var Q,X;let tt=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{var i,r;const n=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==s?void 0:s.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new z(e.insertBefore(E(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return R}};tt.finalized=!0,tt._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");const st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function it(t){return(e,s)=>{return void 0!==s?(i=t,r=s,void e.constructor.createProperty(r,i)):st(t,e);var i,r}}var rt;null===(rt=window.HTMLSlotElement)||void 0===rt||rt.prototype.assignedElements;const nt=2;let ot=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const lt=(t,e)=>{var s,i;const r=t._$AN;if(void 0===r)return!1;for(const n of r)null===(i=(s=n)._$AO)||void 0===i||i.call(s,e,!1),lt(n,e);return!0},at=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},ct=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),ut(e)}};function ht(t){void 0!==this._$AN?(at(this),this._$AM=t,ct(this)):this._$AM=t}function dt(t,e=!1,s=0){const i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(i))for(let n=s;n<i.length;n++)lt(i[n],!1),at(i[n]);else null!=i&&(lt(i,!1),at(i));else lt(this,t)}const ut=t=>{var e,s,i,r;t.type==nt&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=dt),null!==(s=(r=t)._$AQ)&&void 0!==s||(r._$AQ=ht))};class pt extends ot{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),ct(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?null===(s=this.reconnected)||void 0===s||s.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(lt(this,t),at(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class mt{}const gt=new WeakMap,vt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends pt{render(t){return M}update(t,[e]){var s;const i=e!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=e,this.dt=null===(s=t.options)||void 0===s?void 0:s.host,this.rt(this.ct=t.element)),M}rt(t){var e;if("function"==typeof this.Y){const s=null!==(e=this.dt)&&void 0!==e?e:globalThis;let i=gt.get(s);void 0===i&&(i=new WeakMap,gt.set(s,i)),void 0!==i.get(this.Y)&&this.Y.call(this.dt,void 0),i.set(this.Y,t),void 0!==t&&this.Y.call(this.dt,t)}else this.Y.value=t}get lt(){var t,e,s;return"function"==typeof this.Y?null===(e=gt.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.Y):null===(s=this.Y)||void 0===s?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var _t=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,$t=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?ft(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&_t(e,s,n),n};e.GiscusWidget=class extends tt{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=new mt,this.messageEventHandler=this.handleMessageEvent.bind(this),this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var t;return null==(t=this._iframeRef)?void 0:t.value}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(t){return`[giscus] An error occurred. Error message: "${t}".`}setupSession(){const t=location.href,e=new URL(t),s=localStorage.getItem(this.GISCUS_SESSION_KEY),i=e.searchParams.get("giscus")||"";if(this.__session="",i)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,e.searchParams.delete("giscus"),void history.replaceState(void 0,document.title,e.toString());if(s)try{this.__session=JSON.parse(s)}catch(r){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==r?void 0:r.message)} Session has been cleared.`)}}handleMessageEvent(t){if(t.origin!==this.host)return;const{data:e}=t;if("object"!=typeof e||!e.giscus||(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),!e.giscus.error))return;const s=e.giscus.error;if(s.includes("Bad credentials")||s.includes("Invalid state value")||s.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",console.warn(`${this._formatError(s)} Session has been cleared.`),void this.update(new Map);console.error(`${this._formatError(s)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}s.includes("Discussion not found")?console.warn(`[giscus] ${s}. A new discussion will be created if a comment/reaction is submitted.`):console.error(`${this._formatError(s)} ${this.ERROR_SUGGESTION}`)}sendMessage(t){var e,s;null==(s=null==(e=this.iframeRef)?void 0:e.contentWindow)||s.postMessage({giscus:t},this.host)}updateConfig(){const t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}firstUpdated(){var t;null==(t=this.iframeRef)||t.addEventListener("load",(()=>{var t;return null==(t=this.iframeRef)?void 0:t.classList.remove("loading")}))}requestUpdate(t,e,s){this.hasUpdated&&"host"!==t?this.updateConfig():super.requestUpdate(t,e,s)}getMetaContent(t,e=!1){const s=e?`meta[property='og:${t}'],`:"",i=document.querySelector(s+`meta[name='${t}']`);return i?i.content:""}_getCleanedUrl(){const t=new URL(location.href);return t.searchParams.delete("giscus"),t}getTerm(){switch(this.mapping){case"url":return`${this._getCleanedUrl()}`;case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping&&this.term||""}getIframeSrc(){const t=this._getCleanedUrl().toString(),e=`${t}${this.id?"#"+this.id:""}`,s=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||t,r={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:s,backLink:i};return`${this.host||this.GISCUS_DEFAULT_HOST}${this.lang?`/${this.lang}`:""}/widget?${new URLSearchParams(r)}`}render(){return O`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${vt(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}},e.GiscusWidget.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(s,t,r)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,$t([it({reflect:!0})],e.GiscusWidget.prototype,"host",2),$t([it({reflect:!0})],e.GiscusWidget.prototype,"repo",2),$t([it({reflect:!0})],e.GiscusWidget.prototype,"repoId",2),$t([it({reflect:!0})],e.GiscusWidget.prototype,"category",2),$t([it({reflect:!0})],e.GiscusWidget.prototype,"categoryId",2),$t([it({reflect:!0})],e.GiscusWidget.prototype,"mapping",2),$t([it({reflect:!0})],e.GiscusWidget.prototype,"term",2),$t([it({reflect:!0})],e.GiscusWidget.prototype,"strict",2),$t([it({reflect:!0})],e.GiscusWidget.prototype,"reactionsEnabled",2),$t([it({reflect:!0})],e.GiscusWidget.prototype,"emitMetadata",2),$t([it({reflect:!0})],e.GiscusWidget.prototype,"inputPosition",2),$t([it({reflect:!0})],e.GiscusWidget.prototype,"theme",2),$t([it({reflect:!0})],e.GiscusWidget.prototype,"lang",2),$t([it({reflect:!0})],e.GiscusWidget.prototype,"loading",2),e.GiscusWidget=$t([(t=>e=>{return"function"==typeof e?(s=t,i=e,customElements.define(s,i),i):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){customElements.define(t,e)}}})(t,e);var s,i})("giscus-widget")],e.GiscusWidget)},58071:(t,e,s)=>{const i=s(85893),r=s(67294);t.exports=function({id:t,host:e,repo:n,repoId:o,category:l,categoryId:a,mapping:c,term:h,strict:d,reactionsEnabled:u,emitMetadata:p,inputPosition:m,theme:g,lang:v,loading:_}){const[f,$]=r.useState(!1);return r.useEffect((()=>{f||(Promise.resolve().then((()=>s(89222))),$(!0))}),[]),f?i.jsx("giscus-widget",{id:t,host:e,repo:n,repoid:o,category:l,categoryid:a,mapping:c,term:h,strict:d,reactionsenabled:u,emitmetadata:p,inputposition:m,theme:g,lang:v,loading:_}):null}},61460:(t,e,s)=>{s.d(e,{Z:()=>$});var i=s(67294),r=s(86010),n=s(31358),o=s(87524),l=s(39960),a=s(95999),c=s(16550),h=s(48596);function d(t){const{pathname:e}=(0,c.TH)();return(0,i.useMemo)((()=>t.filter((t=>function(t,e){return!(t.unlisted&&!(0,h.Mg)(t.permalink,e))}(t,e)))),[t,e])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var p=s(85893);function m(t){let{sidebar:e}=t;const s=d(e.items);return(0,p.jsx)("aside",{className:"col col--3",children:(0,p.jsxs)("nav",{className:(0,r.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,a.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,p.jsx)("div",{className:(0,r.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:e.title}),(0,p.jsx)("ul",{className:(0,r.Z)(u.sidebarItemList,"clean-list"),children:s.map((t=>(0,p.jsx)("li",{className:u.sidebarItem,children:(0,p.jsx)(l.Z,{isNavLink:!0,to:t.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:t.title})},t.permalink)))})]})})}var g=s(13102);function v(t){let{sidebar:e}=t;const s=d(e.items);return(0,p.jsx)("ul",{className:"menu__list",children:s.map((t=>(0,p.jsx)("li",{className:"menu__list-item",children:(0,p.jsx)(l.Z,{isNavLink:!0,to:t.permalink,className:"menu__link",activeClassName:"menu__link--active",children:t.title})},t.permalink)))})}function _(t){return(0,p.jsx)(g.Zo,{component:v,props:t})}function f(t){let{sidebar:e}=t;const s=(0,o.i)();return e?.items.length?"mobile"===s?(0,p.jsx)(_,{sidebar:e}):(0,p.jsx)(m,{sidebar:e}):null}function $(t){const{sidebar:e,toc:s,children:i,...o}=t,l=e&&e.items.length>0;return(0,p.jsx)(n.Z,{...o,children:(0,p.jsx)("div",{className:"container margin-vert--lg",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)(f,{sidebar:e}),(0,p.jsx)("main",{className:(0,r.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"https://schema.org/Blog",children:i}),s&&(0,p.jsx)("div",{className:"col col--2",children:s})]})})})}},99714:(t,e,s)=>{s.d(e,{Z:()=>a});s(67294);var i=s(86010),r=s(18780),n=s(9460),o=s(27779),l=s(85893);function a(t){let{children:e,className:s}=t;const{isBlogPostPage:a}=(0,n.C)();return(0,l.jsx)("div",{id:a?r.blogPostContainerID:void 0,className:(0,i.Z)("markdown",s),itemProp:"articleBody",children:(0,l.jsx)(o.Z,{children:e})})}},15397:(t,e,s)=>{s.d(e,{Z:()=>f});s(67294);var i=s(86010),r=s(9460),n=s(95999),o=s(35281),l=s(39960);const a={iconEdit:"iconEdit_Z9Sw"};var c=s(85893);function h(t){let{className:e,...s}=t;return(0,c.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(a.iconEdit,e),"aria-hidden":"true",...s,children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(t){let{editUrl:e}=t;return(0,c.jsxs)(l.Z,{to:e,className:o.k.common.editThisPage,children:[(0,c.jsx)(h,{}),(0,c.jsx)(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=s(13008);const p={tags:"tags_jXut",tag:"tag_QGVx"};function m(t){let{tags:e}=t;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("b",{children:(0,c.jsx)(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,c.jsx)("ul",{className:(0,i.Z)(p.tags,"padding--none","margin-left--sm"),children:e.map((t=>{let{label:e,permalink:s}=t;return(0,c.jsx)("li",{className:p.tag,children:(0,c.jsx)(u.Z,{label:e,permalink:s})},s)}))})]})}function g(){return(0,c.jsx)("b",{children:(0,c.jsx)(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function v(t){const{blogPostTitle:e,...s}=t;return(0,c.jsx)(l.Z,{"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:e}),...s,children:(0,c.jsx)(g,{})})}const _={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function f(){const{metadata:t,isBlogPostPage:e}=(0,r.C)(),{tags:s,title:n,editUrl:o,hasTruncateMarker:l}=t,a=!e&&l,h=s.length>0;return h||a||o?(0,c.jsxs)("footer",{className:(0,i.Z)("row docusaurus-mt-lg",e&&_.blogPostFooterDetailsFull),children:[h&&(0,c.jsx)("div",{className:(0,i.Z)("col",{"col--9":a}),children:(0,c.jsx)(m,{tags:s})}),e&&o&&(0,c.jsx)("div",{className:"col margin-top--sm",children:(0,c.jsx)(d,{editUrl:o})}),a&&(0,c.jsx)("div",{className:(0,i.Z)("col text--right",{"col--3":h}),children:(0,c.jsx)(v,{blogPostTitle:n,to:t.permalink})})]}):null}},79855:(t,e,s)=>{s.d(e,{Z:()=>E});s(67294);var i=s(86010),r=s(9460),n=s(44996),o=s(85893);function l(t){let{children:e,className:s}=t;const{frontMatter:i,assets:l,metadata:{description:a}}=(0,r.C)(),{withBaseUrl:c}=(0,n.C)(),h=l.image??i.image,d=i.keywords??[];return(0,o.jsxs)("article",{className:s,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[a&&(0,o.jsx)("meta",{itemProp:"description",content:a}),h&&(0,o.jsx)("link",{itemProp:"image",href:c(h,{absolute:!0})}),d.length>0&&(0,o.jsx)("meta",{itemProp:"keywords",content:d.join(",")}),e]})}var a=s(39960);const c={title:"title_f1Hy"};function h(t){let{className:e}=t;const{metadata:s,isBlogPostPage:n}=(0,r.C)(),{permalink:l,title:h}=s,d=n?"h1":"h2";return(0,o.jsx)(d,{className:(0,i.Z)(c.title,e),itemProp:"headline",children:n?h:(0,o.jsx)(a.Z,{itemProp:"url",to:l,children:h})})}var d=s(95999),u=s(88824);const p={container:"container_mt6G"};function m(t){let{readingTime:e}=t;const s=function(){const{selectMessage:t}=(0,u.c)();return e=>{const s=Math.ceil(e);return t(s,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,o.jsx)(o.Fragment,{children:s(e)})}function g(t){let{date:e,formattedDate:s}=t;return(0,o.jsx)("time",{dateTime:e,itemProp:"datePublished",children:s})}function v(){return(0,o.jsx)(o.Fragment,{children:" \xb7 "})}function _(t){let{className:e}=t;const{metadata:s}=(0,r.C)(),{date:n,formattedDate:l,readingTime:a}=s;return(0,o.jsxs)("div",{className:(0,i.Z)(p.container,"margin-vert--md",e),children:[(0,o.jsx)(g,{date:n,formattedDate:l}),void 0!==a&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{}),(0,o.jsx)(m,{readingTime:a})]})]})}function f(t){return t.href?(0,o.jsx)(a.Z,{...t}):(0,o.jsx)(o.Fragment,{children:t.children})}function $(t){let{author:e,className:s}=t;const{name:r,title:n,url:l,imageURL:a,email:c}=e,h=l||c&&`mailto:${c}`||void 0;return(0,o.jsxs)("div",{className:(0,i.Z)("avatar margin-bottom--sm",s),children:[a&&(0,o.jsx)(f,{href:h,className:"avatar__photo-link",children:(0,o.jsx)("img",{className:"avatar__photo",src:a,alt:r,itemProp:"image"})}),r&&(0,o.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,o.jsx)("div",{className:"avatar__name",children:(0,o.jsx)(f,{href:h,itemProp:"url",children:(0,o.jsx)("span",{itemProp:"name",children:r})})}),n&&(0,o.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:n})]})]})}const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function y(t){let{className:e}=t;const{metadata:{authors:s},assets:n}=(0,r.C)();if(0===s.length)return null;const l=s.every((t=>{let{name:e}=t;return!e}));return(0,o.jsx)("div",{className:(0,i.Z)("margin-top--md margin-bottom--sm",l?b.imageOnlyAuthorRow:"row",e),children:s.map(((t,e)=>(0,o.jsx)("div",{className:(0,i.Z)(!l&&"col col--6",l?b.imageOnlyAuthorCol:b.authorCol),children:(0,o.jsx)($,{author:{...t,imageURL:n.authorsImageUrls[e]??t.imageURL}})},e)))})}function A(){return(0,o.jsxs)("header",{children:[(0,o.jsx)(h,{}),(0,o.jsx)(_,{}),(0,o.jsx)(y,{})]})}var S=s(89111),x=s(94830);function E(t){let{children:e,className:s}=t;const n=function(){const{isBlogPostPage:t}=(0,r.C)();return t?void 0:"margin-bottom--xl"}();return(0,o.jsxs)(l,{className:(0,i.Z)(n,s),children:[(0,o.jsx)(A,{}),(0,o.jsx)(S.Z,{children:e}),(0,o.jsx)(x.Z,{})]})}},32244:(t,e,s)=>{s.d(e,{Z:()=>o});s(67294);var i=s(86010),r=s(39960),n=s(85893);function o(t){const{permalink:e,title:s,subLabel:o,isNext:l}=t;return(0,n.jsxs)(r.Z,{className:(0,i.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:e,children:[o&&(0,n.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,n.jsx)("div",{className:"pagination-nav__label",children:s})]})}},13008:(t,e,s)=>{s.d(e,{Z:()=>l});s(67294);var i=s(86010),r=s(39960);const n={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var o=s(85893);function l(t){let{permalink:e,label:s,count:l}=t;return(0,o.jsxs)(r.Z,{href:e,className:(0,i.Z)(n.tag,l?n.tagWithCount:n.tagRegular),children:[s,l&&(0,o.jsx)("span",{children:l})]})}},88824:(t,e,s)=>{s.d(e,{c:()=>c});var i=s(67294),r=s(52263);const n=["zero","one","two","few","many","other"];function o(t){return n.filter((e=>t.includes(e)))}const l={locale:"en",pluralForms:o(["one","other"]),select:t=>1===t?"one":"other"};function a(){const{i18n:{currentLocale:t}}=(0,r.Z)();return(0,i.useMemo)((()=>{try{return function(t){const e=new Intl.PluralRules(t);return{locale:t,pluralForms:o(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${e.message}\n`),l}}),[t])}function c(){const t=a();return{selectMessage:(e,s)=>function(t,e,s){const i=t.split("|");if(1===i.length)return i[0];i.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${i.length}: ${t}`);const r=s.select(e),n=s.pluralForms.indexOf(r);return i[Math.min(n,i.length-1)]}(s,e,t)}}},99861:(t,e,s)=>{s.d(e,{Z:()=>i});const i=s(58071)}}]);