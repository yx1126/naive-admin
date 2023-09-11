import{f as F,Q as ae,d as j,h as l,C as te,D as T,cn as se,g as w,B as H,aA as V,au as xe,av as Se,ax as Ne,Y as Re,aV as ue,bY as W,co as Pe,b5 as ie,ba as ke,F as Ke,cp as Ie,cq as _e,cr as Ce,cs as Oe,J as x,ao as ze,L as E,aH as de,M as k,K as z,N as De,O as K,G as $e,R as ce,az as oe,S as Ae,a0 as Fe,aZ as Te,bx as pe,bd as je,ct as Be,aK as A}from"../assets/index-5b64e5b7.js";import{C as Me,u as Le}from"./RadioGroup-ac705a5e.js";import{c as Ee}from"./create-ref-setter-f485918b.js";function He(e,t,a){if(!t)return e;const r=F(e.value);let n=null;return ae(e,o=>{n!==null&&window.clearTimeout(n),o===!0?a&&!a.value?r.value=!0:n=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}const fe=j({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return l("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),re=te("n-dropdown-menu"),Y=te("n-dropdown"),le=te("n-dropdown-option");function ne(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function Ue(e){return e.type==="group"}function ve(e){return e.type==="divider"}function qe(e){return e.type==="render"}const he=j({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=T(Y),{hoverKeyRef:a,keyboardKeyRef:r,lastToggledSubmenuKeyRef:n,pendingKeyPathRef:o,activeKeyPathRef:p,animatedRef:f,mergedShowRef:c,renderLabelRef:S,renderIconRef:g,labelFieldRef:N,childrenFieldRef:I,renderOptionRef:R,nodePropsRef:_,menuPropsRef:B}=t,m=T(le,null),C=T(re),U=T(se),J=w(()=>e.tmNode.rawNode),q=w(()=>{const{value:d}=I;return ne(e.tmNode.rawNode,d)}),Q=w(()=>{const{disabled:d}=e.tmNode;return d}),X=w(()=>{if(!q.value)return!1;const{key:d,disabled:b}=e.tmNode;if(b)return!1;const{value:P}=a,{value:D}=r,{value:ee}=n,{value:$}=o;return P!==null?$.includes(d):D!==null?$.includes(d)&&$[$.length-1]!==d:ee!==null?$.includes(d):!1}),Z=w(()=>r.value===null&&!f.value),G=He(X,300,Z),M=w(()=>!!(m!=null&&m.enteringSubmenuRef.value)),L=F(!1);H(le,{enteringSubmenuRef:L});function O(){L.value=!0}function i(){L.value=!1}function h(){const{parentKey:d,tmNode:b}=e;b.disabled||c.value&&(n.value=d,r.value=null,a.value=b.key)}function u(){const{tmNode:d}=e;d.disabled||c.value&&a.value!==d.key&&h()}function s(d){if(e.tmNode.disabled||!c.value)return;const{relatedTarget:b}=d;b&&!ie({target:b},"dropdownOption")&&!ie({target:b},"scrollbarRail")&&(a.value=null)}function y(){const{value:d}=q,{tmNode:b}=e;c.value&&!d&&!b.disabled&&(t.doSelect(b.key,b.rawNode),t.doUpdateShow(!1))}return{labelField:N,renderLabel:S,renderIcon:g,siblingHasIcon:C.showIconRef,siblingHasSubmenu:C.hasSubmenuRef,menuProps:B,popoverBody:U,animated:f,mergedShowSubmenu:w(()=>G.value&&!M.value),rawNode:J,hasSubmenu:q,pending:V(()=>{const{value:d}=o,{key:b}=e.tmNode;return d.includes(b)}),childActive:V(()=>{const{value:d}=p,{key:b}=e.tmNode,P=d.findIndex(D=>b===D);return P===-1?!1:P<d.length-1}),active:V(()=>{const{value:d}=p,{key:b}=e.tmNode,P=d.findIndex(D=>b===D);return P===-1?!1:P===d.length-1}),mergedDisabled:Q,renderOption:R,nodeProps:_,handleClick:y,handleMouseMove:u,handleMouseEnter:h,handleMouseLeave:s,handleSubmenuBeforeEnter:O,handleSubmenuAfterEnter:i}},render(){var e,t;const{animated:a,rawNode:r,mergedShowSubmenu:n,clsPrefix:o,siblingHasIcon:p,siblingHasSubmenu:f,renderLabel:c,renderIcon:S,renderOption:g,nodeProps:N,props:I,scrollable:R}=this;let _=null;if(n){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);_=l(be,Object.assign({},U,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const B={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},m=N==null?void 0:N(r),C=l("div",Object.assign({class:[`${o}-dropdown-option`,m==null?void 0:m.class],"data-dropdown-option":!0},m),l("div",ue(B,I),[l("div",{class:[`${o}-dropdown-option-body__prefix`,p&&`${o}-dropdown-option-body__prefix--show-icon`]},[S?S(r):W(r.icon)]),l("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},c?c(r):W((t=r[this.labelField])!==null&&t!==void 0?t:r.title)),l("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,f&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?l(Pe,null,{default:()=>l(Me,null)}):null)]),this.hasSubmenu?l(xe,null,{default:()=>[l(Se,null,{default:()=>l("div",{class:`${o}-dropdown-offset-container`},l(Ne,{show:this.mergedShowSubmenu,placement:this.placement,to:R&&this.popoverBody||void 0,teleportDisabled:!R},{default:()=>l("div",{class:`${o}-dropdown-menu-wrapper`},a?l(Re,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>_}):_)}))})]}):null);return g?g({node:C,option:r}):C}}),Ge=j({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=T(re),{renderLabelRef:a,labelFieldRef:r,nodePropsRef:n,renderOptionRef:o}=T(Y);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:a,nodeProps:n,renderOption:o}},render(){var e;const{clsPrefix:t,hasSubmenu:a,showIcon:r,nodeProps:n,renderLabel:o,renderOption:p}=this,{rawNode:f}=this.tmNode,c=l("div",Object.assign({class:`${t}-dropdown-option`},n==null?void 0:n(f)),l("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},l("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,r&&`${t}-dropdown-option-body__prefix--show-icon`]},W(f.icon)),l("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(f):W((e=f.title)!==null&&e!==void 0?e:f[this.labelField])),l("div",{class:[`${t}-dropdown-option-body__suffix`,a&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return p?p({node:c,option:f}):c}}),Ve=j({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:a}=this,{children:r}=e;return l(Ke,null,l(Ge,{clsPrefix:a,tmNode:e,key:e.key}),r==null?void 0:r.map(n=>{const{rawNode:o}=n;return o.show===!1?null:ve(o)?l(fe,{clsPrefix:a,key:n.key}):n.isGroup?(ke("dropdown","`group` node is not allowed to be put in `group` node."),null):l(he,{clsPrefix:a,tmNode:n,parentKey:t,key:n.key})}))}}),We=j({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return l("div",t,[e==null?void 0:e()])}}),be=j({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:a}=T(Y);H(re,{showIconRef:w(()=>{const n=t.value;return e.tmNodes.some(o=>{var p;if(o.isGroup)return(p=o.children)===null||p===void 0?void 0:p.some(({rawNode:c})=>n?n(c):c.icon);const{rawNode:f}=o;return n?n(f):f.icon})}),hasSubmenuRef:w(()=>{const{value:n}=a;return e.tmNodes.some(o=>{var p;if(o.isGroup)return(p=o.children)===null||p===void 0?void 0:p.some(({rawNode:c})=>ne(c,n));const{rawNode:f}=o;return ne(f,n)})})});const r=F(null);return H(Ie,null),H(_e,null),H(se,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:t,scrollable:a}=this,r=this.tmNodes.map(n=>{const{rawNode:o}=n;return o.show===!1?null:qe(o)?l(We,{tmNode:n,key:n.key}):ve(o)?l(fe,{clsPrefix:t,key:n.key}):Ue(o)?l(Ve,{clsPrefix:t,tmNode:n,parentKey:e,key:n.key}):l(he,{clsPrefix:t,tmNode:n,parentKey:e,key:n.key,props:o.props,scrollable:a})});return l("div",{class:[`${t}-dropdown-menu`,a&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},a?l(Oe,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Ce({clsPrefix:t,arrowStyle:this.arrowStyle}):null)}}),Ye=x("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[ze(),x("dropdown-option",`
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
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),E("&::before","background-color: var(--n-option-color-hover);")]),k("active",`
 color: var(--n-option-text-color-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),E("&::before","background-color: var(--n-option-color-active);")]),k("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),k("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),k("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[z("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[k("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),z("prefix",`
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
 `)]),z("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),z("suffix",`
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
 `),k("scrollable",[z("content",`
 padding: var(--n-padding);
 `)])]),Je={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Qe=Object.keys(pe),Xe=Object.assign(Object.assign(Object.assign({},pe),Je),ce.props),no=j({name:"Dropdown",inheritAttrs:!1,props:Xe,setup(e){const t=F(!1),a=De(K(e,"show"),t),r=w(()=>{const{keyField:i,childrenField:h}=e;return je(e.options,{getKey(u){return u[i]},getDisabled(u){return u.disabled===!0},getIgnored(u){return u.type==="divider"||u.type==="render"},getChildren(u){return u[h]}})}),n=w(()=>r.value.treeNodes),o=F(null),p=F(null),f=F(null),c=w(()=>{var i,h,u;return(u=(h=(i=o.value)!==null&&i!==void 0?i:p.value)!==null&&h!==void 0?h:f.value)!==null&&u!==void 0?u:null}),S=w(()=>r.value.getPath(c.value).keyPath),g=w(()=>r.value.getPath(e.value).keyPath),N=V(()=>e.keyboard&&a.value);Le({keydown:{ArrowUp:{prevent:!0,handler:Q},ArrowRight:{prevent:!0,handler:q},ArrowDown:{prevent:!0,handler:X},ArrowLeft:{prevent:!0,handler:J},Enter:{prevent:!0,handler:Z},Escape:U}},N);const{mergedClsPrefixRef:I,inlineThemeDisabled:R}=$e(e),_=ce("Dropdown","-dropdown",Ye,Be,e,I);H(Y,{labelFieldRef:K(e,"labelField"),childrenFieldRef:K(e,"childrenField"),renderLabelRef:K(e,"renderLabel"),renderIconRef:K(e,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:p,lastToggledSubmenuKeyRef:f,pendingKeyPathRef:S,activeKeyPathRef:g,animatedRef:K(e,"animated"),mergedShowRef:a,nodePropsRef:K(e,"nodeProps"),renderOptionRef:K(e,"renderOption"),menuPropsRef:K(e,"menuProps"),doSelect:B,doUpdateShow:m}),ae(a,i=>{!e.animated&&!i&&C()});function B(i,h){const{onSelect:u}=e;u&&oe(u,i,h)}function m(i){const{"onUpdate:show":h,onUpdateShow:u}=e;h&&oe(h,i),u&&oe(u,i),t.value=i}function C(){o.value=null,p.value=null,f.value=null}function U(){m(!1)}function J(){M("left")}function q(){M("right")}function Q(){M("up")}function X(){M("down")}function Z(){const i=G();i!=null&&i.isLeaf&&a.value&&(B(i.key,i.rawNode),m(!1))}function G(){var i;const{value:h}=r,{value:u}=c;return!h||u===null?null:(i=h.getNode(u))!==null&&i!==void 0?i:null}function M(i){const{value:h}=c,{value:{getFirstAvailableNode:u}}=r;let s=null;if(h===null){const y=u();y!==null&&(s=y.key)}else{const y=G();if(y){let d;switch(i){case"down":d=y.getNext();break;case"up":d=y.getPrev();break;case"right":d=y.getChild();break;case"left":d=y.getParent();break}d&&(s=d.key)}}s!==null&&(o.value=null,p.value=s)}const L=w(()=>{const{size:i,inverted:h}=e,{common:{cubicBezierEaseInOut:u},self:s}=_.value,{padding:y,dividerColor:d,borderRadius:b,optionOpacityDisabled:P,[A("optionIconSuffixWidth",i)]:D,[A("optionSuffixWidth",i)]:ee,[A("optionIconPrefixWidth",i)]:$,[A("optionPrefixWidth",i)]:we,[A("fontSize",i)]:me,[A("optionHeight",i)]:ye,[A("optionIconSize",i)]:ge}=s,v={"--n-bezier":u,"--n-font-size":me,"--n-padding":y,"--n-border-radius":b,"--n-option-height":ye,"--n-option-prefix-width":we,"--n-option-icon-prefix-width":$,"--n-option-suffix-width":ee,"--n-option-icon-suffix-width":D,"--n-option-icon-size":ge,"--n-divider-color":d,"--n-option-opacity-disabled":P};return h?(v["--n-color"]=s.colorInverted,v["--n-option-color-hover"]=s.optionColorHoverInverted,v["--n-option-color-active"]=s.optionColorActiveInverted,v["--n-option-text-color"]=s.optionTextColorInverted,v["--n-option-text-color-hover"]=s.optionTextColorHoverInverted,v["--n-option-text-color-active"]=s.optionTextColorActiveInverted,v["--n-option-text-color-child-active"]=s.optionTextColorChildActiveInverted,v["--n-prefix-color"]=s.prefixColorInverted,v["--n-suffix-color"]=s.suffixColorInverted,v["--n-group-header-text-color"]=s.groupHeaderTextColorInverted):(v["--n-color"]=s.color,v["--n-option-color-hover"]=s.optionColorHover,v["--n-option-color-active"]=s.optionColorActive,v["--n-option-text-color"]=s.optionTextColor,v["--n-option-text-color-hover"]=s.optionTextColorHover,v["--n-option-text-color-active"]=s.optionTextColorActive,v["--n-option-text-color-child-active"]=s.optionTextColorChildActive,v["--n-prefix-color"]=s.prefixColor,v["--n-suffix-color"]=s.suffixColor,v["--n-group-header-text-color"]=s.groupHeaderTextColor),v}),O=R?Ae("dropdown",w(()=>`${e.size[0]}${e.inverted?"i":""}`),L,e):void 0;return{mergedClsPrefix:I,mergedTheme:_,tmNodes:n,mergedShow:a,handleAfterLeave:()=>{e.animated&&C()},doUpdateShow:m,cssVars:R?void 0:L,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender}},render(){const e=(r,n,o,p,f)=>{var c;const{mergedClsPrefix:S,menuProps:g}=this;(c=this.onRender)===null||c===void 0||c.call(this);const N=(g==null?void 0:g(void 0,this.tmNodes.map(R=>R.rawNode)))||{},I={ref:Ee(n),class:[r,`${S}-dropdown`,this.themeClass],clsPrefix:S,tmNodes:this.tmNodes,style:[o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:p,onMouseleave:f};return l(be,ue(this.$attrs,I,N))},{mergedTheme:t}=this,a={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return l(Te,Object.assign({},Fe(this.$props,Qe),a),{trigger:()=>{var r,n;return(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r)}})}});export{no as _};
