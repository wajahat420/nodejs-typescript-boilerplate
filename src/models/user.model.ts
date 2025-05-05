import { DataTypes, Sequelize } from 'sequelize';
import { BaseModel } from '../common/base.model';
import { requireNonEmptyString } from '../common/validation';
import { UserAttributes, UserCreationAttributes } from '../interfaces/user.interface';

export class User
  extends BaseModel<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  declare id: number;
  declare email: string;
  declare name: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt: Date;
  declare deletedBy: number;

  /** model‑level validation hook calls this */
  validateModel() {
    requireNonEmptyString('email', this.email);
    requireNonEmptyString('name', this.name);
    // you could add email‑format check here, too
  }
}

export function initUserModel(sequelize: Sequelize) {
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Sequelize will add createdAt, updatedAt, deletedAt
    },
    BaseModel.applyBaseOptions({ sequelize, tableName: 'users' })
  );
}
