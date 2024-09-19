let vehiculo = "autobus";
let litrosConsumidos = 30;
let total = 0

if (litrosConsumidos <= 25) {
    total = 50;
} else {
    total = 25;
}

switch (vehiculo) {
    case "coche":
        total = total + litrosConsumidos * 86;
        console.log(`El total a pagar es: ${total}`);
        break;
    case "moto":
        total = total + litrosConsumidos * 70;
        console.log(`El total a pagar es: ${total}`);
        break;
    case "autobus":
        total = total + litrosConsumidos * 55;
        console.log(`El total a pagar es: ${total}`);
break;
}