import { BaseAttributes, BaseCreationAttributes } from '../common/base.interface';

export interface UserAttributes extends BaseAttributes {
  email: string;
  name: string;
}

export interface UserCreationAttributes extends BaseCreationAttributes {
  email: string;
  name: string;
}
