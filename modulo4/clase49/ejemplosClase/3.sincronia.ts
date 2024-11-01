function prepararCafe(): void {
    console.log('Preparando cafe...');
    for (let i = 0; i < 5000000; i++) {} // simulacro de una tarea larga
    console.log('Café listo!');
}
function atenderCliente(): void {
    console.log("Tomando pedido del cliente... ");
    prepararCafe();
    console.log("Entregando cafe al cliente");
}
atenderCliente()
atenderCliente()