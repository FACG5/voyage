/* global document window */
const catResult = document.querySelector('.cat-result');
const catName = document.querySelector('.cat-name');

catResult.addEventListener('click', (e) => {
  const name = e.target.id;
  window.location = `/business?name=${name}`;
});

catName.addEventListener('click', (e) => {
  const name = e.target.id;
  window.location = `/business?name=${name}`;
});
