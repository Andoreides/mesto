export class Popup {
    constructor({ selectorPopup }){
        this.popup = document.querySelector(selectorPopup);
        console.log(selectorPopup);
        console.log(this.popup);
        // this.btnClose = this.popup.querySelector('.popup__close');
    }
    open(){
        this.popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close(){
        this.popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
          this.close();
        };
      }
      _hanldeBackgroundClose(e) {
        if (e.target.classList.contains('popup_opened')) {
          this.close()
        }
      }
    
    setEventListeners(){
        this.popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
              this.close();
            }
          }); 
    }
}