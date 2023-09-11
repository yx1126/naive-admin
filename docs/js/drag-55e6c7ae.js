import{_ as Q}from"./CodeCard-3c48b4aa.js";import{J as M,K as d,M as V,bB as X,L as Y,d as D,w as Z,G as ee,R as O,a4 as te,g as j,S as oe,f as k,h as l,bC as ne,aI as re,aV as ae,aB as se,aw as le,aG as ie,bD as de,bE as ce,bF as ue,bG as fe,a5 as pe,bH as me,bI as ge,aK as f,bz as ve,j as I,k as N,l as o,m as e,aa as c,W as P,a7 as he,q as h,am as R,p as H,bJ as _e,bK as be,y as we,ac as ye,ab as xe,s as Ce,bk as E,_ as ze}from"../assets/index-5b64e5b7.js";import{_ as Me,a as ke}from"./Grid-18e6bf2a.js";const $e=M("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[d("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),V("closable",[M("alert-body",[d("title",`
 padding-right: 24px;
 `)])]),d("icon",{color:"var(--n-icon-color)"}),M("alert-body",{padding:"var(--n-padding)"},[d("title",{color:"var(--n-title-text-color)"}),d("content",{color:"var(--n-content-text-color)"})]),X({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),d("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),d("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),V("show-icon",[M("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),M("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[d("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[Y("& +",[d("content",{marginTop:"9px"})])]),d("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),d("icon",{transition:"color .3s var(--n-bezier)"})]),Be=Object.assign(Object.assign({},O.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),Ae=D({name:"Alert",inheritAttrs:!1,props:Be,setup(a){Z(()=>{a.onAfterHide!==void 0&&re("alert","`on-after-hide` is deprecated, please use `on-after-leave` instead.")});const{mergedClsPrefixRef:n,mergedBorderedRef:i,inlineThemeDisabled:p,mergedRtlRef:m}=ee(a),g=O("Alert","-alert",$e,me,a,n),L=te("Alert",m,n),$=j(()=>{const{common:{cubicBezierEaseInOut:t},self:r}=g.value,{fontSize:b,borderRadius:w,titleFontWeight:y,lineHeight:x,iconSize:C,iconMargin:A,iconMarginRtl:S,closeIconSize:z,closeBorderRadius:s,closeSize:K,closeMargin:U,closeMarginRtl:W,padding:q}=r,{type:u}=a,{left:G,right:J}=ge(A);return{"--n-bezier":t,"--n-color":r[f("color",u)],"--n-close-icon-size":z,"--n-close-border-radius":s,"--n-close-color-hover":r[f("closeColorHover",u)],"--n-close-color-pressed":r[f("closeColorPressed",u)],"--n-close-icon-color":r[f("closeIconColor",u)],"--n-close-icon-color-hover":r[f("closeIconColorHover",u)],"--n-close-icon-color-pressed":r[f("closeIconColorPressed",u)],"--n-icon-color":r[f("iconColor",u)],"--n-border":r[f("border",u)],"--n-title-text-color":r[f("titleTextColor",u)],"--n-content-text-color":r[f("contentTextColor",u)],"--n-line-height":x,"--n-border-radius":w,"--n-font-size":b,"--n-title-font-weight":y,"--n-icon-size":C,"--n-icon-margin":A,"--n-icon-margin-rtl":S,"--n-close-size":K,"--n-close-margin":U,"--n-close-margin-rtl":W,"--n-padding":q,"--n-icon-margin-left":G,"--n-icon-margin-right":J}}),v=p?oe("alert",j(()=>a.type[0]),$,a):void 0,B=k(!0),T=()=>{const{onAfterLeave:t,onAfterHide:r}=a;t&&t(),r&&r()};return{rtlEnabled:L,mergedClsPrefix:n,mergedBordered:i,visible:B,handleCloseClick:()=>{var t;Promise.resolve((t=a.onClose)===null||t===void 0?void 0:t.call(a)).then(r=>{r!==!1&&(B.value=!1)})},handleAfterLeave:()=>{T()},mergedTheme:g,cssVars:p?void 0:$,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var a;return(a=this.onRender)===null||a===void 0||a.call(this),l(ne,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:n,$slots:i}=this,p={class:[`${n}-alert`,this.themeClass,this.closable&&`${n}-alert--closable`,this.showIcon&&`${n}-alert--show-icon`,this.rtlEnabled&&`${n}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?l("div",Object.assign({},ae(this.$attrs,p)),this.closable&&l(se,{clsPrefix:n,class:`${n}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&l("div",{class:`${n}-alert__border`}),this.showIcon&&l("div",{class:`${n}-alert__icon`,"aria-hidden":"true"},le(i.icon,()=>[l(ie,{clsPrefix:n},{default:()=>{switch(this.type){case"success":return l(fe,null);case"info":return l(ue,null);case"warning":return l(ce,null);case"error":return l(de,null);default:return null}}})])),l("div",{class:[`${n}-alert-body`,this.mergedBordered&&`${n}-alert-body--bordered`]},pe(i.header,m=>{const g=m||this.title;return g?l("div",{class:`${n}-alert-body__title`},g):null}),i.default&&l("div",{class:`${n}-alert-body__content`},i))):null}})}}),Ie={class:"drag"},Re=H("h1",null,"v-drag",-1),Ee=H("p",null,'如果未使用 NModel 预设 根节点需设置 role="dialog"。',-1),Le=H("p",null,"例如：基础设置",-1),Te=D({name:"Drag"}),Se=D({...Te,setup(a){const n=k(!1),i=k(!1),p=k(!1),m=k(!1);let g;function L(){const _=_e(".n-modal.confirm"),t=_==null?void 0:_.querySelector(".n-dialog__title");g=be(t,{move:_})}function $(){g()}const v=`
<template>
    <n-button type="primary" @click="showBaseModal = true">基础弹窗</n-button>
    <n-modal v-model:show="showBaseModal" style="width: 500px;">
        <n-card v-drag style="width: 600px" title="模态框" :bordered="false" size="huge" role="dialog" aria-modal="true">
            <template #header-extra>噢！</template>
            内容
            <template #footer>尾部</template>
        </n-card>
    </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showBaseModal = ref(false);
<\/script>
`,B=`
<template>
    <n-button type="primary" @click="showCardModal = true">使用 card 预设</n-button>
    <n-modal v-model:show="showCardModal" preset="card" title="卡片预设" :bordered="false" :segmented="{ content: 'soft', footer: 'soft'}" style="width: 500px;">
        <template #header-extra>噢！</template>
            <span v-drag>内容</span>
        <template #footer>尾部</template>
    </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showCardModal = ref(false);
<\/script>
`,T=`
<template>
    <n-button type="primary" @click="showDialogModal = true">使用 dialog 预设</n-button>
    <n-modal v-model:show="showDialogModal" preset="card" title="提示" positive-text="确认" negative-text="算了">
        <span v-drag>你确认?</span>
    </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showDialogModal = ref(false);
<\/script>
`,F=`
<template>
    <n-button type="primary" @click="showFnModal = true">函数调用</n-button>
    <n-modal v-model:show="showFnModal" class="confirm" preset="card" title="提示" content="你确认?" positive-text="确认" negative-text="算了" @after-enter="onAfterEnter" @after-leave="onAfterLeave" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { $select } from "@/util/dom";
import setDrag from "@/util/drag";

const showFnModal = ref(false);
let stop: () => void;

function onAfterEnter() {
    const moveNode = $select(".n-modal.confirm") as HTMLElement;
    const triggerNode = moveNode?.querySelector(".n-dialog__title") as HTMLElement;
    stop = setDrag(triggerNode, { move: moveNode });
}

function onAfterLeave() {
    stop();
}
<\/script>
`;return(_,t)=>{const r=Ae,b=we,w=ye,y=xe,x=Q,C=Me,A=ke,S=Ce,z=ve("drag");return I(),N("div",Ie,[Re,o(r,{"mb-12px":"",title:"提示",type:"info",style:{width:"600px"},closable:""},{default:e(()=>[Ee,Le]),_:1}),o(A,{cols:1,"y-gap":"12"},{default:e(()=>[o(C,null,{default:e(()=>[o(x,{title:"基础示例",code:v},{default:e(()=>[o(y,{vertical:""},{default:e(()=>[o(w,{type:"primary",onClick:t[0]||(t[0]=s=>n.value=!0)},{icon:e(()=>[o(b,{icon:"drag"})]),default:e(()=>[c(" 基础弹窗 ")]),_:1})]),_:1})]),_:1})]),_:1}),o(C,null,{default:e(()=>[o(x,{title:"使用 card 预设",code:B},{default:e(()=>[o(y,{vertical:""},{default:e(()=>[o(w,{type:"primary",onClick:t[1]||(t[1]=s=>i.value=!0)},{icon:e(()=>[o(b,{icon:"drag"})]),default:e(()=>[c(" 使用 card 预设 ")]),_:1})]),_:1})]),_:1})]),_:1}),o(C,null,{default:e(()=>[o(x,{title:"使用 dialog 预设",code:T},{default:e(()=>[o(y,{vertical:""},{default:e(()=>[o(w,{type:"primary",onClick:t[2]||(t[2]=s=>p.value=!0)},{icon:e(()=>[o(b,{icon:"drag"})]),default:e(()=>[c(" 使用 dialog 预设 ")]),_:1})]),_:1})]),_:1})]),_:1}),o(C,null,{default:e(()=>[o(x,{title:"函数调用",code:F},{default:e(()=>[o(y,{vertical:""},{default:e(()=>[o(w,{type:"primary",onClick:t[3]||(t[3]=s=>m.value=!0)},{icon:e(()=>[o(b,{icon:"drag"})]),default:e(()=>[c(" 函数调用 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(h(E),{show:h(n),"onUpdate:show":t[4]||(t[4]=s=>R(n)?n.value=s:null),style:{width:"500px"}},{default:e(()=>[P((I(),he(S,{style:{width:"600px"},title:"模态框",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{"header-extra":e(()=>[c("噢！")]),footer:e(()=>[c("尾部")]),default:e(()=>[c(" 内容 ")]),_:1})),[[z]])]),_:1},8,["show"]),o(h(E),{show:h(i),"onUpdate:show":t[5]||(t[5]=s=>R(i)?i.value=s:null),preset:"card",title:"卡片预设",bordered:!1,segmented:{content:"soft",footer:"soft"},style:{width:"500px"}},{"header-extra":e(()=>[c("噢！")]),footer:e(()=>[c("尾部")]),default:e(()=>[P((I(),N("span",null,[c("内容")])),[[z]])]),_:1},8,["show"]),o(h(E),{show:h(p),"onUpdate:show":t[6]||(t[6]=s=>R(p)?p.value=s:null),preset:"dialog",title:"提示","positive-text":"确认","negative-text":"算了"},{default:e(()=>[P((I(),N("span",null,[c("你确认?")])),[[z]])]),_:1},8,["show"]),o(h(E),{show:h(m),"onUpdate:show":t[7]||(t[7]=s=>R(m)?m.value=s:null),class:"confirm",preset:"dialog",title:"提示",content:"你确认?","positive-text":"确认","negative-text":"算了",onAfterEnter:L,onAfterLeave:$},null,8,["show"])])}}}),He=ze(Se,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/directive/drag.vue"]]);export{He as default};
