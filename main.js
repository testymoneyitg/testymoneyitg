const b=document.querySelector('.menu'),n=document.querySelector('.links');if(b&&n){b.onclick=()=>{n.classList.toggle('open');b.setAttribute('aria-expanded',n.classList.contains('open'))}}
