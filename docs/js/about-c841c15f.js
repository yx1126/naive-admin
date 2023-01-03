import{a5 as m,a3 as e,aQ as J,a6 as k,a4 as L,aR as Y,aS as Z,d as D,N as ee,ab as W,cE as oe,g as V,aX as I,ad as te,cF as re,T as ne,aH as le,h as l,U as se,f as N,o as ie,cs as ae,j as R,k as E,l as f,m as d,F as H,n as G,s as de,an as q,aq as K,x as A,p as Q,_ as ce}from"../assets/index.dfdd9c17.js";import{_ as pe,a as be}from"./Grid-06d0c95e.js";function U(r,c="default",p=[]){const{children:n}=r;if(n!==null&&typeof n=="object"&&!Array.isArray(n)){const s=n[c];if(typeof s=="function")return s()}return p}const X="DESCRIPTION_ITEM_FLAG";function ue(r){return typeof r=="object"&&r&&!Array.isArray(r)?r.type&&r.type[X]:!1}const he=m([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),J("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[m("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),k("left-label-placement",[e("descriptions-table-content",[m("> *",{verticalAlign:"top"})])]),k("left-label-align",[m("th",{textAlign:"left"})]),k("center-label-align",[m("th",{textAlign:"center"})]),k("right-label-align",[m("th",{textAlign:"right"})]),k("bordered",[e("descriptions-table-wrapper",`
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
 `))]),ge=Object.assign(Object.assign({},W.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),me=D({name:"Descriptions",props:ge,setup(r){const{mergedClsPrefixRef:c,inlineThemeDisabled:p}=ee(r),n=W("Descriptions","-descriptions",he,oe,r,c),s=V(()=>{const{size:i,bordered:b}=r,{common:{cubicBezierEaseInOut:h},self:{titleTextColor:y,thColor:o,thColorModal:u,thColorPopover:w,thTextColor:x,thFontWeight:B,tdTextColor:O,tdColor:T,tdColorModal:t,tdColorPopover:S,borderColor:j,borderColorModal:g,borderColorPopover:_,borderRadius:z,lineHeight:C,[I("fontSize",i)]:v,[I(b?"thPaddingBordered":"thPadding",i)]:$,[I(b?"tdPaddingBordered":"tdPadding",i)]:P}}=n.value;return{"--n-title-text-color":y,"--n-th-padding":$,"--n-td-padding":P,"--n-font-size":v,"--n-bezier":h,"--n-th-font-weight":B,"--n-line-height":C,"--n-th-text-color":x,"--n-td-text-color":O,"--n-th-color":o,"--n-th-color-modal":u,"--n-th-color-popover":w,"--n-td-color":T,"--n-td-color-modal":t,"--n-td-color-popover":S,"--n-border-radius":z,"--n-border-color":j,"--n-border-color-modal":g,"--n-border-color-popover":_}}),a=p?te("descriptions",V(()=>{let i="";const{size:b,bordered:h}=r;return h&&(i+="a"),i+=b[0],i}),s,r):void 0;return{mergedClsPrefix:c,cssVars:p?void 0:s,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender,compitableColumn:re(r,["columns","column"]),inlineThemeDisabled:p}},render(){const r=this.$slots.default,c=r?ne(r()):[],p=c.length,{compitableColumn:n,labelPlacement:s,labelAlign:a,size:i,bordered:b,title:h,cssVars:y,mergedClsPrefix:o,separator:u,onRender:w}=this;w==null||w();const x=c.filter(t=>ue(t));p!==x.length&&le("descriptions","`n-descriptions` only takes `n-descriptions-item` as children.");const B={span:0,row:[],secondRow:[],rows:[]},T=x.reduce((t,S,j)=>{const g=S.props||{},_=x.length-1===j,z=["label"in g?g.label:U(S,"label")],C=[U(S)],v=g.span||1,$=t.span;t.span+=v;const P=g.labelStyle||g["label-style"]||this.labelStyle,F=g.contentStyle||g["content-style"]||this.contentStyle;if(s==="left")b?t.row.push(l("th",{class:`${o}-descriptions-table-header`,colspan:1,style:P},z),l("td",{class:`${o}-descriptions-table-content`,colspan:_?(n-$)*2+1:v*2-1,style:F},C)):t.row.push(l("td",{class:`${o}-descriptions-table-content`,colspan:_?(n-$)*2:v*2},l("span",{class:`${o}-descriptions-table-content__label`,style:P},[...z,u&&l("span",{class:`${o}-descriptions-separator`},u)]),l("span",{class:`${o}-descriptions-table-content__content`,style:F},C)));else{const M=_?(n-$)*2:v*2;t.row.push(l("th",{class:`${o}-descriptions-table-header`,colspan:M,style:P},z)),t.secondRow.push(l("td",{class:`${o}-descriptions-table-content`,colspan:M,style:F},C))}return(t.span>=n||_)&&(t.span=0,t.row.length&&(t.rows.push(t.row),t.row=[]),s!=="left"&&t.secondRow.length&&(t.rows.push(t.secondRow),t.secondRow=[])),t},B).rows.map(t=>l("tr",{class:`${o}-descriptions-table-row`},t));return l("div",{style:y,class:[`${o}-descriptions`,this.themeClass,`${o}-descriptions--${s}-label-placement`,`${o}-descriptions--${a}-label-align`,`${o}-descriptions--${i}-size`,b&&`${o}-descriptions--bordered`]},h||this.$slots.header?l("div",{class:`${o}-descriptions-header`},h||se(this,"header")):null,l("div",{class:`${o}-descriptions-table-wrapper`},l("table",{class:`${o}-descriptions-table`},l("tbody",null,T))))}}),fe={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},_e=D({name:"DescriptionsItem",[X]:!0,props:fe,render(){return null}}),ve={class:"about"},ye=D({name:"About"}),we=D({...ye,setup(r){let c=N({}),p=N({});return ie(async()=>{const n=Object.assign({"../../../package.json":()=>ae(()=>import("./package-f06cfaa1.js"),[])})["../../../package.json"],s=await n();c.value=s.dependencies,p.value=s.devDependencies}),(n,s)=>{const a=_e,i=me,b=de,h=be,y=pe;return R(),E("div",ve,[f(y,{cols:1,"y-gap":"12"},{default:d(()=>[f(h,null,{default:d(()=>[f(b,{title:"\u751F\u4EA7\u73AF\u5883\u4F9D\u8D56"},{default:d(()=>[f(i,{"label-placement":"left",column:3,bordered:""},{default:d(()=>[(R(!0),E(H,null,G(c.value,(o,u)=>(R(),q(a,{key:u},{label:d(()=>[K(A(u),1)]),default:d(()=>[Q("span",null,A(o),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),f(h,null,{default:d(()=>[f(b,{title:"\u5F00\u53D1\u73AF\u5883\u4F9D\u8D56"},{default:d(()=>[f(i,{"label-placement":"left",column:3,bordered:""},{default:d(()=>[(R(!0),E(H,null,G(p.value,(o,u)=>(R(),q(a,{key:u},{label:d(()=>[K(A(u),1)]),default:d(()=>[Q("span",null,A(o),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})])}}}),ze=ce(we,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/other-pages/about.vue"]]);export{ze as default};
