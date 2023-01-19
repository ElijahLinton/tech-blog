/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value;
  const password = document.querySelector('#password-login').value;

  const response = await fetch('/api/user/login', {
    method: 'post',
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
    headers: {'Content-Type': 'application/json'},
  })
    .then(function() {
      document.location.replace('/dashboard');
    })
    .catch((err) => console.log(err));

  switch (response.ok) {
  case 1:
    document.location.replace('/dashboard');
    break;

  default:
    console.log(err);
  }
}

document.querySelector('#login-button')
  .addEventListener('submit', loginFormHandler);
