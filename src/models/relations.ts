import { Role } from "./role.model";
import { User } from "./user.model";

User.belongsTo(Role, { foreignKey: 'roleId' })
