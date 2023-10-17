/*el constructor recibe como parametro 
nombre: string, 
edad: entero, 
curso: arreglo de strings, 
certificados: arreglo de objetos, 
donde cada objeto tiene propiedades nombre(string) 
y entidad(string) años(entero).
 el metodo getCursos retorna un arreglo de string. 
 el metodo getCursono recibe parametros. 
 el medoto addCurso no retorna nada. 
 el metodo addCurso recibe por parametro curso:string. 
 el metodo countCertificados no recibe parametros. 
 el metodo addCertificados recibe por parametro:
  nombre:string, entidad:string, año: entero. 
  Para este ejercicio deberas definir una clase Profesor con sus 
  propiedades y metodos. las propiedades de la clase Profesor son: 
  nombre, edad, cursos, certificados. 
  El construtor de la clase recibe esos cuatro datos por parametro en
   eses mismo orden. los metodos propios de la clase Profesor son: 
   getCursos: retorna todos los cursos del profesor. 
   getCurso: permite agregar un nuevo elemento al arreglo de cursos. 
   countCertificados: retorna la cantidad de certificados del profesor.
    addCertificados: permite agregar un nuevo elemento al arreglo de certificados.

 * Completa la clase 'Profesor' a continuación.
 *
 * No modifiques nada por fuera del cuerpo de los métodos.
 */

class Profesor {
  constructor(nombre, edad, cursos, certificados) {
    this.nombre = nombre;
    this.edad = edad;
    this.cursos = cursos;
    this.certificados = certificados;
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso) {
    this.cursos.push(curso);
  }

  countCertificados() {
    return this.certificados.length;
  }

  addCertificado(nombre, entidad, año) {
    this.certificados.push({ nombre, entidad, año });
  }
}