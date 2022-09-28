import{z as D,cb as V,w as A,c as g,aP as J,a1 as j,$ as K,a2 as B,a0 as U,d as S,J as G,a as N,o as Q,q as x,M as R,a7 as z,cc as X,a9 as Y,B as y,aA as Z,_ as ee,cd as ne,b as k,aj as L,ce as oe,g as a,f as h,ab as te,am as P,l as le,bq as se,m as re,ao as ae,by as ie,an as ce,k as ue}from"../assets/index.038520d3.js";function de(n,e){const o=D(V,null);{const t=()=>{!n.hljs&&!(o!=null&&o.mergedHljsRef.value)&&J("code","hljs is not set.")};e?A(()=>{e.value&&t()}):t()}return g(()=>n.hljs||(o==null?void 0:o.mergedHljsRef.value))}var he=j([K("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[B("show-line-numbers",`
 display: flex;
 `),U("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),B("word-wrap",[j("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),j("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),j("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:n})=>{const e=`${n.bPrefix}code`;return[`${e} .hljs-comment,
 ${e} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${e} .hljs-doctag,
 ${e} .hljs-keyword,
 ${e} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${e} .hljs-section,
 ${e} .hljs-name,
 ${e} .hljs-selector-tag,
 ${e} .hljs-deletion,
 ${e} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${e} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${e} .hljs-string,
 ${e} .hljs-regexp,
 ${e} .hljs-addition,
 ${e} .hljs-attribute,
 ${e} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${e} .hljs-built_in,
 ${e} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${e} .hljs-attr,
 ${e} .hljs-variable,
 ${e} .hljs-template-variable,
 ${e} .hljs-type,
 ${e} .hljs-selector-class,
 ${e} .hljs-selector-attr,
 ${e} .hljs-selector-pseudo,
 ${e} .hljs-number {
 color: var(--n-hue-6);
 }`,`${e} .hljs-symbol,
 ${e} .hljs-bullet,
 ${e} .hljs-link,
 ${e} .hljs-meta,
 ${e} .hljs-selector-id,
 ${e} .hljs-title {
 color: var(--n-hue-2);
 }`,`${e} .hljs-emphasis {
 font-style: italic;
 }`,`${e} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${e} .hljs-link {
 text-decoration: underline;
 }`]}]);const _e=Object.assign(Object.assign({},z.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean});var fe=S({name:"Code",props:_e,setup(n,{slots:e}){const{internalNoHighlight:o}=n,{mergedClsPrefixRef:t,inlineThemeDisabled:d}=G(),c=N(null),m=o?{value:void 0}:de(n),p=(l,r,s)=>{const{value:i}=m;return!i||!(l&&i.getLanguage(l))?null:i.highlight(s?r.trim():r,{language:l}).value},w=g(()=>n.inline||n.wordWrap?!1:n.showLineNumbers),f=()=>{if(e.default)return;const{value:l}=c;if(!l)return;const{language:r}=n,s=n.uri?window.decodeURIComponent(n.code):n.code;if(r){const u=p(r,s,n.trim);if(u!==null){if(n.inline)l.innerHTML=u;else{const $=l.querySelector(".__code__");$&&l.removeChild($);const v=document.createElement("pre");v.className="__code__",v.innerHTML=u,l.appendChild(v)}return}}if(n.inline){l.textContent=s;return}const i=l.querySelector(".__code__");if(i)i.textContent=s;else{const u=document.createElement("pre");u.className="__code__",u.textContent=s,l.innerHTML="",l.appendChild(u)}};Q(f),x(R(n,"language"),f),x(R(n,"code"),f),o||x(m,f);const C=z("Code","-code",he,X,n,t),b=g(()=>{const{common:{cubicBezierEaseInOut:l,fontFamilyMono:r},self:{textColor:s,fontSize:i,fontWeightStrong:u,lineNumberTextColor:$,"mono-3":v,"hue-1":H,"hue-2":T,"hue-3":M,"hue-4":O,"hue-5":I,"hue-5-2":q,"hue-6":F,"hue-6-2":W}}=C.value,{internalFontSize:E}=n;return{"--n-font-size":E?`${E}px`:i,"--n-font-family":r,"--n-font-weight-strong":u,"--n-bezier":l,"--n-text-color":s,"--n-mono-3":v,"--n-hue-1":H,"--n-hue-2":T,"--n-hue-3":M,"--n-hue-4":O,"--n-hue-5":I,"--n-hue-5-2":q,"--n-hue-6":F,"--n-hue-6-2":W,"--n-line-number-text-color":$}}),_=d?Y("code",g(()=>`${n.internalFontSize||"a"}`),b,n):void 0;return{mergedClsPrefix:t,codeRef:c,mergedShowLineNumbers:w,lineNumbers:g(()=>{let l=1;const r=[];let s=!1;for(const i of n.code)i===`
`?(s=!0,r.push(l++)):s=!1;return s||r.push(l++),r.join(`
`)}),cssVars:d?void 0:b,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){var n,e;const{mergedClsPrefix:o,wordWrap:t,mergedShowLineNumbers:d,onRender:c}=this;return c==null||c(),y("code",{class:[`${o}-code`,this.themeClass,t&&`${o}-code--word-wrap`,d&&`${o}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},d?y("pre",{class:`${o}-code__line-numbers`},this.lineNumbers):null,(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n))}});const me=Object.assign(Object.assign({},z.props),{trigger:String,xScrollable:Boolean,onScroll:Function}),ve=S({name:"Scrollbar",props:me,setup(){const n=N(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var t;(t=n.value)===null||t===void 0||t.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var t;(t=n.value)===null||t===void 0||t.scrollBy(o[0],o[1])}}),{scrollbarInstRef:n})},render(){return y(Z,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}});var ge=ve;const be=P(" \u590D\u5236\u4EE3\u7801 "),$e={name:"CodeCard"},je=S({...$e,props:{code:{type:String,required:!1,default:""},wordWrap:{type:Boolean,required:!1,default:!1}},setup(n){const e=N(!1);return(o,t)=>{const d=re,c=ae,m=ie,p=ce,w=fe,f=ge,C=ue,b=ne("copy");return k(),L(C,{class:"code-card"},oe({"header-extra":a(()=>[h(p,null,{default:a(()=>[h(m,null,{trigger:a(()=>[te((k(),L(c,{text:""},{default:a(()=>[h(d,{size:16,icon:"copy"})]),_:1})),[[b,n.code]])]),default:a(()=>[be]),_:1}),h(m,null,{trigger:a(()=>[h(c,{text:"",onClick:t[0]||(t[0]=_=>e.value=!e.value)},{default:a(()=>[h(d,{size:16,icon:"code"})]),_:1})]),default:a(()=>[P(" "+le(e.value?"\u9690\u85CF\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801"),1)]),_:1})]),_:1})]),default:a(()=>[se(o.$slots,"default",{},void 0,!0)]),_:2},[e.value?{name:"footer",fn:a(()=>[h(f,{"x-scrollable":""},{default:a(()=>[h(w,{code:n.code,"word-wrap":n.wordWrap,language:"html"},null,8,["code","word-wrap"])]),_:1})]),key:"0"}:void 0]),1024)}}});var we=ee(je,[["__scopeId","data-v-71913322"],["__file","/home/runner/work/naive-admin/naive-admin/src/components/CodeCard/CodeCard.vue"]]);export{we as _};
