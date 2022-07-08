// apiScript.js
const API_URL = `https://icanhazdadjoke.com/`;

const fetchJoke = () => {
  const h2 = document.querySelector('#jokeContainer');

  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => h2.append(data.joke));
};

window.onload = () => fetchJoke();