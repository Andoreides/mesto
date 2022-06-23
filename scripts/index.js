const cardTemplate = document.querySelector('#card-template').content;
const popUpOpenProfile = document.querySelector('.profile__edit-button');
const popupCloseProfile = document.getElementById('popup__closeProfile');

const popUp = document.querySelector('#popupProfile');
const namePopup = document.querySelector('.popup_type_add-name');
const imagePopup = document.querySelector('.popup_type_add-image');
const zoomPopup = document.querySelector('.popup_type_zoom')

const titleElement = document.querySelector('.profile__title');
const nameFieldElement = document.querySelector('.popup__input');
const subtitleElement = document.querySelector('.profile__subtitle');
const secondnameFieldElement = document.querySelector('.popup__input_type_job');
const profileForm = document.querySelector('.popup__form')
const cardsSection = document.querySelector('.elements')
const elementsForm = document.getElementById('popup__form-img')
const elementsInput = document.getElementById('cardName')
// const buttonS = document.getElementById('butttt')
const elementsTitle = document.querySelector('.elements__title')
const elementsImageLink = document.getElementById('inputskii__name-job')
const popUpZoom = document.querySelector('.popup_type_zoom')
const closeZoom = document.getElementById('popZoom__close')
const getCardByEvent = evt => evt.currentTarget.closest('.elements__card');
// const allCards = [];

// const bigImage = document.querySelector('.popup__image');
// const lastId = allCards.length ? (allCards[allCards.length - 1].id + 1) : 1;

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


  // createInitialCards();
  // createInitialCardsZoom();

  popUpOpenProfile.addEventListener('click', function() {
    openPopup(popUp);
    nameFieldElement.value = titleElement.textContent;
    secondnameFieldElement.value = subtitleElement.textContent;
})

function openPopup(popup) {
  popup.classList.add('popup_opened');

}

function closePopUp(popup) {
  popup.classList.remove('popup_opened');
};

// function closePopupfunc () {
//     popUp.classList.remove('popup_opened');
// }

popupCloseProfile.addEventListener('click', () => {
    // closePopupfunc();
    closePopUp(namePopup);
})

profileForm.addEventListener('submit', function(event) {
    event.preventDefault();
    titleElement.textContent = nameFieldElement.value;
    subtitleElement.textContent = secondnameFieldElement.value;
    // popUp.classList.remove('active');
    // closePopupfunc();
    closePopUp(namePopup);
})

const popImage = document.getElementById('popup__image');
const openImage = document.querySelector('.profile__add-button');
const closeImage = document.getElementById('popIm__close');

openImage.addEventListener('click', () => {
    
    openPopup(imagePopup);
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
  renderCard(cardNew);
  elementsForm.reset();
  closePopUp(imagePopup);
};

elementsForm.addEventListener('submit', addFormCard);

function handleLikeButton(evt) {
  evt.target.classList.toggle('elements__like_active');
};

function renderCard(element) {
  const cardElement = createCard(element);
  cardsSection.prepend(cardElement);
};

function createCard(element) {
  const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
  const bigImage = cardElement.querySelector('.elements__image');
  bigImage.addEventListener('click', () => openCard(element));

  bigImage.src = element.link;
  cardElement.querySelector('.elements__title').textContent = element.name;
  bigImage.alt = element.name;

  cardElement.querySelector('.elements__like').addEventListener('click', handleLikeButton);

  cardElement.querySelector('.elements__button-delete').addEventListener('click', evt => {
    const card = getCardByEvent(evt);
    card.remove();
  });
  return cardElement;
}

initialCards.forEach(renderCard);

const imagePopupCard = document.querySelector('.popup__image')
const imagePopupTitle = document.querySelector('.popup__zoom-paragraph')

function openCard(element) {
  imagePopupCard.src = element.link;
  imagePopupTitle.textContent = element.name;
  imagePopupCard.alt = element.name;
  openPopup(zoomPopup);
};


// submitButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   closePopUp(imagePopup);
//   createOneCard(elementsInput.value, elementsImageLink.value);
//   // elementsTitle.textContent = elementsInput.value;
//   bigImage.src = elementsImageLink.value;
//   bigImage.alt = elementsInput.value;
//   zoomText.textContent = elementsInput.value;
//   elementsForm.reset();
// })




// function openpopit(img) {
//   console.log(img);
//   openPopup(zoomPopup);
//   // popUpZoom.classList.add('popup_opened');
//   bigImage.src = img.target.currentSrc;
//   zoomText.value = img.target.alt;
//   zoomText.textContent = img.target.alt;
// };



// function handleClick (info) {
//   bigImage.src = info.link;
//   bigImage.alt = info.alt; 
// }

// function createOneCardZoom(pic) {
//   bigImage.addEventListener('click', () => 
//   handleClick(pic));
// }

// initialCards.forEach(pic => createOneCardZoom(pic));

// function createOneCard(imageTitle, imageLink) {
//   console.log(imageLink, imageTitle);
//   // const lastId = allCards.length ? (allCards[allCards.length - 1].id + 1) : 1;
    
//   const template = `
//   <img class="elements__image" src="${imageLink}" alt="${imageTitle}" onclick="openpopit(event)">
//   <div class="elements__title">${imageTitle}</div>
//   <button type="button" class="elements__like"></button>
//   <button type="button" id="${lastId}" class="elements__button-delete"></button>
//   `;


//   const elementsSection = document.querySelector('.elements');
//   let div = document.createElement('div');
//     div.innerHTML = template;
//     div.className = "elements__card";
//   elementsSection.prepend(div);
  
//   allCards.push({name: imageTitle, link: imageLink, id: lastId});


//   const like = div.querySelectorAll('.elements__like');
//   like.forEach(function(el) {
//   el.addEventListener('click', function(evt) {
//       evt.target.classList.toggle('elements__like_active');
//   });

    

//   const deleteButton = document.querySelectorAll('.elements__button-delete');
//   deleteButton.forEach(function(del) {
//     del.addEventListener('click', function(event) {
//       let index = -1;
//       const id = +event.currentTarget.id

//       allCards.forEach((el,i) => {
//         if (el.id === id) {
//           index = i;
//         }
//       }) 

//       allCards.splice(index, 1);
//       event.currentTarget.parentElement.remove()
//     })

//   })
// });

// }


// function createInitialCards() {
//   initialCards.forEach(item =>
//     createOneCard(item.name, item.link));
//   }



