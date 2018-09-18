/* global document */

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
