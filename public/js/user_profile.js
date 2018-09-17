/* global document */

const reviewsButton = document.getElementById('reviews-button');
const infoButton = document.getElementById('info-button');
const reviewsDiv = document.getElementById('reviews');
const infoDiv = document.getElementById('info');

infoDiv.style.display = 'none';

reviewsButton.addEventListener('click', () => {
  reviewsDiv.style.display = 'block';
  infoDiv.style.display = 'none';
});

infoButton.addEventListener('click', () => {
  infoDiv.style.display = 'block';
  reviewsDiv.style.display = 'none';
});
