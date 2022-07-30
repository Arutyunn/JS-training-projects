const overlay = document.querySelector('.overlay')

function openNav(){
  overlay.style.width='100%'
  addEventListener("keydown",escapeClose)
}

function escapeClose(event){
  if(event.key==='Escape'){
    closeNav()
  }
}

function closeNav(){
  overlay.style.width='0%'
  removeEventListener('keydown',escapeClose)
}