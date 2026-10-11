/**
 * Calculates the total price after applying a bulk discount based on quantity.
 * @param {number} quantity - The total number of items purchased.
 * @param {number} pricePerItem - The cost of a single line item.
 * @returns {number} The finalized discounted total price.
 */
function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;

    for (let i = 0; i < quantity; i++) {
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}

module.exports = calculateDiscountedPrice;
