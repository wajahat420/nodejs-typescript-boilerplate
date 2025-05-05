import { Sequelize } from 'sequelize';
import config from '../config/config';
import { initUserModel } from './user.model';

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    dialect: config.db.dialect,
    port: config.db.port
  }
);

const db: any = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Models
db.User = initUserModel(sequelize);

export default db;
