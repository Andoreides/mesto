const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


const showInputError = (formElement, inputElement, errorMessage, configElements) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  
  inputElement.classList.add(configElements.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(configElements.errorClass);
};

const hideInputError = (formElement, inputElement, configElements) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(configElements.inputErrorClass);
  errorElement.classList.remove(configElements.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, configElements) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, configElements);
  } else {
    hideInputError(formElement, inputElement, configElements);
  }
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

function toggleButtonState(inputList, buttonElement, configElements) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(configElements.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(configElements.inactiveButtonClass);
    buttonElement.disabled = false;
  };
};

function setEventListeners(formElement, configElements) {
  const inputList = Array.from(formElement.querySelectorAll(configElements.inputSelector));
  const buttonElement = formElement.querySelector(configElements.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, configElements);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, configElements);
      toggleButtonState(inputList, buttonElement, configElements);
    });
  });
};

function enableValidation(configElements) {
  const formList = Array.from(document.querySelectorAll(configElements.formSelector));
  formList.forEach((formElement) => {
    // formElement.addEventListener('submit', (evt) => {
    //   evt.preventDefault();
    // });

    setEventListeners(formElement, configElements);
  })
};
enableValidation(config);