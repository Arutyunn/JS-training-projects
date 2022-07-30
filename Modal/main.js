document.querySelector('#myBtn').addEventListener('click',openModal);


function openModal(){
  const myModal = document.querySelector('#myModal');
  myModal.style.display ='block'
  ModalCloseEvent()
}
function closeModal(){
  myModal.style.display ='none'
  removeEvent()
}
function ModalCloseEvent(){
  document.querySelector('.close').addEventListener('click',closeModal);
  document.addEventListener('keydown',handleEscape);
  const modal = document.querySelector('#myModal').addEventListener('click',closeModalOut)
}
function closeModalOut(event){
  if(!event.target.closest('.modal_content')){
    myModal.style.display ='none'
    removeEvent()
  }
}
function handleEscape(event){
if(event.key ==='Escape'){
  closeModal()
}
}
function removeEvent(){
  document.querySelector('.close').removeEventListener('click',closeModal);
  document.removeEventListener('keydown',handleEscape);
  document.querySelector('#myModal').removeEventListener('click',closeModalOut)
}