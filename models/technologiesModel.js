import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const technologiesSchema = sequelize.define('technologies', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    technology: {
        type: DataTypes.STRING
    }

},
    {
        timestamps: false
    }
);

export default technologiesSchema;