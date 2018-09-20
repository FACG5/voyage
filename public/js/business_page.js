/* global document */
const getElement = id => document.getElementById(id);

const reviewsButton = document.getElementById('reviews-button');
const aboutButton = document.getElementById('about-button');
const reviewsDiv = document.getElementById('reviews');
const aboutDiv = document.getElementById('about-div');

aboutDiv.style.display = 'none';

reviewsButton.addEventListener('click', () => {
  reviewsDiv.style.display = 'block';
  aboutDiv.style.display = 'none';
  reviewsButton.classList.add('tap');
  aboutButton.classList.remove('tap');
});

aboutButton.addEventListener('click', () => {
  aboutDiv.style.display = 'block';
  reviewsDiv.style.display = 'none';
  aboutButton.classList.add('tap');
  reviewsButton.classList.remove('tap');
});


document.querySelectorAll('.result').forEach((element) => {
  const evaluation = element.querySelector('#evaluation');
  const oneStar = element.querySelector('#one-star');
  const twoStar = element.querySelector('#two-star');
  const threeStar = element.querySelector('#three-star');
  const fourStar = element.querySelector('#four-star');
  const fiveStar = element.querySelector('#five-star');

  if (evaluation.textContent >= 1) {
    oneStar.classList.add('checked');
    if (evaluation.textContent >= 2) {
      twoStar.classList.add('checked');
      if (evaluation.textContent >= 3) {
        threeStar.classList.add('checked');
        if (evaluation.textContent >= 4) {
          fourStar.classList.add('checked');
          if (evaluation.textContent >= 5) {
            fiveStar.classList.add('checked');
          }
        }
      }
    }
  }
});

const avarage = getElement('avarage');
const oneStar = getElement('one-star');
const twoStar = getElement('two-star');
const threeStar = getElement('three-star');
const fourStar = getElement('four-star');
const fiveStar = getElement('five-star');

if (avarage.textContent >= 1) {
  oneStar.classList.add('checked');
  if (avarage.textContent >= 2) {
    twoStar.classList.add('checked');
    if (avarage.textContent >= 3) {
      threeStar.classList.add('checked');
      if (avarage.textContent >= 4) {
        fourStar.classList.add('checked');
        if (avarage.textContent >= 5) {
          fiveStar.classList.add('checked');
        }
      }
    }
  }
}