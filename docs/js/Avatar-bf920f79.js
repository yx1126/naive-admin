import{R as N,I as V,a3 as T,aR as G,a5 as _,aS as X,a4 as B,d as Y,N as q,f as R,J as I,g as x,ab as $,aY as D,aZ as J,B as U,aX as Z,ad as Q,a_ as ee,i as re,w as oe,b as te,aK as ne,h as O,am as se,V as ae}from"../assets/index.350a9557.js";const F=N&&"loading"in document.createElement("img"),ie=(e={})=>{var i;const{root:d=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(i=e.threshold)!==null&&i!==void 0?i:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof d=="string"?document.querySelector(d):d)||document.documentElement})}},M=new WeakMap,P=new WeakMap,k=new WeakMap,le=(e,i,d)=>{if(!e)return()=>{};const s=ie(i),{root:c}=s.options;let a;const u=M.get(c);u?a=u:(a=new Map,M.set(c,a));let h,n;a.has(s.hash)?(n=a.get(s.hash),n[1].has(e)||(h=n[0],n[1].add(e),h.observe(e))):(h=new IntersectionObserver(m=>{m.forEach(f=>{if(f.isIntersecting){const p=P.get(f.target),g=k.get(f.target);p&&p(),g&&(g.value=!0)}})},s.options),h.observe(e),n=[h,new Set([e])],a.set(s.hash,n));let b=!1;const z=()=>{b||(P.delete(e),k.delete(e),b=!0,n[1].has(e)&&(n[0].unobserve(e),n[1].delete(e)),n[1].size<=0&&a.delete(s.hash),a.size||M.delete(c))};return P.set(e,z),k.set(e,d),z},de=V("n-avatar-group"),ce=T("avatar",`
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
`,[G(_("&","--n-merged-color: var(--n-color-modal);")),X(_("&","--n-merged-color: var(--n-color-popover);")),_("img",`
 width: 100%;
 height: 100%;
 `),B("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),T("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),B("text","line-height: 1.25")]),ue=Object.assign(Object.assign({},$.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),ve=Y({name:"Avatar",props:ue,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:d}=q(e),s=R(!1);let c=null;const a=R(null),u=R(null),h=()=>{const{value:r}=a;if(r&&(c===null||c!==r.innerHTML)){c=r.innerHTML;const{value:o}=u;if(o){const{offsetWidth:l,offsetHeight:t}=o,{offsetWidth:v,offsetHeight:E}=r,S=.9,L=Math.min(l/v*S,t/E*S,1);r.style.transform=`translateX(-50%) translateY(-50%) scale(${L})`}}},n=I(de,null),b=x(()=>{const{size:r}=e;if(r)return r;const{size:o}=n||{};return o||"medium"}),z=$("Avatar","-avatar",ce,D,e,i),m=I(J,null),f=x(()=>{if(n)return!0;const{round:r,circle:o}=e;return r!==void 0||o!==void 0?r||o:m?m.roundRef.value:!1}),p=x(()=>n?!0:e.bordered||!1),g=r=>{var o;if(!j.value)return;s.value=!0;const{onError:l,imgProps:t}=e;(o=t==null?void 0:t.onError)===null||o===void 0||o.call(t,r),l&&l(r)};U(()=>e.src,()=>s.value=!1);const C=x(()=>{const r=b.value,o=f.value,l=p.value,{color:t}=e,{self:{borderRadius:v,fontSize:E,color:S,border:L,colorModal:W,colorPopover:A},common:{cubicBezierEaseInOut:K}}=z.value;let w;return typeof r=="number"?w=`${r}px`:w=z.value.self[Z("height",r)],{"--n-font-size":E,"--n-border":l?L:"none","--n-border-radius":o?"50%":v,"--n-color":t||S,"--n-color-modal":t||W,"--n-color-popover":t||A,"--n-bezier":K,"--n-merged-size":`var(--n-avatar-size-override, ${w})`}}),y=d?Q("avatar",x(()=>{const r=b.value,o=f.value,l=p.value,{color:t}=e;let v="";return r&&(typeof r=="number"?v+=`a${r}`:v+=r[0]),o&&(v+="b"),l&&(v+="c"),t&&(v+=ee(t)),v}),C,e):void 0,j=R(!e.lazy);re(()=>{if(F)return;let r;const o=oe(()=>{r==null||r(),r=void 0,e.lazy&&(r=le(u.value,e.intersectionObserverOptions,j))});te(()=>{o(),r==null||r()})});const H=R(!e.lazy);return{textRef:a,selfRef:u,mergedRoundRef:f,mergedClsPrefix:i,fitTextTransform:h,cssVars:d?void 0:C,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender,hasLoadError:s,handleError:g,shouldStartLoading:j,loaded:H,mergedOnLoad:r=>{var o;const{onLoad:l,imgProps:t}=e;l==null||l(r),(o=t==null?void 0:t.onLoad)===null||o===void 0||o.call(t,r),H.value=!0}}},render(){var e,i;const{$slots:d,src:s,mergedClsPrefix:c,lazy:a,onRender:u,mergedOnLoad:h,shouldStartLoading:n,loaded:b,hasLoadError:z}=this;u==null||u();let m;const f=!b&&!z&&(this.renderPlaceholder?this.renderPlaceholder():(i=(e=this.$slots).placeholder)===null||i===void 0?void 0:i.call(e));return this.hasLoadError?m=this.renderFallback?this.renderFallback():ne(d.fallback,()=>[O("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):m=se(d.default,p=>{if(p)return O(ae,{onResize:this.fitTextTransform},{default:()=>O("span",{ref:"textRef",class:`${c}-avatar__text`},p)});if(s){const{imgProps:g}=this;return O("img",Object.assign(Object.assign({},g),{loading:F&&!this.intersectionObserverOptions&&a?"lazy":"eager",src:F||n||b?s:void 0,onLoad:h,"data-image-src":s,onError:this.handleError,style:[g==null?void 0:g.style,{objectFit:this.objectFit},f?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),O("span",{ref:"selfRef",class:[`${c}-avatar`,this.themeClass],style:this.cssVars},m,a&&f)}});export{ve as _};
