

class Card {
    constructor(input, selector, openPopupZoom) {
        this._name = input.name;
        this._link = input.link;
        this._selector = selector;
        this._openPopupZoom = openPopupZoom;
      }
    
      _getTemplate() {
        const cardElement = document
          .querySelector(this._selector)
          .content
          .querySelector('.elements__card')
          .cloneNode(true);
    
        return cardElement;
      }
    
      _createCard() {
        const bigImage = this.element.querySelector('.elements__image');
        this.element.querySelector('.elements__title').textContent = this._name;
        bigImage.src = this._link;
        bigImage.alt = this._name;
      }
    
      _handleLikeButton(evt) {
        evt.target.classList.toggle('elements__like_active');
      };
    
      _handleButtontnDelete() {
        this.element.remove();
      }
    
      _addEventListeners() {
        const bigImage = this.element.querySelector('.elements__image');
        bigImage.addEventListener('click', () => { this._openPopupZoom(this._name, this._link) });
          
        this.element.querySelector('.elements__like').addEventListener('click', this._handleLikeButton);
    
        this.element.querySelector('.elements__button-delete').addEventListener('click', (evt) => {
          this._handleButtontnDelete(evt);
        });
      }
    
      render() {
        this.element = this._getTemplate();
        this._addEventListeners();
        this._createCard();
        return this.element;
      }
    
    }







export default Card;



