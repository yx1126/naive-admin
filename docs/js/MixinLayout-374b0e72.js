import{d as S,cC as x,p as L,a as T,c as a,cD as h,q as N,f as t,bq as B}from"../assets/index.e8fe7c02.js";import{M as v,T as M,N as y,L as H,H as O,a as p,b as F}from"./Logo-709d0e9e.js";import{B as I,N as U,C as V}from"./Breadcrumb-210385c9.js";import"./use-fullscreen-2f85f594.js";import"./index-0b5b50cf.js";import"./Grid-42927c50.js";import"./ReloadOutlined-5965408c.js";import"./Avatar-b776aa78.js";import"./Dropdown-c60913a2.js";import"./use-keyboard-66511d88.js";import"./create-ref-setter-113bfc30.js";import"./use-deounce-c6228951.js";var J=S({name:"MixinLayout",props:{nativeScrollbar:{type:Boolean,default:!0},menuOptions:{type:Array,default:()=>[]},tagsFixed:{type:Boolean,default:!0},collapsed:{type:Boolean,default:!0},inverted:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1}},emits:["update:collapsed"],setup(s,{emit:o}){const n=x(),d=L(),r=T(!0),g=a(()=>["dark"].includes(d.navMode)),u=a(()=>d.isCutMenu),c=a(()=>{var e;return(e=n.matched.filter(l=>l.path)[0])==null?void 0:e.path}),f=a(()=>d.isShowTabs),w=a(()=>s.tagsFixed&&f.value?h.tagsHeight:0),m=a(()=>{const e=s.menuOptions.find(i=>i.path===c.value),l=((e==null?void 0:e.children)||[]).map(i=>({...i,icon:i.icon||(e==null?void 0:e.icon)}));return u.value?l:s.menuOptions});N(()=>n.fullPath,()=>{n.fullPath.startsWith("/redirect")||(r.value=m.value.length>0)},{immediate:!0});const b=a(()=>{const e={collapsed:s.collapsed,width:64},l={collapsed:!0,width:0};return u.value?r.value?e:l:e});function C(e){o("update:collapsed",e)}return{defaultInverted:g,isCutMenu:u,defaultValue:c,menuChildrensOptions:m,isShowSilder:r,state:b,onUpdateCollapsed:C,isShowTabs:f,contentTop:w}},render(){const s=t(v,{mode:"horizontal",value:this.defaultValue,collapsed:!1,inverted:this.defaultInverted,options:this.menuOptions,"children-field":"noChild"},null),o=this.isShowTabs?t(y,{class:"layout-tags",bordered:!0},{default:()=>[t(M,null,null)]}):null;return t(p,{class:"layout-wrapper layout-wrapper-mixin"},{default:()=>[t(y,{class:"layout-header",inverted:this.defaultInverted,bordered:!0},{default:()=>[t(H,{width:200,height:h.headerHeight},null),t(O,null,{left:()=>this.isCutMenu?s:t(I,null,null)})]}),t(p,{"has-sider":!0,position:"absolute",style:`top: ${h.headerHeight}px`},{default:()=>[t("div",{class:"layout-sider-wrapper"},[t(U,{class:"layout-sider",collapsed:this.state.collapsed,"collapse-mode":"width","collapsed-width":this.state.width,width:200,bordered:!0,inverted:this.inverted,"content-style":"height: 100%;","native-scrollbar":this.nativeScrollbar,"show-trigger":this.isShowSilder?this.showTrigger:!1,"onUpdate:collapsed":this.onUpdateCollapsed},{default:()=>[t(v,{inverted:this.inverted,options:this.menuChildrensOptions},null)]}),t(V,{class:"mixin-collapse",collapsed:this.state.collapsed,size:this.state.collapsed?24:22,width:200,border:this.inverted?"top":"top,right",inverted:this.inverted,"collapsed-width":this.state.width},null)]),t(p,{class:"n-layout-main"},{default:()=>[this.tagsFixed?o:null,t(F,{class:"layout-content",position:"absolute",style:`top: ${this.contentTop}px; bottom: 0`,"native-scrollbar":this.nativeScrollbar},{default:()=>[this.tagsFixed?null:o,B(this.$slots,"default")]})]})]})]})}});export{J as default};