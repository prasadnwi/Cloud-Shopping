export const getAItemPrice = (item) => {

    let amount = 0;
    if (item.count && item.unitPrice) {
        amount = item.count * item.unitPrice
    }
    return amount;
}

export const totalprice = (items = []) => {
    let total = 0;
    items.map((item) => {
        total = total + getAItemPrice(item);
    });

    return total;
}

export const discountPrice = (totalAmount = 0) => {
    return (500 * 0.02 * (Math.floor(totalAmount / 500)));
}

export const calculateTotalTax = (totalAmount = 0, taxPercentage = 0) => {
    return totalAmount * taxPercentage;
};

export const calculateFinalAmount = (totalAmount = 0, tax = 0, discount = 0) => {
    return (totalAmount + tax - discount);
}
