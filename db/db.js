// initialize Sequilize
const Sequilize = require('sequelize');

module.exports = new Sequilize('bitcoindb', 'postgres', 'nu40mpseofa', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
