import{d as k,h as g,f as P,g as _,Q as pe,$ as we,O as ie,L as C,cb as rt,J as y,cc as at,M as L,K as I,aQ as it,bC as Ue,aY as lt,ao as Be,G as fe,R as G,cd as st,ce as ct,i as qe,a4 as dt,aK as ut,S as ge,cf as mt,Y as vt,aC as ht,aw as pt,cg as ft,C as le,c7 as We,B as ae,c6 as gt,aE as xt,D as Q,bY as re,F as _e,aG as bt,aA as ye,b0 as wt,a0 as be,bt as $e,w as Ce,aI as oe,aH as ue,bB as _t,ch as yt,bd as Ct,N as Ee,bQ as zt,az as X,j as H,k as F,p as M,ci as St,a as xe,c3 as It,cj as kt,l as A,m as V,q as w,am as Ye,aM as $t,v as Re,bn as ze,ah as Se,aj as Ge,y as se,_ as ee,al as ve,bz as Rt,a7 as Z,W as Pt,an as Nt,bk as Ot,af as Pe,o as Lt,aT as he,ca as At,a$ as Tt,c as Xe,ck as K,ad as Mt,ae as Ht,u as Ne,aS as Bt,cl as Et,bg as Ft,b as Vt,cm as Kt,c2 as jt,a9 as Dt,n as Fe,aa as Ie,x as ke,a8 as Ve,b$ as Ut,aV as qt,bN as Wt,aU as Yt}from"../assets/index-9c5b5408.js";import{u as Gt,F as Xt,a as Jt,_ as Qt}from"./index-01a74a32.js";import{u as Zt,F as eo}from"./use-fullscreen-4873b57e.js";import{F as to,R as oo}from"./ReloadOutlined-bb09ffba.js";import{_ as no}from"./Avatar-84478da0.js";import{_ as Oe}from"./Dropdown-7d0a4aba.js";import{u as ro}from"./use-deounce-4c48a549.js";const ao=k({name:"ChevronDownFilled",render(){return g("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Ke=k({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const t=P(null),o=P(e.value),l=P(e.value),i=P("up"),r=P(!1),c=_(()=>r.value?`${e.clsPrefix}-base-slot-machine-current-number--${i.value}-scroll`:null),u=_(()=>r.value?`${e.clsPrefix}-base-slot-machine-old-number--${i.value}-scroll`:null);pe(ie(e,"value"),(h,f)=>{o.value=f,l.value=h,we(s)});function s(){const h=e.newOriginalNumber,f=e.oldOriginalNumber;f===void 0||h===void 0||(h>f?m("up"):f>h&&m("down"))}function m(h){i.value=h,r.value=!1,we(()=>{var f;(f=t.value)===null||f===void 0||f.offsetWidth,r.value=!0})}return()=>{const{clsPrefix:h}=e;return g("span",{ref:t,class:`${h}-base-slot-machine-number`},o.value!==null?g("span",{class:[`${h}-base-slot-machine-old-number ${h}-base-slot-machine-old-number--top`,u.value]},o.value):null,g("span",{class:[`${h}-base-slot-machine-current-number`,c.value]},g("span",{ref:"numberWrapper",class:[`${h}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${h}-base-slot-machine-current-number__inner--not-number`]},l.value)),o.value!==null?g("span",{class:[`${h}-base-slot-machine-old-number ${h}-base-slot-machine-old-number--bottom`,u.value]},o.value):null)}}}),{cubicBezierEaseOut:ne}=rt;function io({duration:e=".2s"}={}){return[C("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${ne},
 max-width ${e} ${ne},
 transform ${e} ${ne}
 `}),C("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${ne},
 max-width ${e} ${ne},
 transform ${e} ${ne}
 `}),C("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),C("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),C("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),C("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const lo=C([C("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),C("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),C("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),C("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),y("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[y("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[io({duration:".2s"}),at({duration:".2s",delay:"0s"}),y("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[L("top",{transform:"translateY(-100%)"}),L("bottom",{transform:"translateY(100%)"}),L("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),L("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),y("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[L("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),L("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),I("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[L("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),so=k({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){it("-base-slot-machine",lo,ie(e,"clsPrefix"));const t=P(),o=P(),l=_(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const i=[];let r=e.value;for(e.max!==void 0&&(r=Math.min(e.max,r));r>=1;)i.push(r%10),r/=10,r=Math.floor(r);return i.reverse(),i});return pe(ie(e,"value"),(i,r)=>{typeof i=="string"?(o.value=void 0,t.value=void 0):typeof r=="string"?(o.value=i,t.value=void 0):(o.value=i,t.value=r)}),()=>{const{value:i,clsPrefix:r}=e;return typeof i=="number"?g("span",{class:`${r}-base-slot-machine`},g(lt,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>l.value.map((c,u)=>g(Ke,{clsPrefix:r,key:l.value.length-u-1,oldOriginalNumber:t.value,newOriginalNumber:o.value,value:c}))}),g(Ue,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<i?g(Ke,{clsPrefix:r,value:"+"}):null})):g("span",{class:`${r}-base-slot-machine`},i)}}}),co=C([C("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),y("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[L("as-is",[y("badge-sup",{position:"static",transform:"translateX(0)"},[Be({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),L("dot",[y("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[C("::before","border-radius: 4px;")])]),y("badge-sup",`
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
 `,[Be({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),y("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),C("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),uo=Object.assign(Object.assign({},G.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),mo=k({name:"Badge",props:uo,setup(e,{slots:t}){const{mergedClsPrefixRef:o,inlineThemeDisabled:l,mergedRtlRef:i}=fe(e),r=G("Badge","-badge",co,st,e,o),c=P(!1),u=()=>{c.value=!0},s=()=>{c.value=!1},m=_(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&Number(e.value)<=0)||!ct(t.value)));qe(()=>{m.value&&(c.value=!0)});const h=dt("Badge",i,o),f=_(()=>{const{type:b,color:x}=e,{common:{cubicBezierEaseInOut:p,cubicBezierEaseOut:S},self:{[ut("color",b)]:j,fontFamily:D,fontSize:W}}=r.value;return{"--n-font-size":W,"--n-font-family":D,"--n-color":x||j,"--n-ripple-color":x||j,"--n-bezier":p,"--n-ripple-bezier":S}}),d=l?ge("badge",_(()=>{let b="";const{type:x,color:p}=e;return x&&(b+=x[0]),p&&(b+=mt(p)),b}),f,e):void 0,z=_(()=>{const{offset:b}=e;if(!b)return;const[x,p]=b,S=typeof x=="number"?`${x}px`:x,j=typeof p=="number"?`${p}px`:p;return{transform:`translate(calc(${h!=null&&h.value?"50%":"-50%"} + ${S}), ${j})`}});return{rtlEnabled:h,mergedClsPrefix:o,appeared:c,showBadge:m,handleAfterEnter:u,handleAfterLeave:s,cssVars:l?void 0:f,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender,offsetStyle:z}},render(){var e;const{mergedClsPrefix:t,onRender:o,themeClass:l,$slots:i}=this;o==null||o();const r=(e=i.default)===null||e===void 0?void 0:e.call(i);return g("div",{class:[`${t}-badge`,this.rtlEnabled&&`${t}-badge--rtl`,l,{[`${t}-badge--dot`]:this.dot,[`${t}-badge--as-is`]:!r}],style:this.cssVars},r,g(vt,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?g("sup",{class:`${t}-badge-sup`,title:ht(this.value),style:this.offsetStyle},pt(i.value,()=>[this.dot?null:g(so,{clsPrefix:t,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?g(ft,{clsPrefix:t}):null):null}))}}),vo=le("n-layout-sider"),Je={type:String,default:"static"},ho=y("layout",`
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
`,[y("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),L("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),po={embedded:Boolean,position:Je,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},fo=le("n-layout");function Qe(e){return k({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},G.props),po),setup(t){const o=P(null),l=P(null),{mergedClsPrefixRef:i,inlineThemeDisabled:r}=fe(t),c=G("Layout","-layout",ho,We,t,i);function u(x,p){if(t.nativeScrollbar){const{value:S}=o;S&&(p===void 0?S.scrollTo(x):S.scrollTo(x,p))}else{const{value:S}=l;S&&S.scrollTo(x,p)}}ae(fo,t);let s=0,m=0;const h=x=>{var p;const S=x.target;s=S.scrollLeft,m=S.scrollTop,(p=t.onScroll)===null||p===void 0||p.call(t,x)};gt(()=>{if(t.nativeScrollbar){const x=o.value;x&&(x.scrollTop=m,x.scrollLeft=s)}});const f={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},d={scrollTo:u},z=_(()=>{const{common:{cubicBezierEaseInOut:x},self:p}=c.value;return{"--n-bezier":x,"--n-color":t.embedded?p.colorEmbedded:p.color,"--n-text-color":p.textColor}}),b=r?ge("layout",_(()=>t.embedded?"e":""),z,t):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:o,scrollbarInstRef:l,hasSiderStyle:f,mergedTheme:c,handleNativeElScroll:h,cssVars:r?void 0:z,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender},d)},render(){var t;const{mergedClsPrefix:o,hasSider:l}=this;(t=this.onRender)===null||t===void 0||t.call(this);const i=l?this.hasSiderStyle:void 0,r=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return g("div",{class:r,style:this.cssVars},this.nativeScrollbar?g("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):g(xt,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const ir=Qe(!1),lr=Qe(!0),go=y("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[L("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),L("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),xo={position:Je,inverted:Boolean,bordered:{type:Boolean,default:!1}},sr=k({name:"LayoutHeader",props:Object.assign(Object.assign({},G.props),xo),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=fe(e),l=G("Layout","-layout-header",go,We,e,t),i=_(()=>{const{common:{cubicBezierEaseInOut:c},self:u}=l.value,s={"--n-bezier":c};return e.inverted?(s["--n-color"]=u.headerColorInverted,s["--n-text-color"]=u.textColorInverted,s["--n-border-color"]=u.headerBorderColorInverted):(s["--n-color"]=u.headerColor,s["--n-text-color"]=u.textColor,s["--n-border-color"]=u.headerBorderColor),s}),r=o?ge("layout-header",_(()=>e.inverted?"a":"b"),i,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:i,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),g("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),ce=le("n-menu"),Le=le("n-submenu"),Ae=le("n-menu-item-group"),me=8;function Te(e){const t=Q(ce),{props:o,mergedCollapsedRef:l}=t,i=Q(Le,null),r=Q(Ae,null),c=_(()=>o.mode==="horizontal"),u=_(()=>c.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=_(()=>{var d;return Math.max((d=o.collapsedIconSize)!==null&&d!==void 0?d:o.iconSize,o.iconSize)}),m=_(()=>{var d;return!c.value&&e.root&&l.value&&(d=o.collapsedIconSize)!==null&&d!==void 0?d:o.iconSize}),h=_(()=>{if(c.value)return;const{collapsedWidth:d,indent:z,rootIndent:b}=o,{root:x,isGroup:p}=e,S=b===void 0?z:b;if(x)return l.value?d/2-s.value/2:S;if(r)return z/2+r.paddingLeftRef.value;if(i)return(p?z/2:z)+i.paddingLeftRef.value}),f=_(()=>{const{collapsedWidth:d,indent:z,rootIndent:b}=o,{value:x}=s,{root:p}=e;return c.value||!p||!l.value?me:(b===void 0?z:b)+x+me-(d+x)/2});return{dropdownPlacement:u,activeIconSize:m,maxIconSize:s,paddingLeft:h,iconMarginRight:f,NMenu:t,NSubmenu:i}}const Me={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ze=Object.assign(Object.assign({},Me),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),bo=k({name:"MenuOptionGroup",props:Ze,setup(e){ae(Le,null);const t=Te(e);ae(Ae,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:l}=Q(ce);return function(){const{value:i}=o,r=t.paddingLeft.value,{nodeProps:c}=l,u=c==null?void 0:c(e.tmNode.rawNode);return g("div",{class:`${i}-menu-item-group`,role:"group"},g("div",Object.assign({},u,{class:[`${i}-menu-item-group-title`,u==null?void 0:u.class],style:[(u==null?void 0:u.style)||"",r!==void 0?`padding-left: ${r}px;`:""]}),re(e.title),e.extra?g(_e,null," ",re(e.extra)):null),g("div",null,e.tmNodes.map(s=>He(s,l))))}}}),et=k({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=Q(ce);return{menuProps:t,style:_(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:_(()=>{const{maxIconSize:o,activeIconSize:l,iconMarginRight:i}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${l}px`,marginRight:`${i}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:l,renderExtra:i,expandIcon:r}}=this,c=o?o(t.rawNode):re(this.icon);return g("div",{onClick:u=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,u)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},c&&g("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[c]),g("div",{class:`${e}-menu-item-content-header`,role:"none"},l?l(t.rawNode):re(this.title),this.extra||i?g("span",{class:`${e}-menu-item-content-header__extra`}," ",i?i(t.rawNode):re(this.extra)):null),this.showArrow?g(bt,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>r?r(t.rawNode):g(ao,null)}):null)}}),tt=Object.assign(Object.assign({},Me),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),wo=k({name:"Submenu",props:tt,setup(e){const t=Te(e),{NMenu:o,NSubmenu:l}=t,{props:i,mergedCollapsedRef:r,mergedThemeRef:c}=o,u=_(()=>{const{disabled:d}=e;return l!=null&&l.mergedDisabledRef.value||i.disabled?!0:d}),s=P(!1);ae(Le,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:u}),ae(Ae,null);function m(){const{onClick:d}=e;d&&d()}function h(){u.value||(r.value||o.toggleExpand(e.internalKey),m())}function f(d){s.value=d}return{menuProps:i,mergedTheme:c,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:s,paddingLeft:t.paddingLeft,mergedDisabled:u,mergedValue:o.mergedValueRef,childActive:ye(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:_(()=>i.mode==="horizontal"?!1:r.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:_(()=>!u.value&&(i.mode==="horizontal"||r.value)),handlePopoverShowChange:f,handleClick:h}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:l}}=this,i=()=>{const{isHorizontal:c,paddingLeft:u,collapsed:s,mergedDisabled:m,maxIconSize:h,activeIconSize:f,title:d,childActive:z,icon:b,handleClick:x,menuProps:{nodeProps:p},dropdownShow:S,iconMarginRight:j,tmNode:D,mergedClsPrefix:W}=this,q=p==null?void 0:p(D.rawNode);return g("div",Object.assign({},q,{class:[`${W}-menu-item`,q==null?void 0:q.class],role:"menuitem"}),g(et,{tmNode:D,paddingLeft:u,collapsed:s,disabled:m,iconMarginRight:j,maxIconSize:h,activeIconSize:f,title:d,extra:this.extra,showArrow:!c,childActive:z,clsPrefix:W,icon:b,hover:S,onClick:x}))},r=()=>g(Ue,null,{default:()=>{const{tmNodes:c,collapsed:u}=this;return u?null:g("div",{class:`${t}-submenu-children`,role:"menu"},c.map(s=>He(s,this.menuProps)))}});return this.root?g(Oe,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:l}),{default:()=>g("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),this.isHorizontal?null:r())}):g("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),r())}}),ot=Object.assign(Object.assign({},Me),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),_o=k({name:"MenuOption",props:ot,setup(e){const t=Te(e),{NSubmenu:o,NMenu:l}=t,{props:i,mergedClsPrefixRef:r,mergedCollapsedRef:c}=l,u=o?o.mergedDisabledRef:{value:!1},s=_(()=>u.value||e.disabled);function m(f){const{onClick:d}=e;d&&d(f)}function h(f){s.value||(l.doSelect(e.internalKey,e.tmNode.rawNode),m(f))}return{mergedClsPrefix:r,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:l.mergedThemeRef,menuProps:i,dropdownEnabled:ye(()=>e.root&&c.value&&i.mode!=="horizontal"&&!s.value),selected:ye(()=>l.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:h}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:l,nodeProps:i}}=this,r=i==null?void 0:i(o.rawNode);return g("div",Object.assign({},r,{role:"menuitem",class:[`${e}-menu-item`,r==null?void 0:r.class]}),g(wt,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>l?l(o.rawNode):re(this.title),trigger:()=>g(et,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),yo=k({name:"MenuDivider",setup(){const e=Q(ce),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:g("div",{class:`${t.value}-menu-divider`})}}),Co=$e(Ze),zo=$e(ot),So=$e(tt);function nt(e){return e.type==="divider"||e.type==="render"}function Io(e){return e.type==="divider"}function He(e,t){const{rawNode:o}=e,{show:l}=o;if(l===!1)return null;if(nt(o))return Io(o)?g(yo,Object.assign({key:e.key},o.props)):null;const{labelField:i}=t,{key:r,level:c,isGroup:u}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[i],extra:o.titleExtra||o.extra,key:r,internalKey:r,level:c,root:c===0,isGroup:u});return e.children?e.isGroup?g(bo,be(s,Co,{tmNode:e,tmNodes:e.children,key:r})):g(wo,be(s,So,{key:r,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):g(_o,be(s,zo,{key:r,tmNode:e}))}function ko(e){Ce(()=>{e.items&&oe("menu","`items` is deprecated, please use `options` instead."),e.onOpenNamesChange&&oe("menu","`on-open-names-change` is deprecated, please use `on-update:expanded-keys` instead."),e.onSelect&&oe("menu","`on-select` is deprecated, please use `on-update:value` instead."),e.onExpandedNamesChange&&oe("menu","`on-expanded-names-change` is deprecated, please use `on-update:expanded-keys` instead."),e.expandedNames&&oe("menu","`expanded-names` is deprecated, please use `expanded-keys` instead."),e.defaultExpandedNames&&oe("menu","`default-expanded-names` is deprecated, please use `default-expanded-keys` instead.")})}const je=[C("&::before","background-color: var(--n-item-color-hover);"),I("arrow",`
 color: var(--n-arrow-color-hover);
 `),I("icon",`
 color: var(--n-item-icon-color-hover);
 `),y("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[C("a",`
 color: var(--n-item-text-color-hover);
 `),I("extra",`
 color: var(--n-item-text-color-hover);
 `)])],De=[I("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),y("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),I("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],$o=C([y("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[L("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[y("submenu","margin: 0;"),y("menu-item","margin: 0;"),y("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[C("&::before","display: none;"),L("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),y("menu-item-content",[L("selected",[I("icon","color: var(--n-item-icon-color-active-horizontal);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-horizontal);"),I("extra","color: var(--n-item-text-color-active-horizontal);")])]),L("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[y("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),I("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),I("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ue("disabled",[ue("selected, child-active",[C("&:focus-within",De)]),L("selected",[J(null,[I("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-hover-horizontal);"),I("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),L("child-active",[J(null,[I("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),I("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),J("border-bottom: 2px solid var(--n-border-color-horizontal);",De)]),y("menu-item-content-header",[C("a","color: var(--n-item-text-color-horizontal);")])])]),L("collapsed",[y("menu-item-content",[L("selected",[C("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),y("menu-item-content-header","opacity: 0;"),I("arrow","opacity: 0;"),I("icon","color: var(--n-item-icon-color-collapsed);")])]),y("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),y("menu-item-content",`
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
 `,[C("> *","z-index: 1;"),C("&::before",`
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
 `),L("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),L("collapsed",[I("arrow","transform: rotate(0);")]),L("selected",[C("&::before","background-color: var(--n-item-color-active);"),I("arrow","color: var(--n-arrow-color-active);"),I("icon","color: var(--n-item-icon-color-active);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[C("a","color: var(--n-item-text-color-active);"),I("extra","color: var(--n-item-text-color-active);")])]),L("child-active",[y("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[C("a",`
 color: var(--n-item-text-color-child-active);
 `),I("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),I("arrow",`
 color: var(--n-arrow-color-child-active);
 `),I("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ue("disabled",[ue("selected, child-active",[C("&:focus-within",je)]),L("selected",[J(null,[I("arrow","color: var(--n-arrow-color-active-hover);"),I("icon","color: var(--n-item-icon-color-active-hover);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[C("a","color: var(--n-item-text-color-active-hover);"),I("extra","color: var(--n-item-text-color-active-hover);")])])]),L("child-active",[J(null,[I("arrow","color: var(--n-arrow-color-child-active-hover);"),I("icon","color: var(--n-item-icon-color-child-active-hover);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[C("a","color: var(--n-item-text-color-child-active-hover);"),I("extra","color: var(--n-item-text-color-child-active-hover);")])])]),L("selected",[J(null,[C("&::before","background-color: var(--n-item-color-active-hover);")])]),J(null,je)]),I("icon",`
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
 `),I("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),y("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[C("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[C("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),I("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),y("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[y("menu-item-content",`
 height: var(--n-item-height);
 `),y("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[_t({duration:".2s"})])]),y("menu-item-group",[y("menu-item-group-title",`
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
 `)])]),y("menu-tooltip",[C("a",`
 color: inherit;
 text-decoration: none;
 `)]),y("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function J(e,t){return[L("hover",e,t),C("&:hover",e,t)]}const Ro=Object.assign(Object.assign({},G.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),Po=k({name:"Menu",props:Ro,setup(e){ko(e);const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=fe(e),l=G("Menu","-menu",$o,yt,e,t),i=Q(vo,null),r=_(()=>{var $;const{collapsed:O}=e;if(O!==void 0)return O;if(i){const{collapseModeRef:n,collapsedRef:R}=i;if(n.value==="width")return($=R.value)!==null&&$!==void 0?$:!1}return!1}),c=_(()=>{const{keyField:$,childrenField:O,disabledField:n}=e;return Ct(e.items||e.options,{getIgnored(R){return nt(R)},getChildren(R){return R[O]},getDisabled(R){return R[n]},getKey(R){var v;return(v=R[$])!==null&&v!==void 0?v:R.name}})}),u=_(()=>new Set(c.value.treeNodes.map($=>$.key))),{watchProps:s}=e,m=P(null);s!=null&&s.includes("defaultValue")?Ce(()=>{m.value=e.defaultValue}):m.value=e.defaultValue;const h=ie(e,"value"),f=Ee(h,m),d=P([]),z=()=>{d.value=e.defaultExpandAll?c.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||c.value.getPath(f.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?Ce(z):z();const b=zt(e,["expandedNames","expandedKeys"]),x=Ee(b,d),p=_(()=>c.value.treeNodes),S=_(()=>c.value.getPath(f.value).keyPath);ae(ce,{props:e,mergedCollapsedRef:r,mergedThemeRef:l,mergedValueRef:f,mergedExpandedKeysRef:x,activePathRef:S,mergedClsPrefixRef:t,isHorizontalRef:_(()=>e.mode==="horizontal"),invertedRef:ie(e,"inverted"),doSelect:j,toggleExpand:W});function j($,O){const{"onUpdate:value":n,onUpdateValue:R,onSelect:v}=e;R&&X(R,$,O),n&&X(n,$,O),v&&X(v,$,O),m.value=$}function D($){const{"onUpdate:expandedKeys":O,onUpdateExpandedKeys:n,onExpandedNamesChange:R,onOpenNamesChange:v}=e;O&&X(O,$),n&&X(n,$),R&&X(R,$),v&&X(v,$),d.value=$}function W($){const O=Array.from(x.value),n=O.findIndex(R=>R===$);if(~n)O.splice(n,1);else{if(e.accordion&&u.value.has($)){const R=O.findIndex(v=>u.value.has(v));R>-1&&O.splice(R,1)}O.push($)}D(O)}const q=$=>{const O=c.value.getPath($??f.value,{includeSelf:!1}).keyPath;if(!O.length)return;const n=Array.from(x.value),R=new Set([...n,...O]);e.accordion&&u.value.forEach(v=>{R.has(v)&&!O.includes(v)&&R.delete(v)}),D(Array.from(R))},de=_(()=>{const{inverted:$}=e,{common:{cubicBezierEaseInOut:O},self:n}=l.value,{borderRadius:R,borderColorHorizontal:v,fontSize:T,itemHeight:E,dividerColor:B}=n,a={"--n-divider-color":B,"--n-bezier":O,"--n-font-size":T,"--n-border-color-horizontal":v,"--n-border-radius":R,"--n-item-height":E};return $?(a["--n-group-text-color"]=n.groupTextColorInverted,a["--n-color"]=n.colorInverted,a["--n-item-text-color"]=n.itemTextColorInverted,a["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,a["--n-item-text-color-active"]=n.itemTextColorActiveInverted,a["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,a["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveInverted,a["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,a["--n-item-icon-color"]=n.itemIconColorInverted,a["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,a["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,a["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,a["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,a["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHoverInverted,a["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,a["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,a["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,a["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,a["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,a["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontalInverted,a["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,a["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,a["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,a["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,a["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,a["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,a["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontalInverted,a["--n-arrow-color"]=n.arrowColorInverted,a["--n-arrow-color-hover"]=n.arrowColorHoverInverted,a["--n-arrow-color-active"]=n.arrowColorActiveInverted,a["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,a["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,a["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHoverInverted,a["--n-item-color-hover"]=n.itemColorHoverInverted,a["--n-item-color-active"]=n.itemColorActiveInverted,a["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,a["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(a["--n-group-text-color"]=n.groupTextColor,a["--n-color"]=n.color,a["--n-item-text-color"]=n.itemTextColor,a["--n-item-text-color-hover"]=n.itemTextColorHover,a["--n-item-text-color-active"]=n.itemTextColorActive,a["--n-item-text-color-child-active"]=n.itemTextColorChildActive,a["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveHover,a["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,a["--n-item-icon-color"]=n.itemIconColor,a["--n-item-icon-color-hover"]=n.itemIconColorHover,a["--n-item-icon-color-active"]=n.itemIconColorActive,a["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,a["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,a["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHover,a["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,a["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,a["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,a["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,a["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,a["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontal,a["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,a["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,a["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,a["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,a["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,a["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,a["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontal,a["--n-arrow-color"]=n.arrowColor,a["--n-arrow-color-hover"]=n.arrowColorHover,a["--n-arrow-color-active"]=n.arrowColorActive,a["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,a["--n-arrow-color-child-active"]=n.arrowColorChildActive,a["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHover,a["--n-item-color-hover"]=n.itemColorHover,a["--n-item-color-active"]=n.itemColorActive,a["--n-item-color-active-hover"]=n.itemColorActiveHover,a["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),a}),Y=o?ge("menu",_(()=>e.inverted?"a":"b"),de,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:b,uncontrolledExpanededKeys:d,mergedExpandedKeys:x,uncontrolledValue:m,mergedValue:f,activePath:S,tmNodes:p,mergedTheme:l,mergedCollapsed:r,cssVars:o?void 0:de,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender,showOption:q}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:l}=this;return l==null||l(),g("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(i=>He(i,this.$props)))}}),No={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Oo=M("path",{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z",fill:"currentColor"},null,-1),Lo=[Oo],Ao=k({name:"ArrowLeftOutlined",render:function(t,o){return H(),F("svg",No,Lo)}}),To={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Mo=M("path",{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z",fill:"currentColor"},null,-1),Ho=[Mo],Bo=k({name:"ArrowRightOutlined",render:function(t,o){return H(),F("svg",To,Ho)}}),Eo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Fo=M("path",{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z",fill:"currentColor"},null,-1),Vo=[Fo],Ko=k({name:"BellOutlined",render:function(t,o){return H(),F("svg",Eo,Vo)}}),jo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Do=M("path",{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4l-66.1-.3c-4.4 0-8 3.5-8 8c0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4l66 .3c4.4 0 8-3.5 8-8c0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z",fill:"currentColor"},null,-1),Uo=M("path",{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448s448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",fill:"currentColor"},null,-1),qo=[Do,Uo],Wo=k({name:"CloseCircleOutlined",render:function(t,o){return H(),F("svg",jo,qo)}}),Yo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Go=M("path",{d:"M180 176h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zm724 0h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zM785.3 504.3L657.7 403.6a7.23 7.23 0 0 0-11.7 5.7V476H378v-62.8c0-6-7-9.4-11.7-5.7L238.7 508.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h268v62.8c0 6 7 9.4 11.7 5.7l127.5-100.8c3.8-2.9 3.8-8.5.2-11.4z",fill:"currentColor"},null,-1),Xo=[Go],Jo=k({name:"ColumnWidthOutlined",render:function(t,o){return H(),F("svg",Yo,Xo)}}),Qo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Zo=M("path",{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8c-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9a353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8c47.9 0 94.3 9.3 137.9 27.8c42.2 17.8 80.1 43.4 112.7 75.9c7.9 7.9 15.3 16.1 22.4 24.5c3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82C271.7 82.6 79.6 277.1 82 516.4C84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7c3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z",fill:"currentColor"},null,-1),en=[Zo],tn=k({name:"LogoutOutlined",render:function(t,o){return H(),F("svg",Qo,en)}}),on={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},nn=M("path",{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z",fill:"currentColor"},null,-1),rn=[nn],an=k({name:"MinusOutlined",render:function(t,o){return H(),F("svg",on,rn)}}),ln={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},sn=M("path",{fill:"currentColor",d:"M456 231a56 56 0 1 0 112 0a56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0a56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0a56 56 0 1 0-112 0z"},null,-1),cn=[sn],dn=k({name:"MoreOutlined",render:function(t,o){return H(),F("svg",ln,cn)}}),un={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},mn=M("path",{d:"M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2c-73.2 0-146.4 24.1-206.5 72.3c-15.4 12.3-16.6 35.4-2.7 49.4l181.7 181.7l-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4c.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4l181.7 181.7c6.5 6.5 15 9.7 23.5 9.7c9.7 0 19.3-4.2 25.9-12.4c56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8z",fill:"currentColor"},null,-1),vn=[mn],hn=k({name:"PushpinFilled",render:function(t,o){return H(),F("svg",un,vn)}}),pn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},fn=M("path",{d:"M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2c-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 0 0-2.7 49.4l181.7 181.7l-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4c.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4l181.7 181.7c6.5 6.5 15 9.7 23.5 9.7c9.7 0 19.3-4.2 25.9-12.4c56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8zM666.2 549.3l-24.5 24.5l3.8 34.4a259.92 259.92 0 0 1-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9c27.2-9.4 55.7-14.1 84.7-14.1c9.6 0 19.3.5 28.9 1.6l34.4 3.8l24.5-24.5L608.5 224L800 415.5L666.2 549.3z",fill:"currentColor"},null,-1),gn=[fn],xn=k({name:"PushpinOutlined",render:function(t,o){return H(),F("svg",pn,gn)}}),bn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},wn=M("path",{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",fill:"currentColor"},null,-1),_n=[wn],yn=k({name:"SearchOutlined",render:function(t,o){return H(),F("svg",bn,_n)}}),Cn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},zn=M("path",{d:"M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z",fill:"currentColor"},null,-1),Sn=[zn],In=k({name:"UserOutlined",render:function(t,o){return H(),F("svg",Cn,Sn)}}),kn=["onClick"],$n=k({__name:"Search",setup(e){const t=St(),o=xe(),l=It(),i=P(),r=P(!1),c=P(!1),u=P(!1),s=P([]),m=P(""),h=_(()=>kt(t.menus)),f=_(()=>({"--search-width":r.value?"210px":"0px","--trans-width":l.value.cubicBezierEaseInOut}));async function d(){s.value=[],r.value=!0,Se(document,"click",z)}function z(){r.value=!1,c.value=!1,Ge(document,"click",z)}async function b(p){if(!p.length){c.value=!1,s.value=[];return}u.value=!0,window.setTimeout(()=>{s.value=h.value.filter(S=>S.name.includes(p)||S.path.includes(p)).map(S=>({label:S.name,value:JSON.stringify(S)})),u.value=!1,c.value=!0},500)}function x(){const p=JSON.parse(m.value);p.isLink?window.open(p.path):o.push(p.path),m.value="",c.value=!1,s.value=[]}return(p,S)=>{const j=se;return H(),F("div",{class:"search",style:Re(w(f)),onClick:ze(d,["stop"])},[A(j,{class:"icon",size:"20"},{default:V(()=>[A(w(yn))]),_:1}),A(w($t),{ref_key:"searchRef",ref:i,value:w(m),"onUpdate:value":[S[0]||(S[0]=D=>Ye(m)?m.value=D:null),x],class:"input",show:w(c),loading:w(u),options:w(s),filterable:"",clearable:"",remote:"","show-arrow":!1,"consistent-menu-width":!1,placeholder:"Search",onSearch:b},null,8,["value","show","loading","options"])],12,kn)}}});const Rn=ee($n,[["__scopeId","data-v-dde08da8"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Search.vue"]]),Pn=k({name:"UpdatePwd"}),Nn=k({...Pn,setup(e){const t=ve("message"),{model:o,formInstance:l,context:i}=Gt(()=>({password:"",newPwd:"",confirmPwd:""})),r={password:{required:!0,trigger:"blur",message:"请输入旧密码"},newPwd:{required:!0,trigger:"blur",message:"请输入新密码"},confirmPwd:[{required:!0,trigger:["input","blur"],message:"请再次输入新密码"},{trigger:["input","blur"],message:"两次密码输入不一致",validator(s,m){return m===o.value.newPwd}}]};function c(){t.success("验证成功")}function u(){l.value.resetFields()}return(s,m)=>{const h=Nt,f=Qt,d=Ot,z=Rt("drag");return H(),Z(d,{style:{width:"500px"},title:"修改密码",preset:"card",onAfterLeave:u},{default:V(()=>[Pt((H(),Z(w(Xt),{ref:"userFormRef",context:w(i),class:"update-pwd-form",rules:r,"label-width":"auto"},{action:V(()=>[A(w(Jt),{onSubmit:c})]),default:V(()=>[A(f,{label:"旧密码：",path:"password"},{default:V(()=>[A(h,{value:w(o).password,"onUpdate:value":m[0]||(m[0]=b=>w(o).password=b),type:"password","show-password-on":"mousedown",placeholder:"请输入旧密码",clearable:""},null,8,["value"])]),_:1}),A(f,{label:"新密码：",path:"newPwd"},{default:V(()=>[A(h,{value:w(o).newPwd,"onUpdate:value":m[1]||(m[1]=b=>w(o).newPwd=b),type:"password","show-password-on":"mousedown",placeholder:"请输入新密码",clearable:""},null,8,["value"])]),_:1}),A(f,{label:"确认密码：",first:"",path:"confirmPwd"},{default:V(()=>[A(h,{value:w(o).confirmPwd,"onUpdate:value":m[2]||(m[2]=b=>w(o).confirmPwd=b),type:"password","show-password-on":"mousedown",placeholder:"请再次输入新密码",clearable:""},null,8,["value"])]),_:1})]),_:1},8,["context"])),[[z]])]),_:1})}}});const On=ee(Nn,[["__scopeId","data-v-01af8e39"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/UpdatePwd.vue"]]),Ln=k({__name:"MessageBell",setup(e){const t=P(10);return(o,l)=>{const i=se,r=mo;return H(),Z(r,{class:"message-badge",value:w(t),max:99,dot:""},{default:V(()=>[A(i,{size:20},{default:V(()=>[A(w(Ko))]),_:1})]),_:1},8,["value"])}}});const An=ee(Ln,[["__scopeId","data-v-fe8091b9"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/MessageBell.vue"]]),Tn=e=>(Mt("data-v-e92ed723"),e=e(),Ht(),e),Mn={class:"header"},Hn={class:"header-left"},Bn={class:"header-right"},En={class:"header-trigger"},Fn={class:"header-trigger"},Vn={class:"header-trigger"},Kn={class:"header-trigger"},jn=Tn(()=>M("div",{class:"username"},"admin",-1)),Dn={class:"header-trigger"},Un=k({__name:"Header",setup(e){const{isFullScreen:t,toggle:o}=Zt(),l=Pe(),i=xe(),r=ve("dialog"),c=ve("message"),u=Xe(),s=P(!1),m=[{label:"个人中心",key:"set",icon:K(In)},{label:"修改密码",key:"update-pwd",icon:K("password")},{type:"divider"},{label:"github",key:"https://github.com/yx1126/naive-admin",icon:K("github")},{label:"gitee",key:"https://gitee.com/yangxin11010/naive-admin",icon:K("gitee")},{type:"divider"},{label:"退出登录",key:"logout",icon:K(tn)}];async function h(f,d){switch(console.log(f,d),f){case"set":i.push("/person");break;case"update-pwd":s.value=!0;break;case"logout":r.warning({title:"提示",content:"确认退出登陆吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{c.info("退出登陆成功！")}});break;default:window.open(f)}}return Lt(()=>{u.on("updatePwd",()=>{s.value=!0})}),(f,d)=>{const z=se,b=no,x=Oe;return H(),F("div",Mn,[M("div",Hn,[he(f.$slots,"logo",{},void 0,!0),he(f.$slots,"left",{},void 0,!0)]),M("div",Bn,[M("div",En,[A(Rn)]),M("div",Fn,[A(An)]),M("div",Vn,[A(z,{size:18,onClick:w(o)},{default:V(()=>[(H(),Z(At(w(t)?w(to):w(eo))))]),_:1},8,["onClick"])]),A(x,{trigger:"hover",options:m,onSelect:h},{default:V(()=>[M("div",Kn,[A(b,{round:"",size:34,src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"}),jn])]),_:1}),M("div",Dn,[A(z,{size:18,onClick:w(l).toggleDrawer},{default:V(()=>[A(w(Tt))]),_:1},8,["onClick"])])]),A(On,{show:w(s),"onUpdate:show":d[0]||(d[0]=p=>Ye(s)?s.value=p:null)},null,8,["show"])])}}});const cr=ee(Un,[["__scopeId","data-v-e92ed723"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Header.vue"]]);function qn(e,t,o,l){const i=Ne(),r=Object.assign({lazy:!1,delay:500},Bt(l)?{capture:l}:l);function c(m){o.call(null,m)}function u(){Ge(e,t,s,r)}const s=r.lazy?ro(c,r.delay):c;return i.meta.keepAlive===!0?(Et(()=>{Se(e,t,s,r)}),Ft(u)):(qe(()=>{Se(e,t,s,r)}),Vt(u)),u}const Wn={class:"tags-btn"},Yn=k({__name:"Tags",setup(e){const t=Ne(),o=xe(),l=Kt(),i=ve("dialog"),r=Xe(),c=P(),u=P([]),s=P(!1),m=P(!1),h=P(0),f=P(0),d=P(null),z=P(-1),b=_(()=>l.keepTags),x=_(()=>l.activeTags),p=_(()=>t.path),S=_(()=>({"--tags-height":jt.tagsHeight+"px"})),j=_(()=>{var a;const v=[],T=b.value.find(N=>{var U;return N.path===((U=d.value)==null?void 0:U.path)}),E=x.value.find(N=>{var U;return N.path===((U=d.value)==null?void 0:U.path)}),B=((a=d.value)==null?void 0:a.path)==="/dashboard/console";return E&&v.push({label:"关闭当前",key:"remove",icon:K(Dt)}),z.value>0&&E&&v.push({label:"关闭左侧",key:"removeLeft",icon:K(Ao)}),z.value<x.value.length-1&&E&&v.push({label:"关闭右侧",key:"removeRight",icon:K(Bo)}),v.length&&v.push({type:"divider",key:"d0"}),v.push({label:"关闭其他",key:"removeOther",icon:K(Jo)}),v.push({label:"关闭全部",key:"removeAll",icon:K(an)}),(T&&!B&&v.length||E)&&v.push({type:"divider",key:"d1"}),T&&!B&&v.push({label:"移除固定",key:"removeFixed",icon:K(xn)}),E&&v.push({label:"保持固定",key:"keepFixed",icon:K(hn)}),m&&(v.length&&v.push({type:"divider",key:"d2"}),v.push({label:"一键清除",key:"init",icon:K(Wo)})),v});pe(()=>t.fullPath,()=>{t.fullPath.startsWith("/redirect")||(l.insert("activeTags",{title:t.meta.title,name:t.name,path:t.path,meta:t.meta,query:{...t.query},matchedName:[...t.matched.map(v=>v.name)]}),R())},{immediate:!0}),qn(window,"resize",R,{lazy:!0});function D(v){o.push({path:v.path,query:v.query})}function W(v,T){d.value=v,z.value=T,$("remove")}async function q(v,T,E){m.value=!1,d.value=T,z.value=E;const B=v.currentTarget,a=B.getBoundingClientRect();h.value=v.clientX-13,f.value=a.top+B.clientHeight,s.value=!0}async function de(v){const T=b.value.find(N=>N.path===p.value),E=b.value.findIndex(N=>N.path===p.value);d.value=T||x.value.find(N=>N.path===p.value),z.value=E!==-1?E:x.value.findIndex(N=>N.path===p.value);const B=v.currentTarget,a=B.getBoundingClientRect();m.value=!0,h.value=a.left+14+B.clientWidth/2,f.value=a.top+B.clientHeight,s.value=!0}function Y(v){v.preventDefault(),O(),c.value.scrollLeft+=v.deltaY||v.detail*20}async function $(v){if(O(),!d.value||z.value===-1)return;const T=x.value.length-1,E=b.value.length-1,B=x.value.findIndex(a=>a.path===p.value);switch(v){case"remove":T<1?o.push(b.value[E].path):p.value===d.value.path&&o.push(x.value[z.value+(z.value<T?1:-1)].path),l.remove(d.value.path);break;case"removeLeft":B!==-1&&z.value>B&&o.push(d.value.path),l.removeLeft(d.value.path);break;case"removeRight":B!==-1&&z.value<B&&o.push(d.value.path),l.removeRight(d.value.path);break;case"removeOther":B!==-1&&d.value.path!==p.value&&o.push(d.value.path),l.removeOther(d.value.path);break;case"removeAll":B!==-1&&o.push(b.value[E].path),l.removeAll(d.value.path);break;case"removeFixed":l.removeFixed(d.value.path);break;case"keepFixed":l.keepFixed(d.value.path);break;case"init":i.warning({title:"提示",content:"确认清空所有 “Tags” 吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{o.push("/"),l.init()}});break}}function O(){s.value=!1}function n(){r.emit("keepAlive",t.name),o.replace(`/redirect${t.fullPath}`)}async function R(){await we();const v=u.value.find(a=>a.$el.dataset.path===p.value);if(!v)return;const T=v.$el,E=T.offsetLeft<c.value.scrollLeft,B=T.offsetLeft+T.clientWidth>c.value.scrollLeft+c.value.clientWidth;(E||B)&&c.value.scrollTo({left:E?T.offsetLeft-100:T.offsetLeft-c.value.clientWidth+T.clientWidth+100,behavior:"smooth"})}return(v,T)=>{const E=se,B=Ut,a=Oe;return H(),F("div",{class:"tags-wrapper",style:Re(w(S)),onContextmenu:T[1]||(T[1]=ze(()=>{},["prevent"]))},[M("div",{ref_key:"tagsRef",ref:c,class:"tags",onWheel:Y},[(H(!0),F(_e,null,Fe(w(b),(N,U)=>(H(),Z(w(Ve),{key:N.path,ref_for:!0,ref_key:"tagsItemRefs",ref:u,class:"tags-item","data-path":N.path,type:w(p)===N.path?"primary":"default",size:"medium",onClick:te=>D(N),onContextmenu:te=>q(te,N,U)},{default:V(()=>[Ie(ke(N.title),1)]),_:2},1032,["data-path","type","onClick","onContextmenu"]))),128)),(H(!0),F(_e,null,Fe(w(x),(N,U)=>(H(),Z(w(Ve),{key:N.path,ref_for:!0,ref_key:"tagsItemRefs",ref:u,class:"tags-item","data-path":N.path,type:w(p)===N.path?"primary":"default",size:"medium",closable:"",onClick:te=>D(N),onContextmenu:te=>q(te,N,U),onClose:ze(te=>W(N,U),["stop"])},{default:V(()=>[Ie(ke(N.title),1)]),_:2},1032,["data-path","type","onClick","onContextmenu","onClose"]))),128))],544),M("div",Wn,[A(E,{class:"tags-btn-item",size:"18",onClick:n},{default:V(()=>[A(w(oo))]),_:1}),A(B,{vertical:""}),A(E,{class:"tags-btn-item",size:"22",onClick:T[0]||(T[0]=N=>de(N))},{default:V(()=>[A(w(dn))]),_:1})]),A(a,{class:"tags-dropdown",placement:"bottom-start",trigger:"manual","show-arrow":"",x:w(h),y:w(f),options:w(j),show:w(s),onClickoutside:O,onSelect:$},null,8,["x","y","options","show"])],36)}}});const dr=ee(Yn,[["__scopeId","data-v-4d67e454"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Tags.vue"]]),Gn=k({__name:"Menu",setup(e){const t=Pe(),o=Ne(),l=xe(),i=_(()=>["dark"].includes(t.navMode)&&!["mixin"].includes(t.layoutMode)),r=_(()=>{var m;return((m=o.meta)==null?void 0:m.activeMenu)||o.path}),c=P(o.matched.filter(m=>m.path!=="").map(m=>m.path));pe(()=>o.path,()=>{const m=o.matched.filter(h=>h.path!=="").map(h=>h.path);s(t.uniqueMenuOpened?m:[...new Set([...c.value,...m])])});function u(m,h){if(h.isLink){window.open(m);return}l.push(m)}function s(m){c.value=m}return(m,h)=>{const f=Po;return H(),Z(f,qt({value:w(r),inverted:w(i),"key-field":"path","label-field":"name",accordion:w(t).uniqueMenuOpened,indent:20,"collapsed-width":64,"expanded-keys":w(c)},m.$attrs,{"onUpdate:expandedKeys":s,"onUpdate:value":u}),null,16,["value","inverted","accordion","expanded-keys"])}}}),ur=ee(Gn,[["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Menu.vue"]]),Xn={class:"logo-icon"},Jn={class:"logo-text"},Qn=k({__name:"Logo",props:{collapsed:{type:Boolean,required:!1},width:{type:[Number,String],required:!1,default:272},minWidth:{type:[Number,String],required:!1},height:{type:Number,required:!1,default:50},collapsedWidth:{type:Number,required:!1,default:48},text:{type:String,required:!1,default:"NaiveAdmin"},indent:{type:Number,required:!1,default:20}},setup(e){const t=e,o=Pe(),l=_(()=>({"--logo-width":t.collapsed?t.collapsedWidth+"px":Wt(t.width)?t.width:t.width+"px","--logo-min-width":typeof t.minWidth=="string"?t.minWidth:t.minWidth+"px","--logo-height":t.height+"px","--logo-padding":t.collapsed?`0 ${(t.collapsedWidth-32)/2}px`:`0 18px 0 ${t.indent}px`,"--logo-icon-margin-right":t.collapsed?0:"8px","--logo-text-width":t.collapsed?0:"auto","--logo-opacity":t.collapsed?0:1}));return(i,r)=>{const c=se;return w(o).isShowLogo?(H(),F("div",{key:0,class:"logo",style:Re(w(l))},[M("div",Xn,[he(i.$slots,"icon",{},()=>[A(c,{size:32,icon:"vue"})],!0)]),M("div",Jn,[he(i.$slots,"default",{},()=>[Ie(ke(i.text),1)],!0)])],4)):Yt("",!0)}}});const mr=ee(Qn,[["__scopeId","data-v-4f3aa1a4"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Logo.vue"]]);export{cr as H,mr as L,ur as M,dr as T,sr as _,lr as a,ir as b,vo as c,fo as l,Je as p};
