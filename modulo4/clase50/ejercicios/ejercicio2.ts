// 2. Florería: Envío Programado de Pedidos
// Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe
// contener el nombre del cliente, la cantidad de flores y el tipo de flores.
// Implementa las siguientes funciones:
// • Añadir un pedido.
// • Programar el envío de un pedido utilizando setTimeout() para simular un
// retraso de 5 segundos.
// • Mostrar todos los pedidos pendientes.

let orders: [string, number, string][] = [];

function newOrder(clientName: string, quantityFlowers: number, typeFlower: string) {
    orders.push([clientName, quantityFlowers, typeFlower]);
    console.log(`El pedido de ${clientName} ha sido agregado con exito.`);
}



