/* eslint-disable linebreak-style */
const signupFormHandler = (event) => {
  event.preventDefault();

  const myEmail = document.querySelector('#email-credential');
  const myUsername = document.querySelector('#username-credential');
  const myPassword = document.querySelector('#password-credential');
  fetch('/api/user', {
    method: 'post',
    body: JSON.stringify({
      email: myEmail.value,
      username: myUsername.value,
      password: myPassword.value,
    }),
    headers: {'Content-Type': 'application/json'},
  })
    .then(function() {
      document.location.replace('/dashboard');
    }).catch((err) => console.log(err));
};

document.querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
