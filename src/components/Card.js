

class Card {
    constructor(input, selector, userID, openPopupZoom, deleteCard, { setLikes, deleteLikes }) {
        this._name = input.name;
        this._link = input.link;
        this._selector = selector;
        this._openPopupZoom = openPopupZoom;
        this._id = input._id;
        this.userID = userID;
        this._likes = input.likes;
        this._ownerId = input.owner._id;
        this._deleteLikes = deleteLikes;
        this._setLikes = setLikes;
        this._deleteCard = deleteCard;
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
        this.bigImage = this.element.querySelector('.elements__image');
        
        this.element.querySelector('.elements__title').textContent = this._name;
        this.bigImage.src = this._link;
        this.bigImage.alt = this._name;  
      }
      _checkupLikes(){
        if (this._likes.some((info) => {
          return info._id === this.userID
        })) {
          this.likeBtn.classList.toggle('elements__like_active');
        }
      }
      likeAmount(likes) {
        this.likeNumber.textContent = likes.length;
      }
      cardLike() {
        this.likeBtn.classList.add('elements__like_active');
      }
      cardDisLike() {
        this.likeBtn.classList.remove('elements__like_active');
      }
      _handleButtontnDelete() {
        this.element.remove();
        this.element = null;
      }
      _checkupDelete(){
        if (this._ownerId !== this.userID) {
          this.deleteBtn = this.element.querySelector('.elements__button-delete')
          this.deleteBtn.remove();
        }
      }
      _addEventListeners() {
        this.bigImage = this.element.querySelector('.elements__image');
        
        this.deleteBtn = this.element.querySelector('.elements__button-delete');
        this.bigImage.addEventListener('click', () => { this._openPopupZoom(this._name, this._link) });
        this.likeBtn.addEventListener('click', () => {
          if (this.likeBtn.classList.contains('elements__like_active')) {
            this._deleteLikes();
          } else {
            this._setLikes();
          }
        })
        this.deleteBtn.addEventListener('click', () => {
          this._deleteCard(this._id, this.element);
        })
      }
    
      render() {
        this.element = this._getTemplate();
        this.likeNumber = this.element.querySelector('.elements__indicator')
        this.likeNumber.textContent = this._likes.length;
        this.likeBtn = this.element.querySelector('.elements__like');
        this._createCard();
        this._addEventListeners();
        
        this._checkupDelete();
        this._checkupLikes();
        return this.element;
      }
    
    }







export default Card;



