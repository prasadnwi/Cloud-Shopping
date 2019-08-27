import Vue from "vue";
import Item from "../../../../src/components/cart/Item";
import {CART} from "../../../../src/constants/cart";

describe("component -> cart -> item", () => {
    let cmp, vm;

    beforeEach(() => {
        cmp = Vue.extend(Item);
        vm = new cmp({
            data: {
                price: 100,
                currency: CART.CURRENCY
            }
        }).$mount();
    });

    it('equals price to 100', () => {
        expect(vm.price).toEqual(100);
    });
    it(`equals currency to ${CART.CURRENCY}`, () => {
        expect(vm.currency).toEqual(CART.CURRENCY);
    });
});
