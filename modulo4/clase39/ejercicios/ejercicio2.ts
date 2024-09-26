// Ejercicio 2: Uso de funciones con parámetros opcionales
// Consigna: Define una función llamada saludar que acepte un parámetro nombre
// de tipo string y otro opcional saludo de tipo string. Si el parámetro saludo no es
// proporcionado, la función debe usar "Hola" por defecto. Retorna el saludo y
// muestra el resultado en la consola.

const saludar = function(nombre: string, saludo: string = 'Hola') {
    console.log(`${saludo}, ${nombre}`);
}

saludar('Berni')
saludar('Berni', 'Buen dia')

// Otra opcion
const saludar1 = function(nombre: string, saludo?: string) : string {
    if (saludo) {
        return`${saludo}, ${nombre}`;
    } 
    return `Hola, ${nombre}`;
}
console.log(saludar1('Berni'))
console.log(saludar1('Berni', 'Buen dia'))