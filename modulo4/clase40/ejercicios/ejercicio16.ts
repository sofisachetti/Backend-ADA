// Ejercicio 16: Uso de enum para categorías de productos
// 1. Declara un enum llamado CategoriaProducto con los valores: Electrónica,
// Ropa, Alimentos, Muebles.
// 2. Crea una función que reciba un valor del enum y devuelva un mensaje sobre qué tipo de productos incluye esa categoría.
// 3. Llama a la función con el valor Alimentos y muestra el resultado por consola.

enum CategoriaProducto {
    Electrónica,
    Ropa,
    Alimentos,
    Muebles
}

function productos(categoria: CategoriaProducto): string {
    if (categoria === CategoriaProducto.Electrónica) {
        return `Productos: microondas, heladera, lavarropas`;
    } else if (categoria === CategoriaProducto.Ropa) {
        return `Productos: remera, pantalon, zapatos`;
    } else if (categoria === CategoriaProducto.Alimentos) {
        return `Productos: arroz, pochoclos, manzana`;
    } else {
        return `Productos: mesa, silla, repisa`;
    }
}

console.log(productos(CategoriaProducto.Alimentos));