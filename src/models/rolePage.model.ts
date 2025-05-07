import { DataTypes, Sequelize } from 'sequelize';
import { BaseAttributes, BaseCreationAttributes } from '../common/base.interface';
import { BaseModel } from '../common/base.model';

export interface RolePageAttributes extends BaseAttributes {
  roleId: number;
  pageId: number;
}

export interface RolePageCreationAttributes extends BaseCreationAttributes {
  roleId: number;
  pageId: number;
}

export class RolePage
  extends BaseModel<RolePageAttributes, RolePageCreationAttributes>
  implements RolePageAttributes {
  declare roleId: number;
  declare pageId: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt: Date;
  declare deletedBy: number;

  validateModel() {
    if (typeof this.roleId !== 'number' || isNaN(this.roleId)) {
      throw new Error('roleId must be a valid number');
    }
    if (typeof this.pageId !== 'number' || isNaN(this.pageId)) {
      throw new Error('pageId must be a valid number');
    }
  }
}

export function initRolePageModel(sequelize: Sequelize) {
  RolePage.init(
    {
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      pageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    },
    BaseModel.applyBaseOptions({
      sequelize,
      tableName: 'rolePage'
    })
  );
}
