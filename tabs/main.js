const tabs = document.querySelectorAll('.tabcontent')
const btns = document.querySelectorAll('.tablinks')
btns[0].classList.add('active')
tabs[0].style.display='block'


function openCity(event,name){
  btns.forEach(e=>{e===event.target?e.classList.add('active'):e.classList.remove('active')})
tabs.forEach(e=>{
  e.id===name?e.style.display='block':e.style.display='none'
})
}
