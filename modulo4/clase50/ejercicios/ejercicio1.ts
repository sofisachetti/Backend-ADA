// 1. Mueblería: Actualización de Precios
// En una mueblería, se requiere un sistema que permita actualizar los precios de
// los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y
// un identificador único. Implementa las siguientes funciones:
// • Añadir un nuevo mueble.
// • Actualizar el precio de un mueble después de 3 segundos utilizando setTimeout().
// • Mostrar el inventario de muebles. 

let muebles: [string, number, number][] = [];

function agregarMueble(nombre: string, precio: number, id: number) {
    muebles.push([nombre, precio, id])
    console.log(`Mueble: ${nombre} agregado con exito.`);
}

function actualizarPrecio(indice:number, precio:number){
    if(muebles[indice]){
        setTimeout(()=>{
            muebles[indice][1] = precio;
            console.log(`Se actualizo el precio de ${muebles[indice][0]}`);  
        }, 3000)
    }else{
        console.log(`No hay mueble con el indice proporcionado.`);
    }
}

function mostrarInventario() {
    muebles.forEach(mueble => {
        console.log(`Mueble: ${mueble[0]}, Precio: ${mueble[1]}, ID: ${mueble[2]}`);
    })
}


console.log('Agrego mueble');
agregarMueble("sillon", 100, 1)
agregarMueble("cama", 200, 2)


actualizarPrecio(0, 3000)

console.log('---------');
mostrarInventario();