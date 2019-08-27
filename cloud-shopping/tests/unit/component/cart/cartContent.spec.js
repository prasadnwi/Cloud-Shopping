import Vue from "vue";
import CartContent from "../../../../src/components/cart/CartContent";
import {CART} from "../../../../src/constants/cart";

describe("component -> cart -> CartContent", () => {
    let cmp, vm;

    beforeEach(() => {
        cmp = Vue.extend(CartContent);
        vm = new cmp({
            data: {
                currency: CART.CURRENCY
            }
        }).$mount();
    });

    it(`equals currency to ${CART.CURRENCY}`, () => {
        expect(vm.currency).toEqual(CART.CURRENCY);
    });
});
