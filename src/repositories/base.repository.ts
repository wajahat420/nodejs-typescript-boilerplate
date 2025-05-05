import {
  CreateOptions,
  DestroyOptions,
  FindOptions,
  Model,
  ModelStatic,
  UpdateOptions
} from 'sequelize';
import { MakeNullishOptional } from 'sequelize/types/utils';

export class BaseRepository<
  TModel extends Model,
  TAttributes extends {} = any
> {
  // protected model: ModelStatic<TModel>;

  private model: ModelStatic<TModel>;

  constructor(model: ModelStatic<TModel>) {
    this.model = model;
  }
  // constructor(model: ModelStatic<TModel>) {
  //   this.model = model;
  // }

  async getById(id: number): Promise<TModel | null> {
    return this.model.findByPk(id);
  }

  async getAll(options?: FindOptions<TAttributes>): Promise<TModel[]> {
    return this.model.findAll(options);
  }

  async create(
    data: MakeNullishOptional<TModel['_creationAttributes']>,  // This is the data you're passing for creation
    options?: CreateOptions<TAttributes>  // These are additional options that may apply
  ): Promise<TModel> {
    return this.model.create(data, options);  // This is Sequelize's create method
  }

  async update(
    id: number,
    updates: Partial<TAttributes>,
    options?: UpdateOptions<TAttributes>
  ): Promise<[affectedCount: number]> {
    return this.model.update(updates, {
      where: { id } as any,
      ...options,
    });
  }

  async delete(
    id: number,
    options?: DestroyOptions<TAttributes>
  ): Promise<number> {
    return this.model.destroy({
      where: { id } as any,
      ...options,
    });
  }
}
