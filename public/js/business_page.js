/* global document */
const getElement = id => document.getElementById(id);

const reviewsButton = getElement('reviews-button');
const aboutButton = getElement('about-button');
const reviewsDiv = getElement('reviews-div');
const aboutDiv = getElement('about-div');
const reviewInput = require('review-input');
const rateInput = require('rate-input');

aboutDiv.style.display = 'none';

reviewsButton.addEventListener('click', () => {
  reviewsDiv.style.display = 'block';
  aboutDiv.style.display = 'none';
});

aboutButton.addEventListener('click', () => {
  aboutDiv.style.display = 'block';
  reviewsDiv.style.display = 'none';
});

sendBtn.addEventListener('click', () => {
  const object = { reviewInput: reviewInput.value, rateInput: rateInput.value };

  fetch('/reviews', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(object),
  })
    .then(response => response.json())
    .then((response) => {
      console.log('Pass');
    })
    .catch((error) => { messageError.textContent = error; });
});
