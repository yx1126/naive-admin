import{d as k,bo as y,a as r,b,e as v,f as o,g as _,j as d,B as l,ak as B,ao as x}from"../assets/index.b366dfbb.js";import{_ as w}from"./CodeCard-aa077d61.js";import{a as N}from"./index-0c2a8ea8.js";import"./use-fullscreen-e91c107e.js";import"./Checkbox-16070b2a.js";import"./PlusOutlined-8e2231f6.js";import"./RadioGroup-e0e36329.js";import"./Dropdown-a78613fd.js";import"./use-keyboard-807b24e7.js";/* empty css                                                                     */import"./ReloadOutlined-29df5d5f.js";const A={class:"base-table"},P={name:"BaseTable"},K=k({...P,setup(T){const t=y("message"),n=r(0),i=r(10),m=r(1e3),g=[{title:"Name",key:"name",fixed:"left",width:200},{title:"Age",key:"age",width:"10%"},{title:"Address",key:"address",minWidth:300},{title:"Address1",key:"address1",minWidth:300},{title:"Address2",key:"address2",minWidth:300},{title:"Address3",key:"address3",minWidth:300},{title:"Tags",key:"tags",minWidth:200,fixed:"right",render(e){return e.tags.map(s=>l(B,{style:{marginRight:"6px"},type:"primary",bordered:!1},{default:()=>s}))}},{title:"Action",key:"actions",fixed:"right",width:200,render(){return l(x,{size:"small"},{default:()=>"Send Email"})}}],c=r(Array.from({length:i.value}).map((e,a)=>({key:a,name:"Joe Black -- "+a,age:Math.floor(Math.random()*20),address:"Sidney No. 1 Lake Park",address1:"Sidney No. 1 Lake Park",address2:"Sidney No. 1 Lake Park",address3:"Sidney No. 1 Lake Park",tags:["cool","teacher"]})));function p(){t.info("page change")}function f(){t.info("refresh")}function h(e){switch(e){case"insert":t.info(e);break;case"update":t.success(e);break;case"delete":t.error(e);break;case"export":t.warning(e);break}}const u=`
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
`;return(e,a)=>(b(),v("div",A,[o(d(w),{title:"base-table",code:u},{default:_(()=>[o(d(N),{page:n.value,"onUpdate:page":a[0]||(a[0]=s=>n.value=s),size:i.value,"onUpdate:size":a[1]||(a[1]=s=>i.value=s),total:m.value,"single-line":!1,columns:g,data:c.value,"max-height":200,"scroll-x":1800,onPageChange:p,onBehavior:h,onRefresh:f},null,8,["page","size","total","data"])]),_:1})]))}});export{K as default};
