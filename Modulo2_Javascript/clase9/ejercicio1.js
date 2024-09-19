//Ejercicio 1: Switch
// El objetivo de este ejercicio es imprimir en consola un texto que irá
// variando según el día que contenga la variable dia. Para esto, ya
// presentamos un código hecho con if/else que tendremos que modificar
// y convertirlo a un switch, manteniendo el mismo resultado.

let dia = "julio";

switch (dia) {
    case "lunes" :
        console.log("Hoy es lunes. Empieza la semana con energía!");
        break;
    case "martes" :
        console.log("Hoy es martes, sigue adelante.");
        break;
    case "miercoles" :
        console.log("Hoy es miércoles, mitad de semana.");
        break;
    case "jueves" :
        console.log("Hoy es jueves, casi es viernes.");
        break;
    case "viernes" :
        console.log("Hoy es viernes, el fin de semana está cerca.");
        break;
    case "sabado" :
        console.log("Hoy es sábado, disfruta tu día.");
        break;
    case "domingo" :
        console.log("Hoy es domingo, día de descanso.");
        break;
    default: 
    console.log("Pon un día válido.");
}