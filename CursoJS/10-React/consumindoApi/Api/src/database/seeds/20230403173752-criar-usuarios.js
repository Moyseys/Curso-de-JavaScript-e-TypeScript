/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'admin',
          email: 'admin@email.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'sla',
          email: 'sla@email.com',
          password_hash: await bcryptjs.hash('sla', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

};
