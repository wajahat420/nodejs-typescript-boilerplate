import { Sequelize } from 'sequelize';
import config from '../config/config';
import { initPageModel } from './page.model';
import { initPermissionModel } from './permission.model';
import { initRoleModel } from './role.model';
import { initRolePageModel } from './rolePage.model';
import { initUserModel } from './user.model';

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    dialect: config.db.dialect,
    port: config.db.port,
    logging: false
  },
);

const db: any = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Models
db.User = initUserModel(sequelize);
db.Role = initRoleModel(sequelize);
db.Page = initPageModel(sequelize);
db.RolePage = initRolePageModel(sequelize);
db.Permission = initPermissionModel(sequelize);

export default db;
