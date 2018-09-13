/* global document */
/* global window */
const getElement = id => document.getElementById(id);

const email = getElement('input-email');
const password = getElement('input-password');
const sendButton = getElement('send-button');
const messageError = getElement('message-error');

const isEmpty = element => element.value.trim().toString().length === 0;
const isValid = (emailValue) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(emailValue).toLowerCase());
};

sendButton.addEventListener('click', () => {
  if (isEmpty(email) || isEmpty(password)) {
    messageError.textContent = 'Please fill the field';
  } else if (!isValid(email.value)) {
    messageError.textContent = 'Email is not valid';
  } else {
    const object = {
      email: email.value,
      password: password.value,
    };

    fetch('/sign_in', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(object),
    })
      .then(response => response.json())
      .then((response) => {
        if (response.res === 'pass') {
          window.location = '/';
        }
        messageError.textContent = response.err;
      })
      .catch((error) => { messageError.textContent = error; });
  }
});
