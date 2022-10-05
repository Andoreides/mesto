import { popUpZoom, elementPopup, config, formElementCard, cardTemplate, openImage, initialCards, formCardName, formEditProfileName, formElementProfile, elementsFormCard, cardsSection, secondnameFieldElement, subtitleElement, nameFieldElement, titleElement, popUpOpenProfile } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import './index.css';
import { Section } from '../components/Section.js';


import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupDelete } from '../components/PopupDelete.js';
import { PopupWithImage } from '../components/PopupWithImage.js';

import { Api } from '../components/Api.js';

let userId = '';
export const api = new Api(config.host, config.token);

Promise.all([
  api.getUserInfo(),
  api.getIntialCards(),
])
  .then(([data, initialCards]) => {
    userInfo.makeAvatar(data);
    userInfo.setID(data);
    userInfo.setUserInfo(data);

    section.rendererElements(initialCards);
  })
  .catch((err) => {
    console.log(err);
  })
  .catch((err) => {
    console.log(err);
  })

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


const userInfo = new UserInfo({
  titleSelector: '.profile__title',
  subtitleSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar'
});




const avatarForm = document.querySelector('.popup__form-avatar')
const btnAvatar = document.querySelector('.profile__button-zone');
const popupAvatarName = avatarForm.getAttribute('name');

const popupAvatarSelector = '.popup__avatar';


const popupAvatarForm = new PopupWithForm({
  selectorPopup: popupAvatarSelector,
  callbackFormSubmit: (event, avatarData) => {
    event.preventDefault();
    popupAvatarForm.loadingProcces(true);
    api.saveAvatar(avatarData) //mb mistake
      .then((data) => {
        userInfo.makeAvatar(data);
        popupAvatarForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAvatarForm.loadingProcces(false);
      })
  }
  
});


popupAvatarForm.setEventListeners();

btnAvatar.addEventListener('click', () => {
  popupAvatarForm.open();
  formValidate[popupAvatarName].resetValidation();
});

const popupConfirm = '.popup__delete';
const popupConfirmDelete = new PopupDelete({
  selectorPopup: popupConfirm,
  callback: (id, element) => {
    api.deleteCard(id)
      .then(() => {
        section.removeCard(element);
        popupConfirmDelete.close();
      })
      .catch((err) => {
        console.log(err);
      })
    }
}) 
popupConfirmDelete.setEventListeners();

const profilePoup = '.popup_type_add-name';
const popupPrfofileForm = new PopupWithForm({
  selectorPopup: profilePoup,
  callbackFormSubmit: (evt, data) => {
    evt.preventDefault();
    popupPrfofileForm.loadingProcces(true);
    api.createUserInfo(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupPrfofileForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupPrfofileForm.loadingProcces(false);
      })
  }
})
popupPrfofileForm.setEventListeners();


popUpOpenProfile.addEventListener('click', () => {
  const profileInfo = userInfo.getUserInfo();
  nameFieldElement.value = profileInfo.name;
  secondnameFieldElement.value = profileInfo.about;
  formValidate[formEditProfileName].resetValidation();
  popupPrfofileForm.open();
});

const formElementCard2 = '.popup_type_add-image';
const popupCardForm = new PopupWithForm({
  selectorPopup: formElementCard2,
  callbackFormSubmit: (evt, data) => {
    evt.preventDefault();
    popupCardForm.loadingProcces(true);
    api.createCard(data)
      .then((data) => {
        const card = createCard(data);
        section.addCard(card);
        popupCardForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupCardForm.loadingProcces(false);
      })
  }
})

popupCardForm.setEventListeners();

openImage.addEventListener('click', () => {
  popupCardForm.open();
  formValidate[formCardName].resetValidation();
})

const popupZoomCreate = new PopupWithImage({
  selectorPopup: popUpZoom,
});
popupZoomCreate.setEventListeners();

const openPopupZoom = (title, link) => {
  popupZoomCreate.open(title, link);
}

const deleteCard = (id, element) => {
  popupConfirmDelete.open(id, element);
}

const createCard = (item) => {
  const userID = userInfo.getUserID();
  const oneCard = new Card(item, cardTemplate, userID, openPopupZoom, deleteCard, {
    setLikes: () => {
      api.likePointer(item._id)
        .then((res) => {
          oneCard.likeAmount(res.likes);
          oneCard.cardLike();
        })
        .catch((err) => {
          console.log(err);
        })
    },
    deleteLikes: () => {
      api.deleteLike(item._id)
        .then((res) => {
          oneCard.likeAmount(res.likes);
          oneCard.cardDisLike();
        })
        .catch((err) => {
          console.log(err);
        })
    }
  })
  const createdCard = oneCard.render();
  return createdCard; 
}

const section = new Section({
  items: [],
  renderer: (item) => {
    const createdItem = createCard(item);
    section.addCard(createdItem);
  }
}, cardsSection);




enableValidation();

