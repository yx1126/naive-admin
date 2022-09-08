import{_ as B}from"./CodeCard-42a4473b.js";import{d as C,b as r,e as h,i as D,bo as E,a as y,c0 as H,f as e,g as o,a9 as O,aj as I,j as f,am as x,aJ as $,m as z,ao as A,an as N}from"../assets/index.c2091c65.js";import{c as S}from"./index-654cd14c.js";import{_ as j}from"./GridItem-90b32be5.js";import{_ as U}from"./Grid-22423f04.js";const J={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},L=D("path",{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z",fill:"currentColor"},null,-1),q=[L];var g=C({name:"CopyOutlined",render:function(t,c){return r(),h("svg",J,q)}});const G={class:"directive"},K=D("h1",null,"v-copy",-1),P=x(" \u590D\u5236 "),Q=x(" \u590D\u5236 "),R={name:"Copy"},oe=C({...R,setup(b){const t=E("message"),c=y("v-copy"),u=y("copyFn"),w=`
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

const copyText = ref("VueAdmin");

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
`;function T(n){console.log(n),t.success("\u590D\u5236\u6210\u529F!")}function k(n){console.log(n),t.error("\u590D\u5236\u5931\u8D25!")}function M(){S(u.value).then(n=>{console.log(n),t.success("\u590D\u5236\u6210\u529F!")}).catch(n=>{console.log(n),t.error("\u590D\u5236\u5931\u8D25!")})}return(n,s)=>{const p=$,i=z,_=A,m=N,d=B,v=j,V=U,l=H("copy");return r(),h("div",G,[K,e(V,{cols:1,"y-gap":"12"},{default:o(()=>[e(v,null,{default:o(()=>[e(d,{title:"\u57FA\u7840\u793A\u4F8B",code:w},{default:o(()=>[e(m,null,{default:o(()=>[e(p,{value:c.value,"onUpdate:value":s[0]||(s[0]=a=>c.value=a),clearable:""},null,8,["value"]),O((r(),I(_,{type:"primary"},{icon:o(()=>[e(i,null,{default:o(()=>[e(f(g))]),_:1})]),default:o(()=>[P]),_:1})),[[l,c.value],[l,T,"success"],[l,k,"error"]])]),_:1})]),_:1})]),_:1}),e(v,null,{default:o(()=>[e(d,{title:"\u51FD\u6570\u8C03\u7528",code:F},{default:o(()=>[e(m,null,{default:o(()=>[e(p,{value:u.value,"onUpdate:value":s[1]||(s[1]=a=>u.value=a),clearable:""},null,8,["value"]),e(_,{type:"primary",onClick:M},{icon:o(()=>[e(i,null,{default:o(()=>[e(f(g))]),_:1})]),default:o(()=>[Q]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}});export{oe as default};
