import{z as Kt,t as Ae,A as rt,B as Jt,C as Gt,D as qt,E as Qt,d as B,G as ae,f as M,H as en,h,I as tn,g as _,i as lt,b as ut,J as se,K as u,L as O,M as p,N as nn,O as sn,w as on,P as an,Q as xe,R as ye,S as ct,T as rn,V as Ye,U as He,W as ln,X as un,Y as cn,Z as te,$ as Ke,a0 as Je,v as dn,a1 as fn,a2 as vn,a3 as ne,a4 as pn,a5 as ge,a6 as hn,j as be,a7 as dt,q as oe,a8 as xn,a9 as gn,y as ft,_ as vt,k as Ge,l as S,m as y,p as C,aa as K,F as mn,n as _n,ab as bn,s as wn,ac as yn,ad as Sn,ae as Cn,x as me}from"../assets/index-9c5b5408.js";import{N as Rn}from"./RadioGroup-06900a0f.js";import{_ as zn,P as kn}from"./PlusOutlined-020faa0d.js";import{E as Pn,r as In}from"./echarts-05696b13.js";import{_ as $n}from"./Avatar-84478da0.js";import{_ as Tn}from"./Thing-dc18a7fb.js";import{_ as Dn,a as Nn}from"./Grid-9db9efab.js";import"./Dropdown-7d0a4aba.js";import"./create-ref-setter-f485918b.js";import"./Pagination-eaa5f532.js";import"./Forward-f1c18f40.js";function En(e){return Kt(Ae(e).toLowerCase())}function Vn(e,n,s,i){var r=-1,d=e==null?0:e.length;for(i&&d&&(s=e[++r]);++r<d;)s=n(s,e[r],r,e);return s}function An(e){return function(n){return e==null?void 0:e[n]}}var jn={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},On=An(jn);const Mn=On;var Ln=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Fn="\\u0300-\\u036f",Un="\\ufe20-\\ufe2f",Bn="\\u20d0-\\u20ff",Wn=Fn+Un+Bn,Zn="["+Wn+"]",Xn=RegExp(Zn,"g");function Yn(e){return e=Ae(e),e&&e.replace(Ln,Mn).replace(Xn,"")}var Hn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Kn(e){return e.match(Hn)||[]}var Jn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Gn(e){return Jn.test(e)}var pt="\\ud800-\\udfff",qn="\\u0300-\\u036f",Qn="\\ufe20-\\ufe2f",es="\\u20d0-\\u20ff",ts=qn+Qn+es,ht="\\u2700-\\u27bf",xt="a-z\\xdf-\\xf6\\xf8-\\xff",ns="\\xac\\xb1\\xd7\\xf7",ss="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",os="\\u2000-\\u206f",as=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",gt="A-Z\\xc0-\\xd6\\xd8-\\xde",is="\\ufe0e\\ufe0f",mt=ns+ss+os+as,_t="['’]",qe="["+mt+"]",rs="["+ts+"]",bt="\\d+",ls="["+ht+"]",wt="["+xt+"]",yt="[^"+pt+mt+bt+ht+xt+gt+"]",us="\\ud83c[\\udffb-\\udfff]",cs="(?:"+rs+"|"+us+")",ds="[^"+pt+"]",St="(?:\\ud83c[\\udde6-\\uddff]){2}",Ct="[\\ud800-\\udbff][\\udc00-\\udfff]",J="["+gt+"]",fs="\\u200d",Qe="(?:"+wt+"|"+yt+")",vs="(?:"+J+"|"+yt+")",et="(?:"+_t+"(?:d|ll|m|re|s|t|ve))?",tt="(?:"+_t+"(?:D|LL|M|RE|S|T|VE))?",Rt=cs+"?",zt="["+is+"]?",ps="(?:"+fs+"(?:"+[ds,St,Ct].join("|")+")"+zt+Rt+")*",hs="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",xs="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",gs=zt+Rt+ps,ms="(?:"+[ls,St,Ct].join("|")+")"+gs,_s=RegExp([J+"?"+wt+"+"+et+"(?="+[qe,J,"$"].join("|")+")",vs+"+"+tt+"(?="+[qe,J+Qe,"$"].join("|")+")",J+"?"+Qe+"+"+et,J+"+"+tt,xs,hs,bt,ms].join("|"),"g");function bs(e){return e.match(_s)||[]}function ws(e,n,s){return e=Ae(e),n=s?void 0:n,n===void 0?Gn(e)?bs(e):Kn(e):e.match(n)||[]}var ys="['’]",Ss=RegExp(ys,"g");function Cs(e){return function(n){return Vn(ws(Yn(n).replace(Ss,"")),e,"")}}var Rs=Cs(function(e,n,s){return n=n.toLowerCase(),e+(s?En(n):n)});const nt=Rs;function zs(e){const{length:n}=e;return n>1&&(e.push(st(e[0],0,"append")),e.unshift(st(e[n-1],n-1,"prepend"))),e}function st(e,n,s){return rt(e,{key:`carousel-item-duplicate-${n}-${s}`})}function ot(e,n,s){return s?e===0?n-3:e===n-1?0:e-1:e}function Ee(e,n){return n?e+1:e}function ks(e,n,s){return e<0?null:e===0?s?n-1:null:e-1}function Ps(e,n,s){return e>n-1?null:e===n-1?s?0:null:e+1}function Is(e,n){return n&&e>3?e-2:e}function at(e){return window.TouchEvent&&e instanceof window.TouchEvent}function it(e,n){let{offsetWidth:s,offsetHeight:i}=e;if(n){const r=getComputedStyle(e);s=s-parseFloat(r.getPropertyValue("padding-left"))-parseFloat(r.getPropertyValue("padding-right")),i=i-parseFloat(r.getPropertyValue("padding-top"))-parseFloat(r.getPropertyValue("padding-bottom"))}return{width:s,height:i}}function _e(e,n,s){return e<n?n:e>s?s:e}function $s(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,s=e.match(n);if(s){const[,i,,r="ms"]=s;return Number(i)*(r==="ms"?1:1e3)}return 0}const kt=Gt("n-carousel-methods"),Ts=e=>{Jt(kt,e)},je=(e="unknown",n="component")=>{const s=qt(kt);return s||Qt(e,`\`${n}\` must be placed inside \`n-carousel\`.`),s},Ds={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Ns=B({name:"CarouselDots",props:Ds,setup(e){const{mergedClsPrefixRef:n}=ae(e),s=M([]),i=je();function r(m,f){switch(m.key){case"Enter":case" ":m.preventDefault(),i.to(f);return}e.keyboard&&x(m)}function d(m){e.trigger==="hover"&&i.to(m)}function g(m){e.trigger==="click"&&i.to(m)}function x(m){var f;if(m.shiftKey||m.altKey||m.ctrlKey||m.metaKey)return;const b=(f=document.activeElement)===null||f===void 0?void 0:f.nodeName.toLowerCase();if(b==="input"||b==="textarea")return;const{code:k}=m,D=k==="PageUp"||k==="ArrowUp",$=k==="PageDown"||k==="ArrowDown",P=k==="PageUp"||k==="ArrowRight",I=k==="PageDown"||k==="ArrowLeft",T=i.isVertical(),F=T?D:P,G=T?$:I;!F&&!G||(m.preventDefault(),F&&!i.isNextDisabled()?(i.next(),R(i.currentIndexRef.value)):G&&!i.isPrevDisabled()&&(i.prev(),R(i.currentIndexRef.value)))}function R(m){var f;(f=s.value[m])===null||f===void 0||f.focus()}return en(()=>s.value.length=0),{mergedClsPrefix:n,dotEls:s,handleKeydown:r,handleMouseenter:d,handleClick:g}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return h("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},tn(this.total,s=>{const i=s===this.currentIndex;return h("div",{"aria-selected":i,ref:r=>n.push(r),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,i&&`${e}-carousel__dot--active`],key:s,onClick:()=>{this.handleClick(s)},onMouseenter:()=>{this.handleMouseenter(s)},onKeydown:r=>{this.handleKeydown(r,s)}})}))}}),Es=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},h("g",{fill:"none"},h("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Vs=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},h("g",{fill:"none"},h("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),As=B({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=ae(e),{isVertical:s,isPrevDisabled:i,isNextDisabled:r,prev:d,next:g}=je();return{mergedClsPrefix:n,isVertical:s,isPrevDisabled:i,isNextDisabled:r,prev:d,next:g}},render(){const{mergedClsPrefix:e}=this;return h("div",{class:`${e}-carousel__arrow-group`},h("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Es),h("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Vs))}}),we="CarouselItem",js=e=>{var n;return((n=e.type)===null||n===void 0?void 0:n.name)===we},Os=B({name:we,setup(e){const{mergedClsPrefixRef:n}=ae(e),s=je(nt(we),`n-${nt(we)}`),i=M(),r=_(()=>{const{value:f}=i;return f?s.getSlideIndex(f):-1}),d=_(()=>s.isPrev(r.value)),g=_(()=>s.isNext(r.value)),x=_(()=>s.isActive(r.value)),R=_(()=>s.getSlideStyle(r.value));lt(()=>{s.addSlide(i.value)}),ut(()=>{s.removeSlide(i.value)});function m(f){const{value:b}=r;b!==void 0&&(s==null||s.onCarouselItemClick(b,f))}return{mergedClsPrefix:n,selfElRef:i,isPrev:d,isNext:g,isActive:x,index:r,style:R,handleClick:m}},render(){var e;const{$slots:n,mergedClsPrefix:s,isPrev:i,isNext:r,isActive:d,index:g,style:x}=this,R=[`${s}-carousel__slide`,{[`${s}-carousel__slide--current`]:d,[`${s}-carousel__slide--prev`]:i,[`${s}-carousel__slide--next`]:r}];return h("div",{ref:"selfElRef",class:R,role:"option",tabindex:"-1","data-index":g,"aria-hidden":!d,style:x,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:i,isNext:r,isActive:d,index:g}))}}),Ms=se("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[u("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[u("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[O("> img",`
 display: block;
 `)])]),u("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[p("dot",[u("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[O("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),p("active",`
 background-color: var(--n-dot-color-active);
 `)])]),p("line",[u("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[O("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),p("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),u("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[O("svg",`
 height: 1em;
 width: 1em;
 `),O("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),p("vertical",`
 touch-action: pan-x;
 `,[u("slides",`
 flex-direction: column;
 `),p("fade",[u("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),p("card",[u("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[p("current",`
 transform: translateY(-50%) translateZ(0);
 `),p("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),p("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),p("usercontrol",[u("slides",[O(">",[O("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),p("left",[u("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[p("line",[u("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[p("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),u("dot",`
 margin: 4px 0;
 `)]),u("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),p("vertical",[u("arrow",`
 transform: rotate(90deg);
 `)]),p("show-arrow",[p("bottom",[u("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),p("top",[u("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),p("left",[u("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),p("right",[u("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),p("left",[u("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[O("> *:first-child",`
 margin-bottom: 12px;
 `)])]),p("right",[u("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[p("line",[u("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[p("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),u("dot",`
 margin: 4px 0;
 `),u("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[O("> *:first-child",`
 margin-bottom: 12px;
 `)])]),p("top",[u("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[p("line",[u("dot",`
 margin: 0 4px;
 `)])]),u("dot",`
 margin: 0 4px;
 `),u("arrow-group",`
 top: 12px;
 right: 12px;
 `,[O("> *:first-child",`
 margin-right: 12px;
 `)])]),p("bottom",[u("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[p("line",[u("dot",`
 margin: 0 4px;
 `)])]),u("dot",`
 margin: 0 4px;
 `),u("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[O("> *:first-child",`
 margin-right: 12px;
 `)])]),p("fade",[u("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[p("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),p("card",[u("slides",`
 perspective: 1000px;
 `),u("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[p("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),p("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),p("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),Ls=["transitionDuration","transitionTimingFunction"],Fs=Object.assign(Object.assign({},ye.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ve=!1;const Us=B({name:"Carousel",props:Fs,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:s}=ae(e),i=M(null),r=M(null),d=M([]),g={value:[]},x=_(()=>e.direction==="vertical"),R=_(()=>x.value?"height":"width"),m=_(()=>x.value?"bottom":"right"),f=_(()=>e.effect==="slide"),b=_(()=>e.loop&&e.slidesPerView===1&&f.value),k=_(()=>e.effect==="custom"),D=_(()=>!f.value||e.centeredSlides?1:e.slidesPerView),$=_(()=>k.value?1:e.slidesPerView),P=_(()=>D.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),I=M({width:0,height:0}),T=_(()=>{const{value:t}=d;if(!t.length)return[];const{value:o}=P;if(o)return t.map(z=>it(z));const{value:a}=$,{value:c}=I,{value:v}=R;let l=c[v];if(a!=="auto"){const{spaceBetween:z}=e,N=l-(a-1)*z,he=1/Math.max(1,a);l=N*he}const w=Object.assign(Object.assign({},c),{[v]:l});return t.map(()=>w)}),F=_(()=>{const{value:t}=T;if(!t.length)return[];const{centeredSlides:o,spaceBetween:a}=e,{value:c}=R,{[c]:v}=I.value;let l=0;return t.map(({[c]:w})=>{let z=l;return o&&(z+=(w-v)/2),l+=w+a,z})}),G=M(!1),Se=_(()=>{const{transitionStyle:t}=e;return t?Je(t,Ls):{}}),Ce=_(()=>k.value?0:$s(Se.value.transitionDuration)),Oe=_(()=>{const{value:t}=d;if(!t.length)return[];const o=!(P.value||$.value===1),a=w=>{if(o){const{value:z}=R;return{[z]:`${T.value[w][z]}px`}}};if(k.value)return t.map((w,z)=>a(z));const{effect:c,spaceBetween:v}=e,{value:l}=m;return t.reduce((w,z,N)=>{const he=Object.assign(Object.assign({},a(N)),{[`margin-${l}`]:`${v}px`});return w.push(he),G.value&&(c==="fade"||c==="card")&&Object.assign(he,Se.value),w},[])}),E=_(()=>{const{value:t}=D,{length:o}=d.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:a}=T,{length:c}=a;if(!c)return o;const{value:v}=F,{value:l}=R,w=I.value[l];let z=a[a.length-1][l],N=c;for(;N>1&&z<w;)N--,z+=v[N]-v[N-1];return _e(N+1,1,c)}}),ie=_(()=>Is(E.value,b.value)),Pt=Ee(e.defaultIndex,b.value),Re=M(ot(Pt,E.value,b.value)),V=nn(sn(e,"currentIndex"),Re),A=_(()=>Ee(V.value,b.value));function q(t){var o,a;t=_e(t,0,E.value-1);const c=ot(t,E.value,b.value),{value:v}=V;c!==V.value&&(Re.value=c,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,c,v),(a=e.onUpdateCurrentIndex)===null||a===void 0||a.call(e,c,v))}function re(t=A.value){return ks(t,E.value,e.loop)}function le(t=A.value){return Ps(t,E.value,e.loop)}function It(t){const o=Z(t);return o!==null&&re()===o}function $t(t){const o=Z(t);return o!==null&&le()===o}function Me(t){return A.value===Z(t)}function Tt(t){return V.value===t}function Le(){return re()===null}function Fe(){return le()===null}function ze(t){const o=_e(Ee(t,b.value),0,E.value);(t!==V.value||o!==A.value)&&q(o)}function ke(){const t=re();t!==null&&q(t)}function ue(){const t=le();t!==null&&q(t)}function Dt(){(!j||!b.value)&&ke()}function Nt(){(!j||!b.value)&&ue()}let j=!1,W=0;const Pe=M({});function ce(t,o=0){Pe.value=Object.assign({},Se.value,{transform:x.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function Q(t=0){f.value?Ie(A.value,t):W!==0&&(!j&&t>0&&(j=!0),ce(W=0,t))}function Ie(t,o){const a=Ue(t);a!==W&&o>0&&(j=!0),W=Ue(A.value),ce(a,o)}function Ue(t){let o;return t>=E.value-1?o=Be():o=F.value[t]||0,o}function Be(){if(D.value==="auto"){const{value:t}=R,{[t]:o}=I.value,{value:a}=F,c=a[a.length-1];let v;if(c===void 0)v=o;else{const{value:l}=T;v=c+l[l.length-1][t]}return v-o}else{const{value:t}=F;return t[E.value-1]||0}}const ee={currentIndexRef:V,to:ze,prev:Dt,next:Nt,isVertical:()=>x.value,isHorizontal:()=>!x.value,isPrev:It,isNext:$t,isActive:Me,isPrevDisabled:Le,isNextDisabled:Fe,getSlideIndex:Z,getSlideStyle:At,addSlide:Et,removeSlide:Vt,onCarouselItemClick:jt};Ts(ee);function Et(t){t&&d.value.push(t)}function Vt(t){if(!t)return;const o=Z(t);o!==-1&&d.value.splice(o,1)}function Z(t){return typeof t=="number"?t:t?d.value.indexOf(t):-1}function At(t){const o=Z(t);if(o!==-1){const a=[Oe.value[o]],c=ee.isPrev(o),v=ee.isNext(o);return c&&a.push(e.prevSlideStyle||""),v&&a.push(e.nextSlideStyle||""),dn(a)}}function jt(t,o){let a=!j&&!ve&&!Ne;e.effect==="card"&&a&&!Me(t)&&(ze(t),a=!1),a||(o.preventDefault(),o.stopPropagation())}let de=null;function fe(){de&&(clearInterval(de),de=null)}function X(){fe(),!e.autoplay||ie.value<2||(de=window.setInterval(ue,e.interval))}let $e=0,Te=0,U=0,De=0,ve=!1,Ne=!1;function We(t){var o;if(Ve||!(!((o=r.value)===null||o===void 0)&&o.contains(vn(t))))return;Ve=!0,ve=!0,Ne=!1,De=Date.now(),fe(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const a=at(t)?t.touches[0]:t;x.value?Te=a.clientY:$e=a.clientX,e.touchable&&(ne("touchmove",document,pe,{passive:!0}),ne("touchend",document,Y),ne("touchcancel",document,Y)),e.draggable&&(ne("mousemove",document,pe),ne("mouseup",document,Y))}function pe(t){const{value:o}=x,{value:a}=R,c=at(t)?t.touches[0]:t,v=o?c.clientY-Te:c.clientX-$e,l=I.value[a];U=_e(v,-l,l),t.cancelable&&t.preventDefault(),f.value&&ce(W-U,0)}function Y(){const{value:t}=A;let o=t;if(!j&&U!==0&&f.value){const a=W-U,c=[...F.value.slice(0,E.value-1),Be()];let v=null;for(let l=0;l<c.length;l++){const w=Math.abs(c[l]-a);if(v!==null&&v<w)break;v=w,o=l}}if(o===t){const a=Date.now()-De,{value:c}=R,v=I.value[c];U>v/2||U/a>.4?o=re(t):(U<-v/2||U/a<-.4)&&(o=le(t))}o!==null&&o!==t?(Ne=!0,q(o),Ke(()=>{(!b.value||Re.value!==V.value)&&Q(Ce.value)})):Q(Ce.value),Ze(),X()}function Ze(){ve&&(Ve=!1),ve=!1,$e=0,Te=0,U=0,De=0,te("touchmove",document,pe),te("touchend",document,Y),te("touchcancel",document,Y),te("mousemove",document,pe),te("mouseup",document,Y)}function Ot(){if(f.value&&j){const{value:t}=A;Ie(t,0)}else X();f.value&&(Pe.value.transitionDuration="0ms"),j=!1}function Mt(t){if(t.preventDefault(),j)return;let{deltaX:o,deltaY:a}=t;t.shiftKey&&!o&&(o=a);const c=-1,v=1,l=(o||a)>0?v:c;let w=0,z=0;x.value?z=l:w=l;const N=10;(z*a>=N||w*o>=N)&&(l===v&&!Fe()?ue():l===c&&!Le()&&ke())}function Lt(){I.value=it(i.value,!0),X()}function Ft(){var t,o;P.value&&((o=(t=T.effect).scheduler)===null||o===void 0||o.call(t),T.effect.run())}function Ut(){e.autoplay&&fe()}function Bt(){e.autoplay&&X()}lt(()=>{on(X),requestAnimationFrame(()=>G.value=!0)}),ut(()=>{Ze(),fe()}),an(()=>{const{value:t}=d,{value:o}=g,a=new Map,c=l=>a.has(l)?a.get(l):-1;let v=!1;for(let l=0;l<t.length;l++){const w=o.findIndex(z=>z.el===t[l]);w!==l&&(v=!0),a.set(t[l],w)}v&&t.sort((l,w)=>c(l)-c(w))}),xe(A,(t,o)=>{if(t!==o)if(X(),f.value){if(b.value&&ie.value>2){const{value:a}=E;t===a-2&&o===1?t=0:t===1&&o===a-2&&(t=a-1)}Ie(t,Ce.value)}else Q()},{immediate:!0}),xe([b,D],()=>void Ke(()=>{q(A.value)})),xe(F,()=>{f.value&&Q()},{deep:!0}),xe(f,t=>{t?Q():(j=!1,ce(W=0))});const Wt=_(()=>({onTouchstartPassive:e.touchable?We:void 0,onMousedown:e.draggable?We:void 0,onWheel:e.mousewheel?Mt:void 0})),Zt=_(()=>Object.assign(Object.assign({},Je(ee,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:ie.value,currentIndex:V.value})),Xt=_(()=>({total:ie.value,currentIndex:V.value,to:ee.to})),Yt={getCurrentIndex:()=>V.value,to:ze,prev:ke,next:ue},Ht=ye("Carousel","-carousel",Ms,fn,e,n),Xe=_(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:a,dotColorActive:c,dotColorFocus:v,dotLineWidth:l,dotLineWidthActive:w,arrowColor:z}}=Ht.value;return{"--n-bezier":t,"--n-dot-color":a,"--n-dot-color-focus":v,"--n-dot-color-active":c,"--n-dot-size":o,"--n-dot-line-width":l,"--n-dot-line-width-active":w,"--n-arrow-color":z}}),H=s?ct("carousel",void 0,Xe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:i,slidesElRef:r,slideVNodes:g,duplicatedable:b,userWantsControl:k,autoSlideSize:P,displayIndex:V,realIndex:A,slideStyles:Oe,translateStyle:Pe,slidesControlListeners:Wt,handleTransitionEnd:Ot,handleResize:Lt,handleSlideResize:Ft,handleMouseenter:Ut,handleMouseleave:Bt,isActive:Tt,arrowSlotProps:Zt,dotSlotProps:Xt},Yt),{cssVars:s?void 0:Xe,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:s,userWantsControl:i,slideStyles:r,dotType:d,dotPlacement:g,slidesControlListeners:x,transitionProps:R={},arrowSlotProps:m,dotSlotProps:f,$slots:{default:b,dots:k,arrow:D}}=this,$=b&&rn(b())||[];let P=Bs($);return P.length||(P=$.map(I=>h(Os,null,{default:()=>rt(I)}))),this.duplicatedable&&(P=zs(P)),this.slideVNodes.value=P,this.autoSlideSize&&(P=P.map(I=>h(Ye,{onResize:this.handleSlideResize},{default:()=>I}))),(e=this.onRender)===null||e===void 0||e.call(this),h("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${g}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,i&&`${n}-carousel--usercontrol`],style:this.cssVars},x,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),h(Ye,{onResize:this.handleResize},{default:()=>h("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},i?P.map((I,T)=>h("div",{style:r[T],key:T},ln(h(cn,Object.assign({},R),{default:()=>I}),[[un,this.isActive(T)]]))):P)}),this.showDots&&f.total>1&&He(k,f,()=>[h(Ns,{key:d+g,total:f.total,currentIndex:f.currentIndex,dotType:d,trigger:this.trigger,keyboard:this.keyboard})]),s&&He(D,m,()=>[h(As,null)]))}});function Bs(e){return e.reduce((n,s)=>(js(s)&&n.push(s),n),[])}const Ws=se("statistic",[u("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),se("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[u("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[se("icon",{verticalAlign:"-0.125em"})]),u("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),u("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[se("icon",{verticalAlign:"-0.125em"})])])]),Zs=Object.assign(Object.assign({},ye.props),{tabularNums:Boolean,label:String,value:[String,Number]}),Xs=B({name:"Statistic",props:Zs,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:s,mergedRtlRef:i}=ae(e),r=ye("Statistic","-statistic",Ws,hn,e,n),d=pn("Statistic",i,n),g=_(()=>{const{self:{labelFontWeight:R,valueFontSize:m,valueFontWeight:f,valuePrefixTextColor:b,labelTextColor:k,valueSuffixTextColor:D,valueTextColor:$,labelFontSize:P},common:{cubicBezierEaseInOut:I}}=r.value;return{"--n-bezier":I,"--n-label-font-size":P,"--n-label-font-weight":R,"--n-label-text-color":k,"--n-value-font-weight":f,"--n-value-font-size":m,"--n-value-prefix-text-color":b,"--n-value-suffix-text-color":D,"--n-value-text-color":$}}),x=s?ct("statistic",void 0,g,e):void 0;return{rtlEnabled:d,mergedClsPrefix:n,cssVars:s?void 0:g,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){var e;const{mergedClsPrefix:n,$slots:{default:s,label:i,prefix:r,suffix:d}}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${n}-statistic`,this.themeClass,this.rtlEnabled&&`${n}-statistic--rtl`],style:this.cssVars},ge(i,g=>h("div",{class:`${n}-statistic__label`},this.label||g)),h("div",{class:`${n}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},ge(r,g=>g&&h("span",{class:`${n}-statistic-value__prefix`},g)),this.value!==void 0?h("span",{class:`${n}-statistic-value__content`},this.value):ge(s,g=>g&&h("span",{class:`${n}-statistic-value__content`},g)),ge(d,g=>g&&h("span",{class:`${n}-statistic-value__suffix`},g))))}}),Ys=B({name:"ToDoList"}),Hs=B({...Ys,setup(e){const n=[{title:"",key:"",width:50,align:"center",render(i,r){return h(Rn,{checked:i.isFinish,onUpdateChecked:d=>{s.value[r].isFinish=d}})}},{title:"things",key:"things",render(i){return h("span",{style:i.isFinish?"text-decoration: line-through; color: #999;":""},i.things)}},{title:"finish",key:"isFinish",width:120,align:"center",render(i){return h(xn,{type:i.isFinish?"success":"error"},{default:()=>i.isFinish?"已完成":"未完成"})}},{title:"finish",key:"isFinish",width:120,align:"center",render(i,r){return h(ft,{style:"cursor: pointer;",onClick:()=>{s.value.splice(r,1)}},{default:()=>h(gn)})}}],s=M([{things:"今天要修复100个bug",isFinish:!1},{things:"今天要修复100个bug",isFinish:!1},{things:"今天要写100行代码加几个bug吧",isFinish:!1},{things:"今天要修复100个bug",isFinish:!1},{things:"今天要修复100个bug",isFinish:!0},{things:"今天要写100行代码加几个bug吧",isFinish:!0},{things:"今天要修复100个bug",isFinish:!1},{things:"今天要修复100个bug",isFinish:!0},{things:"今天要写100行代码加几个bug吧",isFinish:!0}]);return(i,r)=>{const d=zn;return be(),dt(d,{class:"todo-table",columns:n,data:oe(s),style:{height:"375px"},bordered:!1,"flex-height":""},null,8,["data"])}}});const Ks=vt(Hs,[["__scopeId","data-v-d3d313f7"],["__file","/home/runner/work/naive-admin/naive-admin/src/views/dashboard/components/ToDoList.vue"]]),L=e=>(Sn("data-v-810357fe"),e=e(),Cn(),e),Js={class:"workspace"},Gs={flex:"","justify-between":"","items-center":"","w-100p":""},qs={flex:"","items-center":"","flex-1":""},Qs=L(()=>C("div",{"ml-5":""},[C("p",{"m-0":"","text-xl":"","c-333":""},"早安，Admin，开始您一天的工作吧！"),C("p",{"m-0":"","text-gray-400":""},"今日阴转大雨，15℃ - 25℃，出门记得带伞哦。")],-1)),eo={"flex-1":""},to={flex:"","flex-wrap":""},no={"h-45px":""},so={flex:"","justify-between":""},oo={"hover:c-409eff":"","cursor-pointer":""},ao={"text-gray-400":""},io=L(()=>C("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"},null,-1)),ro=L(()=>C("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"},null,-1)),lo=L(()=>C("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"},null,-1)),uo=L(()=>C("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"},null,-1)),co={class:"convenient"},fo=L(()=>C("a",null,"操作一",-1)),vo=L(()=>C("a",null,"操作二",-1)),po=L(()=>C("a",null,"操作三",-1)),ho=L(()=>C("a",null,"操作四",-1)),xo=L(()=>C("a",null,"操作五",-1)),go=L(()=>C("a",null,"操作六",-1)),mo={class:"echarts"},_o=B({name:"Workspace"}),bo=B({..._o,setup(e){const n=M([{title:"NaiveUI",icon:"github",desc:"一个 Vue 3 组件库,比较完整，主题可调，使用 TypeScript，快有点意思",group:"NaiveUI",time:"9小时前"},{title:"Vite",icon:"vite",desc:"Vite 下一代的前端工具链 为开发提供极速响应",group:"Vite",time:"9小时前"},{title:"Vue",icon:"vue",desc:"渐进式 JavaScript 框架 易学易用，性能出色，适用场景丰富的 Web 前端框架。",group:"Vue",time:"9小时前"},{title:"Typescript",icon:"typescript",desc:"TypeScript是JavaScript类型的超集。",group:"Typescript9",time:"9小时前"},{title:"Scss",icon:"sass",desc:"世界上最成熟、最稳定、最强大的专业级CSS扩展语言！",group:"Scss",time:"9小时前"},{title:"Milkdown",icon:"milkdown",desc:"插件驱动的所见即所得的Markdown编辑器框架",group:"Milkdown",time:"9小时前"}]);return(s,i)=>{const r=$n,d=Xs,g=bn,x=wn,R=Dn,m=yn,f=ft,b=Tn,k=Us,D=Nn;return be(),Ge("div",Js,[S(D,{cols:24,"x-gap":12,"y-gap":12},{default:y(()=>[S(R,{span:24},{default:y(()=>[S(x,{title:"工作台"},{default:y(()=>[C("div",Gs,[C("div",qs,[S(r,{round:"",size:64,src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"}),Qs]),C("div",eo,[S(g,{justify:"end",size:150,"wrap-item":!1},{default:y(()=>[S(d,{label:"任务","text-right":""},{default:y(()=>[K("4/12")]),_:1}),S(d,{label:"待办","text-right":""},{default:y(()=>[K("5/9")]),_:1}),S(d,{label:"消息","text-right":""},{default:y(()=>[K("12")]),_:1})]),_:1})])])]),_:1})]),_:1}),S(R,{span:16},{default:y(()=>[S(x,{title:"进行中的项目",size:"small",segmented:{content:!0},"content-style":"padding: 0;"},{"header-extra":y(()=>[S(m,{type:"primary",text:""},{default:y(()=>[K("全部项目")]),_:1})]),default:y(()=>[C("div",to,[(be(!0),Ge(mn,null,_n(oe(n),$=>(be(),dt(x,{key:$.title,class:"project-card",hoverable:""},{default:y(()=>[S(b,null,{avatar:y(()=>[S(f,{icon:$.icon,size:28},null,8,["icon"])]),header:y(()=>[K(me($.title),1)]),footer:y(()=>[C("div",so,[C("span",oo,me($.group),1),C("span",ao,me($.time),1)])]),default:y(()=>[C("div",no,me($.desc),1)]),_:2},1024)]),_:2},1024))),128))])]),_:1}),S(x,{"mt-12px":"",title:"待办",size:"small",segmented:{content:!0},"content-style":"padding: 10px;"},{default:y(()=>[S(Ks)]),_:1})]),_:1}),S(R,{span:8},{default:y(()=>[S(x,{size:"small",title:"公告",segmented:{content:!0},"content-style":"padding: 0;"},{default:y(()=>[S(k,{autoplay:"","show-arrow":"",draggable:"","dot-type":"line"},{default:y(()=>[io,ro,lo,uo]),_:1})]),_:1}),S(x,{"mt-12px":"",size:"small",title:"便捷操作",segmented:{content:!0}},{default:y(()=>[C("div",co,[fo,vo,po,ho,xo,go,S(m,{type:"primary",ghost:"",size:"small"},{icon:y(()=>[S(f,null,{default:y(()=>[S(oe(kn))]),_:1})]),default:y(()=>[K(" 添加 ")]),_:1})])]),_:1}),S(x,{"mt-12px":""},{default:y(()=>[C("div",mo,[S(oe(Pn),{options:oe(In)},null,8,["options"])])]),_:1})]),_:1})]),_:1})])}}});const Do=vt(bo,[["__scopeId","data-v-810357fe"],["__file","/home/runner/work/naive-admin/naive-admin/src/views/dashboard/workspace.vue"]]);export{Do as default};
