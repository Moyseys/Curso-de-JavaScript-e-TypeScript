import isEmail from 'validator/lib/isEmail';

const CLASS_ERROR = 'show-error-message';

const form = document.querySelector('#form') as HTMLFormElement;

const username = document.querySelector('#username') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const password = document.querySelector('#password') as HTMLInputElement;
const password2 = document.querySelector('#password2') as HTMLInputElement;

function handleSubmit(e: Event): void {
  e.preventDefault();

  const target = e.target as HTMLFormElement;

  hideErrosMessages(target);
  checkFieldsIsEmpety(username, email, password, password2);
  checkEmail(email);
  checkEqualPassword(password, password2);

  if (shouldSendForm(target)) console.log('Enviei');
}

form.addEventListener('submit', handleSubmit);

function shouldSendForm(form: HTMLFormElement): boolean {
  let shouldSend = false;
  form.querySelectorAll('.' + CLASS_ERROR).length > 0
    ? (shouldSend = false)
    : (shouldSend = true);

  return shouldSend;
}

function checkFieldsIsEmpety(...inputs: Array<HTMLInputElement>): void {
  inputs.forEach((input) => {
    const valueOfInput = input.value;
    if (!valueOfInput) {
      showError(input, 'Esse campo não pode ser vazio');
    }
  });
}

function checkEqualPassword(
  pass1: HTMLInputElement,
  pass2: HTMLInputElement,
): void {
  if (pass1.value !== pass2.value) {
    showError(pass2, 'Senhas não são iguais');
  }
}

function checkEmail(inputEmail: HTMLInputElement): void {
  if (!isEmail(inputEmail.value)) {
    showError(inputEmail, 'Email inválido');
  }
}

function hideErrosMessages(form: HTMLFormElement): void {
  const allFields = form.querySelectorAll('.' + CLASS_ERROR);
  console.log(allFields);

  allFields.forEach((value) => {
    if (value.classList.contains(CLASS_ERROR))
      value.classList.remove(CLASS_ERROR);
  });
}

function showError(input: HTMLInputElement, msg: string): void {
  const parentElement = input.parentElement as HTMLElement;
  const boxError = parentElement.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  parentElement.classList.add(CLASS_ERROR);
  boxError.innerHTML = msg + '<br>';
}
