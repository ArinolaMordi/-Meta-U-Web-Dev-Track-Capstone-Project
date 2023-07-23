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
  AgeGroup: {
    type: DataTypes.ENUM("5-7", "7-9", "9-11"),
    allowNull: false,
  },
  Interest: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
