import { DataTypes } from "sequelize";

import { sequelize } from "../Database.js";

export const Uploads = sequelize.define("uploads", {
  ProjectName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Describe: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  Location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Image: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
});
