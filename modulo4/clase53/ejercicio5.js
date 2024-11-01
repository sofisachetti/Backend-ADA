// 2. Ejercicio de setInterval - Temporizador Descendente
// Crea una función countdown que reciba un número de segundos y que use 
// setInterval para contar de manera descendente, imprimiendo el tiempo 
// restante en la consola cada segundo. 
// Cuando el tiempo llegue a 0, la función debe detener el temporizador 
// usando clearInterval y mostrar "¡Tiempo agotado!".

function countdown(tiempo) {
    let contador = tiempo;
    console.log(`Temporizador de ${tiempo} segundos.`);

    const intervalo = setInterval(() => {
        contador--
        console.log(`Quedan ${contador} segundos.`);
        
        if (contador === 0) {
            clearInterval(intervalo);
            console.log("¡Tiempo agotado!");
        }
    }, 1000)
}

countdown(10)