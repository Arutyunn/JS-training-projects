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