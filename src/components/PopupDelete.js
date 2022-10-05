import { Popup } from './Popup.js';

export class PopupDelete extends Popup {
    constructor({ selectorPopup, callback }) {
        super({ selectorPopup });
        this._callback = callback;
        this._popupForm = this.popup.querySelector('.popup__form');
    }
    open(id, el) {
        this._id = id;
        this._el = el;
        super.open();
    }
    setEventListeners(){
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callback(this._id, this._el);
        })
    }
}