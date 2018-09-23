/* global document window */
const catResult = document.querySelector('.cat-result');
const catName = document.querySelector('#cat-name');

document.querySelectorAll('.cat-data').forEach((element) => {
  const evaluation = element.querySelector('#avg');
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

catResult.addEventListener('click', (e) => {
  const name = e.target.className;
  window.location = `/business?name=${name}`;
});

catName.addEventListener('click', (e) => {
  const name = e.target.className;
  window.location = `/business?name=${name}`;
});
