/* global document */
const personBtn = document.getElementById('personbtn');
const personDiv = document.getElementById('persondiv');
const personSendBtn = document.getElementById('personsend');
const fName = document.getElementById('f-name');
const lName = document.getElementById('l-name');
const personBirthDay = document.getElementById('birth');
const personGender = document.getElementById('gender');
const personPass = document.getElementById('personpass');
const personConfrimPass = document.getElementById('personconfpass');
const userName = document.getElementById('username');
const personEmail = document.getElementById('personemail');
const businessPass = document.getElementById('businesspass');
const businessconfirmPass = document.getElementById('businessconfpass');
const businessBtn = document.getElementById('businessbtn');
const businessDiv = document.getElementById('businessdiv');
const businessSendBtn = document.getElementById('businessend');
const businessEmail = document.getElementById('businessemail');
const businessName = document.getElementById('businessname');
const businessAddress = document.getElementById('address');
const businessDescription = document.getElementById('description');
const selector = document.getElementById('category')
const imageUrl = document.getElementById('image');
const personErr = document.getElementById('personerr');
const businessErr = document.getElementById('businesserr');
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

personSendBtn.addEventListener('click', (e) => {
 checkGender();
  const personData = {
    email: personEmail.value,
    password: personPass.value,
    userName: userName.value,
    fName: fName.value,
    lName: lName.value,
    gender: gender,
    birthDay: personBirthDay.value,
    type:0,
  };
  fetch('/sign_up', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(personData), // body data type must match "Content-Type" header
  })
    .then(response => alert(response.msg))
    .catch(error => console.log(error));
});
businessSendBtn.addEventListener('click', (e) => {
  const businessCategory = selector[selector.selectedIndex].value;
  const businessData = {
    email: businessEmail.value,
    password: businessPass.value,
    businessName: businessName.value,
    businessAddress: businessAddress.value,
    businessDescription: businessDescription.value,
    businessCategory:businessCategory,
    image: imageUrl.value,
    type:1,
  };

  fetch('/sign_up', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(businessData), // body data type must match "Content-Type" header
  })
    .then(response => alert(response.msg))
    .catch(error => console.log(error));
});
