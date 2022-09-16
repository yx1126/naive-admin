function i(u,f=500,t=!1){let e,l=!0;return function(...n){e&&clearTimeout(e),t&&l&&(u.call(null,...n),l=!1),e=setTimeout(t?()=>l=!0:u.bind(null,...n),f)}}export{i as u};
