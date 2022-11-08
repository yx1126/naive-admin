import{d as S,G as f,a as R,c as y,q as pe,a6 as we,M as ie,a1 as _,bZ as nt,$ as w,cM as rt,a2 as B,a0 as z,bq as at,cr as qe,bw as it,aK as Ee,J as fe,a7 as Y,cN as lt,cO as st,o as Ue,ah as ct,aT as dt,a9 as ge,aW as ut,ac as vt,ca as mt,aG as ht,cP as pt,C as le,cQ as We,L as ae,cR as ft,au as gt,D as J,bh as re,F as _e,ar as xt,K as ye,bz as bt,H as $e,a3 as be,w as Ce,aR as oe,aM as ue,cq as wt,cS as _t,aJ as yt,a4 as Me,cB as Ct,aI as G,b as T,e as H,i as O,cT as zt,cz as xe,cU as St,cV as It,f as N,g as D,j as L,ba as kt,n as Re,cl as ze,l as se,v as Se,y as Ye,m as Q,bp as me,cg as $t,aj as Z,ab as Rt,b9 as At,cj as Pt,p as Ae,a_ as Bt,bt as he,cW as Nt,by as Ft,cI as Ge,cX as K,ap as Lt,aq as Ot,cK as Pe,bs as Tt,cY as Et,aP as Mt,B as Ht,cZ as Dt,cL as Kt,al as Vt,h as He,am as Ie,k as ke,ak as De,cJ as jt,c3 as qt,bu as Ut}from"../assets/index.efd02abb.js";import{u as Wt,F as Yt}from"./use-fullscreen-6e15fc66.js";import{u as Gt,F as Xt,a as Jt,_ as Zt}from"./index-49dcc37e.js";import{F as Qt,R as eo}from"./ReloadOutlined-73bec1cc.js";import{_ as to}from"./Avatar-8e6a66bb.js";import{_ as Be}from"./Dropdown-9a986223.js";import{u as oo}from"./use-deounce-24c308fe.js";const no=S({name:"ChevronDownFilled",render(){return f("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Ke=S({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const t=R(null),o=R(e.value),l=R(e.value),i=R("up"),r=R(!1),c=y(()=>r.value?`${e.clsPrefix}-base-slot-machine-current-number--${i.value}-scroll`:null),u=y(()=>r.value?`${e.clsPrefix}-base-slot-machine-old-number--${i.value}-scroll`:null);pe(ie(e,"value"),(h,p)=>{o.value=p,l.value=h,we(s)});function s(){const h=e.newOriginalNumber,p=e.oldOriginalNumber;p===void 0||h===void 0||(h>p?v("up"):p>h&&v("down"))}function v(h){i.value=h,r.value=!1,we(()=>{var p;(p=t.value)===null||p===void 0||p.offsetWidth,r.value=!0})}return()=>{const{clsPrefix:h}=e;return f("span",{ref:t,class:`${h}-base-slot-machine-number`},o.value!==null?f("span",{class:[`${h}-base-slot-machine-old-number ${h}-base-slot-machine-old-number--top`,u.value]},o.value):null,f("span",{class:[`${h}-base-slot-machine-current-number`,c.value]},f("span",{ref:"numberWrapper",class:[`${h}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${h}-base-slot-machine-current-number__inner--not-number`]},l.value)),o.value!==null?f("span",{class:[`${h}-base-slot-machine-old-number ${h}-base-slot-machine-old-number--bottom`,u.value]},o.value):null)}}}),{cubicBezierEaseOut:ne}=nt;function ro({duration:e=".2s"}={}){return[_("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${ne},
 max-width ${e} ${ne},
 transform ${e} ${ne}
 `}),_("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${ne},
 max-width ${e} ${ne},
 transform ${e} ${ne}
 `}),_("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),_("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),_("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),_("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const ao=_([_("@keyframes n-base-slot-machine-fade-up-in",`
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
 `,[ro({duration:".2s"}),rt({duration:".2s",delay:"0s"}),w("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[B("top",{transform:"translateY(-100%)"}),B("bottom",{transform:"translateY(100%)"}),B("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),B("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),w("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[B("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),B("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),z("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[B("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),io=S({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){at("-base-slot-machine",ao,ie(e,"clsPrefix"));const t=R(),o=R(),l=y(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const i=[];let r=e.value;for(e.max!==void 0&&(r=Math.min(e.max,r));r>=1;)i.push(r%10),r/=10,r=Math.floor(r);return i.reverse(),i});return pe(ie(e,"value"),(i,r)=>{typeof i=="string"?(o.value=void 0,t.value=void 0):typeof r=="string"?(o.value=i,t.value=void 0):(o.value=i,t.value=r)}),()=>{const{value:i,clsPrefix:r}=e;return typeof i=="number"?f("span",{class:`${r}-base-slot-machine`},f(it,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>l.value.map((c,u)=>f(Ke,{clsPrefix:r,key:l.value.length-u-1,oldOriginalNumber:t.value,newOriginalNumber:o.value,value:c}))}),f(qe,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<i?f(Ke,{clsPrefix:r,value:"+"}):null})):f("span",{class:`${r}-base-slot-machine`},i)}}}),lo=_([_("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),w("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[B("as-is",[w("badge-sup",{position:"static",transform:"translateX(0)"},[Ee({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),B("dot",[w("badge-sup",`
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
 `,[Ee({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),w("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),_("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),so=Object.assign(Object.assign({},Y.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String}),co=S({name:"Badge",props:so,setup(e,{slots:t}){const{mergedClsPrefixRef:o,inlineThemeDisabled:l,mergedRtlRef:i}=fe(e),r=Y("Badge","-badge",lo,lt,e,o),c=R(!1),u=()=>{c.value=!0},s=()=>{c.value=!1},v=y(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&e.value<=0)||!st(t.value)));Ue(()=>{v.value&&(c.value=!0)});const h=ct("Badge",i,o),p=y(()=>{const{type:C,color:b}=e,{common:{cubicBezierEaseInOut:x,cubicBezierEaseOut:g},self:{[dt("color",C)]:I,fontFamily:q,fontSize:V}}=r.value;return{"--n-font-size":V,"--n-font-family":q,"--n-color":b||I,"--n-ripple-color":b||I,"--n-bezier":x,"--n-ripple-bezier":g}}),d=l?ge("badge",y(()=>{let C="";const{type:b,color:x}=e;return b&&(C+=b[0]),x&&(C+=ut(x)),C}),p,e):void 0;return{rtlEnabled:h,mergedClsPrefix:o,appeared:c,showBadge:v,handleAfterEnter:u,handleAfterLeave:s,cssVars:l?void 0:p,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{mergedClsPrefix:t,onRender:o,themeClass:l,$slots:i}=this;o==null||o();const r=(e=i.default)===null||e===void 0?void 0:e.call(i);return f("div",{class:[`${t}-badge`,this.rtlEnabled&&`${t}-badge--rtl`,l,{[`${t}-badge--dot`]:this.dot,[`${t}-badge--as-is`]:!r}],style:this.cssVars},r,f(vt,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?f("sup",{class:`${t}-badge-sup`,title:mt(this.value)},ht(i.value,()=>[this.dot?null:f(io,{clsPrefix:t,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?f(pt,{clsPrefix:t}):null):null}))}}),uo=le("n-layout-sider"),Xe={type:String,default:"static"},vo=w("layout",`
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
 `),B("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),mo={embedded:Boolean,position:Xe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},ho=le("n-layout");function Je(e){return S({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},Y.props),mo),setup(t){const o=R(null),l=R(null),{mergedClsPrefixRef:i,inlineThemeDisabled:r}=fe(t),c=Y("Layout","-layout",vo,We,t,i);function u(x,g){if(t.nativeScrollbar){const{value:I}=o;I&&(g===void 0?I.scrollTo(x):I.scrollTo(x,g))}else{const{value:I}=l;I&&I.scrollTo(x,g)}}ae(ho,t);let s=0,v=0;const h=x=>{var g;const I=x.target;s=I.scrollLeft,v=I.scrollTop,(g=t.onScroll)===null||g===void 0||g.call(t,x)};ft(()=>{if(t.nativeScrollbar){const x=o.value;x&&(x.scrollTop=v,x.scrollLeft=s)}});const p={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},d={scrollTo:u},C=y(()=>{const{common:{cubicBezierEaseInOut:x},self:g}=c.value;return{"--n-bezier":x,"--n-color":t.embedded?g.colorEmbedded:g.color,"--n-text-color":g.textColor}}),b=r?ge("layout",y(()=>t.embedded?"e":""),C,t):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:o,scrollbarInstRef:l,hasSiderStyle:p,mergedTheme:c,handleNativeElScroll:h,cssVars:r?void 0:C,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender},d)},render(){var t;const{mergedClsPrefix:o,hasSider:l}=this;(t=this.onRender)===null||t===void 0||t.call(this);const i=l?this.hasSiderStyle:void 0,r=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return f("div",{class:r,style:this.cssVars},this.nativeScrollbar?f("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):f(gt,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const rr=Je(!1),ar=Je(!0),po=w("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[B("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),B("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),fo={position:Xe,inverted:Boolean,bordered:{type:Boolean,default:!1}},ir=S({name:"LayoutHeader",props:Object.assign(Object.assign({},Y.props),fo),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=fe(e),l=Y("Layout","-layout-header",po,We,e,t),i=y(()=>{const{common:{cubicBezierEaseInOut:c},self:u}=l.value,s={"--n-bezier":c};return e.inverted?(s["--n-color"]=u.headerColorInverted,s["--n-text-color"]=u.textColorInverted,s["--n-border-color"]=u.headerBorderColorInverted):(s["--n-color"]=u.headerColor,s["--n-text-color"]=u.textColor,s["--n-border-color"]=u.headerBorderColor),s}),r=o?ge("layout-header",y(()=>e.inverted?"a":"b"),i,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:i,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),f("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),ce=le("n-menu"),Ne=le("n-submenu"),Fe=le("n-menu-item-group"),ve=8;function Le(e){const t=J(ce),{props:o,mergedCollapsedRef:l}=t,i=J(Ne,null),r=J(Fe,null),c=y(()=>o.mode==="horizontal"),u=y(()=>c.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=y(()=>{var d;return Math.max((d=o.collapsedIconSize)!==null&&d!==void 0?d:o.iconSize,o.iconSize)}),v=y(()=>{var d;return!c.value&&e.root&&l.value&&(d=o.collapsedIconSize)!==null&&d!==void 0?d:o.iconSize}),h=y(()=>{if(c.value)return;const{collapsedWidth:d,indent:C,rootIndent:b}=o,{root:x,isGroup:g}=e,I=b===void 0?C:b;if(x)return l.value?d/2-s.value/2:I;if(r)return C/2+r.paddingLeftRef.value;if(i)return(g?C/2:C)+i.paddingLeftRef.value}),p=y(()=>{const{collapsedWidth:d,indent:C,rootIndent:b}=o,{value:x}=s,{root:g}=e;return c.value||!g||!l.value?ve:(b===void 0?C:b)+x+ve-(d+x)/2});return{dropdownPlacement:u,activeIconSize:v,maxIconSize:s,paddingLeft:h,iconMarginRight:p,NMenu:t,NSubmenu:i}}const Oe={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ze=Object.assign(Object.assign({},Oe),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),go=S({name:"MenuOptionGroup",props:Ze,setup(e){ae(Ne,null);const t=Le(e);ae(Fe,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:l}=J(ce);return function(){const{value:i}=o,r=t.paddingLeft.value,{nodeProps:c}=l,u=c==null?void 0:c(e.tmNode.rawNode);return f("div",{class:`${i}-menu-item-group`,role:"group"},f("div",Object.assign({},u,{class:[`${i}-menu-item-group-title`,u==null?void 0:u.class],style:[(u==null?void 0:u.style)||"",r!==void 0?`padding-left: ${r}px;`:""]}),re(e.title),e.extra?f(_e,null," ",re(e.extra)):null),f("div",null,e.tmNodes.map(s=>Te(s,l))))}}}),Qe=S({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=J(ce);return{menuProps:t,style:y(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:y(()=>{const{maxIconSize:o,activeIconSize:l,iconMarginRight:i}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${l}px`,marginRight:`${i}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:l,renderExtra:i,expandIcon:r}}=this,c=o?o(t.rawNode):re(this.icon);return f("div",{onClick:u=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,u)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},c&&f("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[c]),f("div",{class:`${e}-menu-item-content-header`,role:"none"},l?l(t.rawNode):re(this.title),this.extra||i?f("span",{class:`${e}-menu-item-content-header__extra`}," ",i?i(t.rawNode):re(this.extra)):null),this.showArrow?f(xt,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>r?r(t.rawNode):f(no,null)}):null)}}),et=Object.assign(Object.assign({},Oe),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),xo=S({name:"Submenu",props:et,setup(e){const t=Le(e),{NMenu:o,NSubmenu:l}=t,{props:i,mergedCollapsedRef:r,mergedThemeRef:c}=o,u=y(()=>{const{disabled:d}=e;return l!=null&&l.mergedDisabledRef.value||i.disabled?!0:d}),s=R(!1);ae(Ne,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:u}),ae(Fe,null);function v(){const{onClick:d}=e;d&&d()}function h(){u.value||(r.value||o.toggleExpand(e.internalKey),v())}function p(d){s.value=d}return{menuProps:i,mergedTheme:c,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:s,paddingLeft:t.paddingLeft,mergedDisabled:u,mergedValue:o.mergedValueRef,childActive:ye(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:y(()=>i.mode==="horizontal"?!1:r.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:y(()=>!u.value&&(i.mode==="horizontal"||r.value)),handlePopoverShowChange:p,handleClick:h}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:l}}=this,i=()=>{const{isHorizontal:c,paddingLeft:u,collapsed:s,mergedDisabled:v,maxIconSize:h,activeIconSize:p,title:d,childActive:C,icon:b,handleClick:x,menuProps:{nodeProps:g},dropdownShow:I,iconMarginRight:q,tmNode:V,mergedClsPrefix:ee}=this,U=g==null?void 0:g(V.rawNode);return f("div",Object.assign({},U,{class:[`${ee}-menu-item`,U==null?void 0:U.class],role:"menuitem"}),f(Qe,{tmNode:V,paddingLeft:u,collapsed:s,disabled:v,iconMarginRight:q,maxIconSize:h,activeIconSize:p,title:d,extra:this.extra,showArrow:!c,childActive:C,clsPrefix:ee,icon:b,hover:I,onClick:x}))},r=()=>f(qe,null,{default:()=>{const{tmNodes:c,collapsed:u}=this;return u?null:f("div",{class:`${t}-submenu-children`,role:"menu"},c.map(s=>Te(s,this.menuProps)))}});return this.root?f(Be,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:l}),{default:()=>f("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),this.isHorizontal?null:r())}):f("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),r())}}),tt=Object.assign(Object.assign({},Oe),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),bo=S({name:"MenuOption",props:tt,setup(e){const t=Le(e),{NSubmenu:o,NMenu:l}=t,{props:i,mergedClsPrefixRef:r,mergedCollapsedRef:c}=l,u=o?o.mergedDisabledRef:{value:!1},s=y(()=>u.value||e.disabled);function v(p){const{onClick:d}=e;d&&d(p)}function h(p){s.value||(l.doSelect(e.internalKey,e.tmNode.rawNode),v(p))}return{mergedClsPrefix:r,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:l.mergedThemeRef,menuProps:i,dropdownEnabled:ye(()=>e.root&&c.value&&i.mode!=="horizontal"&&!s.value),selected:ye(()=>l.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:h}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:l,nodeProps:i}}=this,r=i==null?void 0:i(o.rawNode);return f("div",Object.assign({},r,{role:"menuitem",class:[`${e}-menu-item`,r==null?void 0:r.class]}),f(bt,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>l?l(o.rawNode):re(this.title),trigger:()=>f(Qe,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),wo=S({name:"MenuDivider",setup(){const e=J(ce),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:f("div",{class:`${t.value}-menu-divider`})}}),_o=$e(Ze),yo=$e(tt),Co=$e(et);function ot(e){return e.type==="divider"||e.type==="render"}function zo(e){return e.type==="divider"}function Te(e,t){const{rawNode:o}=e,{show:l}=o;if(l===!1)return null;if(ot(o))return zo(o)?f(wo,Object.assign({key:e.key},o.props)):null;const{labelField:i}=t,{key:r,level:c,isGroup:u}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[i],extra:o.titleExtra||o.extra,key:r,internalKey:r,level:c,root:c===0,isGroup:u});return e.children?e.isGroup?f(go,be(s,_o,{tmNode:e,tmNodes:e.children,key:r})):f(xo,be(s,Co,{key:r,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):f(bo,be(s,yo,{key:r,tmNode:e}))}function So(e){Ce(()=>{e.items&&oe("menu","`items` is deprecated, please use `options` instead."),e.onOpenNamesChange&&oe("menu","`on-open-names-change` is deprecated, please use `on-update:expanded-keys` instead."),e.onSelect&&oe("menu","`on-select` is deprecated, please use `on-update:value` instead."),e.onExpandedNamesChange&&oe("menu","`on-expanded-names-change` is deprecated, please use `on-update:expanded-keys` instead."),e.expandedNames&&oe("menu","`expanded-names` is deprecated, please use `expanded-keys` instead."),e.defaultExpandedNames&&oe("menu","`default-expanded-names` is deprecated, please use `default-expanded-keys` instead.")})}const Ve=[_("&::before","background-color: var(--n-item-color-hover);"),z("arrow",`
 color: var(--n-arrow-color-hover);
 `),z("icon",`
 color: var(--n-item-icon-color-hover);
 `),w("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[_("a",`
 color: var(--n-item-text-color-hover);
 `),z("extra",`
 color: var(--n-item-text-color-hover);
 `)])],je=[z("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),w("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[_("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Io=_([w("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[B("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[w("submenu","margin: 0;"),w("menu-item","margin: 0;"),w("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[_("&::before","display: none;"),B("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),w("menu-item-content",[B("selected",[z("icon","color: var(--n-item-icon-color-active-horizontal);"),w("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[_("a","color: var(--n-item-text-color-active-horizontal);"),z("extra","color: var(--n-item-text-color-active-horizontal);")])]),B("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[w("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[_("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),z("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ue("disabled",[ue("selected, child-active",[_("&:focus-within",je)]),B("selected",[X(null,[z("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),w("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[_("a","color: var(--n-item-text-color-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),B("child-active",[X(null,[z("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),w("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[_("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),X("border-bottom: 2px solid var(--n-border-color-horizontal);",je)]),w("menu-item-content-header",[_("a","color: var(--n-item-text-color-horizontal);")])])]),B("collapsed",[w("menu-item-content",[B("selected",[_("&::before",`
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
 `),B("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),B("collapsed",[z("arrow","transform: rotate(0);")]),B("selected",[_("&::before","background-color: var(--n-item-color-active);"),z("arrow","color: var(--n-arrow-color-active);"),z("icon","color: var(--n-item-icon-color-active);"),w("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[_("a","color: var(--n-item-text-color-active);"),z("extra","color: var(--n-item-text-color-active);")])]),B("child-active",[w("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[_("a",`
 color: var(--n-item-text-color-child-active);
 `),z("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),z("arrow",`
 color: var(--n-arrow-color-child-active);
 `),z("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ue("disabled",[ue("selected, child-active",[_("&:focus-within",Ve)]),B("selected",[X(null,[z("arrow","color: var(--n-arrow-color-active-hover);"),z("icon","color: var(--n-item-icon-color-active-hover);"),w("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[_("a","color: var(--n-item-text-color-active-hover);"),z("extra","color: var(--n-item-text-color-active-hover);")])])]),B("child-active",[X(null,[z("arrow","color: var(--n-arrow-color-child-active-hover);"),z("icon","color: var(--n-item-icon-color-child-active-hover);"),w("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[_("a","color: var(--n-item-text-color-child-active-hover);"),z("extra","color: var(--n-item-text-color-child-active-hover);")])])]),B("selected",[X(null,[_("&::before","background-color: var(--n-item-color-active-hover);")])]),X(null,Ve)]),z("icon",`
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
 `,[wt({duration:".2s"})])]),w("menu-item-group",[w("menu-item-group-title",`
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
 `)]);function X(e,t){return[B("hover",e,t),_("&:hover",e,t)]}const ko=Object.assign(Object.assign({},Y.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),$o=S({name:"Menu",props:ko,setup(e){So(e);const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=fe(e),l=Y("Menu","-menu",Io,_t,e,t),i=J(uo,null),r=y(()=>{var k;const{collapsed:P}=e;if(P!==void 0)return P;if(i){const{collapseModeRef:n,collapsedRef:$}=i;if(n.value==="width")return(k=$.value)!==null&&k!==void 0?k:!1}return!1}),c=y(()=>{const{keyField:k,childrenField:P,disabledField:n}=e;return yt(e.items||e.options,{getIgnored($){return ot($)},getChildren($){return $[P]},getDisabled($){return $[n]},getKey($){var m;return(m=$[k])!==null&&m!==void 0?m:$.name}})}),u=y(()=>new Set(c.value.treeNodes.map(k=>k.key))),{watchProps:s}=e,v=R(null);s!=null&&s.includes("defaultValue")?Ce(()=>{v.value=e.defaultValue}):v.value=e.defaultValue;const h=ie(e,"value"),p=Me(h,v),d=R([]),C=()=>{d.value=e.defaultExpandAll?c.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||c.value.getPath(p.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?Ce(C):C();const b=Ct(e,["expandedNames","expandedKeys"]),x=Me(b,d),g=y(()=>c.value.treeNodes),I=y(()=>c.value.getPath(p.value).keyPath);ae(ce,{props:e,mergedCollapsedRef:r,mergedThemeRef:l,mergedValueRef:p,mergedExpandedKeysRef:x,activePathRef:I,mergedClsPrefixRef:t,isHorizontalRef:y(()=>e.mode==="horizontal"),invertedRef:ie(e,"inverted"),doSelect:q,toggleExpand:ee});function q(k,P){const{"onUpdate:value":n,onUpdateValue:$,onSelect:m}=e;$&&G($,k,P),n&&G(n,k,P),m&&G(m,k,P),v.value=k}function V(k){const{"onUpdate:expandedKeys":P,onUpdateExpandedKeys:n,onExpandedNamesChange:$,onOpenNamesChange:m}=e;P&&G(P,k),n&&G(n,k),$&&G($,k),m&&G(m,k),d.value=k}function ee(k){const P=Array.from(x.value),n=P.findIndex($=>$===k);if(~n)P.splice(n,1);else{if(e.accordion&&u.value.has(k)){const $=P.findIndex(m=>u.value.has(m));$>-1&&P.splice($,1)}P.push(k)}V(P)}const U=k=>{const P=c.value.getPath(k!=null?k:p.value,{includeSelf:!1}).keyPath;if(!P.length)return;const n=Array.from(x.value),$=new Set([...n,...P]);e.accordion&&u.value.forEach(m=>{$.has(m)&&!P.includes(m)&&$.delete(m)}),V(Array.from($))},de=y(()=>{const{inverted:k}=e,{common:{cubicBezierEaseInOut:P},self:n}=l.value,{borderRadius:$,borderColorHorizontal:m,fontSize:F,itemHeight:M,dividerColor:E}=n,a={"--n-divider-color":E,"--n-bezier":P,"--n-font-size":F,"--n-border-color-horizontal":m,"--n-border-radius":$,"--n-item-height":M};return k?(a["--n-group-text-color"]=n.groupTextColorInverted,a["--n-color"]=n.colorInverted,a["--n-item-text-color"]=n.itemTextColorInverted,a["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,a["--n-item-text-color-active"]=n.itemTextColorActiveInverted,a["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,a["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveInverted,a["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,a["--n-item-icon-color"]=n.itemIconColorInverted,a["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,a["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,a["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,a["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,a["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHoverInverted,a["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,a["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,a["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,a["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,a["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,a["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontalInverted,a["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,a["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,a["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,a["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,a["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,a["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,a["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontalInverted,a["--n-arrow-color"]=n.arrowColorInverted,a["--n-arrow-color-hover"]=n.arrowColorHoverInverted,a["--n-arrow-color-active"]=n.arrowColorActiveInverted,a["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,a["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,a["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHoverInverted,a["--n-item-color-hover"]=n.itemColorHoverInverted,a["--n-item-color-active"]=n.itemColorActiveInverted,a["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,a["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(a["--n-group-text-color"]=n.groupTextColor,a["--n-color"]=n.color,a["--n-item-text-color"]=n.itemTextColor,a["--n-item-text-color-hover"]=n.itemTextColorHover,a["--n-item-text-color-active"]=n.itemTextColorActive,a["--n-item-text-color-child-active"]=n.itemTextColorChildActive,a["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveHover,a["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,a["--n-item-icon-color"]=n.itemIconColor,a["--n-item-icon-color-hover"]=n.itemIconColorHover,a["--n-item-icon-color-active"]=n.itemIconColorActive,a["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,a["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,a["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHover,a["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,a["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,a["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,a["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,a["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,a["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontal,a["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,a["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,a["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,a["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,a["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,a["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,a["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontal,a["--n-arrow-color"]=n.arrowColor,a["--n-arrow-color-hover"]=n.arrowColorHover,a["--n-arrow-color-active"]=n.arrowColorActive,a["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,a["--n-arrow-color-child-active"]=n.arrowColorChildActive,a["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHover,a["--n-item-color-hover"]=n.itemColorHover,a["--n-item-color-active"]=n.itemColorActive,a["--n-item-color-active-hover"]=n.itemColorActiveHover,a["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),a}),W=o?ge("menu",y(()=>e.inverted?"a":"b"),de,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:b,uncontrolledExpanededKeys:d,mergedExpandedKeys:x,uncontrolledValue:v,mergedValue:p,activePath:I,tmNodes:g,mergedTheme:l,mergedCollapsed:r,cssVars:o?void 0:de,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender,showOption:U}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:l}=this;return l==null||l(),f("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(i=>Te(i,this.$props)))}}),Ro={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ao=O("path",{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z",fill:"currentColor"},null,-1),Po=[Ao],Bo=S({name:"ArrowLeftOutlined",render:function(t,o){return T(),H("svg",Ro,Po)}}),No={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Fo=O("path",{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z",fill:"currentColor"},null,-1),Lo=[Fo],Oo=S({name:"ArrowRightOutlined",render:function(t,o){return T(),H("svg",No,Lo)}}),To={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Eo=O("path",{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z",fill:"currentColor"},null,-1),Mo=[Eo],Ho=S({name:"BellOutlined",render:function(t,o){return T(),H("svg",To,Mo)}}),Do={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ko=O("path",{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4l-66.1-.3c-4.4 0-8 3.5-8 8c0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4l66 .3c4.4 0 8-3.5 8-8c0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z",fill:"currentColor"},null,-1),Vo=O("path",{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448s448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",fill:"currentColor"},null,-1),jo=[Ko,Vo],qo=S({name:"CloseCircleOutlined",render:function(t,o){return T(),H("svg",Do,jo)}}),Uo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Wo=O("path",{d:"M180 176h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zm724 0h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zM785.3 504.3L657.7 403.6a7.23 7.23 0 0 0-11.7 5.7V476H378v-62.8c0-6-7-9.4-11.7-5.7L238.7 508.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h268v62.8c0 6 7 9.4 11.7 5.7l127.5-100.8c3.8-2.9 3.8-8.5.2-11.4z",fill:"currentColor"},null,-1),Yo=[Wo],Go=S({name:"ColumnWidthOutlined",render:function(t,o){return T(),H("svg",Uo,Yo)}}),Xo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Jo=O("path",{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8c-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9a353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8c47.9 0 94.3 9.3 137.9 27.8c42.2 17.8 80.1 43.4 112.7 75.9c7.9 7.9 15.3 16.1 22.4 24.5c3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82C271.7 82.6 79.6 277.1 82 516.4C84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7c3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z",fill:"currentColor"},null,-1),Zo=[Jo],Qo=S({name:"LogoutOutlined",render:function(t,o){return T(),H("svg",Xo,Zo)}}),en={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},tn=O("path",{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z",fill:"currentColor"},null,-1),on=[tn],nn=S({name:"MinusOutlined",render:function(t,o){return T(),H("svg",en,on)}}),rn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},an=O("path",{fill:"currentColor",d:"M456 231a56 56 0 1 0 112 0a56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0a56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0a56 56 0 1 0-112 0z"},null,-1),ln=[an],sn=S({name:"MoreOutlined",render:function(t,o){return T(),H("svg",rn,ln)}}),cn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},dn=O("path",{d:"M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2c-73.2 0-146.4 24.1-206.5 72.3c-15.4 12.3-16.6 35.4-2.7 49.4l181.7 181.7l-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4c.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4l181.7 181.7c6.5 6.5 15 9.7 23.5 9.7c9.7 0 19.3-4.2 25.9-12.4c56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8z",fill:"currentColor"},null,-1),un=[dn],vn=S({name:"PushpinFilled",render:function(t,o){return T(),H("svg",cn,un)}}),mn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},hn=O("path",{d:"M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2c-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 0 0-2.7 49.4l181.7 181.7l-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4c.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4l181.7 181.7c6.5 6.5 15 9.7 23.5 9.7c9.7 0 19.3-4.2 25.9-12.4c56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8zM666.2 549.3l-24.5 24.5l3.8 34.4a259.92 259.92 0 0 1-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9c27.2-9.4 55.7-14.1 84.7-14.1c9.6 0 19.3.5 28.9 1.6l34.4 3.8l24.5-24.5L608.5 224L800 415.5L666.2 549.3z",fill:"currentColor"},null,-1),pn=[hn],fn=S({name:"PushpinOutlined",render:function(t,o){return T(),H("svg",mn,pn)}}),gn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},xn=O("path",{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",fill:"currentColor"},null,-1),bn=[xn],wn=S({name:"SearchOutlined",render:function(t,o){return T(),H("svg",gn,bn)}}),_n={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},yn=O("path",{d:"M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z",fill:"currentColor"},null,-1),Cn=[yn],zn=S({name:"UserOutlined",render:function(t,o){return T(),H("svg",_n,Cn)}}),Sn=["onClick"],In=S({__name:"Search",setup(e){const t=zt(),o=xe(),l=St(),i=R();let r=R(!1),c=R(!1),u=R(!1),s=R([]),v=R("");const h=y(()=>It(t.menus)),p=y(()=>({"--search-width":r.value?"210px":"0px","--trans-width":l.value.cubicBezierEaseInOut}));async function d(){s.value=[],r.value=!0,Se(document,"click",C)}function C(){r.value=!1,c.value=!1,Ye(document,"click",C)}async function b(g){if(!g.length){c.value=!1,s.value=[];return}u.value=!0,window.setTimeout(()=>{s.value=h.value.filter(I=>I.name.includes(g)||I.path.includes(g)).map(I=>({label:I.name,value:JSON.stringify(I)})),u.value=!1,c.value=!0},500)}function x(){const g=JSON.parse(v.value);g.isLink?window.open(g.path):o.push(g.path),v.value="",c.value=!1,s.value=[]}return(g,I)=>{const q=se;return T(),H("div",{class:"search",style:Re(p.value),onClick:ze(d,["stop"])},[N(q,{class:"icon",size:"20"},{default:D(()=>[N(L(wn))]),_:1}),N(L(kt),{ref_key:"searchRef",ref:i,value:v.value,"onUpdate:value":[I[0]||(I[0]=V=>v.value=V),x],class:"input",show:c.value,loading:u.value,options:s.value,filterable:"",clearable:"",remote:"","show-arrow":!1,"consistent-menu-width":!1,placeholder:"Search",onSearch:b},null,8,["value","show","loading","options"])],12,Sn)}}});const kn=Q(In,[["__scopeId","data-v-dde08da8"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Search.vue"]]),$n=S({name:"UpdatePwd"}),Rn=S({...$n,setup(e){const t=me("message"),{model:o,formInstance:l,context:i}=Gt(()=>({password:"",newPwd:"",confirmPwd:""})),r={password:{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801"},newPwd:{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"},confirmPwd:[{required:!0,trigger:["input","blur"],message:"\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801"},{trigger:["input","blur"],message:"\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4",validator(s,v){return v===o.value.newPwd}}]};function c(){t.success("\u9A8C\u8BC1\u6210\u529F")}function u(){l.value.resetFields()}return(s,v)=>{const h=At,p=Zt,d=Pt,C=$t("drag");return T(),Z(d,{style:{width:"500px"},title:"\u4FEE\u6539\u5BC6\u7801",preset:"card",onAfterLeave:u},{default:D(()=>[Rt((T(),Z(L(Xt),{ref:"userFormRef",context:L(i),class:"update-pwd-form",rules:r,"label-width":"auto"},{action:D(()=>[N(L(Jt),{onSubmit:c})]),default:D(()=>[N(p,{label:"\u65E7\u5BC6\u7801\uFF1A",path:"password"},{default:D(()=>[N(h,{value:L(o).password,"onUpdate:value":v[0]||(v[0]=b=>L(o).password=b),type:"password","show-password-on":"mousedown",placeholder:"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801",clearable:""},null,8,["value"])]),_:1}),N(p,{label:"\u65B0\u5BC6\u7801\uFF1A",path:"newPwd"},{default:D(()=>[N(h,{value:L(o).newPwd,"onUpdate:value":v[1]||(v[1]=b=>L(o).newPwd=b),type:"password","show-password-on":"mousedown",placeholder:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",clearable:""},null,8,["value"])]),_:1}),N(p,{label:"\u786E\u8BA4\u5BC6\u7801\uFF1A",first:"",path:"confirmPwd"},{default:D(()=>[N(h,{value:L(o).confirmPwd,"onUpdate:value":v[2]||(v[2]=b=>L(o).confirmPwd=b),type:"password","show-password-on":"mousedown",placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801",clearable:""},null,8,["value"])]),_:1})]),_:1},8,["context"])),[[C]])]),_:1})}}});const An=Q(Rn,[["__scopeId","data-v-01af8e39"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/UpdatePwd.vue"]]),Pn=S({__name:"MessageBell",setup(e){const t=R(10);return(o,l)=>{const i=se,r=co;return T(),Z(r,{class:"message-badge",value:t.value,max:99,dot:""},{default:D(()=>[N(i,{size:20},{default:D(()=>[N(L(Ho))]),_:1})]),_:1},8,["value"])}}});const Bn=Q(Pn,[["__scopeId","data-v-fe8091b9"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/MessageBell.vue"]]),Nn=e=>(Lt("data-v-e92ed723"),e=e(),Ot(),e),Fn={class:"header"},Ln={class:"header-left"},On={class:"header-right"},Tn={class:"header-trigger"},En={class:"header-trigger"},Mn={class:"header-trigger"},Hn={class:"header-trigger"},Dn=Nn(()=>O("div",{class:"username"},"admin",-1)),Kn={class:"header-trigger"},Vn=S({__name:"Header",setup(e){const{isFullScreen:t,toggle:o}=Wt(),l=Ae(),i=xe(),r=me("dialog"),c=me("message"),u=Ge();let s=R(!1);const v=[{label:"\u4E2A\u4EBA\u4E2D\u5FC3",key:"set",icon:K(zn)},{label:"\u4FEE\u6539\u5BC6\u7801",key:"update-pwd",icon:K("password")},{type:"divider"},{label:"github",key:"https://github.com/yangxin11010/naive-admin",icon:K("github")},{label:"gitee",key:"https://gitee.com/yangxin11010/naive-admin",icon:K("gitee")},{type:"divider"},{label:"\u9000\u51FA\u767B\u5F55",key:"logout",icon:K(Qo)}];async function h(p,d){switch(console.log(p,d),p){case"set":i.push("/person");break;case"update-pwd":s.value=!0;break;case"logout":r.warning({title:"\u63D0\u793A",content:"\u786E\u8BA4\u9000\u51FA\u767B\u9646\u5417\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{c.info("\u9000\u51FA\u767B\u9646\u6210\u529F\uFF01")}});break;default:window.open(p)}}return Bt(()=>{u.on("updatePwd",()=>{s.value=!0})}),(p,d)=>{const C=se,b=to,x=Be;return T(),H("div",Fn,[O("div",Ln,[he(p.$slots,"logo",{},void 0,!0),he(p.$slots,"left",{},void 0,!0)]),O("div",On,[O("div",Tn,[N(kn)]),O("div",En,[N(Bn)]),O("div",Mn,[N(C,{size:18,onClick:L(o)},{default:D(()=>[(T(),Z(Nt(L(t)?L(Qt):L(Yt))))]),_:1},8,["onClick"])]),N(x,{trigger:"hover",options:v,onSelect:h},{default:D(()=>[O("div",Hn,[N(b,{round:"",size:34,src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"}),Dn])]),_:1}),O("div",Kn,[N(C,{size:18,onClick:L(l).toggleDrawer},{default:D(()=>[N(L(Ft))]),_:1},8,["onClick"])])]),N(An,{show:s.value,"onUpdate:show":d[0]||(d[0]=g=>s.value=g)},null,8,["show"])])}}});const lr=Q(Vn,[["__scopeId","data-v-e92ed723"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Header.vue"]]);function jn(e,t,o,l){const i=Pe(),r=Object.assign({lazy:!1,delay:500},Tt(l)?{capture:l}:l);function c(v){o.call(null,v)}function u(){Ye(e,t,s,r)}const s=r.lazy?oo(c,r.delay):c;return i.meta.keepAlive===!0?(Et(()=>{Se(e,t,s,r)}),Mt(u)):(Ue(()=>{Se(e,t,s,r)}),Ht(u)),u}const qn={class:"tags-btn"},Un=S({__name:"Tags",setup(e){const t=Pe(),o=xe(),l=Dt(),i=me("dialog"),r=Ge(),c=R(),u=R([]);let s=R(!1),v=R(!1),h=R(0),p=R(0),d=R(null),C=R(-1);const b=y(()=>l.keepTags),x=y(()=>l.activeTags),g=y(()=>t.path),I=y(()=>({"--tags-height":Kt.tagsHeight+"px"})),q=y(()=>{var a;const m=[],F=b.value.find(A=>{var j;return A.path===((j=d.value)==null?void 0:j.path)}),M=x.value.find(A=>{var j;return A.path===((j=d.value)==null?void 0:j.path)}),E=((a=d.value)==null?void 0:a.path)==="/dashboard/console";return M&&m.push({label:"\u5173\u95ED\u5F53\u524D",key:"remove",icon:K(Vt)}),C.value>0&&M&&m.push({label:"\u5173\u95ED\u5DE6\u4FA7",key:"removeLeft",icon:K(Bo)}),C.value<x.value.length-1&&M&&m.push({label:"\u5173\u95ED\u53F3\u4FA7",key:"removeRight",icon:K(Oo)}),m.length&&m.push({type:"divider",key:"d0"}),m.push({label:"\u5173\u95ED\u5176\u4ED6",key:"removeOther",icon:K(Go)}),m.push({label:"\u5173\u95ED\u5168\u90E8",key:"removeAll",icon:K(nn)}),(F&&!E&&m.length||M)&&m.push({type:"divider",key:"d1"}),F&&!E&&m.push({label:"\u79FB\u9664\u56FA\u5B9A",key:"removeFixed",icon:K(fn)}),M&&m.push({label:"\u4FDD\u6301\u56FA\u5B9A",key:"keepFixed",icon:K(vn)}),v.value&&(m.length&&m.push({type:"divider",key:"d2"}),m.push({label:"\u4E00\u952E\u6E05\u9664",key:"init",icon:K(qo)})),m});pe(()=>t.fullPath,()=>{t.fullPath.startsWith("/redirect")||(l.insert("activeTags",{title:t.meta.title,name:t.name,path:t.path,meta:t.meta,query:{...t.query},matchedName:[...t.matched.map(m=>m.name)]}),$())},{immediate:!0}),jn(window,"resize",$,{lazy:!0});function V(m){o.push({path:m.path,query:m.query})}function ee(m,F){d.value=m,C.value=F,k("remove")}async function U(m,F,M){v.value=!1,d.value=F,C.value=M;const E=m.currentTarget,a=E.getBoundingClientRect();h.value=m.clientX-13,p.value=a.top+E.clientHeight,s.value=!0}async function de(m){const F=b.value.find(A=>A.path===g.value),M=b.value.findIndex(A=>A.path===g.value);d.value=F||x.value.find(A=>A.path===g.value),C.value=M!==-1?M:x.value.findIndex(A=>A.path===g.value);const E=m.currentTarget,a=E.getBoundingClientRect();v.value=!0,h.value=a.left+14+E.clientWidth/2,p.value=a.top+E.clientHeight,s.value=!0}function W(m){m.preventDefault(),P(),c.value.scrollLeft+=m.deltaY||m.detail*20}async function k(m){if(P(),!d.value||C.value===-1)return;const F=x.value.length-1,M=b.value.length-1,E=x.value.findIndex(a=>a.path===g.value);switch(m){case"remove":F<1?o.push(b.value[M].path):g.value===d.value.path&&o.push(x.value[C.value+(C.value<F?1:-1)].path),l.remove(d.value.path);break;case"removeLeft":E!==-1&&C.value>E&&o.push(d.value.path),l.removeLeft(d.value.path);break;case"removeRight":E!==-1&&C.value<E&&o.push(d.value.path),l.removeRight(d.value.path);break;case"removeOther":E!==-1&&d.value.path!==g.value&&o.push(d.value.path),l.removeOther(d.value.path);break;case"removeAll":E!==-1&&o.push(b.value[M].path),l.removeAll(d.value.path);break;case"removeFixed":l.removeFixed(d.value.path);break;case"keepFixed":l.keepFixed(d.value.path);break;case"init":i.warning({title:"\u63D0\u793A",content:"\u786E\u8BA4\u6E05\u7A7A\u6240\u6709 \u201CTags\u201D \u5417\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{o.push("/"),l.init()}});break}}function P(){s.value=!1}function n(){r.emit("keepAlive",t.name),o.replace(`/redirect${t.fullPath}`)}async function $(){await we();const m=u.value.find(a=>a.$el.dataset.path===g.value);if(!m)return;const F=m.$el,M=F.offsetLeft<c.value.scrollLeft,E=F.offsetLeft+F.clientWidth>c.value.scrollLeft+c.value.clientWidth;(M||E)&&c.value.scrollTo({left:M?F.offsetLeft-100:F.offsetLeft-c.value.clientWidth+F.clientWidth+100,behavior:"smooth"})}return(m,F)=>{const M=se,E=jt,a=Be;return T(),H("div",{class:"tags-wrapper",style:Re(I.value),onContextmenu:F[1]||(F[1]=ze(()=>{},["prevent"]))},[O("div",{ref_key:"tagsRef",ref:c,class:"tags",onWheel:W},[(T(!0),H(_e,null,He(b.value,(A,j)=>(T(),Z(L(De),{key:A.path,ref_for:!0,ref_key:"tagsItemRefs",ref:u,class:"tags-item","data-path":A.path,type:g.value===A.path?"primary":"default",size:"medium",onClick:te=>V(A),onContextmenu:te=>U(te,A,j)},{default:D(()=>[Ie(ke(A.title),1)]),_:2},1032,["data-path","type","onClick","onContextmenu"]))),128)),(T(!0),H(_e,null,He(x.value,(A,j)=>(T(),Z(L(De),{key:A.path,ref_for:!0,ref_key:"tagsItemRefs",ref:u,class:"tags-item","data-path":A.path,type:g.value===A.path?"primary":"default",size:"medium",closable:"",onClick:te=>V(A),onContextmenu:te=>U(te,A,j),onClose:ze(te=>ee(A,j),["stop"])},{default:D(()=>[Ie(ke(A.title),1)]),_:2},1032,["data-path","type","onClick","onContextmenu","onClose"]))),128))],544),O("div",qn,[N(M,{class:"tags-btn-item",size:"18",onClick:n},{default:D(()=>[N(L(eo))]),_:1}),N(E,{vertical:""}),N(M,{class:"tags-btn-item",size:"22",onClick:F[0]||(F[0]=A=>de(A))},{default:D(()=>[N(L(sn))]),_:1})]),N(a,{class:"tags-dropdown",placement:"bottom-start",trigger:"manual","show-arrow":"",x:h.value,y:p.value,options:q.value,show:s.value,onClickoutside:P,onSelect:k},null,8,["x","y","options","show"])],36)}}});const sr=Q(Un,[["__scopeId","data-v-4d67e454"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Tags.vue"]]),Wn=S({__name:"Menu",setup(e){const t=Ae(),o=Pe(),l=xe(),i=y(()=>["dark"].includes(t.navMode)&&!["mixin"].includes(t.layoutMode)),r=y(()=>{var v;return((v=o.meta)==null?void 0:v.activeMenu)||o.path});let c=R(o.matched.filter(v=>v.path!=="").map(v=>v.path));pe(()=>o.path,()=>{const v=o.matched.filter(h=>h.path!=="").map(h=>h.path);s(t.uniqueMenuOpened?v:[...new Set([...c.value,...v])])});function u(v,h){if(h.isLink){window.open(v);return}l.push(v)}function s(v){c.value=v}return(v,h)=>{const p=$o;return T(),Z(p,{value:r.value,inverted:i.value,"key-field":"path","label-field":"name",accordion:L(t).uniqueMenuOpened,indent:20,"collapsed-width":64,"expanded-keys":c.value,"onUpdate:expandedKeys":s,"onUpdate:value":u},null,8,["value","inverted","accordion","expanded-keys"])}}}),cr=Q(Wn,[["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Menu.vue"]]),Yn={class:"logo-icon"},Gn={class:"logo-text"},Xn=S({__name:"Logo",props:{collapsed:{type:Boolean,required:!1},width:{type:[Number,String],required:!1,default:272},minWidth:{type:[Number,String],required:!1},height:{type:Number,required:!1,default:50},collapsedWidth:{type:Number,required:!1,default:48},text:{type:String,required:!1,default:"NaiveAdmin"},indent:{type:Number,required:!1,default:20}},setup(e){const t=e,o=Ae(),l=y(()=>({"--logo-width":t.collapsed?t.collapsedWidth+"px":qt(t.width)?t.width:t.width+"px","--logo-min-width":typeof t.minWidth=="string"?t.minWidth:t.minWidth+"px","--logo-height":t.height+"px","--logo-padding":t.collapsed?`0 ${(t.collapsedWidth-32)/2}px`:`0 18px 0 ${t.indent}px`,"--logo-icon-margin-right":t.collapsed?0:"8px","--logo-text-width":t.collapsed?0:"auto","--logo-opacity":t.collapsed?0:1}));return(i,r)=>{const c=se;return L(o).isShowLogo?(T(),H("div",{key:0,class:"logo",style:Re(L(l))},[O("div",Yn,[he(i.$slots,"icon",{},()=>[N(c,{size:32,icon:"vue"})],!0)]),O("div",Gn,[he(i.$slots,"default",{},()=>[Ie(ke(e.text),1)],!0)])],4)):Ut("v-if",!0)}}});const dr=Q(Xn,[["__scopeId","data-v-4f3aa1a4"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Logo.vue"]]);export{lr as H,dr as L,cr as M,ir as N,sr as T,rr as a,ar as b,uo as c,ho as l,Xe as p};
