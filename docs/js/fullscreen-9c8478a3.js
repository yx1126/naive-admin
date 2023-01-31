import{d as E,ck as D,j as c,k as x,l as u,m as e,p as O,q as t,af as s,an as i,aq as n,x as y,y as h,as as N,ar as S,ao as w,_ as z}from"../assets/index.106b90c3.js";import{u as V,F as a}from"./use-fullscreen-ea07b08b.js";import{_}from"./CodeCard-07c37cf1.js";import{_ as q,a as T}from"./Grid-30201447.js";const j={class:"fullscreen"},$=O("h1",null,"v-fullscreen",-1),G=E({name:"Fullscreen"}),H=E({...G,setup(J){const{isEnabled:d,isFullScreen:m,full:C,exit:g,toggle:b}=V(),v=`
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
`,k=`
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
`;return(K,L)=>{const l=h,o=N,p=T,f=S,F=w,B=q,r=D("fullscreen");return c(),x("div",j,[$,u(B,{cols:1,"y-gap":12},{default:e(()=>[u(p,null,{default:e(()=>[u(t(_),{title:"\u57FA\u7840\u793A\u4F8B",code:v},{default:e(()=>[s((c(),i(o,{type:"primary"},{icon:e(()=>[u(l,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[n(" \u6309\u94AE\u5168\u5C4F ")]),_:1})),[[r]])]),_:1})]),_:1}),u(p,null,{default:e(()=>[u(t(_),{title:"\u4FEE\u9970\u7B26",code:A},{default:e(()=>[u(f,null,{default:e(()=>[s((c(),i(o,{type:"primary"},{icon:e(()=>[u(l,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[n(" \u5168\u5C4F ")]),_:1})),[[r,void 0,void 0,{body:!0}]]),s((c(),i(o,{type:"primary"},{icon:e(()=>[u(l,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[n(" \u6309\u94AE\u5168\u5C4F ")]),_:1})),[[r,void 0,"1",{parent:!0}]]),s((c(),i(o,{type:"primary"},{icon:e(()=>[u(l,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[n(" \u6309\u94AE\u5168\u5C4F ")]),_:1})),[[r,void 0,void 0,{stop:!0}]])]),_:1})]),_:1})]),_:1}),u(p,null,{default:e(()=>[u(t(_),{class:"full-card",title:"\u9009\u62E9\u5668",code:I},{default:e(()=>[s((c(),i(o,{type:"primary"},{icon:e(()=>[u(l,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[n(" card \u5168\u5C4F ")]),_:1})),[[r,".full-card"]])]),_:1})]),_:1}),u(p,null,{default:e(()=>[u(t(_),{class:"full-card",title:"\u51FD\u6570\u8C03\u7528",code:k},{default:e(()=>[u(f,null,{default:e(()=>[u(F,{type:t(d)?"primary":"error",size:"large"},{default:e(()=>[n(y(t(d)?"\u652F\u6301\u5168\u5C4F":"\u4E0D\u652F\u6301\u5168\u5C4F"),1)]),_:1},8,["type"]),u(F,{type:t(m)?"primary":"error",size:"large"},{default:e(()=>[n(y(t(m)?"\u5168\u5C4F":"\u975E\u5168\u5C4F"),1)]),_:1},8,["type"]),u(o,{type:"primary",onClick:t(C)},{icon:e(()=>[u(l,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[n(" full ")]),_:1},8,["onClick"]),u(o,{type:"primary",onClick:t(g)},{icon:e(()=>[u(l,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[n(" exit ")]),_:1},8,["onClick"]),u(o,{type:"primary",onClick:t(b)},{icon:e(()=>[u(l,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[n(" toggle ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})])}}}),U=z(H,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/directive/fullscreen.vue"]]);export{U as default};
