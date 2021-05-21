const Sequilize = require('sequelize');
const db = require('../db');

const Alert = db.define('alert', {
    id: {
        type: Sequilize.NUMBER,
    },
    alert: {
        type: Sequilize.NUMBER,
    },
    createdAt: {
        type: Sequilize.DATE,
    },
})

module.exports = Alert;
