function subtotalFormula() {
	for (i = 0; i < this.purchases.length; i++) {
		var subtotal = subtotal + this.purchases[i].price;
		return Number(subtotal);
	}
};
function finalPriceForumla() {
	if (this.subtotal >= 200) {
		var finalPrice = (this.subtotal * .85);
		return Number(finalPrice);
	}
};
