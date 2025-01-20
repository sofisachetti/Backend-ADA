// Importamos express
import express from 'express'

// Importamos el router de usuarios desde el archivo correspondiente
// Este archivo contiene todas las rutas
import userRouter from './routes/userRoutes'

// Creamos la instancia de una aplicacion en express
// Este objeto representa la aplicacion web y sera el punto central para configurar rutas, entre otros
const app = express(); // instanciando express

// Acá iria el middleware para parsear el objeto json
app.use(express.json());
// express.json: su proposito principal es analizar (parsear) el cuerpo de una solicitud http que contiene


// Configuracion de las rutas
// Asociamos el router 'userRouter' al prefijo '/users'
// Esto significa que todas las rutas definidas en el archivo 'userRouter' estaran disponibles bajo la ruta '/users'
// Por ejemplo: 
// - Una solicitud a '/users' será manejada por 'userRouter.get('/')
// - Una solicitud a '/users/:id' sera manejada por 'userRouter.get('/:id')'

app.use('/users', userRouter)

// Exportamos
export default app 