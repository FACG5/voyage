const search = document.getElementById('search');
const list = document.getElementById('data');

search.addEventListener('input', () => {
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
    .catch(error => (`error  : ${error}`));
});
