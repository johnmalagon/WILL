/*una empresa de tecnologia necesita contratar nuevos empleados, y tiene como requisito que todos los contratados sepan ingles. 
Tu trabajo sera escribir una funcion que, a partir de un listado de candidatos, seleccione a los que tienen idiama ingles 
como propiedad y retorne sus numeros de telefono. instrucciones: La funcion entrevistar recibe un parametro 
llamado candidatos, que es un arreglo de objetos donde cada objeto representa un candidato al trabajo. 
Dentro de la funcion, se debe realizar lo siguiente si no encuentra ningun empleado que en la propiedad 
idioma tenga valor "Ingles", se debe retornar el string "No hay empleados con ese requisito". en caso contrario, 
retornar un arreglo que contenga los números de telefono de tosos los candidatos que tengan idioma ingles.
 * Completa la funcion entrevistar.
 *
 * Se espera que la función devuelva un STRING_ARRAY.
 * La función acepta STRING_ARRAY empleado como parámetro.
 */

function entrevistar(candidatos) {
  const telefonos = [];

  for (let candidato of candidatos) {
    if (candidato.idioma === "Ingles") {
      telefonos.push(candidato.telefono);
    }
  }

  if (telefonos.length === 0) {
    return "No hay empleados con ese requisito";
  } else {
    return telefonos;
  }
}