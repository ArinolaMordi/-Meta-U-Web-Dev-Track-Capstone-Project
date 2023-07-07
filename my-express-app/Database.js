import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('arinolasdatabase', 'ada2', '2006', {
  host: 'localhost',
  dialect: 'postgres'
});