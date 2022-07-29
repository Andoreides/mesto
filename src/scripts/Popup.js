export class Popup {
    constructor({ popupSelector }){
        this.popup = document.querySelector(popupSelector);
        this.btnClose = this.popup.querySelector('.popup__close');
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
        this.btnClose.addEventListener('click', () => {
            this.close(this.popup);
        })
        this.popup.addEventListener('click', this._hanldeBackgroundClose.bind(this));
    }
}