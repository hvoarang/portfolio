window.onload=function(){let e=document.querySelector(".nav");setTimeout(()=>{e.style.transform="translateY(0)"},500)},window.addEventListener("scroll",function(){img.getBoundingClientRect().top-window.innerHeight<0&&img.classList.add("active")}),window.addEventListener("scroll",function(){let e=document.querySelector(".persona__content-blurb");e.getBoundingClientRect().top-window.innerHeight<0&&e.classList.add("active")}),window.addEventListener("scroll",function(){let e=document.querySelector(".app__design--content");e.getBoundingClientRect().top-window.innerHeight<0&&e.classList.add("active")}),window.addEventListener("scroll",function(){let e=document.querySelector(".app__design--img");e.getBoundingClientRect().top-window.innerHeight<0&&e.classList.add("active")}),window.addEventListener("scroll",function(){let e=document.querySelector(".web-design__content"),t=document.querySelector(".web__design--img");e.getBoundingClientRect().top-window.innerHeight<0&&(e.classList.add("active"),t.classList.add("active"))}),window.addEventListener("scroll",function(){let e=document.querySelectorAll(".blog__post"),t=document.querySelector(".blog__view-more"),n=window.innerHeight;e.forEach(function(e,t){e.getBoundingClientRect().top-n<0&&setTimeout(function(){e.style.opacity="1",e.style.transform="translateX(0)"},200*t)}),t.getBoundingClientRect().top-n<0&&(t.style.opacity="1",t.style.transform="translateX(0)")});
//# sourceMappingURL=index.9ffb4a5e.js.map