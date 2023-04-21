import {DataTypes} from "sequelize";
import { sequelize } from "../database/database.js"

export const descuento  = sequelize.define("descuento",{
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
    nombre :{
        type : DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    porcentaje : {
        type : DataTypes.DOUBLE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
},{
    timestamps: false,
    tableName : "descuento",
    alias : "descuento"

  })
