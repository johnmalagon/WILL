/* deberas escribir una funcion que, a partir de un objeto que representa una persona, retorne un mensaje de bienvenida a la misma. 
Si el objeto tiene las propiedades nombre, apellido e invitado(en true) debe retornar"Nombre Apellido, 
un gusto tenerlo nuevamente! Bienvenido" Si el objeto tiene las propiedades invitado(en true) y aplellido 
debe retornar "Bienvennido Sr. Apellido".
 Si el objeto tiene las propiedades invitado(en true) y nombre debe retornar "Hola Nombre, tu mesa esta lista". 
 en caso de que la propiedad invitado sea false o no la tenga, debe retornar "Disculpe señor, no esta invitado a la fiesta".
 * Completa la función 'bienvenidoSr' a continuación.
 *
 * La función debe retornar un STRING.
 * La función recibe como parámetro un OBJETO 'persona'.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function mensajeBienvenida(persona) {
  if (persona.invitado === true && persona.nombre && persona.apellido) {
    return `${persona.nombre} ${persona.apellido}, un gusto tenerlo nuevamente! Bienvenido`;
  } else if (persona.invitado === true && persona.apellido) {
    return `Bienvenido Sr. ${persona.apellido}`;
  } else if (persona.invitado === true && persona.nombre) {
    return `Hola ${persona.nombre}, tu mesa está lista`;
  } else {
    return "Disculpe señor, no está invitado a la fiesta";
  }
}