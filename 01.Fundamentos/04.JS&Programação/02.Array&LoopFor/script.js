// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// 
// for(let name of names){
    // console.log(name)
// }

// 1.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let num of numbers){
    // console.log(num);
}
// 2.
for(let num of numbers){
    num++;
    // console.log(num);
}
// 3.
let total = 0;
for(let num of numbers){
    total += num;
}
// console.log(total/numbers.length)

// 4.
for(let num of numbers){
    total += num;
}
let resultado = total/numbers.length;
if(resultado > 20){
    // console.log("Valor maior que 20.")
} else{
    // console.log("Valor menor ou igual a 20.")
}

// 5.
let maiorNum = null;
for(let num of numbers){
    if(maiorNum < num){
        maiorNum = num;
    }
}
// console.log(maiorNum);

// 6.
let contImpares = 0;
for(let num of numbers){
    if((num % 2) == 0){
        contImpares += 1;
    }
}
if(contImpares > 0){
    // console.log ("O Array tem: " + contImpares + " números impares.");
} else {
    // console.log("Nenhum valor impar encontrado;")
}

// 7.
let menorNum = numbers[0];
for(let num of numbers){
    if(menorNum > num){
        menorNum = num;
    }
}
// console.log(menorNum);

// 8.
let array = [];
for(let index = 0; index <= 25; index +=1){
    array[index] = index; 
    
}
// console.log(array);

// 9.
let newArray = [];
for(let index = 0; index <= 25; index +=1){
     newArray[index] = array[index]/2;
    
}
// console.log(newArray);

// 10.
