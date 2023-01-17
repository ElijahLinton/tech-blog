/* eslint-disable linebreak-style */

const {response} = require('express');

// eslint-disable-next-line require-jsdoc
async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const feed = document.querySelector('textarea[name="post-body').value;

  await fetch('api/post', {
    method: 'POST',
    body: JSON.stringify({
      title,
      feed,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  switch (response.ok) {
  case 1:
    document.location.replace('/dashboard');
    break;
  default:
    alert(response.statusText);
  }
}

document.querySelector('.new-feed-form')
  .addEventListener('submit', newFormHandler);
