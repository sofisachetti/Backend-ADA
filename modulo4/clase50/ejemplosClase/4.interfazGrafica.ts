// Actualizacion de una interfaz grafica
function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    console.log(`${horas}:${minutos}:${segundos}`);
}

let relojIntervalo = setInterval(actualizarReloj, 1000);