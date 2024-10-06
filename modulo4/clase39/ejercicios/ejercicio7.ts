// Ejercicio 7: Función que modifica propiedades de un objeto
// Consigna: Crea una función llamada aumentarSalario que acepte un objeto
// empleado con las propiedades nombre (string) y salario (number), y un número
// que represente el porcentaje de aumento. La función debe aumentar el salario
// del empleado y devolver el nuevo salario. Muestra en la consola el resultado.

let aumentarSalario = function (nombre: string, salario: number, aumento: number) {
    let porcentaje_aumento = salario * aumento / 100;
    let salario_aumentado = salario + porcentaje_aumento;
    const empleado = {
        nombre: nombre,
        salario: salario,
        aumento: aumento,
        salario_aumentado: salario_aumentado
    }
    return empleado;
}
console.log(aumentarSalario("Ana", 10000, 10));