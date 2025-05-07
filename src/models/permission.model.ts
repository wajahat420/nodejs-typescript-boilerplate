import { DataTypes, Sequelize } from 'sequelize';
import { BaseAttributes, BaseCreationAttributes } from '../common/base.interface';
import { BaseModel } from '../common/base.model';

export interface PermissionAttributes extends BaseAttributes {
  rolePageId: number;
  actionId: number;
}

export interface PermissionCreationAttributes extends BaseCreationAttributes {
  rolePageId: number;
  actionId: number;
}

export class Permission
  extends BaseModel<PermissionAttributes, PermissionCreationAttributes>
  implements PermissionAttributes {
  declare rolePageId: number;
  declare actionId: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt: Date;
  declare deletedBy: number;

  validateModel() {
    if (typeof this.rolePageId !== 'number' || isNaN(this.rolePageId)) {
      throw new Error('rolePageId must be a valid number');
    }
    if (typeof this.actionId !== 'number' || isNaN(this.actionId)) {
      throw new Error('actionId must be a valid number');
    }
  }
}

export function initPermissionModel(sequelize: Sequelize) {
  Permission.init(
    {
      rolePageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      actionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    },
    BaseModel.applyBaseOptions({
      sequelize,
      tableName: 'permission',
    })
  );
}
