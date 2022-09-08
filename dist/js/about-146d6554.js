import{a1 as g,$ as e,aH as U,a2 as P,a0 as O,ar as X,as as Y,d as F,J as Z,a6 as W,c as V,a7 as ee,cj as oe,P as te,B as l,Q as re,ck as ne,av as I,a as L,bl as le,cc as se,b as k,e as T,f as _,g as c,F as N,h as H,k as ie,aj as G,am as J,l as R,i as K}from"../assets/index.c2091c65.js";import{_ as ae}from"./GridItem-90b32be5.js";import{_ as de}from"./Grid-22423f04.js";function Q(r,p="default",s=[]){const{children:n}=r;if(n!==null&&typeof n=="object"&&!Array.isArray(n)){const h=n[p];if(typeof h=="function")return h()}return s}const q=Symbol("DESCRIPTION_ITEM_FLAG");function ce(r){return typeof r=="object"&&r&&!Array.isArray(r)?r.type&&r.type[q]:!1}var pe=g([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),U("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[g("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),P("left-label-placement",[e("descriptions-table-content",[g("> *",{verticalAlign:"top"})])]),P("left-label-align",[g("th",{textAlign:"left"})]),P("center-label-align",[g("th",{textAlign:"center"})]),P("right-label-align",[g("th",{textAlign:"right"})]),P("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[g("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
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
 `,[O("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),O("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),X(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Y(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]);const be=Object.assign(Object.assign({},W.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]});var ue=F({name:"Descriptions",props:be,setup(r){const{mergedClsPrefixRef:p,inlineThemeDisabled:s}=Z(r),n=W("Descriptions","-descriptions",pe,ne,r,p),h=V(()=>{const{size:i,bordered:b}=r,{common:{cubicBezierEaseInOut:m},self:{titleTextColor:t,thColor:f,thColorModal:d,thColorPopover:A,thTextColor:D,thFontWeight:E,tdTextColor:B,tdColor:o,tdColorModal:w,tdColorPopover:j,borderColor:u,borderColorModal:v,borderColorPopover:x,borderRadius:S,lineHeight:y,[I("fontSize",i)]:C,[I(b?"thPaddingBordered":"thPadding",i)]:z,[I(b?"tdPaddingBordered":"tdPadding",i)]:$}}=n.value;return{"--n-title-text-color":t,"--n-th-padding":z,"--n-td-padding":$,"--n-font-size":C,"--n-bezier":m,"--n-th-font-weight":E,"--n-line-height":y,"--n-th-text-color":D,"--n-td-text-color":B,"--n-th-color":f,"--n-th-color-modal":d,"--n-th-color-popover":A,"--n-td-color":o,"--n-td-color-modal":w,"--n-td-color-popover":j,"--n-border-radius":S,"--n-border-color":u,"--n-border-color-modal":v,"--n-border-color-popover":x}}),a=s?ee("descriptions",V(()=>{let i="";const{size:b,bordered:m}=r;return m&&(i+="a"),i+=b[0],i}),h,r):void 0;return{mergedClsPrefix:p,cssVars:s?void 0:h,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender,compitableColumn:oe(r,["columns","column"]),inlineThemeDisabled:s}},render(){const r=this.$slots.default,p=r?te(r()):[];p.length;const{compitableColumn:s,labelPlacement:n,labelAlign:h,size:a,bordered:i,title:b,cssVars:m,mergedClsPrefix:t,separator:f,onRender:d}=this;d==null||d();const A=p.filter(o=>ce(o)),D={span:0,row:[],secondRow:[],rows:[]},B=A.reduce((o,w,j)=>{const u=w.props||{},v=A.length-1===j,x=["label"in u?u.label:Q(w,"label")],S=[Q(w)],y=u.span||1,C=o.span;o.span+=y;const z=u.labelStyle||u["label-style"]||this.labelStyle,$=u.contentStyle||u["content-style"]||this.contentStyle;if(n==="left")i?o.row.push(l("th",{class:`${t}-descriptions-table-header`,colspan:1,style:z},x),l("td",{class:`${t}-descriptions-table-content`,colspan:v?(s-C)*2+1:y*2-1,style:$},S)):o.row.push(l("td",{class:`${t}-descriptions-table-content`,colspan:v?(s-C)*2:y*2},l("span",{class:`${t}-descriptions-table-content__label`,style:z},[...x,f&&l("span",{class:`${t}-descriptions-separator`},f)]),l("span",{class:`${t}-descriptions-table-content__content`,style:$},S)));else{const M=v?(s-C)*2:y*2;o.row.push(l("th",{class:`${t}-descriptions-table-header`,colspan:M,style:z},x)),o.secondRow.push(l("td",{class:`${t}-descriptions-table-content`,colspan:M,style:$},S))}return(o.span>=s||v)&&(o.span=0,o.row.length&&(o.rows.push(o.row),o.row=[]),n!=="left"&&o.secondRow.length&&(o.rows.push(o.secondRow),o.secondRow=[])),o},D).rows.map(o=>l("tr",{class:`${t}-descriptions-table-row`},o));return l("div",{style:m,class:[`${t}-descriptions`,this.themeClass,`${t}-descriptions--${n}-label-placement`,`${t}-descriptions--${h}-label-align`,`${t}-descriptions--${a}-size`,i&&`${t}-descriptions--bordered`]},b||this.$slots.header?l("div",{class:`${t}-descriptions-header`},b||re(this,"header")):null,l("div",{class:`${t}-descriptions-table-wrapper`},l("table",{class:`${t}-descriptions-table`},l("tbody",null,B))))}});const ge={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]};var he=F({name:"DescriptionsItem",[q]:!0,props:ge,render(){return null}});const me={class:"about"},fe={name:"About"},we=F({...fe,setup(r){let p=L({}),s=L({});return le(async()=>{const n=await{"../../../package.json":()=>se(()=>import("./package-5414dabc.js"),[])}["../../../package.json"]();p.value=n.dependencies,s.value=n.devDependencies}),(n,h)=>{const a=he,i=ue,b=ie,m=ae,t=de;return k(),T("div",me,[_(t,{cols:1,"y-gap":"12"},{default:c(()=>[_(m,null,{default:c(()=>[_(b,{title:"\u751F\u4EA7\u73AF\u5883\u4F9D\u8D56"},{default:c(()=>[_(i,{"label-placement":"left",column:3,bordered:""},{default:c(()=>[(k(!0),T(N,null,H(p.value,(f,d)=>(k(),G(a,{key:d},{label:c(()=>[J(R(d),1)]),default:c(()=>[K("span",null,R(f),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),_(m,null,{default:c(()=>[_(b,{title:"\u5F00\u53D1\u73AF\u5883\u4F9D\u8D56"},{default:c(()=>[_(i,{"label-placement":"left",column:3,bordered:""},{default:c(()=>[(k(!0),T(N,null,H(s.value,(f,d)=>(k(),G(a,{key:d},{label:c(()=>[J(R(d),1)]),default:c(()=>[K("span",null,R(f),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})])}}});export{we as default};
