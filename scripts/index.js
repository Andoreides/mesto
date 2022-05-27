const openPopup = document.getElementById('popup__open');
const closePopup = document.getElementById('popup__close');
const popUp = document.getElementById('popup');
const titleElement = document.querySelector('.profile__title');
const nameFieldElement = document.querySelector('.popup__input');
const subtitleElement = document.querySelector('.profile__subtitle');
const secondnameFieldElement = document.querySelector('.popup__input-job');
const saveForm = document.querySelector('.popup__form')


openPopup.addEventListener('click', function() {
    popUp.classList.add('active');
    nameFieldElement.value = titleElement.textContent;
    secondnameFieldElement.value = subtitleElement.textContent;
})

function closePopupfunc () {
    popUp.classList.remove('active');
}

closePopup.addEventListener('click', () => {
    popUp.classList.remove('active');
    // titleElement.textContent = nameFieldElement.value;
    // subtitleElement.textContent = secondnameFieldElement.value;
})

saveForm.addEventListener('submit', function(event) {
    event.preventDefault();
    titleElement.textContent = nameFieldElement.value;
    subtitleElement.textContent = secondnameFieldElement.value;
    // popUp.classList.remove('active');
    closePopupfunc();
})

const likeNA = document.querySelector('.elements__like');


function liked(likeNA) {
    likeNA.classList.remove('elements__like');
    likeNA.classList.add('elements__like-active');
}

// function notliked(likeNA) {
//     likeNA.classList.add('elements__like');
//     likeNA.classList.remove('elements__like-active');
// }

likeNA.addEventListener('click', function() {
    liked(likeNA);
})

