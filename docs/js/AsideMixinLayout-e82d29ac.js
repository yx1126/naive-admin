import{d as M,cL as N,p as $,cW as E,a as v,c as l,cM as f,q as F,f as e,bq as H}from"../assets/index.78bcc101.js";import{T as I,N as b,L as U,M as w,a as u,H as z,b as C}from"./Logo-211dbfa8.js";import{N as S,C as A,B as P}from"./Breadcrumb-a21f65a4.js";import"./use-fullscreen-f5a36162.js";import"./index-d95b7151.js";import"./FormItem-0acf33bf.js";import"./Grid-32073c49.js";import"./ReloadOutlined-e804d82e.js";import"./Avatar-a9d73c70.js";import"./Dropdown-0a60bdfb.js";import"./ChevronRight-be6f26e2.js";import"./create-ref-setter-113bfc30.js";import"./use-deounce-c6228951.js";var _=M({name:"AsideMixinLayout",props:{nativeScrollbar:{type:Boolean,default:!0},menuOptions:{type:Array,default:()=>[]},headerFixed:{type:Boolean,default:!0},tagsFixed:{type:Boolean,default:!0},collapsed:{type:Boolean,default:!0},inverted:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1}},emits:["update:collapsed"],setup(a,{emit:r}){const s=N(),o=$(),i=E(),m=v(!1),n=v(""),x=l(()=>["dark"].includes(o.navMode)),g=l(()=>o.isShowTabs),T=l(()=>a.tagsFixed&&g.value?f.tagsHeight:0),y=l(()=>{var t;return(t=s.matched.filter(d=>d.path)[0])==null?void 0:t.path}),L=l(()=>a.collapsed?a.menuOptions.map(t=>({...t,name:void 0})):a.menuOptions),p=l(()=>{var t;return((t=a.menuOptions.find(d=>n.value?d.path===n.value:d.path===y.value))==null?void 0:t.children)||[]}),V=l(()=>({"--theme-color":o.themeColor}));F(()=>s.fullPath,()=>{s.fullPath.startsWith("/redirect")||h()},{immediate:!0});function B(){r("update:collapsed",!a.collapsed)}function O(t){return{onmouseenter:()=>{if(t.isLink){c();return}n.value=t.path,h()},onmouseleave:()=>{p.value.length<=0&&c()}}}function c(){n.value="",h()}function h(){m.value=p.value.length<=0}return{defaultInverted:x,defaultValue:y,isShowTabs:g,contentTop:T,rootMenuOptions:L,menuChildrensOptions:p,layoutWrapperStyle:V,isCollapsed:m,onUpdateCollapsed:B,themeVars:i,nodeProps:O,onClearEnterValue:c}},render(){const a=`transition: transform 0.3s ${this.themeVars.cubicBezierEaseInOut}; transform: translateX(50%) translateY(-50%) rotate(${this.collapsed?180:0}deg)`,r=this.isCollapsed?"":`transition: right 0.3s ${this.themeVars.cubicBezierEaseInOut}; right: -${this.isCollapsed?28:188}px`,s=["arrow-circle",!0].includes(this.showTrigger),o=this.showTrigger==="bar"?"bar":s&&this.isCollapsed?"arrow-circle":!1,i=this.isShowTabs?e(b,{class:"layout-tags",bordered:!0,position:this.tagsFixed?"absolute":"static"},{default:()=>[e(I,null,null)]}):null;return e(u,{class:"layout-wrapper layout-wrapper-asidemixin","has-sider":!0,position:"absolute",style:this.layoutWrapperStyle},{default:()=>[e("div",{class:"layout-sider-wrapper"},[e(S,{class:"layout-sider",collapsed:this.collapsed,"collapse-mode":"width",width:140,inverted:this.defaultInverted,bordered:!0,"native-scrollbar":this.nativeScrollbar,"collapsed-trigger-style":r,"trigger-style":r,"show-trigger":o,"onUpdate:collapsed":this.onUpdateCollapsed},{default:()=>[e(U,{collapsed:this.collapsed,width:"auto",height:f.headerHeight,indent:10,onmouseenter:this.onClearEnterValue},null),e(w,{style:"--n-item-height: 36px;",options:this.rootMenuOptions,value:this.defaultValue,"root-indent":10,"collapsed-icon-size":20,"children-field":"noChild","node-props":this.nodeProps},null)]}),e(A,{class:"mixin-collapse",collapsed:this.collapsed,size:this.collapsed?24:22,width:140,border:this.defaultInverted?"top":"top,right",inverted:this.defaultInverted,"collapsed-width":48},null)]),e(u,{class:"n-layout-main"},{default:()=>[e(b,{class:"layout-header",bordered:!0,inverted:this.inverted,position:"absolute"},{default:()=>[e(z,null,{left:()=>e(P,{class:"breadcrumb"},null)})]}),e(C,{position:"absolute",style:`top: ${f.headerHeight}px;`},{default:()=>[e(u,{"has-sider":!0,style:"height: 100%;"},{default:()=>[e(S,{class:"layout-sider-child",collapsed:this.isCollapsed,"collapse-mode":"transform",width:160,"collapsed-width":0,bordered:!0,"native-scrollbar":this.nativeScrollbar,"trigger-style":s?a:"","show-trigger":s?this.isCollapsed?!1:"arrow-circle":!1,"onUpdate:collapsed":this.onUpdateCollapsed,onmouseleave:this.onClearEnterValue},{default:()=>[e(w,{collapsed:!1,inverted:!1,options:this.menuChildrensOptions,indent:15},null)]}),e(u,null,{default:()=>[this.tagsFixed?i:null,e(C,{class:"layout-content",position:"absolute",style:`top: ${this.contentTop}px; bottom: 0`,"native-scrollbar":this.nativeScrollbar},{default:()=>[this.tagsFixed?null:i,H(this.$slots,"default")]})]})]})]})]})]})}});export{_ as default};
