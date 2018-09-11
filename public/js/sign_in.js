const getElement = id => document.getElementById(id);

const email = getElement('input-email');
const password = getElement('input-password');
const sendButton = getElement('send-button');
const messageError = getElement('message-error');

sendButton.addEventListener('click', () => {
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
    .catch(error => console.error(error));
});
