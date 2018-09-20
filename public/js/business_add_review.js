/* global document */

const sendButton = getElement('send-button');
const textReview = getElement('text-review');
const currentData = getElement('current-data');
const nameBusiness = getElement('name-business');

const stars = document.querySelectorAll('.stars li');
let evaluation = 0;

const zeroStar = () => {
  stars.forEach(item => item.style.color = '#FFFFFF');
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
  }
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
      create('a', response.username);
      create('p', object.text);
      create('p', `${evaluation.toString()}/5`);
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
