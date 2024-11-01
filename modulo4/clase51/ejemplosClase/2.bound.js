// Simulacion de una operacion CPU-bound
function operacionCpuBound() {
    let resultado = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
        resultado += i;
    }
    return resultado;
}

// Simulacion I/O bound
function operacionIO() {
    console.log('Simulando lectura de un archivo...');
    setTimeout(() => {
        console.log('Archivo leido con exito.');
    }, 2000);
}

// Funcion que ejecuta ambas operaciones
function ejecutarOperaciones(){
    console.log('Ejecutando operacion CPU-Bound...');
    const resultadoCpu = operacionCpuBound();
    console.log(`Resultado de la operacion CPU-Bound: ${resultadoCpu}`);
    
    console.log('Ejecuctando operacion I/O Bound...');
    operacionIO();
}

ejecutarOperaciones();