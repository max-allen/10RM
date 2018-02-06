/* global describe beforeEach it */

const {expect} = require('chai');
const db = require('../index');
const Product = db.model('product');

describe('Product model', () => {
    beforeEach(() => {
        return db.sync({force: true});
    });

    let prod;
    beforeEach(() => {
    	prod = Product.build({
    		name: "GForceX",
    		category: "supplement",
    		description: "Amazing Glutathione!",
    		price: 70,
    		inventory: 20,
    		photo: "https://www.bulletproof.com/media/catalog/product/cache/1/thumbnail/375x/040ec09b1e35df139433887a97daa66f/b/u/bulletproof_supplements_glutathione_force_product_1.png"
    		});
    	});

describe('Product', () => {
	it('includes all attributes with accurate components', () => {
		return prod.save()
		.then((productEntry) => {
			expect(productEntry.name).to.equal("GForceX")
			expect(productEntry.category).to.equal("supplement")
			expect(productEntry.description).to.equal("Amazing Glutathione!")
			expect(productEntry.price).to.equal(70)
			expect(productEntry.inventory).to.equal(20)
			expect(productEntry.photo).to.equal("https://www.bulletproof.com/media/catalog/product/cache/1/thumbnail/375x/040ec09b1e35df139433887a97daa66f/b/u/bulletproof_supplements_glutathione_force_product_1.png")
		});

	});
});
});
