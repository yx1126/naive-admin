import{c3 as r,bt as s}from"../assets/index.86ed0bcc.js";function c(i,e,f){let o=500,t=!1;r(e)?o=e:s(e)&&(t=e),f&&(t=f);let l,u=!0;return function(...n){l&&clearTimeout(l),t&&u&&(i.call(null,...n),u=!1),l=setTimeout(t?()=>u=!0:i.bind(null,...n),o)}}export{c as u};