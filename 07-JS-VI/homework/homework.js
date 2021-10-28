// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  return nombre[0].toUpperCase() + nombre.slice(1);

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática 
  //como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  // return 4, 5, cb();
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  /*let resultado = numeros.reduce(function(acumulador, elemento, index){
    acumulador = acumulador + elemento;
    return acumulador;
  })
  cb(resultado)*/
  var suma = 0;
  for (let i = 0; i < numeros.length; i++) {
  suma = suma + numeros[i];
  }  
  cb(suma);

}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(elemento){
    cb(elemento)
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código: map = retorna nuevo arreglo
  //directo let nuevo =  array.map(cb)

 var nuevoArray = array.map(function(el){
return cb(el);

 });

return nuevoArray ;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  /*arrayFiltrado.filter(function(elemento){
    if(elemento[0] === 'a'){
      return elemento
    }
  })
  return arrayFiltrado*/
  var nuevo = [];
  for (let i = 0; i < array.length; i++) {
    if(array[i][0] === 'a'){
     nuevo.push(array[i]);
    }
  }
  return nuevo;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
