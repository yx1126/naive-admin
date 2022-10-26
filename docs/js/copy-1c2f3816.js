import{_ as E}from"./CodeCard-c2367099.js";import{d as x,b as r,e as D,i as h,_ as V,bp as H,a as y,cg as O,f as e,g as o,ab as I,aj as $,j as f,am as g,b9 as z,m as N,ao as A,an as S}from"../assets/index.c4190a51.js";import{c as j}from"./index-fa16d41d.js";import{_ as U,a as L}from"./Grid-2f4333b1.js";const q={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},G=h("path",{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z",fill:"currentColor"},null,-1),J=[G];var C=x({name:"CopyOutlined",render:function(t,c){return r(),D("svg",q,J)}});const K={class:"directive"},P=h("h1",null,"v-copy",-1),Q={name:"Copy"},R=x({...Q,setup(b){const t=H("message"),c=y("v-copy"),s=y("copyFn"),w=`
<template>
    <div>
        <n-input v-model:value="copyText" clearable />
        <n-button v-copy="copyText" v-copy:success="onCopySuccess" v-copy:error="onCopyError" type="primary">
            <template #icon>
                <Icon><CopyOutlined /></Icon>
            </template>
            \u590D\u5236
        </n-button>
    <div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { CopyOutlined } from "@vicons/antd";
import { useMessage } from "naive-ui";
import type { Event } from "clipboard";

const message = useMessage();

const copyText = ref("NaiveAdmin");

function onCopySuccess(e: Event){
    console.log(e);
    message.success("\u590D\u5236\u6210\u529F!");
}
function onCopyError(e: Event){
    console.log(e);
    message.error("\u590D\u5236\u5931\u8D25!");
}
<\/script>
`,F=`
<template>
    <div>
        <n-input v-model:value="copyText" clearable />
        <n-button type="primary" @click="onCopy">
            <template #icon>
                <Icon><CopyOutlined /></Icon>
            </template>
            \u590D\u5236
        </n-button>
    <div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { CopyOutlined } from "@vicons/antd";
import { useMessage } from "naive-ui";
import copy from "@/util/clipboard";

const message = useMessage();

const copyText = ref("copyFn");

function onCopy(){
    copy(copyText.value).then((e) => {
        console.log(e);
        message.success("\u590D\u5236\u6210\u529F!");
    }).catch(error => {
        console.log(error);
        message.error("\u590D\u5236\u5931\u8D25!");
    });
}
<\/script>
`;function k(n){console.log(n),t.success("\u590D\u5236\u6210\u529F!")}function T(n){console.log(n),t.error("\u590D\u5236\u5931\u8D25!")}function M(){j(s.value).then(n=>{console.log(n),t.success("\u590D\u5236\u6210\u529F!")}).catch(n=>{console.log(n),t.error("\u590D\u5236\u5931\u8D25!")})}return(n,u)=>{const p=z,i=N,_=A,m=S,d=E,v=U,B=L,a=O("copy");return r(),D("div",K,[P,e(B,{cols:1,"y-gap":"12"},{default:o(()=>[e(v,null,{default:o(()=>[e(d,{title:"\u57FA\u7840\u793A\u4F8B",code:w},{default:o(()=>[e(m,null,{default:o(()=>[e(p,{value:c.value,"onUpdate:value":u[0]||(u[0]=l=>c.value=l),clearable:""},null,8,["value"]),I((r(),$(_,{type:"primary"},{icon:o(()=>[e(i,null,{default:o(()=>[e(f(C))]),_:1})]),default:o(()=>[g(" \u590D\u5236 ")]),_:1})),[[a,c.value],[a,k,"success"],[a,T,"error"]])]),_:1})]),_:1})]),_:1}),e(v,null,{default:o(()=>[e(d,{title:"\u51FD\u6570\u8C03\u7528",code:F},{default:o(()=>[e(m,null,{default:o(()=>[e(p,{value:s.value,"onUpdate:value":u[1]||(u[1]=l=>s.value=l),clearable:""},null,8,["value"]),e(_,{type:"primary",onClick:M},{icon:o(()=>[e(i,null,{default:o(()=>[e(f(C))]),_:1})]),default:o(()=>[g(" \u590D\u5236 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}});var ee=V(R,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/directive/copy.vue"]]);export{ee as default};
