/*imagina que tienes acceso a un listado de estudiantes de Henry y quieres filtrar la informacion para 
quedarte solo con los datos de los que obtuvieron buenas calificaciones.
 cada estudiante tiene registradas dos notas, una por cada examen presentado (check1 y check2).
  Teniendo en cuenta que cada examen tenia un criterio de aprobacion distinto, la calificacion minima para aprobar 
  cada uno sera distinta y lo que tu quieres es quedarte solamente con aquellas personas que hayn aprobado ambos examenes. 
  Para lograr este fin, escribe una funcion que reciba un listado de alumnos y dos notas por parametro, 
  y retorne los nombres de los alumnos que, en su primer examen, obtuvieron una calificacion igual o mayor a la primera nota,
   y en el segundo examen una igual o mayor a la segunda nota. en java scrit
 * Completa la función 'obtenerSoloLosMejores' a continuación.
 *
 * La función debe retornar un ARREGLO DE STRINGS.
 * La función recibe un ARREGLO DE OBJETOS 'estudiantes', un ENTERO 'nota1' ,y un ENTERO 'nota2' como parámetros.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function obtenerSoloLosMejores(estudiantes, nota1, nota2) {
  const mejoresEstudiantes = estudiantes.filter((estudiante) => {
    return estudiante.check1 >= nota1 && estudiante.check2 >= nota2;
  });

  return mejoresEstudiantes.map((estudiante) => {
    return estudiante.nombre + " " + estudiante.apellido;
  });
}