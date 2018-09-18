/* global document window */
const catResult = document.querySelector('.rgba');

catResult.addEventListener('click', (e) => {
  const name = e.target.id;
  window.location = `/business?name=${name}`;
});
