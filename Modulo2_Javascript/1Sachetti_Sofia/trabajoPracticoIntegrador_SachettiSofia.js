const prompt = require('prompt-sync')(); 

// 1. ESTRUCTURA DE DATOS
// a) Crear un array de objetos llamado libros que contenga al menos 10 libros.
let libros = [
    {id: 1, titulo: '1984', autor: 'George Orwell', anio: 1949, genero: 'ficcion', disponible: true},
    {id: 2, titulo: 'El Principito', autor: 'Antoine de Saint-Exupery', anio: 1943, genero: 'ficcion', disponible: true},
    {id: 3, titulo: 'Los secretos de la mente millonaria', autor: 'T. Harv Eker', anio: 2005, genero: 'autoayuda', disponible: true},
    {id: 4, titulo: 'Sapiens: De animales a dioses', autor: 'Yuval Noah Harari', anio: 2011, genero: 'historia', disponible: true},
    {id: 5, titulo: '¡El poder del ahora!' , autor: 'Eckhart Tolle' , anio: 1997 , genero: 'autoayuda', disponible: true},
    {id: 6, titulo: 'Como hacer que te pasen cosas buenas', autor: 'Marian Rojas Estapé', anio: 2018, genero: 'autoayuda', disponible: true},
    {id: 7, titulo: 'El diario de Anna Frank', autor: 'Anna Frank', anio: 1947, genero: 'historia', disponible: true},
    {id: 8, titulo: 'Los miserables', autor: 'Victor Hugo', anio: 1862, genero: 'ficcion', disponible: true},
    {id: 9, titulo: 'Un lugar soleado para gente sombria', autor: 'Mariana Enriquez', anio: 2024, genero: 'ficcion', disponible: true},
    {id: 10, titulo: 'Homo deus', autor: 'Yuval Noah Harari', anio: 2015, genero: 'historia', disponible: true}
];

// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
let usuarios = [
    {id: 1, nombre: 'Pedro', email: 'pedro@gmail.com', librosPrestados: []},
    {id: 2, nombre: 'Mateo', email: 'mateo@gmail.com', librosPrestados: []},
    {id: 3, nombre: 'Diana', email: 'diana@gmail.com', librosPrestados: []},
    {id: 4, nombre: 'Lucas', email: 'lucas@gmail.com', librosPrestados: []},
    {id: 5, nombre: 'Laura', email: 'laura@gmail.com', librosPrestados: []}
];


//2. FUNCIONES DE GESTION DE LIBROS
//a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
function agregarLibro(titulo, autor, anio, genero) {
    let id = libros.length + 1; // Esta línea nos permite crear un número de id que siga la numeración establecida en el array Libros. 
    let disponible = true // Acá declaramos que por default el nuevo libro ingresado está disponible. 
    let nuevoLibro = {id, titulo, autor, anio, genero, disponible};
    libros.push(nuevoLibro) // El nuevo libro ingresa al array de libros en la biblioteca.
    return libros;
};
agregarLibro('La sombra del viento', 'Carlos Ruiz Zafón', 2011, 'ficcion');
//console.log('La lista nueva de libros es: ', libros); //Probamos que funcione correctamente.

//b) Crear una función buscarLibro(criterio, valor)
function buscarLibro(criterio, valor) { //Criterio sería la clasificacion del dato(ej: genero del libro) y valor seria lo que buscamos dentro de ese critrio.
    return libros.filter(libro => libro[criterio] == valor) //Usamos filter para buscar dentro del array.
};

//c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja(bubble sort) y luego muestre los libros ordenados en la consola.
function ordenarLibros(criterio) {
    for (let i = 0; i < libros.length; i++){
        for (let j = 0; j < libros.length - 1; j++){ //Doble for para el ordenamiento bubble sort.
            if (libros[j][criterio] > libros[j + 1][criterio]) { //Condiciones a cumplir para el ordenamiento.
                let temp = libros[j];
                libros[j] = libros[j + 1];
                libros[j + 1] = temp;
            }
        }
    }
    return libros;
};
let librosOrdenadosTitulo = ordenarLibros('titulo'); //Dejamos en una variable los libros ordenados por título.
let librosOrdenadosAnio = ordenarLibros('anio'); // Y en otra variable los libros ordenados por año.

