const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
	score: {
		type: Sequelize.ENUM(0, 1, 2, 3, 4, 5),
		allowNull: false,
	},
	body: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
});

module.exports = Review;
