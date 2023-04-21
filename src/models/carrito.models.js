import {DataTypes} from "sequelize";
import { sequelize } from "../database/database.js"

// Creación de tabla carrito
export const carrito  = sequelize.define("carrito",{
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
        fecha : {
        type : DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
     id_usuario :{
        type : DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }   

},{
    timestamps: false,
    tableName : 'carrito',
    alias : 'carrito'

  })