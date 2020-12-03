"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Todos", [
      {
        title: "Buy milk",
        isCompleted: false,
        image:
          "https://media3.giphy.com/media/8rEWYweSplFGF7Z8sd/100.gif?cid=59758c476e9a9a00fc376e0fd5368041cabad1e3181f2672&rid=100.gif",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Do homework",
        isCompleted: false,
        image:
          "https://media2.giphy.com/media/Cw7zcoURGz4xa/100.gif?cid=59758c4721dad5c67eebadd7d0c0f7c24933fee4b5037839&rid=100.gif",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Learn magic",
        isCompleted: true,
        image:
          "https://media0.giphy.com/media/xUA7aUbGMWiKOdkYzC/100.gif?cid=59758c4752e71e5f20c72dcb6097ce210aa3d6da219849a8&rid=100.gif",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Buy chocolate",
        isCompleted: false,
        image:
          "https://media1.giphy.com/media/pQa4kpEw1XeBq/100.gif?cid=59758c47046555c56222c415a51b0198a8b61960fcce5926&rid=100.gif",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Eat broccolli",
        isCompleted: true,
        image:
          "https://media3.giphy.com/media/sMFZeJU5yThPq/100.gif?cid=59758c47b8321e1240aa8439571245a34eeccf5674974aef&rid=100.gif",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Buy a dragon",
        isCompleted: false,
        image:
          "https://media0.giphy.com/media/ZO85UL94pwTm0/100.gif?cid=59758c47a301bc6ea56f40cd342859e6081a834b8a3bc0ca&rid=100.gif",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Buy a skanuka",
        isCompleted: false,
        image:
          "https://media1.giphy.com/media/pQa4kpEw1XeBq/100.gif?cid=59758c47046555c56222c415a51b0198a8b61960fcce5926&rid=100.gif",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Todos", null, {});
  },
};
