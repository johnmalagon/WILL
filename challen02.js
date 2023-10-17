/* La funcion buscarMinMax debe retornar un string. 
la funcion buscarMinMax recibe como parametro:
 arrNumeros: un arreglo de numeros enteros. 
 deberas escribir una funcion que encuentre los numeros mayor 
 y menor en un array de numeros dado. 
 luego tendras que retornar un string con la siguiente estructura: 
 El numero menor es numero_menor y el mayor es numero_mayor
 * Completa la función 'buscaMinMax' a continuación.
 *
 * La función deberia retornar un STRING.
 * La función recibe como parámetro un ARREGLO DE NÚMEROS.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */


function buscarMinMax(arrNumeros) {
  let menor = arrNumeros[0];
  let mayor = arrNumeros[0];

  for (let i = 1; i < arrNumeros.length; i++) {
    if (arrNumeros[i] < menor) {
      menor = arrNumeros[i];
    }
    if (arrNumeros[i] > mayor) {
      mayor = arrNumeros[i];
    }
  }

  return `El número menor es ${menor} y el mayor es ${mayor}`;
}