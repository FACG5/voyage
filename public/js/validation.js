/* global document */

const displayErr = (errElem, errMsg) => {
  const errorElement = errElem;
  errorElement.textContent = errMsg;
};

const checkEmail = (emailContainer, errContainer) => {
  if (emailContainer.validity.typeMismatch) {
    displayErr(errContainer, 'NOT vaild email');
  } else if (emailContainer.validity.valueMissing) {
    displayErr(errContainer, 'Email is required');
  } else {
    displayErr(errContainer, '');
    return true;
  }
};

const checkValue = (container, errContainer, errMsg) => {
  if (container.value === '') {
    displayErr(errContainer, errMsg);
  }
};

const checkPass = (passContainer, errContainer) => {
  if (passContainer.validity.patternMismatch) {
    displayErr(
      errContainer,
      'Password must contain at least eight characters, including one letter and one number',
    );
  } else if (passContainer.validity.valueMissing) {
    displayErr(errContainer, 'Please enter a password');
  } else {
    displayErr(errContainer, '');
    return true;
  }
};

const checkConfirmPw = (passContainer, confirmpassContainer, errContainer) => {
  if (passContainer.value !== confirmpassContainer.value) {
    displayErr(errContainer, 'Passwords do not match');
  } else if (confirmpassContainer.validity.valueMissing) {
    displayErr(errContainer, 'Please confirm your password');
  } else {
    displayErr(errContainer, '');
    return true;
  }
};

const checkGender = () => { // /this function to returns radio button input 'gender'
  if (document.getElementById('male').checked) {
    const checked = document.getElementById('male');
    gender = checked.value;
  } else if (document.getElementById('female').checked) {
    const checked = document.getElementById('female');
    gender = checked.value;
  }
};
