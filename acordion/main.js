const btns = document.querySelectorAll('.accordion');
btns.forEach(element => {
  element.addEventListener('click',openPanel);
});

function openPanel(event){
  event.target.nextElementSibling.style.display="block"
  event.target.addEventListener('click',closePanel)
  event.target.classList.add('active')
}

function closePanel(event){
  event.target.nextElementSibling.style.display="none"
  event.target.removeEventListener('click',closePanel)
  event.target.classList.remove('active')
}