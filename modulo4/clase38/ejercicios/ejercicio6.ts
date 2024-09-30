// Ejercicio 6: Uso de unknown
// Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta
// variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los valores.

let desconocido: unknown;
desconocido = 10;
if (typeof desconocido === 'number') {
    console.log(`La variable: ${desconocido} es del tipo number.`);
};

desconocido = '10';
if (typeof desconocido === 'string') {
    console.log(`La variable: ${desconocido} es del tipo string.`);
};