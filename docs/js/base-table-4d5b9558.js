import{aN as _,aO as w,d as f,al as v,f as T,j as x,k as N,l,m as g,q as n,am as c,h as p,a8 as B,ac as R,_ as A}from"../assets/index-0ecb1455.js";import{_ as P}from"./CodeCard-9db5af07.js";import{T as z,a as S}from"./index-da749d75.js";import"./RadioGroup-1e124a6e.js";import"./PlusOutlined-a6c97b48.js";import"./Dropdown-ac41ea32.js";import"./create-ref-setter-f485918b.js";import"./Pagination-6b293a30.js";import"./Forward-03b39b59.js";import"./use-fullscreen-a9312c08.js";import"./ReloadOutlined-5ea869ea.js";import"./index-e6578343.js";function L(m=1,t=10,i=0){const e=_({page:m,size:t,total:i}),o={...w(e),setPage(r){return e.page=r,o},setSize(r){return e.size=r,o},setTotal(r){return e.total=r,o}};return o}const C={class:"base-table"},D=f({name:"BaseTable"}),W=f({...D,setup(m){const t=v("message"),{page:i,size:e,total:o}=L().setTotal(1e3),r=[{title:"Name",key:"name",fixed:"left",width:200},{title:"Age",key:"age",width:200},{title:"Address",key:"address",width:300},{title:"Address1",key:"address1",width:300},{title:"Address2",key:"address2",width:300},{title:"Address3",key:"address3",width:300},{title:"Tags",key:"tags",width:200,fixed:"right",render(a){return a.tags.map(d=>p(B,{style:{marginRight:"6px"},type:"primary",bordered:!1},{default:()=>d}))}},{title:"Action",key:"actions",fixed:"right",width:200,render(){return p(R,{size:"small"},{default:()=>"Send Email"})}}],u=T(Array.from({length:e.value}).map((a,s)=>({key:s,name:"Joe Black -- "+s,age:Math.floor(Math.random()*20),address:"Sidney No. 1 Lake Park",address1:"Sidney No. 1 Lake Park",address2:"Sidney No. 1 Lake Park",address3:"Sidney No. 1 Lake Park",tags:["cool","teacher"]})));function h(){t.info("page change")}function k(){t.info("refresh")}function y(a){switch(a){case"insert":t.info(a);break;case"update":t.success(a);break;case"delete":t.error(a);break;case"export":t.warning(a);break}}const b=`
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
`;return(a,s)=>(x(),N("div",C,[l(n(P),{title:"base-table",code:b},{default:g(()=>[l(n(z),{ref:"tableRenderRef",page:n(i),"onUpdate:page":s[0]||(s[0]=d=>c(i)?i.value=d:null),size:n(e),"onUpdate:size":s[1]||(s[1]=d=>c(e)?e.value=d:null),total:n(o),"single-line":!1,striped:"",columns:r,data:n(u),"max-height":200,"scroll-x":2e3,onPageChange:h},{tool:g(()=>[l(n(S),{onBehavior:y,onRefresh:k})]),_:1},8,["page","size","total","data"])]),_:1})]))}}),I=A(W,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/components/base-table.vue"]]);export{I as default};
