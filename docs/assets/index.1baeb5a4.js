var e=document.getElementById("menu-button"),n=document.getElementById("mode-button"),l=document.getElementById("nav-list"),t="moon",i=document.querySelector(".close-modal"),o=document.querySelector(".close-button");function c(){l.className="nav-list",e.disabled=!1,i.style.visibility="hidden"}n.childNodes[1].name=t,i.onclick=()=>{c()},o.onclick=()=>{c()},e.onclick=()=>{i.style.visibility="visible",l.className="list-visible",e.disabled=!0},n.onclick=()=>{t="sunny"===t?"moon":"sunny",n.childNodes[1].name=t};
