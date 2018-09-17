const catResult = document.querySelector('.catResult');

catResult.addEventListener('click', (e) => {
  const name = e.target.id;
  window.location = `/business?name=${name}`;
});
