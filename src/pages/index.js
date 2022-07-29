import { config, openImage, initialCards, formCardName, formEditProfileName, formElementCard, formElementProfile, elementsFormCard, cardsSection, secondnameFieldElement, subtitleElement, nameFieldElement, titleElement, popUpOpenProfile } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import './index.css';

import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';



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

