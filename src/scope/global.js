// var variable que podremos acceder todo el tiempo ya que esta asignada de forma global
var hello = 'Hello var';
var hello = 'Hello var +';

// con LET y CONST no podremos reasignar el valor de la primera, aca se produce un error de valor ya asignado
let world = 'hello let';
let world = 'Hello let2';
// la segunda const produce un error porque no se puede reasignar otro valor
const helloWorld = 'Hello const';
const helloWorld = 'Hello contt2';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFunction();

// Tipico error al declarar una varaibel lo cual es una "Mala practica"!
const helloWorld = () => {
    globalVar = 'Im Global 1';
}
helloWorld();
console.log(globalVar);

// Error de doble asignacion mala practica
const anotherFunction = () => {
    var localVar = globalVar = 'Im Global 2';
}
anotherFunction()
console.log(globalVar);