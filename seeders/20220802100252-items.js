'use strict';

const today = new Date();
const deadline = new Date().setDate(today.getDate() + 30);
const dt = new Date(deadline);
const formatDate = dt.getFullYear() + '-' + ((dt.getMonth() > 9) ? '' : '0') + (dt.getMonth() + 1) + '-' + dt.getDate() + ' ' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds();

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('items', [{
                title: "This is title item 1",
                text: "This is text/description item 1",
                deadline: formatDate,
                userId: 1,
                type: "active",
                todoId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "This is title item 2",
                text: "This is text/description item 2",
                deadline: formatDate,
                userId: 1,
                type: "active",
                todoId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "This is title item 3",
                text: "This is text/description item 3",
                deadline: formatDate,
                userId: 1,
                type: "active",
                todoId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "This is title item 4",
                text: "This is text/description item 4",
                deadline: formatDate,
                userId: 2,
                type: "active",
                todoId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "This is title item 5",
                text: "This is text/description item 5",
                deadline: formatDate,
                userId: 2,
                type: "active",
                todoId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "This is title item 6",
                text: "This is text/description item 6",
                deadline: formatDate,
                userId: 2,
                type: "active",
                todoId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "This is title item 7",
                text: "This is text/description item 7",
                deadline: formatDate,
                userId: 2,
                type: "active",
                todoId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('items', null, {});
    }
};