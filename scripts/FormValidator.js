class FormValidator {
    constructor(config, selectorForm){
        this.config = config;
        
        this._selectorForm = selectorForm;
        this.input = config.inputSelector;
        this.inputList = Array.from(this._selectorForm.querySelectorAll(this.input));
        this.btnSubmit = config.submitButtonSelector;
        this.buttonElement = this._selectorForm.querySelector(this.btnSubmit);
        this.inactiveButtonClass = config.inactiveButtonClass;
        this.inputErrorClass = config.inputErrorClass;
        this.errorClass = config.errorClass;
    }
    resetform() {
      this._toggleButtonState();
  
      this.inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });
    }
    _showInputError(inputElement, errorMessage){
        const errorElement = this._selectorForm.querySelector(`.${inputElement.id}-error`);
  
        inputElement.classList.add(this.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this.errorClass);
    }
    _hideInputError(inputElement){
        const errorElement = this._selectorForm.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this.inputErrorClass);
        errorElement.classList.remove(this.errorClass);
        errorElement.textContent = '';
    }
    _checkInputValidity(inputElement){
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
          } else {
            this._hideInputError(inputElement);
          }
    }
    _hasInvalidInput(){
        return this.inputList.some(inputElement => {
            return !inputElement.validity.valid;
    });
    }   
    _toggleButtonState(){
        if (this._hasInvalidInput()) {
            this.buttonElement.classList.add(this.inactiveButtonClass);
            this.buttonElement.disabled = true;
          } else {
            this.buttonElement.classList.remove(this.inactiveButtonClass);
            this.buttonElement.disabled = false;
          };
    }
    _setEventListeners(){
        this._toggleButtonState(this.inputList);
        this.inputList.forEach(inputElement => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
          });
        });
    }
    enableValidation(){
        this._setEventListeners();
    }
}


export default FormValidator;