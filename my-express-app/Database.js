import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('arinolasnewdatabase', 'arinola22', '2006', {
  host: 'localhost',
  dialect: 'postgres'
});