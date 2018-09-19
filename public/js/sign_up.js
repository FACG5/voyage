/* global document */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable no-alert */

const personBtn = document.getElementById('person-btn');
const personDiv = document.getElementById('person-div');
const personSendBtn = document.getElementById('person-send');
const fName = document.getElementById('f-name');
const lName = document.getElementById('l-name');
const personBirthDay = document.getElementById('birth');
const personPass = document.getElementById('person-pass');
const personConfrimPass = document.getElementById('person-confpass');
const userName = document.getElementById('user-name');
const personEmail = document.getElementById('person-email');
const businessPass = document.getElementById('business-pass');
const businessconfirmPass = document.getElementById('business-confpass');
const businessBtn = document.getElementById('business-btn');
const businessDiv = document.getElementById('business-div');
const businessSendBtn = document.getElementById('busines-send');
const businessEmail = document.getElementById('business-email');
const businessName = document.getElementById('business-name');
const businessAddress = document.getElementById('address');
const businessDescription = document.getElementById('description');
const selector = document.getElementById('category');
const imageUrl = document.getElementById('image');
const personErr = document.getElementById('person-err');
const businessErr = document.getElementById('business-err');
let gender = '';


personBtn.addEventListener('click', () => {
  personDiv.style.display = 'block';
  businessDiv.style.display = 'none';
});
businessBtn.addEventListener('click', () => {
  businessDiv.style.display = 'block';
  personDiv.style.display = 'none';
});
// //////////////////////////////////////for person////////////////////////////////////
personEmail.addEventListener('focusout', () => {
  checkEmail(personEmail, personErr);
});
personPass.addEventListener('focusout', () => {
  checkPass(personPass, personErr);
});
personConfrimPass.addEventListener('focusout', () => {
  checkConfirmPw(personPass, personConfrimPass, personErr);
});
fName.addEventListener('focusout', () => {
  checkValue(fName, personErr, 'first name is required');
});
lName.addEventListener('focusout', () => {
  checkValue(lName, personErr, 'last name is required');
});
userName.addEventListener('focusout', () => {
  checkValue(userName, personErr, 'user name is required');
});
personBirthDay.addEventListener('focusout', () => {
  checkValue(personBirthDay, personErr, 'Birth day is required');
});
// //////////////////////////////////////for business////////////////////////////////////
businessEmail.addEventListener('focusout', () => {
  checkEmail(businessEmail, businessErr);
});
businessPass.addEventListener('focusout', () => {
  checkPass(businessPass, businessErr);
});
businessconfirmPass.addEventListener('focusout', () => {
  checkConfirmPw(businessPass, businessconfirmPass, businessErr);
});
businessName.addEventListener('focusout', () => {
  checkValue(businessName, businessErr, 'business name is required');
});
businessAddress.addEventListener('focusout', () => {
  checkValue(businessAddress, businessErr, 'business address name is required');
});
businessDescription.addEventListener('focusout', () => {
  checkValue(businessDescription, businessErr, 'business descriptionname is required');
});
imageUrl.addEventListener('focusout', () => {
  checkValue(imageUrl, businessErr, 'image URL is required');
});

personSendBtn.addEventListener('click', () => {
  checkGender();
  const personData = {
    email: personEmail.value,
    password: personPass.value,
    userName: userName.value,
    fName: fName.value,
    lName: lName.value,
    gender,
    birthDay: personBirthDay.value,
    type: 'person',
  };
  fetch('/sign_up', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(personData), // body data type must match "Content-Type" header
  })
    .then(response => response.json()).then((response) => {
      const { message, pass } = response;
      if (pass) {
        alert(message);
        window.location = '/sign_in';
      } else {
        alert(message);
      }
    })
    .catch(error => alert('ERROR :', error));
});

businessSendBtn.addEventListener('click', () => {
  const businessCategory = selector[selector.selectedIndex].value;
  const businessData = {
    email: businessEmail.value,
    password: businessPass.value,
    businessName: businessName.value,
    businessAddress: businessAddress.value,
    businessDescription: businessDescription.value,
    businessCategory,
    image: imageUrl.value,
    type: 'business',
  };

  fetch('/sign_up', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(businessData), // body data type must match "Content-Type" header
  })
    .then(response => response.json()).then((response) => {
      const { message, pass } = response;
      if (pass) {
        alert(message);
        window.location = '/sign_in';
      } else if (!pass) {
        alert(message);
      }
    })
    .catch(error => alert('ERROR :',error));
});
