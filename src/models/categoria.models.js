import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js"

export const categoria  = sequelize.define('categoria',{
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
    nombre_categoria :{
        type : DataTypes.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
},{
    timestamps: false,
    tableName : 'categoria',
    alias : 'categoria'

  })