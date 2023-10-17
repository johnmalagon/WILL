/*estas organizando una fiesta y, para asegurare de tener comida para todos los invitados, 
debes conocer sus preferencias alimentarias con anticipacion.
 deberas escribir una funcion que, recibiendo por parametros un objeto que contiene a todos los invitados, 
 retorne un numero indicando cuantos de ellos son veganos. la funcion vegan debe retornar un integer(numero entero). 
 la funcion vegan recibe como parametro: invitados: un objeto, donde cada propiedad representa un invitado.
  aclaraciones en caso de no existir ningun invitado vegano, 
la funcion debe retornar 0 . puedes usar el metodo for ... in .
 * Completa la función 'vegan' a continuación.
 *
 * La función debe retornar un INTEGER.
 * La función recibe un OBJETO como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función
 */

function vegan(invitados) {
  let contadorVeganos = 0;

  for (let invitado in invitados) {
    if (invitados[invitado].preferenciaAlimentaria === "vegano") {
      contadorVeganos++;
    }
  }

  return contadorVeganos;
}