//d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.
function borrarLibro(id) {
    let posicion;
    for (let i = 0; i < libros.length; i++){
        if (libros[i]['id'] == id) {
            posicion = i;
        }
    } 
    libros.splice(posicion, 1);
    return libros;
};


//GESTION DE USUARIOS   
//a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
function registrarUsuario(nombre, email) { //Similar a agregarLibro.
    let id = usuarios.length + 1;
    let librosPrestados = [];
    let nuevoUsuario = {id, nombre, email, librosPrestados};
    return usuarios.push(nuevoUsuario)
};

//b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
let listaDeUsuarios = []; //Declaro un array en donde almacenar los nombres de los usuarios. 
function mostrarTodosLosUsuarios(){
    usuarios.forEach((usuario) => listaDeUsuarios.push(usuario.nombre));
    return listaDeUsuarios;
};

// c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
function buscarUsuario(criterio, email) {
    return usuarios.filter(usuario => usuario[criterio] == email);
};

// d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.
function borrarUsuario(nombre, email) {
    let posicion;
    for (let i = 0; i < usuarios.length; i++){
        if (usuarios[i]['nombre'] == nombre && usuarios[i]['email'] == email) {
            posicion = i;
        }
    } 
    usuarios.splice(posicion, 1);
    return usuarios
};


//4. SISTEMA DE PRESTAMOS
//a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
function prestarLibro(idLibro, idUsuario) {
    let libro = libros.find((libro) => libro.id === idLibro); //Variable para buscar el Id de cada libro.
    let usuario = usuarios.find((usuario) => usuario.id === idUsuario); //Variable para buscar el Id de cada usuario.
    if (libro.disponible === true) { //Si el libro está disponible, lo cambiamos a false para marcar que fue prestado.
        libro.disponible = false; 
        usuario.librosPrestados.push(libro); //Agregamos el libro prestado al array del usuario. 
    } else {
        console.log("El libro no se encuentra disponibe.");
    }
    return console.log(`El usuario ${usuario.nombre} tomó prestado el libro "${libro.titulo}".`);
};
//Pruebas para pasar algunos libros a prestados. 
prestarLibro(2, 3);
prestarLibro(4, 5);
prestarLibro(8, 1);

//b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.
function devolverLibro(idLibro, idUsuario) { 
    let libro = libros.find((libro) => libro.id === idLibro);
    let usuario = usuarios.find((usuario) => usuario.id === idUsuario);
    if (libro.disponible === false) { //Similar a prestarLibro, pero esta vez se pasa el libro a true para marcar que esté disponible, 
        libro.disponible = true;
        usuario.librosPrestados.splice(0,1); //Usamos .splice para eiminar el libro de los prestados del usuario. 
    };
    return console.log(`El libro "${libro.titulo}" se encuentra nuevamente disponible.`);
};


// 5. REPORTES
//a) Crear una función generarReporteLibros()
function generarReporteLibros() {
    
    //Cantidad total de libros, recorre el array con length.
    let cantidadDeLibros = console.log('La cantidad total de libros es de: ', libros.length);
    
    //Cantidad de libros prestados.
    let librosPrestados = libros.filter(libro => { //Uso de .filter para buscar los libros que tengan false en su disponibilidad.
        if (libro.disponible === false) {
            return libro
        }
    }).length; //Agregamos length al final para saber la cantidad de libros prestados. 
    console.log(`Los libros prestados son: ${librosPrestados}.`);
    
    //Cantidad de libros por genero.
    let generos = ['historia', 'ficcion', 'autoayuda']; //Declaramos un array por géneros.
    let cantidadPorGenero = generos.map(genero => {
        return {
            genero: genero,
            cantidad: libros.filter(libro => libro.genero == genero).length
        }
    });
    console.log(cantidadPorGenero);
    
    //Libro mas antiguo y mas nuevo. Con .map creamos un array de los años y después usamos Math.max y .min para buscar el más nuevo y el más antiguo.
    let aniosDePublicacion = libros.map(libro => libro.anio)
    let libroMasNuevo = console.log('El libro más reciente publicado es del año:', Math.max(...aniosDePublicacion));
    let libroMasAntiguo = console.log('El libro más antiguo publicado es del año:', Math.min(...aniosDePublicacion));
    console.log(libroMasNuevo, libroMasAntiguo);
};


