import{d as h,z as f,g as n,cL as r,l as t,bw as g}from"../assets/index.7be86ddb.js";import{H as b,L,M as S,N as d,T,b as v,a as x}from"./Logo-589bb262.js";import"./use-fullscreen-092f04c6.js";import"./index-f40f07c9.js";import"./index-d95ae7da.js";import"./index-1292358c.js";import"./Grid-9065ed32.js";import"./RadioGroup-71fe8c8d.js";import"./Forward-b7d6b56f.js";import"./ReloadOutlined-49361c04.js";import"./Avatar-629e8e35.js";import"./Dropdown-50913db0.js";import"./create-ref-setter-2fcdeee9.js";import"./use-deounce-26de0b63.js";const j=h({name:"TopLayout",props:{nativeScrollbar:{type:Boolean,default:!0},menuOptions:{type:Array,default:()=>[]},headerFixed:{type:Boolean,default:!0},tagsFixed:{type:Boolean,default:!0},onScroll:{type:Function,default:void 0}},setup(a){const l=f(),o=n(()=>["dark"].includes(l.navMode)),e=n(()=>l.isShowTabs),s=n(()=>(a.headerFixed?r.headerHeight:0)+(a.tagsFixed&&e.value?r.tagsHeight:0));return{defaultInverted:o,isShowTabs:e,contentTop:s}},render(){const{$slots:a,defaultInverted:l,headerFixed:o,tagsFixed:e,menuOptions:s,isShowTabs:p,contentTop:c,nativeScrollbar:m,onScroll:y}=this,u=t(d,{class:"layout-header",inverted:l,bordered:!0,position:o?"absolute":"static"},{default:()=>[t(b,null,{logo:()=>t(L,{width:200,height:r.headerHeight},null),left:()=>t(S,{mode:"horizontal",options:s},null)})]}),i=p?t(d,{class:"layout-tags",bordered:!0,position:e?"absolute":"static",style:`top: ${r.headerHeight}px`},{default:()=>[t(T,null,null)]}):null;return t(x,{class:"layout-wrapper n-layout-main",position:"absolute"},{default:()=>[o?u:null,e?i:null,t(v,{class:"layout-content",position:"absolute",style:`top: ${c}px; bottom: 0`,"native-scrollbar":m,onScroll:y},{default:()=>[o?null:u,e?null:i,g(a,"default")]})]})}});export{j as default};