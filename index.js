const openPopup = document.getElementById('popup__open');
const closePopup = document.getElementById('popup__close');
const PopUp = document.getElementById('popup');
const titleElement = document.querySelector('.profile__title');
const nameFieldElement = document.querySelector('.popup__input');
const subtitleElement = document.querySelector('.profile__subtitle');
const secondnameFieldElement = document.querySelector('.popup__input-job');
const saveForm = document.querySelector('.popup__form')


openPopup.addEventListener('click', function(e){
    PopUp.classList.add('active');
    nameFieldElement.value = titleElement.textContent;
    secondnameFieldElement.value = subtitleElement.textContent;
})

closePopup.addEventListener('click', () => {
    PopUp.classList.remove('active');
    titleElement.textContent = nameFieldElement.value;
    subtitleElement.textContent = secondnameFieldElement.value;
})

saveForm.addEventListener('submit', function(event) {
    event.preventDefault();
    titleElement.textContent = nameFieldElement.value;
    subtitleElement.textContent = secondnameFieldElement.value;
    PopUp.classList.remove('active');
})


// const likeBlack = document.getElementById('elements__like');

// likeBlack.addEventListener('click', function(k){
//     likeBlack.classList.add('elements__like-active');
// })

// likeBlack.addEventListener('click', () =>{
//     likeBlack.classList.remove('elements__like-active');
// })

const like = document.querySelectorAll('.elements__like');
like.forEach(function(el) {
  el.addEventListener('click', function(evt) {
      evt.target.classList.toggle('elements__like-active');
  });
});

// let formElement = document.querySelector('popup__form');
// let nameInput = document.querySelector('.profile__title');
// let jobInput = document.querySelector('.profile__subtitle');

// function formSubmitHandler (evt) {
//     evt.preventDefault();
    
// }

// formElement.addEventListener('submit', formSubmitHandler);

// const editButton = document.querySelector('.profile__edit-button');
// const titleElement = document.querySelector('profile__title');
// const nameFieldElement = document.querySelector('poput__input');
// const closePopupButton = document.querySelector('.popup__close');
// const popup = document.querySelector('.popup');

// editButton.addEventListener('click', function() {
//     popup.classList.add('active')

// })

// closePopupButton.addEventListener('click', function() {
//     popup.classList.remove('active')

// })