import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor({ selectorPopup, callbackFormSubmit }){
        super({ selectorPopup });
        this._callbackFormSubmit = callbackFormSubmit;
        this._popupForm = this.popup.querySelector('.popup__form');
        this._popupInputs = Array.from(this.popup.querySelectorAll('.popup__input'));
        this._btnSubmit = this._popupForm.querySelector('.popup__button');
        this._textNew = this._btnSubmit.textContent;
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
    loadingProcces(isLoading){
        if (isLoading) {
            this._btnSubmit.textContent = 'Сохранение...';
        } else {
            this._btnSubmit.textContent = this._textNew;
        }
    }
    close(){
        super.close();
        this._popupForm.reset();
    }
    setEventListeners(){
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackFormSubmit(evt, this._getInputValues());
        })
    }
}