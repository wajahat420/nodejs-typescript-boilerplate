import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize
} from 'sequelize';
import { BaseAttributes } from './base.interface';
import { defaultHooks } from './hooks';

export abstract class BaseModel<
  TModelAttributes extends InferAttributes<Model>,
  TCreationAttributes extends InferCreationAttributes<Model>
>
  extends Model<TModelAttributes, TCreationAttributes>
  implements BaseAttributes {
  declare id: CreationOptional<number>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date>;
  declare deletedBy: CreationOptional<number>;

  /**  
   * Call this from each concrete `init(...)`:
   */
  public static applyBaseOptions(options: {
    sequelize: Sequelize;
    tableName: string;
  }) {
    return {
      ...options,
      timestamps: true,
      paranoid: true,
      hooks: defaultHooks,
    };
  }
}
