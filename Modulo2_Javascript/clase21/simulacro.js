const prompt = require('prompt-sync')();
//1 - Estructura de Datos
//a) Crear un array de objetos llamado mascotas que contenga al menos 5 mascotas. Cada mascota debe tener las siguientes propiedades:✓ id (número) ✓ nombre (string) ✓ especie (string) ✓ edad (número) ✓ disponible (booleano)*/
let mascotas = [
    {id: 1, nombre: "Firulais", especie: "perro", edad: 2, disponible: true},
    {id: 2, nombre: "Pipo", especie: "gato", edad: 5, disponible: false},
    {id: 3, nombre: "Lola", especie: "perro", edad: 4, disponible: false},
    {id: 4, nombre: "Negrito", especie: "perro", edad: 1, disponible: true},
    {id: 5, nombre: "Pancho", especie: "gato", edad: 2, disponible: true}
];

//b) Crear un array de objetos llamado propietarios con al menos 3 propietarios. Cada propietario debe tener: ✓ id (número) ✓ nombre (string) ✓ email (string) ✓ mascotasAdoptadas (array de ids de mascotas)
let propietarios = [
    {id: 11, nombre: "Juan", email: "juan@gmail.com", mascotasAdoptadas: [1, 2]},
    {id: 12, nombre: "Ana", email: "ana@gmail.com", mascotasAdoptadas: [3] },
    {id: 13, nombre: "Juana", email: "juana@gmail.com", mascotasAdoptadas: [4, 5]}
];

// 2- Funciones de Gestión de Mascotas
//a) Implementar una función agregarMascota(id, nombre, especie, edad) que agregue una nueva mascota al array mascotas.
function agregarMascota(nombre, especie, edad, disponible) {
    let id = mascotas.length + 1;
    let nuevoObejeto = {id, nombre, especie, edad, disponible};
    mascotas.push(nuevoObejeto);
};
agregarMascota("Roma", "loro", 5, true);
agregarMascota("Toby", "gato", 3, true);
//console.log(mascotas);

//b) Crear una función buscarMascota(criterio, valor) que permita buscar mascotas por nombre o especie.*/
let valor = prompt('Ingrese el nombre de su mascota: ')
function buscarMascota(criterio, valor) {
  return mascotas.filter(mascota => mascota[criterio] === valor);
};
let resultadoNombre = buscarMascota('nombre', valor);
console.log('Buscar por nombre "Pipo":', resultadoNombre);

//3. Gestión de Propietarios
//a) Implementar una función registrarPropietario(nombre, email) que agregue un nuevo propietario al array propietarios.
function registrarPropietario(nombre, email) {
    let id = propietarios.length + 1
    let nuevoPropietario = {id, nombre, email};
    propietarios.push(nuevoPropietario);
};
registrarPropietario("Ricardo", "ricardo@gmail.com");
//console.log(propietarios);

//b) Crear una función buscarPropietario(email) que devuelva la información de un propietario dado su email.
function buscarPropietario(email) {
    return propietarios.filter(propietario => propietario.email === email);
};
//console.log(buscarPropietario("ricardo@gmail.com"));

//4- Sistema de Adopciones
//a) Desarrollar una función adoptarMascota(idMascota, idPropietario) que marque una mascota como no disponible y la agregue a la lista de mascotas adoptadas del propietario.
function adoptarMascota(idMascota, idPropietario) {
    let mascota = mascotas.find(mascota => mascota.id == idMascota);
    let propietario = propietarios.find(propietario => propietario.id == idPropietario);
    if (mascota.disponible === true) { 
        libro.disponible = false; 
        propietario.mascotasAdoptadas.push(mascota); 
    } else {
        console.log("La mascota no se encuentra disponibe.");
    }
    return console.log(`El propietario ${propietario.nombre} adoptó a ${mascota.nombre}`);
};

//b) Implementar una función devolverMascota(idMascota, idPropietario) que marque una mascota como disponible y la elimine de la lista de mascotas adoptadas del propietario. 
function devolverMascota(idMascota, idPropietario) {
    let mascota = mascotas.find(mascota => mascota.id == idMascota);
    let propietario = propietarios.find(propietario => propietario.id == idPropietario);
    if (mascota.disponible === false) { 
        libro.disponible = true; 
        propietario.mascotasAdoptadas.splice(0, 1);
    }
    return console.log(`${mascota.nombre} vuelve a estar en adopción.`)
};


//5- Interfaz de Usuario por Consola
//Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
function menuPrincipal(){
    console.log("SISTEMA DE GESTIÓN DE ADOPCIONES");
    console.log("1. AGREGAR UNA MASCOTA");
    console.log("2. BUSCAR UNA MASCOTA");
    console.log("3. REGISTRAR PROPIETARIO");
    console.log("4. BUSCAR PROPIETARIO");
    console.log("5. ADOPTAR UNA MASCOTA");
    console.log("6. DEVOLVER UNA MASCOTA");

    let opcion = parseInt(prompt("Elija el número de la operación que desea realizar: "));

    switch(opcion){
        case 1:
            let nombre = prompt("Ingrese el nombre de la mascota: ");
            let especie = prompt("Ingrese la especie de la mascota: ");
            let edad = parseInt(prompt("Ingrese la edad de la mascota: "));
            agregarMascota(nombre, especie, edad);
            console.log(mascotas);
        break;
        case 2:
            console.log("1. Buscar por nombre");
            console.log("2. Buscar por especie");
            let opcionBusqueda = parseInt(prompt("Ingrese la opción del criterio para buscar la mascota: "));
            if (opcionBusqueda === 1) {
                let nombreMascota = prompt("Ingrese el nombre de la mascota: ");
                buscarMascota("nombre", nombreMascota);
            } else if (opcionBusqueda === 2) {
                let especieMascota = prompt("Ingrese la especie de la mascota: ");
                buscarMascota("especie", especieMascota);
            } else {
                console.log("Opción no válida.");
            };
        break;
        case 3:
            let nombrePropietario = prompt("Ingrese el nombre del propietario: ");
            let emailPropietario = prompt("Ingrese el mail del propietario: ");
            registrarPropietario(nombrePropietario, emailPropietario);
        break;
        case 4:
            let mailProp = prompt("Ingrese el mail del propietario que busca: ");
            buscarPropietario(mailProp);
        break;
        case 5:
            let idProp = parseInt(prompt("Ingrese el id del propietario: "));
            let idMasc = parseInt(prompt("Ingrese el id de la mascota: "));
            adoptarMascota(idMasc, idProp);
        break;
        case 6:
            let idPropiet = parseInt(promt("Ingrese el id del propietario: "));
            let idMascot = parseInt(promt("Ingrese el id de la mascota: "));
            devolverMascota(idMascot, idPropiet);
        break;
        default:
            console.log("La opción ingresada no es correcta.");
    }
};
console.log(menuPrincipal());