
import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import './index.css';

import { Section } from '../scripts/Section.js';
import { UserInfo } from '../scripts/UserInfo.js';
import { PopupWithForm } from '../scripts/PopupWithForm.js';
import { PopupWithImage } from '../scripts/PopupWithImage.js';

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



const cardTemplate = '#card-template';
const popUpOpenProfile = document.querySelector('.profile__edit-button');
const popupCloseProfile = document.getElementById('popup__closeProfile');
// const namePopup = document.querySelector('.popup_type_add-name');
// const imagePopup = document.querySelector('.popup_type_add-image');
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

const elementsTitle = document.querySelector('.elements__title')
const elementsImageLink = document.getElementById('link-job')
// const popUpZoom = document.querySelector('.popup_type_zoom')
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



  

const popImage = document.getElementById('popup__image');
const openImage = document.querySelector('.profile__add-button');
const closeImage = document.getElementById('popIm__close');





const imagePopupCard = document.querySelector('.popup__image')
const imagePopupTitle = document.querySelector('.popup__zoom-paragraph')






const userInfo = new UserInfo(titleElement, subtitleElement);
const profilePoup = '.popup_type_add-name';
const popupPrfofileForm = new PopupWithForm({
  popupSelector: profilePoup,
  callbackFormSubmit: (form) => {
    userInfo.setUserInfo(form)
    popupPrfofileForm.close();
  }
});

popupPrfofileForm.setEventListeners();

popUpOpenProfile.addEventListener('click', () => {
  const userInfoProfile = userInfo.getUserInfo();
  nameFieldElement.value = userInfoProfile.name;
  secondnameFieldElement.value = userInfoProfile.job;
  formValidate[formEditProfileName].resetValidation();
  popupPrfofileForm.open();
});

const elementPopup = '.popup_type_add-image';
const popupElementForm = new PopupWithForm({
  popupSelector: elementPopup,
  callbackFormSubmit: (form) => {
    const createElement = createCard(form)
    section.addItem(createElement);
    popupElementForm.close();
  }
});
popupElementForm.setEventListeners();

openImage.addEventListener('click', () => {
  popupElementForm.open();
  formValidate[formCardName].resetValidation();
});

const popUpZoom = '.popup_type_zoom';
const imageBigPopup = new PopupWithImage({ popupSelector: popUpZoom });
imageBigPopup.setEventListeners();

const zoomPopupOPen = (name, link) => {
  imageBigPopup.open(name, link);
}

const section = new Section({
  items: initialCards,
  renderer: (element) => {
    const createElement = createCard(element);
    section.addItem(createElement);
  }

}, cardsSection);

const createCard = (item) => {
  const card = new Card(item, cardTemplate, zoomPopupOPen);
  const createElement = card.render();
  return createElement;
}

section.rendererElements();

enableValidation();

