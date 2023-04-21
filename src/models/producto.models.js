import {DataTypes} from "sequelize";
import { sequelize } from "../database/database.js"

export const producto  = sequelize.define('producto',{
    id :{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    nombre_producto :{
        type : DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    precio :{
        type : DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    stock : {
        type : DataTypes.INTEGER,
        allowNull: false, 
        validate: {
            notEmpty: true
        }
    },
    cod_categoria : {
        type : DataTypes.INTEGER,
        allowNull: false, 
        validate: {
            notEmpty: true
        }
    },
    imagen :{
        type : DataTypes.STRING(200),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    descripcion : {
        type : DataTypes.STRING(200),
        validate: {
            notEmpty: true
        }
    }
},{
    timestamps: false,
    tableName : 'producto',
    alias : 'producto'
  })