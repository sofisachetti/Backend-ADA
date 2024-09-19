let productos = [
    { nombre: "Alfajores", precio: 30 },
    { nombre: "Chocolates", precio: 50 },
    { nombre: "Chupetines", precio: 70 },
    { nombre: "Caramelos", precio: 20 },
    { nombre: "Bombones", precio: 20 },
];

function gestionarProductos(productos) {
    //agregar un producto
    let nuevoProducto = { nombre: "Gomitas", precio: 15 };
    productos.push(nuevoProducto);
    
    // eliminar un prod
    productos.pop()
    
    //encontar el indice de un prod.
    let productoBuscado = "Bombones";
    let indiceProductoBuscado = productos.findIndex(producto => producto.nombre === productoBuscado);
    /*otra forma de hacer la busqueda usando forEach() es:
    productos.forEach((producto, index) =>{
        if (producto.nombre === productoBuscado) {
        indiceProductoBuscado = index;
        }
        });*/

    //buscar precio mayor a 50
    let mayorA50 = productos.map(productos => productos.precio > 50);

    //devovler cadena de nombres separadas por comas
    let nombresProductos = productos.map(producto => producto.nombre).join(", ");

    return {
        productos,
        indiceProductoBuscado,
        mayorA50,
        nombresProductos,
    }
}
let resultado = gestionarProductos(productos);
console.log(resultado);
