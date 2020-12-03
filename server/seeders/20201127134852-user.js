"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Povilas Phewphewphew",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Matas The LOL Guy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jonas Brothers",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
