// apiScript.js
const API_URL = `https://api.coincap.io/v2/assets`;

const fetchJoke = () => {

  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      console.log(data['data']);
      const array = [];
      for (let index = 0; index < 15; index += 1) {
        array.push(data['data'][index]);
      }
      let html = '<table border = "1|1">';
        for (let index = 0; index < array.length; index += 1) {
          html += '<tr>';
          html += `<td> id: ${array[index].id} </tb>`;
          html += `<td> rank: ${array[index].rank} </tb>`;
          html += `<td> priceUsd: ${array[index].priceUsd} </tb>`;
          html += '</tr>';
        }
        document.getElementById('table').innerHTML = html;
        console.table(array);
    });
};

window.onload = () => fetchJoke();