//6. IDENTIFICACIÓN AVANZADA DE LIBROS
//a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra (no títulos que contengan números ni otros caracteres). b) La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola
//NOTA: Este ejercicio no está finalizado, pero de todas formas dejo el código para mostrar cómo era la lógica que seguía.

let librosConPalabras = [];
function librosConPalabrasEnTitulo() {
    let titulosDeLibros = libros.map(libro => libro.titulo); //.map para tener un array con sólo los títulos.
    let titulosConPalabras = titulosDeLibros.filter(titulo => {
        let valorDeTitulo = /^[a-zA-Z]/; //Regex para incluir los titulos que solamente tienen letras.
        titulo == valorDeTitulo;
    });
    return librosConPalabras.push(titulosConPalabras);
};
console.log(librosConPalabrasEnTitulo());


//7.CÁLCULOS ESTADÍSTICOS
//a) Desarrollar una función calcularEstadisticas()
function calcularEstadisticas() {
    let anios = []; //Array vacio para almacenar los años de publicación.
    let suma = 0; //Acumulador
    for (let i = 0; i < libros.length; i++) {
        anios.push(libros[i].anio);
        suma += Number(libros[i].anio);
    };
    //Promedio de años de publicación de los libros.
    let promedio = suma / libros.length;
    console.log("El promedio de años de publicacion de libros es: ", Math.round(promedio));

    //Diferencia en años entre el libro más antiguo y el más nuevo.
    let libroMasNuevo = Math.max(...anios);
    let libroMasAntiguo = Math.min(...anios);
    let diferenciaDeAnios = libroMasNuevo - libroMasAntiguo;
    console.log("La diferencia en años entre el libro mas antiguo y el mas nuevo es de ", diferenciaDeAnios, " años.");
};


// 8. MANEJO DE CADENAS 
// a) Crear una función normalizarDatos() que utilice métodos de strings 
function normalizarDatos() {
    //Convertir todos los títulos a mayúsculas.
    let tituloMayuscula = libros.map(libro => libro.titulo.toUpperCase());
    //Eliminar espacios en blanco.
    let eliminarEspacios = libros.map(libro => libro.autor.trim());
    //Formatear los emails de los usuarios a minúsculas.
    let formatearEmail = usuarios.map(usuario => usuario.email.toLowerCase());
    return {
        TitluosEnMayuscula: tituloMayuscula,
        EliminarEspaciosDeAutor: eliminarEspacios,
        EmailEnMinuscula: formatearEmail
    }
};


