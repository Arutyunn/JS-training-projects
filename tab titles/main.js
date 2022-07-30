const sitys = document.querySelectorAll('.tabcontent')
const btns = document.querySelectorAll('.tablink')
sitys[0].style.display='block'
btns[0].style.backgroundColor=window.getComputedStyle(sitys[0]).backgroundColor
function openCity(sity,thi,color){
  btns.forEach(e=>{e===thi?e.style.backgroundColor=color:e.style.backgroundColor='#555'})
  sitys.forEach(e=>{
    e.id===sity?e.style.display="block":e.style.display="none"
  })
 
}