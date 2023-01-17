/* eslint-disable linebreak-style */
const logout = async () => {
  fetch('api/user/logout', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
  }).then(function() {
    document.location.replace('/');
  })
    .catch((err) => console.log(err));
};

document.querySelector('#logout-button').addEventListener('click', logout);
