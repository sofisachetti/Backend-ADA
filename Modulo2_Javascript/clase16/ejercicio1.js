let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(horas) {
    return horas + 1;
})
console.log(horariosAtrasados);
// 1) Añadir un nuevo horario al principio de la lista: Usamos unshift para agregar el horario 10 al principio.
horariosAtrasados.unshift(10);
console.log("punto 1", horariosAtrasados);
// 2) Eliminar el último horario de la lista: Usamos pop para eliminar el último horario y lo guardamos en ultimoHorario.
let ultimoHorario = horariosAtrasados.pop();
console.log(ultimoHorario);
console.log("punto 2", horariosAtrasados);
// 3) Verificar si el horario 14 está en la lista y agregarlo al final si no está presente: Usamos includes para verificar si 14 está en la lista y push para agregarlo si no está.
if(horariosAtrasados.includes(14)) {
    console.log("El 14 está en la lista")
} else {
    horariosAtrasados.push(14);
    console.log("punto 3", horariosAtrasados);
}
// 4) Encontrar la posición del horario 18 y eliminarlo si está presente: Usamos indexOf para encontrar la posición de 18 y splice para eliminarlo si está presente.
// METODO SPLICE: array.splice(posicion, items)
if(horariosAtrasados.indexOf(18) != 1) {
    let posicion = horariosAtrasados.indexOf(18);
    horariosAtrasados.splice(posicion, 1);
}
// 5) Añadir el horario eliminado en el paso 2 al final de la nueva lista de horarios atrasados: Usamos push para agregar el ultimoHorario (adelantado una hora) al final de horariosAtrasados.
horariosAtrasados.push(ultimoHorario);
console.log("punto 5", horariosAtrasados);
// 6) Mostrar la lista final de horarios atrasados: Mostramos la lista por consola.
console.log("punto 6", horariosAtrasados);
// 7) Eliminar el primer elemento de la lista de horarios atrasados: Usamos shift para eliminar el primer elemento.
horariosAtrasados.shift();
console.log("punto 7", horariosAtrasados);
// 8) Verificar si el horario 9 está en la lista y agregarlo al principio si no está presente: Usamos includes para verificar si 9 está en la lista y unshift para agregarlo si no está.
/*if(horariosAtrasados.includes(9)) {
     console.log("El 9 está en la lista")
 } else {
     horariosAtrasados.unshift(9);
     console.log("punto 8", horariosAtrasados);
}*/
if(horariosAtrasados.includes(9)== false){
    horariosAtrasados.unshift(9);
}
console.log("punto 8", horariosAtrasados);
// 9) Por último, mostrar la lista final después de todas las operaciones
console.log("punto 9", horariosAtrasados);