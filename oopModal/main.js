// document.querySelector('#myBtn').addEventListener('click',openModal);
// const myModal = document.querySelector('#myModal');
// const close = document.querySelector('.close')
// const modalContent = document.querySelector('.modal_content')


// function openModal(){
//   myModal.style.display ='block'
//   myModal.addEventListener('click',ModalCloseEvent)
// }




// function ModalCloseEvent(e){
//   console.log(e.target)
// if(!e.target.closest('.modal_content')||e.target==close){
//   myModal.style.display='none'
// }
// }



class Modal {
    constructor(text = 'error!!!!') {
        this.text = text;
        this.init();
    };

    init() {
        this.createMarkUp();
        this.modal = document.getElementById('myModal');
        this.closeBtn = this.modal.querySelector('.close');
        this.atachEvents();
    };
    createMarkUp() {
        document.body.insertAdjacentHTML('beforeEnd',
            `<div id="myModal" class="modal">
      <div class="modal_content">
        <span class="close">&times;</span>
            <p>${this.text}</p>
          </div>
    </div>`);
    };

    atachEvents() {

        this.closeFn = this.closeFn.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.closeBtn.addEventListener('click', this.closeFn);
        window.addEventListener('click', this.handleClick);
    };
    handleClick(e) {
        if (e.target === this.modal) {
            this.closeFn();
        }
    }
    closeFn() {
        this.datachEvent();
        this.modal.remove();
        this.modal = null;
    };
    datachEvent() {
        this.closeBtn.removeEventListener('click', this.closeFn);
        window.removeEventListener('click', this.handleClick);
    }
}