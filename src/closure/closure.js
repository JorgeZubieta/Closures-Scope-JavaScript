// Closure - example moneybox
const moneyBox = (coins) => {
	var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(3) // 3
moneyBox(4) // 7
moneyBox(7) // 14


// Closure - example MoneyBox con una estructura de Closure
const moneyBox = () => {
	var saveCoins = 0;
    
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}

// Aca acumulamos los valores
let mymoneyBox = moneyBox();
mymoneyBox(10); // 10
mymoneyBox(10);// 20
mymoneyBox(10); // 30

