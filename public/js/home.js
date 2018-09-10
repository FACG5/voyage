const search = document.getElementById('search');
const list = document.getElementById('data');

search.addEventListener('input', () => {
  const data = {
    name: search.value,
  };
  console.log(data);
  fetch('/', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header

  })
    .then(response => response.json())
    .then((response) => {
      // console.log(response[0])
      list.textContent = '';
      response.map((item) => {
          const result = document.createElement('option');
          result.textContent = item;
          list.appendChild(result);
          console.log(result);
      });
    })
    .catch(error => return(`error  : ${error}`));
});
