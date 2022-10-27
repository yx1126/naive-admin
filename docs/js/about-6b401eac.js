import{a1 as m,$ as e,aM as X,a2 as k,a0 as L,aN as Y,aO as Z,d as R,J as ee,a7 as q,cA as oe,c as V,aT as O,a9 as te,cB as re,P as ne,aD as le,G as l,Q as se,a as N,a_ as ie,co as ae,b as A,e as F,f,g as d,F as G,h as H,_ as de,aj as J,am as K,k as D,i as Q,m as ce}from"../assets/index.86ed0bcc.js";import{_ as pe,a as be}from"./Grid-89b9fae7.js";function W(r,c="default",p=[]){const{children:n}=r;if(n!==null&&typeof n=="object"&&!Array.isArray(n)){const s=n[c];if(typeof s=="function")return s()}return p}const U="DESCRIPTION_ITEM_FLAG";function ue(r){return typeof r=="object"&&r&&!Array.isArray(r)?r.type&&r.type[U]:!1}const he=m([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
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
 `))]),ge=Object.assign(Object.assign({},q.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),me=R({name:"Descriptions",props:ge,setup(r){const{mergedClsPrefixRef:c,inlineThemeDisabled:p}=ee(r),n=q("Descriptions","-descriptions",he,oe,r,c),s=V(()=>{const{size:i,bordered:b}=r,{common:{cubicBezierEaseInOut:h},self:{titleTextColor:y,thColor:o,thColorModal:u,thColorPopover:w,thTextColor:x,thFontWeight:B,tdTextColor:M,tdColor:T,tdColorModal:t,tdColorPopover:S,borderColor:j,borderColorModal:g,borderColorPopover:_,borderRadius:z,lineHeight:C,[O("fontSize",i)]:v,[O(b?"thPaddingBordered":"thPadding",i)]:$,[O(b?"tdPaddingBordered":"tdPadding",i)]:P}}=n.value;return{"--n-title-text-color":y,"--n-th-padding":$,"--n-td-padding":P,"--n-font-size":v,"--n-bezier":h,"--n-th-font-weight":B,"--n-line-height":C,"--n-th-text-color":x,"--n-td-text-color":M,"--n-th-color":o,"--n-th-color-modal":u,"--n-th-color-popover":w,"--n-td-color":T,"--n-td-color-modal":t,"--n-td-color-popover":S,"--n-border-radius":z,"--n-border-color":j,"--n-border-color-modal":g,"--n-border-color-popover":_}}),a=p?te("descriptions",V(()=>{let i="";const{size:b,bordered:h}=r;return h&&(i+="a"),i+=b[0],i}),s,r):void 0;return{mergedClsPrefix:c,cssVars:p?void 0:s,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender,compitableColumn:re(r,["columns","column"]),inlineThemeDisabled:p}},render(){const r=this.$slots.default,c=r?ne(r()):[],p=c.length,{compitableColumn:n,labelPlacement:s,labelAlign:a,size:i,bordered:b,title:h,cssVars:y,mergedClsPrefix:o,separator:u,onRender:w}=this;w==null||w();const x=c.filter(t=>ue(t));p!==x.length&&le("descriptions","`n-descriptions` only takes `n-descriptions-item` as children.");const B={span:0,row:[],secondRow:[],rows:[]},T=x.reduce((t,S,j)=>{const g=S.props||{},_=x.length-1===j,z=["label"in g?g.label:W(S,"label")],C=[W(S)],v=g.span||1,$=t.span;t.span+=v;const P=g.labelStyle||g["label-style"]||this.labelStyle,I=g.contentStyle||g["content-style"]||this.contentStyle;if(s==="left")b?t.row.push(l("th",{class:`${o}-descriptions-table-header`,colspan:1,style:P},z),l("td",{class:`${o}-descriptions-table-content`,colspan:_?(n-$)*2+1:v*2-1,style:I},C)):t.row.push(l("td",{class:`${o}-descriptions-table-content`,colspan:_?(n-$)*2:v*2},l("span",{class:`${o}-descriptions-table-content__label`,style:P},[...z,u&&l("span",{class:`${o}-descriptions-separator`},u)]),l("span",{class:`${o}-descriptions-table-content__content`,style:I},C)));else{const E=_?(n-$)*2:v*2;t.row.push(l("th",{class:`${o}-descriptions-table-header`,colspan:E,style:P},z)),t.secondRow.push(l("td",{class:`${o}-descriptions-table-content`,colspan:E,style:I},C))}return(t.span>=n||_)&&(t.span=0,t.row.length&&(t.rows.push(t.row),t.row=[]),s!=="left"&&t.secondRow.length&&(t.rows.push(t.secondRow),t.secondRow=[])),t},B).rows.map(t=>l("tr",{class:`${o}-descriptions-table-row`},t));return l("div",{style:y,class:[`${o}-descriptions`,this.themeClass,`${o}-descriptions--${s}-label-placement`,`${o}-descriptions--${a}-label-align`,`${o}-descriptions--${i}-size`,b&&`${o}-descriptions--bordered`]},h||this.$slots.header?l("div",{class:`${o}-descriptions-header`},h||se(this,"header")):null,l("div",{class:`${o}-descriptions-table-wrapper`},l("table",{class:`${o}-descriptions-table`},l("tbody",null,T))))}}),fe={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},_e=R({name:"DescriptionsItem",[U]:!0,props:fe,render(){return null}}),ve={class:"about"},ye=R({name:"About"}),we=R({...ye,setup(r){let c=N({}),p=N({});return ie(async()=>{const n=Object.assign({"../../../package.json":()=>ae(()=>import("./package-24f3b0cf.js"),[])})["../../../package.json"],s=await n();c.value=s.dependencies,p.value=s.devDependencies}),(n,s)=>{const a=_e,i=me,b=de,h=be,y=pe;return A(),F("div",ve,[f(y,{cols:1,"y-gap":"12"},{default:d(()=>[f(h,null,{default:d(()=>[f(b,{title:"\u751F\u4EA7\u73AF\u5883\u4F9D\u8D56"},{default:d(()=>[f(i,{"label-placement":"left",column:3,bordered:""},{default:d(()=>[(A(!0),F(G,null,H(c.value,(o,u)=>(A(),J(a,{key:u},{label:d(()=>[K(D(u),1)]),default:d(()=>[Q("span",null,D(o),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),f(h,null,{default:d(()=>[f(b,{title:"\u5F00\u53D1\u73AF\u5883\u4F9D\u8D56"},{default:d(()=>[f(i,{"label-placement":"left",column:3,bordered:""},{default:d(()=>[(A(!0),F(G,null,H(p.value,(o,u)=>(A(),J(a,{key:u},{label:d(()=>[K(D(u),1)]),default:d(()=>[Q("span",null,D(o),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})])}}}),ze=ce(we,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/other-pages/about.vue"]]);export{ze as default};
