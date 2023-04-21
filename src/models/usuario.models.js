//Modelar tablas del proyecto
//Tipos de datos que soporta sequalize
import {DataTypes} from "sequelize";
import { sequelize } from "../database/database.js"
//Definiremos tabla "usuario"

export const usuario  = sequelize.define("usuario",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }        
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    rut: {
        type : DataTypes.STRING(15),
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }    
    },
    clave: {
        type : DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type : DataTypes.STRING(50),
        allowNull: false,   
        validate: {
            notEmpty: true
        } 
    }

},{
    timestamps: false,
    tableName : 'usuario',
    alias : 'usuario'

  })
