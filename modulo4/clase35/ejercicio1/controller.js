const model = require('./model')

const respuestaSecuencia = (mensaje) => {
    let id = 0;
    const nuevoId = model.contador(id)
    const respuestaModificada = `${nuevoId}: ${mensaje}`;
    return respuestaModificada
};


module.exports = {respuestaSecuencia};