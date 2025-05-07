import { DataTypes, Sequelize } from 'sequelize';
import { BaseAttributes, BaseCreationAttributes } from '../common/base.interface';
import { BaseModel } from '../common/base.model';
import { requireNonEmptyString } from '../common/validation';

export interface RoleAttributes extends BaseAttributes {
  name: string;
  description?: string | null;
  type?: string | null;
}

export interface RoleCreationAttributes extends BaseCreationAttributes {
  name: string;
  description?: string | null;
  type?: string | null;
}

export class Role
  extends BaseModel<RoleAttributes, RoleCreationAttributes>
  implements RoleAttributes {
  declare id: number;
  declare name: string;
  declare description: string | null;
  declare type: string | null;
  declare createdAt: Date;
  declare deletedAt: Date;
  declare deletedBy: number;

  validateModel() {
    requireNonEmptyString('name', this.name);
  }
}

export function initRoleModel(sequelize: Sequelize) {
  Role.init(
    {
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
      },
    },
    BaseModel.applyBaseOptions({ sequelize, tableName: 'roles' })
  );
}
