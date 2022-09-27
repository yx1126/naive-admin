import{B as t,I as ue,d as _,w as j,aV as E,J as G,aY as H,a as N,c as I,a3 as V,L as be,M as P,aN as l,a1 as b,$ as r,a0 as y,a2 as M,aR as he,ar as fe,as as ke,z as ve,K as xe,a6 as L,ag as me,a7 as ge,aU as pe,aG as Ce,af as ye,aZ as Re,av as K}from"../assets/index.78bcc101.js";var we=t("svg",{viewBox:"0 0 64 64",class:"check-icon"},t("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),ze=t("svg",{viewBox:"0 0 100 100",class:"line-icon"},t("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"}));const O=ue("n-checkbox-group"),Se={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]};var Me=_({name:"CheckboxGroup",props:Se,setup(o){j(()=>{o.onChange!==void 0&&E("checkbox-group","`on-change` is deprecated, please use `on-update:value` instead.")});const{mergedClsPrefixRef:m}=G(o),g=H(o),{mergedSizeRef:R,mergedDisabledRef:S}=g,s=N(o.defaultValue),w=I(()=>o.value),u=V(w,s),c=I(()=>{var h;return((h=u.value)===null||h===void 0?void 0:h.length)||0}),a=I(()=>Array.isArray(u.value)?new Set(u.value):new Set);function A(h,n){const{nTriggerFormInput:p,nTriggerFormChange:C}=g,{onChange:f,"onUpdate:value":k,onUpdateValue:v}=o;if(Array.isArray(u.value)){const d=Array.from(u.value),B=d.findIndex(U=>U===n);h?~B||(d.push(n),v&&l(v,d,{actionType:"check",value:n}),k&&l(k,d,{actionType:"check",value:n}),p(),C(),s.value=d,f&&l(f,d)):~B&&(d.splice(B,1),v&&l(v,d,{actionType:"uncheck",value:n}),k&&l(k,d,{actionType:"uncheck",value:n}),f&&l(f,d),s.value=d,p(),C())}else h?(v&&l(v,[n],{actionType:"check",value:n}),k&&l(k,[n],{actionType:"check",value:n}),f&&l(f,[n]),s.value=[n],p(),C()):(v&&l(v,[],{actionType:"uncheck",value:n}),k&&l(k,[],{actionType:"uncheck",value:n}),f&&l(f,[]),s.value=[],p(),C())}return be(O,{checkedCountRef:c,maxRef:P(o,"max"),minRef:P(o,"min"),valueSetRef:a,disabledRef:S,mergedSizeRef:R,toggleCheckbox:A}),{mergedClsPrefix:m}},render(){return t("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Te=b([r("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[b("&:hover",[r("checkbox-box",[y("border",{border:"var(--n-border-checked)"})])]),b("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),M("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),M("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[b(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),M("indeterminate",[r("checkbox-box",[r("checkbox-icon",[b(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),b(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),M("checked, indeterminate",[b("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[y("border",{border:"var(--n-border-checked)"})])]),M("disabled",{cursor:"not-allowed"},[M("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[y("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[b(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[y("border",{border:"var(--n-border-disabled)"}),r("checkbox-icon",[b(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),y("label",{color:"var(--n-text-color-disabled)"})]),r("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),r("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[y("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),r("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[b(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),he({left:"1px",top:"1px"})])]),y("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 `,[b("&:empty",{display:"none"})])]),fe(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),ke(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]);const De=Object.assign(Object.assign({},L.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]});var Ae=_({name:"Checkbox",props:De,setup(o){j(()=>{o.onChange&&E("checkbox","`on-change` is deprecated, please use `on-update:checked` instead.")});const m=N(null),{mergedClsPrefixRef:g,inlineThemeDisabled:R,mergedRtlRef:S}=G(o),s=H(o,{mergedSize(e){const{size:x}=o;if(x!==void 0)return x;if(c){const{value:i}=c.mergedSizeRef;if(i!==void 0)return i}if(e){const{mergedSize:i}=e;if(i!==void 0)return i.value}return"medium"},mergedDisabled(e){const{disabled:x}=o;if(x!==void 0)return x;if(c){if(c.disabledRef.value)return!0;const{maxRef:{value:i},checkedCountRef:z}=c;if(i!==void 0&&z.value>=i&&!n.value)return!0;const{minRef:{value:D}}=c;if(D!==void 0&&z.value<=D&&n.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:w,mergedSizeRef:u}=s,c=ve(O,null),a=N(o.defaultChecked),A=P(o,"checked"),h=V(A,a),n=xe(()=>{if(c){const e=c.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return h.value===o.checkedValue}),p=L("Checkbox","-checkbox",Te,Re,o,g);function C(e){if(c&&o.value!==void 0)c.toggleCheckbox(!n.value,o.value);else{const{onChange:x,"onUpdate:checked":i,onUpdateChecked:z}=o,{nTriggerFormInput:D,nTriggerFormChange:F}=s,$=n.value?o.uncheckedValue:o.checkedValue;i&&l(i,$,e),z&&l(z,$,e),x&&l(x,$,e),D(),F(),a.value=$}}function f(e){w.value||C(e)}function k(e){if(!w.value)switch(e.key){case" ":case"Enter":C(e)}}function v(e){switch(e.key){case" ":e.preventDefault()}}const d={focus:()=>{var e;(e=m.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=m.value)===null||e===void 0||e.blur()}},B=me("Checkbox",S,g),U=I(()=>{const{value:e}=u,{common:{cubicBezierEaseInOut:x},self:{borderRadius:i,color:z,colorChecked:D,colorDisabled:F,colorTableHeader:$,colorTableHeaderModal:Y,colorTableHeaderPopover:J,checkMarkColor:Z,checkMarkColorDisabled:q,border:Q,borderFocus:W,borderDisabled:X,borderChecked:ee,boxShadowFocus:oe,textColor:ne,textColorDisabled:re,checkMarkColorDisabledChecked:ae,colorDisabledChecked:ce,borderDisabledChecked:le,labelPadding:de,labelLineHeight:ie,[K("fontSize",e)]:te,[K("size",e)]:se}}=p.value;return{"--n-label-line-height":ie,"--n-size":se,"--n-bezier":x,"--n-border-radius":i,"--n-border":Q,"--n-border-checked":ee,"--n-border-focus":W,"--n-border-disabled":X,"--n-border-disabled-checked":le,"--n-box-shadow-focus":oe,"--n-color":z,"--n-color-checked":D,"--n-color-table":$,"--n-color-table-modal":Y,"--n-color-table-popover":J,"--n-color-disabled":F,"--n-color-disabled-checked":ce,"--n-text-color":ne,"--n-text-color-disabled":re,"--n-check-mark-color":Z,"--n-check-mark-color-disabled":q,"--n-check-mark-color-disabled-checked":ae,"--n-font-size":te,"--n-label-padding":de}}),T=R?ge("checkbox",I(()=>u.value[0]),U,o):void 0;return Object.assign(s,d,{rtlEnabled:B,selfRef:m,mergedClsPrefix:g,mergedDisabled:w,renderedChecked:n,mergedTheme:p,labelId:pe(),handleClick:f,handleKeyUp:k,handleKeyDown:v,cssVars:R?void 0:U,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender})},render(){var o;const{$slots:m,renderedChecked:g,mergedDisabled:R,indeterminate:S,privateInsideTable:s,cssVars:w,labelId:u,label:c,mergedClsPrefix:a,focusable:A,handleKeyUp:h,handleKeyDown:n,handleClick:p}=this;return(o=this.onRender)===null||o===void 0||o.call(this),t("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,g&&`${a}-checkbox--checked`,R&&`${a}-checkbox--disabled`,S&&`${a}-checkbox--indeterminate`,s&&`${a}-checkbox--inside-table`],tabindex:R||!A?void 0:0,role:"checkbox","aria-checked":S?"mixed":g,"aria-labelledby":u,style:w,onKeyup:h,onKeydown:n,onClick:p,onMousedown:()=>{ye("selectstart",window,C=>{C.preventDefault()},{once:!0})}},t("div",{class:`${a}-checkbox-box-wrapper`},"\xA0",t("div",{class:`${a}-checkbox-box`},t(Ce,null,{default:()=>this.indeterminate?t("div",{key:"indeterminate",class:`${a}-checkbox-icon`},ze):t("div",{key:"check",class:`${a}-checkbox-icon`},we)}),t("div",{class:`${a}-checkbox-box__border`}))),c!==null||m.default?t("span",{class:`${a}-checkbox__label`,id:u},m.default?m.default():c):null)}});export{Ae as N,Me as a};
