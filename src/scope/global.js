// var variable que podremos acceder todo el tiempo ya que esta asignada de forma global
var hello = 'Hello var';
var hello = 'Hello var +';
// la segunda var pisa el valor de la primera

let world = 'hello let';
let world = 'Hello let2';

const helloWorld = 'Hello const';
// const helloWorld = 'Hello contt2';
// la segunda const produce un error porque no se puede reasignar otro valor
const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFunction();

// Tipico error al declarar una varaibel lo cual es una "Mala practica"!
const helloWorld = () => {
    globalVar = 'Im Global';
}
helloWorld();
console.log(globalVar);

// Error de doble asignacion mala practica
const anotherFunction = () => {
    var localVar = globalVar = 'Im Super basket ball dancer';
}
anotherFunction()
console.log(globalVar);