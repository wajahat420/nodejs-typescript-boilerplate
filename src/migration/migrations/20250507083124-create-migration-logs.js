module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MigrationLogs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.STRING,  // The local IP of the machine running the migration
        allowNull: true,         // Allow null in case it's not available
      },
      fileName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('MigrationLogs');
  },
};
