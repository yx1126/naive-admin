import{I as K,$,ar as N,a1 as F,as as G,a0 as I,d as q,J as D,a as y,z as B,c as x,a7 as P,at as J,au as U,q as X,av as Y,a9 as Q,aw as Z,o as ee,w as re,H as te,ax as oe,B as R,ai as ne,V as ae}from"../assets/index.67c47f0d.js";const H=!1,se=(e={})=>{var s;const{root:i=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(s=e.threshold)!==null&&s!==void 0?s:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof i=="string"?document.querySelector(i):i)||document.documentElement})}},M=new WeakMap,_=new WeakMap,k=new WeakMap,ie=(e,s,i)=>{if(!e)return()=>{};const n=se(s),{root:l}=n.options;let a;const d=M.get(l);d?a=d:(a=new Map,M.set(l,a));let f,o;a.has(n.hash)?(o=a.get(n.hash),o[1].has(e)||(f=o[0],o[1].add(e),f.observe(e))):(f=new IntersectionObserver(h=>{h.forEach(c=>{if(c.isIntersecting){const g=_.get(c.target),S=k.get(c.target);g&&g(),S&&(S.value=!0)}})},n.options),f.observe(e),o=[f,new Set([e])],a.set(n.hash,o));let v=!1;const m=()=>{v||(_.delete(e),k.delete(e),v=!0,o[1].has(e)&&(o[0].unobserve(e),o[1].delete(e)),o[1].size<=0&&a.delete(n.hash),a.size||M.delete(l))};return _.set(e,m),k.set(e,i),m},le=K("n-avatar-group");var de=$("avatar",`
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
`,[N(F("&","--n-merged-color: var(--n-color-modal);")),G(F("&","--n-merged-color: var(--n-color-popover);")),F("img",`
 width: 100%;
 height: 100%;
 `),I("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),$("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),I("text","line-height: 1.25")]);const ce=Object.assign(Object.assign({},P.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,color:String});var fe=q({name:"Avatar",props:ce,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:i}=D(e),n=y(!1);let l=null;const a=y(null),d=y(null),f=()=>{const{value:r}=a;if(r&&(l===null||l!==r.innerHTML)){l=r.innerHTML;const{value:t}=d;if(t){const{offsetWidth:p,offsetHeight:b}=t,{offsetWidth:u,offsetHeight:E}=r,O=.9,j=Math.min(p/u*O,b/E*O,1);r.style.transform=`translateX(-50%) translateY(-50%) scale(${j})`}}},o=B(le,null),v=x(()=>{const{size:r}=e;if(r)return r;const{size:t}=o||{};return t||"medium"}),m=P("Avatar","-avatar",de,J,e,s),h=B(U,null),c=x(()=>{if(o)return!0;const{round:r,circle:t}=e;return r!==void 0||t!==void 0?r||t:h?h.roundRef.value:!1}),g=x(()=>o?!0:e.bordered||!1),S=r=>{if(!L.value)return;n.value=!0;const{onError:t}=e;t&&t(r)};X(()=>e.src,()=>n.value=!1);const C=x(()=>{const r=v.value,t=c.value,p=g.value,{color:b}=e,{self:{borderRadius:u,fontSize:E,color:O,border:j,colorModal:W,colorPopover:A},common:{cubicBezierEaseInOut:V}}=m.value;let w;return typeof r=="number"?w=`${r}px`:w=m.value.self[Y("height",r)],{"--n-font-size":E,"--n-border":p?j:"none","--n-border-radius":t?"50%":u,"--n-color":b||O,"--n-color-modal":b||W,"--n-color-popover":b||A,"--n-bezier":V,"--n-merged-size":`var(--n-avatar-size-override, ${w})`}}),z=i?Q("avatar",x(()=>{const r=v.value,t=c.value,p=g.value,{color:b}=e;let u="";return r&&(typeof r=="number"?u+=`a${r}`:u+=r[0]),t&&(u+="b"),p&&(u+="c"),b&&(u+=Z(b)),u}),C,e):void 0,L=y(!e.lazy);ee(()=>{if(H)return;let r;const t=re(()=>{r==null||r(),r=void 0,e.lazy&&(r=ie(d.value,e.intersectionObserverOptions,L))});te(()=>{t(),r==null||r()})});const T=y(!e.lazy);return{textRef:a,selfRef:d,mergedRoundRef:c,mergedClsPrefix:s,fitTextTransform:f,cssVars:i?void 0:C,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender,hasLoadError:n,handleError:S,shouldStartLoading:L,loaded:T,mergedOnLoad:r=>{const{onLoad:t}=e;t==null||t(r),T.value=!0}}},render(){var e,s;const{$slots:i,src:n,mergedClsPrefix:l,lazy:a,onRender:d,mergedOnLoad:f,shouldStartLoading:o,loaded:v,hasLoadError:m}=this;d==null||d();let h;const c=!v&&!m&&(this.renderPlaceholder?this.renderPlaceholder():(s=(e=this.$slots).placeholder)===null||s===void 0?void 0:s.call(e));return this.hasLoadError?h=this.renderFallback?this.renderFallback():oe(i.fallback,()=>[R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):h=ne(i.default,g=>{if(g)return R(ae,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${l}-avatar__text`},g)});if(n)return R("img",{loading:H&&a?"lazy":"eager",src:H||o||v?n:void 0,onLoad:f,"data-image-src":n,onError:this.handleError,style:[{objectFit:this.objectFit},c?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]})}),R("span",{ref:"selfRef",class:[`${l}-avatar`,this.themeClass],style:this.cssVars},h,a&&c)}});export{fe as _};
