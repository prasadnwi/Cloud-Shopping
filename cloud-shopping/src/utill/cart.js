export const calculateAItemPrice = function (item) {

    let amount = 0;
    if (item.count && item.unitPrice) {
        amount = item.count * item.unitPrice
    }
    return amount;
}
