// EJEMPLO 1 - DEBBUGING
var a = 'Hello';

function hello () {
    let b = 'Hello world';
    const c = 'Hello world!!';
    if (true) {
        let d = '¡¡Hello world!!';
        debugger
    }
}

hello();


// EJEMPLO 2 - DEBBUGING
// Closure - example MoneyBox con una estructura de Closure
//se pueden agregar desde la consola del inspector donde queremos realizar la inspeccion de como funciona los sxopes(alcances) 
const moneyBox = () => {
	debugger //se pueden agregar desde la consola del inspector
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger //se pueden agregar desde la consola del inspector
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}

let mymoneyBox = moneyBox();
mymoneyBox(10); 
mymoneyBox(10);
mymoneyBox(10); 