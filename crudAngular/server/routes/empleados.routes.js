const {response} = require('express');
const express = require('express');
const router = express.Router();
const empleados = require('../controllers/empleado.controller');

//Consultar todos los empleados
router.get('/', empleados.getEmpleados);

//Agregar un emplado
router.post('/', empleados.createEmpleado);

//Consusltar un emplado ID
router.get('/:id', empleados.getEmpleado);

//Actualizar un empleado
router.put('/:id', empleados.updateEmpleado);

//Eliminar un empleado
router.delete('/:id', empleados.deleteEmpleado);

module.exports = router;