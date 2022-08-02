'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('ListUsers', [{
                userId: 1,
                todoId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 1,
                todoId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                todoId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                todoId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                todoId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('ListUsers', null, {});
    }
};