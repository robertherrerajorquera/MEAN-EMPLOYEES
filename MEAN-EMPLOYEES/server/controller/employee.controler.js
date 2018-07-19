const models= require('../models/employee');
const employeeCtrl = {};

employeeCtrl.getEmployees = async(req,res)=>{//los (req, res) que aparecen ahi se llaman callbacks 
    //sirven para requerir o responder algo respectivamente
    const find = await models.find();
    res.json(find);
  
};

employeeCtrl.createEmployee = async(req, res)=>{
const create=new models({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
});
await create.save();
console.log(create);
res.json({
    'status': 'Empleado guardado'
});

};
employeeCtrl.seeEmployee= async(req, res)=>{
   // console.log(req.params.id);//params captura los datos que manda la url y el.id indica que solo muestre los de la id de la url
    const loneEm = await models.findById(req.params.id);
    res.json(loneEm);
};
employeeCtrl.updateEmployee= async(req, res) => {

//await models.findByIdAndUpdate(req.params.id);//o tambien puede ser de esta forma o de la siguiente...
const { id }= req.params;
const up = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
};

await models.findByIdAndUpdate(id, {$set: up}, {new: true});// el objeto {new: true} es para que si el dato a actualizar no existe lo cree...
//recuerda nunca olvidar antes del set el gatito $ <--- ese xque sino no toma el metodo set y no actualiza....
//console.log(up);
res.json({
    'status':'empleado actualizado..'});
};/////////////fin del update


employeeCtrl.killEmployee= async(req,res)=>{

await models.findByIdAndRemove(req.params.id);
res.json({'status':'empleado eliminado'});
};

module.exports = employeeCtrl;