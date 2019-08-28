import {mount} from '@vue/test-utils'
import Item from "../../../../src/components/cart/Item";

describe("component -> Item.vue", () => {
    const wrapper = mount(Item);

    // check attributes
    it('renders the correct attributes', () => {
        expect(wrapper.attributes('id')).toBe('item');
    })

    // check class
    it('renders the correct attributes', () => {
        expect(wrapper.classes()).toContain('item');
    })

})
