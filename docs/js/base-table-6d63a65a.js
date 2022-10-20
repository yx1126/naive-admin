import{bj as y,ca as b,_,d as v,bp as B,a as w,b as x,e as N,f as m,g as A,j as d,cb as g,B as c,ak as T,ao as P}from"../assets/index.67c47f0d.js";import{_ as z}from"./CodeCard-c0e5cadc.js";import{a as S}from"./index-9d08c811.js";import"./use-fullscreen-5e926d88.js";import"./Checkbox-845c5396.js";import"./ReloadOutlined-cea16db8.js";import"./Dropdown-2323cfb5.js";import"./ChevronRight-8736bcb7.js";import"./create-ref-setter-04566897.js";import"./PlusOutlined-baad738d.js";import"./RadioGroup-c060c203.js";import"./Pagination-7484405d.js";import"./Forward-8d83e98d.js";function R(l=1,t=10,i=0){const e=y({page:l,size:t,total:i}),n={...b(e),setPage(r){return e.page=r,n},setSize(r){return e.size=r,n},setTotal(r){return e.total=r,n}};return n}const W={class:"base-table"},L={name:"BaseTable"},C=v({...L,setup(l){const t=B("message"),{page:i,size:e,total:n}=R().setTotal(1e3),r=[{title:"Name",key:"name",fixed:"left",width:200},{title:"Age",key:"age",width:"10%"},{title:"Address",key:"address",minWidth:300},{title:"Address1",key:"address1",minWidth:300},{title:"Address2",key:"address2",minWidth:300},{title:"Address3",key:"address3",minWidth:300},{title:"Tags",key:"tags",minWidth:200,fixed:"right",render(a){return a.tags.map(o=>c(T,{style:{marginRight:"6px"},type:"primary",bordered:!1},{default:()=>o}))}},{title:"Action",key:"actions",fixed:"right",width:200,render(){return c(P,{size:"small"},{default:()=>"Send Email"})}}],p=w(Array.from({length:e.value}).map((a,s)=>({key:s,name:"Joe Black -- "+s,age:Math.floor(Math.random()*20),address:"Sidney No. 1 Lake Park",address1:"Sidney No. 1 Lake Park",address2:"Sidney No. 1 Lake Park",address3:"Sidney No. 1 Lake Park",tags:["cool","teacher"]})));function u(){t.info("page change")}function f(){t.info("refresh")}function h(a){switch(a){case"insert":t.info(a);break;case"update":t.success(a);break;case"delete":t.error(a);break;case"export":t.warning(a);break}}const k=`
<template>
    <div class="base-table">
        <n-card>
            <basic-table
                v-model:page="page"
                v-model:size="size"
                :total="total"
                :single-line="false"
                :columns="columns"
                :data="data"
                :max-height="200"
                :scroll-x="1800"
                @page-change="onPageChange"
                @behavior="onBehavior"
                @refresh="onRefresh"
            />
        </n-card>
    </div>
</template>

<script setup lang="ts">
import BasicTable, { type Behavior } from "@/components/BasicTable";
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
`;return(a,s)=>(x(),N("div",W,[m(d(z),{title:"base-table",code:k},{default:A(()=>[m(d(S),{page:d(i),"onUpdate:page":s[0]||(s[0]=o=>g(i)?i.value=o:null),size:d(e),"onUpdate:size":s[1]||(s[1]=o=>g(e)?e.value=o:null),total:d(n),"single-line":!1,columns:r,data:p.value,"max-height":200,"scroll-x":1800,onPageChange:u,onBehavior:h,onRefresh:f},null,8,["page","size","total","data"])]),_:1})]))}});var O=_(C,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/components/base-table.vue"]]);export{O as default};
