/* global document */
const getElement = id => document.getElementById(id);

const reviewsButton = getElement('reviews-button');
const aboutButton = getElement('about-button');
const reviewsDiv = getElement('reviews-div');
const aboutDiv = getElement('about-div');
const sendButton = getElement('send-button');
const textReview = getElement('text-review');
const evaluation = getElement('evaluation');

const currentData = getElement('current-data');

const nameBusiness = document.getElementsByTagName('title');

aboutDiv.style.display = 'none';

reviewsButton.addEventListener('click', () => {
  reviewsDiv.style.display = 'block';
  aboutDiv.style.display = 'none';
});

aboutButton.addEventListener('click', () => {
  aboutDiv.style.display = 'block';
  reviewsDiv.style.display = 'none';
});

sendButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (textReview.value === '' || evaluation.value === '') {
    alert('file the filed');
  }
  const object = {
    text: textReview.value,
    evaluation: evaluation.value,
    nameBusiness: nameBusiness[0].textContent,
  };

  fetch('/business', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(object),
  })
    .then(response => response.json())
    .then((response) => {
      textReview.value = '';
      evaluation.value = '';
      create('a', response.username);
      create('p', object.text);
      create('p', `${object.evaluation.toString()}/5`);
      const hr = document.createElement('hr');
      currentData.appendChild(hr);
    })
    .catch((error) => { alert(error); });
});

const create = (element, value) => {
  const elementNew = document.createElement(element);
  elementNew.textContent = value;
  currentData.appendChild(elementNew);
};
