const sum = () => {
    
    try {
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      if (isNaN(parseInt(value1)) || isNaN(parseInt(value2))) {
        throw new Error ('Valores inválidos');
      }
      const result = parseInt(value1) + parseInt(value2);
      document.getElementById('result').innerHTML = `Resultado: ${result}`;
       
    } catch (error) {
      document.getElementById('result').innerHTML = error.message;
    } finally {
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
    }
}
window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}

const num = parseInt('1');
console.log(num)