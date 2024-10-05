import { Producto, CategoriaProductos } from "./producto";

const inventario: Producto[] = [
    new Producto("Arroz", CategoriaProductos.Alimentos, 5000),
];

function agregarProductos(producto: string, categoria: CategoriaProductos, precio: number): void {
    const crearProducto = new Producto(producto, categoria, precio);
    inventario.push(crearProducto);
}

function mostrarPorCategoria(inventario: Producto[]): void {
    inventario.forEach(producto => {
        if (producto.categoria == CategoriaProductos.Alimentos) {
            console.log("Categoria Alimentos:");
            console.log(producto);
        }
    })

    inventario.forEach(producto => {
        if (producto.categoria == CategoriaProductos.Ropa) {
            console.log("Categoria Ropa:");
            console.log(producto);
        }
    })

    inventario.forEach(producto => {
        if (producto.categoria == CategoriaProductos.Electronica) {
            console.log("Categoria Electronica:");
            console.log(producto);
        }
    })
}


agregarProductos("Remera", CategoriaProductos.Ropa, 9500)
agregarProductos("Microondas", CategoriaProductos.Electronica, 25000)

mostrarPorCategoria(inventario)