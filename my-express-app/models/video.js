import { DataTypes } from "sequelize";
import { sequelize } from "../Database.js";

export const Videos = sequelize.define("Videos", {
  Difficulty: {
    type: DataTypes.ENUM("Beginner", "Intermediate", "Hard"),
    allowNull: false,
  },
  YoutubeVideos: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
