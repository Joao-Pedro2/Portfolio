
//controls menubar
function openMenu(){
  if(document.querySelector('.menu').classList.contains = 'menu'){
    document.querySelector('.menu').classList.add('menu-open')
    document.querySelector('.close-menu').classList.add('close')
  } }

function closeMenu(){
  if(document.querySelector('.menu').classList.contains = 'menu-open'){
    document.querySelector('.menu').classList.remove('menu-open')
    document.querySelector('.close-menu').classList.remove('close')
  }
}

//controls slider

let totalSlides = document.querySelectorAll('.slider-itens').length;

document.querySelector('.slider').style.width = 'calc(100vw * ${totalSlides})';

document.querySelector('.controls').style.height = 
`${document.querySelector('.slider-container').clientHeight}px`;

