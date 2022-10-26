import{$ as V,aS as te,a1 as R,a2 as O,a0 as W,d as A,J as be,bN as ve,L as le,ca as ye,ah as we,B as j,b as x,e as z,i as b,bj as Ce,cb as $e,a as B,c as y,bw as ne,aN as re,p as q,bv as xe,_ as J,bp as G,f as o,cc as ie,g as n,O as Se,n as de,ao as K,m as Q,q as Be,bo as $,aj as H,am as M,bq as Te,F as Re,h as ze,l as oe,aC as Fe,bt as Oe,bx as ce,bs as ue,z as Ae,bz as Ne,j as E,cd as se,ak as Ee}from"../assets/index.fad64095.js";import{_ as Ie}from"./CodeCard-8e53b603.js";import{u as Pe,F as Ue}from"./use-fullscreen-a6e50651.js";import{_ as pe}from"./Checkbox-5ca7fd49.js";import{_ as he,P as De}from"./PlusOutlined-392bf368.js";import{E as Le,D as Ve,a as je,C as Me}from"./EditOutlined-991e8d7d.js";import{F as We,R as Ge}from"./ReloadOutlined-96698e3f.js";import{_ as fe}from"./Dropdown-4e1f87e6.js";import{c as Je}from"./index-d95ae7da.js";import"./RadioGroup-3e99b0aa.js";import"./ChevronRight-b9954327.js";import"./Pagination-b1e49471.js";import"./Forward-8880911d.js";import"./create-ref-setter-04566897.js";const p="0!important",me="-1px!important";function I(e){return O(e+"-type",[R("& +",[V("button",{},[O(e+"-type",[W("border",{borderLeftWidth:p}),W("state-border",{left:me})])])])])}function P(e){return O(e+"-type",[R("& +",[V("button",[O(e+"-type",[W("border",{borderTopWidth:p}),W("state-border",{top:me})])])])])}var Ke=V("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[te("vertical",{flexDirection:"row"},[te("rtl",[V("button",[R("&:first-child:not(:last-child)",`
 margin-right: ${p};
 border-top-right-radius: ${p};
 border-bottom-right-radius: ${p};
 `),R("&:last-child:not(:first-child)",`
 margin-left: ${p};
 border-top-left-radius: ${p};
 border-bottom-left-radius: ${p};
 `),R("&:not(:first-child):not(:last-child)",`
 margin-left: ${p};
 margin-right: ${p};
 border-radius: ${p};
 `),I("default"),O("ghost",[I("primary"),I("info"),I("success"),I("warning"),I("error")])])])]),O("vertical",{flexDirection:"column"},[V("button",[R("&:first-child:not(:last-child)",`
 margin-bottom: ${p};
 margin-left: ${p};
 margin-right: ${p};
 border-bottom-left-radius: ${p};
 border-bottom-right-radius: ${p};
 `),R("&:last-child:not(:first-child)",`
 margin-top: ${p};
 margin-left: ${p};
 margin-right: ${p};
 border-top-left-radius: ${p};
 border-top-right-radius: ${p};
 `),R("&:not(:first-child):not(:last-child)",`
 margin: ${p};
 border-radius: ${p};
 `),P("default"),O("ghost",[P("primary"),P("info"),P("success"),P("warning"),P("error")])])])]);const He={size:{type:String,default:void 0},vertical:Boolean};var qe=A({name:"ButtonGroup",props:He,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:h}=be(e);return ve("-button-group",Ke,t),le(ye,e),{rtlEnabled:we("ButtonGroup",h,t),mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return j("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}});const Qe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Xe=b("path",{d:"M762 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8zm-508 0v72.4c0 9.5 4.2 18.4 11.4 24.5L564.6 512L265.4 763.1c-7.2 6.1-11.4 15-11.4 24.5V860c0 6.8 7.9 10.5 13.1 6.1L689 512L267.1 157.9A7.95 7.95 0 0 0 254 164z",fill:"currentColor"},null,-1),Ye=[Xe];var Ze=A({name:"VerticalLeftOutlined",render:function(t,h){return x(),z("svg",Qe,Ye)}});const et={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},tt=b("path",{d:"M326 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8zm444 72.4V164c0-6.8-7.9-10.5-13.1-6.1L335 512l421.9 354.1c5.2 4.4 13.1.7 13.1-6.1v-72.4c0-9.4-4.2-18.4-11.4-24.5L459.4 512l299.2-251.1c7.2-6.1 11.4-15.1 11.4-24.5z",fill:"currentColor"},null,-1),nt=[tt];var ot=A({name:"VerticalRightOutlined",render:function(t,h){return x(),z("svg",et,nt)}});function st(e=1,t=10,h=0){const s=Ce({page:e,size:t,total:h}),u={...$e(s),setPage(m){return s.page=m,u},setSize(m){return s.size=m,u},setTotal(m){return s.total=m,u}};return u}function ae(e){return e==null?void 0:e.map(t=>({hidden:!1,fixed:!1,...t}))}function at(e){const t=B(ae(e.columns)),h=B(!!e.showCheck),s=B(!!e.showIndex);function u(){h.value=!!e.showCheck,s.value=!!e.showIndex,t.value=ae(e.columns)}const m=y(()=>(t.value||[]).reduce((c,i)=>(i.fixed==="left"?c.left.push(i):i.fixed==="right"?c.right.push(i):c.middle.push(i),c),{left:[],middle:[],right:[]})),g=y(()=>{const{columns:c,pagination:i,page:v,size:w,showCheck:l,showIndex:d}=e;if(!c)return;const{left:a,middle:r,right:_}=m.value,F=[...a,...r,..._].filter(T=>!T.hidden),U=(c||[]).some(T=>T.type==="selection"),D=i!==!1&&v>0?(v-1)*w:0;return s.value&&F.unshift({title:"\u5E8F\u53F7",key:"index",align:"center",fixed:a.length>0||ne(d)?"left":!1,width:80,render:(T,N)=>j("span",D+N+1)}),h.value&&!U&&F.unshift({type:"selection",fixed:d==="left"||a.length>0||ne(l)?"left":!1}),F});return{baseColumns:t,columns:g,showCheck:h,showIndex:s,reset:u}}const lt={columns:{type:Array,default:void 0},pagination:{type:[Boolean,Object],default:!0},page:{type:Number,default:1},size:{type:Number,default:10},total:{type:Number,default:0},loading:{type:Boolean,default:void 0},showCheck:{type:[Boolean,String],default:!1},showIndex:{type:[Boolean,String],default:!1},striped:{type:Boolean,default:!1}};const rt=A({name:"TableRender",components:{NDataTable:he,NEmpty:re},inheritAttrs:!1,props:lt,emits:["update:page","update:size","page-change"],setup(e,{emit:t,expose:h}){const s=B(),u=B(null),m=q(),{isFullScreen:g,toggle:c}=Pe(s),{baseColumns:i,columns:v,showCheck:w,showIndex:l,reset:d}=at(e),a=B("medium"),r=B(e.striped),_=y(()=>({"--icon-hover-color":m.themeColor,"--table-wrapper-back":m.navMode==="diablo"?"":"#fff"}));le(_e,{columns:i,size:a,showStriped:r,isFullScreen:g,showCheck:w,showIndex:l,toggleFull:c,reset:d,setFixed:U,setValue:T,onUpdateCheckAll:D});const F=y(()=>{const{pagination:f,page:k,size:S,total:ke}=e,ee=Object.assign({page:k,pageSize:S,itemCount:ke,pageSizes:[10,20,30,40,50,100],pageSlot:7,showSizePicker:!0,showQuickJumper:!0,prefix:({itemCount:L})=>j("span",null,`\u5171${L}\u6761`),onUpdatePage:L=>{t("update:page",L),t("page-change")},onUpdatePageSize:L=>{t("update:size",L),t("page-change")}},f);return xe(f)?f?ee:!1:ee});function U(f,k){!i.value||(i.value[k].fixed=f)}function D(f,k){if(!!i.value){if(k!==void 0){i.value[k].hidden=f;return}i.value.forEach(S=>{S.hidden=f})}}function T(f,k){switch(f){case"size":a.value=k;break;case"showCheck":w.value=k;break;case"showIndex":l.value=k;break;case"showStriped":r.value=k;break}}function N(){var f;(f=u.value)==null||f.clearFilters()}function C(){var f;(f=u.value)==null||f.clearSorter()}function X(f){var k;(k=u.value)==null||k.filters(f)}function Y(f,k){var S;(S=u.value)==null||S.scrollTo(f,k)}function Z(f,k){var S;(S=u.value)==null||S.sort(f,k)}return h({clearFilters:N,clearSorter:C,filters:X,scrollTo:Y,sort:Z}),{basicTableWrapperRef:s,dataTableRef:u,columns:v,tableSize:a,showStriped:r,basicTableStyle:_,defaultPagination:F,clearFilters:N,clearSorter:C,filters:X,scrollTo:Y,sort:Z}}}),it={key:0,class:"table-render-empty"},dt={class:"table-render"};function ct(e,t,h,s,u,m){var i;const g=re,c=he;return x(),z("div",{ref:"basicTableWrapperRef",class:"table-render-wrapper",style:de(e.basicTableStyle)},[G(e.$slots,"tool"),e.columns&&((i=e.columns)==null?void 0:i.length)<=0?(x(),z("div",it,[o(g,{description:"\u6682\u65E0\u5217\u6570\u636E"})])):ie("v-if",!0),b("div",dt,[o(c,Se({ref:"dataTableRef",remote:"",columns:e.columns,striped:e.showStriped,pagination:e.defaultPagination,size:e.tableSize},e.$attrs),{empty:n(()=>[G(e.$slots,"empty")]),_:3},16,["columns","striped","pagination","size"])])],4)}var ut=J(rt,[["render",ct],["__file","/home/runner/work/naive-admin/naive-admin/src/components/TableRender/TableRender.vue"]]);const pt=A({name:"TableSet",components:{NCheckbox:pe,NButton:K,Icon:Q,VerticalLeftOutlined:Ze,VerticalRightOutlined:ot},props:{checkAll:{type:Boolean,default:!1},checkIndex:{type:Boolean,default:!1},checkBox:{type:Boolean,default:!1},columns:{type:Array,default:()=>[]}},emits:["update:checkAll","update:checkIndex","update:checkBox","reset","update:checked","update:fixed"],setup(e,{emit:t}){const h=q(),s=B([]),u=y(()=>({"--icon-hover-color":h.themeColor})),m=y({get:()=>e.checkAll,set:l=>t("update:checkAll",l)}),g=y({get:()=>e.checkIndex,set:l=>t("update:checkIndex",l)}),c=y({get:()=>e.checkBox,set:l=>t("update:checkBox",l)});Be(e.columns,l=>{s.value=l},{immediate:!0,deep:!0});function i(){t("reset")}function v(l,d){t("update:checked",{checked:!l,index:d})}function w(l,d,a){t("update:fixed",d.fixed===l?!1:l,a)}return{columnsList:s,tableSetStyle:u,isCheckAll:m,isCheckIndex:g,isCheckBox:c,onReset:i,onFixed:w,onUpdateChecked:v}}}),ht={class:"table-set__header"},ft={class:"index"},mt={class:"text"};function gt(e,t,h,s,u,m){const g=pe,c=K,i=$("VerticalRightOutlined"),v=Q,w=$("VerticalLeftOutlined"),l=qe,d=Fe;return x(),H(d,{trigger:"click",placement:"bottom-end","content-style":"padding: 0;"},{trigger:n(()=>[G(e.$slots,"default",{},void 0,!0)]),header:n(()=>[b("div",ht,[o(g,{checked:e.isCheckAll,"onUpdate:checked":t[0]||(t[0]=a=>e.isCheckAll=a)},{default:n(()=>[M("\u5217\u5C55\u793A")]),_:1},8,["checked"]),o(g,{checked:e.isCheckIndex,"onUpdate:checked":t[1]||(t[1]=a=>e.isCheckIndex=a)},{default:n(()=>[M("\u5E8F\u53F7\u5217")]),_:1},8,["checked"]),o(g,{checked:e.isCheckBox,"onUpdate:checked":t[2]||(t[2]=a=>e.isCheckBox=a)},{default:n(()=>[M("\u52FE\u9009\u5217")]),_:1},8,["checked"]),o(c,{type:"primary",text:"",onClick:e.onReset},{default:n(()=>[M("\u91CD\u7F6E")]),_:1},8,["onClick"])])]),default:n(()=>[o(Te,{class:"table-set__list",style:de(e.tableSetStyle),tag:"div",name:"list-fade"},{default:n(()=>[(x(!0),z(Re,null,ze(e.columns,(a,r)=>(x(),z("div",{key:a.title+a.key,class:"table-set__list-item"},[b("span",ft,oe(r+1),1),o(g,{class:"checkbox",checked:!a.hidden,"onUpdate:checked":_=>e.onUpdateChecked(_,r)},{default:n(()=>[b("span",mt,oe(a.title),1)]),_:2},1032,["checked","onUpdate:checked"]),o(l,{size:"tiny"},{default:n(()=>[o(c,{type:a.fixed==="left"?"primary":"default",onClick:_=>e.onFixed("left",a,r)},{icon:n(()=>[o(v,{size:18},{default:n(()=>[o(i)]),_:1})]),_:2},1032,["type","onClick"]),o(c,{type:a.fixed==="right"?"primary":"default",onClick:_=>e.onFixed("right",a,r)},{icon:n(()=>[o(v,{size:18},{default:n(()=>[o(w)]),_:1})]),_:2},1032,["type","onClick"])]),_:2},1024)]))),128))]),_:1},8,["style"])]),_:3})}var ge=J(pt,[["render",gt],["__scopeId","data-v-b9566bbc"],["__file","/home/runner/work/naive-admin/naive-admin/src/components/TableRender/components/TableSet.vue"]]);const _t=A({name:"TableTool",components:{PlusOutlined:De,EditOutlined:Le,DeleteOutlined:Ve,DownloadOutlined:je,FullscreenOutlined:Ue,FullscreenExitOutlined:We,ReloadOutlined:Ge,ColumnHeightOutlined:Me,SettingOutlined:Oe,NTooltip:ce,NSwitch:ue,NDropdown:fe,TableSet:ge},props:{showBehavior:{type:Boolean,default:!0}},emits:["behavior","refresh"],setup(e,{emit:t}){const h=q(),s=Ae(_e);if(!s)throw new Error("[TableRedner/TableTool]\uFF1A`TableTool` must be placed in `TableRedner`");const u=y(()=>s.columns.value||[]),m=y(()=>{const r=s.size.value,_=`color: ${h.themeColor};`;return[{label:"\u7D27\u51D1",key:"small",props:{style:r==="small"?_:""}},{label:"\u9ED8\u8BA4",key:"medium",props:{style:r==="medium"?_:""}},{label:"\u5BBD\u677E",key:"large",props:{style:r==="large"?_:""}}]}),g=y({get:()=>u.value.every(r=>!r.hidden),set:r=>{s.onUpdateCheckAll(!r)}}),c=y({get:()=>s.showIndex.value||!1,set:r=>s.setValue("showIndex",r)}),i=y({get:()=>s.showCheck.value||!1,set:r=>s.setValue("showCheck",r)});function v(r){s.setValue("showStriped",r)}function w(r){s.setValue("size",r)}function l(r){t("behavior",r)}function d(){t("refresh")}function a({checked:r,index:_}){s.onUpdateCheckAll(r,_)}return{checkAll:g,checkIndex:c,checkBox:i,isFullScreen:y(()=>!s.isFullScreen.value),showStriped:y(()=>s.showStriped.value),columns:u,onToggle:s.toggleFull,setStriped:v,onBehavior:l,onRefresh:d,onSelect:w,onFixed:s.setFixed,onReset:s.reset,onUpdateChecked:a,densityOptions:m}}}),kt={class:"table-render-toolbar"},bt={class:"behavior"},vt=b("span",null,"\u65B0\u589E",-1),yt=b("span",null,"\u4FEE\u6539",-1),wt=b("span",null,"\u5220\u9664",-1),Ct=b("span",null,"\u5BFC\u51FA",-1),$t={class:"set"},xt=b("span",null,"\u6591\u9A6C\u7EB9",-1),St=b("span",null,"\u8868\u683C\u5168\u5C4F",-1),Bt=b("span",null,"\u5237\u65B0",-1),Tt=b("span",null,"\u5BC6\u5EA6",-1),Rt=b("span",null,"\u5217\u8BBE\u7F6E",-1);function zt(e,t,h,s,u,m){const g=$("PlusOutlined"),c=K,i=$("EditOutlined"),v=$("DeleteOutlined"),w=$("DownloadOutlined"),l=ue,d=ce,a=$("FullscreenOutlined"),r=$("FullscreenExitOutlined"),_=Q,F=$("ReloadOutlined"),U=$("ColumnHeightOutlined"),D=fe,T=$("SettingOutlined"),N=ge;return x(),z("div",kt,[b("div",bt,[e.showBehavior?G(e.$slots,"behavior",{key:0},()=>[o(c,{type:"primary",onClick:t[0]||(t[0]=C=>e.onBehavior("insert"))},{icon:n(()=>[o(g)]),default:n(()=>[vt]),_:1}),o(c,{type:"success",onClick:t[1]||(t[1]=C=>e.onBehavior("update"))},{icon:n(()=>[o(i)]),default:n(()=>[yt]),_:1}),o(c,{type:"error",onClick:t[2]||(t[2]=C=>e.onBehavior("delete"))},{icon:n(()=>[o(v)]),default:n(()=>[wt]),_:1}),o(c,{type:"warning",onClick:t[3]||(t[3]=C=>e.onBehavior("export"))},{icon:n(()=>[o(w)]),default:n(()=>[Ct]),_:1})]):ie("v-if",!0)]),b("div",$t,[o(d,null,{trigger:n(()=>[o(l,{value:e.showStriped,"onUpdate:value":e.setStriped},null,8,["value","onUpdate:value"])]),default:n(()=>[xt]),_:1}),o(d,null,{trigger:n(()=>[o(_,{class:"icon",size:20,onClick:e.onToggle},{default:n(()=>[e.isFullScreen?(x(),H(a,{key:0})):(x(),H(r,{key:1}))]),_:1},8,["onClick"])]),default:n(()=>[St]),_:1}),o(d,null,{trigger:n(()=>[o(_,{class:"icon",size:20,onClick:e.onRefresh},{default:n(()=>[o(F)]),_:1},8,["onClick"])]),default:n(()=>[Bt]),_:1}),o(D,{trigger:"click",options:e.densityOptions,onSelect:e.onSelect},{default:n(()=>[o(d,null,{trigger:n(()=>[o(_,{class:"icon",size:20},{default:n(()=>[o(U)]),_:1})]),default:n(()=>[Tt]),_:1})]),_:1},8,["options","onSelect"]),o(N,{"check-all":e.checkAll,"onUpdate:check-all":t[4]||(t[4]=C=>e.checkAll=C),"check-index":e.checkIndex,"onUpdate:check-index":t[5]||(t[5]=C=>e.checkIndex=C),"check-box":e.checkBox,"onUpdate:check-box":t[6]||(t[6]=C=>e.checkBox=C),columns:e.columns,onReset:e.onReset,"onUpdate:fixed":e.onFixed,"onUpdate:checked":e.onUpdateChecked},{default:n(()=>[o(d,null,{trigger:n(()=>[o(_,{class:"icon",size:20},{default:n(()=>[o(T)]),_:1})]),default:n(()=>[Rt]),_:1})]),_:1},8,["check-all","check-index","check-box","columns","onReset","onUpdate:fixed","onUpdate:checked"])])])}var Ft=J(_t,[["render",zt],["__file","/home/runner/work/naive-admin/naive-admin/src/components/TableRender/components/TableTool.vue"]]);const _e=Je("TableTool"),Ot={class:"base-table"},At={name:"BaseTable"},Nt=A({...At,setup(e){const t=Ne("message"),{page:h,size:s,total:u}=st().setTotal(1e3),m=[{title:"Name",key:"name",fixed:"left",width:200},{title:"Age",key:"age",width:200},{title:"Address",key:"address",width:300},{title:"Address1",key:"address1",width:300},{title:"Address2",key:"address2",width:300},{title:"Address3",key:"address3",width:300},{title:"Tags",key:"tags",width:200,fixed:"right",render(l){return l.tags.map(a=>j(Ee,{style:{marginRight:"6px"},type:"primary",bordered:!1},{default:()=>a}))}},{title:"Action",key:"actions",fixed:"right",width:200,render(){return j(K,{size:"small"},{default:()=>"Send Email"})}}],g=B(Array.from({length:s.value}).map((l,d)=>({key:d,name:"Joe Black -- "+d,age:Math.floor(Math.random()*20),address:"Sidney No. 1 Lake Park",address1:"Sidney No. 1 Lake Park",address2:"Sidney No. 1 Lake Park",address3:"Sidney No. 1 Lake Park",tags:["cool","teacher"]})));function c(){t.info("page change")}function i(){t.info("refresh")}function v(l){switch(l){case"insert":t.info(l);break;case"update":t.success(l);break;case"delete":t.error(l);break;case"export":t.warning(l);break}}const w=`
<template>
    <div class="base-table">
        <n-card>
            <table-render
                v-model:page="page"
                v-model:size="size"
                :total="total"
                :single-line="false"
                striped
                :columns="columns"
                :data="data"
                :max-height="200"
                :scroll-x="2000"
                @page-change="onPageChange"
            >
                <template #tool>
                    <table-tool @behavior="onBehavior" @refresh="onRefresh" />
                </template>
            </table-render>
        </n-card>
    </div>
</template>

<script setup lang="ts">
import TableRender, { TableTool, type Behavior } from "@/components/TableRender";
import { h, ref } from "vue";
import { NTag, NButton, type DataTableColumns } from "naive-ui";
import { useFeedBack } from "@/hooks";

type RowData = {
    key: number;
    name: string;
    age: number;
    address: string;
    address1: string;
    address2: string;
    address3: string;
    tags: string[];
};

const message = useFeedBack("message");

const page = ref(0);
const size = ref(10);
const total = ref(1000);

const columns: DataTableColumns<RowData> = [
    { title: "Name", key: "name", fixed: "left", width: 200 },
    { title: "Age", key: "age", width: "10%" },
    { title: "Address", key: "address", minWidth: 300 },
    { title: "Address1", key: "address1", minWidth: 300 },
    { title: "Address2", key: "address2", minWidth: 300 },
    { title: "Address3", key: "address3", minWidth: 300 },
    {
        title: "Tags",
        key: "tags",
        minWidth: 200,
        fixed: "right",
        render(row) {
            const tags = row.tags.map(tagKey => {
                return h(
                    NTag,
                    { style: { marginRight: "6px"  }, type: "primary", bordered: false },
                    { default: () => tagKey },
                );
            });
            return tags;
        },
    },
    {
        title: "Action",
        key: "actions",
        fixed: "right",
        width: 200,
        render() {
            return h(NButton, { size: "small" }, { default: () => "Send Email" } );
        },
    },
];

const data = ref<RowData[]>(Array.from({ length: size.value }).map((_, i) => {
    return {
        key: i,
        name: "Joe Black -- " + i,
        age: Math.floor(Math.random() * 20),
        address: "Sidney No. 1 Lake Park",
        address1: "Sidney No. 1 Lake Park",
        address2: "Sidney No. 1 Lake Park",
        address3: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    };
}));

function onPageChange() {
    message.info("page change");
}

function onRefresh(){
    message.info("refresh");
}

function onBehavior(type: Behavior) {
    switch (type) {
        case "insert":
            message.info(type);
            break;
        case "update":
            message.success(type);
            break;
        case "delete":
            message.error(type);
            break;
        case "export":
            message.warning(type);
            break;
    }
}
<\/script>
`;return(l,d)=>(x(),z("div",Ot,[o(E(Ie),{title:"base-table",code:w},{default:n(()=>[o(E(ut),{ref:"tableRenderRef",page:E(h),"onUpdate:page":d[0]||(d[0]=a=>se(h)?h.value=a:null),size:E(s),"onUpdate:size":d[1]||(d[1]=a=>se(s)?s.value=a:null),total:E(u),"single-line":!1,striped:"",columns:m,data:g.value,"max-height":200,"scroll-x":2e3,onPageChange:c},{tool:n(()=>[o(E(Ft),{onBehavior:v,onRefresh:i})]),_:1},8,["page","size","total","data"])]),_:1})]))}});var qt=J(Nt,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/components/base-table.vue"]]);export{qt as default};
