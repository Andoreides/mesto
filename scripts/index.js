import Card from './Card.js';
import FormValidator from './FormValidator.js';

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  templateItem: '.card-template',
  cardsList: '.elements',
  cardsListItemText: '.elements__title',
  cardsListItemDelete: '.elements__button-delete',
  cardsListLike: '.elements__like',
  cardsLink: '.elements__image',
};

const cardTemplate = '#card-template';
const popUpOpenProfile = document.querySelector('.profile__edit-button');
const popupCloseProfile = document.getElementById('popup__closeProfile');
const namePopup = document.querySelector('.popup_type_add-name');
const imagePopup = document.querySelector('.popup_type_add-image');
const zoomPopup = document.querySelector('.popup_type_zoom')
const popUps = document.querySelectorAll('.popup');
const titleElement = document.querySelector('.profile__title');
const nameFieldElement = document.querySelector('.popup__input');
const subtitleElement = document.querySelector('.profile__subtitle');
const secondnameFieldElement = document.querySelector('.popup__input_type_job');
const profileForm = document.querySelector('.popup__form')
const cardsSection = document.querySelector('.elements')
const elementsFormCard = document.getElementById('popup__form-img')
const elementsInput = document.getElementById('cardName')
const submitButtonDisabled = elementsFormCard.querySelector('.popup__button');
// const buttonS = document.getElementById('butttt')
const elementsTitle = document.querySelector('.elements__title')
const elementsImageLink = document.getElementById('link-job')
const popUpZoom = document.querySelector('.popup_type_zoom')
const closeZoom = document.getElementById('popZoom__close')
const getCardByEvent = evt => evt.currentTarget.closest('.elements__card');

const formElementProfile = document.querySelector('.popup__form-name')
const formElementCard = document.querySelector('.popup__form-image')
const formEditProfileName = formElementProfile.getAttribute('name');
const formCardName = formElementCard.getAttribute('name');

const zoomText = document.querySelector('.popup__zoom-paragraph');
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];



  popUpOpenProfile.addEventListener('click', function() {
    openPopup(namePopup);
    nameFieldElement.value = titleElement.textContent;
    secondnameFieldElement.value = subtitleElement.textContent;
    formValidate[formEditProfileName].resetform();
})

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
  popup.addEventListener('mousedown', closingByBackground);
}

function closePopUp(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc)
  // document.removeEventListener('keydown', closingEsc);
  popup.removeEventListener('mousedown', closingByBackground);
};

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopUp(openedPopup); 
  }
}  


function closingByBackground(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopUp(evt.target);
  };
}

popupCloseProfile.addEventListener('click', () => {
    closePopUp(namePopup);
})

profileForm.addEventListener('submit', function(event) {
    event.preventDefault();
    titleElement.textContent = nameFieldElement.value;
    subtitleElement.textContent = secondnameFieldElement.value;
    closePopUp(namePopup);
})

const popImage = document.getElementById('popup__image');
const openImage = document.querySelector('.profile__add-button');
const closeImage = document.getElementById('popIm__close');

openImage.addEventListener('click', () => {
    
    openPopup(imagePopup);
    formValidate[formCardName].resetform();
})



closeZoom.addEventListener('click', () => {
  closePopUp(zoomPopup);
}
)


closeImage.addEventListener('click', () => {
    closePopUp(imagePopup);
})

function addFormCard(evt) {
  evt.preventDefault()
  const cardNew = {
    name: elementsInput.value,
    link: elementsImageLink.value
  };
  // renderCard(cardNew);
  renderCard(createCard(cardNew));
  elementsFormCard.reset();

  closePopUp(imagePopup); 
  
  // submitButtonDisabled.classList.add('popup__button_disabled')
  // submitButtonDisabled.setAttribute('disabled', true);
};

elementsFormCard.addEventListener('submit', addFormCard);

function renderCard(element) {
  cardsSection.prepend(element);
};

const imagePopupCard = document.querySelector('.popup__image')
const imagePopupTitle = document.querySelector('.popup__zoom-paragraph')





const formValidate = {};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const formValidation = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidate[formName] = formValidation;
    formValidation.enableValidation();
  });
}


const createCard = (input) => {
  const card = new Card(input, cardTemplate, openPopupZoom);
  const createdCard = card.render();
  return createdCard;
}

initialCards.forEach((card) => { 
  renderCard(createCard(card)); 
});

enableValidation();

function openPopupZoom(name, link) {
  imagePopupCard.src = link;
  imagePopupTitle.textContent = name;
  imagePopupCard.alt = name;
  openPopup(zoomPopup);
};


// function createCard(element) {
//   const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
//   const bigImage = cardElement.querySelector('.elements__image');
//   bigImage.addEventListener('click', () => openCard(element));

//   bigImage.src = element.link;
//   cardElement.querySelector('.elements__title').textContent = element.name;
//   bigImage.alt = element.name;

//   cardElement.querySelector('.elements__like').addEventListener('click', handleLikeButton);

//   cardElement.querySelector('.elements__button-delete').addEventListener('click', evt => {
//     const card = getCardByEvent(evt);
//     card.remove();
//   });
//   return cardElement;
// }