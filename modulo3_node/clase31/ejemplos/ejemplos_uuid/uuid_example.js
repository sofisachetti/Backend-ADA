// Importar las diferentes versiones de uuid

const {v1: uuid1, v3: uuid3, v4: uuid4, v5: uuid5} = require('uuid');

// Ejemplo 1: UUID 1 - Basado en tiempo
const idV1 = uuid1();
console.log("UUID v1 (Basado en tiempo): ", idV1);

// Ejemplo 2: UUID 3 - Basado en nombre y espacio de nombre
const NAMESPACE = uuid3.URL; // Espacio de nombre estandar basado en la url
const nameV3 = "sofi";
const idV3 = uuid3(nameV3, NAMESPACE);
console.log("UUID v3 (Basado en nombre y espacio de nombre: ", idV3);

// Ejemplo 3: UUID 4 - Aleatorio
const idV4 = uuid4();
console.log("UUID v4 (Aleatorio): ", idV4);

// Ejemplo 4: UUID 5 - Basado en nombre y espacio de nombre (con  sha-1)
const nameV5 = "chicasBack";
const idV5 = uuid5(nameV5, NAMESPACE)
console.log("UUID v5 (Basado en nombre y espacio de nombre con sha-1): ", idV5);
