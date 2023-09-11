import{D as V,bL as q,w as K,g as p,ba as A,L as w,J as G,M as R,K as J,d as S,G as Q,f as N,i as U,Q as y,O as B,R as z,bM as X,S as Y,h as x,aE as Z,_ as ee,bz as ne,j as L,a7 as F,bm as oe,m as a,l as d,W as te,aa as k,x as se,aT as le,y as re,ac as ae,b0 as ie,ab as ce,s as ue}from"../assets/index-5b64e5b7.js";function de(n,e){const o=V(q,null);{const s=()=>{!n.hljs&&!(o!=null&&o.mergedHljsRef.value)&&A("code","hljs is not set.")};e?K(()=>{e.value&&s()}):s()}return p(()=>n.hljs||(o==null?void 0:o.mergedHljsRef.value))}const he=w([G("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[R("show-line-numbers",`
 display: flex;
 `),J("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),R("word-wrap",[w("pre",`
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
 }`]}]),me=Object.assign(Object.assign({},z.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),fe=S({name:"Code",props:me,setup(n,{slots:e}){const{internalNoHighlight:o}=n,{mergedClsPrefixRef:s,inlineThemeDisabled:m}=Q(),h=N(null),_=o?{value:void 0}:de(n),v=(t,l,r)=>{const{value:i}=_;return!i||!(t&&i.getLanguage(t))?null:i.highlight(r?l.trim():l,{language:t}).value},b=p(()=>n.inline||n.wordWrap?!1:n.showLineNumbers),f=()=>{if(e.default)return;const{value:t}=h;if(!t)return;const{language:l}=n,r=n.uri?window.decodeURIComponent(n.code):n.code;if(l){const c=v(l,r,n.trim);if(c!==null){if(n.inline)t.innerHTML=c;else{const j=t.querySelector(".__code__");j&&t.removeChild(j);const g=document.createElement("pre");g.className="__code__",g.innerHTML=c,t.appendChild(g)}return}}if(n.inline){t.textContent=r;return}const i=t.querySelector(".__code__");if(i)i.textContent=r;else{const c=document.createElement("pre");c.className="__code__",c.textContent=r,t.innerHTML="",t.appendChild(c)}};U(f),y(B(n,"language"),f),y(B(n,"code"),f),o||y(_,f);const C=z("Code","-code",he,X,n,s),$=p(()=>{const{common:{cubicBezierEaseInOut:t,fontFamilyMono:l},self:{textColor:r,fontSize:i,fontWeightStrong:c,lineNumberTextColor:j,"mono-3":g,"hue-1":T,"hue-2":H,"hue-3":M,"hue-4":O,"hue-5":P,"hue-5-2":I,"hue-6":W,"hue-6-2":D}}=C.value,{internalFontSize:E}=n;return{"--n-font-size":E?`${E}px`:i,"--n-font-family":l,"--n-font-weight-strong":c,"--n-bezier":t,"--n-text-color":r,"--n-mono-3":g,"--n-hue-1":T,"--n-hue-2":H,"--n-hue-3":M,"--n-hue-4":O,"--n-hue-5":P,"--n-hue-5-2":I,"--n-hue-6":W,"--n-hue-6-2":D,"--n-line-number-text-color":j}}),u=m?Y("code",p(()=>`${n.internalFontSize||"a"}`),$,n):void 0;return{mergedClsPrefix:s,codeRef:h,mergedShowLineNumbers:b,lineNumbers:p(()=>{let t=1;const l=[];let r=!1;for(const i of n.code)i===`
`?(r=!0,l.push(t++)):r=!1;return r||l.push(t++),l.join(`
`)}),cssVars:m?void 0:$,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var n,e;const{mergedClsPrefix:o,wordWrap:s,mergedShowLineNumbers:m,onRender:h}=this;return h==null||h(),x("code",{class:[`${o}-code`,this.themeClass,s&&`${o}-code--word-wrap`,m&&`${o}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},m?x("pre",{class:`${o}-code__line-numbers`},this.lineNumbers):null,(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n))}}),_e=Object.assign(Object.assign({},z.props),{trigger:String,xScrollable:Boolean,onScroll:Function,size:Number}),ge=S({name:"Scrollbar",props:_e,setup(){const n=N(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var s;(s=n.value)===null||s===void 0||s.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var s;(s=n.value)===null||s===void 0||s.scrollBy(o[0],o[1])}}),{scrollbarInstRef:n})},render(){return x(Z,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),pe=ge,ve=S({name:"CodeCard",props:{code:{type:String,default:""},wordWrap:{type:Boolean,default:!1}},setup(){return{showFooter:N(!1)}}});function be(n,e,o,s,m,h){const _=re,v=ae,b=ie,f=ce,C=fe,$=pe,u=ue,t=ne("copy");return L(),F(u,{class:"code-card"},oe({"header-extra":a(()=>[d(f,null,{default:a(()=>[d(b,null,{trigger:a(()=>[te((L(),F(v,{text:""},{default:a(()=>[d(_,{size:16,icon:"copy"})]),_:1})),[[t,n.code]])]),default:a(()=>[k(" 复制代码 ")]),_:1}),d(b,null,{trigger:a(()=>[d(v,{text:"",onClick:e[0]||(e[0]=l=>n.showFooter=!n.showFooter)},{default:a(()=>[d(_,{size:16,icon:"code"})]),_:1})]),default:a(()=>[k(" "+se(n.showFooter?"隐藏代码":"显示代码"),1)]),_:1})]),_:1})]),default:a(()=>[le(n.$slots,"default",{},void 0,!0)]),_:2},[n.showFooter?{name:"footer",fn:a(()=>[d($,{"x-scrollable":""},{default:a(()=>[d(C,{code:n.code,"word-wrap":n.wordWrap,language:"html"},null,8,["code","word-wrap"])]),_:1})]),key:"0"}:void 0]),1024)}const je=ee(ve,[["render",be],["__scopeId","data-v-0ad36a5c"],["__file","/home/runner/work/naive-admin/naive-admin/src/components/CodeCard/CodeCard.vue"]]);export{je as _};
