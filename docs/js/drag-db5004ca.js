import{_ as G}from"./CodeCard-462f1329.js";import{$ as y,a0 as i,a2 as S,cp as Q,a1 as X,d as V,w as Y,aV as Z,J as ee,a6 as j,ag as te,c as H,a7 as oe,a as E,B as l,O as ne,cq as re,aK as ae,ax as se,cr as le,cs as ie,ct as ue,cu as ce,ah as de,cv as fe,cw as pe,cx as me,av as f,_ as _e,c9 as ge,b as $,e as T,f as o,g as e,a9 as L,aj as ve,j as M,i as N,am as u,cy as he,cz as be,m as Be,ao as we,an as Ce,k as Fe,cc as k}from"../assets/index.78bcc101.js";import{_ as ye}from"./GridItem-ad413eaa.js";import{_ as Ee}from"./Grid-32073c49.js";var xe=y("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[i("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),S("closable",[y("alert-body",[i("title",`
 padding-right: 24px;
 `)])]),i("icon",{color:"var(--n-icon-color)"}),y("alert-body",{padding:"var(--n-padding)"},[i("title",{color:"var(--n-title-text-color)"}),i("content",{color:"var(--n-content-text-color)"})]),Q({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),i("icon",`
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
 `),i("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),S("show-icon",[y("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),y("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[i("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[X("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]);const Ae=Object.assign(Object.assign({},j.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function});var ze=V({name:"Alert",inheritAttrs:!1,props:Ae,setup(a){Y(()=>{a.onAfterHide!==void 0&&Z("alert","`on-after-hide` is deprecated, please use `on-after-leave` instead.")});const{mergedClsPrefixRef:n,mergedBorderedRef:c,inlineThemeDisabled:p,mergedRtlRef:g}=ee(a),m=j("Alert","-alert",xe,pe,a,n),D=te("Alert",g,n),x=H(()=>{const{common:{cubicBezierEaseInOut:t},self:r}=m.value,{fontSize:h,borderRadius:b,titleFontWeight:B,lineHeight:w,iconSize:C,iconMargin:z,iconMarginRtl:R,closeIconSize:F,closeBorderRadius:s,closeSize:O,closeMargin:U,closeMarginRtl:q,padding:W}=r,{type:d}=a,{left:K,right:J}=me(z);return{"--n-bezier":t,"--n-color":r[f("color",d)],"--n-close-icon-size":F,"--n-close-border-radius":s,"--n-close-color-hover":r[f("closeColorHover",d)],"--n-close-color-pressed":r[f("closeColorPressed",d)],"--n-close-icon-color":r[f("closeIconColor",d)],"--n-close-icon-color-hover":r[f("closeIconColorHover",d)],"--n-close-icon-color-pressed":r[f("closeIconColorPressed",d)],"--n-icon-color":r[f("iconColor",d)],"--n-border":r[f("border",d)],"--n-title-text-color":r[f("titleTextColor",d)],"--n-content-text-color":r[f("contentTextColor",d)],"--n-line-height":w,"--n-border-radius":b,"--n-font-size":h,"--n-title-font-weight":B,"--n-icon-size":C,"--n-icon-margin":z,"--n-icon-margin-rtl":R,"--n-close-size":O,"--n-close-margin":U,"--n-close-margin-rtl":q,"--n-padding":W,"--n-icon-margin-left":K,"--n-icon-margin-right":J}}),_=p?oe("alert",H(()=>a.type[0]),x,a):void 0,A=E(!0),I=()=>{const{onAfterLeave:t,onAfterHide:r}=a;t&&t(),r&&r()};return{rtlEnabled:D,mergedClsPrefix:n,mergedBordered:c,visible:A,handleCloseClick:()=>{var t;Promise.resolve((t=a.onClose)===null||t===void 0?void 0:t.call(a)).then(r=>{r!==!1&&(A.value=!1)})},handleAfterLeave:()=>{I()},mergedTheme:m,cssVars:p?void 0:x,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){var a;return(a=this.onRender)===null||a===void 0||a.call(this),l(fe,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:n,$slots:c}=this,p={class:[`${n}-alert`,this.themeClass,this.closable&&`${n}-alert--closable`,this.showIcon&&`${n}-alert--show-icon`,this.rtlEnabled&&`${n}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?l("div",Object.assign({},ne(this.$attrs,p)),this.closable&&l(re,{clsPrefix:n,class:`${n}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&l("div",{class:`${n}-alert__border`}),this.showIcon&&l("div",{class:`${n}-alert__icon`,"aria-hidden":"true"},ae(c.icon,()=>[l(se,{clsPrefix:n},{default:()=>{switch(this.type){case"success":return l(ce,null);case"info":return l(ue,null);case"warning":return l(ie,null);case"error":return l(le,null);default:return null}}})])),l("div",{class:[`${n}-alert-body`,this.mergedBordered&&`${n}-alert-body--bordered`]},de(c.header,g=>{const m=g||this.title;return m?l("div",{class:`${n}-alert-body__title`},m):null}),c.default&&l("div",{class:`${n}-alert-body__content`},c))):null}})}});const $e={class:"drag"},Me=N("h1",null,"v-drag",-1),ke=N("p",null,'\u5982\u679C\u672A\u4F7F\u7528 NModel \u9884\u8BBE \u6839\u8282\u70B9\u9700\u8BBE\u7F6E role="dialog"\u3002',-1),De=N("p",null,"\u4F8B\u5982\uFF1A\u57FA\u7840\u8BBE\u7F6E",-1),Ie=u(" \u57FA\u7840\u5F39\u7A97 "),Re=u(" \u4F7F\u7528 card \u9884\u8BBE "),Te=u(" \u4F7F\u7528 dialog \u9884\u8BBE "),Le=u(" \u51FD\u6570\u8C03\u7528 "),Ne=u("\u5662\uFF01"),Pe=u(" \u5185\u5BB9 "),Se=u("\u5C3E\u90E8"),He=u("\u5662\uFF01"),Ve=u("\u5185\u5BB9"),je=[Ve],Oe=u("\u5C3E\u90E8"),Ue=u("\u4F60\u786E\u8BA4?"),qe=[Ue],We={name:"Drag"},Ke=V({...We,setup(a){const n=E(!1),c=E(!1),p=E(!1),g=E(!1);let m;function D(){const v=he(".n-modal.confirm"),t=v==null?void 0:v.querySelector(".n-dialog__title");m=be(t,{move:v})}function x(){m()}const _=`
<template>
    <n-button type="primary" @click="showBaseModal = true">\u57FA\u7840\u5F39\u7A97</n-button>
    <n-modal v-model:show="showBaseModal" style="width: 500px;">
        <n-card v-drag style="width: 600px" title="\u6A21\u6001\u6846" :bordered="false" size="huge" role="dialog" aria-modal="true">
            <template #header-extra>\u5662\uFF01</template>
            \u5185\u5BB9
            <template #footer>\u5C3E\u90E8</template>
        </n-card>
    </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showBaseModal = ref(false);
<\/script>
`,A=`
<template>
    <n-button type="primary" @click="showCardModal = true">\u4F7F\u7528 card \u9884\u8BBE</n-button>
    <n-modal v-model:show="showCardModal" preset="card" title="\u5361\u7247\u9884\u8BBE" :bordered="false" :segmented="{ content: 'soft', footer: 'soft'}" style="width: 500px;">
        <template #header-extra>\u5662\uFF01</template>
            <span v-drag>\u5185\u5BB9</span>
        <template #footer>\u5C3E\u90E8</template>
    </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showCardModal = ref(false);
<\/script>
`,I=`
<template>
    <n-button type="primary" @click="showDialogModal = true">\u4F7F\u7528 dialog \u9884\u8BBE</n-button>
    <n-modal v-model:show="showDialogModal" preset="card" title="\u63D0\u793A" positive-text="\u786E\u8BA4" negative-text="\u7B97\u4E86">
        <span v-drag>\u4F60\u786E\u8BA4?</span>
    </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showDialogModal = ref(false);
<\/script>
`,P=`
<template>
    <n-button type="primary" @click="showFnModal = true">\u51FD\u6570\u8C03\u7528</n-button>
    <n-modal v-model:show="showFnModal" class="confirm" preset="card" title="\u63D0\u793A" content="\u4F60\u786E\u8BA4?" positive-text="\u786E\u8BA4" negative-text="\u7B97\u4E86" @after-enter="onAfterEnter" @after-leave="onAfterLeave" />
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
`;return(v,t)=>{const r=ze,h=Be,b=we,B=Ce,w=G,C=ye,z=Ee,R=Fe,F=ge("drag");return $(),T("div",$e,[Me,o(r,{"mb-12px":"",title:"\u63D0\u793A",type:"info",style:{width:"600px"},closable:""},{default:e(()=>[ke,De]),_:1}),o(z,{cols:1,"y-gap":"12"},{default:e(()=>[o(C,null,{default:e(()=>[o(w,{title:"\u57FA\u7840\u793A\u4F8B",code:_},{default:e(()=>[o(B,{vertical:""},{default:e(()=>[o(b,{type:"primary",onClick:t[0]||(t[0]=s=>n.value=!0)},{icon:e(()=>[o(h,{icon:"drag"})]),default:e(()=>[Ie]),_:1})]),_:1})]),_:1})]),_:1}),o(C,null,{default:e(()=>[o(w,{title:"\u4F7F\u7528 card \u9884\u8BBE",code:A},{default:e(()=>[o(B,{vertical:""},{default:e(()=>[o(b,{type:"primary",onClick:t[1]||(t[1]=s=>c.value=!0)},{icon:e(()=>[o(h,{icon:"drag"})]),default:e(()=>[Re]),_:1})]),_:1})]),_:1})]),_:1}),o(C,null,{default:e(()=>[o(w,{title:"\u4F7F\u7528 dialog \u9884\u8BBE",code:I},{default:e(()=>[o(B,{vertical:""},{default:e(()=>[o(b,{type:"primary",onClick:t[2]||(t[2]=s=>p.value=!0)},{icon:e(()=>[o(h,{icon:"drag"})]),default:e(()=>[Te]),_:1})]),_:1})]),_:1})]),_:1}),o(C,null,{default:e(()=>[o(w,{title:"\u51FD\u6570\u8C03\u7528",code:P},{default:e(()=>[o(B,{vertical:""},{default:e(()=>[o(b,{type:"primary",onClick:t[3]||(t[3]=s=>g.value=!0)},{icon:e(()=>[o(h,{icon:"drag"})]),default:e(()=>[Le]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(M(k),{show:n.value,"onUpdate:show":t[4]||(t[4]=s=>n.value=s),style:{width:"500px"}},{default:e(()=>[L(($(),ve(R,{style:{width:"600px"},title:"\u6A21\u6001\u6846",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{"header-extra":e(()=>[Ne]),footer:e(()=>[Se]),default:e(()=>[Pe]),_:1})),[[F]])]),_:1},8,["show"]),o(M(k),{show:c.value,"onUpdate:show":t[5]||(t[5]=s=>c.value=s),preset:"card",title:"\u5361\u7247\u9884\u8BBE",bordered:!1,segmented:{content:"soft",footer:"soft"},style:{width:"500px"}},{"header-extra":e(()=>[He]),footer:e(()=>[Oe]),default:e(()=>[L(($(),T("span",null,je)),[[F]])]),_:1},8,["show"]),o(M(k),{show:p.value,"onUpdate:show":t[6]||(t[6]=s=>p.value=s),preset:"dialog",title:"\u63D0\u793A","positive-text":"\u786E\u8BA4","negative-text":"\u7B97\u4E86"},{default:e(()=>[L(($(),T("span",null,qe)),[[F]])]),_:1},8,["show"]),o(M(k),{show:g.value,"onUpdate:show":t[7]||(t[7]=s=>g.value=s),class:"confirm",preset:"dialog",title:"\u63D0\u793A",content:"\u4F60\u786E\u8BA4?","positive-text":"\u786E\u8BA4","negative-text":"\u7B97\u4E86",onAfterEnter:D,onAfterLeave:x},null,8,["show"])])}}});var Ye=_e(Ke,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/directive/drag.vue"]]);export{Ye as default};
