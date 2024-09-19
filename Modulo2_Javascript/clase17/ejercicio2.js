let list = [12, 3, 5, 7, 1, 22, 47, 100];

// Primero hago el bubble sort
for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j + 1];
            list[j + 1] = temp;
        }
    }
}

const busquedaBinaria = (lista, item) => {  
    let low = 0; 
    let high = list.length - 1; 
    while(low <= high) {
        const mid = Math.floor((low + high) / 2); 
        const guess = list[mid]; 
        if (guess === item) { 
            return mid;
        } 
        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null 
};

console.log(list);

//¿Cuál es la posición del número 12?
let buscar12 = 12;
console.log(`La posición del número 12 en el array es: ${busquedaBinaria(list, buscar12)}.`);

//¿Cuál es la posición del número 5?
let buscar5 = 5;
console.log(`La posición del número 5 en el array es: ${busquedaBinaria(list, buscar5)}.`);

//¿Cuál es la posición del número 22?
let buscar22 = 22;
console.log(`La posición del número 22 en el array es: ${busquedaBinaria(list, buscar22)}.`);

//¿Cuál es la posición del número 100?
let buscar100 = 100;
console.log(`La posición del número 100 en el array es: ${busquedaBinaria(list, buscar100)}.`);