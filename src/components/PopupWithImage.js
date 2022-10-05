import { Popup } from './Popup.js';


export class PopupWithImage extends Popup {
    constructor({ selectorPopup }){
        super({ selectorPopup });
        
        this._popupImage = this.popup.querySelector('.popup__image');
        this._popupImageTitle = this.popup.querySelector('.popup__zoom-paragraph');
    }
    open(title, link){
        this._popupImage.alt = title;
        this._popupImage.src = link;
        this._popupImageTitle.textContent = title;
        super.open();
    }
}