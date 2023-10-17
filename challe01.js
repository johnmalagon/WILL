

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*escribe una funcion llamada "mayorPar" 
que reciba como parametro un arreglo de numeros enteros. 
La funcion debe identificar si es par o impar. 
Si el numero mayor es par, la funcion debe devolver booleano; 
en caso contrario, si el numero mayor en impar, 
la funcion debe devolver un arreglo con el numero mayor 
y el valor booleano. truefalse la fuincion mayorPar 
debe retornar un arreglo con dos elementos: un mumero y un booleano. 
numbers: arreglo de numeros enteres.
 * Completa la función 'mayorPar' a continuación.
 *
 * Debe retornar un ARREGLO.
 * Recibe un ARREGLO DE NÚMEROS como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function mayorPar(numbers) {
    // tu código aquí
let mayor = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > mayor) {
      mayor = numbers[i];
    }
  }

  if (mayor % 2 === 0) {
    return [mayor, true];
  } else {
    return [mayor, false];
  }

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const funcToString = mayorPar.toString()
    const numbersCount = parseInt(readLine().trim(), 10);

    let numbers = [];

    for (let i = 0; i < numbersCount; i++) {
        const numbersItem = parseInt(readLine().trim(), 10);
        numbers.push(numbersItem);
    }

    let result;
    
    if (funcToString.includes("Math.max(")){
        result = ["No puedes usar Math.max() para este ejercicio"];
    } else result = mayorPar(numbers);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
