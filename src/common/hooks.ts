/**
 * Global Sequelize model hooks for auditing and validation.
 */
export const defaultHooks = {
  beforeCreate(instance: any, options: any) {
    if (typeof instance.validateModel === 'function') {
      instance.validateModel();
    }

    if (options?.userId) {
      instance.setDataValue('createdBy', options.userId);
      instance.setDataValue('updatedBy', options.userId); // Also set on create
    }
  },

  beforeUpdate(instance: any, options: any) {
    if (options?.userId) {
      instance.setDataValue('updatedBy', options.userId);
    }
  },

  beforeDestroy(instance: any, options: any) {
    if (options?.userId) {
      instance.setDataValue('deletedBy', options.userId);
    }
  },
};
