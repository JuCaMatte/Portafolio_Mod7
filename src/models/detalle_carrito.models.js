import {DataTypes} from "sequelize";
import { sequelize } from "../database/database.js"

export const detalle_carrito  = sequelize.define('detalle_carrito',{
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
    cantidad : {
        type : DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }

},{
    timestamps: false,
    tableName : 'detalle_carrito',
    alias : 'detalle_carrito'

  })