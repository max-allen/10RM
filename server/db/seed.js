const db = require('../db');
const {User, Order, Review, Product} = require('./models');

const users = [
	{
		firstName: 'Jerry',
		lastName: 'West',
		email: 'jerry.west@gmail.com',
		password: 'cats',
	}, {
		firstName: 'Paul',
		lastName: 'Marks',
		email: 'paul.marks@gmail.com',
		password: 'cats',
	}, {
		firstName: 'Sam',
		lastName: 'Adams',
		email: 'sam.adams@gmail.com',
		password: 'cats',
	}, {
		firstName: 'Kyle',
		lastName: 'Smith',
		email: 'kyle.smith@gmail.com',
		password: 'cats',
	},
];

const products = [
	{
		name: 'glutathione',
		category: 'supplements',
		description: 'A master antioxidant.',
		price: 60,
		inventory: 100,
		photo: 'https://www.bulletproof.com/media/catalog/product/cache/1/thumbnail/375x/040ec09b1e35df139433887a97daa66f/b/u/bulletproof_supplements_glutathione_force_product_1.png',
	},
	{
		name: 'charcoal',
		category: 'supplements',
		description: '1000mg of activated charcoal for detox.',
		price: 20,
		inventory: 250,
		photo: 'https://www.bulletproof.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/u/bulletproof_supplements_coconut_charcoal_product_1_1.png',
	},
];

const orders = [
	{items: [{product: 'charcoal', price: 20, quantity: 1}], status: 'received'},
	{items: [{product: 'glutathione', price: 60, quantity: 3}], status: 'processed'},
	{items: [{product: 'charcoal', price: 20, quantity: 2}], status: 'shipped'},
	{items: [{product: 'glutathione', price: 60, quantity: 1}], status: 'delivered'},
];

const reviews = [
	{score: '0', body: 'this wasnt my favorite!'},
	{score: '1', body: 'I liked the last version.'},
	{score: '2', body: 'This needs something.'},
	{score: '3', body: 'Decent product. Id buy again.'},
	{score: '4', body: 'Pretty Good!'},
	{score: '5', body: 'Best thing Ive ever tried.'},
];

Promise.all(orders.map((order) => {
	Order.create(order);
}));

// const seed = () => {
// 	Promise.all(users.map((user) =>
// 		User.create(user))
// 	).then(() =>
// 	Promise.all(products.map((product) =>
// 		Product.create(product))
// 	)).then(() =>
// 	Promise.all(orders.map((order) =>
// 		Order.create(order))
// 	)).then(() =>
// 	Promise.all(reviews.map((review) =>
// 		Review.create(review))
// 	));
// };

// db.sync({force: true})
//   .then(() => {
// 	console.log('Seeding DB');
//     return seed();
//   })
//   .then(() => {
//     db.close();
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err.stack);
//     process.exit(1);
//   });
