const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        validate: {
            min: 0,
        },
    },
    inventory: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            min: 0,
        },
    },
    photo: {
        type: Sequelize.STRING,
        validate: {
            isUrl: true,
        },
    },
});

module.exports = Product;
