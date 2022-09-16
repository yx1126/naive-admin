import{a as B,q as le,d as $,B as d,I as re,z as T,b5 as se,c as w,L as H,K as W,b6 as xe,b7 as Se,b8 as Ne,aa as Re,O as ue,b9 as V,ba as Pe,aE as ie,bb as ke,F as Ke,bc as Ie,bd as Ce,be as _e,bf as Oe,$ as x,aP as De,a1 as E,aR as de,a2 as k,a0 as D,a3 as $e,M as K,J as ze,a6 as ce,aN as oe,a7 as Ae,ab as Fe,aB as Be,b1 as pe,aO as Te,bg as je,av as F}from"../assets/index.c1922953.js";import{u as Le}from"./use-keyboard-884e9c4c.js";import{c as Me}from"./create-ref-setter-113bfc30.js";function Ee(e,r,l){if(!r)return e;const t=B(e.value);let o=null;return le(e,n=>{o!==null&&window.clearTimeout(o),n===!0?l&&!l.value?t.value=!0:o=window.setTimeout(()=>{t.value=!0},r):t.value=!1}),t}var He=$({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),fe=$({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}});const te=re("n-dropdown-menu"),J=re("n-dropdown"),ae=re("n-dropdown-option");function ne(e,r){return e.type==="submenu"||e.type===void 0&&e[r]!==void 0}function Ue(e){return e.type==="group"}function ve(e){return e.type==="divider"}function qe(e){return e.type==="render"}var he=$({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const r=T(J),{hoverKeyRef:l,keyboardKeyRef:t,lastToggledSubmenuKeyRef:o,pendingKeyPathRef:n,activeKeyPathRef:p,animatedRef:f,mergedShowRef:c,renderLabelRef:S,renderIconRef:g,labelFieldRef:N,childrenFieldRef:I,renderOptionRef:R,nodePropsRef:C,menuPropsRef:j}=r,m=T(ae,null),_=T(te),U=T(se),X=w(()=>e.tmNode.rawNode),q=w(()=>{const{value:a}=I;return ne(e.tmNode.rawNode,a)}),Z=w(()=>{const{disabled:a}=e.tmNode;return a}),Q=w(()=>{if(!q.value)return!1;const{key:a,disabled:b}=e.tmNode;if(b)return!1;const{value:P}=l,{value:z}=t,{value:ee}=o,{value:A}=n;return P!==null?A.includes(a):z!==null?A.includes(a)&&A[A.length-1]!==a:ee!==null?A.includes(a):!1}),Y=w(()=>t.value===null&&!f.value),G=Ee(Q,300,Y),L=w(()=>!!(m!=null&&m.enteringSubmenuRef.value)),M=B(!1);H(ae,{enteringSubmenuRef:M});function O(){M.value=!0}function i(){M.value=!1}function h(){const{parentKey:a,tmNode:b}=e;b.disabled||!c.value||(o.value=a,t.value=null,l.value=b.key)}function u(){const{tmNode:a}=e;a.disabled||!c.value||l.value!==a.key&&h()}function s(a){if(e.tmNode.disabled||!c.value)return;const{relatedTarget:b}=a;b&&!ie({target:b},"dropdownOption")&&!ie({target:b},"scrollbarRail")&&(l.value=null)}function y(){const{value:a}=q,{tmNode:b}=e;!c.value||!a&&!b.disabled&&(r.doSelect(b.key,b.rawNode),r.doUpdateShow(!1))}return{labelField:N,renderLabel:S,renderIcon:g,siblingHasIcon:_.showIconRef,siblingHasSubmenu:_.hasSubmenuRef,menuProps:j,popoverBody:U,animated:f,mergedShowSubmenu:w(()=>G.value&&!L.value),rawNode:X,hasSubmenu:q,pending:W(()=>{const{value:a}=n,{key:b}=e.tmNode;return a.includes(b)}),childActive:W(()=>{const{value:a}=p,{key:b}=e.tmNode,P=a.findIndex(z=>b===z);return P===-1?!1:P<a.length-1}),active:W(()=>{const{value:a}=p,{key:b}=e.tmNode,P=a.findIndex(z=>b===z);return P===-1?!1:P===a.length-1}),mergedDisabled:Z,renderOption:R,nodeProps:C,handleClick:y,handleMouseMove:u,handleMouseEnter:h,handleMouseLeave:s,handleSubmenuBeforeEnter:O,handleSubmenuAfterEnter:i}},render(){var e,r;const{animated:l,rawNode:t,mergedShowSubmenu:o,clsPrefix:n,siblingHasIcon:p,siblingHasSubmenu:f,renderLabel:c,renderIcon:S,renderOption:g,nodeProps:N,props:I,scrollable:R}=this;let C=null;if(o){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,t,t.children);C=d(be,Object.assign({},U,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const j={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},m=N==null?void 0:N(t),_=d("div",Object.assign({class:[`${n}-dropdown-option`,m==null?void 0:m.class],"data-dropdown-option":!0},m),d("div",ue(j,I),[d("div",{class:[`${n}-dropdown-option-body__prefix`,p&&`${n}-dropdown-option-body__prefix--show-icon`]},[S?S(t):V(t.icon)]),d("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},c?c(t):V((r=t[this.labelField])!==null&&r!==void 0?r:t.title)),d("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,f&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(Pe,null,{default:()=>d(He,null)}):null)]),this.hasSubmenu?d(xe,null,{default:()=>[d(Se,null,{default:()=>d("div",{class:`${n}-dropdown-offset-container`},d(Ne,{show:this.mergedShowSubmenu,placement:this.placement,to:R&&this.popoverBody||void 0,teleportDisabled:!R},{default:()=>d("div",{class:`${n}-dropdown-menu-wrapper`},l?d(Re,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>C}):C)}))})]}):null);return g?g({node:_,option:t}):_}}),Ge=$({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:r}=T(te),{renderLabelRef:l,labelFieldRef:t,nodePropsRef:o,renderOptionRef:n}=T(J);return{labelField:t,showIcon:e,hasSubmenu:r,renderLabel:l,nodeProps:o,renderOption:n}},render(){var e;const{clsPrefix:r,hasSubmenu:l,showIcon:t,nodeProps:o,renderLabel:n,renderOption:p}=this,{rawNode:f}=this.tmNode,c=d("div",Object.assign({class:`${r}-dropdown-option`},o==null?void 0:o(f)),d("div",{class:`${r}-dropdown-option-body ${r}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${r}-dropdown-option-body__prefix`,t&&`${r}-dropdown-option-body__prefix--show-icon`]},V(f.icon)),d("div",{class:`${r}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(f):V((e=f.title)!==null&&e!==void 0?e:f[this.labelField])),d("div",{class:[`${r}-dropdown-option-body__suffix`,l&&`${r}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return p?p({node:c,option:f}):c}}),We=$({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:r,clsPrefix:l}=this,{children:t}=e;return d(Ke,null,d(Ge,{clsPrefix:l,tmNode:e,key:e.key}),t==null?void 0:t.map(o=>ve(o.rawNode)?d(fe,{clsPrefix:l,key:o.key}):o.isGroup?(ke("dropdown","`group` node is not allowed to be put in `group` node."),null):d(he,{clsPrefix:l,tmNode:o,parentKey:r,key:o.key})))}}),Ve=$({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:r}}=this.tmNode;return d("div",r,[e==null?void 0:e()])}}),be=$({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:r,childrenFieldRef:l}=T(J);H(te,{showIconRef:w(()=>{const o=r.value;return e.tmNodes.some(n=>{var p;if(n.isGroup)return(p=n.children)===null||p===void 0?void 0:p.some(({rawNode:c})=>o?o(c):c.icon);const{rawNode:f}=n;return o?o(f):f.icon})}),hasSubmenuRef:w(()=>{const{value:o}=l;return e.tmNodes.some(n=>{var p;if(n.isGroup)return(p=n.children)===null||p===void 0?void 0:p.some(({rawNode:c})=>ne(c,o));const{rawNode:f}=n;return ne(f,o)})})});const t=B(null);return H(Ie,null),H(Ce,null),H(se,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:r,scrollable:l}=this,t=this.tmNodes.map(o=>{const{rawNode:n}=o;return qe(n)?d(Ve,{tmNode:o,key:o.key}):ve(n)?d(fe,{clsPrefix:r,key:o.key}):Ue(n)?d(We,{clsPrefix:r,tmNode:o,parentKey:e,key:o.key}):d(he,{clsPrefix:r,tmNode:o,parentKey:e,key:o.key,props:n.props,scrollable:l})});return d("div",{class:[`${r}-dropdown-menu`,l&&`${r}-dropdown-menu--scrollable`],ref:"bodyRef"},l?d(Oe,{contentClass:`${r}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?_e({clsPrefix:r,arrowStyle:this.arrowStyle}):null)}}),Je=x("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[De(),x("dropdown-option",`
 position: relative;
 `,[E("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[E("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),x("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[E("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),de("disabled",[k("pending",`
 color: var(--n-option-text-color-hover);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),E("&::before","background-color: var(--n-option-color-hover);")]),k("active",`
 color: var(--n-option-text-color-active);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),E("&::before","background-color: var(--n-option-color-active);")]),k("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),k("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),k("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[D("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[k("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),D("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[k("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),x("icon",`
 font-size: var(--n-option-icon-size);
 `)]),D("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),D("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[k("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),x("icon",`
 font-size: var(--n-option-icon-size);
 `)]),x("dropdown-menu","pointer-events: all;")]),x("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),x("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),x("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),E(">",[x("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),de("scrollable",`
 padding: var(--n-padding);
 `),k("scrollable",[D("content",`
 padding: var(--n-padding);
 `)])]);const Xe={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ze=Object.keys(pe),Qe=Object.assign(Object.assign(Object.assign({},pe),Xe),ce.props);var no=$({name:"Dropdown",inheritAttrs:!1,props:Qe,setup(e){const r=B(!1),l=$e(K(e,"show"),r),t=w(()=>{const{keyField:i,childrenField:h}=e;return Te(e.options,{getKey(u){return u[i]},getDisabled(u){return u.disabled===!0},getIgnored(u){return u.type==="divider"||u.type==="render"},getChildren(u){return u[h]}})}),o=w(()=>t.value.treeNodes),n=B(null),p=B(null),f=B(null),c=w(()=>{var i,h,u;return(u=(h=(i=n.value)!==null&&i!==void 0?i:p.value)!==null&&h!==void 0?h:f.value)!==null&&u!==void 0?u:null}),S=w(()=>t.value.getPath(c.value).keyPath),g=w(()=>t.value.getPath(e.value).keyPath),N=W(()=>e.keyboard&&l.value);Le({keydown:{ArrowUp:{prevent:!0,handler:Z},ArrowRight:{prevent:!0,handler:q},ArrowDown:{prevent:!0,handler:Q},ArrowLeft:{prevent:!0,handler:X},Escape:U},keyup:{Enter:Y}},N);const{mergedClsPrefixRef:I,inlineThemeDisabled:R}=ze(e),C=ce("Dropdown","-dropdown",Je,je,e,I);H(J,{labelFieldRef:K(e,"labelField"),childrenFieldRef:K(e,"childrenField"),renderLabelRef:K(e,"renderLabel"),renderIconRef:K(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:p,lastToggledSubmenuKeyRef:f,pendingKeyPathRef:S,activeKeyPathRef:g,animatedRef:K(e,"animated"),mergedShowRef:l,nodePropsRef:K(e,"nodeProps"),renderOptionRef:K(e,"renderOption"),menuPropsRef:K(e,"menuProps"),doSelect:j,doUpdateShow:m}),le(l,i=>{!e.animated&&!i&&_()});function j(i,h){const{onSelect:u}=e;u&&oe(u,i,h)}function m(i){const{"onUpdate:show":h,onUpdateShow:u}=e;h&&oe(h,i),u&&oe(u,i),r.value=i}function _(){n.value=null,p.value=null,f.value=null}function U(){m(!1)}function X(){L("left")}function q(){L("right")}function Z(){L("up")}function Q(){L("down")}function Y(){const i=G();i!=null&&i.isLeaf&&(j(i.key,i.rawNode),m(!1))}function G(){var i;const{value:h}=t,{value:u}=c;return!h||u===null?null:(i=h.getNode(u))!==null&&i!==void 0?i:null}function L(i){const{value:h}=c,{value:{getFirstAvailableNode:u}}=t;let s=null;if(h===null){const y=u();y!==null&&(s=y.key)}else{const y=G();if(y){let a;switch(i){case"down":a=y.getNext();break;case"up":a=y.getPrev();break;case"right":a=y.getChild();break;case"left":a=y.getParent();break}a&&(s=a.key)}}s!==null&&(n.value=null,p.value=s)}const M=w(()=>{const{size:i,inverted:h}=e,{common:{cubicBezierEaseInOut:u},self:s}=C.value,{padding:y,dividerColor:a,borderRadius:b,optionOpacityDisabled:P,[F("optionIconSuffixWidth",i)]:z,[F("optionSuffixWidth",i)]:ee,[F("optionIconPrefixWidth",i)]:A,[F("optionPrefixWidth",i)]:we,[F("fontSize",i)]:me,[F("optionHeight",i)]:ye,[F("optionIconSize",i)]:ge}=s,v={"--n-bezier":u,"--n-font-size":me,"--n-padding":y,"--n-border-radius":b,"--n-option-height":ye,"--n-option-prefix-width":we,"--n-option-icon-prefix-width":A,"--n-option-suffix-width":ee,"--n-option-icon-suffix-width":z,"--n-option-icon-size":ge,"--n-divider-color":a,"--n-option-opacity-disabled":P};return h?(v["--n-color"]=s.colorInverted,v["--n-option-color-hover"]=s.optionColorHoverInverted,v["--n-option-color-active"]=s.optionColorActiveInverted,v["--n-option-text-color"]=s.optionTextColorInverted,v["--n-option-text-color-hover"]=s.optionTextColorHoverInverted,v["--n-option-text-color-active"]=s.optionTextColorActiveInverted,v["--n-option-text-color-child-active"]=s.optionTextColorChildActiveInverted,v["--n-prefix-color"]=s.prefixColorInverted,v["--n-suffix-color"]=s.suffixColorInverted,v["--n-group-header-text-color"]=s.groupHeaderTextColorInverted):(v["--n-color"]=s.color,v["--n-option-color-hover"]=s.optionColorHover,v["--n-option-color-active"]=s.optionColorActive,v["--n-option-text-color"]=s.optionTextColor,v["--n-option-text-color-hover"]=s.optionTextColorHover,v["--n-option-text-color-active"]=s.optionTextColorActive,v["--n-option-text-color-child-active"]=s.optionTextColorChildActive,v["--n-prefix-color"]=s.prefixColor,v["--n-suffix-color"]=s.suffixColor,v["--n-group-header-text-color"]=s.groupHeaderTextColor),v}),O=R?Ae("dropdown",w(()=>`${e.size[0]}${e.inverted?"i":""}`),M,e):void 0;return{mergedClsPrefix:I,mergedTheme:C,tmNodes:o,mergedShow:l,handleAfterLeave:()=>{!e.animated||_()},doUpdateShow:m,cssVars:R?void 0:M,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender}},render(){const e=(t,o,n,p,f)=>{var c;const{mergedClsPrefix:S,menuProps:g}=this;(c=this.onRender)===null||c===void 0||c.call(this);const N=(g==null?void 0:g(void 0,this.tmNodes.map(R=>R.rawNode)))||{},I={ref:Me(o),class:[t,`${S}-dropdown`,this.themeClass],clsPrefix:S,tmNodes:this.tmNodes,style:[n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:p,onMouseleave:f};return d(be,ue(this.$attrs,I,N))},{mergedTheme:r}=this,l={show:this.mergedShow,theme:r.peers.Popover,themeOverrides:r.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(Be,Object.assign({},Fe(this.$props,Ze),l),{trigger:()=>{var t,o;return(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t)}})}});export{He as C,no as _};
