
const restaurant = document.getElementById('restaurant');
const park = document.getElementById('park');
const cafe = document.getElementById('cafe');
const search = document.getElementById('search');
const list = document.getElementById('data');

restaurant.addEventListener('click', () => {
  window.location = '/categories/restaurant';
});

park.addEventListener('click', () => {
  window.location = '/categories/park';
});

cafe.addEventListener('click', () => {
  window.location = '/categories/cafe';
});


search.addEventListener('input', (e) => {
  e.preventDefault();
  const data = {
    name: search.value,
  };
  fetch('/', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // credentials are HTTP cookies, TLS client certificates, and authentication entries (for HTTP authentication). [COOKIES] [TLS] [HTTP-AUTH].
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header

  })
    .then(response => response.json())
    .then((response) => {
      list.textContent = '';
      response.map((item) => {
        const result = document.createElement('option');
        result.textContent = item;
        list.appendChild(result);
      });
    })
    .catch(error => (alert(`${error}There is ann Error in searching`)));
});

const href = (window.location.href);
const name = href.split('=')[1];
if (name) {
  window.location = `/business?name=${name}`;
}
