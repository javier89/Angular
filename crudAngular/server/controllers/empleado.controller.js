const Empleados  = require("../models/Empleados");

const empleadoController = { }

//Listar todos los empleados
empleadoController.getEmpleados = async (request, response) =>{
    const empleados = await Empleados.find(); //Select * from empleados
    response.json(empleados);
 } //fin de getEmpleados

//Crear un empleado
empleadoController.createEmpleado = async (request, response)=>{
    const empleado = new Empleados({
        nombre: request.body.nombre,
        puesto: request.body.puesto,
        departamento: request.body.departamento,
        salario: request.body.salario
    });
    await empleado.save();
    response.json({
        'status': 'Empleado Gurdado'
    })
}// Fin de createEmpleado

//Actualizar un Empleado
empleadoController.updateEmpleado = async (request, response)=>{
    const {id} = request.params;
    const empleado = {
        nombre: request.body.nombre,
        puesto: request.body.puesto,
        departamento: request.body.departamento,
        salario: request.body.salario
    };
    await Empleados.findByIdAndUpdate(id, {$set: empleado}, {new: true});
    response.json({
        'status': 'Empleado Actualizado'
    });
}//Fin Actualizar

//Consultar un empleado Id
empleadoController.getEmpleado = async (request, response)=>{
    const empleado = await Empleados.findById(request.params.id);
    response.json(empleado);
} // Fin de getEmpleado

//Eliminar un empleado
empleadoController.deleteEmpleado = async (request, response)=>{
    const {id} = request.params;
    await Empleados.findByIdAndDelete(id);
    response.json({
        'status': 'Empleado eliminado'
    });
}// Fin delete

module.exports = empleadoController;

