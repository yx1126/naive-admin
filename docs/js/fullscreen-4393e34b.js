import{d as b,by as E,j as r,k as N,l as t,m as e,q as n,W as i,a7 as s,aa as l,x as g,p as S,y as w,ac as z,ab as B,a8 as D,_ as V}from"../assets/index-bb041c26.js";import{_}from"./CodeCard-2c575db7.js";import{u as T,F as c}from"./use-fullscreen-3ce92419.js";import{_ as j,a as q}from"./Grid-11b7a30a.js";const W={class:"fullscreen"},$=S("h1",null,"v-fullscreen",-1),A=b({name:"Fullscreen"}),G=b({...A,setup(H){const{isEnabled:d,isFullScreen:m,full:v,exit:F,toggle:I}=T(),k=`
<template>
    <div>
        <n-button v-fullscreen type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            按钮全屏
        </n-button>
    <div>
</template>
`,C=`
<template>
    <n-space>
        // body 网页全屏
        <n-button v-fullscreen.body type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            全屏
        </n-button>

        // parent：将点击事件挂载到父级元素 arg: 接收一个Number值 向上查找的父元素层级 默认为1
        <n-button v-fullscreen:1.parent type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            按钮全屏
        </n-button>

        // 阻止事件冒泡
        <n-button v-fullscreen.stop type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            card 全屏
        </n-button>
    </n-space>
</template>
`,x=`
<template>
    <n-card class="full-card" title="选择器">
        <n-button v-fullscreen="'.full-card'" type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            card 全屏
        </n-button>
    </n-card>
</template>
`,O=`
<template>
    <n-space>
        <n-tag :type="isEnabled ? 'primary' : 'error'" size="large">{{ isEnabled ? "支持全屏" : "不支持全屏" }}</n-tag>
        <n-tag :type="isFullScreen ? 'primary' : 'error'" size="large">{{ isFullScreen ? "全屏" : "非全屏" }}</n-tag>
        <n-button type="primary" @click="full">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            full
        </n-button>
        <n-button type="primary" @click="exit">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            exit
        </n-button>
        <n-button type="primary" @click="toggle">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            toggle
        </n-button>
    </n-space>
</template>

<script lang="ts" setup>
import { FullscreenOutlined } from "@vicons/antd";
import { useFullscreen } from "@/hooks";

// useFullscreen 接受一个 节点元素 或者一个选择器
const { isEnabled, isFullScreen, full, exit, toggle } = useFullscreen();
<\/script>
`;return(J,K)=>{const o=w,a=z,p=j,f=B,y=D,h=q,u=E("fullscreen");return r(),N("div",W,[$,t(h,{cols:1,"y-gap":12},{default:e(()=>[t(p,null,{default:e(()=>[t(n(_),{title:"基础示例",code:k},{default:e(()=>[i((r(),s(a,{type:"primary"},{icon:e(()=>[t(o,null,{default:e(()=>[t(n(c))]),_:1})]),default:e(()=>[l(" 按钮全屏 ")]),_:1})),[[u]])]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(n(_),{title:"修饰符",code:C},{default:e(()=>[t(f,null,{default:e(()=>[i((r(),s(a,{type:"primary"},{icon:e(()=>[t(o,null,{default:e(()=>[t(n(c))]),_:1})]),default:e(()=>[l(" 全屏 ")]),_:1})),[[u,void 0,void 0,{body:!0}]]),i((r(),s(a,{type:"primary"},{icon:e(()=>[t(o,null,{default:e(()=>[t(n(c))]),_:1})]),default:e(()=>[l(" 按钮全屏 ")]),_:1})),[[u,void 0,"1",{parent:!0}]]),i((r(),s(a,{type:"primary"},{icon:e(()=>[t(o,null,{default:e(()=>[t(n(c))]),_:1})]),default:e(()=>[l(" 按钮全屏 ")]),_:1})),[[u,void 0,void 0,{stop:!0}]])]),_:1})]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(n(_),{class:"full-card",title:"选择器",code:x},{default:e(()=>[i((r(),s(a,{type:"primary"},{icon:e(()=>[t(o,null,{default:e(()=>[t(n(c))]),_:1})]),default:e(()=>[l(" card 全屏 ")]),_:1})),[[u,".full-card"]])]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(n(_),{class:"full-card",title:"函数调用",code:O},{default:e(()=>[t(f,null,{default:e(()=>[t(y,{type:n(d)?"primary":"error",size:"large"},{default:e(()=>[l(g(n(d)?"支持全屏":"不支持全屏"),1)]),_:1},8,["type"]),t(y,{type:n(m)?"primary":"error",size:"large"},{default:e(()=>[l(g(n(m)?"全屏":"非全屏"),1)]),_:1},8,["type"]),t(a,{type:"primary",onClick:n(v)},{icon:e(()=>[t(o,null,{default:e(()=>[t(n(c))]),_:1})]),default:e(()=>[l(" full ")]),_:1},8,["onClick"]),t(a,{type:"primary",onClick:n(F)},{icon:e(()=>[t(o,null,{default:e(()=>[t(n(c))]),_:1})]),default:e(()=>[l(" exit ")]),_:1},8,["onClick"]),t(a,{type:"primary",onClick:n(I)},{icon:e(()=>[t(o,null,{default:e(()=>[t(n(c))]),_:1})]),default:e(()=>[l(" toggle ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})])}}}),R=V(G,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/directive/fullscreen.vue"]]);export{R as default};
