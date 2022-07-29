import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor({ popupSelector, callbackFormSubmit }){
        super({ popupSelector });
        this.callbackFormSubmit = callbackFormSubmit;
        this._popupForm = this.popup.querySelector('.popup__form');
        this._popupInputs = this.popup.querySelectorAll('.popup__input');
    }
    _getInputValues(){
        this._inputValues = {};
        this._popupInputs.forEach((input) => {
          const valueInput = input.value;
          const inputName = input.name;
          this._inputValues[inputName] = valueInput;
        })
        return this._inputValues;
    }
    close(){
        super.close();
        this._popupForm.reset();
    }
    setEventListeners(){
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.callbackFormSubmit(this._getInputValues());
            this._popupForm.reset();
        })
    }
}