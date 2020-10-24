const express = require('express'); // Crea el objeto request.body
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const {mongoose} = require("./database");
//Configuraciones
app.set('port', process.env.PORT || 300);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Rutas del servidor
app.use('/api/empleados', require('./routes/empleados.routes'));

//Iniciar el servidor
app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000" + app.get('port'));
})