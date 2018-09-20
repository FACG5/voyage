/* global document fetch */

const sendButton = getElement('send-button');
const textReview = getElement('text-review');
const currentData = getElement('current-data');
const nameBusiness = getElement('name-business');

const stars = document.querySelectorAll('#stars li');
let evaluation = 0;

const zeroStar = () => {
  stars.forEach(item => item.style.color = '#fff');
};

const setStar = (num) => {
  zeroStar();
  for (let i = 0; i <= num; i++) {
    stars[i].style.color = '#FFE603';
  }
  evaluation = num + 1;
};

stars[0].addEventListener('click', () => {
  setStar(0);
});

stars[1].addEventListener('click', () => {
  setStar(1);
});

stars[2].addEventListener('click', () => {
  setStar(2);
});

stars[3].addEventListener('click', () => {
  setStar(3);
});

stars[4].addEventListener('click', () => {
  setStar(4);
});

sendButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (textReview.value === '' || evaluation.value === '') {
    alert('file the filed');
  } else{
    const object = {
      text: textReview.value,
      evaluation,
      nameBusiness: nameBusiness.textContent,
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
        zeroStar();
        const firstElement = currentData.firstElementChild;
        const div = document.createElement('div');
        currentData.insertBefore(div, firstElement);
        const divResult = create('div', null, div, null, 'result', null);
        create('p', null, divResult, object.text, 'evaluation-content', null);
        const divRiviw = create('div', null, divResult, null, 'review-footer', null);
        const h3 = create('h3', null, divRiviw, null, 'user', null);
        create('a', null, h3, `by : ${response.username}`, null, null);
        const evaluation = create('p', 'evaluation', divRiviw, object.evaluation, null, null);
        evaluation.style.display = 'none';
        const ul = create('ul', null, divRiviw, null, 'stars', null);
        const oneStar = create('li', 'one-star', ul, null, 'fa', 'fa-star');
        const twoStar = create('li', 'two-star', ul, null, 'fa', 'fa-star');
        const threeStar = create('li', 'three-star', ul, null, 'fa', 'fa-star');
        const fourStar = create('li', 'four-star', ul, null, 'fa', 'fa-star');
        const fiveStar = create('li', 'five-star', ul, null, 'fa', 'fa-star');

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
      })
      .catch((error) => { alert(error); });
  }
});

const create = (element, id, elementPerent, value, classname, classnameSec) => {
  const elementNew = document.createElement(element);
  elementNew.setAttribute('id', id);
  elementNew.textContent = value;
  elementNew.classList.add(classname);
  elementNew.classList.add(classnameSec);
  elementPerent.appendChild(elementNew);
  return elementNew;
};
