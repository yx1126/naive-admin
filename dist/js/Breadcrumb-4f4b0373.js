import{$ as s,a1 as p,a2 as C,a0 as a,d as k,J as K,a6 as V,cM as ne,L as W,M as A,c as f,a7 as q,B as u,I as ae,a as M,o as se,x as ie,N as ce,z as X,aI as de,aL as ue,aO as F,a3 as he,cC as ve,cB as be,aP as pe,aA as I,cN as G,_ as J,p as Q,cG as ge,b as S,e as Y,f as me,g as O,aj as E,cI as fe,j as T,n as Z,m as xe,ct as ye,ci as _e,h as Ce,i as Be,l as D,F as Se,c8 as ke}from"../assets/index.c2091c65.js";import{C as ze,_ as we}from"./Dropdown-55d3f93f.js";import{l as Te,c as $e,p as Re}from"./Logo-62c2aaa5.js";var Pe=s("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[p("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),p("a",`
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
 `),p("&:not(:last-child)",[C("clickable",[a("link",`
 cursor: pointer;
 `,[p("&:hover",`
 background-color: var(--n-item-color-hover);
 `),p("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),a("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[p("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[s("icon",`
 color: var(--n-item-text-color-hover);
 `)]),p("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[s("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),a("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),p("&:last-child",[a("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[s("icon",`
 color: var(--n-item-text-color-active);
 `)]),a("separator",`
 display: none;
 `)])])]);const ee=ae("n-breadcrumb"),Le=Object.assign(Object.assign({},V.props),{separator:{type:String,default:"/"}});var Ie=k({name:"Breadcrumb",props:Le,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=K(e),n=V("Breadcrumb","-breadcrumb",Pe,ne,e,t);W(ee,{separatorRef:A(e,"separator"),mergedClsPrefixRef:t});const g=f(()=>{const{common:{cubicBezierEaseInOut:v},self:{separatorColor:b,itemTextColor:o,itemTextColorHover:h,itemTextColorPressed:x,itemTextColorActive:m,fontSize:B,fontWeightActive:y,itemBorderRadius:$,itemColorHover:R,itemColorPressed:P,itemLineHeight:H}}=n.value;return{"--n-font-size":B,"--n-bezier":v,"--n-item-text-color":o,"--n-item-text-color-hover":h,"--n-item-text-color-pressed":x,"--n-item-text-color-active":m,"--n-separator-color":b,"--n-item-color-hover":R,"--n-item-color-pressed":P,"--n-item-border-radius":$,"--n-font-weight-active":y,"--n-item-line-height":H}}),i=r?q("breadcrumb",void 0,g,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:g,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),u("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},u("ul",null,this.$slots))}});const Me=ce?window:null,Oe=(e=Me)=>{const t=()=>{const{hash:g,host:i,hostname:v,href:b,origin:o,pathname:h,port:x,protocol:m,search:B}=(e==null?void 0:e.location)||{};return{hash:g,host:i,hostname:v,href:b,origin:o,pathname:h,port:x,protocol:m,search:B}},r=()=>{n.value=t()},n=M(t());return se(()=>{e&&(e.addEventListener("popstate",r),e.addEventListener("hashchange",r))}),ie(()=>{e&&(e.removeEventListener("popstate",r),e.removeEventListener("hashchange",r))}),n},Ee={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function};var je=k({name:"BreadcrumbItem",props:Ee,setup(e,{slots:t}){const r=X(ee,null);if(!r)return()=>null;const{separatorRef:n,mergedClsPrefixRef:g}=r,i=Oe(),v=f(()=>e.href?"a":"span"),b=f(()=>i.value.href===e.href?"location":null);return()=>{const{value:o}=g;return u("li",{class:[`${o}-breadcrumb-item`,e.clickable&&`${o}-breadcrumb-item--clickable`]},u(v.value,{class:`${o}-breadcrumb-item__link`,"aria-current":b.value,href:e.href,onClick:e.onClick},t),u("span",{class:`${o}-breadcrumb-item__separator`,"aria-hidden":"true"},de(t.separator,()=>{var h;return[(h=e.separator)!==null&&h!==void 0?h:n.value]})))}}}),Ne=s("layout-sider",`
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
 `)]),s("layout-toggle-bar",[p("&:hover",[a("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),a("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),s("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[s("base-icon",`
 transform: rotate(0);
 `)]),s("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[p("&:hover",[a("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),a("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),C("collapsed",[s("layout-toggle-bar",[p("&:hover",[a("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),a("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),s("layout-toggle-button",[s("base-icon",`
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
 `),p("&:hover",[a("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),a("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),a("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),p("&:hover",[a("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),a("border",`
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
 `)]),Ve=k({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},u(ue,{clsPrefix:e},{default:()=>u(ze,null)}))}}),He=k({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},u("div",{class:`${e}-layout-toggle-bar__top`}),u("div",{class:`${e}-layout-toggle-bar__bottom`}))}});const Fe={position:Re,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function};var ot=k({name:"LayoutSider",props:Object.assign(Object.assign({},V.props),Fe),setup(e){const t=X(Te),r=M(null),n=M(null),g=f(()=>F(o.value?e.collapsedWidth:e.width)),i=f(()=>e.collapseMode!=="transform"?{}:{minWidth:F(e.width)}),v=f(()=>t?t.siderPlacement:"left"),b=M(e.defaultCollapsed),o=he(A(e,"collapsed"),b);function h(d,l){if(e.nativeScrollbar){const{value:c}=r;c&&(l===void 0?c.scrollTo(d):c.scrollTo(d,l))}else{const{value:c}=n;c&&c.scrollTo(d,l)}}function x(){const{"onUpdate:collapsed":d,onUpdateCollapsed:l,onExpand:c,onCollapse:L}=e,{value:w}=o;l&&I(l,!w),d&&I(d,!w),b.value=!w,w?c&&I(c):L&&I(L)}let m=0,B=0;const y=d=>{var l;const c=d.target;m=c.scrollLeft,B=c.scrollTop,(l=e.onScroll)===null||l===void 0||l.call(e,d)};ve(()=>{if(e.nativeScrollbar){const d=r.value;d&&(d.scrollTop=B,d.scrollLeft=m)}}),W($e,{collapsedRef:o,collapseModeRef:A(e,"collapseMode")});const{mergedClsPrefixRef:$,inlineThemeDisabled:R}=K(e),P=V("Layout","-layout-sider",Ne,be,e,$);function H(d){var l,c;d.propertyName==="max-width"&&(o.value?(l=e.onAfterLeave)===null||l===void 0||l.call(e):(c=e.onAfterEnter)===null||c===void 0||c.call(e))}const re={scrollTo:h},U=f(()=>{const{common:{cubicBezierEaseInOut:d},self:l}=P.value,{siderToggleButtonColor:c,siderToggleButtonBorder:L,siderToggleBarColor:w,siderToggleBarColorHover:le}=l,_={"--n-bezier":d,"--n-toggle-button-color":c,"--n-toggle-button-border":L,"--n-toggle-bar-color":w,"--n-toggle-bar-color-hover":le};return e.inverted?(_["--n-color"]=l.siderColorInverted,_["--n-text-color"]=l.textColorInverted,_["--n-border-color"]=l.siderBorderColorInverted,_["--n-toggle-button-icon-color"]=l.siderToggleButtonIconColorInverted,_.__invertScrollbar=l.__invertScrollbar):(_["--n-color"]=l.siderColor,_["--n-text-color"]=l.textColor,_["--n-border-color"]=l.siderBorderColor,_["--n-toggle-button-icon-color"]=l.siderToggleButtonIconColor),_}),z=R?q("layout-sider",f(()=>e.inverted?"a":"b"),U,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:n,mergedClsPrefix:$,mergedTheme:P,styleMaxWidth:g,mergedCollapsed:o,scrollContainerStyle:i,siderPlacement:v,handleNativeElScroll:y,handleTransitionend:H,handleTriggerClick:x,inlineThemeDisabled:R,cssVars:U,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender},re)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:r,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,r&&`${t}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:F(this.width)}]},this.nativeScrollbar?u("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):u(pe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?u(He,{clsPrefix:t,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):u(Ve,{clsPrefix:t,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?u("div",{class:`${t}-layout-sider__border`}):null)}}),te={};Object.defineProperty(te,"__esModule",{value:!0});const j=G,Ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ye=(0,j.createElementVNode)("path",{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z",fill:"currentColor"},null,-1),Ue=[Ye];var De=te.default=(0,j.defineComponent)({name:"MenuFoldOutlined",render:function(t,r){return(0,j.openBlock)(),(0,j.createElementBlock)("svg",Ae,Ue)}}),oe={};Object.defineProperty(oe,"__esModule",{value:!0});const N=G,Ke={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},We=(0,N.createElementVNode)("path",{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z",fill:"currentColor"},null,-1),qe=[We];var Xe=oe.default=(0,N.defineComponent)({name:"MenuUnfoldOutlined",render:function(t,r){return(0,N.openBlock)(),(0,N.createElementBlock)("svg",Ke,qe)}});const Ge=k({__name:"Collapse",props:{collapsed:{type:Boolean},width:{default:272},height:{default:42},collapsedWidth:{default:48},size:{default:22},inverted:{type:Boolean,default:!1},border:{type:[String,Boolean],default:!1}},setup(e){const t=e,r=Q(),n=ge(),g=f(()=>{const i={"--collapse-width":(t.collapsed?t.collapsedWidth:t.width)+"px","--collapse-height":t.height+"px","--collapse-padding":t.collapsed?`0 ${(t.collapsedWidth-t.size)/2}px`:"0 18px 0 20px","--collapse-background":t.inverted?n.value.invertedColor:"","--collapse-color":t.inverted?"#BBB":"","--collapse-hover-color":t.inverted?"#fff":"","--collaspe-trans":n.value.cubicBezierEaseInOut},v=typeof t.border=="string"?t.border.split(",").map(o=>`border-${o}`):["border"],b=`${t.border?1:0}px solid ${n.value.dividerColor}`;return v.forEach(o=>{i[o]=b}),i});return(i,v)=>{const b=xe;return S(),Y("div",{class:"collapse",style:Z(g.value),onClick:v[0]||(v[0]=(...o)=>T(r).togglCollapse&&T(r).togglCollapse(...o))},[me(b,{class:"collapse-icon",size:e.size},{default:O(()=>[(S(),E(fe(e.collapsed?T(Xe):T(De))))]),_:1},8,["size"])],4)}}});var rt=J(Ge,[["__scopeId","data-v-5e3c61e1"]]);const Je={key:1},Qe=k({__name:"Breadcrumb",setup(e){const t=ye(),r=_e(),n=Q(),g=f(()=>t.matched.filter(o=>o.path&&o.meta.title).map(o=>({...o,options:v(o.children)}))),i=f(()=>({"--inverted-color":n.navMode==="diablo"?"rgba(255, 255, 255, 0.82)":["mixin"].includes(n.layoutMode)||n.inverted?"#BBB":"rgb(118, 124, 130)","--inverted-hover-color":n.themeColor}));function v(o){return o.map(h=>{var m;const x={key:h.name,label:h.meta.title};return h.children&&((m=h.children)==null?void 0:m.length)>0&&(x.children=v(h.children)),x})}function b(o){r.push({name:o})}return(o,h)=>{const x=we,m=je,B=Ie;return T(n).isShowBreadcrumb?(S(),E(B,{key:0,class:"breadcrumb",style:Z(i.value)},{default:O(()=>[(S(!0),Y(Se,null,Ce(g.value,y=>(S(),E(m,{key:y.path,clickable:!1},{default:O(()=>[y.children&&y.children.length>0?(S(),E(x,{key:0,options:y.options,onSelect:b},{default:O(()=>[Be("span",null,D(y.meta.title),1)]),_:2},1032,["options"])):(S(),Y("span",Je,D(y.meta.title),1))]),_:2},1024))),128))]),_:1},8,["style"])):ke("",!0)}}});var lt=J(Qe,[["__scopeId","data-v-176520ca"]]);export{lt as B,rt as C,ot as N};
