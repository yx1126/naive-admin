import{d as $,B as g,a as k,c as b,q as pe,a5 as we,M as ae,a1 as _,bz as tt,$ as w,cD as ot,a2 as F,a0 as z,cE as nt,cl as Ve,bq as rt,aP as Oe,J as fe,a6 as Y,cF as at,cG as it,o as je,ag as lt,av as st,a7 as ge,aw as ct,aa as dt,bW as ut,aK as vt,cH as mt,I as le,cI as Ue,L as ne,cJ as ht,aA as pt,z as J,b9 as oe,F as _e,ax as ft,K as We,bv as gt,C as Se,ab as be,aR as ue,cg as xt,cK as bt,aO as wt,w as Le,a3 as Ee,cr as _t,aN as G,b as L,e as D,i as O,_ as re,cL as yt,cq as xe,cM as Ct,cN as zt,f as R,g as H,j as E,b3 as St,n as Ie,c7 as ye,v as Ce,y as qe,m as se,bn as me,b_ as It,aj as Z,a9 as kt,am as ie,b2 as $t,ao as Rt,an as At,c3 as Pt,p as ke,bl as Bt,bp as he,cO as Ft,bt as Nt,cz as Ye,cP as K,ap as Ot,aq as Lt,cB as $e,bw as Et,cQ as Tt,aS as Mt,H as Ht,cR as Dt,cC as Kt,al as Vt,h as Te,l as ze,ak as Me,cA as jt,bx as Ut,c6 as Wt}from"../assets/index.c1922953.js";import{u as qt,F as Yt}from"./use-fullscreen-9444c0f8.js";import{u as Gt,B as Xt,_ as Jt}from"./index-993c3c43.js";import{F as Zt,R as Qt}from"./ReloadOutlined-16c7c4ad.js";import{_ as eo}from"./Avatar-a7309f02.js";import{_ as Re}from"./Dropdown-a398c716.js";import{u as to}from"./use-deounce-c6228951.js";var oo=$({name:"ChevronDownFilled",render(){return g("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),He=$({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const t=k(null),o=k(e.value),l=k(e.value),a=k("up"),r=k(!1),c=b(()=>r.value?`${e.clsPrefix}-base-slot-machine-current-number--${a.value}-scroll`:null),u=b(()=>r.value?`${e.clsPrefix}-base-slot-machine-old-number--${a.value}-scroll`:null);pe(ae(e,"value"),(f,p)=>{o.value=p,l.value=f,we(s)});function s(){const f=e.newOriginalNumber,p=e.oldOriginalNumber;p===void 0||f===void 0||(f>p?v("up"):p>f&&v("down"))}function v(f){a.value=f,r.value=!1,we(()=>{var p;(p=t.value)===null||p===void 0||p.offsetWidth,r.value=!0})}return()=>{const{clsPrefix:f}=e;return g("span",{ref:t,class:`${f}-base-slot-machine-number`},o.value!==null?g("span",{class:[`${f}-base-slot-machine-old-number ${f}-base-slot-machine-old-number--top`,u.value]},o.value):null,g("span",{class:[`${f}-base-slot-machine-current-number`,c.value]},g("span",{ref:"numberWrapper",class:[`${f}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${f}-base-slot-machine-current-number__inner--not-number`]},l.value)),o.value!==null?g("span",{class:[`${f}-base-slot-machine-old-number ${f}-base-slot-machine-old-number--bottom`,u.value]},o.value):null)}}});const{cubicBezierEaseOut:te}=tt;function no({duration:e=".2s"}={}){return[_("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${te},
 max-width ${e} ${te},
 transform ${e} ${te}
 `}),_("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${te},
 max-width ${e} ${te},
 transform ${e} ${te}
 `}),_("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),_("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),_("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),_("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}var ro=_([_("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),_("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),_("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),_("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),w("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[w("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[no({duration:".2s"}),ot({duration:".2s",delay:"0s"}),w("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[F("top",{transform:"translateY(-100%)"}),F("bottom",{transform:"translateY(100%)"}),F("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),F("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),w("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[F("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),F("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),z("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[F("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),ao=$({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){nt("-base-slot-machine",ro,ae(e,"clsPrefix"));const t=k(),o=k(),l=b(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const a=[];let r=e.value;for(e.max!==void 0&&(r=Math.min(e.max,r));r>=1;)a.push(r%10),r/=10,r=Math.floor(r);return a.reverse(),a});return pe(ae(e,"value"),(a,r)=>{typeof a=="string"?(o.value=void 0,t.value=void 0):typeof r=="string"?(o.value=a,t.value=void 0):(o.value=a,t.value=r)}),()=>{const{value:a,clsPrefix:r}=e;return typeof a=="number"?g("span",{class:`${r}-base-slot-machine`},g(rt,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>l.value.map((c,u)=>g(He,{clsPrefix:r,key:l.value.length-u-1,oldOriginalNumber:t.value,newOriginalNumber:o.value,value:c}))}),g(Ve,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<a?g(He,{clsPrefix:r,value:"+"}):null})):g("span",{class:`${r}-base-slot-machine`},a)}}}),io=_([_("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),w("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[F("as-is",[w("badge-sup",{position:"static",transform:"translateX(0)"},[Oe({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),F("dot",[w("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[_("::before","border-radius: 4px;")])]),w("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `,[Oe({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),w("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),_("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]);const lo=Object.assign(Object.assign({},Y.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String});var so=$({name:"Badge",props:lo,setup(e,{slots:t}){const{mergedClsPrefixRef:o,inlineThemeDisabled:l,mergedRtlRef:a}=fe(e),r=Y("Badge","-badge",io,at,e,o),c=k(!1),u=()=>{c.value=!0},s=()=>{c.value=!1},v=b(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&e.value<=0)||!it(t.value)));je(()=>{v.value&&(c.value=!0)});const f=lt("Badge",a,o),p=b(()=>{const{type:y,color:C}=e,{common:{cubicBezierEaseInOut:x,cubicBezierEaseOut:h},self:{[st("color",y)]:S,fontFamily:U,fontSize:V}}=r.value;return{"--n-font-size":V,"--n-font-family":U,"--n-color":C||S,"--n-ripple-color":C||S,"--n-bezier":x,"--n-ripple-bezier":h}}),d=l?ge("badge",b(()=>{let y="";const{type:C,color:x}=e;return C&&(y+=C[0]),x&&(y+=ct(x)),y}),p,e):void 0;return{rtlEnabled:f,mergedClsPrefix:o,appeared:c,showBadge:v,handleAfterEnter:u,handleAfterLeave:s,cssVars:l?void 0:p,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{mergedClsPrefix:t,onRender:o,themeClass:l,$slots:a}=this;o==null||o();const r=(e=a.default)===null||e===void 0?void 0:e.call(a);return g("div",{class:[`${t}-badge`,this.rtlEnabled&&`${t}-badge--rtl`,l,{[`${t}-badge--dot`]:this.dot,[`${t}-badge--as-is`]:!r}],style:this.cssVars},r,g(dt,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?g("sup",{class:`${t}-badge-sup`,title:ut(this.value)},vt(a.value,()=>[this.dot?null:g(ao,{clsPrefix:t,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?g(mt,{clsPrefix:t}):null):null}))}});const co=le("n-layout-sider"),Ge={type:String,default:"static"};var uo=w("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[w("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),F("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);const vo={embedded:Boolean,position:Ge,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},mo=le("n-layout");function Xe(e){return $({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},Y.props),vo),setup(t){const o=k(null),l=k(null),{mergedClsPrefixRef:a,inlineThemeDisabled:r}=fe(t),c=Y("Layout","-layout",uo,Ue,t,a);function u(x,h){if(t.nativeScrollbar){const{value:S}=o;S&&(h===void 0?S.scrollTo(x):S.scrollTo(x,h))}else{const{value:S}=l;S&&S.scrollTo(x,h)}}ne(mo,t);let s=0,v=0;const f=x=>{var h;const S=x.target;s=S.scrollLeft,v=S.scrollTop,(h=t.onScroll)===null||h===void 0||h.call(t,x)};ht(()=>{if(t.nativeScrollbar){const x=o.value;x&&(x.scrollTop=v,x.scrollLeft=s)}});const p={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},d={scrollTo:u},y=b(()=>{const{common:{cubicBezierEaseInOut:x},self:h}=c.value;return{"--n-bezier":x,"--n-color":t.embedded?h.colorEmbedded:h.color,"--n-text-color":h.textColor}}),C=r?ge("layout",b(()=>t.embedded?"e":""),y,t):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:o,scrollbarInstRef:l,hasSiderStyle:p,mergedTheme:c,handleNativeElScroll:f,cssVars:r?void 0:y,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender},d)},render(){var t;const{mergedClsPrefix:o,hasSider:l}=this;(t=this.onRender)===null||t===void 0||t.call(this);const a=l?this.hasSiderStyle:void 0,r=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return g("div",{class:r,style:this.cssVars},this.nativeScrollbar?g("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):g(pt,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}var ar=Xe(!1),ir=Xe(!0),ho=w("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[F("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),F("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]);const po={position:Ge,inverted:Boolean,bordered:{type:Boolean,default:!1}};var lr=$({name:"LayoutHeader",props:Object.assign(Object.assign({},Y.props),po),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=fe(e),l=Y("Layout","-layout-header",ho,Ue,e,t),a=b(()=>{const{common:{cubicBezierEaseInOut:c},self:u}=l.value,s={"--n-bezier":c};return e.inverted?(s["--n-color"]=u.headerColorInverted,s["--n-text-color"]=u.textColorInverted,s["--n-border-color"]=u.headerBorderColorInverted):(s["--n-color"]=u.headerColor,s["--n-text-color"]=u.textColor,s["--n-border-color"]=u.headerBorderColor),s}),r=o?ge("layout-header",b(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:a,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),g("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}});const ce=le("n-menu"),Ae=le("n-submenu"),Pe=le("n-menu-item-group"),ve=8;function Be(e){const t=J(ce),{props:o,mergedCollapsedRef:l}=t,a=J(Ae,null),r=J(Pe,null),c=b(()=>o.mode==="horizontal"),u=b(()=>c.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=b(()=>{var d;return Math.max((d=o.collapsedIconSize)!==null&&d!==void 0?d:o.iconSize,o.iconSize)}),v=b(()=>{var d;return!c.value&&e.root&&l.value&&(d=o.collapsedIconSize)!==null&&d!==void 0?d:o.iconSize}),f=b(()=>{if(c.value)return;const{collapsedWidth:d,indent:y,rootIndent:C}=o,{root:x,isGroup:h}=e,S=C===void 0?y:C;if(x)return l.value?d/2-s.value/2:S;if(r)return y/2+r.paddingLeftRef.value;if(a)return(h?y/2:y)+a.paddingLeftRef.value}),p=b(()=>{const{collapsedWidth:d,indent:y,rootIndent:C}=o,{value:x}=s,{root:h}=e;return c.value||!h||!l.value?ve:(C===void 0?y:C)+x+ve-(d+x)/2});return{dropdownPlacement:u,activeIconSize:v,maxIconSize:s,paddingLeft:f,iconMarginRight:p,NMenu:t,NSubmenu:a}}const Fe={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Je=Object.assign(Object.assign({},Fe),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),fo=$({name:"MenuOptionGroup",props:Je,setup(e){ne(Ae,null);const t=Be(e);ne(Pe,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:l}=J(ce);return function(){const{value:a}=o,r=t.paddingLeft.value,{nodeProps:c}=l,u=c==null?void 0:c(e.tmNode.rawNode);return g("div",{class:`${a}-menu-item-group`,role:"group"},g("div",Object.assign({},u,{class:[`${a}-menu-item-group-title`,u==null?void 0:u.class],style:[(u==null?void 0:u.style)||"",r!==void 0?`padding-left: ${r}px;`:""]}),oe(e.title),e.extra?g(_e,null," ",oe(e.extra)):null),g("div",null,e.tmNodes.map(s=>Ne(s,l))))}}});var Ze=$({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=J(ce);return{menuProps:t,style:b(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:b(()=>{const{maxIconSize:o,activeIconSize:l,iconMarginRight:a}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${l}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:l,renderExtra:a,expandIcon:r}}=this,c=o?o(t.rawNode):oe(this.icon);return g("div",{onClick:u=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,u)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},c&&g("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[c]),g("div",{class:`${e}-menu-item-content-header`,role:"none"},l?l(t.rawNode):oe(this.title),this.extra||a?g("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(t.rawNode):oe(this.extra)):null),this.showArrow?g(ft,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>r?r(t.rawNode):g(oo,null)}):null)}});const Qe=Object.assign(Object.assign({},Fe),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),go=$({name:"Submenu",props:Qe,setup(e){const t=Be(e),{NMenu:o,NSubmenu:l}=t,{props:a,mergedCollapsedRef:r,mergedThemeRef:c}=o,u=b(()=>{const{disabled:d}=e;return l!=null&&l.mergedDisabledRef.value||a.disabled?!0:d}),s=k(!1);ne(Ae,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:u}),ne(Pe,null);function v(){const{onClick:d}=e;d&&d()}function f(){u.value||(r.value||o.toggleExpand(e.internalKey),v())}function p(d){s.value=d}return{menuProps:a,mergedTheme:c,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:s,paddingLeft:t.paddingLeft,mergedDisabled:u,mergedValue:o.mergedValueRef,childActive:We(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:b(()=>a.mode==="horizontal"?!1:r.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:b(()=>!u.value&&(a.mode==="horizontal"||r.value)),handlePopoverShowChange:p,handleClick:f}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:l}}=this,a=()=>{const{isHorizontal:c,paddingLeft:u,collapsed:s,mergedDisabled:v,maxIconSize:f,activeIconSize:p,title:d,childActive:y,icon:C,handleClick:x,menuProps:{nodeProps:h},dropdownShow:S,iconMarginRight:U,tmNode:V,mergedClsPrefix:Q}=this,W=h==null?void 0:h(V.rawNode);return g("div",Object.assign({},W,{class:[`${Q}-menu-item`,W==null?void 0:W.class],role:"menuitem"}),g(Ze,{tmNode:V,paddingLeft:u,collapsed:s,disabled:v,iconMarginRight:U,maxIconSize:f,activeIconSize:p,title:d,extra:this.extra,showArrow:!c,childActive:y,clsPrefix:Q,icon:C,hover:S,onClick:x}))},r=()=>g(Ve,null,{default:()=>{const{tmNodes:c,collapsed:u}=this;return u?null:g("div",{class:`${t}-submenu-children`,role:"menu"},c.map(s=>Ne(s,this.menuProps)))}});return this.root?g(Re,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:l}),{default:()=>g("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:r())}):g("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),r())}}),et=Object.assign(Object.assign({},Fe),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),xo=$({name:"MenuOption",props:et,setup(e){const t=Be(e),{NSubmenu:o,NMenu:l}=t,{props:a,mergedClsPrefixRef:r,mergedCollapsedRef:c}=l,u=o?o.mergedDisabledRef:{value:!1},s=b(()=>u.value||e.disabled);function v(p){const{onClick:d}=e;d&&d(p)}function f(p){s.value||(l.doSelect(e.internalKey,e.tmNode.rawNode),v(p))}return{mergedClsPrefix:r,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:l.mergedThemeRef,menuProps:a,dropdownEnabled:We(()=>e.root&&c.value&&a.mode!=="horizontal"&&!s.value),selected:b(()=>l.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:f}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:l,nodeProps:a}}=this,r=a==null?void 0:a(o.rawNode);return g("div",Object.assign({},r,{role:"menuitem",class:[`${e}-menu-item`,r==null?void 0:r.class]}),g(gt,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>l?l(o.rawNode):oe(this.title),trigger:()=>g(Ze,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var bo=$({name:"MenuDivider",setup(){const e=J(ce),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:g("div",{class:`${t.value}-menu-divider`})}});const wo=Se(Je),_o=Se(et),yo=Se(Qe);function Co(e){return e.type==="divider"||e.type==="render"}function zo(e){return e.type==="divider"}function Ne(e,t){const{rawNode:o}=e,{show:l}=o;if(typeof l=="boolean"&&!l)return null;if(Co(o))return zo(o)?g(bo,Object.assign({key:e.key},o.props)):null;const{labelField:a}=t,{key:r,level:c,isGroup:u}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[a],extra:o.titleExtra||o.extra,key:r,internalKey:r,level:c,root:c===0,isGroup:u});return e.children?e.isGroup?g(fo,be(s,wo,{tmNode:e,tmNodes:e.children,key:r})):g(go,be(s,yo,{key:r,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):g(xo,be(s,_o,{key:r,tmNode:e}))}const De=[_("&::before","background-color: var(--n-item-color-hover);"),z("arrow",`
 color: var(--n-arrow-color-hover);
 `),z("icon",`
 color: var(--n-item-icon-color-hover);
 `),w("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[_("a",`
 color: var(--n-item-text-color-hover);
 `),z("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ke=[z("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),w("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[_("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])];var So=_([w("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[F("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[w("submenu","margin: 0;"),w("menu-item","margin: 0;"),w("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[_("&::before","display: none;"),F("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),w("menu-item-content",[F("selected",[z("icon","color: var(--n-item-icon-color-active-horizontal);"),w("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[_("a","color: var(--n-item-text-color-active-horizontal);"),z("extra","color: var(--n-item-text-color-active-horizontal);")])]),F("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[w("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[_("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),z("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ue("disabled",[ue("selected, child-active",[_("&:focus-within",Ke)]),F("selected",[X(null,[z("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),w("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[_("a","color: var(--n-item-text-color-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),F("child-active",[X(null,[z("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),w("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[_("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),X("border-bottom: 2px solid var(--n-border-color-horizontal);",Ke)]),w("menu-item-content-header",[_("a","color: var(--n-item-text-color-horizontal);")])])]),F("collapsed",[w("menu-item-content",[F("selected",[_("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),w("menu-item-content-header","opacity: 0;"),z("arrow","opacity: 0;"),z("icon","color: var(--n-item-icon-color-collapsed);")])]),w("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),w("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[_("> *","z-index: 1;"),_("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),F("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),F("collapsed",[z("arrow","transform: rotate(0);")]),F("selected",[_("&::before","background-color: var(--n-item-color-active);"),z("arrow","color: var(--n-arrow-color-active);"),z("icon","color: var(--n-item-icon-color-active);"),w("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[_("a","color: var(--n-item-text-color-active);"),z("extra","color: var(--n-item-text-color-active);")])]),F("child-active",[w("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[_("a",`
 color: var(--n-item-text-color-child-active);
 `),z("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),z("arrow",`
 color: var(--n-arrow-color-child-active);
 `),z("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ue("disabled",[ue("selected, child-active",[_("&:focus-within",De)]),F("selected",[X(null,[z("arrow","color: var(--n-arrow-color-active-hover);"),z("icon","color: var(--n-item-icon-color-active-hover);"),w("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[_("a","color: var(--n-item-text-color-active-hover);"),z("extra","color: var(--n-item-text-color-active-hover);")])])]),F("child-active",[X(null,[z("arrow","color: var(--n-arrow-color-child-active-hover);"),z("icon","color: var(--n-item-icon-color-child-active-hover);"),w("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[_("a","color: var(--n-item-text-color-child-active-hover);"),z("extra","color: var(--n-item-text-color-child-active-hover);")])])]),F("selected",[X(null,[_("&::before","background-color: var(--n-item-color-active-hover);")])]),X(null,De)]),z("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),z("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),w("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[_("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[_("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),z("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),w("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[w("menu-item-content",`
 height: var(--n-item-height);
 `),w("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[xt({duration:".2s"})])]),w("menu-item-group",[w("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),w("menu-tooltip",[_("a",`
 color: inherit;
 text-decoration: none;
 `)]),w("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function X(e,t){return[F("hover",e,t),_("&:hover",e,t)]}const Io=Object.assign(Object.assign({},Y.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}});var ko=$({name:"Menu",props:Io,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=fe(e),l=Y("Menu","-menu",So,bt,e,t),a=J(co,null),r=b(()=>{var I;const{collapsed:P}=e;if(P!==void 0)return P;if(a){const{collapseModeRef:n,collapsedRef:B}=a;if(n.value==="width")return(I=B.value)!==null&&I!==void 0?I:!1}return!1}),c=b(()=>{const{keyField:I,childrenField:P,disabledField:n}=e;return wt(e.items||e.options,{getChildren(B){return B[P]},getDisabled(B){return B[n]},getKey(B){var m;return(m=B[I])!==null&&m!==void 0?m:B.name}})}),u=b(()=>new Set(c.value.treeNodes.map(I=>I.key))),{watchProps:s}=e,v=k(null);s!=null&&s.includes("defaultValue")?Le(()=>{v.value=e.defaultValue}):v.value=e.defaultValue;const f=ae(e,"value"),p=Ee(f,v),d=k([]),y=()=>{d.value=e.defaultExpandAll?c.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||c.value.getPath(p.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?Le(y):y();const C=_t(e,["expandedNames","expandedKeys"]),x=Ee(C,d),h=b(()=>c.value.treeNodes),S=b(()=>c.value.getPath(p.value).keyPath);ne(ce,{props:e,mergedCollapsedRef:r,mergedThemeRef:l,mergedValueRef:p,mergedExpandedKeysRef:x,activePathRef:S,mergedClsPrefixRef:t,isHorizontalRef:b(()=>e.mode==="horizontal"),invertedRef:ae(e,"inverted"),doSelect:U,toggleExpand:Q});function U(I,P){const{"onUpdate:value":n,onUpdateValue:B,onSelect:m}=e;B&&G(B,I,P),n&&G(n,I,P),m&&G(m,I,P),v.value=I}function V(I){const{"onUpdate:expandedKeys":P,onUpdateExpandedKeys:n,onExpandedNamesChange:B,onOpenNamesChange:m}=e;P&&G(P,I),n&&G(n,I),B&&G(B,I),m&&G(m,I),d.value=I}function Q(I){const P=Array.from(x.value),n=P.findIndex(B=>B===I);if(~n)P.splice(n,1);else{if(e.accordion&&u.value.has(I)){const B=P.findIndex(m=>u.value.has(m));B>-1&&P.splice(B,1)}P.push(I)}V(P)}const W=I=>{const P=c.value.getPath(I!=null?I:p.value,{includeSelf:!1}).keyPath;if(!P.length)return;const n=Array.from(x.value),B=new Set([...n,...P]);e.accordion&&u.value.forEach(m=>{B.has(m)&&!P.includes(m)&&B.delete(m)}),V(Array.from(B))},de=b(()=>{const{inverted:I}=e,{common:{cubicBezierEaseInOut:P},self:n}=l.value,{borderRadius:B,borderColorHorizontal:m,fontSize:N,itemHeight:M,dividerColor:T}=n,i={"--n-divider-color":T,"--n-bezier":P,"--n-font-size":N,"--n-border-color-horizontal":m,"--n-border-radius":B,"--n-item-height":M};return I?(i["--n-group-text-color"]=n.groupTextColorInverted,i["--n-color"]=n.colorInverted,i["--n-item-text-color"]=n.itemTextColorInverted,i["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,i["--n-item-text-color-active"]=n.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=n.itemIconColorInverted,i["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=n.arrowColorInverted,i["--n-arrow-color-hover"]=n.arrowColorHoverInverted,i["--n-arrow-color-active"]=n.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=n.itemColorHoverInverted,i["--n-item-color-active"]=n.itemColorActiveInverted,i["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=n.groupTextColor,i["--n-color"]=n.color,i["--n-item-text-color"]=n.itemTextColor,i["--n-item-text-color-hover"]=n.itemTextColorHover,i["--n-item-text-color-active"]=n.itemTextColorActive,i["--n-item-text-color-child-active"]=n.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,i["--n-item-icon-color"]=n.itemIconColor,i["--n-item-icon-color-hover"]=n.itemIconColorHover,i["--n-item-icon-color-active"]=n.itemIconColorActive,i["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=n.arrowColor,i["--n-arrow-color-hover"]=n.arrowColorHover,i["--n-arrow-color-active"]=n.arrowColorActive,i["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,i["--n-arrow-color-child-active"]=n.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHover,i["--n-item-color-hover"]=n.itemColorHover,i["--n-item-color-active"]=n.itemColorActive,i["--n-item-color-active-hover"]=n.itemColorActiveHover,i["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),i}),q=o?ge("menu",b(()=>e.inverted?"a":"b"),de,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:C,uncontrolledExpanededKeys:d,mergedExpandedKeys:x,uncontrolledValue:v,mergedValue:p,activePath:S,tmNodes:h,mergedTheme:l,mergedCollapsed:r,cssVars:o?void 0:de,themeClass:q==null?void 0:q.themeClass,onRender:q==null?void 0:q.onRender,showOption:W}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:l}=this;return l==null||l(),g("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>Ne(a,this.$props)))}});const $o={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ro=O("path",{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z",fill:"currentColor"},null,-1),Ao=[Ro];var Po=$({name:"ArrowLeftOutlined",render:function(t,o){return L(),D("svg",$o,Ao)}});const Bo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Fo=O("path",{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z",fill:"currentColor"},null,-1),No=[Fo];var Oo=$({name:"ArrowRightOutlined",render:function(t,o){return L(),D("svg",Bo,No)}});const Lo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Eo=O("path",{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z",fill:"currentColor"},null,-1),To=[Eo];var Mo=$({name:"BellOutlined",render:function(t,o){return L(),D("svg",Lo,To)}});const Ho={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Do=O("path",{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4l-66.1-.3c-4.4 0-8 3.5-8 8c0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4l66 .3c4.4 0 8-3.5 8-8c0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z",fill:"currentColor"},null,-1),Ko=O("path",{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448s448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",fill:"currentColor"},null,-1),Vo=[Do,Ko];var jo=$({name:"CloseCircleOutlined",render:function(t,o){return L(),D("svg",Ho,Vo)}});const Uo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Wo=O("path",{d:"M180 176h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zm724 0h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zM785.3 504.3L657.7 403.6a7.23 7.23 0 0 0-11.7 5.7V476H378v-62.8c0-6-7-9.4-11.7-5.7L238.7 508.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h268v62.8c0 6 7 9.4 11.7 5.7l127.5-100.8c3.8-2.9 3.8-8.5.2-11.4z",fill:"currentColor"},null,-1),qo=[Wo];var Yo=$({name:"ColumnWidthOutlined",render:function(t,o){return L(),D("svg",Uo,qo)}});const Go={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Xo=O("path",{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8c-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9a353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8c47.9 0 94.3 9.3 137.9 27.8c42.2 17.8 80.1 43.4 112.7 75.9c7.9 7.9 15.3 16.1 22.4 24.5c3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82C271.7 82.6 79.6 277.1 82 516.4C84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7c3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z",fill:"currentColor"},null,-1),Jo=[Xo];var Zo=$({name:"LogoutOutlined",render:function(t,o){return L(),D("svg",Go,Jo)}});const Qo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},en=O("path",{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z",fill:"currentColor"},null,-1),tn=[en];var on=$({name:"MinusOutlined",render:function(t,o){return L(),D("svg",Qo,tn)}});const nn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},rn=O("path",{fill:"currentColor",d:"M456 231a56 56 0 1 0 112 0a56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0a56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0a56 56 0 1 0-112 0z"},null,-1),an=[rn];var ln=$({name:"MoreOutlined",render:function(t,o){return L(),D("svg",nn,an)}});const sn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},cn=O("path",{d:"M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2c-73.2 0-146.4 24.1-206.5 72.3c-15.4 12.3-16.6 35.4-2.7 49.4l181.7 181.7l-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4c.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4l181.7 181.7c6.5 6.5 15 9.7 23.5 9.7c9.7 0 19.3-4.2 25.9-12.4c56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8z",fill:"currentColor"},null,-1),dn=[cn];var un=$({name:"PushpinFilled",render:function(t,o){return L(),D("svg",sn,dn)}});const vn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},mn=O("path",{d:"M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2c-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 0 0-2.7 49.4l181.7 181.7l-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4c.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4l181.7 181.7c6.5 6.5 15 9.7 23.5 9.7c9.7 0 19.3-4.2 25.9-12.4c56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8zM666.2 549.3l-24.5 24.5l3.8 34.4a259.92 259.92 0 0 1-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9c27.2-9.4 55.7-14.1 84.7-14.1c9.6 0 19.3.5 28.9 1.6l34.4 3.8l24.5-24.5L608.5 224L800 415.5L666.2 549.3z",fill:"currentColor"},null,-1),hn=[mn];var pn=$({name:"PushpinOutlined",render:function(t,o){return L(),D("svg",vn,hn)}});const fn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},gn=O("path",{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",fill:"currentColor"},null,-1),xn=[gn];var bn=$({name:"SearchOutlined",render:function(t,o){return L(),D("svg",fn,xn)}});const wn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},_n=O("path",{d:"M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z",fill:"currentColor"},null,-1),yn=[_n];var Cn=$({name:"UserOutlined",render:function(t,o){return L(),D("svg",wn,yn)}});const zn=["onClick"],Sn=$({__name:"Search",setup(e){const t=yt(),o=xe(),l=Ct(),a=k();let r=k(!1),c=k(!1),u=k(!1),s=k([]),v=k("");const f=b(()=>zt(t.menus)),p=b(()=>({"--search-width":r.value?"210px":"0px","--trans-width":l.value.cubicBezierEaseInOut}));async function d(){s.value=[],r.value=!0,Ce(document,"click",y)}function y(){r.value=!1,c.value=!1,qe(document,"click",y)}async function C(h){if(!h.length){c.value=!1,s.value=[];return}u.value=!0,window.setTimeout(()=>{s.value=f.value.filter(S=>S.name.includes(h)||S.path.includes(h)).map(S=>({label:S.name,value:JSON.stringify(S)})),u.value=!1,c.value=!0},500)}function x(){const h=JSON.parse(v.value);h.isLink?window.open(h.path):o.push(h.path),v.value="",c.value=!1,s.value=[]}return(h,S)=>{const U=se;return L(),D("div",{class:"search",style:Ie(p.value),onClick:ye(d,["stop"])},[R(U,{class:"icon",size:"20"},{default:H(()=>[R(E(bn))]),_:1}),R(E(St),{ref_key:"searchRef",ref:a,value:v.value,"onUpdate:value":[S[0]||(S[0]=V=>v.value=V),x],class:"input",show:c.value,loading:u.value,options:s.value,filterable:"",clearable:"",remote:"","show-arrow":!1,"consistent-menu-width":!1,placeholder:"Search",onSearch:C},null,8,["value","show","loading","options"])],12,zn)}}});var In=re(Sn,[["__scopeId","data-v-5f708e7c"]]);const kn=ie("\u63D0 \u4EA4"),$n=ie("\u91CD \u7F6E"),Rn={name:"UpdatePwd"},An=$({...Rn,setup(e){const t=me("message"),o=k(null),l={password:{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801"},newPwd:{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"},confirmPwd:[{required:!0,trigger:["input","blur"],message:"\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801"},{trigger:["input","blur"],message:"\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4",validator(s,v){return v===a.newPwd}}]},{model:a,formInstance:r}=Gt(o,()=>({password:"",newPwd:"",confirmPwd:""}));function c(){r.value.validate(s=>{s||t.success("\u9A8C\u8BC1\u6210\u529F")})}function u(){r.value.resetFields()}return(s,v)=>{const f=$t,p=Jt,d=Rt,y=At,C=Pt,x=It("drag");return L(),Z(C,{style:{width:"500px"},title:"\u4FEE\u6539\u5BC6\u7801",preset:"card",onAfterLeave:u},{default:H(()=>[kt((L(),Z(E(Xt),{ref_key:"userFormRef",ref:o,class:"update-pwd-form",model:E(a),rules:l,"label-width":"auto"},{default:H(()=>[R(p,{label:"\u65E7\u5BC6\u7801\uFF1A",path:"password"},{default:H(()=>[R(f,{value:E(a).password,"onUpdate:value":v[0]||(v[0]=h=>E(a).password=h),type:"password","show-password-on":"mousedown",placeholder:"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801",clearable:""},null,8,["value"])]),_:1}),R(p,{label:"\u65B0\u5BC6\u7801\uFF1A",path:"newPwd"},{default:H(()=>[R(f,{value:E(a).newPwd,"onUpdate:value":v[1]||(v[1]=h=>E(a).newPwd=h),type:"password","show-password-on":"mousedown",placeholder:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",clearable:""},null,8,["value"])]),_:1}),R(p,{label:"\u786E\u8BA4\u5BC6\u7801\uFF1A",first:"",path:"confirmPwd"},{default:H(()=>[R(f,{value:E(a).confirmPwd,"onUpdate:value":v[2]||(v[2]=h=>E(a).confirmPwd=h),type:"password","show-password-on":"mousedown",placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801",clearable:""},null,8,["value"])]),_:1}),R(p,{label:" "},{default:H(()=>[R(y,null,{default:H(()=>[R(d,{type:"primary",onClick:c},{default:H(()=>[kn]),_:1}),R(d,{onClick:u},{default:H(()=>[$n]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])),[[x]])]),_:1})}}});var Pn=re(An,[["__scopeId","data-v-7bc247f6"]]);const Bn=$({__name:"MessageBell",setup(e){const t=k(10);return(o,l)=>{const a=se,r=so;return L(),Z(r,{class:"message-badge",value:t.value,max:99,dot:""},{default:H(()=>[R(a,{size:20},{default:H(()=>[R(E(Mo))]),_:1})]),_:1},8,["value"])}}});var Fn=re(Bn,[["__scopeId","data-v-4f48d3a8"]]);const Nn=e=>(Ot("data-v-2ab13990"),e=e(),Lt(),e),On={class:"header"},Ln={class:"header-left"},En={class:"header-right"},Tn={class:"header-trigger"},Mn={class:"header-trigger"},Hn={class:"header-trigger"},Dn={class:"header-trigger"},Kn=Nn(()=>O("div",{class:"username"},"admin",-1)),Vn={class:"header-trigger"},jn=$({__name:"Header",setup(e){const{isFullScreen:t,toggle:o}=qt(),l=ke(),a=xe(),r=me("dialog"),c=me("message"),u=Ye();let s=k(!1);const v=[{label:"\u4E2A\u4EBA\u4E2D\u5FC3",key:"set",icon:K(Cn)},{label:"\u4FEE\u6539\u5BC6\u7801",key:"update-pwd",icon:K("password")},{type:"divider"},{label:"github",key:"https://github.com/yangxin11010/naive-admin",icon:K("github")},{label:"gitee",key:"https://gitee.com/yangxin11010/naive-admin",icon:K("gitee")},{type:"divider"},{label:"\u9000\u51FA\u767B\u5F55",key:"logout",icon:K(Zo)}];async function f(p,d){switch(console.log(p,d),p){case"set":a.push("/person");break;case"update-pwd":s.value=!0;break;case"logout":r.warning({title:"\u63D0\u793A",content:"\u786E\u8BA4\u9000\u51FA\u767B\u9646\u5417\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{c.info("\u9000\u51FA\u767B\u9646\u6210\u529F\uFF01")}});break;default:window.open(p)}}return Bt(()=>{u.on("updatePwd",()=>{s.value=!0})}),(p,d)=>{const y=se,C=eo,x=Re;return L(),D("div",On,[O("div",Ln,[he(p.$slots,"logo",{},void 0,!0),he(p.$slots,"left",{},void 0,!0)]),O("div",En,[O("div",Tn,[R(In)]),O("div",Mn,[R(Fn)]),O("div",Hn,[R(y,{size:18,onClick:E(o)},{default:H(()=>[(L(),Z(Ft(E(t)?E(Zt):E(Yt))))]),_:1},8,["onClick"])]),R(x,{trigger:"hover",options:v,onSelect:f},{default:H(()=>[O("div",Dn,[R(C,{round:"",size:34,src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"}),Kn])]),_:1}),O("div",Vn,[R(y,{size:18,onClick:E(l).toggleDrawer},{default:H(()=>[R(E(Nt))]),_:1},8,["onClick"])])]),R(Pn,{show:s.value,"onUpdate:show":d[0]||(d[0]=h=>s.value=h)},null,8,["show"])])}}});var sr=re(jn,[["__scopeId","data-v-2ab13990"]]);function Un(e,t,o,l){const a=$e(),r=Object.assign({lazy:!1,delay:500},Et(l)?{capture:l}:l);function c(v){o.call(null,v)}function u(){qe(e,t,s,r)}const s=r.lazy?to(c,r.delay):c;return a.meta.keepAlive===!0?(Tt(()=>{Ce(e,t,s,r)}),Mt(u)):(je(()=>{Ce(e,t,s,r)}),Ht(u)),u}const Wn={class:"tags-btn"},qn=$({__name:"Tags",setup(e){const t=$e(),o=xe(),l=Dt(),a=me("dialog"),r=Ye(),c=k();let u=k([]),s=k(!1),v=k(!1),f=k(0),p=k(0),d=k(null),y=k(-1);const C=b(()=>l.keepTags),x=b(()=>l.activeTags),h=b(()=>t.path),S=b(()=>({"--tags-height":Kt.tagsHeight+"px"})),U=b(()=>{var i;const m=[],N=C.value.find(A=>{var j;return A.path===((j=d.value)==null?void 0:j.path)}),M=x.value.find(A=>{var j;return A.path===((j=d.value)==null?void 0:j.path)}),T=((i=d.value)==null?void 0:i.path)==="/dashboard/console";return M&&m.push({label:"\u5173\u95ED\u5F53\u524D",key:"remove",icon:K(Vt)}),y.value>0&&M&&m.push({label:"\u5173\u95ED\u5DE6\u4FA7",key:"removeLeft",icon:K(Po)}),y.value<x.value.length-1&&M&&m.push({label:"\u5173\u95ED\u53F3\u4FA7",key:"removeRight",icon:K(Oo)}),m.length&&m.push({type:"divider",key:"d0"}),m.push({label:"\u5173\u95ED\u5176\u4ED6",key:"removeOther",icon:K(Yo)}),m.push({label:"\u5173\u95ED\u5168\u90E8",key:"removeAll",icon:K(on)}),(N&&!T&&m.length||M)&&m.push({type:"divider",key:"d1"}),N&&!T&&m.push({label:"\u79FB\u9664\u56FA\u5B9A",key:"removeFixed",icon:K(pn)}),M&&m.push({label:"\u4FDD\u6301\u56FA\u5B9A",key:"keepFixed",icon:K(un)}),v.value&&(m.length&&m.push({type:"divider",key:"d2"}),m.push({label:"\u4E00\u952E\u6E05\u9664",key:"init",icon:K(jo)})),m});pe(()=>t.fullPath,()=>{t.fullPath.startsWith("/redirect")||(l.insert("activeTags",{title:t.meta.title,name:t.name,path:t.path,meta:t.meta,query:{...t.query},matchedName:[...t.matched.map(m=>m.name)]}),B())},{immediate:!0}),Un(window,"resize",B,{lazy:!0});function V(m){o.push({path:m.path,query:m.query})}function Q(m,N){d.value=m,y.value=N,I("remove")}async function W(m,N,M){v.value=!1,d.value=N,y.value=M;const T=m.currentTarget,i=T.getBoundingClientRect();f.value=m.clientX-13,p.value=i.top+T.clientHeight,s.value=!0}async function de(m){const N=C.value.find(A=>A.path===h.value),M=C.value.findIndex(A=>A.path===h.value);d.value=N||x.value.find(A=>A.path===h.value),y.value=M!==-1?M:x.value.findIndex(A=>A.path===h.value);const T=m.currentTarget,i=T.getBoundingClientRect();v.value=!0,f.value=i.left+14+T.clientWidth/2,p.value=i.top+T.clientHeight,s.value=!0}function q(m){m.preventDefault(),P(),c.value.scrollLeft+=m.deltaY||m.detail*20}async function I(m){if(P(),!d.value||y.value===-1)return;const N=x.value.length-1,M=C.value.length-1,T=x.value.findIndex(i=>i.path===h.value);switch(m){case"remove":N<1?o.push(C.value[M].path):h.value===d.value.path&&o.push(x.value[y.value+(y.value<N?1:-1)].path),l.remove(d.value.path);break;case"removeLeft":T!==-1&&y.value>T&&o.push(d.value.path),l.removeLeft(d.value.path);break;case"removeRight":T!==-1&&y.value<T&&o.push(d.value.path),l.removeRight(d.value.path);break;case"removeOther":T!==-1&&d.value.path!==h.value&&o.push(d.value.path),l.removeOther(d.value.path);break;case"removeAll":T!==-1&&o.push(C.value[M].path),l.removeAll(d.value.path);break;case"removeFixed":l.removeFixed(d.value.path);break;case"keepFixed":l.keepFixed(d.value.path);break;case"init":a.warning({title:"\u63D0\u793A",content:"\u786E\u8BA4\u6E05\u7A7A\u6240\u6709 \u201CTags\u201D \u5417\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{o.push("/"),l.init()}});break}}function P(){s.value=!1}function n(){r.emit("keepAlive",t.name),o.replace(`/redirect${t.fullPath}`)}async function B(){await we();const m=u.value.find(i=>i.$el.dataset.path===h.value);if(!m)return;const N=m.$el,M=N.offsetLeft<c.value.scrollLeft,T=N.offsetLeft+N.clientWidth>c.value.scrollLeft+c.value.clientWidth;(M||T)&&c.value.scrollTo({left:M?N.offsetLeft-100:N.offsetLeft-c.value.clientWidth+N.clientWidth+100,behavior:"smooth"})}return(m,N)=>{const M=se,T=jt,i=Re;return L(),D("div",{class:"tags-wrapper",style:Ie(S.value),onContextmenu:N[1]||(N[1]=ye(()=>{},["prevent"]))},[O("div",{ref_key:"tagsRef",ref:c,class:"tags",onWheel:q},[(L(!0),D(_e,null,Te(C.value,(A,j)=>(L(),Z(E(Me),{key:A.path,ref_for:!0,ref_key:"tagsItemRefs",ref:u,class:"tags-item","data-path":A.path,type:h.value===A.path?"primary":"default",size:"medium",onClick:ee=>V(A),onContextmenu:ee=>W(ee,A,j)},{default:H(()=>[ie(ze(A.title),1)]),_:2},1032,["data-path","type","onClick","onContextmenu"]))),128)),(L(!0),D(_e,null,Te(x.value,(A,j)=>(L(),Z(E(Me),{key:A.path,ref_for:!0,ref_key:"tagsItemRefs",ref:u,class:"tags-item","data-path":A.path,type:h.value===A.path?"primary":"default",size:"medium",closable:"",onClick:ee=>V(A),onContextmenu:ee=>W(ee,A,j),onClose:ye(ee=>Q(A,j),["stop"])},{default:H(()=>[ie(ze(A.title),1)]),_:2},1032,["data-path","type","onClick","onContextmenu","onClose"]))),128))],544),O("div",Wn,[R(M,{class:"tags-btn-item",size:"18",onClick:n},{default:H(()=>[R(E(Qt))]),_:1}),R(T,{vertical:""}),R(M,{class:"tags-btn-item",size:"22",onClick:N[0]||(N[0]=A=>de(A))},{default:H(()=>[R(E(ln))]),_:1})]),R(i,{class:"tags-dropdown",placement:"bottom-start",trigger:"manual","show-arrow":"",x:f.value,y:p.value,options:U.value,show:s.value,onClickoutside:P,onSelect:I},null,8,["x","y","options","show"])],36)}}});var cr=re(qn,[["__scopeId","data-v-1bf5d133"]]);const Yn=$({__name:"Menu",setup(e){const t=ke(),o=$e(),l=xe(),a=b(()=>["dark"].includes(t.navMode)&&!["mixin"].includes(t.layoutMode)),r=b(()=>{var v;return((v=o.meta)==null?void 0:v.activeMenu)||o.path});let c=k(o.matched.filter(v=>v.path!=="").map(v=>v.path));pe(()=>o.path,()=>{const v=o.matched.filter(f=>f.path!=="").map(f=>f.path);s(t.uniqueMenuOpened?v:[...new Set([...c.value,...v])])});function u(v,f){if(f.isLink){window.open(v);return}l.push(v)}function s(v){c.value=v}return(v,f)=>{const p=ko;return L(),Z(p,{value:r.value,inverted:a.value,"key-field":"path","label-field":"name",accordion:E(t).uniqueMenuOpened,indent:20,"collapsed-width":64,"expanded-keys":c.value,"onUpdate:expandedKeys":s,"onUpdate:value":u},null,8,["value","inverted","accordion","expanded-keys"])}}});var dr=Yn;const Gn={class:"logo-icon"},Xn={class:"logo-text"},Jn=$({__name:"Logo",props:{collapsed:{type:Boolean},width:{default:272},minWidth:null,height:{default:50},collapsedWidth:{default:48},text:{default:"VueAdmin"},indent:{default:20}},setup(e){const t=e,o=ke(),l=b(()=>({"--logo-width":t.collapsed?t.collapsedWidth+"px":Ut(t.width)?t.width:t.width+"px","--logo-min-width":typeof t.minWidth=="string"?t.minWidth:t.minWidth+"px","--logo-height":t.height+"px","--logo-padding":t.collapsed?`0 ${(t.collapsedWidth-32)/2}px`:`0 18px 0 ${t.indent}px`,"--logo-icon-margin-right":t.collapsed?0:"8px","--logo-text-width":t.collapsed?0:"auto","--logo-opacity":t.collapsed?0:1}));return(a,r)=>{const c=se;return E(o).isShowLogo?(L(),D("div",{key:0,class:"logo",style:Ie(E(l))},[O("div",Gn,[he(a.$slots,"icon",{},()=>[R(c,{size:32,icon:"vue"})],!0)]),O("div",Xn,[he(a.$slots,"default",{},()=>[ie(ze(e.text),1)],!0)])],4)):Wt("",!0)}}});var ur=re(Jn,[["__scopeId","data-v-5a78a9d3"]]);export{sr as H,ur as L,dr as M,lr as N,cr as T,ar as a,ir as b,co as c,mo as l,Ge as p};
