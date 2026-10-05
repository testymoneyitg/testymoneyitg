
const menu=document.querySelector('.menu');
const links=document.querySelector('.links');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('open'));
