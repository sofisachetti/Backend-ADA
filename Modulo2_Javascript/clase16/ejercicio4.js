let listaDeSupermercado = [
    'Bife de chorizo',
    'Coca Cola',
    'Bananas',
    'Lechuga',
    'Chimichurri',
    'Lata de tomates',
    'Arvejas',
    'Cereales',
    'Pechuga de pollo',
    'Leche'
];

// Mostrar cada ítem de esa lista por consola utilizando un foreach.
listaDeSupermercado.forEach((item, index) => {
    console.log(index, item);
});

//Agrega el artículo 'Papas' al final de la lista utilizando el método push.
listaDeSupermercado.push('Papas');

// Elimina el primer artículo de la lista utilizando el método shift.
listaDeSupermercado.shift();

// Utiliza el método forEach para recorrer el arreglo listaDeSuperMercado y mostrar cada ítem por consola
listaDeSupermercado.forEach((item, index) => {
    console.log(item);
});

// Busca la posición del artículo 'Cereales' utilizando el método lastIndexOf y muestra su posición en la lista (considerando que los índices comienzan desde 1 en la lista mostrada al usuario), o indica que no se encontró si no está presente.
let cereales = listaDeSupermercado.lastIndexOf('Cereales');
if (cereales > 0) {
    console.log('Cereales está en la lista en la posicion: ', cereales);
} else {
    console.log('Cereales no se encuentra en la lista.');
};