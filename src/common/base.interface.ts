export interface BaseAttributes {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;      // Sequelize paranoid timestamp
  deletedBy?: number;    // user ID who soft‑deleted
}

export interface BaseCreationAttributes {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  deletedBy?: number;
}
