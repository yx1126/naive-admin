import{I as K,$ as B,ar as N,a1 as H,as as G,a0 as F,d as q,J as D,a as y,z as W,c as x,a6 as k,at as J,q as U,a7 as X,o as Y,w as Q,H as Z,B as R,ah as ee,V as te,au as re,av as oe,aw as ne}from"../assets/index.cdd11832.js";const M=!1,ae=(e={})=>{var s;const{root:i=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(s=e.threshold)!==null&&s!==void 0?s:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof i=="string"?document.querySelector(i):i)||document.documentElement})}},_=new WeakMap,C=new WeakMap,T=new WeakMap,se=(e,s,i)=>{if(!e)return()=>{};const n=ae(s),{root:l}=n.options;let a;const d=_.get(l);d?a=d:(a=new Map,_.set(l,a));let f,o;a.has(n.hash)?(o=a.get(n.hash),o[1].has(e)||(f=o[0],o[1].add(e),f.observe(e))):(f=new IntersectionObserver(h=>{h.forEach(c=>{if(c.isIntersecting){const g=C.get(c.target),O=T.get(c.target);g&&g(),O&&(O.value=!0)}})},n.options),f.observe(e),o=[f,new Set([e])],a.set(n.hash,o));let v=!1;const m=()=>{v||(C.delete(e),T.delete(e),v=!0,o[1].has(e)&&(o[0].unobserve(e),o[1].delete(e)),o[1].size<=0&&a.delete(n.hash),a.size||_.delete(l))};return C.set(e,m),T.set(e,i),m},ie=K("n-avatar-group");var le=B("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[N(H("&","--n-merged-color: var(--n-color-modal);")),G(H("&","--n-merged-color: var(--n-color-popover);")),H("img",`
 width: 100%;
 height: 100%;
 `),F("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),B("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),F("text","line-height: 1.25")]);const de=Object.assign(Object.assign({},k.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,color:String});var ue=q({name:"Avatar",props:de,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:i}=D(e),n=y(!1);let l=null;const a=y(null),d=y(null),f=()=>{const{value:t}=a;if(t&&(l===null||l!==t.innerHTML)){l=t.innerHTML;const{value:r}=d;if(r){const{offsetWidth:p,offsetHeight:b}=r,{offsetWidth:u,offsetHeight:L}=t,S=.9,j=Math.min(p/u*S,b/L*S,1);t.style.transform=`translateX(-50%) translateY(-50%) scale(${j})`}}},o=W(ie,null),v=x(()=>{const{size:t}=e;if(t)return t;const{size:r}=o||{};return r||"medium"}),m=k("Avatar","-avatar",le,re,e,s),h=W(J,null),c=x(()=>{if(o)return!0;const{round:t,circle:r}=e;return t!==void 0||r!==void 0?t||r:h?h.roundRef.value:!1}),g=x(()=>o?!0:e.bordered||!1),O=t=>{if(!E.value)return;n.value=!0;const{onError:r}=e;r&&r(t)};U(()=>e.src,()=>n.value=!1);const $=x(()=>{const t=v.value,r=c.value,p=g.value,{color:b}=e,{self:{borderRadius:u,fontSize:L,color:S,border:j,colorModal:A,colorPopover:P},common:{cubicBezierEaseInOut:V}}=m.value;let w;return typeof t=="number"?w=`${t}px`:w=m.value.self[oe("height",t)],{"--n-font-size":L,"--n-border":p?j:"none","--n-border-radius":r?"50%":u,"--n-color":b||S,"--n-color-modal":b||A,"--n-color-popover":b||P,"--n-bezier":V,"--n-merged-size":`var(--n-avatar-size-override, ${w})`}}),z=i?X("avatar",x(()=>{const t=v.value,r=c.value,p=g.value,{color:b}=e;let u="";return t&&(typeof t=="number"?u+=`a${t}`:u+=t[0]),r&&(u+="b"),p&&(u+="c"),b&&(u+=ne(b)),u}),$,e):void 0,E=y(!e.lazy);Y(()=>{if(M)return;let t;const r=Q(()=>{t==null||t(),t=void 0,e.lazy&&(t=se(d.value,e.intersectionObserverOptions,E))});Z(()=>{r(),t==null||t()})});const I=y(!e.lazy);return{textRef:a,selfRef:d,mergedRoundRef:c,mergedClsPrefix:s,fitTextTransform:f,cssVars:i?void 0:$,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender,hasLoadError:n,handleError:O,shouldStartLoading:E,loaded:I,mergedOnLoad:t=>{const{onLoad:r}=e;r==null||r(t),I.value=!0}}},render(){var e,s;const{$slots:i,src:n,mergedClsPrefix:l,lazy:a,onRender:d,mergedOnLoad:f,shouldStartLoading:o,loaded:v,hasLoadError:m}=this;d==null||d();let h;const c=!v&&!m&&((s=(e=this.$slots).placeholder)===null||s===void 0?void 0:s.call(e));return this.hasLoadError?h=R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):h=ee(i.default,g=>{if(g)return R(te,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${l}-avatar__text`},g)});if(n)return R("img",{loading:M&&a?"lazy":"eager",src:M||o||v?n:void 0,onLoad:f,"data-image-src":n,onError:this.handleError,style:[{objectFit:this.objectFit},c?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]})}),R("span",{ref:"selfRef",class:[`${l}-avatar`,this.themeClass],style:this.cssVars},h,a&&c)}});export{ue as _};
