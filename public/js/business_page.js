/* global document */
const getElement = id => document.getElementById(id);

const reviewsButton = getElement('reviews-button');
const aboutButton = getElement('about-button');
const reviewsDiv = getElement('reviews-div');
const aboutDiv = getElement('about-div');
const sendButton = getElement('send-button');

aboutDiv.style.display = 'none';

reviewsButton.addEventListener('click', () => {
  reviewsDiv.style.display = 'block';
  aboutDiv.style.display = 'none';
});

aboutButton.addEventListener('click', () => {
  aboutDiv.style.display = 'block';
  reviewsDiv.style.display = 'none';
});

sendButton.addEventListener('click',(e)=>{
  e.preventDefault();

});
