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
const titleElement = document.querySelector('.profile__title');
const nameFieldElement = document.querySelector('.popup__input');
const subtitleElement = document.querySelector('.profile__subtitle');
const secondnameFieldElement = document.querySelector('.popup__input_type_job');
const cardsSection = document.querySelector('.elements')
const elementsFormCard = document.getElementById('popup__form-img')
const formElementProfile = document.querySelector('.popup__form-name')
const formElementCard = document.querySelector('.popup__form-image')
const formEditProfileName = formElementProfile.getAttribute('name');
const elementPopup = '.popup_type_add-image';
const popUpZoom = '.popup_type_zoom';
const profilePoup = '.popup_type_add-name';
const formCardName = formElementCard.getAttribute('name');
  
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
  
const openImage = document.querySelector('.profile__add-button');
  

export { elementPopup, profilePoup, config, openImage, cardTemplate, initialCards, formCardName, formEditProfileName, formElementCard, formElementProfile, elementsFormCard, popUpZoom, cardsSection, secondnameFieldElement, subtitleElement, nameFieldElement, titleElement, popUpOpenProfile }; 