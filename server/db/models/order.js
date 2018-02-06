const Sequelize = require('sequelize');
const db = require('./db');

const Order = db.define('order', {
	date: {
		type: Sequelize.DATE,
	},
	items: {
		type: Sequelize.ARRAY(Sequelize.JSON),
		allowNull: false,
	},
	subtotal: {
		type: Sequelize.VIRTUAL,
		get: function() {
			if (this.items.length) {
				return this.items.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0);
			} else {
				return 0;
			}
		},
	},
	status: {
		type: Sequelize.ENUM('received', 'processed', 'shipped', 'delivered'),
		defaultValue: 'received',
	},
});

module.exports = Order;

