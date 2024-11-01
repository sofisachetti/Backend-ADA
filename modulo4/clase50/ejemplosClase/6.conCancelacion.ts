// Ejecucion con cancelacion
let temporizador = setTimeout(() => {
    console.log('Este mensaje no se mostrara porque cancelaremos el temporizador.');
}, 2000);

clearTimeout(temporizador) // cancelamos el temporizador antes de los dos segundos