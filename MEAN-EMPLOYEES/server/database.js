const mongoose= require('mongoose');

const URI='mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then(db => console.log('db is connected'))//.then escucha los datos de la bd, ha pasado la prueba
    .catch(err => console.log(err));//no ha pasado la prueba

module.exports = mongoose;//exportacion, con esto la cstante mongoose le devuelve la coneccion