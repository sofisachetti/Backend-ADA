// Ejercicio 10: Uso de enum para niveles de acceso
// 1. Declara un enum llamado NivelesDeAcceso con los valores: Admin,
// Usuario, Invitado.
// 2. Crea una función que reciba un nivel de acceso y devuelva un mensaje
// indicando el tipo de permisos disponibles para ese nivel.
// 3. Usa el enum para llamar a la función con el nivel Usuario y muestra el resultado por consola.

enum NivelesDeAcceso {
    Admin,
    Usuario,
    Invitado
}

function acceso(nivelAcceso: NivelesDeAcceso): string {
    if (nivelAcceso === NivelesDeAcceso.Admin) {
        return "Admin: tiene todos los permisos."
    } else if (nivelAcceso === NivelesDeAcceso.Usuario) {
        return "Usuario: tiene acceso restringido a ciertas funciones."
    } else {
        return "Invitado: tiene acceso limitado."
    }
}

console.log(acceso(NivelesDeAcceso.Admin));