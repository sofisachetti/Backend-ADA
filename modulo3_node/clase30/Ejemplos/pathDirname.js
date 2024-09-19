const path = require('path');

// Ejemplo 1: Obtner el directorio contenedor de un archivo desde una ruta absoluta
const filePath = '/home/user/docs/file.txt';
const dirName1 = path.dirname(filePath);
console.log('Ejemplo 1 - Directorio contenedor de file.txt: ', dirName1);

// Ejemplo 2: Obtener el directorio de un archivo usando una ruta relativa
const relativePath = 'src/utils/helpers.js';
const dirName2 = path.dirname(relativePath);
console.log('Ejemplo 2 - Directorio contenedor de helpers.js: ', dirName2);

// Ejemplo 3: Uso con rutas de Windows
const windowsPath = 'C:\\Users\\Admin\\Documents\\back.pdf';
const dirName3 = path.dirname(windowsPath)
console.log('Ejemplo 3 - Directorio contenedor de rutas de Windows: ', dirName3);
