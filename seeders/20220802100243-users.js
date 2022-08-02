'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users', [{
                email: 'example@example.com',
                password: bcrypt.hashSync('marek', bcrypt.genSaltSync(10)),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                email: 'marek@marek.com',
                password: bcrypt.hashSync('marek', bcrypt.genSaltSync(10)),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                email: 'testing@marek.com',
                password: bcrypt.hashSync('marek', bcrypt.genSaltSync(10)),
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('users', null, {});
    }
};