import{_ as G}from"./CodeCard-8b7cc9a5.js";import{$ as y,a0 as i,a2 as S,cg as Q,a1 as X,d as j,J as Y,a6 as V,ag as Z,c as H,a7 as ee,a as E,B as l,O as te,bV as oe,aK as ne,ax as re,ch as se,ci as ae,cj as le,ck as ie,ah as ue,cl as ce,cm as de,cn as pe,av as p,b_ as fe,b as M,e as T,f as o,g as e,a9 as L,aj as me,j as $,i as N,am as u,co as ge,cp as _e,m as he,ao as ve,an as be,k as Be,c3 as k}from"../assets/index.c1922953.js";import{_ as we}from"./GridItem-4c6c5bcd.js";import{_ as Ce}from"./Grid-2c849a79.js";var Fe=y("alert",`
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
 `,[X("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]);const ye=Object.assign(Object.assign({},V.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function});var Ee=j({name:"Alert",inheritAttrs:!1,props:ye,setup(s){const{mergedClsPrefixRef:n,mergedBorderedRef:c,inlineThemeDisabled:f,mergedRtlRef:_}=Y(s),m=V("Alert","-alert",Fe,de,s,n),D=Z("Alert",_,n),x=H(()=>{const{common:{cubicBezierEaseInOut:t},self:r}=m.value,{fontSize:v,borderRadius:b,titleFontWeight:B,lineHeight:w,iconSize:C,iconMargin:z,iconMarginRtl:R,closeIconSize:F,closeBorderRadius:a,closeSize:O,closeMargin:U,closeMarginRtl:W,padding:q}=r,{type:d}=s,{left:K,right:J}=pe(z);return{"--n-bezier":t,"--n-color":r[p("color",d)],"--n-close-icon-size":F,"--n-close-border-radius":a,"--n-close-color-hover":r[p("closeColorHover",d)],"--n-close-color-pressed":r[p("closeColorPressed",d)],"--n-close-icon-color":r[p("closeIconColor",d)],"--n-close-icon-color-hover":r[p("closeIconColorHover",d)],"--n-close-icon-color-pressed":r[p("closeIconColorPressed",d)],"--n-icon-color":r[p("iconColor",d)],"--n-border":r[p("border",d)],"--n-title-text-color":r[p("titleTextColor",d)],"--n-content-text-color":r[p("contentTextColor",d)],"--n-line-height":w,"--n-border-radius":b,"--n-font-size":v,"--n-title-font-weight":B,"--n-icon-size":C,"--n-icon-margin":z,"--n-icon-margin-rtl":R,"--n-close-size":O,"--n-close-margin":U,"--n-close-margin-rtl":W,"--n-padding":q,"--n-icon-margin-left":K,"--n-icon-margin-right":J}}),g=f?ee("alert",H(()=>s.type[0]),x,s):void 0,A=E(!0),I=()=>{const{onAfterLeave:t,onAfterHide:r}=s;t&&t(),r&&r()};return{rtlEnabled:D,mergedClsPrefix:n,mergedBordered:c,visible:A,handleCloseClick:()=>{var t;Promise.resolve((t=s.onClose)===null||t===void 0?void 0:t.call(s)).then(r=>{r!==!1&&(A.value=!1)})},handleAfterLeave:()=>{I()},mergedTheme:m,cssVars:f?void 0:x,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){var s;return(s=this.onRender)===null||s===void 0||s.call(this),l(ce,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:n,$slots:c}=this,f={class:[`${n}-alert`,this.themeClass,this.closable&&`${n}-alert--closable`,this.showIcon&&`${n}-alert--show-icon`,this.rtlEnabled&&`${n}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?l("div",Object.assign({},te(this.$attrs,f)),this.closable&&l(oe,{clsPrefix:n,class:`${n}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&l("div",{class:`${n}-alert__border`}),this.showIcon&&l("div",{class:`${n}-alert__icon`,"aria-hidden":"true"},ne(c.icon,()=>[l(re,{clsPrefix:n},{default:()=>{switch(this.type){case"success":return l(ie,null);case"info":return l(le,null);case"warning":return l(ae,null);case"error":return l(se,null);default:return null}}})])),l("div",{class:[`${n}-alert-body`,this.mergedBordered&&`${n}-alert-body--bordered`]},ue(c.header,_=>{const m=_||this.title;return m?l("div",{class:`${n}-alert-body__title`},m):null}),c.default&&l("div",{class:`${n}-alert-body__content`},c))):null}})}});const xe={class:"drag"},Ae=N("h1",null,"v-drag",-1),ze=N("p",null,'\u5982\u679C\u672A\u4F7F\u7528 NModel \u9884\u8BBE \u6839\u8282\u70B9\u9700\u8BBE\u7F6E role="dialog"\u3002',-1),Me=N("p",null,"\u4F8B\u5982\uFF1A\u57FA\u7840\u8BBE\u7F6E",-1),$e=u(" \u57FA\u7840\u5F39\u7A97 "),ke=u(" \u4F7F\u7528 card \u9884\u8BBE "),De=u(" \u4F7F\u7528 dialog \u9884\u8BBE "),Ie=u(" \u51FD\u6570\u8C03\u7528 "),Re=u("\u5662\uFF01"),Te=u(" \u5185\u5BB9 "),Le=u("\u5C3E\u90E8"),Ne=u("\u5662\uFF01"),Pe=u("\u5185\u5BB9"),Se=[Pe],He=u("\u5C3E\u90E8"),je=u("\u4F60\u786E\u8BA4?"),Ve=[je],Oe={name:"Drag"},Je=j({...Oe,setup(s){const n=E(!1),c=E(!1),f=E(!1),_=E(!1);let m;function D(){const h=ge(".n-modal.confirm"),t=h==null?void 0:h.querySelector(".n-dialog__title");m=_e(t,{move:h})}function x(){m()}const g=`
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
`;return(h,t)=>{const r=Ee,v=he,b=ve,B=be,w=G,C=we,z=Ce,R=Be,F=fe("drag");return M(),T("div",xe,[Ae,o(r,{"mb-12px":"",title:"\u63D0\u793A",type:"info",style:{width:"600px"},closable:""},{default:e(()=>[ze,Me]),_:1}),o(z,{cols:1,"y-gap":"12"},{default:e(()=>[o(C,null,{default:e(()=>[o(w,{title:"\u57FA\u7840\u793A\u4F8B",code:g},{default:e(()=>[o(B,{vertical:""},{default:e(()=>[o(b,{type:"primary",onClick:t[0]||(t[0]=a=>n.value=!0)},{icon:e(()=>[o(v,{icon:"drag"})]),default:e(()=>[$e]),_:1})]),_:1})]),_:1})]),_:1}),o(C,null,{default:e(()=>[o(w,{title:"\u4F7F\u7528 card \u9884\u8BBE",code:A},{default:e(()=>[o(B,{vertical:""},{default:e(()=>[o(b,{type:"primary",onClick:t[1]||(t[1]=a=>c.value=!0)},{icon:e(()=>[o(v,{icon:"drag"})]),default:e(()=>[ke]),_:1})]),_:1})]),_:1})]),_:1}),o(C,null,{default:e(()=>[o(w,{title:"\u4F7F\u7528 dialog \u9884\u8BBE",code:I},{default:e(()=>[o(B,{vertical:""},{default:e(()=>[o(b,{type:"primary",onClick:t[2]||(t[2]=a=>f.value=!0)},{icon:e(()=>[o(v,{icon:"drag"})]),default:e(()=>[De]),_:1})]),_:1})]),_:1})]),_:1}),o(C,null,{default:e(()=>[o(w,{title:"\u51FD\u6570\u8C03\u7528",code:P},{default:e(()=>[o(B,{vertical:""},{default:e(()=>[o(b,{type:"primary",onClick:t[3]||(t[3]=a=>_.value=!0)},{icon:e(()=>[o(v,{icon:"drag"})]),default:e(()=>[Ie]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o($(k),{show:n.value,"onUpdate:show":t[4]||(t[4]=a=>n.value=a),style:{width:"500px"}},{default:e(()=>[L((M(),me(R,{style:{width:"600px"},title:"\u6A21\u6001\u6846",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{"header-extra":e(()=>[Re]),footer:e(()=>[Le]),default:e(()=>[Te]),_:1})),[[F]])]),_:1},8,["show"]),o($(k),{show:c.value,"onUpdate:show":t[5]||(t[5]=a=>c.value=a),preset:"card",title:"\u5361\u7247\u9884\u8BBE",bordered:!1,segmented:{content:"soft",footer:"soft"},style:{width:"500px"}},{"header-extra":e(()=>[Ne]),footer:e(()=>[He]),default:e(()=>[L((M(),T("span",null,Se)),[[F]])]),_:1},8,["show"]),o($(k),{show:f.value,"onUpdate:show":t[6]||(t[6]=a=>f.value=a),preset:"dialog",title:"\u63D0\u793A","positive-text":"\u786E\u8BA4","negative-text":"\u7B97\u4E86"},{default:e(()=>[L((M(),T("span",null,Ve)),[[F]])]),_:1},8,["show"]),o($(k),{show:_.value,"onUpdate:show":t[7]||(t[7]=a=>_.value=a),class:"confirm",preset:"dialog",title:"\u63D0\u793A",content:"\u4F60\u786E\u8BA4?","positive-text":"\u786E\u8BA4","negative-text":"\u7B97\u4E86",onAfterEnter:D,onAfterLeave:x},null,8,["show"])])}}});export{Je as default};
