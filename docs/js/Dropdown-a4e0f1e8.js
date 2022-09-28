import{a as F,q as le,d as B,B as a,I as re,z as T,b7 as se,c as w,L as H,K as W,b8 as xe,b9 as Se,ba as Ne,ac as Pe,O as ue,bb as V,bc as Re,aE as ie,aP as ke,F as Ke,bd as Ie,be as _e,bf as Ce,bg as Oe,$ as x,aQ as De,a1 as E,aS as de,a2 as k,a0 as D,a4 as $e,M as K,J as ze,a7 as ce,aN as oe,a9 as Ae,a3 as Fe,aB as Te,b3 as pe,aO as Be,bh as je,av as A}from"../assets/index.038520d3.js";import{C as Me,u as Le}from"./ChevronRight-98dbe7fd.js";import{c as Ee}from"./create-ref-setter-113bfc30.js";function He(e,r,l){if(!r)return e;const t=F(e.value);let o=null;return le(e,n=>{o!==null&&window.clearTimeout(o),n===!0?l&&!l.value?t.value=!0:o=window.setTimeout(()=>{t.value=!0},r):t.value=!1}),t}var fe=B({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return a("div",{class:`${this.clsPrefix}-dropdown-divider`})}});const te=re("n-dropdown-menu"),J=re("n-dropdown"),ae=re("n-dropdown-option");function ne(e,r){return e.type==="submenu"||e.type===void 0&&e[r]!==void 0}function Ue(e){return e.type==="group"}function ve(e){return e.type==="divider"}function qe(e){return e.type==="render"}var he=B({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const r=T(J),{hoverKeyRef:l,keyboardKeyRef:t,lastToggledSubmenuKeyRef:o,pendingKeyPathRef:n,activeKeyPathRef:p,animatedRef:f,mergedShowRef:c,renderLabelRef:S,renderIconRef:g,labelFieldRef:N,childrenFieldRef:I,renderOptionRef:P,nodePropsRef:_,menuPropsRef:j}=r,m=T(ae,null),C=T(te),U=T(se),Q=w(()=>e.tmNode.rawNode),q=w(()=>{const{value:d}=I;return ne(e.tmNode.rawNode,d)}),X=w(()=>{const{disabled:d}=e.tmNode;return d}),Y=w(()=>{if(!q.value)return!1;const{key:d,disabled:b}=e.tmNode;if(b)return!1;const{value:R}=l,{value:$}=t,{value:ee}=o,{value:z}=n;return R!==null?z.includes(d):$!==null?z.includes(d)&&z[z.length-1]!==d:ee!==null?z.includes(d):!1}),Z=w(()=>t.value===null&&!f.value),G=He(Y,300,Z),M=w(()=>!!(m!=null&&m.enteringSubmenuRef.value)),L=F(!1);H(ae,{enteringSubmenuRef:L});function O(){L.value=!0}function i(){L.value=!1}function h(){const{parentKey:d,tmNode:b}=e;b.disabled||!c.value||(o.value=d,t.value=null,l.value=b.key)}function u(){const{tmNode:d}=e;d.disabled||!c.value||l.value!==d.key&&h()}function s(d){if(e.tmNode.disabled||!c.value)return;const{relatedTarget:b}=d;b&&!ie({target:b},"dropdownOption")&&!ie({target:b},"scrollbarRail")&&(l.value=null)}function y(){const{value:d}=q,{tmNode:b}=e;!c.value||!d&&!b.disabled&&(r.doSelect(b.key,b.rawNode),r.doUpdateShow(!1))}return{labelField:N,renderLabel:S,renderIcon:g,siblingHasIcon:C.showIconRef,siblingHasSubmenu:C.hasSubmenuRef,menuProps:j,popoverBody:U,animated:f,mergedShowSubmenu:w(()=>G.value&&!M.value),rawNode:Q,hasSubmenu:q,pending:W(()=>{const{value:d}=n,{key:b}=e.tmNode;return d.includes(b)}),childActive:W(()=>{const{value:d}=p,{key:b}=e.tmNode,R=d.findIndex($=>b===$);return R===-1?!1:R<d.length-1}),active:W(()=>{const{value:d}=p,{key:b}=e.tmNode,R=d.findIndex($=>b===$);return R===-1?!1:R===d.length-1}),mergedDisabled:X,renderOption:P,nodeProps:_,handleClick:y,handleMouseMove:u,handleMouseEnter:h,handleMouseLeave:s,handleSubmenuBeforeEnter:O,handleSubmenuAfterEnter:i}},render(){var e,r;const{animated:l,rawNode:t,mergedShowSubmenu:o,clsPrefix:n,siblingHasIcon:p,siblingHasSubmenu:f,renderLabel:c,renderIcon:S,renderOption:g,nodeProps:N,props:I,scrollable:P}=this;let _=null;if(o){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,t,t.children);_=a(be,Object.assign({},U,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const j={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},m=N==null?void 0:N(t),C=a("div",Object.assign({class:[`${n}-dropdown-option`,m==null?void 0:m.class],"data-dropdown-option":!0},m),a("div",ue(j,I),[a("div",{class:[`${n}-dropdown-option-body__prefix`,p&&`${n}-dropdown-option-body__prefix--show-icon`]},[S?S(t):V(t.icon)]),a("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},c?c(t):V((r=t[this.labelField])!==null&&r!==void 0?r:t.title)),a("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,f&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?a(Re,null,{default:()=>a(Me,null)}):null)]),this.hasSubmenu?a(xe,null,{default:()=>[a(Se,null,{default:()=>a("div",{class:`${n}-dropdown-offset-container`},a(Ne,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>a("div",{class:`${n}-dropdown-menu-wrapper`},l?a(Pe,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>_}):_)}))})]}):null);return g?g({node:C,option:t}):C}}),Ge=B({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:r}=T(te),{renderLabelRef:l,labelFieldRef:t,nodePropsRef:o,renderOptionRef:n}=T(J);return{labelField:t,showIcon:e,hasSubmenu:r,renderLabel:l,nodeProps:o,renderOption:n}},render(){var e;const{clsPrefix:r,hasSubmenu:l,showIcon:t,nodeProps:o,renderLabel:n,renderOption:p}=this,{rawNode:f}=this.tmNode,c=a("div",Object.assign({class:`${r}-dropdown-option`},o==null?void 0:o(f)),a("div",{class:`${r}-dropdown-option-body ${r}-dropdown-option-body--group`},a("div",{"data-dropdown-option":!0,class:[`${r}-dropdown-option-body__prefix`,t&&`${r}-dropdown-option-body__prefix--show-icon`]},V(f.icon)),a("div",{class:`${r}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(f):V((e=f.title)!==null&&e!==void 0?e:f[this.labelField])),a("div",{class:[`${r}-dropdown-option-body__suffix`,l&&`${r}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return p?p({node:c,option:f}):c}}),We=B({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:r,clsPrefix:l}=this,{children:t}=e;return a(Ke,null,a(Ge,{clsPrefix:l,tmNode:e,key:e.key}),t==null?void 0:t.map(o=>ve(o.rawNode)?a(fe,{clsPrefix:l,key:o.key}):o.isGroup?(ke("dropdown","`group` node is not allowed to be put in `group` node."),null):a(he,{clsPrefix:l,tmNode:o,parentKey:r,key:o.key})))}}),Ve=B({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:r}}=this.tmNode;return a("div",r,[e==null?void 0:e()])}}),be=B({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:r,childrenFieldRef:l}=T(J);H(te,{showIconRef:w(()=>{const o=r.value;return e.tmNodes.some(n=>{var p;if(n.isGroup)return(p=n.children)===null||p===void 0?void 0:p.some(({rawNode:c})=>o?o(c):c.icon);const{rawNode:f}=n;return o?o(f):f.icon})}),hasSubmenuRef:w(()=>{const{value:o}=l;return e.tmNodes.some(n=>{var p;if(n.isGroup)return(p=n.children)===null||p===void 0?void 0:p.some(({rawNode:c})=>ne(c,o));const{rawNode:f}=n;return ne(f,o)})})});const t=F(null);return H(Ie,null),H(_e,null),H(se,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:r,scrollable:l}=this,t=this.tmNodes.map(o=>{const{rawNode:n}=o;return qe(n)?a(Ve,{tmNode:o,key:o.key}):ve(n)?a(fe,{clsPrefix:r,key:o.key}):Ue(n)?a(We,{clsPrefix:r,tmNode:o,parentKey:e,key:o.key}):a(he,{clsPrefix:r,tmNode:o,parentKey:e,key:o.key,props:n.props,scrollable:l})});return a("div",{class:[`${r}-dropdown-menu`,l&&`${r}-dropdown-menu--scrollable`],ref:"bodyRef"},l?a(Oe,{contentClass:`${r}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?Ce({clsPrefix:r,arrowStyle:this.arrowStyle}):null)}}),Je=x("dropdown-menu",`
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
 `)])]);const Qe={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Xe=Object.keys(pe),Ye=Object.assign(Object.assign(Object.assign({},pe),Qe),ce.props);var no=B({name:"Dropdown",inheritAttrs:!1,props:Ye,setup(e){const r=F(!1),l=$e(K(e,"show"),r),t=w(()=>{const{keyField:i,childrenField:h}=e;return Be(e.options,{getKey(u){return u[i]},getDisabled(u){return u.disabled===!0},getIgnored(u){return u.type==="divider"||u.type==="render"},getChildren(u){return u[h]}})}),o=w(()=>t.value.treeNodes),n=F(null),p=F(null),f=F(null),c=w(()=>{var i,h,u;return(u=(h=(i=n.value)!==null&&i!==void 0?i:p.value)!==null&&h!==void 0?h:f.value)!==null&&u!==void 0?u:null}),S=w(()=>t.value.getPath(c.value).keyPath),g=w(()=>t.value.getPath(e.value).keyPath),N=W(()=>e.keyboard&&l.value);Le({keydown:{ArrowUp:{prevent:!0,handler:X},ArrowRight:{prevent:!0,handler:q},ArrowDown:{prevent:!0,handler:Y},ArrowLeft:{prevent:!0,handler:Q},Escape:U},keyup:{Enter:Z}},N);const{mergedClsPrefixRef:I,inlineThemeDisabled:P}=ze(e),_=ce("Dropdown","-dropdown",Je,je,e,I);H(J,{labelFieldRef:K(e,"labelField"),childrenFieldRef:K(e,"childrenField"),renderLabelRef:K(e,"renderLabel"),renderIconRef:K(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:p,lastToggledSubmenuKeyRef:f,pendingKeyPathRef:S,activeKeyPathRef:g,animatedRef:K(e,"animated"),mergedShowRef:l,nodePropsRef:K(e,"nodeProps"),renderOptionRef:K(e,"renderOption"),menuPropsRef:K(e,"menuProps"),doSelect:j,doUpdateShow:m}),le(l,i=>{!e.animated&&!i&&C()});function j(i,h){const{onSelect:u}=e;u&&oe(u,i,h)}function m(i){const{"onUpdate:show":h,onUpdateShow:u}=e;h&&oe(h,i),u&&oe(u,i),r.value=i}function C(){n.value=null,p.value=null,f.value=null}function U(){m(!1)}function Q(){M("left")}function q(){M("right")}function X(){M("up")}function Y(){M("down")}function Z(){const i=G();i!=null&&i.isLeaf&&(j(i.key,i.rawNode),m(!1))}function G(){var i;const{value:h}=t,{value:u}=c;return!h||u===null?null:(i=h.getNode(u))!==null&&i!==void 0?i:null}function M(i){const{value:h}=c,{value:{getFirstAvailableNode:u}}=t;let s=null;if(h===null){const y=u();y!==null&&(s=y.key)}else{const y=G();if(y){let d;switch(i){case"down":d=y.getNext();break;case"up":d=y.getPrev();break;case"right":d=y.getChild();break;case"left":d=y.getParent();break}d&&(s=d.key)}}s!==null&&(n.value=null,p.value=s)}const L=w(()=>{const{size:i,inverted:h}=e,{common:{cubicBezierEaseInOut:u},self:s}=_.value,{padding:y,dividerColor:d,borderRadius:b,optionOpacityDisabled:R,[A("optionIconSuffixWidth",i)]:$,[A("optionSuffixWidth",i)]:ee,[A("optionIconPrefixWidth",i)]:z,[A("optionPrefixWidth",i)]:we,[A("fontSize",i)]:me,[A("optionHeight",i)]:ye,[A("optionIconSize",i)]:ge}=s,v={"--n-bezier":u,"--n-font-size":me,"--n-padding":y,"--n-border-radius":b,"--n-option-height":ye,"--n-option-prefix-width":we,"--n-option-icon-prefix-width":z,"--n-option-suffix-width":ee,"--n-option-icon-suffix-width":$,"--n-option-icon-size":ge,"--n-divider-color":d,"--n-option-opacity-disabled":R};return h?(v["--n-color"]=s.colorInverted,v["--n-option-color-hover"]=s.optionColorHoverInverted,v["--n-option-color-active"]=s.optionColorActiveInverted,v["--n-option-text-color"]=s.optionTextColorInverted,v["--n-option-text-color-hover"]=s.optionTextColorHoverInverted,v["--n-option-text-color-active"]=s.optionTextColorActiveInverted,v["--n-option-text-color-child-active"]=s.optionTextColorChildActiveInverted,v["--n-prefix-color"]=s.prefixColorInverted,v["--n-suffix-color"]=s.suffixColorInverted,v["--n-group-header-text-color"]=s.groupHeaderTextColorInverted):(v["--n-color"]=s.color,v["--n-option-color-hover"]=s.optionColorHover,v["--n-option-color-active"]=s.optionColorActive,v["--n-option-text-color"]=s.optionTextColor,v["--n-option-text-color-hover"]=s.optionTextColorHover,v["--n-option-text-color-active"]=s.optionTextColorActive,v["--n-option-text-color-child-active"]=s.optionTextColorChildActive,v["--n-prefix-color"]=s.prefixColor,v["--n-suffix-color"]=s.suffixColor,v["--n-group-header-text-color"]=s.groupHeaderTextColor),v}),O=P?Ae("dropdown",w(()=>`${e.size[0]}${e.inverted?"i":""}`),L,e):void 0;return{mergedClsPrefix:I,mergedTheme:_,tmNodes:o,mergedShow:l,handleAfterLeave:()=>{!e.animated||C()},doUpdateShow:m,cssVars:P?void 0:L,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender}},render(){const e=(t,o,n,p,f)=>{var c;const{mergedClsPrefix:S,menuProps:g}=this;(c=this.onRender)===null||c===void 0||c.call(this);const N=(g==null?void 0:g(void 0,this.tmNodes.map(P=>P.rawNode)))||{},I={ref:Ee(o),class:[t,`${S}-dropdown`,this.themeClass],clsPrefix:S,tmNodes:this.tmNodes,style:[n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:p,onMouseleave:f};return a(be,ue(this.$attrs,I,N))},{mergedTheme:r}=this,l={show:this.mergedShow,theme:r.peers.Popover,themeOverrides:r.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return a(Te,Object.assign({},Fe(this.$props,Xe),l),{trigger:()=>{var t,o;return(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t)}})}});export{no as _};
