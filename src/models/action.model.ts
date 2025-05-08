import { DataTypes, Sequelize } from 'sequelize';
import { BaseAttributes, BaseCreationAttributes } from '../common/base.interface';
import { BaseModel } from '../common/base.model';
import { requireNonEmptyString } from '../common/validation';

export interface ActionAttributes extends BaseAttributes {
  name: string;
}

export interface ActionCreationAttributes extends BaseCreationAttributes {
  name: string;
}

export class Action
  extends BaseModel<ActionAttributes, ActionCreationAttributes>
  implements ActionAttributes {
  declare id: number;
  declare name: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt: Date;
  declare deletedBy: number;

  validateModel() {
    requireNonEmptyString('name', this.name);
  }
}

export function initActionModel(sequelize: Sequelize) {
  Action.init(
    {
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    BaseModel.applyBaseOptions({ sequelize, tableName: 'actions' })
  );
}
