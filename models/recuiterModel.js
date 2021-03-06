import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const recruiterSchema = sequelize.define('recruiters', {
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
            notNull: true
        },
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true,
        allowNull: false,
        validate: {
            isEmail: true
        },
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
            notNull: true,

        },
        allowNull: false
    }
},
    {
        timestamps: true,
        createdAt: true,
        updatedAt: true
    }
)

export default recruiterSchema;