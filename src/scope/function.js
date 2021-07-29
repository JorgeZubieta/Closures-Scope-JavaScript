// EJEMPLO1
// Esto arrojara un error ya que "fruit" no estadefinido de manera global
const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}
fruits();
// se volvera a mostrar el contenido apple
console.log(fruits());
// el siguiente console log nod dara error de variable no definida ya que solo su alcance el local dentro de la funcion!
console.log(fruit);

// EJEMPLO2
const anotherFunction = () => {
    // Esto es un scope local
    // con var PODEMOS reasignar el valor de la variable pero puede darnos problemas a futuro
    // con let y const NO podemos reasignarlas
    var x = 1;
    // la siguiente declaracion reescribir el valor de x
    var x = 2;
    let y = 1;
    // con el siguiente let nos dara error
    let y = 2;
    console.log(x);
    console.log(y);
}
anotherFunction();