import{aY as b,cc as _,_ as v,d as w,bp as T,a as x,b as N,e as B,f as l,g,j as o,cd as c,G as p,ak as R,ao as A}from"../assets/index.cf6f3e79.js";import{_ as P}from"./CodeCard-164bbcfb.js";import{T as z,a as S}from"./index-285662c2.js";import"./use-fullscreen-875b308d.js";import"./RadioGroup-e77b8eda.js";import"./PlusOutlined-9bc0b081.js";import"./Dropdown-5f64cde7.js";import"./create-ref-setter-04566897.js";import"./Pagination-e315a4b2.js";import"./Forward-05b50c32.js";import"./ReloadOutlined-eab7427b.js";import"./index-d95ae7da.js";function L(m=1,t=10,i=0){const e=b({page:m,size:t,total:i}),n={..._(e),setPage(r){return e.page=r,n},setSize(r){return e.size=r,n},setTotal(r){return e.total=r,n}};return n}const C={class:"base-table"},D={name:"BaseTable"},W=w({...D,setup(m){const t=T("message"),{page:i,size:e,total:n}=L().setTotal(1e3),r=[{title:"Name",key:"name",fixed:"left",width:200},{title:"Age",key:"age",width:200},{title:"Address",key:"address",width:300},{title:"Address1",key:"address1",width:300},{title:"Address2",key:"address2",width:300},{title:"Address3",key:"address3",width:300},{title:"Tags",key:"tags",width:200,fixed:"right",render(a){return a.tags.map(d=>p(R,{style:{marginRight:"6px"},type:"primary",bordered:!1},{default:()=>d}))}},{title:"Action",key:"actions",fixed:"right",width:200,render(){return p(A,{size:"small"},{default:()=>"Send Email"})}}],f=x(Array.from({length:e.value}).map((a,s)=>({key:s,name:"Joe Black -- "+s,age:Math.floor(Math.random()*20),address:"Sidney No. 1 Lake Park",address1:"Sidney No. 1 Lake Park",address2:"Sidney No. 1 Lake Park",address3:"Sidney No. 1 Lake Park",tags:["cool","teacher"]})));function u(){t.info("page change")}function h(){t.info("refresh")}function k(a){switch(a){case"insert":t.info(a);break;case"update":t.success(a);break;case"delete":t.error(a);break;case"export":t.warning(a);break}}const y=`
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
`;return(a,s)=>(N(),B("div",C,[l(o(P),{title:"base-table",code:y},{default:g(()=>[l(o(z),{ref:"tableRenderRef",page:o(i),"onUpdate:page":s[0]||(s[0]=d=>c(i)?i.value=d:null),size:o(e),"onUpdate:size":s[1]||(s[1]=d=>c(e)?e.value=d:null),total:o(n),"single-line":!1,striped:"",columns:r,data:f.value,"max-height":200,"scroll-x":2e3,onPageChange:u},{tool:g(()=>[l(o(S),{onBehavior:k,onRefresh:h})]),_:1},8,["page","size","total","data"])]),_:1})]))}});var I=v(W,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/components/base-table.vue"]]);export{I as default};
