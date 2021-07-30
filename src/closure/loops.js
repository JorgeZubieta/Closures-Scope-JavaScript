//al cambiar la forma de asignacion de declaraciòn de la variaable dentro del FOR y usar LET, no muestra el resultado esperado.
const anotherFunction = () => {
    // VAR imprime 10 veces 10 un resultado que no queremos
    // for (var i = 0; i < 10; i++) {

    // LET imprime el contador de 0 a 9, cumple con la condicion
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log (i);
        }, 1000)
    }
};

anotherFunction(); 