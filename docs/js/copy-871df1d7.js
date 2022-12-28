import{_ as E}from"./CodeCard-9916bd94.js";import{d as p,j as r,k as D,p as h,bs as V,f,cj as H,l as e,m as o,af as O,an as I,q as g,aq as C,bc as $,y as z,as as N,ar as A,_ as S}from"../assets/index.7be86ddb.js";import{c as j}from"./index-a8804460.js";import{_ as q,a as U}from"./Grid-9065ed32.js";const L={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},G=h("path",{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z",fill:"currentColor"},null,-1),J=[G],x=p({name:"CopyOutlined",render:function(t,c){return r(),D("svg",L,J)}}),K={class:"directive"},P=h("h1",null,"v-copy",-1),Q=p({name:"Copy"}),R=p({...Q,setup(b){const t=V("message"),c=f("v-copy"),u=f("copyFn"),w=`
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
`;function k(n){console.log(n),t.success("\u590D\u5236\u6210\u529F!")}function T(n){console.log(n),t.error("\u590D\u5236\u5931\u8D25!")}function M(){j(u.value).then(n=>{console.log(n),t.success("\u590D\u5236\u6210\u529F!")}).catch(n=>{console.log(n),t.error("\u590D\u5236\u5931\u8D25!")})}return(n,s)=>{const i=$,_=z,m=N,d=A,v=E,y=U,B=q,l=H("copy");return r(),D("div",K,[P,e(B,{cols:1,"y-gap":"12"},{default:o(()=>[e(y,null,{default:o(()=>[e(v,{title:"\u57FA\u7840\u793A\u4F8B",code:w},{default:o(()=>[e(d,null,{default:o(()=>[e(i,{value:c.value,"onUpdate:value":s[0]||(s[0]=a=>c.value=a),clearable:""},null,8,["value"]),O((r(),I(m,{type:"primary"},{icon:o(()=>[e(_,null,{default:o(()=>[e(g(x))]),_:1})]),default:o(()=>[C(" \u590D\u5236 ")]),_:1})),[[l,c.value],[l,k,"success"],[l,T,"error"]])]),_:1})]),_:1})]),_:1}),e(y,null,{default:o(()=>[e(v,{title:"\u51FD\u6570\u8C03\u7528",code:F},{default:o(()=>[e(d,null,{default:o(()=>[e(i,{value:u.value,"onUpdate:value":s[1]||(s[1]=a=>u.value=a),clearable:""},null,8,["value"]),e(m,{type:"primary",onClick:M},{icon:o(()=>[e(_,null,{default:o(()=>[e(g(x))]),_:1})]),default:o(()=>[C(" \u590D\u5236 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}}),ee=S(R,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/directive/copy.vue"]]);export{ee as default};
