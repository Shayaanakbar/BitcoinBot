// initialize Sequilize
const Sequilize = require('sequelize');

// Sequilize set up for postgres
module.exports = new Sequilize('bitcoindb', 'postgres', 'nu40mpseofa', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5431',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
