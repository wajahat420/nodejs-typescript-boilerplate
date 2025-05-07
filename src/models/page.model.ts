import { DataTypes, Sequelize } from 'sequelize';
import { BaseAttributes, BaseCreationAttributes } from '../common/base.interface';
import { BaseModel } from '../common/base.model';
import { requireNonEmptyString } from '../common/validation';

export interface PageAttributes extends BaseAttributes {
  name: string;
  path?: string | null;
  moduleId: number;
}

export interface PageCreationAttributes extends BaseCreationAttributes {
  name: string;
  path?: string | null;
  moduleId: number;
}

export class Page
  extends BaseModel<PageAttributes, PageCreationAttributes>
  implements PageAttributes {
  declare id: number;
  declare name: string;
  declare path: string | null;
  declare moduleId: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt: Date;
  declare deletedBy: number;

  validateModel() {
    requireNonEmptyString('name', this.name);
    if (typeof this.moduleId !== 'number' || isNaN(this.moduleId)) {
      throw new Error('moduleId must be a valid number');
    }
  }
}

export function initPageModel(sequelize: Sequelize) {
  Page.init(
    {
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
      },
      parentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    BaseModel.applyBaseOptions({ sequelize, tableName: 'pages' })
  );
}
