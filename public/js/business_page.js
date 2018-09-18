/* global document */
const getElement = id => document.getElementById(id);

const reviewsButton = getElement('reviews-button');
const aboutButton = getElement('about-button');
const reviewsDiv = getElement('reviews-div');
const aboutDiv = getElement('about-div');

aboutDiv.style.display = 'none';

reviewsButton.addEventListener('click', () => {
  reviewsDiv.style.display = 'block';
  aboutDiv.style.display = 'none';
});

aboutButton.addEventListener('click', () => {
  aboutDiv.style.display = 'block';
  reviewsDiv.style.display = 'none';
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
