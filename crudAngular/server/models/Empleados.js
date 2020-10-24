const { Schema } = require("mongoose");
const mongoose = require("../database");

const EmpleadosSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    
    puesto:{
        type: String,
        required: true
    },
    
    departamento:{
        type: String,
        require: true
    },

    salario:{
        type:Number,
        require: true,
        default: 0
    }
});

module.exports = mongoose.model('Empleados', EmpleadosSchema);