import{W as Kt,t as Ne,R as it,L as Jt,z as qt,X as Gt,I as Qt,d as W,J as oe,a as j,Y as en,B as h,Z as tn,c as _,o as rt,H as lt,$ as se,a0 as l,a1 as V,a2 as p,a3 as nn,M as sn,w as on,a4 as an,q as he,a5 as Ye,a6 as Ce,a7 as ct,P as un,V as He,a8 as Ke,a9 as rn,E as ln,aa as cn,ab as Je,ac as te,ad as dn,n as fn,ae as vn,af as ne,ag as pn,ah as xe,ai as hn,_ as dt,b as _e,aj as ft,ak as xn,al as gn,m as vt,e as qe,f as y,g as w,i as E,F as mn,h as _n,j as Ie,am as J,an as bn,k as Cn,ao as wn,l as ge,ap as yn,aq as En}from"../assets/index.c2091c65.js";import{_ as Sn}from"./Checkbox-3b4477df.js";import{N as Fn,P as Rn}from"./PlusOutlined-2e3fcbfe.js";import{E as Dn,r as zn}from"./echarts-7a829e63.js";import{_ as An}from"./Avatar-a0420785.js";import{_ as kn}from"./Thing-345f89ad.js";import{_ as Pn}from"./GridItem-90b32be5.js";import{_ as In}from"./Grid-22423f04.js";import"./RadioGroup-2502a9ca.js";import"./Dropdown-55d3f93f.js";import"./use-keyboard-906e13bf.js";function $n(e){return Kt(Ne(e).toLowerCase())}function Tn(e,n,s,u){var i=-1,d=e==null?0:e.length;for(u&&d&&(s=e[++i]);++i<d;)s=n(s,e[i],i,e);return s}function Nn(e){return function(n){return e==null?void 0:e[n]}}var Bn={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Vn=Nn(Bn),jn=Vn,On=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Mn="\\u0300-\\u036f",Ln="\\ufe20-\\ufe2f",Un="\\u20d0-\\u20ff",Wn=Mn+Ln+Un,Zn="["+Wn+"]",Xn=RegExp(Zn,"g");function Yn(e){return e=Ne(e),e&&e.replace(On,jn).replace(Xn,"")}var Hn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Kn(e){return e.match(Hn)||[]}var Jn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function qn(e){return Jn.test(e)}var pt="\\ud800-\\udfff",Gn="\\u0300-\\u036f",Qn="\\ufe20-\\ufe2f",es="\\u20d0-\\u20ff",ts=Gn+Qn+es,ht="\\u2700-\\u27bf",xt="a-z\\xdf-\\xf6\\xf8-\\xff",ns="\\xac\\xb1\\xd7\\xf7",ss="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",os="\\u2000-\\u206f",as=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",gt="A-Z\\xc0-\\xd6\\xd8-\\xde",us="\\ufe0e\\ufe0f",mt=ns+ss+os+as,_t="['\u2019]",Ge="["+mt+"]",is="["+ts+"]",bt="\\d+",rs="["+ht+"]",Ct="["+xt+"]",wt="[^"+pt+mt+bt+ht+xt+gt+"]",ls="\\ud83c[\\udffb-\\udfff]",cs="(?:"+is+"|"+ls+")",ds="[^"+pt+"]",yt="(?:\\ud83c[\\udde6-\\uddff]){2}",Et="[\\ud800-\\udbff][\\udc00-\\udfff]",K="["+gt+"]",fs="\\u200d",Qe="(?:"+Ct+"|"+wt+")",vs="(?:"+K+"|"+wt+")",et="(?:"+_t+"(?:d|ll|m|re|s|t|ve))?",tt="(?:"+_t+"(?:D|LL|M|RE|S|T|VE))?",St=cs+"?",Ft="["+us+"]?",ps="(?:"+fs+"(?:"+[ds,yt,Et].join("|")+")"+Ft+St+")*",hs="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",xs="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",gs=Ft+St+ps,ms="(?:"+[rs,yt,Et].join("|")+")"+gs,_s=RegExp([K+"?"+Ct+"+"+et+"(?="+[Ge,K,"$"].join("|")+")",vs+"+"+tt+"(?="+[Ge,K+Qe,"$"].join("|")+")",K+"?"+Qe+"+"+et,K+"+"+tt,xs,hs,bt,ms].join("|"),"g");function bs(e){return e.match(_s)||[]}function Cs(e,n,s){return e=Ne(e),n=s?void 0:n,n===void 0?qn(e)?bs(e):Kn(e):e.match(n)||[]}var ws="['\u2019]",ys=RegExp(ws,"g");function Es(e){return function(n){return Tn(Cs(Yn(n).replace(ys,"")),e,"")}}var Ss=Es(function(e,n,s){return n=n.toLowerCase(),e+(s?$n(n):n)}),nt=Ss;function Fs(e){const{length:n}=e;return n>1&&(e.push(st(e[0],0,"append")),e.unshift(st(e[n-1],n-1,"prepend"))),e}function st(e,n,s){return it(e,{key:`carousel-item-duplicate-${n}-${s}`})}function ot(e,n,s){return s?e===0?n-3:e===n-1?0:e-1:e}function $e(e,n){return n?e+1:e}function Rs(e,n,s){return e<0?null:e===0?s?n-1:null:e-1}function Ds(e,n,s){return e>n-1?null:e===n-1?s?0:null:e+1}function zs(e,n){return n&&e>3?e-2:e}function at(e){return window.TouchEvent&&e instanceof window.TouchEvent}function ut(e,n){let{width:s,height:u}=e.getBoundingClientRect();if(n){const i=getComputedStyle(e);s=s-parseFloat(i.getPropertyValue("padding-left"))-parseFloat(i.getPropertyValue("padding-right")),u=u-parseFloat(i.getPropertyValue("padding-top"))-parseFloat(i.getPropertyValue("padding-bottom"))}return{width:s,height:u}}function me(e,n,s){return e<n?n:e>s?s:e}function As(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,s=e.match(n);if(s){const[,u,,i="ms"]=s;return Number(u)*(i==="ms"?1:1e3)}return 0}const Rt=Qt("n-carousel-methods"),ks=e=>Jt(Rt,e),Be=(e="unknown",n="component")=>{const s=qt(Rt);return s||Gt(e,`\`${n}\` must be placed inside \`n-carousel\`.`),s},Ps={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean};var Is=W({name:"CarouselDots",props:Ps,setup(e){const{mergedClsPrefixRef:n}=oe(e),s=j([]),u=Be();function i(m,f){switch(m.key){case"Enter":case" ":m.preventDefault(),u.to(f);return}e.keyboard&&x(m)}function d(m){e.trigger==="hover"&&u.to(m)}function g(m){e.trigger==="click"&&u.to(m)}function x(m){var f;if(m.shiftKey||m.altKey||m.ctrlKey||m.metaKey)return;const b=(f=document.activeElement)===null||f===void 0?void 0:f.nodeName.toLowerCase();if(b==="input"||b==="textarea")return;const{code:R}=m,P=R==="PageUp"||R==="ArrowUp",A=R==="PageDown"||R==="ArrowDown",D=R==="PageUp"||R==="ArrowRight",z=R==="PageDown"||R==="ArrowLeft",k=u.isVertical(),M=k?P:D,q=k?A:z;!M&&!q||(m.preventDefault(),M&&!u.isNextDisabled()?(u.next(),S(u.currentIndexRef.value)):q&&!u.isPrevDisabled()&&(u.prev(),S(u.currentIndexRef.value)))}function S(m){var f;(f=s.value[m])===null||f===void 0||f.focus()}return en(()=>s.value.length=0),{mergedClsPrefix:n,dotEls:s,handleKeydown:i,handleMouseenter:d,handleClick:g}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return h("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},tn(this.total,s=>{const u=s===this.currentIndex;return h("div",{"aria-selected":u,ref:i=>n.push(i),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,u&&`${e}-carousel__dot--active`],key:s,onClick:()=>this.handleClick(s),onMouseenter:()=>this.handleMouseenter(s),onKeydown:i=>this.handleKeydown(i,s)})}))}});const $s=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},h("g",{fill:"none"},h("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Ts=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},h("g",{fill:"none"},h("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})));var Ns=W({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=oe(e),{isVertical:s,isPrevDisabled:u,isNextDisabled:i,prev:d,next:g}=Be();return{mergedClsPrefix:n,isVertical:s,isPrevDisabled:u,isNextDisabled:i,prev:d,next:g}},render(){const{mergedClsPrefix:e}=this;return h("div",{class:`${e}-carousel__arrow-group`},h("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},$s),h("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Ts))}});const be="CarouselItem",Bs=e=>{var n;return((n=e.type)===null||n===void 0?void 0:n.name)===be};var Vs=W({name:be,setup(e){const{mergedClsPrefixRef:n}=oe(e),s=Be(nt(be),`n-${nt(be)}`),u=j(),i=_(()=>{const{value:f}=u;return f?s.getSlideIndex(f):-1}),d=_(()=>s.isPrev(i.value)),g=_(()=>s.isNext(i.value)),x=_(()=>s.isActive(i.value)),S=_(()=>s.getSlideStyle(i.value));rt(()=>s.addSlide(u.value)),lt(()=>{s.removeSlide(u.value)});function m(f){const{value:b}=i;b!==void 0&&(s==null||s.onCarouselItemClick(b,f))}return{mergedClsPrefix:n,selfElRef:u,isPrev:d,isNext:g,isActive:x,index:i,style:S,handleClick:m}},render(){var e;const{$slots:n,mergedClsPrefix:s,isPrev:u,isNext:i,isActive:d,index:g,style:x}=this,S=[`${s}-carousel__slide`,{[`${s}-carousel__slide--current`]:d,[`${s}-carousel__slide--prev`]:u,[`${s}-carousel__slide--next`]:i}];return h("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":g,"aria-hidden":!d,style:x,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:u,isNext:i,isActive:d,index:g}))}}),js=se("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[l("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[l("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[V("> img",`
 display: block;
 `)])]),l("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[p("dot",[l("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[V("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),p("active",`
 background-color: var(--n-dot-color-active);
 `)])]),p("line",[l("dot",`
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
 `,[V("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),p("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),l("arrow",`
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
 `,[V("svg",`
 height: 1em;
 width: 1em;
 `),V("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),p("vertical",`
 touch-action: pan-x;
 `,[l("slides",`
 flex-direction: column;
 `),p("fade",[l("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),p("card",[l("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[p("current",`
 transform: translateY(-50%) translateZ(0);
 `),p("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),p("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),p("usercontrol",[l("slides",[V(">",[V("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),p("left",[l("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[p("line",[l("dot",`
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
 `)])])]),l("dot",`
 margin: 4px 0;
 `)]),l("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),p("vertical",[l("arrow",`
 transform: rotate(90deg);
 `)]),p("show-arrow",[p("bottom",[l("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),p("top",[l("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),p("left",[l("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),p("right",[l("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),p("left",[l("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[V("> *:first-child",`
 margin-bottom: 12px;
 `)])]),p("right",[l("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[p("line",[l("dot",`
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
 `)])])]),l("dot",`
 margin: 4px 0;
 `),l("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[V("> *:first-child",`
 margin-bottom: 12px;
 `)])]),p("top",[l("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[p("line",[l("dot",`
 margin: 0 4px;
 `)])]),l("dot",`
 margin: 0 4px;
 `),l("arrow-group",`
 top: 12px;
 right: 12px;
 `,[V("> *:first-child",`
 margin-right: 12px;
 `)])]),p("bottom",[l("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[p("line",[l("dot",`
 margin: 0 4px;
 `)])]),l("dot",`
 margin: 0 4px;
 `),l("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[V("> *:first-child",`
 margin-right: 12px;
 `)])]),p("fade",[l("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[p("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),p("card",[l("slides",`
 perspective: 1000px;
 `),l("slide",`
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
 `)])])]);const Os=["transitionDuration","transitionTimingFunction"],Ms=Object.assign(Object.assign({},Ce.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Te=!1;var Ls=W({name:"Carousel",props:Ms,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:s}=oe(e),u=j(null),i=j(null),d=j([]),g={value:[]},x=_(()=>e.direction==="vertical"),S=_(()=>x.value?"height":"width"),m=_(()=>x.value?"bottom":"right"),f=_(()=>e.effect==="slide"),b=_(()=>e.loop&&e.slidesPerView===1&&f.value),R=_(()=>e.effect==="custom"),P=_(()=>!f.value||e.centeredSlides?1:e.slidesPerView),A=_(()=>R.value?1:e.slidesPerView),D=_(()=>P.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),z=j({width:0,height:0}),k=_(()=>{const{value:t}=d;if(!t.length)return[];const{value:o}=D;if(o)return t.map(F=>ut(F));const{value:a}=A,{value:c}=z,{value:v}=S;let r=c[v];if(a!=="auto"){const{spaceBetween:F}=e,I=r-(a-1)*F,pe=1/Math.max(1,a);r=I*pe}const C=Object.assign(Object.assign({},c),{[v]:r});return t.map(()=>C)}),M=_(()=>{const{value:t}=k;if(!t.length)return[];const{centeredSlides:o,spaceBetween:a}=e,{value:c}=S,{[c]:v}=z.value;let r=0;return t.map(({[c]:C})=>{let F=r;return o&&(F+=(C-v)/2),r+=C+a,F})}),q=j(!1),we=_(()=>{const{transitionStyle:t}=e;return t?Je(t,Os):{}}),ye=_(()=>R.value?0:As(we.value.transitionDuration)),Ve=_(()=>{const{value:t}=d;if(!t.length)return[];const o=!(D.value||A.value===1),a=C=>{if(o){const{value:F}=S;return{[F]:`${k.value[C][F]}px`}}};if(R.value)return t.map((C,F)=>a(F));const{effect:c,spaceBetween:v}=e,{value:r}=m;return t.reduce((C,F,I)=>{const pe=Object.assign(Object.assign({},a(I)),{[`margin-${r}`]:`${v}px`});return C.push(pe),q.value&&(c==="fade"||c==="card")&&Object.assign(pe,we.value),C},[])}),$=_(()=>{const{value:t}=P,{length:o}=d.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:a}=k,{length:c}=a;if(!c)return o;const{value:v}=M,{value:r}=S,C=z.value[r];let F=a[a.length-1][r],I=c;for(;I>1&&F<C;)I--,F+=v[I]-v[I-1];return me(I+1,1,c)}}),ae=_(()=>zs($.value,b.value)),Dt=$e(e.defaultIndex,b.value),Ee=j(ot(Dt,$.value,b.value)),T=nn(sn(e,"currentIndex"),Ee),N=_(()=>$e(T.value,b.value));function G(t){var o,a;t=me(t,0,$.value-1);const c=ot(t,$.value,b.value),{value:v}=T;c!==T.value&&(Ee.value=c,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,c,v),(a=e.onUpdateCurrentIndex)===null||a===void 0||a.call(e,c,v))}function ue(t=N.value){return Rs(t,$.value,e.loop)}function ie(t=N.value){return Ds(t,$.value,e.loop)}function zt(t){const o=Z(t);return o!==null&&ue()===o}function At(t){const o=Z(t);return o!==null&&ie()===o}function je(t){return N.value===Z(t)}function kt(t){return T.value===t}function Oe(){return ue()===null}function Me(){return ie()===null}function Se(t){const o=me($e(t,b.value),0,$.value);(t!==T.value||o!==N.value)&&G(o)}function Fe(){const t=ue();t!==null&&G(t)}function re(){const t=ie();t!==null&&G(t)}function Pt(){(!B||!b.value)&&Fe()}function It(){(!B||!b.value)&&re()}let B=!1,U=0;const Re=j({});function le(t,o=0){Re.value=Object.assign({},we.value,{transform:x.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function Q(t=0){f.value?De(N.value,t):U!==0&&(!B&&t>0&&(B=!0),le(U=0,t))}function De(t,o){const a=Le(t);a!==U&&o>0&&(B=!0),U=Le(N.value),le(a,o)}function Le(t){let o;return t>=$.value-1?o=Ue():o=M.value[t]||0,o}function Ue(){if(P.value==="auto"){const{value:t}=S,{[t]:o}=z.value,{value:a}=M,c=a[a.length-1];let v;if(c===void 0)v=o;else{const{value:r}=k;v=c+r[r.length-1][t]}return v-o}else{const{value:t}=M;return t[$.value-1]||0}}const ee={currentIndexRef:T,to:Se,prev:Pt,next:It,isVertical:()=>x.value,isHorizontal:()=>!x.value,isPrev:zt,isNext:At,isActive:je,isPrevDisabled:Oe,isNextDisabled:Me,getSlideIndex:Z,getSlideStyle:Nt,addSlide:$t,removeSlide:Tt,onCarouselItemClick:Bt};ks(ee);function $t(t){!t||d.value.push(t)}function Tt(t){if(!t)return;const o=Z(t);o!==-1&&d.value.splice(o,1)}function Z(t){return typeof t=="number"?t:t?d.value.indexOf(t):-1}function Nt(t){const o=Z(t);if(o!==-1){const a=[Ve.value[o]],c=ee.isPrev(o),v=ee.isNext(o);return c&&a.push(e.prevSlideStyle||""),v&&a.push(e.nextSlideStyle||""),fn(a)}}function Bt(t,o){let a=!B&&!fe&&!Pe;e.effect==="card"&&a&&!je(t)&&(Se(t),a=!1),a||(o.preventDefault(),o.stopPropagation())}let ce=null;function de(){ce&&(clearInterval(ce),ce=null)}function X(){de(),!e.autoplay||ae.value<2||(ce=window.setInterval(re,e.interval))}let ze=0,Ae=0,L=0,ke=0,fe=!1,Pe=!1;function We(t){var o;if(Te||!(!((o=i.value)===null||o===void 0)&&o.contains(vn(t))))return;Te=!0,fe=!0,Pe=!1,ke=Date.now(),de(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const a=at(t)?t.touches[0]:t;x.value?Ae=a.clientY:ze=a.clientX,e.touchable&&(ne("touchmove",document,ve,{passive:!0}),ne("touchend",document,Y),ne("touchcancel",document,Y)),e.draggable&&(ne("mousemove",document,ve),ne("mouseup",document,Y))}function ve(t){const{value:o}=x,{value:a}=S,c=at(t)?t.touches[0]:t,v=o?c.clientY-Ae:c.clientX-ze,r=z.value[a];L=me(v,-r,r),t.cancelable&&t.preventDefault(),f.value&&le(U-L,0)}function Y(){const{value:t}=N;let o=t;if(!B&&L!==0&&f.value){const a=U-L,c=[...M.value.slice(0,$.value-1),Ue()];let v=null;for(let r=0;r<c.length;r++){const C=Math.abs(c[r]-a);if(v!==null&&v<C)break;v=C,o=r}}if(o===t){const a=Date.now()-ke,{value:c}=S,v=z.value[c];L>v/2||L/a>.4?o=ue(t):(L<-v/2||L/a<-.4)&&(o=ie(t))}o!==null&&o!==t?(Pe=!0,G(o),Ye(()=>{(!b.value||Ee.value!==T.value)&&Q(ye.value)})):Q(ye.value),Ze(),X()}function Ze(){fe&&(Te=!1),fe=!1,ze=0,Ae=0,L=0,ke=0,te("touchmove",document,ve),te("touchend",document,Y),te("touchcancel",document,Y),te("mousemove",document,ve),te("mouseup",document,Y)}function Vt(){if(f.value&&B){const{value:t}=N;De(t,0)}else X();f.value&&(Re.value.transitionDuration="0ms"),B=!1}function jt(t){if(t.preventDefault(),B)return;let{deltaX:o,deltaY:a}=t;t.shiftKey&&!o&&(o=a);const c=-1,v=1,r=(o||a)>0?v:c;let C=0,F=0;x.value?F=r:C=r;const I=10;(F*a>=I||C*o>=I)&&(r===v&&!Me()?re():r===c&&!Oe()&&Fe())}function Ot(){z.value=ut(u.value,!0),X()}function Mt(){var t,o;D.value&&((o=(t=k.effect).scheduler)===null||o===void 0||o.call(t),k.effect.run())}function Lt(){e.autoplay&&de()}function Ut(){e.autoplay&&X()}rt(()=>{on(X),requestAnimationFrame(()=>q.value=!0)}),lt(()=>{Ze(),de()}),an(()=>{const{value:t}=d,{value:o}=g,a=new Map,c=r=>a.has(r)?a.get(r):-1;let v=!1;for(let r=0;r<t.length;r++){const C=o.findIndex(F=>F.el===t[r]);C!==r&&(v=!0),a.set(t[r],C)}v&&t.sort((r,C)=>c(r)-c(C))}),he(N,(t,o)=>{if(t!==o)if(X(),f.value){if(b.value&&ae.value>2){const{value:a}=$;t===a-2&&o===1?t=0:t===1&&o===a-2&&(t=a-1)}De(t,ye.value)}else Q()},{immediate:!0}),he([b,P],()=>void Ye(()=>G(N.value))),he(M,()=>f.value&&Q(),{deep:!0}),he(f,t=>{t?Q():(B=!1,le(U=0))});const Wt=_(()=>({onTouchstartPassive:e.touchable?We:void 0,onMousedown:e.draggable?We:void 0,onWheel:e.mousewheel?jt:void 0})),Zt=_(()=>Object.assign(Object.assign({},Je(ee,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:ae.value,currentIndex:T.value})),Xt=_(()=>({total:ae.value,currentIndex:T.value,to:ee.to})),Yt={getCurrentIndex:()=>T.value,to:Se,prev:Fe,next:re},Ht=Ce("Carousel","-carousel",js,dn,e,n),Xe=_(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:a,dotColorActive:c,dotColorFocus:v,dotLineWidth:r,dotLineWidthActive:C,arrowColor:F}}=Ht.value;return{"--n-bezier":t,"--n-dot-color":a,"--n-dot-color-focus":v,"--n-dot-color-active":c,"--n-dot-size":o,"--n-dot-line-width":r,"--n-dot-line-width-active":C,"--n-arrow-color":F}}),H=s?ct("carousel",void 0,Xe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:u,slidesElRef:i,slideVNodes:g,duplicatedable:b,userWantsControl:R,autoSlideSize:D,displayIndex:T,realIndex:N,slideStyles:Ve,translateStyle:Re,slidesControlListeners:Wt,handleTransitionEnd:Vt,handleResize:Ot,handleSlideResize:Mt,handleMouseenter:Lt,handleMouseleave:Ut,isActive:kt,arrowSlotProps:Zt,dotSlotProps:Xt},Yt),{cssVars:s?void 0:Xe,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:s,userWantsControl:u,slideStyles:i,dotType:d,dotPlacement:g,slidesControlListeners:x,transitionProps:S={},arrowSlotProps:m,dotSlotProps:f,$slots:{default:b,dots:R,arrow:P}}=this,A=b&&un(b())||[];let D=Us(A);return D.length||(D=A.map(z=>h(Vs,null,{default:()=>it(z)}))),this.duplicatedable&&(D=Fs(D)),this.slideVNodes.value=D,this.autoSlideSize&&(D=D.map(z=>h(He,{onResize:this.handleSlideResize},{default:()=>z}))),(e=this.onRender)===null||e===void 0||e.call(this),h("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${g}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,u&&`${n}-carousel--usercontrol`],style:this.cssVars},x,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),h(He,{onResize:this.handleResize},{default:()=>h("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},u?D.map((z,k)=>h("div",{style:i[k],key:k},rn(h(cn,Object.assign({},S),{default:()=>z}),[[ln,this.isActive(k)]]))):D)}),this.showDots&&f.total>1&&Ke(R,f,()=>[h(Is,{key:d+g,total:f.total,currentIndex:f.currentIndex,dotType:d,trigger:this.trigger,keyboard:this.keyboard})]),s&&Ke(P,m,()=>[h(Ns,null)]))}});function Us(e){return e.reduce((n,s)=>(Bs(s)&&n.push(s),n),[])}var Ws=se("statistic",[l("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),se("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[l("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[se("icon",{verticalAlign:"-0.125em"})]),l("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),l("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[se("icon",{verticalAlign:"-0.125em"})])])]);const Zs=Object.assign(Object.assign({},Ce.props),{tabularNums:Boolean,label:String,value:[String,Number]});var Xs=W({name:"Statistic",props:Zs,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:s,mergedRtlRef:u}=oe(e),i=Ce("Statistic","-statistic",Ws,hn,e,n),d=pn("Statistic",u,n),g=_(()=>{const{self:{labelFontWeight:S,valueFontSize:m,valueFontWeight:f,valuePrefixTextColor:b,labelTextColor:R,valueSuffixTextColor:P,valueTextColor:A,labelFontSize:D},common:{cubicBezierEaseInOut:z}}=i.value;return{"--n-bezier":z,"--n-label-font-size":D,"--n-label-font-weight":S,"--n-label-text-color":R,"--n-value-font-weight":f,"--n-value-font-size":m,"--n-value-prefix-text-color":b,"--n-value-suffix-text-color":P,"--n-value-text-color":A}}),x=s?ct("statistic",void 0,g,e):void 0;return{rtlEnabled:d,mergedClsPrefix:n,cssVars:s?void 0:g,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){var e;const{mergedClsPrefix:n,$slots:{default:s,label:u,prefix:i,suffix:d}}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${n}-statistic`,this.themeClass,this.rtlEnabled&&`${n}-statistic--rtl`],style:this.cssVars},xe(u,g=>h("div",{class:`${n}-statistic__label`},this.label||g)),h("div",{class:`${n}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},xe(i,g=>g&&h("span",{class:`${n}-statistic-value__prefix`},g)),this.value!==void 0?h("span",{class:`${n}-statistic-value__content`},this.value):xe(s,g=>g&&h("span",{class:`${n}-statistic-value__content`},g)),xe(d,g=>g&&h("span",{class:`${n}-statistic-value__suffix`},g))))}});const Ys={name:"ToDoList"},Hs=W({...Ys,setup(e){const n=[{title:"",key:"",width:50,align:"center",render(u,i){return h(Sn,{checked:u.isFinish,onUpdateChecked:d=>{s.value[i].isFinish=d}})}},{title:"things",key:"things",render(u){return h("span",{style:u.isFinish?"text-decoration: line-through; color: #999;":""},u.things)}},{title:"finish",key:"isFinish",width:120,align:"center",render(u){return h(xn,{type:u.isFinish?"success":"error"},{default:()=>u.isFinish?"\u5DF2\u5B8C\u6210":"\u672A\u5B8C\u6210"})}},{title:"finish",key:"isFinish",width:120,align:"center",render(u,i){return h(vt,{style:"cursor: pointer;",onClick:()=>{s.value.splice(i,1)}},{default:()=>h(gn)})}}],s=j([{things:"\u4ECA\u5929\u8981\u4FEE\u590D100\u4E2Abug",isFinish:!1},{things:"\u4ECA\u5929\u8981\u4FEE\u590D100\u4E2Abug",isFinish:!1},{things:"\u4ECA\u5929\u8981\u5199100\u884C\u4EE3\u7801\u52A0\u51E0\u4E2Abug\u5427",isFinish:!1},{things:"\u4ECA\u5929\u8981\u4FEE\u590D100\u4E2Abug",isFinish:!1},{things:"\u4ECA\u5929\u8981\u4FEE\u590D100\u4E2Abug",isFinish:!0},{things:"\u4ECA\u5929\u8981\u5199100\u884C\u4EE3\u7801\u52A0\u51E0\u4E2Abug\u5427",isFinish:!0},{things:"\u4ECA\u5929\u8981\u4FEE\u590D100\u4E2Abug",isFinish:!1},{things:"\u4ECA\u5929\u8981\u4FEE\u590D100\u4E2Abug",isFinish:!0},{things:"\u4ECA\u5929\u8981\u5199100\u884C\u4EE3\u7801\u52A0\u51E0\u4E2Abug\u5427",isFinish:!0}]);return(u,i)=>{const d=Fn;return _e(),ft(d,{class:"todo-table",columns:n,data:s.value,style:{height:"375px"},bordered:!1,"flex-height":""},null,8,["data"])}}});var Ks=dt(Hs,[["__scopeId","data-v-5d0b7744"]]);const O=e=>(yn("data-v-877c01ae"),e=e(),En(),e),Js={class:"workspace"},qs={flex:"","justify-between":"","items-center":"","w-100p":""},Gs={flex:"","items-center":"","flex-1":""},Qs=O(()=>E("div",{"ml-5":""},[E("p",{"m-0":"","text-xl":"","c-333":""},"\u65E9\u5B89\uFF0CAdmin\uFF0C\u5F00\u59CB\u60A8\u4E00\u5929\u7684\u5DE5\u4F5C\u5427\uFF01"),E("p",{"m-0":"","text-gray-400":""},"\u4ECA\u65E5\u9634\u8F6C\u5927\u96E8\uFF0C15\u2103 - 25\u2103\uFF0C\u51FA\u95E8\u8BB0\u5F97\u5E26\u4F1E\u54E6\u3002")],-1)),eo={"flex-1":""},to=J("4/12"),no=J("5/9"),so=J("12"),oo=J("\u5168\u90E8\u9879\u76EE"),ao={flex:"","flex-wrap":""},uo={"h-45px":""},io={flex:"","justify-between":""},ro={"hover:c-409eff":"","cursor-pointer":""},lo={"text-gray-400":""},co=O(()=>E("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"},null,-1)),fo=O(()=>E("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"},null,-1)),vo=O(()=>E("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"},null,-1)),po=O(()=>E("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"},null,-1)),ho={class:"convenient"},xo=O(()=>E("a",null,"\u64CD\u4F5C\u4E00",-1)),go=O(()=>E("a",null,"\u64CD\u4F5C\u4E8C",-1)),mo=O(()=>E("a",null,"\u64CD\u4F5C\u4E09",-1)),_o=O(()=>E("a",null,"\u64CD\u4F5C\u56DB",-1)),bo=O(()=>E("a",null,"\u64CD\u4F5C\u4E94",-1)),Co=O(()=>E("a",null,"\u64CD\u4F5C\u516D",-1)),wo=J(" \u6DFB\u52A0 "),yo={class:"echarts"},Eo={name:"Workspace"},So=W({...Eo,setup(e){const n=j([{title:"NaiveUI",icon:"github",desc:"\u4E00\u4E2A Vue 3 \u7EC4\u4EF6\u5E93,\u6BD4\u8F83\u5B8C\u6574\uFF0C\u4E3B\u9898\u53EF\u8C03\uFF0C\u4F7F\u7528 TypeScript\uFF0C\u5FEB\u6709\u70B9\u610F\u601D",group:"NaiveUI",time:"9\u5C0F\u65F6\u524D"},{title:"Vite",icon:"vite",desc:"Vite \u4E0B\u4E00\u4EE3\u7684\u524D\u7AEF\u5DE5\u5177\u94FE \u4E3A\u5F00\u53D1\u63D0\u4F9B\u6781\u901F\u54CD\u5E94",group:"Vite",time:"9\u5C0F\u65F6\u524D"},{title:"Vue",icon:"vue",desc:"\u6E10\u8FDB\u5F0F JavaScript \u6846\u67B6 \u6613\u5B66\u6613\u7528\uFF0C\u6027\u80FD\u51FA\u8272\uFF0C\u9002\u7528\u573A\u666F\u4E30\u5BCC\u7684 Web \u524D\u7AEF\u6846\u67B6\u3002",group:"Vue",time:"9\u5C0F\u65F6\u524D"},{title:"Typescript",icon:"typescript",desc:"TypeScript\u662FJavaScript\u7C7B\u578B\u7684\u8D85\u96C6\u3002",group:"Typescript9",time:"9\u5C0F\u65F6\u524D"},{title:"Scss",icon:"sass",desc:"\u4E16\u754C\u4E0A\u6700\u6210\u719F\u3001\u6700\u7A33\u5B9A\u3001\u6700\u5F3A\u5927\u7684\u4E13\u4E1A\u7EA7CSS\u6269\u5C55\u8BED\u8A00\uFF01",group:"Scss",time:"9\u5C0F\u65F6\u524D"},{title:"Milkdown",icon:"milkdown",desc:"\u63D2\u4EF6\u9A71\u52A8\u7684\u6240\u89C1\u5373\u6240\u5F97\u7684Markdown\u7F16\u8F91\u5668\u6846\u67B6",group:"Milkdown",time:"9\u5C0F\u65F6\u524D"}]);return(s,u)=>{const i=An,d=Xs,g=bn,x=Cn,S=Pn,m=wn,f=vt,b=kn,R=Ls,P=In;return _e(),qe("div",Js,[y(P,{cols:24,"x-gap":12,"y-gap":12},{default:w(()=>[y(S,{span:24},{default:w(()=>[y(x,{title:"\u5DE5\u4F5C\u53F0"},{default:w(()=>[E("div",qs,[E("div",Gs,[y(i,{round:"",size:64,src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"}),Qs]),E("div",eo,[y(g,{justify:"end",size:150,"wrap-item":!1},{default:w(()=>[y(d,{label:"\u4EFB\u52A1","text-right":""},{default:w(()=>[to]),_:1}),y(d,{label:"\u5F85\u529E","text-right":""},{default:w(()=>[no]),_:1}),y(d,{label:"\u6D88\u606F","text-right":""},{default:w(()=>[so]),_:1})]),_:1})])])]),_:1})]),_:1}),y(S,{span:16},{default:w(()=>[y(x,{title:"\u8FDB\u884C\u4E2D\u7684\u9879\u76EE",size:"small",segmented:{content:!0},"content-style":"padding: 0;"},{"header-extra":w(()=>[y(m,{type:"primary",text:""},{default:w(()=>[oo]),_:1})]),default:w(()=>[E("div",ao,[(_e(!0),qe(mn,null,_n(n.value,A=>(_e(),ft(x,{key:A.title,class:"project-card",hoverable:""},{default:w(()=>[y(b,null,{avatar:w(()=>[y(f,{icon:A.icon,size:28},null,8,["icon"])]),header:w(()=>[J(ge(A.title),1)]),footer:w(()=>[E("div",io,[E("span",ro,ge(A.group),1),E("span",lo,ge(A.time),1)])]),default:w(()=>[E("div",uo,ge(A.desc),1)]),_:2},1024)]),_:2},1024))),128))])]),_:1}),y(x,{"mt-12px":"",title:"\u5F85\u529E",size:"small",segmented:{content:!0},"content-style":"padding: 10px;"},{default:w(()=>[y(Ks)]),_:1})]),_:1}),y(S,{span:8},{default:w(()=>[y(x,{size:"small",title:"\u516C\u544A",segmented:{content:!0},"content-style":"padding: 0;"},{default:w(()=>[y(R,{autoplay:"","show-arrow":"",draggable:"","dot-type":"line"},{default:w(()=>[co,fo,vo,po]),_:1})]),_:1}),y(x,{"mt-12px":"",size:"small",title:"\u4FBF\u6377\u64CD\u4F5C",segmented:{content:!0}},{default:w(()=>[E("div",ho,[xo,go,mo,_o,bo,Co,y(m,{type:"primary",ghost:"",size:"small"},{icon:w(()=>[y(f,null,{default:w(()=>[y(Ie(Rn))]),_:1})]),default:w(()=>[wo]),_:1})])]),_:1}),y(x,{"mt-12px":""},{default:w(()=>[E("div",yo,[y(Ie(Dn),{options:Ie(zn)},null,8,["options"])])]),_:1})]),_:1})]),_:1})])}}});var Bo=dt(So,[["__scopeId","data-v-877c01ae"]]);export{Bo as default};