//9. iNTERFAZ DE USUARIO POR CONSOLA
//a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
//b) El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.
function menuPrincipal() {
    console.log('SISTEMA DE GESTIÓN BIBLIOTECARIA.'); //Establecemos todas las opciones disponibles para el usuario. 
    console.log('GESTION DE LIBROS: ')
    console.log('    1- Agregar un libro.');
    console.log('    2- Buscar libro.');
    console.log('    3- Ordenar libros.');
    console.log('    4- Eliminar libros.');
    console.log('GESTION DE USUARIOS:');
    console.log('    5- Registrar un nuevo usuario.');
    console.log('    6- Ver todos los usuarios.');
    console.log('    7- Buscar usuario.');
    console.log('    8- Eliminar usuario.');
    console.log('SISTEMA DE PRÉSTAMOS:');
    console.log('    9- Tomar libro prestado.');
    console.log('    10- Devolver libro.');
    console.log('11- REPORTE DE LIBROS.');
    console.log('12- IDENTIFICACION DE LIBROS.');
    console.log('13- ESTADÍSTICAS DE LIBROS.');
    console.log('14- NORMALIZACIÓN DE DATOS.');
    
    let opcion = parseInt(prompt('Ingrese el número de la tarea que desea realizar: '));

    switch(opcion) {
        case 1:
            console.log('GESTION DE LIBROS: Agregar un nuevo libro.')
            let titulo = prompt('Ingrese el título del libro: ');
            let autor = prompt('Ingrese el nombre del autor: ');
            let anio = parseInt(prompt('Ingrese el año de publicación: '));
            let genero = prompt('Ingrese el género: ');
            let nuevoLibro = agregarLibro(titulo, autor, anio, genero);
            console.log('Se agregó un nuevo libro a la biblioteca: ', nuevoLibro);
        break;
        case 2:
            console.log('GESTIÓN DE LIBROS: Buscar libro por título, autor o género.');
            let criterio = prompt('¿Desea buscar por título, autor o género?: ');
            let valor = prompt('Ingrese el nombre del libro, autor o el género a buscar: ');
            let libroBuscado = buscarLibro(criterio, valor);
            console.log('El libro buscado es: ', libroBuscado);
        break;
        case 3:
            console.log('GESTIÓN DE LIBROS: Ordenar libros.') //La búsqueda se pude realizar con dos criterios, así que dejamos que el usuario elija la opción que desee con un if/else if.
            let seleccionarCriterio = prompt('Ordenar libros por título o anio de publicacion: ');
            if(seleccionarCriterio == 'titulo') {
            console.log('Libros ordenados por título: ', librosOrdenadosTitulo);
            } else if (seleccionarCriterio == 'anio') {
            console.log('Libros ordenados por año de publicación: ', librosOrdenadosAnio);
            } else (console.log('Opción no válida.'));
        break;
        case 4:
            console.log('GESTIÓN DE LIBROS: Eliminar libro.');
            let id = parseInt(prompt('Ingrese el id del libro que desea eliminar: '));
            console.log(borrarLibro(id));
        break;
        case 5: case 8: // Ya que registrar o eliminar usuario reciben los mismos parámetros, los agrupamos dentro de un if, así declaramos los parámetro y dejamos que el usuario elija qué operación realizar. 
            console.log('GESTIÓN DE USUARIOS: ');
            let seleccion = prompt('Indique la gestión a realizar (registrar usuario/eliminar usuario): ');
            let nombre = prompt('Ingrese el nombre del usuario: ');
            let email = prompt('Ingrese el email: ');
            if (seleccion == 'registrar') {
                console.log(registrarUsuario(nombre, email));
            } else if (seleccion == 'eliminar') {
                console.log(borrarUsuario(nombre, email));
            } else (console.log('Opción no válida.'));
        break;
        case 6:
            console.log('GESTIÓN DE USUARIOS: Mostrar todos los usuarios.');
            console.log(mostrarTodosLosUsuarios());
        break;
        case 7:
            console.log('GESTIÓN DE USUARIOS: Buscar usuario.') //---------------VER--------------------
        break;
        case 9: case 10: //Similar a gestión de usuarios. 
            console.log('SISTEMA DE PRÉSTAMOS.');
            let seleccionPrestamo = prompt('Indique si desea pedir prestado o devolver un libro: ');
            let idLibro = parseInt(prompt('Ingrese el ID del libro: '));
            let idUsuario = parseInt(prompt('Ingrese el ID de usuario: '));
            if (seleccionPrestamo == 'prestado') {
                console.log(prestarLibro(idLibro, idUsuario));
            } else if (seleccionPrestamo == 'devolver') {
                console.log(devolverLibro(idLibro, idUsuario));
            } else (console.log('ID de libro o usuario incorrcto.'));
        break;
        case 11:
            console.log('REPORTE DE LIBROS:');
            console.log(generarReporteLibros());
        break;
        case 12: 
            console.log('IDENTIFICACIÓN DE LIBROS: ');
            console.log(librosConPalabrasEnTitulo());
        break;
        case 13:
            console.log('ESTADÍSTICAS DE LIBROS:');
            console.log(calcularEstadisticas());
        break;
        case 14:
            console.log('NORMALIZACIÓN DE DATOS:');
            console.log(normalizarDatos());
        break
        default:
        console.log('Opción no válida.');
    }
};
console.log(menuPrincipal());