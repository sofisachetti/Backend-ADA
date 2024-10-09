// Serciones
// Permiten decirle al compilador que tipo de datos debe asumir cuando no le puede inferir automaticamente, o cuando queremos especificar un tipo mas preciso.

// Ejemplo1: Asercion basica de tipo "any" a "string"
let valorGenerico: any = "TypeScript es buenisimo";
// Queremos acceder a la longitud del string pero dado que es any, typescript no nos permite directamente acceder a propiedades especificas de los strings. Por lo tanto usamos asercion de tipo para decirle al compilador que esta variable es realmente una string en este contexto.
let longitudString: number = (valorGenerico as string).length;

console.log(`La longitud del string es: ${longitudString}`);


console.log('--------------------------------------');

// Ejemplo 2: Asercion de tipos de union
// Imaginemos que tenemos una funcion que puede recibir un numbre o valor nulo
function obtenerNombreEnMayusculas(nombre: string | null): string {
    //el compilador no sabe si nombre es un string o si es null, por lo tanto debemos hacer una verificacion.
    if (nombre) {
        // aqui, usando la asercion le decimos a ts que asuma que nombre es un string
        return (nombre as string).toUpperCase()
    } else {
        // si nombre es null retorna un mensaje
        return "Nombre no proporcionado"
    }
}

// Pruebas con distintos valores
console.log(obtenerNombreEnMayusculas("Sofi"));
console.log(obtenerNombreEnMayusculas(null));

console.log('--------------------------------------');

// Ej 3: uso de aserciones con unknown
// El tipo unknown es similar a any, pero es mas seguro. Debemos asegurarnos del tipo antes de usarlo.

let valorDesconocido: unknown = 'Este es un valor desconocido';

//No podemos acceder directamente a las propiedades de valorDesconocido porque ts no sabe su tipo. Por so usamos aserciones de tipo (una vez que verificamos el tipo)
if (typeof valorDesconocido === "string") {
    let longitud: number = (valorDesconocido as string).length;
    console.log(`La longitud del string desconocido es: ${longitud}`);
}

// ======== Ejemplo 4: Aserciones dobles (para convertir tipos incompatibles) ========
// A veces, podemos necesitar hacer una aserción "doble", especialmente cuando estamos tratando con
// conversiones entre tipos que no están directamente relacionados.
let valor: any = "Este es un valor";
// Si por alguna razón necesitamos tratar 'valor' como un número, primero lo podemos asertar como 'unknown',
// y luego convertirlo a 'number'. Esta práctica debe hacerse con precaución.
let valorNumerico = (valor as unknown as number);