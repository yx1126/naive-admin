import{c7 as c,bx as o,c8 as f}from"../assets/index.038520d3.js";function x(r){if(c(r))return`${r}px`;if(o(r))return r.endsWith("px")||r.endsWith("%")?r:`${r}px`}function d(r,s=","){if(o(r))return r.split(s);if(f(r))return r}function u(r,s,e=!1){const n=d(s)||[];return Object.keys(r).filter(i=>e?n.includes(i):!n.includes(i)).reduce((i,t)=>(i[t]=r[t],i),{})}function y(r,s){return u(r,s)}export{x as a,y as o,d as s};
