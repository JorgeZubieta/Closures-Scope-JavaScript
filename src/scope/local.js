// Ejemplo var local
const helloWorld = () => {
    const hello = "Hola hijito mio te amo!"; 
    console.log(hello);
};
helloWorld();
// aca la variable no se reconoce ya que solo funcion de manera local
console.log(hello);


// Ejemplo ambito lexico > donde el valor global no es pisado por el valor local
var scope = "I am Global";

const funtionScope = () => {
    // variable que vive solo dentro de la funcion
    var scope = "i am Local";

    // funcion que encapsula el valor de scope en func!
    const func = () => {
        return scope;
    }

    // mostramos por consola el valor de func
    console.log(func());
};


