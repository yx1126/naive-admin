import{cc as a}from"../assets/index.e8fe7c02.js";function p(r,i="copy",u,c=!0){return new Promise((s,l)=>{var e;const n=u||document.createElement("button");n.style.display="none";const o=new a(n,{text:function(){return r},action:function(){return i}});o.on("success",function(t){c&&o.destroy(),t.clearSelection(),s(t)}),o.on("error",function(t){c&&o.destroy(),l(t)}),n&&(document.body.appendChild(n),(e=n==null?void 0:n.click)==null||e.call(n),document.body.removeChild(n))})}export{p as c};
