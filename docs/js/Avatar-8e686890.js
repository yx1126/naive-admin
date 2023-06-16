import{c4 as V,C as G,J as T,ap as N,L as F,aq as q,K as $,d as D,G as J,f as x,D as B,g as O,R as I,Q,S as U,i as X,w as Y,b as Z,aw as ee,a5 as re,h as R,cw as oe,V as te,cx as ne,aK as se,ce as ae}from"../assets/index-0ecb1455.js";const _=V&&"loading"in document.createElement("img"),ie=(e={})=>{var i;const{root:d=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(i=e.threshold)!==null&&i!==void 0?i:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof d=="string"?document.querySelector(d):d)||document.documentElement})}},C=new WeakMap,M=new WeakMap,P=new WeakMap,le=(e,i,d)=>{if(!e)return()=>{};const s=ie(i),{root:c}=s.options;let a;const u=C.get(c);u?a=u:(a=new Map,C.set(c,a));let h,n;a.has(s.hash)?(n=a.get(s.hash),n[1].has(e)||(h=n[0],n[1].add(e),h.observe(e))):(h=new IntersectionObserver(m=>{m.forEach(f=>{if(f.isIntersecting){const p=M.get(f.target),g=P.get(f.target);p&&p(),g&&(g.value=!0)}})},s.options),h.observe(e),n=[h,new Set([e])],a.set(s.hash,n));let b=!1;const z=()=>{b||(M.delete(e),P.delete(e),b=!0,n[1].has(e)&&(n[0].unobserve(e),n[1].delete(e)),n[1].size<=0&&a.delete(s.hash),a.size||C.delete(c))};return M.set(e,z),P.set(e,d),z},de=G("n-avatar-group"),ce=T("avatar",`
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
`,[N(F("&","--n-merged-color: var(--n-color-modal);")),q(F("&","--n-merged-color: var(--n-color-popover);")),F("img",`
 width: 100%;
 height: 100%;
 `),$("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),T("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),$("text","line-height: 1.25")]),ue=Object.assign(Object.assign({},I.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),ve=D({name:"Avatar",props:ue,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:d}=J(e),s=x(!1);let c=null;const a=x(null),u=x(null),h=()=>{const{value:r}=a;if(r&&(c===null||c!==r.innerHTML)){c=r.innerHTML;const{value:o}=u;if(o){const{offsetWidth:l,offsetHeight:t}=o,{offsetWidth:v,offsetHeight:j}=r,S=.9,E=Math.min(l/v*S,t/j*S,1);r.style.transform=`translateX(-50%) translateY(-50%) scale(${E})`}}},n=B(de,null),b=O(()=>{const{size:r}=e;if(r)return r;const{size:o}=n||{};return o||"medium"}),z=I("Avatar","-avatar",ce,ne,e,i),m=B(oe,null),f=O(()=>{if(n)return!0;const{round:r,circle:o}=e;return r!==void 0||o!==void 0?r||o:m?m.roundRef.value:!1}),p=O(()=>n?!0:e.bordered||!1),g=r=>{var o;if(!L.value)return;s.value=!0;const{onError:l,imgProps:t}=e;(o=t==null?void 0:t.onError)===null||o===void 0||o.call(t,r),l&&l(r)};Q(()=>e.src,()=>s.value=!1);const k=O(()=>{const r=b.value,o=f.value,l=p.value,{color:t}=e,{self:{borderRadius:v,fontSize:j,color:S,border:E,colorModal:W,colorPopover:A},common:{cubicBezierEaseInOut:K}}=z.value;let w;return typeof r=="number"?w=`${r}px`:w=z.value.self[se("height",r)],{"--n-font-size":j,"--n-border":l?E:"none","--n-border-radius":o?"50%":v,"--n-color":t||S,"--n-color-modal":t||W,"--n-color-popover":t||A,"--n-bezier":K,"--n-merged-size":`var(--n-avatar-size-override, ${w})`}}),y=d?U("avatar",O(()=>{const r=b.value,o=f.value,l=p.value,{color:t}=e;let v="";return r&&(typeof r=="number"?v+=`a${r}`:v+=r[0]),o&&(v+="b"),l&&(v+="c"),t&&(v+=ae(t)),v}),k,e):void 0,L=x(!e.lazy);X(()=>{if(_)return;let r;const o=Y(()=>{r==null||r(),r=void 0,e.lazy&&(r=le(u.value,e.intersectionObserverOptions,L))});Z(()=>{o(),r==null||r()})});const H=x(!e.lazy);return{textRef:a,selfRef:u,mergedRoundRef:f,mergedClsPrefix:i,fitTextTransform:h,cssVars:d?void 0:k,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender,hasLoadError:s,handleError:g,shouldStartLoading:L,loaded:H,mergedOnLoad:r=>{var o;const{onLoad:l,imgProps:t}=e;l==null||l(r),(o=t==null?void 0:t.onLoad)===null||o===void 0||o.call(t,r),H.value=!0}}},render(){var e,i;const{$slots:d,src:s,mergedClsPrefix:c,lazy:a,onRender:u,mergedOnLoad:h,shouldStartLoading:n,loaded:b,hasLoadError:z}=this;u==null||u();let m;const f=!b&&!z&&(this.renderPlaceholder?this.renderPlaceholder():(i=(e=this.$slots).placeholder)===null||i===void 0?void 0:i.call(e));return this.hasLoadError?m=this.renderFallback?this.renderFallback():ee(d.fallback,()=>[R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):m=re(d.default,p=>{if(p)return R(te,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${c}-avatar__text`},p)});if(s){const{imgProps:g}=this;return R("img",Object.assign(Object.assign({},g),{loading:_&&!this.intersectionObserverOptions&&a?"lazy":"eager",src:_||n||b?s:void 0,onLoad:h,"data-image-src":s,onError:this.handleError,style:[g==null?void 0:g.style,{objectFit:this.objectFit},f?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),R("span",{ref:"selfRef",class:[`${c}-avatar`,this.themeClass],style:this.cssVars},m,a&&f)}});export{ve as _};
