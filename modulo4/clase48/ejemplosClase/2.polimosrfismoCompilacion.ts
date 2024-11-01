// Firmas de sobrecarga: la funcion procesa dif tipos de datos
function procesarPedido(pedidoId: number): string; //pedido por id
function procesarPedido(cliente: string, producto: string): string; //pedido por detalle de cliente y producto

// Implementacion de la funcion
function procesarPedido(param1: number | string, param2?: string): string {
    if (typeof param1 === "number") {
        return `Procesando pedido con ID: ${param1}.`
    } else if (typeof param1 === "string" && param2) {
        // Caso pedido realizado con nombre del cliente y el producto
        return  `Procesando pedido para ${param1}, producto: ${param2}.`
    } else {
        return 'Algo salió mal.'
    }
}

// Ejemplo de uso
console.log(procesarPedido(123));
console.log(procesarPedido('Sofi', 'Notebook')); 

