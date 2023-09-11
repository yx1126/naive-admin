import{J as s,L as v,M as B,K as a,d as z,G as K,R as V,c4 as ae,B as W,O as Y,g as x,S as X,h as m,C as se,f as M,i as ie,ai as ce,c5 as de,D as G,ba as q,aw as ue,aG as me,b2 as F,N as be,c6 as pe,c7 as he,aE as ge,az as E,c8 as ve,c9 as fe,af as J,c3 as _e,j as w,k as A,l as ye,m as O,a7 as I,ca as xe,q as k,v as Q,y as Ce,_ as Z,u as Be,a as Se,F as ke,n as we,p as ze,x as D,aU as Te}from"../assets/index-5b64e5b7.js";import{C as $e}from"./RadioGroup-ac705a5e.js";import{l as Re,c as Pe,p as Le}from"./Logo-d0377ac8.js";import{_ as Ee}from"./Dropdown-a02b5f15.js";const Me=s("breadcrumb",`
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
 `),v("&:not(:last-child)",[B("clickable",[a("link",`
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
 `)])])]),ee=se("n-breadcrumb"),Oe=Object.assign(Object.assign({},V.props),{separator:{type:String,default:"/"}}),Ie=z({name:"Breadcrumb",props:Oe,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=K(e),l=V("Breadcrumb","-breadcrumb",Me,ae,e,t);W(ee,{separatorRef:Y(e,"separator"),mergedClsPrefixRef:t});const f=x(()=>{const{common:{cubicBezierEaseInOut:b},self:{separatorColor:h,itemTextColor:o,itemTextColorHover:c,itemTextColorPressed:g,itemTextColorActive:p,fontSize:y,fontWeightActive:_,itemBorderRadius:T,itemColorHover:S,itemColorPressed:P,itemLineHeight:H}}=l.value;return{"--n-font-size":y,"--n-bezier":b,"--n-item-text-color":o,"--n-item-text-color-hover":c,"--n-item-text-color-pressed":g,"--n-item-text-color-active":p,"--n-separator-color":h,"--n-item-color-hover":S,"--n-item-color-pressed":P,"--n-item-border-radius":T,"--n-font-weight-active":_,"--n-item-line-height":H}}),i=r?X("breadcrumb",void 0,f,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:f,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),m("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},m("ul",null,this.$slots))}}),je=(e=de?window:null)=>{const t=()=>{const{hash:f,host:i,hostname:b,href:h,origin:o,pathname:c,port:g,protocol:p,search:y}=(e==null?void 0:e.location)||{};return{hash:f,host:i,hostname:b,href:h,origin:o,pathname:c,port:g,protocol:p,search:y}},r=()=>{l.value=t()},l=M(t());return ie(()=>{e&&(e.addEventListener("popstate",r),e.addEventListener("hashchange",r))}),ce(()=>{e&&(e.removeEventListener("popstate",r),e.removeEventListener("hashchange",r))}),l},Ne={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},Ve=z({name:"BreadcrumbItem",props:Ne,setup(e,{slots:t}){const r=G(ee,null);if(!r)return q("breadcrumb","`n-breadcrumb-item` must be placed inside `n-breadcrumb`."),()=>null;const{separatorRef:l,mergedClsPrefixRef:f}=r,i=je(),b=x(()=>e.href?"a":"span"),h=x(()=>i.value.href===e.href?"location":null);return()=>{const{value:o}=f;return m("li",{class:[`${o}-breadcrumb-item`,e.clickable&&`${o}-breadcrumb-item--clickable`]},m(b.value,{class:`${o}-breadcrumb-item__link`,"aria-current":h.value,href:e.href,onClick:e.onClick},t),m("span",{class:`${o}-breadcrumb-item__separator`,"aria-hidden":"true"},ue(t.separator,()=>{var c;return[(c=e.separator)!==null&&c!==void 0?c:l.value]})))}}}),He=s("layout-sider",`
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
`,[B("bordered",[a("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),a("left-placement",[B("bordered",[a("border",`
 right: 0;
 `)])]),B("right-placement",`
 justify-content: flex-start;
 `,[B("bordered",[a("border",`
 left: 0;
 `)]),B("collapsed",[s("layout-toggle-button",[s("base-icon",`
 transform: rotate(180deg);
 `)]),s("layout-toggle-bar",[v("&:hover",[a("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),a("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),s("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[s("base-icon",`
 transform: rotate(0);
 `)]),s("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[v("&:hover",[a("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),a("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),B("collapsed",[s("layout-toggle-bar",[v("&:hover",[a("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),a("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),s("layout-toggle-button",[s("base-icon",`
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
 `),B("show-content",[s("layout-sider-scroll-container",{opacity:1})]),B("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Fe=z({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return m("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},m(me,{clsPrefix:e},{default:()=>m($e,null)}))}}),Ye=z({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return m("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},m("div",{class:`${e}-layout-toggle-bar__top`}),m("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),qe={position:Le,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},lt=z({name:"LayoutSider",props:Object.assign(Object.assign({},V.props),qe),setup(e){const t=G(Re);t?t.hasSider||q("layout-sider","You are putting `n-layout-sider` in a `n-layout` but haven't set `has-sider` on the `n-layout`."):q("layout-sider","Layout sider is not allowed to be put outside layout.");const r=M(null),l=M(null),f=x(()=>F(o.value?e.collapsedWidth:e.width)),i=x(()=>e.collapseMode!=="transform"?{}:{minWidth:F(e.width)}),b=x(()=>t?t.siderPlacement:"left"),h=M(e.defaultCollapsed),o=be(Y(e,"collapsed"),h);function c(u,n){if(e.nativeScrollbar){const{value:d}=r;d&&(n===void 0?d.scrollTo(u):d.scrollTo(u,n))}else{const{value:d}=l;d&&d.scrollTo(u,n)}}function g(){const{"onUpdate:collapsed":u,onUpdateCollapsed:n,onExpand:d,onCollapse:L}=e,{value:R}=o;n&&E(n,!R),u&&E(u,!R),h.value=!R,R?d&&E(d):L&&E(L)}let p=0,y=0;const _=u=>{var n;const d=u.target;p=d.scrollLeft,y=d.scrollTop,(n=e.onScroll)===null||n===void 0||n.call(e,u)};pe(()=>{if(e.nativeScrollbar){const u=r.value;u&&(u.scrollTop=y,u.scrollLeft=p)}}),W(Pe,{collapsedRef:o,collapseModeRef:Y(e,"collapseMode")});const{mergedClsPrefixRef:T,inlineThemeDisabled:S}=K(e),P=V("Layout","-layout-sider",He,he,e,T);function H(u){var n,d;u.propertyName==="max-width"&&(o.value?(n=e.onAfterLeave)===null||n===void 0||n.call(e):(d=e.onAfterEnter)===null||d===void 0||d.call(e))}const ne={scrollTo:c},U=x(()=>{const{common:{cubicBezierEaseInOut:u},self:n}=P.value,{siderToggleButtonColor:d,siderToggleButtonBorder:L,siderToggleBarColor:R,siderToggleBarColorHover:le}=n,C={"--n-bezier":u,"--n-toggle-button-color":d,"--n-toggle-button-border":L,"--n-toggle-bar-color":R,"--n-toggle-bar-color-hover":le};return e.inverted?(C["--n-color"]=n.siderColorInverted,C["--n-text-color"]=n.textColorInverted,C["--n-border-color"]=n.siderBorderColorInverted,C["--n-toggle-button-icon-color"]=n.siderToggleButtonIconColorInverted,C.__invertScrollbar=n.__invertScrollbar):(C["--n-color"]=n.siderColor,C["--n-text-color"]=n.textColor,C["--n-border-color"]=n.siderBorderColor,C["--n-toggle-button-icon-color"]=n.siderToggleButtonIconColor),C}),$=S?X("layout-sider",x(()=>e.inverted?"a":"b"),U,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:l,mergedClsPrefix:T,mergedTheme:P,styleMaxWidth:f,mergedCollapsed:o,scrollContainerStyle:i,siderPlacement:b,handleNativeElScroll:_,handleTransitionend:H,handleTriggerClick:g,inlineThemeDisabled:S,cssVars:U,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender},ne)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:r,showTrigger:l}=this;return(e=this.onRender)===null||e===void 0||e.call(this),m("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,r&&`${t}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:F(this.width)}]},this.nativeScrollbar?m("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):m(ge,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),l?l==="bar"?m(Ye,{clsPrefix:t,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):m(Fe,{clsPrefix:t,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?m("div",{class:`${t}-layout-sider__border`}):null)}});var te={};const oe=ve(fe);Object.defineProperty(te,"__esModule",{value:!0});const j=oe,Ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ue=(0,j.createElementVNode)("path",{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z",fill:"currentColor"},null,-1),De=[Ue];var Ke=te.default=(0,j.defineComponent)({name:"MenuFoldOutlined",render:function(t,r){return(0,j.openBlock)(),(0,j.createElementBlock)("svg",Ae,De)}}),re={};Object.defineProperty(re,"__esModule",{value:!0});const N=oe,We={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Xe=(0,N.createElementVNode)("path",{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z",fill:"currentColor"},null,-1),Ge=[Xe];var Je=re.default=(0,N.defineComponent)({name:"MenuUnfoldOutlined",render:function(t,r){return(0,N.openBlock)(),(0,N.createElementBlock)("svg",We,Ge)}});const Qe=z({__name:"Collapse",props:{collapsed:{type:Boolean,required:!1},width:{type:Number,required:!1,default:272},height:{type:Number,required:!1,default:42},collapsedWidth:{type:Number,required:!1,default:48},size:{type:Number,required:!1,default:22},inverted:{type:Boolean,required:!1,default:!1},border:{type:[String,Boolean],required:!1,default:!1}},setup(e){const t=e,r=J(),l=_e(),f=x(()=>{const{collapsed:i,collapsedWidth:b,width:h,height:o,size:c,inverted:g,border:p}=t,y={"--collapse-width":(i?b:h)+"px","--collapse-height":o+"px","--collapse-padding":i?`0 ${(b-c)/2}px`:"0 18px 0 20px","--collapse-background":g?l.value.invertedColor:"","--collapse-color":g?"#BBB":"","--collapse-hover-color":g?"#fff":"","--collaspe-trans":l.value.cubicBezierEaseInOut},_=typeof p=="string"?p.split(",").map(S=>`border-${S}`):["border"],T=`${p?1:0}px solid ${l.value.dividerColor}`;return _.forEach(S=>{y[S]=T}),y});return(i,b)=>{const h=Ce;return w(),A("div",{class:"collapse",style:Q(k(f)),onClick:b[0]||(b[0]=(...o)=>k(r).togglCollapse&&k(r).togglCollapse(...o))},[ye(h,{class:"collapse-icon",size:i.size},{default:O(()=>[(w(),I(xe(i.collapsed?k(Je):k(Ke))))]),_:1},8,["size"])],4)}}});const at=Z(Qe,[["__scopeId","data-v-244c6404"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Collapse.vue"]]),Ze={key:1},et=z({__name:"Breadcrumb",setup(e){const t=Be(),r=Se(),l=J(),f=x(()=>t.matched.filter(o=>o.path&&o.meta.title).map(o=>({...o,options:b(o.children)}))),i=x(()=>({"--inverted-color":l.navMode==="diablo"?"rgba(255, 255, 255, 0.82)":["mixin"].includes(l.layoutMode)||l.inverted?"#BBB":"rgb(118, 124, 130)","--inverted-hover-color":l.themeColor}));function b(o){return o.map(c=>{var p;const g={key:c.name,label:c.meta.title};return c.children&&((p=c.children)==null?void 0:p.length)>0&&(g.children=b(c.children)),g})}function h(o){r.push({name:o})}return(o,c)=>{const g=Ee,p=Ve,y=Ie;return k(l).isShowBreadcrumb?(w(),I(y,{key:0,class:"breadcrumb",style:Q(k(i))},{default:O(()=>[(w(!0),A(ke,null,we(k(f),_=>(w(),I(p,{key:_.path,clickable:!1},{default:O(()=>[_.children&&_.children.length>0?(w(),I(g,{key:0,options:_.options,onSelect:h},{default:O(()=>[ze("span",null,D(_.meta.title),1)]),_:2},1032,["options"])):(w(),A("span",Ze,D(_.meta.title),1))]),_:2},1024))),128))]),_:1},8,["style"])):Te("",!0)}}});const st=Z(et,[["__scopeId","data-v-ddd51293"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Breadcrumb.vue"]]);export{st as B,at as C,lt as _};