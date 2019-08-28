/*
@desc method here calculate total price of a item
@params Object $item - list of item
@return total price for a item
 */
export const getAItemPrice = (item = 0) => {

    let amount = 0;
    if (item.count && item.unitPrice) {
        amount = item.count * item.unitPrice
    }
    return amount;
}
/*
@desc method here calculate total price for given list of items
@params Array $items
@return total price
 */
export const totalprice = (items = []) => {
    let total = 0;
    items.map((item) => {
        total = total + getAItemPrice(item);
    });

    return total;
}

/*
@desc method here calculate discount price for given item
@params Number $totalAmount - total amount
@returns calculated discount
 */
export const discountPrice = (totalAmount = 0) => {
    return (500 * 0.02 * (Math.floor(totalAmount / 500)));
}

/*
@desc method here calculate tax price for given price
@params Number $totalAmount - total amount, $taxPercentage - percentage which should apply
 */
export const calculateTotalTax = (totalAmount = 0, taxPercentage = 0) => {
    return totalAmount * taxPercentage;
};

/*
@desc method here calculate final amount for given total amount, tax and discount
@params Number $totalAmount - total amount, Number $tax - tax amount which should apply, Number $discount - discount amount which should apply
 */
export const calculateFinalAmount = (totalAmount = 0, tax = 0, discount = 0) => {
    return (totalAmount + tax - discount);
}
