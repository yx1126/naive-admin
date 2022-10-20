import{d as $,B as g,a as k,c as _,q as fe,a6 as _e,M as ie,a1 as w,bB as nt,$ as b,cP as rt,a2 as N,a0 as z,bN as at,cA as Ue,bs as it,aQ as Ee,J as ge,a7 as Y,cQ as lt,cR as st,o as qe,ah as ct,av as dt,a9 as xe,aw as ut,ac as vt,c5 as mt,ax as ht,cS as pt,I as se,cT as We,L as ae,cU as ft,aB as gt,z as Z,bc as re,F as ye,ay as xt,K as Ce,bz as bt,C as $e,a3 as we,w as ze,aV as oe,aS as ve,ct as wt,cV as _t,aP as yt,a4 as Me,cE as Ct,aO as G,b as L,e as D,i as O,_ as Q,cW as zt,cC as be,cX as St,cY as It,f as A,g as H,j as T,b5 as kt,n as Re,cj as Se,v as Ie,y as Ye,m as ce,bp as he,ce as $t,aj as J,ab as Rt,am as le,b4 as At,ao as Pt,an as Bt,ch as Nt,p as Ae,bl as Ft,br as pe,cZ as Ot,bv as Lt,cL as Ge,c_ as V,ap as Tt,aq as Et,cN as Pe,bx as Mt,c$ as Ht,aT as Dt,H as Vt,d0 as Kt,cO as jt,al as Ut,h as He,l as ke,ak as De,cM as qt,by as Wt,ck as Yt}from"../assets/index.67c47f0d.js";import{u as Gt,F as Xt}from"./use-fullscreen-5e926d88.js";import{u as Zt,B as Jt}from"./index-3b3bc85b.js";import{_ as Qt}from"./FormItem-de947a23.js";import{F as eo,R as to}from"./ReloadOutlined-cea16db8.js";import{_ as oo}from"./Avatar-00fa1a1c.js";import{_ as Be}from"./Dropdown-2323cfb5.js";import{u as no}from"./use-deounce-63da5014.js";var ro=$({name:"ChevronDownFilled",render(){return g("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Ve=$({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const t=k(null),o=k(e.value),l=k(e.value),a=k("up"),r=k(!1),c=_(()=>r.value?`${e.clsPrefix}-base-slot-machine-current-number--${a.value}-scroll`:null),u=_(()=>r.value?`${e.clsPrefix}-base-slot-machine-old-number--${a.value}-scroll`:null);fe(ie(e,"value"),(f,p)=>{o.value=p,l.value=f,_e(s)});function s(){const f=e.newOriginalNumber,p=e.oldOriginalNumber;p===void 0||f===void 0||(f>p?v("up"):p>f&&v("down"))}function v(f){a.value=f,r.value=!1,_e(()=>{var p;(p=t.value)===null||p===void 0||p.offsetWidth,r.value=!0})}return()=>{const{clsPrefix:f}=e;return g("span",{ref:t,class:`${f}-base-slot-machine-number`},o.value!==null?g("span",{class:[`${f}-base-slot-machine-old-number ${f}-base-slot-machine-old-number--top`,u.value]},o.value):null,g("span",{class:[`${f}-base-slot-machine-current-number`,c.value]},g("span",{ref:"numberWrapper",class:[`${f}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${f}-base-slot-machine-current-number__inner--not-number`]},l.value)),o.value!==null?g("span",{class:[`${f}-base-slot-machine-old-number ${f}-base-slot-machine-old-number--bottom`,u.value]},o.value):null)}}});const{cubicBezierEaseOut:ne}=nt;function ao({duration:e=".2s"}={}){return[w("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${ne},
 max-width ${e} ${ne},
 transform ${e} ${ne}
 `}),w("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${ne},
 max-width ${e} ${ne},
 transform ${e} ${ne}
 `}),w("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),w("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),w("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),w("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}var io=w([w("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),w("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),w("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),w("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),b("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[b("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[ao({duration:".2s"}),rt({duration:".2s",delay:"0s"}),b("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[N("top",{transform:"translateY(-100%)"}),N("bottom",{transform:"translateY(100%)"}),N("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),N("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),b("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[N("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),N("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),z("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[N("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),lo=$({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){at("-base-slot-machine",io,ie(e,"clsPrefix"));const t=k(),o=k(),l=_(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const a=[];let r=e.value;for(e.max!==void 0&&(r=Math.min(e.max,r));r>=1;)a.push(r%10),r/=10,r=Math.floor(r);return a.reverse(),a});return fe(ie(e,"value"),(a,r)=>{typeof a=="string"?(o.value=void 0,t.value=void 0):typeof r=="string"?(o.value=a,t.value=void 0):(o.value=a,t.value=r)}),()=>{const{value:a,clsPrefix:r}=e;return typeof a=="number"?g("span",{class:`${r}-base-slot-machine`},g(it,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>l.value.map((c,u)=>g(Ve,{clsPrefix:r,key:l.value.length-u-1,oldOriginalNumber:t.value,newOriginalNumber:o.value,value:c}))}),g(Ue,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<a?g(Ve,{clsPrefix:r,value:"+"}):null})):g("span",{class:`${r}-base-slot-machine`},a)}}}),so=w([w("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),b("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[N("as-is",[b("badge-sup",{position:"static",transform:"translateX(0)"},[Ee({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),N("dot",[b("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[w("::before","border-radius: 4px;")])]),b("badge-sup",`
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
 `,[Ee({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),b("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),w("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]);const co=Object.assign(Object.assign({},Y.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String});var uo=$({name:"Badge",props:co,setup(e,{slots:t}){const{mergedClsPrefixRef:o,inlineThemeDisabled:l,mergedRtlRef:a}=ge(e),r=Y("Badge","-badge",so,lt,e,o),c=k(!1),u=()=>{c.value=!0},s=()=>{c.value=!1},v=_(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&e.value<=0)||!st(t.value)));qe(()=>{v.value&&(c.value=!0)});const f=ct("Badge",a,o),p=_(()=>{const{type:y,color:C}=e,{common:{cubicBezierEaseInOut:x,cubicBezierEaseOut:h},self:{[dt("color",y)]:S,fontFamily:U,fontSize:K}}=r.value;return{"--n-font-size":K,"--n-font-family":U,"--n-color":C||S,"--n-ripple-color":C||S,"--n-bezier":x,"--n-ripple-bezier":h}}),d=l?xe("badge",_(()=>{let y="";const{type:C,color:x}=e;return C&&(y+=C[0]),x&&(y+=ut(x)),y}),p,e):void 0;return{rtlEnabled:f,mergedClsPrefix:o,appeared:c,showBadge:v,handleAfterEnter:u,handleAfterLeave:s,cssVars:l?void 0:p,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{mergedClsPrefix:t,onRender:o,themeClass:l,$slots:a}=this;o==null||o();const r=(e=a.default)===null||e===void 0?void 0:e.call(a);return g("div",{class:[`${t}-badge`,this.rtlEnabled&&`${t}-badge--rtl`,l,{[`${t}-badge--dot`]:this.dot,[`${t}-badge--as-is`]:!r}],style:this.cssVars},r,g(vt,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?g("sup",{class:`${t}-badge-sup`,title:mt(this.value)},ht(a.value,()=>[this.dot?null:g(lo,{clsPrefix:t,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?g(pt,{clsPrefix:t}):null):null}))}});const vo=se("n-layout-sider"),Xe={type:String,default:"static"};var mo=b("layout",`
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
`,[b("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),N("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);const ho={embedded:Boolean,position:Xe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},po=se("n-layout");function Ze(e){return $({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},Y.props),ho),setup(t){const o=k(null),l=k(null),{mergedClsPrefixRef:a,inlineThemeDisabled:r}=ge(t),c=Y("Layout","-layout",mo,We,t,a);function u(x,h){if(t.nativeScrollbar){const{value:S}=o;S&&(h===void 0?S.scrollTo(x):S.scrollTo(x,h))}else{const{value:S}=l;S&&S.scrollTo(x,h)}}ae(po,t);let s=0,v=0;const f=x=>{var h;const S=x.target;s=S.scrollLeft,v=S.scrollTop,(h=t.onScroll)===null||h===void 0||h.call(t,x)};ft(()=>{if(t.nativeScrollbar){const x=o.value;x&&(x.scrollTop=v,x.scrollLeft=s)}});const p={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},d={scrollTo:u},y=_(()=>{const{common:{cubicBezierEaseInOut:x},self:h}=c.value;return{"--n-bezier":x,"--n-color":t.embedded?h.colorEmbedded:h.color,"--n-text-color":h.textColor}}),C=r?xe("layout",_(()=>t.embedded?"e":""),y,t):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:o,scrollbarInstRef:l,hasSiderStyle:p,mergedTheme:c,handleNativeElScroll:f,cssVars:r?void 0:y,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender},d)},render(){var t;const{mergedClsPrefix:o,hasSider:l}=this;(t=this.onRender)===null||t===void 0||t.call(this);const a=l?this.hasSiderStyle:void 0,r=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return g("div",{class:r,style:this.cssVars},this.nativeScrollbar?g("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):g(gt,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}var ir=Ze(!1),lr=Ze(!0),fo=b("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[N("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),N("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]);const go={position:Xe,inverted:Boolean,bordered:{type:Boolean,default:!1}};var sr=$({name:"LayoutHeader",props:Object.assign(Object.assign({},Y.props),go),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ge(e),l=Y("Layout","-layout-header",fo,We,e,t),a=_(()=>{const{common:{cubicBezierEaseInOut:c},self:u}=l.value,s={"--n-bezier":c};return e.inverted?(s["--n-color"]=u.headerColorInverted,s["--n-text-color"]=u.textColorInverted,s["--n-border-color"]=u.headerBorderColorInverted):(s["--n-color"]=u.headerColor,s["--n-text-color"]=u.textColor,s["--n-border-color"]=u.headerBorderColor),s}),r=o?xe("layout-header",_(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:a,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),g("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}});const de=se("n-menu"),Ne=se("n-submenu"),Fe=se("n-menu-item-group"),me=8;function Oe(e){const t=Z(de),{props:o,mergedCollapsedRef:l}=t,a=Z(Ne,null),r=Z(Fe,null),c=_(()=>o.mode==="horizontal"),u=_(()=>c.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=_(()=>{var d;return Math.max((d=o.collapsedIconSize)!==null&&d!==void 0?d:o.iconSize,o.iconSize)}),v=_(()=>{var d;return!c.value&&e.root&&l.value&&(d=o.collapsedIconSize)!==null&&d!==void 0?d:o.iconSize}),f=_(()=>{if(c.value)return;const{collapsedWidth:d,indent:y,rootIndent:C}=o,{root:x,isGroup:h}=e,S=C===void 0?y:C;if(x)return l.value?d/2-s.value/2:S;if(r)return y/2+r.paddingLeftRef.value;if(a)return(h?y/2:y)+a.paddingLeftRef.value}),p=_(()=>{const{collapsedWidth:d,indent:y,rootIndent:C}=o,{value:x}=s,{root:h}=e;return c.value||!h||!l.value?me:(C===void 0?y:C)+x+me-(d+x)/2});return{dropdownPlacement:u,activeIconSize:v,maxIconSize:s,paddingLeft:f,iconMarginRight:p,NMenu:t,NSubmenu:a}}const Le={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Je=Object.assign(Object.assign({},Le),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),xo=$({name:"MenuOptionGroup",props:Je,setup(e){ae(Ne,null);const t=Oe(e);ae(Fe,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:l}=Z(de);return function(){const{value:a}=o,r=t.paddingLeft.value,{nodeProps:c}=l,u=c==null?void 0:c(e.tmNode.rawNode);return g("div",{class:`${a}-menu-item-group`,role:"group"},g("div",Object.assign({},u,{class:[`${a}-menu-item-group-title`,u==null?void 0:u.class],style:[(u==null?void 0:u.style)||"",r!==void 0?`padding-left: ${r}px;`:""]}),re(e.title),e.extra?g(ye,null," ",re(e.extra)):null),g("div",null,e.tmNodes.map(s=>Te(s,l))))}}});var Qe=$({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=Z(de);return{menuProps:t,style:_(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:_(()=>{const{maxIconSize:o,activeIconSize:l,iconMarginRight:a}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${l}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:l,renderExtra:a,expandIcon:r}}=this,c=o?o(t.rawNode):re(this.icon);return g("div",{onClick:u=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,u)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},c&&g("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[c]),g("div",{class:`${e}-menu-item-content-header`,role:"none"},l?l(t.rawNode):re(this.title),this.extra||a?g("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(t.rawNode):re(this.extra)):null),this.showArrow?g(xt,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>r?r(t.rawNode):g(ro,null)}):null)}});const et=Object.assign(Object.assign({},Le),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),bo=$({name:"Submenu",props:et,setup(e){const t=Oe(e),{NMenu:o,NSubmenu:l}=t,{props:a,mergedCollapsedRef:r,mergedThemeRef:c}=o,u=_(()=>{const{disabled:d}=e;return l!=null&&l.mergedDisabledRef.value||a.disabled?!0:d}),s=k(!1);ae(Ne,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:u}),ae(Fe,null);function v(){const{onClick:d}=e;d&&d()}function f(){u.value||(r.value||o.toggleExpand(e.internalKey),v())}function p(d){s.value=d}return{menuProps:a,mergedTheme:c,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:s,paddingLeft:t.paddingLeft,mergedDisabled:u,mergedValue:o.mergedValueRef,childActive:Ce(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:_(()=>a.mode==="horizontal"?!1:r.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:_(()=>!u.value&&(a.mode==="horizontal"||r.value)),handlePopoverShowChange:p,handleClick:f}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:l}}=this,a=()=>{const{isHorizontal:c,paddingLeft:u,collapsed:s,mergedDisabled:v,maxIconSize:f,activeIconSize:p,title:d,childActive:y,icon:C,handleClick:x,menuProps:{nodeProps:h},dropdownShow:S,iconMarginRight:U,tmNode:K,mergedClsPrefix:ee}=this,q=h==null?void 0:h(K.rawNode);return g("div",Object.assign({},q,{class:[`${ee}-menu-item`,q==null?void 0:q.class],role:"menuitem"}),g(Qe,{tmNode:K,paddingLeft:u,collapsed:s,disabled:v,iconMarginRight:U,maxIconSize:f,activeIconSize:p,title:d,extra:this.extra,showArrow:!c,childActive:y,clsPrefix:ee,icon:C,hover:S,onClick:x}))},r=()=>g(Ue,null,{default:()=>{const{tmNodes:c,collapsed:u}=this;return u?null:g("div",{class:`${t}-submenu-children`,role:"menu"},c.map(s=>Te(s,this.menuProps)))}});return this.root?g(Be,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:l}),{default:()=>g("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:r())}):g("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),r())}}),tt=Object.assign(Object.assign({},Le),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),wo=$({name:"MenuOption",props:tt,setup(e){const t=Oe(e),{NSubmenu:o,NMenu:l}=t,{props:a,mergedClsPrefixRef:r,mergedCollapsedRef:c}=l,u=o?o.mergedDisabledRef:{value:!1},s=_(()=>u.value||e.disabled);function v(p){const{onClick:d}=e;d&&d(p)}function f(p){s.value||(l.doSelect(e.internalKey,e.tmNode.rawNode),v(p))}return{mergedClsPrefix:r,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:l.mergedThemeRef,menuProps:a,dropdownEnabled:Ce(()=>e.root&&c.value&&a.mode!=="horizontal"&&!s.value),selected:Ce(()=>l.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:f}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:l,nodeProps:a}}=this,r=a==null?void 0:a(o.rawNode);return g("div",Object.assign({},r,{role:"menuitem",class:[`${e}-menu-item`,r==null?void 0:r.class]}),g(bt,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>l?l(o.rawNode):re(this.title),trigger:()=>g(Qe,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var _o=$({name:"MenuDivider",setup(){const e=Z(de),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:g("div",{class:`${t.value}-menu-divider`})}});const yo=$e(Je),Co=$e(tt),zo=$e(et);function ot(e){return e.type==="divider"||e.type==="render"}function So(e){return e.type==="divider"}function Te(e,t){const{rawNode:o}=e,{show:l}=o;if(l===!1)return null;if(ot(o))return So(o)?g(_o,Object.assign({key:e.key},o.props)):null;const{labelField:a}=t,{key:r,level:c,isGroup:u}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[a],extra:o.titleExtra||o.extra,key:r,internalKey:r,level:c,root:c===0,isGroup:u});return e.children?e.isGroup?g(xo,we(s,yo,{tmNode:e,tmNodes:e.children,key:r})):g(bo,we(s,zo,{key:r,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):g(wo,we(s,Co,{key:r,tmNode:e}))}function Io(e){ze(()=>{e.items&&oe("menu","`items` is deprecated, please use `options` instead."),e.onOpenNamesChange&&oe("menu","`on-open-names-change` is deprecated, please use `on-update:expanded-keys` instead."),e.onSelect&&oe("menu","`on-select` is deprecated, please use `on-update:value` instead."),e.onExpandedNamesChange&&oe("menu","`on-expanded-names-change` is deprecated, please use `on-update:expanded-keys` instead."),e.expandedNames&&oe("menu","`expanded-names` is deprecated, please use `expanded-keys` instead."),e.defaultExpandedNames&&oe("menu","`default-expanded-names` is deprecated, please use `default-expanded-keys` instead.")})}const Ke=[w("&::before","background-color: var(--n-item-color-hover);"),z("arrow",`
 color: var(--n-arrow-color-hover);
 `),z("icon",`
 color: var(--n-item-icon-color-hover);
 `),b("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[w("a",`
 color: var(--n-item-text-color-hover);
 `),z("extra",`
 color: var(--n-item-text-color-hover);
 `)])],je=[z("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),b("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[w("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])];var ko=w([b("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[N("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[b("submenu","margin: 0;"),b("menu-item","margin: 0;"),b("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[w("&::before","display: none;"),N("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),b("menu-item-content",[N("selected",[z("icon","color: var(--n-item-icon-color-active-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[w("a","color: var(--n-item-text-color-active-horizontal);"),z("extra","color: var(--n-item-text-color-active-horizontal);")])]),N("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[w("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),z("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ve("disabled",[ve("selected, child-active",[w("&:focus-within",je)]),N("selected",[X(null,[z("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[w("a","color: var(--n-item-text-color-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),N("child-active",[X(null,[z("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[w("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),X("border-bottom: 2px solid var(--n-border-color-horizontal);",je)]),b("menu-item-content-header",[w("a","color: var(--n-item-text-color-horizontal);")])])]),N("collapsed",[b("menu-item-content",[N("selected",[w("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),b("menu-item-content-header","opacity: 0;"),z("arrow","opacity: 0;"),z("icon","color: var(--n-item-icon-color-collapsed);")])]),b("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),b("menu-item-content",`
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
 `,[w("> *","z-index: 1;"),w("&::before",`
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
 `),N("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),N("collapsed",[z("arrow","transform: rotate(0);")]),N("selected",[w("&::before","background-color: var(--n-item-color-active);"),z("arrow","color: var(--n-arrow-color-active);"),z("icon","color: var(--n-item-icon-color-active);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[w("a","color: var(--n-item-text-color-active);"),z("extra","color: var(--n-item-text-color-active);")])]),N("child-active",[b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[w("a",`
 color: var(--n-item-text-color-child-active);
 `),z("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),z("arrow",`
 color: var(--n-arrow-color-child-active);
 `),z("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ve("disabled",[ve("selected, child-active",[w("&:focus-within",Ke)]),N("selected",[X(null,[z("arrow","color: var(--n-arrow-color-active-hover);"),z("icon","color: var(--n-item-icon-color-active-hover);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[w("a","color: var(--n-item-text-color-active-hover);"),z("extra","color: var(--n-item-text-color-active-hover);")])])]),N("child-active",[X(null,[z("arrow","color: var(--n-arrow-color-child-active-hover);"),z("icon","color: var(--n-item-icon-color-child-active-hover);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[w("a","color: var(--n-item-text-color-child-active-hover);"),z("extra","color: var(--n-item-text-color-child-active-hover);")])])]),N("selected",[X(null,[w("&::before","background-color: var(--n-item-color-active-hover);")])]),X(null,Ke)]),z("icon",`
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
 `),b("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[w("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[w("&::before",`
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
 `)])]),b("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[b("menu-item-content",`
 height: var(--n-item-height);
 `),b("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[wt({duration:".2s"})])]),b("menu-item-group",[b("menu-item-group-title",`
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
 `)])]),b("menu-tooltip",[w("a",`
 color: inherit;
 text-decoration: none;
 `)]),b("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function X(e,t){return[N("hover",e,t),w("&:hover",e,t)]}const $o=Object.assign(Object.assign({},Y.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}});var Ro=$({name:"Menu",props:$o,setup(e){Io(e);const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ge(e),l=Y("Menu","-menu",ko,_t,e,t),a=Z(vo,null),r=_(()=>{var I;const{collapsed:B}=e;if(B!==void 0)return B;if(a){const{collapseModeRef:n,collapsedRef:R}=a;if(n.value==="width")return(I=R.value)!==null&&I!==void 0?I:!1}return!1}),c=_(()=>{const{keyField:I,childrenField:B,disabledField:n}=e;return yt(e.items||e.options,{getIgnored(R){return ot(R)},getChildren(R){return R[B]},getDisabled(R){return R[n]},getKey(R){var m;return(m=R[I])!==null&&m!==void 0?m:R.name}})}),u=_(()=>new Set(c.value.treeNodes.map(I=>I.key))),{watchProps:s}=e,v=k(null);s!=null&&s.includes("defaultValue")?ze(()=>{v.value=e.defaultValue}):v.value=e.defaultValue;const f=ie(e,"value"),p=Me(f,v),d=k([]),y=()=>{d.value=e.defaultExpandAll?c.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||c.value.getPath(p.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?ze(y):y();const C=Ct(e,["expandedNames","expandedKeys"]),x=Me(C,d),h=_(()=>c.value.treeNodes),S=_(()=>c.value.getPath(p.value).keyPath);ae(de,{props:e,mergedCollapsedRef:r,mergedThemeRef:l,mergedValueRef:p,mergedExpandedKeysRef:x,activePathRef:S,mergedClsPrefixRef:t,isHorizontalRef:_(()=>e.mode==="horizontal"),invertedRef:ie(e,"inverted"),doSelect:U,toggleExpand:ee});function U(I,B){const{"onUpdate:value":n,onUpdateValue:R,onSelect:m}=e;R&&G(R,I,B),n&&G(n,I,B),m&&G(m,I,B),v.value=I}function K(I){const{"onUpdate:expandedKeys":B,onUpdateExpandedKeys:n,onExpandedNamesChange:R,onOpenNamesChange:m}=e;B&&G(B,I),n&&G(n,I),R&&G(R,I),m&&G(m,I),d.value=I}function ee(I){const B=Array.from(x.value),n=B.findIndex(R=>R===I);if(~n)B.splice(n,1);else{if(e.accordion&&u.value.has(I)){const R=B.findIndex(m=>u.value.has(m));R>-1&&B.splice(R,1)}B.push(I)}K(B)}const q=I=>{const B=c.value.getPath(I!=null?I:p.value,{includeSelf:!1}).keyPath;if(!B.length)return;const n=Array.from(x.value),R=new Set([...n,...B]);e.accordion&&u.value.forEach(m=>{R.has(m)&&!B.includes(m)&&R.delete(m)}),K(Array.from(R))},ue=_(()=>{const{inverted:I}=e,{common:{cubicBezierEaseInOut:B},self:n}=l.value,{borderRadius:R,borderColorHorizontal:m,fontSize:F,itemHeight:M,dividerColor:E}=n,i={"--n-divider-color":E,"--n-bezier":B,"--n-font-size":F,"--n-border-color-horizontal":m,"--n-border-radius":R,"--n-item-height":M};return I?(i["--n-group-text-color"]=n.groupTextColorInverted,i["--n-color"]=n.colorInverted,i["--n-item-text-color"]=n.itemTextColorInverted,i["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,i["--n-item-text-color-active"]=n.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=n.itemIconColorInverted,i["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=n.arrowColorInverted,i["--n-arrow-color-hover"]=n.arrowColorHoverInverted,i["--n-arrow-color-active"]=n.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=n.itemColorHoverInverted,i["--n-item-color-active"]=n.itemColorActiveInverted,i["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=n.groupTextColor,i["--n-color"]=n.color,i["--n-item-text-color"]=n.itemTextColor,i["--n-item-text-color-hover"]=n.itemTextColorHover,i["--n-item-text-color-active"]=n.itemTextColorActive,i["--n-item-text-color-child-active"]=n.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,i["--n-item-icon-color"]=n.itemIconColor,i["--n-item-icon-color-hover"]=n.itemIconColorHover,i["--n-item-icon-color-active"]=n.itemIconColorActive,i["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=n.arrowColor,i["--n-arrow-color-hover"]=n.arrowColorHover,i["--n-arrow-color-active"]=n.arrowColorActive,i["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,i["--n-arrow-color-child-active"]=n.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHover,i["--n-item-color-hover"]=n.itemColorHover,i["--n-item-color-active"]=n.itemColorActive,i["--n-item-color-active-hover"]=n.itemColorActiveHover,i["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),i}),W=o?xe("menu",_(()=>e.inverted?"a":"b"),ue,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:C,uncontrolledExpanededKeys:d,mergedExpandedKeys:x,uncontrolledValue:v,mergedValue:p,activePath:S,tmNodes:h,mergedTheme:l,mergedCollapsed:r,cssVars:o?void 0:ue,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender,showOption:q}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:l}=this;return l==null||l(),g("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>Te(a,this.$props)))}});const Ao={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Po=O("path",{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z",fill:"currentColor"},null,-1),Bo=[Po];var No=$({name:"ArrowLeftOutlined",render:function(t,o){return L(),D("svg",Ao,Bo)}});const Fo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Oo=O("path",{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z",fill:"currentColor"},null,-1),Lo=[Oo];var To=$({name:"ArrowRightOutlined",render:function(t,o){return L(),D("svg",Fo,Lo)}});const Eo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Mo=O("path",{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z",fill:"currentColor"},null,-1),Ho=[Mo];var Do=$({name:"BellOutlined",render:function(t,o){return L(),D("svg",Eo,Ho)}});const Vo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ko=O("path",{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4l-66.1-.3c-4.4 0-8 3.5-8 8c0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4l66 .3c4.4 0 8-3.5 8-8c0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z",fill:"currentColor"},null,-1),jo=O("path",{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448s448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",fill:"currentColor"},null,-1),Uo=[Ko,jo];var qo=$({name:"CloseCircleOutlined",render:function(t,o){return L(),D("svg",Vo,Uo)}});const Wo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Yo=O("path",{d:"M180 176h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zm724 0h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zM785.3 504.3L657.7 403.6a7.23 7.23 0 0 0-11.7 5.7V476H378v-62.8c0-6-7-9.4-11.7-5.7L238.7 508.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h268v62.8c0 6 7 9.4 11.7 5.7l127.5-100.8c3.8-2.9 3.8-8.5.2-11.4z",fill:"currentColor"},null,-1),Go=[Yo];var Xo=$({name:"ColumnWidthOutlined",render:function(t,o){return L(),D("svg",Wo,Go)}});const Zo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Jo=O("path",{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8c-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9a353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8c47.9 0 94.3 9.3 137.9 27.8c42.2 17.8 80.1 43.4 112.7 75.9c7.9 7.9 15.3 16.1 22.4 24.5c3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82C271.7 82.6 79.6 277.1 82 516.4C84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7c3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z",fill:"currentColor"},null,-1),Qo=[Jo];var en=$({name:"LogoutOutlined",render:function(t,o){return L(),D("svg",Zo,Qo)}});const tn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},on=O("path",{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z",fill:"currentColor"},null,-1),nn=[on];var rn=$({name:"MinusOutlined",render:function(t,o){return L(),D("svg",tn,nn)}});const an={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},ln=O("path",{fill:"currentColor",d:"M456 231a56 56 0 1 0 112 0a56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0a56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0a56 56 0 1 0-112 0z"},null,-1),sn=[ln];var cn=$({name:"MoreOutlined",render:function(t,o){return L(),D("svg",an,sn)}});const dn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},un=O("path",{d:"M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2c-73.2 0-146.4 24.1-206.5 72.3c-15.4 12.3-16.6 35.4-2.7 49.4l181.7 181.7l-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4c.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4l181.7 181.7c6.5 6.5 15 9.7 23.5 9.7c9.7 0 19.3-4.2 25.9-12.4c56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8z",fill:"currentColor"},null,-1),vn=[un];var mn=$({name:"PushpinFilled",render:function(t,o){return L(),D("svg",dn,vn)}});const hn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},pn=O("path",{d:"M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2c-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 0 0-2.7 49.4l181.7 181.7l-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4c.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4l181.7 181.7c6.5 6.5 15 9.7 23.5 9.7c9.7 0 19.3-4.2 25.9-12.4c56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8zM666.2 549.3l-24.5 24.5l3.8 34.4a259.92 259.92 0 0 1-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9c27.2-9.4 55.7-14.1 84.7-14.1c9.6 0 19.3.5 28.9 1.6l34.4 3.8l24.5-24.5L608.5 224L800 415.5L666.2 549.3z",fill:"currentColor"},null,-1),fn=[pn];var gn=$({name:"PushpinOutlined",render:function(t,o){return L(),D("svg",hn,fn)}});const xn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},bn=O("path",{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",fill:"currentColor"},null,-1),wn=[bn];var _n=$({name:"SearchOutlined",render:function(t,o){return L(),D("svg",xn,wn)}});const yn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Cn=O("path",{d:"M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z",fill:"currentColor"},null,-1),zn=[Cn];var Sn=$({name:"UserOutlined",render:function(t,o){return L(),D("svg",yn,zn)}});const In=["onClick"],kn=$({__name:"Search",setup(e){const t=zt(),o=be(),l=St(),a=k();let r=k(!1),c=k(!1),u=k(!1),s=k([]),v=k("");const f=_(()=>It(t.menus)),p=_(()=>({"--search-width":r.value?"210px":"0px","--trans-width":l.value.cubicBezierEaseInOut}));async function d(){s.value=[],r.value=!0,Ie(document,"click",y)}function y(){r.value=!1,c.value=!1,Ye(document,"click",y)}async function C(h){if(!h.length){c.value=!1,s.value=[];return}u.value=!0,window.setTimeout(()=>{s.value=f.value.filter(S=>S.name.includes(h)||S.path.includes(h)).map(S=>({label:S.name,value:JSON.stringify(S)})),u.value=!1,c.value=!0},500)}function x(){const h=JSON.parse(v.value);h.isLink?window.open(h.path):o.push(h.path),v.value="",c.value=!1,s.value=[]}return(h,S)=>{const U=ce;return L(),D("div",{class:"search",style:Re(p.value),onClick:Se(d,["stop"])},[A(U,{class:"icon",size:"20"},{default:H(()=>[A(T(_n))]),_:1}),A(T(kt),{ref_key:"searchRef",ref:a,value:v.value,"onUpdate:value":[S[0]||(S[0]=K=>v.value=K),x],class:"input",show:c.value,loading:u.value,options:s.value,filterable:"",clearable:"",remote:"","show-arrow":!1,"consistent-menu-width":!1,placeholder:"Search",onSearch:C},null,8,["value","show","loading","options"])],12,In)}}});var $n=Q(kn,[["__scopeId","data-v-5f712035"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Search.vue"]]);const Rn={name:"UpdatePwd"},An=$({...Rn,setup(e){const t=he("message"),o=k(null),l={password:{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801"},newPwd:{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"},confirmPwd:[{required:!0,trigger:["input","blur"],message:"\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801"},{trigger:["input","blur"],message:"\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4",validator(s,v){return v===a.newPwd}}]},{model:a,formInstance:r}=Zt(o,()=>({password:"",newPwd:"",confirmPwd:""}));function c(){r.value.validate(s=>{s||t.success("\u9A8C\u8BC1\u6210\u529F")})}function u(){r.value.resetFields()}return(s,v)=>{const f=At,p=Qt,d=Pt,y=Bt,C=Nt,x=$t("drag");return L(),J(C,{style:{width:"500px"},title:"\u4FEE\u6539\u5BC6\u7801",preset:"card",onAfterLeave:u},{default:H(()=>[Rt((L(),J(T(Jt),{ref_key:"userFormRef",ref:o,class:"update-pwd-form",model:T(a),rules:l,"label-width":"auto"},{default:H(()=>[A(p,{label:"\u65E7\u5BC6\u7801\uFF1A",path:"password"},{default:H(()=>[A(f,{value:T(a).password,"onUpdate:value":v[0]||(v[0]=h=>T(a).password=h),type:"password","show-password-on":"mousedown",placeholder:"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801",clearable:""},null,8,["value"])]),_:1}),A(p,{label:"\u65B0\u5BC6\u7801\uFF1A",path:"newPwd"},{default:H(()=>[A(f,{value:T(a).newPwd,"onUpdate:value":v[1]||(v[1]=h=>T(a).newPwd=h),type:"password","show-password-on":"mousedown",placeholder:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",clearable:""},null,8,["value"])]),_:1}),A(p,{label:"\u786E\u8BA4\u5BC6\u7801\uFF1A",first:"",path:"confirmPwd"},{default:H(()=>[A(f,{value:T(a).confirmPwd,"onUpdate:value":v[2]||(v[2]=h=>T(a).confirmPwd=h),type:"password","show-password-on":"mousedown",placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801",clearable:""},null,8,["value"])]),_:1}),A(p,{label:" "},{default:H(()=>[A(y,null,{default:H(()=>[A(d,{type:"primary",onClick:c},{default:H(()=>[le("\u63D0 \u4EA4")]),_:1}),A(d,{onClick:u},{default:H(()=>[le("\u91CD \u7F6E")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])),[[x]])]),_:1})}}});var Pn=Q(An,[["__scopeId","data-v-0d327e37"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/UpdatePwd.vue"]]);const Bn=$({__name:"MessageBell",setup(e){const t=k(10);return(o,l)=>{const a=ce,r=uo;return L(),J(r,{class:"message-badge",value:t.value,max:99,dot:""},{default:H(()=>[A(a,{size:20},{default:H(()=>[A(T(Do))]),_:1})]),_:1},8,["value"])}}});var Nn=Q(Bn,[["__scopeId","data-v-a61bdf26"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/MessageBell.vue"]]);const Fn=e=>(Tt("data-v-00aebacc"),e=e(),Et(),e),On={class:"header"},Ln={class:"header-left"},Tn={class:"header-right"},En={class:"header-trigger"},Mn={class:"header-trigger"},Hn={class:"header-trigger"},Dn={class:"header-trigger"},Vn=Fn(()=>O("div",{class:"username"},"admin",-1)),Kn={class:"header-trigger"},jn=$({__name:"Header",setup(e){const{isFullScreen:t,toggle:o}=Gt(),l=Ae(),a=be(),r=he("dialog"),c=he("message"),u=Ge();let s=k(!1);const v=[{label:"\u4E2A\u4EBA\u4E2D\u5FC3",key:"set",icon:V(Sn)},{label:"\u4FEE\u6539\u5BC6\u7801",key:"update-pwd",icon:V("password")},{type:"divider"},{label:"github",key:"https://github.com/yangxin11010/naive-admin",icon:V("github")},{label:"gitee",key:"https://gitee.com/yangxin11010/naive-admin",icon:V("gitee")},{type:"divider"},{label:"\u9000\u51FA\u767B\u5F55",key:"logout",icon:V(en)}];async function f(p,d){switch(console.log(p,d),p){case"set":a.push("/person");break;case"update-pwd":s.value=!0;break;case"logout":r.warning({title:"\u63D0\u793A",content:"\u786E\u8BA4\u9000\u51FA\u767B\u9646\u5417\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{c.info("\u9000\u51FA\u767B\u9646\u6210\u529F\uFF01")}});break;default:window.open(p)}}return Ft(()=>{u.on("updatePwd",()=>{s.value=!0})}),(p,d)=>{const y=ce,C=oo,x=Be;return L(),D("div",On,[O("div",Ln,[pe(p.$slots,"logo",{},void 0,!0),pe(p.$slots,"left",{},void 0,!0)]),O("div",Tn,[O("div",En,[A($n)]),O("div",Mn,[A(Nn)]),O("div",Hn,[A(y,{size:18,onClick:T(o)},{default:H(()=>[(L(),J(Ot(T(t)?T(eo):T(Xt))))]),_:1},8,["onClick"])]),A(x,{trigger:"hover",options:v,onSelect:f},{default:H(()=>[O("div",Dn,[A(C,{round:"",size:34,src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"}),Vn])]),_:1}),O("div",Kn,[A(y,{size:18,onClick:T(l).toggleDrawer},{default:H(()=>[A(T(Lt))]),_:1},8,["onClick"])])]),A(Pn,{show:s.value,"onUpdate:show":d[0]||(d[0]=h=>s.value=h)},null,8,["show"])])}}});var cr=Q(jn,[["__scopeId","data-v-00aebacc"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Header.vue"]]);function Un(e,t,o,l){const a=Pe(),r=Object.assign({lazy:!1,delay:500},Mt(l)?{capture:l}:l);function c(v){o.call(null,v)}function u(){Ye(e,t,s,r)}const s=r.lazy?no(c,r.delay):c;return a.meta.keepAlive===!0?(Ht(()=>{Ie(e,t,s,r)}),Dt(u)):(qe(()=>{Ie(e,t,s,r)}),Vt(u)),u}const qn={class:"tags-btn"},Wn=$({__name:"Tags",setup(e){const t=Pe(),o=be(),l=Kt(),a=he("dialog"),r=Ge(),c=k();let u=k([]),s=k(!1),v=k(!1),f=k(0),p=k(0),d=k(null),y=k(-1);const C=_(()=>l.keepTags),x=_(()=>l.activeTags),h=_(()=>t.path),S=_(()=>({"--tags-height":jt.tagsHeight+"px"})),U=_(()=>{var i;const m=[],F=C.value.find(P=>{var j;return P.path===((j=d.value)==null?void 0:j.path)}),M=x.value.find(P=>{var j;return P.path===((j=d.value)==null?void 0:j.path)}),E=((i=d.value)==null?void 0:i.path)==="/dashboard/console";return M&&m.push({label:"\u5173\u95ED\u5F53\u524D",key:"remove",icon:V(Ut)}),y.value>0&&M&&m.push({label:"\u5173\u95ED\u5DE6\u4FA7",key:"removeLeft",icon:V(No)}),y.value<x.value.length-1&&M&&m.push({label:"\u5173\u95ED\u53F3\u4FA7",key:"removeRight",icon:V(To)}),m.length&&m.push({type:"divider",key:"d0"}),m.push({label:"\u5173\u95ED\u5176\u4ED6",key:"removeOther",icon:V(Xo)}),m.push({label:"\u5173\u95ED\u5168\u90E8",key:"removeAll",icon:V(rn)}),(F&&!E&&m.length||M)&&m.push({type:"divider",key:"d1"}),F&&!E&&m.push({label:"\u79FB\u9664\u56FA\u5B9A",key:"removeFixed",icon:V(gn)}),M&&m.push({label:"\u4FDD\u6301\u56FA\u5B9A",key:"keepFixed",icon:V(mn)}),v.value&&(m.length&&m.push({type:"divider",key:"d2"}),m.push({label:"\u4E00\u952E\u6E05\u9664",key:"init",icon:V(qo)})),m});fe(()=>t.fullPath,()=>{t.fullPath.startsWith("/redirect")||(l.insert("activeTags",{title:t.meta.title,name:t.name,path:t.path,meta:t.meta,query:{...t.query},matchedName:[...t.matched.map(m=>m.name)]}),R())},{immediate:!0}),Un(window,"resize",R,{lazy:!0});function K(m){o.push({path:m.path,query:m.query})}function ee(m,F){d.value=m,y.value=F,I("remove")}async function q(m,F,M){v.value=!1,d.value=F,y.value=M;const E=m.currentTarget,i=E.getBoundingClientRect();f.value=m.clientX-13,p.value=i.top+E.clientHeight,s.value=!0}async function ue(m){const F=C.value.find(P=>P.path===h.value),M=C.value.findIndex(P=>P.path===h.value);d.value=F||x.value.find(P=>P.path===h.value),y.value=M!==-1?M:x.value.findIndex(P=>P.path===h.value);const E=m.currentTarget,i=E.getBoundingClientRect();v.value=!0,f.value=i.left+14+E.clientWidth/2,p.value=i.top+E.clientHeight,s.value=!0}function W(m){m.preventDefault(),B(),c.value.scrollLeft+=m.deltaY||m.detail*20}async function I(m){if(B(),!d.value||y.value===-1)return;const F=x.value.length-1,M=C.value.length-1,E=x.value.findIndex(i=>i.path===h.value);switch(m){case"remove":F<1?o.push(C.value[M].path):h.value===d.value.path&&o.push(x.value[y.value+(y.value<F?1:-1)].path),l.remove(d.value.path);break;case"removeLeft":E!==-1&&y.value>E&&o.push(d.value.path),l.removeLeft(d.value.path);break;case"removeRight":E!==-1&&y.value<E&&o.push(d.value.path),l.removeRight(d.value.path);break;case"removeOther":E!==-1&&d.value.path!==h.value&&o.push(d.value.path),l.removeOther(d.value.path);break;case"removeAll":E!==-1&&o.push(C.value[M].path),l.removeAll(d.value.path);break;case"removeFixed":l.removeFixed(d.value.path);break;case"keepFixed":l.keepFixed(d.value.path);break;case"init":a.warning({title:"\u63D0\u793A",content:"\u786E\u8BA4\u6E05\u7A7A\u6240\u6709 \u201CTags\u201D \u5417\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{o.push("/"),l.init()}});break}}function B(){s.value=!1}function n(){r.emit("keepAlive",t.name),o.replace(`/redirect${t.fullPath}`)}async function R(){await _e();const m=u.value.find(i=>i.$el.dataset.path===h.value);if(!m)return;const F=m.$el,M=F.offsetLeft<c.value.scrollLeft,E=F.offsetLeft+F.clientWidth>c.value.scrollLeft+c.value.clientWidth;(M||E)&&c.value.scrollTo({left:M?F.offsetLeft-100:F.offsetLeft-c.value.clientWidth+F.clientWidth+100,behavior:"smooth"})}return(m,F)=>{const M=ce,E=qt,i=Be;return L(),D("div",{class:"tags-wrapper",style:Re(S.value),onContextmenu:F[1]||(F[1]=Se(()=>{},["prevent"]))},[O("div",{ref_key:"tagsRef",ref:c,class:"tags",onWheel:W},[(L(!0),D(ye,null,He(C.value,(P,j)=>(L(),J(T(De),{key:P.path,ref_for:!0,ref_key:"tagsItemRefs",ref:u,class:"tags-item","data-path":P.path,type:h.value===P.path?"primary":"default",size:"medium",onClick:te=>K(P),onContextmenu:te=>q(te,P,j)},{default:H(()=>[le(ke(P.title),1)]),_:2},1032,["data-path","type","onClick","onContextmenu"]))),128)),(L(!0),D(ye,null,He(x.value,(P,j)=>(L(),J(T(De),{key:P.path,ref_for:!0,ref_key:"tagsItemRefs",ref:u,class:"tags-item","data-path":P.path,type:h.value===P.path?"primary":"default",size:"medium",closable:"",onClick:te=>K(P),onContextmenu:te=>q(te,P,j),onClose:Se(te=>ee(P,j),["stop"])},{default:H(()=>[le(ke(P.title),1)]),_:2},1032,["data-path","type","onClick","onContextmenu","onClose"]))),128))],544),O("div",qn,[A(M,{class:"tags-btn-item",size:"18",onClick:n},{default:H(()=>[A(T(to))]),_:1}),A(E,{vertical:""}),A(M,{class:"tags-btn-item",size:"22",onClick:F[0]||(F[0]=P=>ue(P))},{default:H(()=>[A(T(cn))]),_:1})]),A(i,{class:"tags-dropdown",placement:"bottom-start",trigger:"manual","show-arrow":"",x:f.value,y:p.value,options:U.value,show:s.value,onClickoutside:B,onSelect:I},null,8,["x","y","options","show"])],36)}}});var dr=Q(Wn,[["__scopeId","data-v-49dec766"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Tags.vue"]]);const Yn=$({__name:"Menu",setup(e){const t=Ae(),o=Pe(),l=be(),a=_(()=>["dark"].includes(t.navMode)&&!["mixin"].includes(t.layoutMode)),r=_(()=>{var v;return((v=o.meta)==null?void 0:v.activeMenu)||o.path});let c=k(o.matched.filter(v=>v.path!=="").map(v=>v.path));fe(()=>o.path,()=>{const v=o.matched.filter(f=>f.path!=="").map(f=>f.path);s(t.uniqueMenuOpened?v:[...new Set([...c.value,...v])])});function u(v,f){if(f.isLink){window.open(v);return}l.push(v)}function s(v){c.value=v}return(v,f)=>{const p=Ro;return L(),J(p,{value:r.value,inverted:a.value,"key-field":"path","label-field":"name",accordion:T(t).uniqueMenuOpened,indent:20,"collapsed-width":64,"expanded-keys":c.value,"onUpdate:expandedKeys":s,"onUpdate:value":u},null,8,["value","inverted","accordion","expanded-keys"])}}});var ur=Q(Yn,[["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Menu.vue"]]);const Gn={class:"logo-icon"},Xn={class:"logo-text"},Zn=$({__name:"Logo",props:{collapsed:{type:Boolean,required:!1},width:{type:[Number,String],required:!1,default:272},minWidth:{type:[Number,String],required:!1},height:{type:Number,required:!1,default:50},collapsedWidth:{type:Number,required:!1,default:48},text:{type:String,required:!1,default:"NaiveAdmin"},indent:{type:Number,required:!1,default:20}},setup(e){const t=e,o=Ae(),l=_(()=>({"--logo-width":t.collapsed?t.collapsedWidth+"px":Wt(t.width)?t.width:t.width+"px","--logo-min-width":typeof t.minWidth=="string"?t.minWidth:t.minWidth+"px","--logo-height":t.height+"px","--logo-padding":t.collapsed?`0 ${(t.collapsedWidth-32)/2}px`:`0 18px 0 ${t.indent}px`,"--logo-icon-margin-right":t.collapsed?0:"8px","--logo-text-width":t.collapsed?0:"auto","--logo-opacity":t.collapsed?0:1}));return(a,r)=>{const c=ce;return T(o).isShowLogo?(L(),D("div",{key:0,class:"logo",style:Re(T(l))},[O("div",Gn,[pe(a.$slots,"icon",{},()=>[A(c,{size:32,icon:"vue"})],!0)]),O("div",Xn,[pe(a.$slots,"default",{},()=>[le(ke(e.text),1)],!0)])],4)):Yt("v-if",!0)}}});var vr=Q(Zn,[["__scopeId","data-v-21978010"],["__file","/home/runner/work/naive-admin/naive-admin/src/Layout/components/Logo.vue"]]);export{cr as H,vr as L,ur as M,sr as N,dr as T,ir as a,lr as b,vo as c,po as l,Xe as p};
