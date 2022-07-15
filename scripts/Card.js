

class Card {
    constructor(input, selector, popupZoom) {
        this._name = input.name;
        this._link = input.link;
        this._selector = selector;
        this._popupZoom = popupZoom;
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
        this.element.querySelector('.elements__image').addEventListener('click', () => { this._popupZoom(this._name, this._link) });
    
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



//     constructor(config, name, link, items, openCard){
//         this._config = config;
//         this._name = name;
//         this._link = link;
//         this._deleteCard = this._deleteCard.bind(this);
//         this._items = items;
//         this._openCard = openCard
//     }

//     _getTemplate() {
//         // const kek = document.querySelector(this._config.templateItem)
//         const cardTemplate = document.querySelector('.card-template')
//             .content
//             .children[0]
//             .cloneNode(true);
//         return cardTemplate;
//     } 

//     _addEventListeners(){
//         this._view.querySelector(this._config.cardsListItemDelete)
//             .addEventListener('click', this._deleteCard);
//         this._view.querySelector(this._config.cardsListLike)
//             .addEventListener('click', this._cardLike);
//         this.element.querySelector('.card__image').addEventListener('click', () => { this._openCard(this._name, this._link) });

//     }


//     _deleteCard(evt){
//         evt.preventDefault();
//         this._view.remove();    
//     }

//     _cardLike(evt){
//         evt.target.classList.toggle('elements__like_active');
//     }

//     render(cardsList){
//         this._view = this._getTemplate();
//         const card = this._view.querySelector(this._config.cardsListItemText);
//         card.textContent = this._name;
//         const link = this._view.querySelector(this._config.cardsLink);
//         link.src = this._link;
//         this._addEventListeners()

//         cardsList.append(this._view);
//     }
// }







//черновик мб пригодится
        // this._items.forEach((item) => {
        //     const card = new Card(this._config, item.name, item.link);
        //     card.render(this._view);
        // });