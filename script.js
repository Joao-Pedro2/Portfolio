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