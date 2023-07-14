import{aN as w,aO as l,aP as v,g as x,d as p,al as N,f as T,j as B,k as R,l as d,m,q as r,am as g,h as c,a8 as A,ac as P,_ as z}from"../assets/index-9c5b5408.js";import{_ as S}from"./CodeCard-c20a873c.js";import{T as L,a as C}from"./index-2c04435c.js";import"./RadioGroup-06900a0f.js";import"./PlusOutlined-020faa0d.js";import"./Dropdown-7d0a4aba.js";import"./create-ref-setter-f485918b.js";import"./Pagination-eaa5f532.js";import"./Forward-f1c18f40.js";import"./use-fullscreen-4873b57e.js";import"./ReloadOutlined-bb09ffba.js";import"./index-e6578343.js";function D(n,e,o){const t=w(Object.assign({page:n&&l(n)==="number"?n:1,size:e||10,total:o||0},l(n)==="object"?n:null));return{...v(t),source:x(()=>({page:t.page,size:t.size}))}}const W={class:"base-table"},M=p({name:"BaseTable"}),j=p({...M,setup(n){const e=N("message"),{page:o,size:t,total:f}=D({total:1e3}),u=[{title:"Name",key:"name",fixed:"left",width:200},{title:"Age",key:"age",width:200},{title:"Address",key:"address",width:300},{title:"Address1",key:"address1",width:300},{title:"Address2",key:"address2",width:300},{title:"Address3",key:"address3",width:300},{title:"Tags",key:"tags",width:200,fixed:"right",render(a){return a.tags.map(i=>c(A,{style:{marginRight:"6px"},type:"primary",bordered:!1},{default:()=>i}))}},{title:"Action",key:"actions",fixed:"right",width:200,render(){return c(P,{size:"small"},{default:()=>"Send Email"})}}],h=T(Array.from({length:t.value}).map((a,s)=>({key:s,name:"Joe Black -- "+s,age:Math.floor(Math.random()*20),address:"Sidney No. 1 Lake Park",address1:"Sidney No. 1 Lake Park",address2:"Sidney No. 1 Lake Park",address3:"Sidney No. 1 Lake Park",tags:["cool","teacher"]})));function k(){e.info("page change")}function y(){e.info("refresh")}function b(a){switch(a){case"insert":e.info(a);break;case"update":e.success(a);break;case"delete":e.error(a);break;case"export":e.warning(a);break}}const _=`
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
`;return(a,s)=>(B(),R("div",W,[d(r(S),{title:"base-table",code:_},{default:m(()=>[d(r(L),{ref:"tableRenderRef",page:r(o),"onUpdate:page":s[0]||(s[0]=i=>g(o)?o.value=i:null),size:r(t),"onUpdate:size":s[1]||(s[1]=i=>g(t)?t.value=i:null),total:r(f),"single-line":!1,striped:"",columns:u,data:r(h),"max-height":200,"scroll-x":2e3,onPageChange:k},{tool:m(()=>[d(r(C),{onBehavior:b,onRefresh:y})]),_:1},8,["page","size","total","data"])]),_:1})]))}}),X=z(j,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/components/base-table.vue"]]);export{X as default};
