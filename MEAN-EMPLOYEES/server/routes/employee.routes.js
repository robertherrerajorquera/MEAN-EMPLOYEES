const express = require('express');
const router = express.Router();



const empleCtrl= require('../controller/employee.controler');//llama a los datos del employee.controler

router.get('/',empleCtrl.getEmployees);//permite mostrar los usuarios todos
router.post('/',empleCtrl.createEmployee);//permite crear usuarios
router.get('/:id',empleCtrl.seeEmployee);//el id que sigue a la ruta inicial es para 
router.put('/:id',empleCtrl.seeEmployee);//el put permite actualizar datos y el parametro id es para especificar que es de ese usuario
router.delete('/:id',empleCtrl.killEmployee);//perimte eliminar

module.exports = router;