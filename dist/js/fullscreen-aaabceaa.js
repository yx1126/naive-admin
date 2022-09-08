import{d as k,c0 as B,b as r,e as D,f as u,g as e,j as t,a9 as i,aj as p,am as l,l as E,i as x,m as O,ao as N,an as S,ak as z}from"../assets/index.c2091c65.js";import{u as V,F as a}from"./use-fullscreen-4b4de3a8.js";import{_}from"./CodeCard-42a4473b.js";import{_ as j}from"./GridItem-90b32be5.js";import{_ as w}from"./Grid-22423f04.js";const T={class:"fullscreen"},$=x("h1",null,"v-fullscreen",-1),q=l(" \u6309\u94AE\u5168\u5C4F "),G=l(" \u5168\u5C4F "),H=l(" \u6309\u94AE\u5168\u5C4F "),J=l(" \u6309\u94AE\u5168\u5C4F "),K=l(" card \u5168\u5C4F "),L=l(" full "),M=l(" exit "),P=l(" toggle "),Q={name:"Fullscreen"},te=k({...Q,setup(R){const{isEnabled:m,isFullScreen:f,full:C,exit:g,toggle:b}=V(),v=`
<template>
    <div>
        <n-button v-fullscreen type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            \u6309\u94AE\u5168\u5C4F
        </n-button>
    <div>
</template>
`,A=`
<template>
    <n-space>
        // body \u7F51\u9875\u5168\u5C4F
        <n-button v-fullscreen.body type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            \u5168\u5C4F
        </n-button>

        // parent\uFF1A\u5C06\u70B9\u51FB\u4E8B\u4EF6\u6302\u8F7D\u5230\u7236\u7EA7\u5143\u7D20 arg: \u63A5\u6536\u4E00\u4E2ANumber\u503C \u5411\u4E0A\u67E5\u627E\u7684\u7236\u5143\u7D20\u5C42\u7EA7 \u9ED8\u8BA4\u4E3A1
        <n-button v-fullscreen:1.parent type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            \u6309\u94AE\u5168\u5C4F
        </n-button>

        // \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1
        <n-button v-fullscreen.stop type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            card \u5168\u5C4F
        </n-button>
    </n-space>
</template>
`,I=`
<template>
    <n-card class="full-card" title="\u9009\u62E9\u5668">
        <n-button v-fullscreen="'.full-card'" type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            card \u5168\u5C4F
        </n-button>
    </n-card>
</template>
`,h=`
<template>
    <n-space>
        <n-tag :type="isEnabled ? 'primary' : 'error'" size="large">{{ isEnabled ? "\u652F\u6301\u5168\u5C4F" : "\u4E0D\u652F\u6301\u5168\u5C4F" }}</n-tag>
        <n-tag :type="isFullScreen ? 'primary' : 'error'" size="large">{{ isFullScreen ? "\u5168\u5C4F" : "\u975E\u5168\u5C4F" }}</n-tag>
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

// useFullscreen \u63A5\u53D7\u4E00\u4E2A \u8282\u70B9\u5143\u7D20 \u6216\u8005\u4E00\u4E2A\u9009\u62E9\u5668
const { isEnabled, isFullScreen, full, exit, toggle } = useFullscreen();
<\/script>
`;return(U,W)=>{const n=O,o=N,c=j,F=S,d=w,y=z,s=B("fullscreen");return r(),D("div",T,[$,u(d,{cols:2,"x-gap":"12"},{default:e(()=>[u(c,null,{default:e(()=>[u(d,{cols:1,"y-gap":"12"},{default:e(()=>[u(c,null,{default:e(()=>[u(t(_),{title:"\u57FA\u7840\u793A\u4F8B",code:v},{default:e(()=>[i((r(),p(o,{type:"primary"},{icon:e(()=>[u(n,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[q]),_:1})),[[s]])]),_:1})]),_:1}),u(c,null,{default:e(()=>[u(t(_),{title:"\u4FEE\u9970\u7B26",code:A},{default:e(()=>[u(F,null,{default:e(()=>[i((r(),p(o,{type:"primary"},{icon:e(()=>[u(n,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[G]),_:1})),[[s,void 0,void 0,{body:!0}]]),i((r(),p(o,{type:"primary"},{icon:e(()=>[u(n,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[H]),_:1})),[[s,void 0,"1",{parent:!0}]]),i((r(),p(o,{type:"primary"},{icon:e(()=>[u(n,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[J]),_:1})),[[s,void 0,void 0,{stop:!0}]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),u(c,null,{default:e(()=>[u(d,{cols:1,"y-gap":"12"},{default:e(()=>[u(c,null,{default:e(()=>[u(t(_),{class:"full-card",title:"\u9009\u62E9\u5668",code:I},{default:e(()=>[i((r(),p(o,{type:"primary"},{icon:e(()=>[u(n,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[K]),_:1})),[[s,".full-card"]])]),_:1})]),_:1}),u(c,null,{default:e(()=>[u(t(_),{class:"full-card",title:"\u51FD\u6570\u8C03\u7528",code:h},{default:e(()=>[u(F,null,{default:e(()=>[u(y,{type:t(m)?"primary":"error",size:"large"},{default:e(()=>[l(E(t(m)?"\u652F\u6301\u5168\u5C4F":"\u4E0D\u652F\u6301\u5168\u5C4F"),1)]),_:1},8,["type"]),u(y,{type:t(f)?"primary":"error",size:"large"},{default:e(()=>[l(E(t(f)?"\u5168\u5C4F":"\u975E\u5168\u5C4F"),1)]),_:1},8,["type"]),u(o,{type:"primary",onClick:t(C)},{icon:e(()=>[u(n,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[L]),_:1},8,["onClick"]),u(o,{type:"primary",onClick:t(g)},{icon:e(()=>[u(n,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[M]),_:1},8,["onClick"]),u(o,{type:"primary",onClick:t(b)},{icon:e(()=>[u(n,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[P]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}});export{te as default};
