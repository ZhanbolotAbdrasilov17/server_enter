const inputName = document.querySelector('.nameInput')
const nameError = document.querySelector('.nameError')

const radio = document.querySelectorAll('[type=radio]')
const radioError = document.querySelector('.radioError')

const athrCorrect = document.querySelector('.autorizatedCorrect')

const button = document.querySelector('.enterbTn')


let isSubmitClicked = false

const validateName = () => {
  if (inputName.value.length < 5) {
    return 'Имя слишком короткое'
  }
  if (inputName.value.length === 0) {
    return 'Заполните имя'
  }

  if (inputName.value[0] === inputName.value[0].toUpperCase()) {
    return 'Имя должно начинаться с прописной буквы или с цифры'
  }

  if (inputName.value.includes(' ')) {
    return 'Имя не должно содержать пробелы'
  }
  return ''
}



const atLeastOneRadio = () => {
  const role = Array.from(radio)
  if (role[0].checked === false && role[1].checked === false && role[2].checked === false) {
    return 'Обязательно нужно сделать выбор'
  }
  return ''
}

button.addEventListener('click', (e) => {
  e.preventDefault();
  const nameErrText = validateName()
  const radioErrText = atLeastOneRadio()

  if (!nameErrText && !radioErrText) {
    athrCorrect.textContent = 'Авторизация успешна!';
    nameError.textContent = ''
    radioError.textContent = ''
  } else {
    nameError.textContent = nameErrText
    radioError.textContent = radioErrText
    isSubmitClicked = true    
  }
})


inputName.addEventListener('input', () => {
  if (isSubmitClicked === true) {
    nameError.textContent = ''
    athrCorrect.textContent = '' 
    return isSubmitClicked === false
  }
  if (isSubmitClicked === false) {
    athrCorrect.textContent = ''
  }
  return ''
})