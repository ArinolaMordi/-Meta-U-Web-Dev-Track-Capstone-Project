import { DataTypes } from "sequelize";
import { sequelize } from "../Database.js";

export const Profile = sequelize.define("Profile", {
  Age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Bio: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  FavoriteQuote: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  SocialHandles: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Education: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
