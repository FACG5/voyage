
const email = document.getElementById('email');
const password = document.getElementById('password');
const but = document.getElementById('butSend');
const error = document.getElementById('error');


but.addEventListener('click', () => {
    const object = { email:email.value,
                     password : password.value
                    };

    fetch('/sign_in', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        body: JSON.stringify(object),
    })
    .then(response => response.json())
    .then(response => {
        if(response.res === "pass"){
            window.location = '/';
        }
        error.textContent = response.err;
    })
    .catch(error => console.log(error));
});





