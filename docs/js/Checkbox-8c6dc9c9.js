import{B as t,I as ue,d as N,w as j,aV as E,J as H,aY as V,a as F,c as B,a3 as G,L as be,M as P,aN as l,a1 as b,$ as r,a0 as y,a2 as $,aR as he,ar as fe,as as ke,z as ve,K as me,a6 as L,ag as ge,a7 as xe,aU as pe,aG as Ce,af as ye,aZ as Re,av as K}from"../assets/index.e8fe7c02.js";var we=t("svg",{viewBox:"0 0 64 64",class:"check-icon"},t("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),ze=t("svg",{viewBox:"0 0 100 100",class:"line-icon"},t("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"}));const O=ue("n-checkbox-group"),Se={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]};var $e=N({name:"CheckboxGroup",props:Se,setup(o){j(()=>{o.onChange!==void 0&&E("checkbox-group","`on-change` is deprecated, please use `on-update:value` instead.")});const{mergedClsPrefixRef:g}=H(o),x=V(o),{mergedSizeRef:R,mergedDisabledRef:S}=x,s=F(o.defaultValue),w=B(()=>o.value),u=G(w,s),c=B(()=>{var h;return((h=u.value)===null||h===void 0?void 0:h.length)||0}),a=B(()=>Array.isArray(u.value)?new Set(u.value):new Set);function M(h,n){const{nTriggerFormInput:p,nTriggerFormChange:C}=x,{onChange:f,"onUpdate:value":k,onUpdateValue:v}=o;if(Array.isArray(u.value)){const i=Array.from(u.value),A=i.findIndex(I=>I===n);h?~A||(i.push(n),v&&l(v,i,{actionType:"check",value:n}),k&&l(k,i,{actionType:"check",value:n}),p(),C(),s.value=i,f&&l(f,i)):~A&&(i.splice(A,1),v&&l(v,i,{actionType:"uncheck",value:n}),k&&l(k,i,{actionType:"uncheck",value:n}),f&&l(f,i),s.value=i,p(),C())}else h?(v&&l(v,[n],{actionType:"check",value:n}),k&&l(k,[n],{actionType:"check",value:n}),f&&l(f,[n]),s.value=[n],p(),C()):(v&&l(v,[],{actionType:"uncheck",value:n}),k&&l(k,[],{actionType:"uncheck",value:n}),f&&l(f,[]),s.value=[],p(),C())}return be(O,{checkedCountRef:c,maxRef:P(o,"max"),minRef:P(o,"min"),valueSetRef:a,disabledRef:S,mergedSizeRef:R,toggleCheckbox:M}),{mergedClsPrefix:g}},render(){return t("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Te=b([r("checkbox",`
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
 `)])]),$("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),$("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[b(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),$("indeterminate",[r("checkbox-box",[r("checkbox-icon",[b(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),b(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),$("checked, indeterminate",[b("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[y("border",{border:"var(--n-border-checked)"})])]),$("disabled",{cursor:"not-allowed"},[$("checked",[r("checkbox-box",`
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
 `))]);const _e=Object.assign(Object.assign({},L.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]});var Me=N({name:"Checkbox",props:_e,setup(o){j(()=>{o.onChange&&E("checkbox","`on-change` is deprecated, please use `on-update:checked` instead.")});const g=F(null),{mergedClsPrefixRef:x,inlineThemeDisabled:R,mergedRtlRef:S}=H(o),s=V(o,{mergedSize(e){const{size:m}=o;if(m!==void 0)return m;if(c){const{value:d}=c.mergedSizeRef;if(d!==void 0)return d}if(e){const{mergedSize:d}=e;if(d!==void 0)return d.value}return"medium"},mergedDisabled(e){const{disabled:m}=o;if(m!==void 0)return m;if(c){if(c.disabledRef.value)return!0;const{maxRef:{value:d},checkedCountRef:z}=c;if(d!==void 0&&z.value>=d&&!n.value)return!0;const{minRef:{value:_}}=c;if(_!==void 0&&z.value<=_&&n.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:w,mergedSizeRef:u}=s,c=ve(O,null),a=F(o.defaultChecked),M=P(o,"checked"),h=G(M,a),n=me(()=>{if(c){const e=c.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return h.value===o.checkedValue}),p=L("Checkbox","-checkbox",Te,Re,o,x);function C(e){if(c&&o.value!==void 0)c.toggleCheckbox(!n.value,o.value);else{const{onChange:m,"onUpdate:checked":d,onUpdateChecked:z}=o,{nTriggerFormInput:_,nTriggerFormChange:U}=s,D=n.value?o.uncheckedValue:o.checkedValue;d&&l(d,D,e),z&&l(z,D,e),m&&l(m,D,e),_(),U(),a.value=D}}function f(e){w.value||C(e)}function k(e){if(!w.value)switch(e.key){case" ":case"Enter":C(e)}}function v(e){switch(e.key){case" ":e.preventDefault()}}const i={focus:()=>{var e;(e=g.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=g.value)===null||e===void 0||e.blur()}},A=ge("Checkbox",S,x),I=B(()=>{const{value:e}=u,{common:{cubicBezierEaseInOut:m},self:{borderRadius:d,color:z,colorChecked:_,colorDisabled:U,colorTableHeader:D,colorTableHeaderModal:Y,colorTableHeaderPopover:J,checkMarkColor:Z,checkMarkColorDisabled:q,border:Q,borderFocus:W,borderDisabled:X,borderChecked:ee,boxShadowFocus:oe,textColor:ne,textColorDisabled:re,checkMarkColorDisabledChecked:ae,colorDisabledChecked:ce,borderDisabledChecked:le,labelPadding:ie,labelLineHeight:de,[K("fontSize",e)]:te,[K("size",e)]:se}}=p.value;return{"--n-label-line-height":de,"--n-size":se,"--n-bezier":m,"--n-border-radius":d,"--n-border":Q,"--n-border-checked":ee,"--n-border-focus":W,"--n-border-disabled":X,"--n-border-disabled-checked":le,"--n-box-shadow-focus":oe,"--n-color":z,"--n-color-checked":_,"--n-color-table":D,"--n-color-table-modal":Y,"--n-color-table-popover":J,"--n-color-disabled":U,"--n-color-disabled-checked":ce,"--n-text-color":ne,"--n-text-color-disabled":re,"--n-check-mark-color":Z,"--n-check-mark-color-disabled":q,"--n-check-mark-color-disabled-checked":ae,"--n-font-size":te,"--n-label-padding":ie}}),T=R?xe("checkbox",B(()=>u.value[0]),I,o):void 0;return Object.assign(s,i,{rtlEnabled:A,selfRef:g,mergedClsPrefix:x,mergedDisabled:w,renderedChecked:n,mergedTheme:p,labelId:pe(),handleClick:f,handleKeyUp:k,handleKeyDown:v,cssVars:R?void 0:I,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender})},render(){var o;const{$slots:g,renderedChecked:x,mergedDisabled:R,indeterminate:S,privateInsideTable:s,cssVars:w,labelId:u,label:c,mergedClsPrefix:a,focusable:M,handleKeyUp:h,handleKeyDown:n,handleClick:p}=this;return(o=this.onRender)===null||o===void 0||o.call(this),t("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,x&&`${a}-checkbox--checked`,R&&`${a}-checkbox--disabled`,S&&`${a}-checkbox--indeterminate`,s&&`${a}-checkbox--inside-table`],tabindex:R||!M?void 0:0,role:"checkbox","aria-checked":S?"mixed":x,"aria-labelledby":u,style:w,onKeyup:h,onKeydown:n,onClick:p,onMousedown:()=>{ye("selectstart",window,C=>{C.preventDefault()},{once:!0})}},t("div",{class:`${a}-checkbox-box-wrapper`},"\xA0",t("div",{class:`${a}-checkbox-box`},t(Ce,null,{default:()=>this.indeterminate?t("div",{key:"indeterminate",class:`${a}-checkbox-icon`},ze):t("div",{key:"check",class:`${a}-checkbox-icon`},we)}),t("div",{class:`${a}-checkbox-box__border`}))),c!==null||g.default?t("span",{class:`${a}-checkbox__label`,id:u},g.default?g.default():c):null)}});export{Me as _,$e as a};