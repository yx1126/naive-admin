import{d as u,p as d,c as s,cu as o,f as t,bq as p}from"../assets/index.c2091c65.js";import{H as h,L as c,M as m,N as l,T as y,b as f,a as g}from"./Logo-62c2aaa5.js";import"./use-fullscreen-4b4de3a8.js";import"./index-400e1080.js";import"./Grid-22423f04.js";import"./ReloadOutlined-e46f5f47.js";import"./Avatar-a0420785.js";import"./Dropdown-55d3f93f.js";import"./use-keyboard-906e13bf.js";import"./use-deounce-c6228951.js";var B=u({name:"TopLayout",props:{nativeScrollbar:{type:Boolean,default:!0},menuOptions:{type:Array,default:()=>[]},headerFixed:{type:Boolean,default:!0},tagsFixed:{type:Boolean,default:!0}},setup(e){const a=d(),r=s(()=>["dark"].includes(a.navMode)),i=s(()=>a.isShowTabs),n=s(()=>(e.headerFixed?o.headerHeight:0)+(e.tagsFixed&&i.value?o.tagsHeight:0));return{defaultInverted:r,isShowTabs:i,contentTop:n}},render(){const e=t(l,{class:"layout-header",inverted:this.defaultInverted,bordered:!0,position:this.headerFixed?"absolute":"static"},{default:()=>[t(h,null,{logo:()=>t(c,{width:200,height:o.headerHeight},null),left:()=>t(m,{mode:"horizontal",options:this.menuOptions},null)})]}),a=this.isShowTabs?t(l,{class:"layout-tags",bordered:!0,position:this.tagsFixed?"absolute":"static",style:`top: ${o.headerHeight}px`},{default:()=>[t(y,null,null)]}):null;return t(g,{class:"layout-wrapper n-layout-main",position:"absolute"},{default:()=>[this.headerFixed?e:null,this.tagsFixed?a:null,t(f,{class:"layout-content",position:"absolute",style:`top: ${this.contentTop}px; bottom: 0`,"native-scrollbar":this.nativeScrollbar},{default:()=>[this.headerFixed?null:e,this.tagsFixed?null:a,p(this.$slots,"default")]})]})}});export{B as default};
