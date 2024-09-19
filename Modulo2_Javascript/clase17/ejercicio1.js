// Búsqueda binaria

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const busquedaBinaria = (lista, item) => {  // los parámetros son la lista en la que vamos a hacer la búsqueda y el elemento a buscar.
    let low = 0; // Límite bajo
    let high = list.length - 1; // Límite alto. Sirven para encontrar el punto medio en la lista.

    //Encontrar el punto medio es iterativo, necesito un bucle while.
    //Se ejecuta mientras que el punto más bajo se igual o menor al punto más alto: low <= high.
    while(low <= high) {
        const mid = Math.floor((low + high) / 2); //Es para buscar el punto medio entre low y high.
       //Math.floor se usa para redondear por si la operación da con decimal. 
        const guess = list[mid]; // Adivina si el valor es el de la mitad.
        
        if (guess === item) { //Si es así, retorna esa posición.
            return mid;
        } 

        // Si es mayor que lo que se tiene que buscar
        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null // Esto es si no encuentra nada.
};

//¿Cuál es la posición del número 1?
let buscar = 1;
console.log(`El número ${buscar} se encuentra en la posición ${busquedaBinaria(list, buscar)} dentro de la lista.`);

//¿Cuál es la posición del número 5?
let buscar2 = 5;
console.log(`El número ${buscar2} se encuentra en la posición ${busquedaBinaria(list, buscar2)} dentro de la lista.`);

//¿Cuál es la posición del número 6?
let buscar3 = 6;
console.log(`El número ${buscar3} se encuentra en la posición ${busquedaBinaria(list, buscar3)} dentro de la lista.`);

//¿Cuál es la posición del número 9?
let buscar4 = 9;
console.log(`El número ${buscar4} se encuentra en la posición ${busquedaBinaria(list, buscar4)} dentro de la lista.`);

//¿Cuál es la posición del número 11?
let buscar5 = 11;
console.log(`El número ${buscar5} se encuentra en la posición ${busquedaBinaria(list, buscar5)} dentro de la lista.`);