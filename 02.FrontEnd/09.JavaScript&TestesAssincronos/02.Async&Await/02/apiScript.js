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
      // const array = [];
      // for (let index = 0; index < 15; index += 1) {
      //   array.push(data['data'][index]);
      // }
      const array = data.data.filter(element => element.rank <= 15); // Ideia do marcos
      let html = '<table border = "1|1">';
      html += '<tr>';
      html += `<td> id </tb>`;
      html += `<td> rank </tb>`;
      html += `<td> priceUsd </tb>`;
      html += '</tr>';
      array.forEach((element) => {
        html += '<tr>';
        html += `<td> ${element.id} </tb>`;
        html += `<td> ${element.rank} </tb>`;
        html += `<td> ${element.priceUsd} </tb>`;
        html += '</tr>';
      });
      console.log(html)
      document.getElementById('table').innerHTML = html;
      console.table(array);
    });
};

window.onload = () => fetchJoke();
