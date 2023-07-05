import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('arinolasdatabase', 'ada2', '1930', {
  host: 'localhost',
  dialect: 'postgres'
});