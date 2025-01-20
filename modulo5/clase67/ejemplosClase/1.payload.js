const jwt = require('jsonwebtoken');

// Clave secreta para firmar el token
const secretKey = "mi_contrasenia_super_secreta"

// Definicion del payload
const payload = {
    userId: 123,
    role: "admin",
    name: "Berni Bauque",
    iat: Math.floor(Date.now() / 1000), // fecha actual en minutos
    exp: Math.floor(Date.now() / 1000) + (60 * 60) // expiracion en una hora
}

// Creamos el JWT
const token = jwt.sign(payload, secretKey, { algorithm: 'HS256'});
console.log("JWT generado: ", token);

// Decodificamos y verificamos
try {
    const decod = jwt.verify(token, secretKey)
    console.log("Payload decodificado: ", decod)
} catch (error) {
    console.log("Token invalido o expirado", error.message);
}