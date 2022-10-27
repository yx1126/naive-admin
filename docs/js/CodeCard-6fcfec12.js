import{D as V,ce as q,w as A,c as v,aK as K,a1 as w,$ as G,a2 as B,a0 as J,d as S,J as U,a as N,o as Q,q as y,M as R,a7 as E,cf as X,a9 as Y,G as x,aB as Z,_ as ee,cg as ne,b as k,aj as F,ch as oe,g as a,f as d,ab as te,am as L,l as se,bu as le,m as re,ao as ae,bA as ie,an as ce,k as ue}from"../assets/index.99e24d32.js";function de(n,e){const o=V(q,null);{const s=()=>{!n.hljs&&!(o!=null&&o.mergedHljsRef.value)&&K("code","hljs is not set.")};e?A(()=>{e.value&&s()}):s()}return v(()=>n.hljs||(o==null?void 0:o.mergedHljsRef.value))}var he=w([G("code",`
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
 `),B("word-wrap",[w("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),w("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),w("[class^=hljs]",`
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
 }`]}]);const fe=Object.assign(Object.assign({},E.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean});var me=S({name:"Code",props:fe,setup(n,{slots:e}){const{internalNoHighlight:o}=n,{mergedClsPrefixRef:s,inlineThemeDisabled:f}=U(),h=N(null),_=o?{value:void 0}:de(n),p=(t,l,r)=>{const{value:i}=_;return!i||!(t&&i.getLanguage(t))?null:i.highlight(r?l.trim():l,{language:t}).value},$=v(()=>n.inline||n.wordWrap?!1:n.showLineNumbers),m=()=>{if(e.default)return;const{value:t}=h;if(!t)return;const{language:l}=n,r=n.uri?window.decodeURIComponent(n.code):n.code;if(l){const c=p(l,r,n.trim);if(c!==null){if(n.inline)t.innerHTML=c;else{const j=t.querySelector(".__code__");j&&t.removeChild(j);const g=document.createElement("pre");g.className="__code__",g.innerHTML=c,t.appendChild(g)}return}}if(n.inline){t.textContent=r;return}const i=t.querySelector(".__code__");if(i)i.textContent=r;else{const c=document.createElement("pre");c.className="__code__",c.textContent=r,t.innerHTML="",t.appendChild(c)}};Q(m),y(R(n,"language"),m),y(R(n,"code"),m),o||y(_,m);const C=E("Code","-code",he,X,n,s),b=v(()=>{const{common:{cubicBezierEaseInOut:t,fontFamilyMono:l},self:{textColor:r,fontSize:i,fontWeightStrong:c,lineNumberTextColor:j,"mono-3":g,"hue-1":H,"hue-2":P,"hue-3":T,"hue-4":M,"hue-5":O,"hue-5-2":I,"hue-6":W,"hue-6-2":D}}=C.value,{internalFontSize:z}=n;return{"--n-font-size":z?`${z}px`:i,"--n-font-family":l,"--n-font-weight-strong":c,"--n-bezier":t,"--n-text-color":r,"--n-mono-3":g,"--n-hue-1":H,"--n-hue-2":P,"--n-hue-3":T,"--n-hue-4":M,"--n-hue-5":O,"--n-hue-5-2":I,"--n-hue-6":W,"--n-hue-6-2":D,"--n-line-number-text-color":j}}),u=f?Y("code",v(()=>`${n.internalFontSize||"a"}`),b,n):void 0;return{mergedClsPrefix:s,codeRef:h,mergedShowLineNumbers:$,lineNumbers:v(()=>{let t=1;const l=[];let r=!1;for(const i of n.code)i===`
`?(r=!0,l.push(t++)):r=!1;return r||l.push(t++),l.join(`
`)}),cssVars:f?void 0:b,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var n,e;const{mergedClsPrefix:o,wordWrap:s,mergedShowLineNumbers:f,onRender:h}=this;return h==null||h(),x("code",{class:[`${o}-code`,this.themeClass,s&&`${o}-code--word-wrap`,f&&`${o}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},f?x("pre",{class:`${o}-code__line-numbers`},this.lineNumbers):null,(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n))}});const _e=Object.assign(Object.assign({},E.props),{trigger:String,xScrollable:Boolean,onScroll:Function}),ge=S({name:"Scrollbar",props:_e,setup(){const n=N(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var s;(s=n.value)===null||s===void 0||s.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var s;(s=n.value)===null||s===void 0||s.scrollBy(o[0],o[1])}}),{scrollbarInstRef:n})},render(){return x(Z,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}});var ve=ge;const pe=S({name:"CodeCard",props:{code:{type:String,default:""},wordWrap:{type:Boolean,default:!1}},setup(){return{showFooter:N(!1)}}});function $e(n,e,o,s,f,h){const _=re,p=ae,$=ie,m=ce,C=me,b=ve,u=ue,t=ne("copy");return k(),F(u,{class:"code-card"},oe({"header-extra":a(()=>[d(m,null,{default:a(()=>[d($,null,{trigger:a(()=>[te((k(),F(p,{text:""},{default:a(()=>[d(_,{size:16,icon:"copy"})]),_:1})),[[t,n.code]])]),default:a(()=>[L(" \u590D\u5236\u4EE3\u7801 ")]),_:1}),d($,null,{trigger:a(()=>[d(p,{text:"",onClick:e[0]||(e[0]=l=>n.showFooter=!n.showFooter)},{default:a(()=>[d(_,{size:16,icon:"code"})]),_:1})]),default:a(()=>[L(" "+se(n.showFooter?"\u9690\u85CF\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801"),1)]),_:1})]),_:1})]),default:a(()=>[le(n.$slots,"default",{},void 0,!0)]),_:2},[n.showFooter?{name:"footer",fn:a(()=>[d(b,{"x-scrollable":""},{default:a(()=>[d(C,{code:n.code,"word-wrap":n.wordWrap,language:"html"},null,8,["code","word-wrap"])]),_:1})]),key:"0"}:void 0]),1024)}var je=ee(pe,[["render",$e],["__scopeId","data-v-71913322"],["__file","/home/runner/work/naive-admin/naive-admin/src/components/CodeCard/CodeCard.vue"]]);export{je as _};
