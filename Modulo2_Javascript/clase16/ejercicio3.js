let vueltas = [5, 8, 12, 3, 22];

//Crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.
let totalVueltas = vueltas.reduce((total, numero) => {
    return total + numero;
});
console.log(`En total las vueltas fueron: ${totalVueltas}.`);

// Añadir una vuelta al principio del array
vueltas.unshift(7);
console.log('Al array se le agregó otra vuelta: ', vueltas);

// Eliminar la última vuelta del array y guardala en una variable
let ultimaVuelta = vueltas.pop();
console.log('La última vuelta fue: ', ultimaVuelta);

// Verificar si la vuelta 10 está en el array y agregarla al final si no está presente: Usamos includes para verificar si la vuelta 10 está en el array y push para agregarla al final si no está
if (vueltas.includes(10)) {
    console.log('La vuelta 10 está en el array.');
} else {
    vueltas.push(10)
    console.log("Array modificado(agregamos 10): ", vueltas);
};

// Eliminar la primera vuelta del array
let primeraVuelta = vueltas.shift();
console.log('La primera vuelta del array es: ', primeraVuelta);

// Verificar si la vuelta 15 está en el array y agregarla al principio si no está presente: Usamos includes para verificar si la vuelta 15 está en el array y unshift para agregarla al principio si no está
if (vueltas.includes(15)) {
    console.log('La vuelta 10 está en el array.');
} else {
    vueltas.unshift(15)
    console.log("Array modificado (agregamos 15): ", vueltas);
};

// Calcular el nuevo total de vueltas usando reduce: 
let nuevoTotalVueltas = vueltas.reduce((total, numero) => {
    return total + numero;
});
console.log('El total final de vueltas es de: ', nuevoTotalVueltas);