import{L as m,J as e,aH as Y,M as R,K as V,ap as Z,aq as ee,d as B,G as oe,R as U,g as F,S as te,bQ as re,T as ne,ba as se,h as s,bR as le,bS as ie,aK as M,f as N,o as ae,bq as de,j as k,k as O,l as f,m as d,F as q,n as G,q as H,s as ce,a7 as K,aa as J,x as A,p as Q,_ as pe}from"../assets/index-5b64e5b7.js";import{_ as be,a as he}from"./Grid-18e6bf2a.js";function W(r,c="default",p=[]){const{children:n}=r;if(n!==null&&typeof n=="object"&&!Array.isArray(n)){const l=n[c];if(typeof l=="function")return l()}return p}const X="DESCRIPTION_ITEM_FLAG";function ge(r){return typeof r=="object"&&r&&!Array.isArray(r)?r.type&&r.type[X]:!1}const ue=m([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),Y("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[m("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),R("left-label-placement",[e("descriptions-table-content",[m("> *",{verticalAlign:"top"})])]),R("left-label-align",[m("th",{textAlign:"left"})]),R("center-label-align",[m("th",{textAlign:"center"})]),R("right-label-align",[m("th",{textAlign:"right"})]),R("bordered",[e("descriptions-table-wrapper",`
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
 `,[V("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),V("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),Z(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),ee(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),me=Object.assign(Object.assign({},U.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),fe=B({name:"Descriptions",props:me,setup(r){const{mergedClsPrefixRef:c,inlineThemeDisabled:p}=oe(r),n=U("Descriptions","-descriptions",ue,ie,r,c),l=F(()=>{const{size:i,bordered:b}=r,{common:{cubicBezierEaseInOut:g},self:{titleTextColor:y,thColor:o,thColorModal:h,thColorPopover:w,thTextColor:x,thFontWeight:T,tdTextColor:E,tdColor:j,tdColorModal:t,tdColorPopover:S,borderColor:I,borderColorModal:u,borderColorPopover:_,borderRadius:z,lineHeight:C,[M("fontSize",i)]:v,[M(b?"thPaddingBordered":"thPadding",i)]:$,[M(b?"tdPaddingBordered":"tdPadding",i)]:P}}=n.value;return{"--n-title-text-color":y,"--n-th-padding":$,"--n-td-padding":P,"--n-font-size":v,"--n-bezier":g,"--n-th-font-weight":T,"--n-line-height":C,"--n-th-text-color":x,"--n-td-text-color":E,"--n-th-color":o,"--n-th-color-modal":h,"--n-th-color-popover":w,"--n-td-color":j,"--n-td-color-modal":t,"--n-td-color-popover":S,"--n-border-radius":z,"--n-border-color":I,"--n-border-color-modal":u,"--n-border-color-popover":_}}),a=p?te("descriptions",F(()=>{let i="";const{size:b,bordered:g}=r;return g&&(i+="a"),i+=b[0],i}),l,r):void 0;return{mergedClsPrefix:c,cssVars:p?void 0:l,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender,compitableColumn:re(r,["columns","column"]),inlineThemeDisabled:p}},render(){const r=this.$slots.default,c=r?ne(r()):[],p=c.length,{compitableColumn:n,labelPlacement:l,labelAlign:a,size:i,bordered:b,title:g,cssVars:y,mergedClsPrefix:o,separator:h,onRender:w}=this;w==null||w();const x=c.filter(t=>ge(t));p!==x.length&&se("descriptions","`n-descriptions` only takes `n-descriptions-item` as children.");const T={span:0,row:[],secondRow:[],rows:[]},j=x.reduce((t,S,I)=>{const u=S.props||{},_=x.length-1===I,z=["label"in u?u.label:W(S,"label")],C=[W(S)],v=u.span||1,$=t.span;t.span+=v;const P=u.labelStyle||u["label-style"]||this.labelStyle,D=u.contentStyle||u["content-style"]||this.contentStyle;if(l==="left")b?t.row.push(s("th",{class:`${o}-descriptions-table-header`,colspan:1,style:P},z),s("td",{class:`${o}-descriptions-table-content`,colspan:_?(n-$)*2+1:v*2-1,style:D},C)):t.row.push(s("td",{class:`${o}-descriptions-table-content`,colspan:_?(n-$)*2:v*2},s("span",{class:`${o}-descriptions-table-content__label`,style:P},[...z,h&&s("span",{class:`${o}-descriptions-separator`},h)]),s("span",{class:`${o}-descriptions-table-content__content`,style:D},C)));else{const L=_?(n-$)*2:v*2;t.row.push(s("th",{class:`${o}-descriptions-table-header`,colspan:L,style:P},z)),t.secondRow.push(s("td",{class:`${o}-descriptions-table-content`,colspan:L,style:D},C))}return(t.span>=n||_)&&(t.span=0,t.row.length&&(t.rows.push(t.row),t.row=[]),l!=="left"&&t.secondRow.length&&(t.rows.push(t.secondRow),t.secondRow=[])),t},T).rows.map(t=>s("tr",{class:`${o}-descriptions-table-row`},t));return s("div",{style:y,class:[`${o}-descriptions`,this.themeClass,`${o}-descriptions--${l}-label-placement`,`${o}-descriptions--${a}-label-align`,`${o}-descriptions--${i}-size`,b&&`${o}-descriptions--bordered`]},g||this.$slots.header?s("div",{class:`${o}-descriptions-header`},g||le(this,"header")):null,s("div",{class:`${o}-descriptions-table-wrapper`},s("table",{class:`${o}-descriptions-table`},s("tbody",null,j))))}}),_e={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},ve=B({name:"DescriptionsItem",[X]:!0,props:_e,render(){return null}}),ye={class:"about"},we=B({name:"About"}),xe=B({...we,setup(r){const c=N({}),p=N({});return ae(async()=>{const n=Object.assign({"../../../package.json":()=>de(()=>import("./package-e96ae1d1.js"),[])})["../../../package.json"],l=await n();c.value=l.dependencies,p.value=l.devDependencies}),(n,l)=>{const a=ve,i=fe,b=ce,g=be,y=he;return k(),O("div",ye,[f(y,{cols:1,"y-gap":"12"},{default:d(()=>[f(g,null,{default:d(()=>[f(b,{title:"生产环境依赖"},{default:d(()=>[f(i,{"label-placement":"left",column:3,bordered:""},{default:d(()=>[(k(!0),O(q,null,G(H(c),(o,h)=>(k(),K(a,{key:h},{label:d(()=>[J(A(h),1)]),default:d(()=>[Q("span",null,A(o),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),f(g,null,{default:d(()=>[f(b,{title:"开发环境依赖"},{default:d(()=>[f(i,{"label-placement":"left",column:3,bordered:""},{default:d(()=>[(k(!0),O(q,null,G(H(p),(o,h)=>(k(),K(a,{key:h},{label:d(()=>[J(A(h),1)]),default:d(()=>[Q("span",null,A(o),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})])}}}),Ce=pe(xe,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/other-pages/about.vue"]]);export{Ce as default};
