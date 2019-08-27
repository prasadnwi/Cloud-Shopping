import Vue from "vue";
import Item from "../../../../src/components/itemList/Item";

describe("component -> itemList -> Item", () => {
    let cmp, vm;
    const item = {
        name: 'Apple',
        price: 100,
        count: 2
    }

    beforeEach(() => {
        cmp = Vue.extend(Item);
        vm = new cmp({
            data: {
                name: item.name,
                price: item.price,
                count: item.count
            }
        }).$mount();
    });

    it(`equals name to ${item.name}`, () => {
        expect(vm.name).toEqual(item.name);
    });
    it(`equals price to ${item.price}`, () => {
        expect(vm.price).toEqual(item.price);
    });
    it(`equals count to ${item.count}`, () => {
        expect(vm.count).toEqual(item.count);
    });
});
