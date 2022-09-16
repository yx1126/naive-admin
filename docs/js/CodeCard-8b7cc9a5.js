import{z as V,bY as q,c as v,a1 as p,$ as A,a2 as B,a0 as J,d as S,J as K,a as N,o as U,q as x,M as E,a6 as z,bZ as Y,a7 as Z,B as y,aA as G,_ as Q,b_ as X,b as k,aj as L,b$ as ee,g as a,f as h,a9 as ne,am as H,l as oe,bp as te,m as le,ao as se,bv as re,an as ae,k as ie}from"../assets/index.c1922953.js";function ce(n,e){const o=V(q,null);return v(()=>n.hljs||(o==null?void 0:o.mergedHljsRef.value))}var ue=p([A("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[B("show-line-numbers",`
 display: flex;
 `),J("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),B("word-wrap",[p("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),p("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),p("[class^=hljs]",`
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
 }`]}]);const de=Object.assign(Object.assign({},z.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean});var he=S({name:"Code",props:de,setup(n,{slots:e}){const{internalNoHighlight:o}=n,{mergedClsPrefixRef:l,inlineThemeDisabled:d}=K(),c=N(null),f=o?{value:void 0}:ce(n),j=(t,r,s)=>{const{value:i}=f;return!i||!(t&&i.getLanguage(t))?null:i.highlight(s?r.trim():r,{language:t}).value},w=v(()=>n.inline||n.wordWrap?!1:n.showLineNumbers),m=()=>{if(e.default)return;const{value:t}=c;if(!t)return;const{language:r}=n,s=n.uri?window.decodeURIComponent(n.code):n.code;if(r){const u=j(r,s,n.trim);if(u!==null){if(n.inline)t.innerHTML=u;else{const $=t.querySelector(".__code__");$&&t.removeChild($);const g=document.createElement("pre");g.className="__code__",g.innerHTML=u,t.appendChild(g)}return}}if(n.inline){t.textContent=s;return}const i=t.querySelector(".__code__");if(i)i.textContent=s;else{const u=document.createElement("pre");u.className="__code__",u.textContent=s,t.innerHTML="",t.appendChild(u)}};U(m),x(E(n,"language"),m),x(E(n,"code"),m),o||x(f,m);const C=z("Code","-code",ue,Y,n,l),b=v(()=>{const{common:{cubicBezierEaseInOut:t,fontFamilyMono:r},self:{textColor:s,fontSize:i,fontWeightStrong:u,lineNumberTextColor:$,"mono-3":g,"hue-1":P,"hue-2":T,"hue-3":M,"hue-4":O,"hue-5":I,"hue-5-2":F,"hue-6":W,"hue-6-2":D}}=C.value,{internalFontSize:R}=n;return{"--n-font-size":R?`${R}px`:i,"--n-font-family":r,"--n-font-weight-strong":u,"--n-bezier":t,"--n-text-color":s,"--n-mono-3":g,"--n-hue-1":P,"--n-hue-2":T,"--n-hue-3":M,"--n-hue-4":O,"--n-hue-5":I,"--n-hue-5-2":F,"--n-hue-6":W,"--n-hue-6-2":D,"--n-line-number-text-color":$}}),_=d?Z("code",v(()=>`${n.internalFontSize||"a"}`),b,n):void 0;return{mergedClsPrefix:l,codeRef:c,mergedShowLineNumbers:w,lineNumbers:v(()=>{let t=1;const r=[];let s=!1;for(const i of n.code)i===`
`?(s=!0,r.push(t++)):s=!1;return s||r.push(t++),r.join(`
`)}),cssVars:d?void 0:b,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){var n,e;const{mergedClsPrefix:o,wordWrap:l,mergedShowLineNumbers:d,onRender:c}=this;return c==null||c(),y("code",{class:[`${o}-code`,this.themeClass,l&&`${o}-code--word-wrap`,d&&`${o}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},d?y("pre",{class:`${o}-code__line-numbers`},this.lineNumbers):null,(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n))}});const _e=Object.assign(Object.assign({},z.props),{trigger:String,xScrollable:Boolean,onScroll:Function}),me=S({name:"Scrollbar",props:_e,setup(){const n=N(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var l;(l=n.value)===null||l===void 0||l.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var l;(l=n.value)===null||l===void 0||l.scrollBy(o[0],o[1])}}),{scrollbarInstRef:n})},render(){return y(G,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}});var fe=me;const ge=H(" \u590D\u5236\u4EE3\u7801 "),ve={name:"CodeCard"},be=S({...ve,props:{code:{default:""},wordWrap:{type:Boolean,default:!1}},setup(n){const e=N(!1);return(o,l)=>{const d=le,c=se,f=re,j=ae,w=he,m=fe,C=ie,b=X("copy");return k(),L(C,{class:"code-card"},ee({"header-extra":a(()=>[h(j,null,{default:a(()=>[h(f,null,{trigger:a(()=>[ne((k(),L(c,{text:""},{default:a(()=>[h(d,{size:16,icon:"copy"})]),_:1})),[[b,n.code]])]),default:a(()=>[ge]),_:1}),h(f,null,{trigger:a(()=>[h(c,{text:"",onClick:l[0]||(l[0]=_=>e.value=!e.value)},{default:a(()=>[h(d,{size:16,icon:"code"})]),_:1})]),default:a(()=>[H(" "+oe(e.value?"\u9690\u85CF\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801"),1)]),_:1})]),_:1})]),default:a(()=>[te(o.$slots,"default",{},void 0,!0)]),_:2},[e.value?{name:"footer",fn:a(()=>[h(m,{"x-scrollable":""},{default:a(()=>[h(w,{code:n.code,"word-wrap":n.wordWrap,language:"html"},null,8,["code","word-wrap"])]),_:1})]),key:"0"}:void 0]),1024)}}});var pe=Q(be,[["__scopeId","data-v-55074c43"]]);export{pe as _};
