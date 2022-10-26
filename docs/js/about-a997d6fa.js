import{a1 as m,$ as e,aS as X,a2 as k,a0 as L,ar as Y,as as Z,d as E,J as ee,a7 as q,cA as oe,c as V,av as T,a9 as te,cB as re,Q as ne,aK as le,G as l,R as se,_ as ie,a as N,a_ as ae,co as de,b as A,e as F,f,g as a,F as G,h as H,k as ce,aj as K,am as J,l as R,i as Q}from"../assets/index.cf6f3e79.js";import{_ as pe,a as be}from"./Grid-322cd67b.js";function W(r,d="default",c=[]){const{children:n}=r;if(n!==null&&typeof n=="object"&&!Array.isArray(n)){const p=n[d];if(typeof p=="function")return p()}return c}const U="DESCRIPTION_ITEM_FLAG";function ue(r){return typeof r=="object"&&r&&!Array.isArray(r)?r.type&&r.type[U]:!1}var he=m([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),X("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[m("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),k("left-label-placement",[e("descriptions-table-content",[m("> *",{verticalAlign:"top"})])]),k("left-label-align",[m("th",{textAlign:"left"})]),k("center-label-align",[m("th",{textAlign:"center"})]),k("right-label-align",[m("th",{textAlign:"right"})]),k("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[m("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[m("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[m("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),e("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[e("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[e("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[e("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),e("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[L("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),L("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),Y(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Z(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]);const ge=Object.assign(Object.assign({},q.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]});var me=E({name:"Descriptions",props:ge,setup(r){const{mergedClsPrefixRef:d,inlineThemeDisabled:c}=ee(r),n=q("Descriptions","-descriptions",he,oe,r,d),p=V(()=>{const{size:s,bordered:b}=r,{common:{cubicBezierEaseInOut:h},self:{titleTextColor:y,thColor:o,thColorModal:u,thColorPopover:w,thTextColor:x,thFontWeight:D,tdTextColor:M,tdColor:B,tdColorModal:t,tdColorPopover:S,borderColor:j,borderColorModal:g,borderColorPopover:_,borderRadius:z,lineHeight:C,[T("fontSize",s)]:v,[T(b?"thPaddingBordered":"thPadding",s)]:$,[T(b?"tdPaddingBordered":"tdPadding",s)]:P}}=n.value;return{"--n-title-text-color":y,"--n-th-padding":$,"--n-td-padding":P,"--n-font-size":v,"--n-bezier":h,"--n-th-font-weight":D,"--n-line-height":C,"--n-th-text-color":x,"--n-td-text-color":M,"--n-th-color":o,"--n-th-color-modal":u,"--n-th-color-popover":w,"--n-td-color":B,"--n-td-color-modal":t,"--n-td-color-popover":S,"--n-border-radius":z,"--n-border-color":j,"--n-border-color-modal":g,"--n-border-color-popover":_}}),i=c?te("descriptions",V(()=>{let s="";const{size:b,bordered:h}=r;return h&&(s+="a"),s+=b[0],s}),p,r):void 0;return{mergedClsPrefix:d,cssVars:c?void 0:p,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender,compitableColumn:re(r,["columns","column"]),inlineThemeDisabled:c}},render(){const r=this.$slots.default,d=r?ne(r()):[],c=d.length,{compitableColumn:n,labelPlacement:p,labelAlign:i,size:s,bordered:b,title:h,cssVars:y,mergedClsPrefix:o,separator:u,onRender:w}=this;w==null||w();const x=d.filter(t=>ue(t));c!==x.length&&le("descriptions","`n-descriptions` only takes `n-descriptions-item` as children.");const D={span:0,row:[],secondRow:[],rows:[]},B=x.reduce((t,S,j)=>{const g=S.props||{},_=x.length-1===j,z=["label"in g?g.label:W(S,"label")],C=[W(S)],v=g.span||1,$=t.span;t.span+=v;const P=g.labelStyle||g["label-style"]||this.labelStyle,I=g.contentStyle||g["content-style"]||this.contentStyle;if(p==="left")b?t.row.push(l("th",{class:`${o}-descriptions-table-header`,colspan:1,style:P},z),l("td",{class:`${o}-descriptions-table-content`,colspan:_?(n-$)*2+1:v*2-1,style:I},C)):t.row.push(l("td",{class:`${o}-descriptions-table-content`,colspan:_?(n-$)*2:v*2},l("span",{class:`${o}-descriptions-table-content__label`,style:P},[...z,u&&l("span",{class:`${o}-descriptions-separator`},u)]),l("span",{class:`${o}-descriptions-table-content__content`,style:I},C)));else{const O=_?(n-$)*2:v*2;t.row.push(l("th",{class:`${o}-descriptions-table-header`,colspan:O,style:P},z)),t.secondRow.push(l("td",{class:`${o}-descriptions-table-content`,colspan:O,style:I},C))}return(t.span>=n||_)&&(t.span=0,t.row.length&&(t.rows.push(t.row),t.row=[]),p!=="left"&&t.secondRow.length&&(t.rows.push(t.secondRow),t.secondRow=[])),t},D).rows.map(t=>l("tr",{class:`${o}-descriptions-table-row`},t));return l("div",{style:y,class:[`${o}-descriptions`,this.themeClass,`${o}-descriptions--${p}-label-placement`,`${o}-descriptions--${i}-label-align`,`${o}-descriptions--${s}-size`,b&&`${o}-descriptions--bordered`]},h||this.$slots.header?l("div",{class:`${o}-descriptions-header`},h||se(this,"header")):null,l("div",{class:`${o}-descriptions-table-wrapper`},l("table",{class:`${o}-descriptions-table`},l("tbody",null,B))))}});const fe={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]};var _e=E({name:"DescriptionsItem",[U]:!0,props:fe,render(){return null}});const ve={class:"about"},ye={name:"About"},we=E({...ye,setup(r){let d=N({}),c=N({});return ae(async()=>{const n=await{"../../../package.json":()=>de(()=>import("./package-8480fb11.js"),[])}["../../../package.json"]();d.value=n.dependencies,c.value=n.devDependencies}),(n,p)=>{const i=_e,s=me,b=ce,h=pe,y=be;return A(),F("div",ve,[f(y,{cols:1,"y-gap":"12"},{default:a(()=>[f(h,null,{default:a(()=>[f(b,{title:"\u751F\u4EA7\u73AF\u5883\u4F9D\u8D56"},{default:a(()=>[f(s,{"label-placement":"left",column:3,bordered:""},{default:a(()=>[(A(!0),F(G,null,H(d.value,(o,u)=>(A(),K(i,{key:u},{label:a(()=>[J(R(u),1)]),default:a(()=>[Q("span",null,R(o),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),f(h,null,{default:a(()=>[f(b,{title:"\u5F00\u53D1\u73AF\u5883\u4F9D\u8D56"},{default:a(()=>[f(s,{"label-placement":"left",column:3,bordered:""},{default:a(()=>[(A(!0),F(G,null,H(c.value,(o,u)=>(A(),K(i,{key:u},{label:a(()=>[J(R(u),1)]),default:a(()=>[Q("span",null,R(o),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})])}}});var ze=ie(we,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/other-pages/about.vue"]]);export{ze as default};
