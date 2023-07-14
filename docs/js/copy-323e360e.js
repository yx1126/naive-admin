import{_ as O}from"./CodeCard-c20a873c.js";import{d as i,j as u,k as b,p as w,al as z,f as g,bz as I,l as e,m as o,q as s,am as C,W as $,a7 as F,aa as x,an as N,y as S,ac as D,ab as U,_ as j}from"../assets/index-9c5b5408.js";import{c as q}from"./index-482947e5.js";import{_ as A,a as L}from"./Grid-9db9efab.js";const R={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},W=w("path",{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z",fill:"currentColor"},null,-1),G=[W],h=i({name:"CopyOutlined",render:function(t,c){return u(),b("svg",R,G)}}),J={class:"directive"},K=w("h1",null,"v-copy",-1),P=i({name:"Copy"}),Q=i({...P,setup(k){const t=z("message"),c=g("v-copy"),l=g("copyFn"),T=`
<template>
    <div>
        <n-input v-model:value="copyText" clearable />
        <n-button v-copy="copyText" v-copy:success="onCopySuccess" v-copy:error="onCopyError" type="primary">
            <template #icon>
                <Icon><CopyOutlined /></Icon>
            </template>
            复制
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
    message.success("复制成功!");
}
function onCopyError(e: Event){
    console.log(e);
    message.error("复制失败!");
}
<\/script>
`,M=`
<template>
    <div>
        <n-input v-model:value="copyText" clearable />
        <n-button type="primary" @click="onCopy">
            <template #icon>
                <Icon><CopyOutlined /></Icon>
            </template>
            复制
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
        message.success("复制成功!");
    }).catch(error => {
        console.log(error);
        message.error("复制失败!");
    });
}
<\/script>
`;function E(n){console.log(n),t.success("复制成功!")}function V(n){console.log(n),t.error("复制失败!")}function B(){q(l.value).then(n=>{console.log(n),t.success("复制成功!")}).catch(n=>{console.log(n),t.error("复制失败!")})}return(n,a)=>{const _=N,m=S,d=D,v=U,y=O,f=A,H=L,r=I("copy");return u(),b("div",J,[K,e(H,{cols:1,"y-gap":"12"},{default:o(()=>[e(f,null,{default:o(()=>[e(y,{title:"基础示例",code:T},{default:o(()=>[e(v,null,{default:o(()=>[e(_,{value:s(c),"onUpdate:value":a[0]||(a[0]=p=>C(c)?c.value=p:null),clearable:""},null,8,["value"]),$((u(),F(d,{type:"primary"},{icon:o(()=>[e(m,null,{default:o(()=>[e(s(h))]),_:1})]),default:o(()=>[x(" 复制 ")]),_:1})),[[r,s(c)],[r,E,"success"],[r,V,"error"]])]),_:1})]),_:1})]),_:1}),e(f,null,{default:o(()=>[e(y,{title:"函数调用",code:M},{default:o(()=>[e(v,null,{default:o(()=>[e(_,{value:s(l),"onUpdate:value":a[1]||(a[1]=p=>C(l)?l.value=p:null),clearable:""},null,8,["value"]),e(d,{type:"primary",onClick:B},{icon:o(()=>[e(m,null,{default:o(()=>[e(s(h))]),_:1})]),default:o(()=>[x(" 复制 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}}),oe=j(Q,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/directive/copy.vue"]]);export{oe as default};
