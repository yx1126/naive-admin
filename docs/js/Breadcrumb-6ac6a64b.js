import{$ as s,a1 as v,a2 as C,a0 as a,d as k,J as K,a7 as V,c_ as ae,L as W,M as Y,c as f,a9 as X,B as u,I as se,a as M,o as ie,x as ce,N as de,z as J,aK as A,ax as ue,ay as be,aA as F,a4 as he,cR as me,cQ as ve,aB as pe,aO as I,c$ as Q,_ as G,p as Z,cU as ge,b as S,e as q,f as fe,g as O,aj as E,cW as ye,j as T,n as ee,m as xe,cK as _e,cz as Ce,F as Be,h as Se,i as ke,l as D,cc as we}from"../assets/index.fad64095.js";import{C as ze}from"./ChevronRight-b9954327.js";import{l as Te,c as $e,p as Re}from"./Logo-87fa7316.js";import{_ as Le}from"./Dropdown-4e1f87e6.js";var Pe=s("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[v("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),v("a",`
 color: inherit;
 text-decoration: inherit;
 `),s("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[s("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),v("&:not(:last-child)",[C("clickable",[a("link",`
 cursor: pointer;
 `,[v("&:hover",`
 background-color: var(--n-item-color-hover);
 `),v("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),a("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[v("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[s("icon",`
 color: var(--n-item-text-color-hover);
 `)]),v("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[s("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),a("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),v("&:last-child",[a("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[s("icon",`
 color: var(--n-item-text-color-active);
 `)]),a("separator",`
 display: none;
 `)])])]);const te=se("n-breadcrumb"),Ie=Object.assign(Object.assign({},V.props),{separator:{type:String,default:"/"}});var Me=k({name:"Breadcrumb",props:Ie,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=K(e),n=V("Breadcrumb","-breadcrumb",Pe,ae,e,t);W(te,{separatorRef:Y(e,"separator"),mergedClsPrefixRef:t});const p=f(()=>{const{common:{cubicBezierEaseInOut:h},self:{separatorColor:m,itemTextColor:o,itemTextColorHover:b,itemTextColorPressed:y,itemTextColorActive:g,fontSize:B,fontWeightActive:x,itemBorderRadius:$,itemColorHover:R,itemColorPressed:L,itemLineHeight:H}}=n.value;return{"--n-font-size":B,"--n-bezier":h,"--n-item-text-color":o,"--n-item-text-color-hover":b,"--n-item-text-color-pressed":y,"--n-item-text-color-active":g,"--n-separator-color":m,"--n-item-color-hover":R,"--n-item-color-pressed":L,"--n-item-border-radius":$,"--n-font-weight-active":x,"--n-item-line-height":H}}),i=r?X("breadcrumb",void 0,p,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:p,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),u("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},u("ul",null,this.$slots))}});const Oe=de?window:null,Ee=(e=Oe)=>{const t=()=>{const{hash:p,host:i,hostname:h,href:m,origin:o,pathname:b,port:y,protocol:g,search:B}=(e==null?void 0:e.location)||{};return{hash:p,host:i,hostname:h,href:m,origin:o,pathname:b,port:y,protocol:g,search:B}},r=()=>{n.value=t()},n=M(t());return ie(()=>{e&&(e.addEventListener("popstate",r),e.addEventListener("hashchange",r))}),ce(()=>{e&&(e.removeEventListener("popstate",r),e.removeEventListener("hashchange",r))}),n},je={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function};var Ne=k({name:"BreadcrumbItem",props:je,setup(e,{slots:t}){const r=J(te,null);if(!r)return A("breadcrumb","`n-breadcrumb-item` must be placed inside `n-breadcrumb`."),()=>null;const{separatorRef:n,mergedClsPrefixRef:p}=r,i=Ee(),h=f(()=>e.href?"a":"span"),m=f(()=>i.value.href===e.href?"location":null);return()=>{const{value:o}=p;return u("li",{class:[`${o}-breadcrumb-item`,e.clickable&&`${o}-breadcrumb-item--clickable`]},u(h.value,{class:`${o}-breadcrumb-item__link`,"aria-current":m.value,href:e.href,onClick:e.onClick},t),u("span",{class:`${o}-breadcrumb-item__separator`,"aria-hidden":"true"},ue(t.separator,()=>{var b;return[(b=e.separator)!==null&&b!==void 0?b:n.value]})))}}}),Ve=s("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[C("bordered",[a("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),a("left-placement",[C("bordered",[a("border",`
 right: 0;
 `)])]),C("right-placement",`
 justify-content: flex-start;
 `,[C("bordered",[a("border",`
 left: 0;
 `)]),C("collapsed",[s("layout-toggle-button",[s("base-icon",`
 transform: rotate(180deg);
 `)]),s("layout-toggle-bar",[v("&:hover",[a("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),a("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),s("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[s("base-icon",`
 transform: rotate(0);
 `)]),s("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[v("&:hover",[a("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),a("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),C("collapsed",[s("layout-toggle-bar",[v("&:hover",[a("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),a("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),s("layout-toggle-button",[s("base-icon",`
 transform: rotate(0);
 `)])]),s("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[s("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),s("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[a("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),a("bottom",`
 position: absolute;
 top: 34px;
 `),v("&:hover",[a("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),a("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),a("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),v("&:hover",[a("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),a("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),s("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),C("show-content",[s("layout-sider-scroll-container",{opacity:1})]),C("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),He=k({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},u(be,{clsPrefix:e},{default:()=>u(ze,null)}))}}),Fe=k({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},u("div",{class:`${e}-layout-toggle-bar__top`}),u("div",{class:`${e}-layout-toggle-bar__bottom`}))}});const Ye={position:Re,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function};var lt=k({name:"LayoutSider",props:Object.assign(Object.assign({},V.props),Ye),setup(e){const t=J(Te);t?t.hasSider||A("layout-sider","You are putting `n-layout-sider` in a `n-layout` but haven't set `has-sider` on the `n-layout`."):A("layout-sider","Layout sider is not allowed to be put outside layout.");const r=M(null),n=M(null),p=f(()=>F(o.value?e.collapsedWidth:e.width)),i=f(()=>e.collapseMode!=="transform"?{}:{minWidth:F(e.width)}),h=f(()=>t?t.siderPlacement:"left"),m=M(e.defaultCollapsed),o=he(Y(e,"collapsed"),m);function b(d,l){if(e.nativeScrollbar){const{value:c}=r;c&&(l===void 0?c.scrollTo(d):c.scrollTo(d,l))}else{const{value:c}=n;c&&c.scrollTo(d,l)}}function y(){const{"onUpdate:collapsed":d,onUpdateCollapsed:l,onExpand:c,onCollapse:P}=e,{value:z}=o;l&&I(l,!z),d&&I(d,!z),m.value=!z,z?c&&I(c):P&&I(P)}let g=0,B=0;const x=d=>{var l;const c=d.target;g=c.scrollLeft,B=c.scrollTop,(l=e.onScroll)===null||l===void 0||l.call(e,d)};me(()=>{if(e.nativeScrollbar){const d=r.value;d&&(d.scrollTop=B,d.scrollLeft=g)}}),W($e,{collapsedRef:o,collapseModeRef:Y(e,"collapseMode")});const{mergedClsPrefixRef:$,inlineThemeDisabled:R}=K(e),L=V("Layout","-layout-sider",Ve,ve,e,$);function H(d){var l,c;d.propertyName==="max-width"&&(o.value?(l=e.onAfterLeave)===null||l===void 0||l.call(e):(c=e.onAfterEnter)===null||c===void 0||c.call(e))}const le={scrollTo:b},U=f(()=>{const{common:{cubicBezierEaseInOut:d},self:l}=L.value,{siderToggleButtonColor:c,siderToggleButtonBorder:P,siderToggleBarColor:z,siderToggleBarColorHover:ne}=l,_={"--n-bezier":d,"--n-toggle-button-color":c,"--n-toggle-button-border":P,"--n-toggle-bar-color":z,"--n-toggle-bar-color-hover":ne};return e.inverted?(_["--n-color"]=l.siderColorInverted,_["--n-text-color"]=l.textColorInverted,_["--n-border-color"]=l.siderBorderColorInverted,_["--n-toggle-button-icon-color"]=l.siderToggleButtonIconColorInverted,_.__invertScrollbar=l.__invertScrollbar):(_["--n-color"]=l.siderColor,_["--n-text-color"]=l.textColor,_["--n-border-color"]=l.siderBorderColor,_["--n-toggle-button-icon-color"]=l.siderToggleButtonIconColor),_}),w=R?X("layout-sider",f(()=>e.inverted?"a":"b"),U,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:n,mergedClsPrefix:$,mergedTheme:L,styleMaxWidth:p,mergedCollapsed:o,scrollContainerStyle:i,siderPlacement:h,handleNativeElScroll:x,handleTransitionend:H,handleTriggerClick:y,inlineThemeDisabled:R,cssVars:U,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender},le)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:r,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,r&&`${t}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:F(this.width)}]},this.nativeScrollbar?u("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):u(pe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?u(Fe,{clsPrefix:t,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):u(He,{clsPrefix:t,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?u("div",{class:`${t}-layout-sider__border`}):null)}}),oe={};Object.defineProperty(oe,"__esModule",{value:!0});const j=Q,Ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},qe=(0,j.createElementVNode)("path",{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z",fill:"currentColor"},null,-1),Ue=[qe];var De=oe.default=(0,j.defineComponent)({name:"MenuFoldOutlined",render:function(t,r){return(0,j.openBlock)(),(0,j.createElementBlock)("svg",Ae,Ue)}}),re={};Object.defineProperty(re,"__esModule",{value:!0});const N=Q,Ke={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},We=(0,N.createElementVNode)("path",{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z",fill:"currentColor"},null,-1),Xe=[We];var Je=re.default=(0,N.defineComponent)({name:"MenuUnfoldOutlined",render:function(t,r){return(0,N.openBlock)(),(0,N.createElementBlock)("svg",Ke,Xe)}});const Qe=k({__name:"Collapse",props:{collapsed:{type:Boolean,required:!1},width:{type:Number,required:!1,default:272},height:{type:Number,required:!1,default:42},collapsedWidth:{type:Number,required:!1,default:48},size:{type:Number,required:!1,default:22},inverted:{type:Boolean,required:!1,default:!1},border:{type:[String,Boolean],required:!1,default:!1}},setup(e){const t=e,r=Z(),n=ge(),p=f(()=>{const i={"--collapse-width":(t.collapsed?t.collapsedWidth:t.width)+"px","--collapse-height":t.height+"px","--collapse-padding":t.collapsed?`0 ${(t.collapsedWidth-t.size)/2}px`:"0 18px 0 20px","--collapse-background":t.inverted?n.value.invertedColor:"","--collapse-color":t.inverted?"#BBB":"","--collapse-hover-color":t.inverted?"#fff":"","--collaspe-trans":n.value.cubicBezierEaseInOut},h=typeof t.border=="string"?t.border.split(",").map(o=>`border-${o}`):["border"],m=`${t.border?1:0}px solid ${n.value.dividerColor}`;return h.forEach(o=>{i[o]=m}),i});return(i,h)=>{const m=xe;return S(),q("div",{class:"collapse",style:ee(p.value),onClick:h[0]||(h[0]=(...o)=>T(r).togglCollapse&&T(r).togglCollapse(...o))},[fe(m,{class:"collapse-icon",size:e.size},{default:O(()=>[(S(),E(ye(e.collapsed?T(Je):T(De))))]),_:1},8,["size"])],4)}}});var nt=G(Qe,[["__scopeId","data-v-21abab0c"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Collapse.vue"]]);const Ge={key:1},Ze=k({__name:"Breadcrumb",setup(e){const t=_e(),r=Ce(),n=Z(),p=f(()=>t.matched.filter(o=>o.path&&o.meta.title).map(o=>({...o,options:h(o.children)}))),i=f(()=>({"--inverted-color":n.navMode==="diablo"?"rgba(255, 255, 255, 0.82)":["mixin"].includes(n.layoutMode)||n.inverted?"#BBB":"rgb(118, 124, 130)","--inverted-hover-color":n.themeColor}));function h(o){return o.map(b=>{var g;const y={key:b.name,label:b.meta.title};return b.children&&((g=b.children)==null?void 0:g.length)>0&&(y.children=h(b.children)),y})}function m(o){r.push({name:o})}return(o,b)=>{const y=Le,g=Ne,B=Me;return T(n).isShowBreadcrumb?(S(),E(B,{key:0,class:"breadcrumb",style:ee(i.value)},{default:O(()=>[(S(!0),q(Be,null,Se(p.value,x=>(S(),E(g,{key:x.path,clickable:!1},{default:O(()=>[x.children&&x.children.length>0?(S(),E(y,{key:0,options:x.options,onSelect:m},{default:O(()=>[ke("span",null,D(x.meta.title),1)]),_:2},1032,["options"])):(S(),q("span",Ge,D(x.meta.title),1))]),_:2},1024))),128))]),_:1},8,["style"])):we("v-if",!0)}}});var at=G(Ze,[["__scopeId","data-v-7d1b7ae0"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Breadcrumb.vue"]]);export{at as B,nt as C,lt as N};
