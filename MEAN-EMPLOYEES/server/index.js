const express = require('express');
const app = express();
const morgan= require('morgan');
const cors= require('cors');

const { mongoose } = require('./database');

//config
app.set('port', process.env.PORT||3000);//port es el nombre de la variable y el numero su valor
    //process.env.PORT rescata el puerto que nos da la nuve(si existe un puerto dado por el sistema operativo tomalo..., sino usa el 3000)


//middlewares(funcion de procesamiento de datos)
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Rutes(encargado de las rutas)
app.use('/api/employees',require('./routes/employee.routes'));


//starting the server(comenzando el servidor)



app.listen(app.get('port'), () => {
    console.log('puerto ', app.get('port'));
});
