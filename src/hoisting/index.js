// Ejemplo 1 de elevacion
a = 2;
var a;
console.log(a); //Output = 2!

// El hoisting eleva las asignaciones
var a;
a = 2;
console.log(a); //2
// esto pasa en el momento en que se compila nuestro codigo antes de ser interpretado en el navegador

// Ejemplo 2 de elevacion y no siempre establecido como en el ej anterior
console.log(a);
var a = 2; //Output = undefined

// que es lo que sucede en el momento de la compilacion?

// var a; se eleva la asignacion sin un valor definido (undefined)
console.log(a); //se muestra el valor = undefined
var a = 2; //se asigna el valor 2 a la var a, lo cual ya es tarde!


// Ejemplo 3 con una fucnion
function nameOfCat (name){
    console.log(name);
}
nameOfCat("fufi"); //fufi

// o mismo resultado con el llamado de la funcion antes de la funcion!


nameOfCat("fufi"); //fufi
function nameOfCat (name){
    console.log(name);
}
// Hoisting dentro de una funcion
// El motor que compila JS antes de ser interprtado, de la siguiente manera en resumen
// 	1. se carga todo en memoria (asignciones, funciones, etc) a memoria
// 	2. Se ajustan con el hoisting (ejemplo lee primero al funcion y despues ejecuta el llamado a la funcion
// 	Nota es por eso que no importa donde este declarado el llamado de una funcion!
