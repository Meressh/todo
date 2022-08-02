'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('todos', [{
                title: "This is title 1",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "This is title 2",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "This is title 3",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('todos', null, {});
    }
};